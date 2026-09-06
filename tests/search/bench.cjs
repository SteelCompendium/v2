#!/usr/bin/env node
/*
 * bench.cjs — replay a search worker against a built search_index.json and
 * score it (SC-306). Engine-agnostic: it speaks mkdocs-material's worker
 * message protocol (0 setup / 1 ready / 2 query / 3 result), so it drives
 * Material's own worker and ours (docs/javascripts/sc-search-worker.js) alike.
 *
 * Usage (from v2/):
 *   node tests/search/bench.cjs                       # our worker vs site/search/search_index.json
 *   node tests/search/bench.cjs --worker site/assets/javascripts/workers/search.*.min.js
 *   node tests/search/bench.cjs --index https://steelcompendium.io/v2/search/search_index.json
 *   node tests/search/bench.cjs --gate                # exit 1 below the spec thresholds
 *
 * Sweep: every Browse page whose title is unique is queried by its exact title
 * (deterministic sample, default 500); we record where that page ranks.
 * Named: the spec's regression queries with their expected top pages.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
const WORKER = path.resolve(opt("--worker", "docs/javascripts/sc-search-worker.js"));
const INDEX = opt("--index", "site/search/search_index.json");
const SAMPLE = parseInt(opt("--sample", "500"), 10);
const GATE = args.includes("--gate");
const THRESHOLD = 0.95;

const NAMED = [
  { q: "fury", want: ["Browse/class/fury/"], top: 1 },
  { q: "brutal slam", want: ["Browse/feature/ability/fury/level-1/brutal-slam/"], top: 1 },
  { q: "goblin warrior", want: ["Browse/monster/goblin/goblin-warrior/"], top: 1 },
  { q: "fog of war", want: ["Browse/feature/ability/tactician/level-2/fog-of-war/"], top: 1 },
  { q: "to the death", want: ["Browse/feature/ability/fury/level-1/to-the-death/"], top: 1 },
  { q: "free strike", want: ["Browse/feature/common/main-actions/free-strike/"], top: 1 },
  { q: "hide", want: ["Browse/skill/intrigue/hide/", "Browse/feature/common/maneuvers/hide/"], top: 2 },
  { q: "knockback", want: ["Browse/feature/ability/common/knockback/", "Browse/feature/common/maneuvers/knockback/"], top: 2 },
];

async function loadIndex(src) {
  if (/^https?:/.test(src)) return (await fetch(src)).json();
  return JSON.parse(fs.readFileSync(src, "utf8"));
}

// Worker shim: the worker file runs in this process with `self`,
// addEventListener, postMessage and importScripts stubbed.
function loadWorker(file) {
  let handler = null;
  const out = [];
  global.self = global;
  global.addEventListener = (_t, h) => { handler = h; };
  global.postMessage = (m) => out.push(m);
  global.location = { href: "https://example.invalid/v2/javascripts/" + path.basename(file) };
  global.importScripts = (...files) => {
    for (const f of files) {
      const mod = require(path.resolve(path.dirname(file), f));
      if (/minisearch/i.test(f)) global.MiniSearch = mod.default || mod;
      if (/sc-search-core/.test(f)) global.SCSearchCore = mod;
    }
  };
  // eslint-disable-next-line no-eval
  eval(fs.readFileSync(file, "utf8"));
  if (!handler) throw new Error("worker registered no message handler");
  const send = async (msg) => {
    out.length = 0;
    await handler({ data: msg });
    while (!out.length) await new Promise((r) => setTimeout(r, 5));
    return out[0];
  };
  return { send };
}

const strip = (s) => String(s || "").replace(/<[^>]+>/g, "").trim();
const pageOf = (grp) => (grp.find((d) => !d.location.includes("#")) || grp[0]).location;

async function main() {
  const idx = await loadIndex(INDEX);
  const w = loadWorker(WORKER);
  const t0 = Date.now();
  const ready = await w.send({ type: 0, data: { config: idx.config, docs: idx.docs, options: { suggest: true } } });
  if (ready.type !== 1) throw new Error("worker did not report ready");
  console.log(`worker: ${path.relative(process.cwd(), WORKER)}  index: ${INDEX}  docs: ${idx.docs.length}  setup: ${Date.now() - t0} ms`);

  const query = async (q) => (await w.send({ type: 2, data: q })).data.items;

  // Sweep
  const pages = idx.docs.filter((d) => !d.location.includes("#") && d.location.startsWith("Browse/") && !d.location.endsWith("/index/"));
  const count = {};
  for (const p of pages) { const t = strip(p.title).toLowerCase(); count[t] = (count[t] || 0) + 1; }
  const uniq = pages.filter((p) => count[strip(p.title).toLowerCase()] === 1);
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const sample = uniq.slice().sort(() => rnd() - 0.5).slice(0, SAMPLE);
  const hist = { 1: 0, "2-3": 0, "4-10": 0, ">10": 0, missing: 0 };
  const byType = {};
  const misses = [];
  for (const p of sample) {
    const q = strip(p.title);
    const items = await query(q);
    const rank = items.findIndex((g) => pageOf(g) === p.location) + 1;
    hist[rank === 0 ? "missing" : rank === 1 ? 1 : rank <= 3 ? "2-3" : rank <= 10 ? "4-10" : ">10"]++;
    const type = p.location.split("/").slice(1, 3).join("/");
    byType[type] = byType[type] || { n: 0, top1: 0 };
    byType[type].n++;
    if (rank === 1) byType[type].top1++;
    else misses.push({ q, rank, loc: p.location, top: items[0] ? pageOf(items[0]) : "-" });
  }
  const top1 = hist[1] / sample.length;
  console.log(`\nexact-title sweep (${sample.length} unique-title pages): #1 ${(top1 * 100).toFixed(1)}%  ` +
    Object.entries(hist).map(([k, v]) => `${k}: ${v}`).join("  "));
  const abil = byType["feature/ability"];
  if (abil) console.log(`feature/ability: ${abil.top1}/${abil.n} at #1`);
  misses.sort((a, b) => b.rank - a.rank);
  for (const m of misses.slice(0, 15)) console.log(`  ${String(m.rank || "-").padStart(3)}  "${m.q}"  [${m.loc}]  top=${m.top}`);

  // Named
  console.log("\nnamed queries:");
  let namedOK = true;
  for (const n of NAMED) {
    const items = await query(n.q);
    const tops = items.slice(0, n.top).map(pageOf);
    const hit = tops.some((t) => n.want.includes(t));
    namedOK = namedOK && hit;
    console.log(`  ${hit ? "ok  " : "MISS"} "${n.q}" → ${items[0] ? pageOf(items[0]) : "-"}`);
  }

  if (GATE) {
    const pass = top1 >= THRESHOLD && namedOK;
    console.log(`\ngate: ${pass ? "PASS" : "FAIL"} (need #1 ≥ ${THRESHOLD * 100}% and all named queries)`);
    process.exit(pass ? 0 : 1);
  }
}

main().catch((e) => { console.error(e); process.exit(2); });
