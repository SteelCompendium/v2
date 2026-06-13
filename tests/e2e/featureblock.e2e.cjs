/*
 * featureblock.e2e.cjs — e2e for the .fb-wrap "Forged Band" card + the
 * data-fb-featstyle / data-fb-stats preferences. Asserts COMPUTED styles
 * (not just attributes) — the 2026-06-11 regression class.
 *
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/featureblock.e2e.cjs
 *
 * Env: E2E_BASE (default http://127.0.0.1:8124/), BRAVE_PATH (/opt/brave.com/brave/brave).
 */
"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");

function resolvePlaywrightCore() {
  try { return require("playwright-core"); } catch (_) {}
  try { return require("playwright"); } catch (_) {}
  const npx = path.join(os.homedir(), ".npm", "_npx");
  let best = null, bestVer = "";
  try {
    for (const hash of fs.readdirSync(npx)) {
      const dir = path.join(npx, hash, "node_modules", "playwright-core");
      const pkg = path.join(dir, "package.json");
      if (fs.existsSync(pkg)) {
        const ver = JSON.parse(fs.readFileSync(pkg, "utf8")).version || "";
        if (ver > bestVer) { bestVer = ver; best = dir; }
      }
    }
  } catch (_) {}
  if (best) return require(best);
  throw new Error("playwright-core not found (install it, or `npx playwright` once)");
}

const BASE = process.env.E2E_BASE || "http://127.0.0.1:8124/";
const BRAVE = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";
const MALICE = BASE + "Browse/monster/elementals/elemental-malice/";
const TERRAIN = BASE + "Browse/dynamic-terrain/supernatural-objects/the-black-obelisk/";

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}
function alphaNear(rgba, expected) {
  const m = /^rgba\(0, 0, 0, ([\d.]+)\)$/.exec(rgba || "");
  return !!m && Math.abs(parseFloat(m[1]) - expected) < 0.003;
}
const FEAT_PROBE = (idx) => {
  const f = document.querySelectorAll(".fb__feats > .fb__feat")[idx];
  if (!f) return { missing: true };
  const s = getComputedStyle(f);
  const b = getComputedStyle(f, "::before");
  return {
    borderLeftWidth: s.borderLeftWidth, borderLeftStyle: s.borderLeftStyle,
    background: s.backgroundColor,
    beforeDisplay: b.display, beforeOpacity: b.opacity, beforeBlend: b.mixBlendMode
  };
};

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  // ---- malice featureblock renders ----
  await page.goto(MALICE, { waitUntil: "networkidle" });
  await page.waitForSelector(".fb-wrap");
  check("malice: data-role=malice", await page.evaluate(() =>
    document.querySelector(".fb-wrap").getAttribute("data-role") === "malice"));
  check("malice: card carries its own name (page H1 hidden)", await page.evaluate(() => {
    const h1 = document.querySelector(".md-typeset > h1:first-child");
    return !h1 || getComputedStyle(h1).display === "none";
  }));
  check("malice: head band tints toward the role color", await page.evaluate(() => {
    const bg = getComputedStyle(document.querySelector(".fb__head")).backgroundImage;
    return bg && bg.indexOf("gradient") !== -1;
  }));
  check("default: data-fb-featstyle=card", await page.evaluate(() =>
    document.documentElement.getAttribute("data-fb-featstyle") === "card"));

  // force dark (slate) for the dark-tint check
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "slate"));
  let f = await page.evaluate(FEAT_PROBE, 0);
  check("card: 3px solid action-colored left border", f.borderLeftWidth === "3px" && f.borderLeftStyle === "solid",
    f.borderLeftWidth + " " + f.borderLeftStyle);
  check("card: tinted bg (dark rgba(0,0,0,.16))", alphaNear(f.background, 0.16), f.background);
  check("card: no separator/watermark pseudo", f.beforeDisplay === "none", f.beforeDisplay);

  // light-scheme card tint (dead scheme-first selector regression)
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "default"));
  f = await page.evaluate(FEAT_PROBE, 0);
  check("card/light: light tint (rgba(0,0,0,.022))", alphaNear(f.background, 0.022), f.background);
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "slate"));

  // hover guard (kill rule floor)
  await page.hover(".fb__feats > .fb__feat:first-of-type");
  const hov = await page.evaluate(() => {
    const el = document.querySelector(".fb__feats > .fb__feat");
    const s = getComputedStyle(el);
    return { transform: s.transform, boxShadow: s.boxShadow };
  });
  check("card: no hover lift", hov.transform === "none" && hov.boxShadow === "none", hov.transform + " / " + hov.boxShadow);

  // ---- flip to flat via the drawer ----
  await page.click("#sc-settings-toggle");
  await page.evaluate(() => {
    const s = document.getElementById("set-fb-featstyle");
    s.value = "flat"; s.dispatchEvent(new Event("change", { bubbles: true }));
  });
  check("flat: attribute flips", await page.evaluate(() =>
    document.documentElement.getAttribute("data-fb-featstyle") === "flat"));
  check("flat: stored in prefs.featureblock.featstyle", await page.evaluate(() =>
    JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).featureblock.featstyle === "flat"));
  // second feature carries the separator (has a `+` sibling)
  const second = await page.evaluate(FEAT_PROBE, 1);
  check("flat: separator pseudo visible (display/opacity/blend reclaimed)",
    second.beforeDisplay === "block" && second.beforeOpacity === "1" && second.beforeBlend === "normal",
    second.beforeDisplay + "/" + second.beforeOpacity + "/" + second.beforeBlend);
  check("flat: card chrome gone (no left border, no bg)",
    (second.borderLeftStyle === "none" || second.borderLeftWidth === "0px") && second.background === "rgba(0, 0, 0, 0)",
    second.borderLeftStyle + " " + second.borderLeftWidth + " " + second.background);
  const first = await page.evaluate(FEAT_PROBE, 0);
  check("flat: FIRST feature shows no watermark (kill rule intact)", first.beforeDisplay === "none", first.beforeDisplay);

  // ---- stat line pref on the terrain page ----
  await page.goto(TERRAIN, { waitUntil: "networkidle" });
  await page.waitForSelector(".fb-wrap");
  check("terrain: data-role is the combat role (not malice)", await page.evaluate(() => {
    const r = document.querySelector(".fb-wrap").getAttribute("data-role");
    return r && r !== "malice" && r !== "feature";
  }));
  check("terrain: stats block present", await page.evaluate(() => !!document.querySelector(".fb__stats .fb__stat")));
  const gridDisplay = await page.evaluate(() => getComputedStyle(document.querySelector(".fb__stats")).display);
  check("stats default grid → display:grid", gridDisplay === "grid", gridDisplay);
  await page.click("#sc-settings-toggle");
  await page.evaluate(() => {
    const s = document.getElementById("set-fb-stats");
    s.value = "ledger"; s.dispatchEvent(new Event("change", { bubbles: true }));
  });
  const ledgerDisplay = await page.evaluate(() => getComputedStyle(document.querySelector(".fb__stats")).display);
  check("stats ledger → display:flex (visible reflow)", ledgerDisplay === "flex", ledgerDisplay);

  await page.evaluate(() => localStorage.removeItem("mkdocs:fontPrefs"));
  await ctx.close();
  await browser.close();
  console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error("SCRIPT ERROR:", e.stack || e.message); process.exit(2); });
