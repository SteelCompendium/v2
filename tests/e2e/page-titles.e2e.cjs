/*
 * page-titles.e2e.cjs — regression test for the H1 hide rules.
 * Leaf card pages hide the duplicate markdown H1 (the card renders the name);
 * class pages and Read chapters have no card-head replacement and MUST keep
 * their H1. See workspace docs/superpowers/specs/2026-07-01-v2-ux-analysis.md §2.2.
 *
 * Like settings-panel.e2e.cjs, drives the locally installed Brave via
 * playwright-core + executablePath (Playwright MCP / chrome channel is broken here).
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/page-titles.e2e.cjs
 *
 * Env overrides: E2E_BASE (default http://127.0.0.1:8124/),
 *                BRAVE_PATH (default /opt/brave.com/brave/brave).
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
  throw new Error("playwright-core not found");
}

const BASE = process.env.E2E_BASE || "http://127.0.0.1:8124/";
const BRAVE = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";

const CASES = [
  // Class pages gained a .sc-classhead landing card (steel-etl class_page.go);
  // the card head is the reader-facing title, so the markdown H1 hides again —
  // by the same h1+hr+card adjacency rule (steel-class.css).
  { url: "Browse/class/fury/",                                   visible: false },
  { url: "Read/heroes/classes/",                                 visible: true  },
  { url: "Browse/feature/ability/fury/level-1/brutal-slam/",     visible: false },
  { url: "Browse/monster/goblin/goblin-warrior/",                visible: false },
  { url: "Browse/kit/panther/",                                  visible: false },
  { url: "Browse/monster/goblin/goblin-malice/",                 visible: false },
];

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true });
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
  let failures = 0;
  for (const c of CASES) {
    await page.goto(BASE + c.url, { waitUntil: "domcontentloaded" });
    const shown = await page.evaluate(() => {
      const h1 = document.querySelector(".md-content h1");
      if (!h1) return false;
      return getComputedStyle(h1).display !== "none" && h1.offsetHeight > 0;
    });
    const ok = shown === c.visible;
    console.log(`${ok ? "PASS" : "FAIL"} ${c.url} h1 ${shown ? "visible" : "hidden"} (want ${c.visible ? "visible" : "hidden"})`);
    if (!ok) failures++;
  }
  await browser.close();
  if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
  console.log("page-titles e2e: all pass");
})();
