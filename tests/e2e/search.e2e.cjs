/*
 * search.e2e.cjs — SC-306: the real search UI, driven through the custom
 * worker, returns the exact-title page first.
 *
 * Like page-titles.e2e.cjs, drives the locally installed Brave via
 * playwright-core + executablePath (Playwright MCP / chrome channel is
 * broken here).
 *
 * Run:
 *   cd v2
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/search.e2e.cjs
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
const BRAVE_PATH = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";

const CASES = [
  ["Brutal Slam", "/Browse/feature/ability/fury/level-1/brutal-slam/"],
  ["Goblin Warrior", "/Browse/monster/goblin/goblin-warrior/"],
  ["Fog of War", "/Browse/feature/ability/tactician/level-2/fog-of-war/"],
];

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE_PATH, headless: true });
  const page = await browser.newPage();
  let failed = 0;
  try {
    await page.goto(BASE + "Browse/", { waitUntil: "networkidle" });
    const box = "[data-md-component=search-query]";
    for (const [q, want] of CASES) {
      await page.click(box);
      await page.fill(box, "");
      await page.keyboard.type(q);
      // Wait for the result list to reflect the FULL typed query, not a stale
      // render from an earlier keystroke (keyboard.type fires one query per
      // character; waitForSelector alone can match a partial-query result).
      // Material stamps the query as a "h=" (highlight) URL param on each
      // result link, so wait for that to equal the complete, space-joined
      // query before reading the top result's href.
      const wantH = q.toLowerCase().replace(/\s+/g, "+");
      const link = ".md-search-result__item a.md-search-result__link";
      await page.waitForFunction(
        ({ sel, wantH }) => {
          const a = document.querySelector(sel);
          if (!a) return false;
          return (a.getAttribute("href") || "").includes("h=" + wantH);
        },
        { sel: link, wantH },
        { timeout: 20000 }
      );
      const href = await page.$eval(link, (a) => a.getAttribute("href"));
      const ok = href.includes(want);
      console.log(`${ok ? "ok  " : "FAIL"} "${q}" → ${href}`);
      if (!ok) failed++;
    }
  } finally {
    await browser.close();
  }
  process.exit(failed ? 1 : 0);
})();
