/*
 * cardhead-mobile.e2e.cjs — at a 390px viewport the statblock name must not
 * wrap letter-by-letter (the right rail's content-sized grid column starves
 * the name track). We assert the h2 name renders in ≤ 2 line boxes:
 * height ≤ 2.4 × line-height. See steel-cardhead.css narrow-screen block.
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/cardhead-mobile.e2e.cjs
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

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true });
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await page.goto(BASE + "Browse/monster/goblin/goblin-warrior/", { waitUntil: "domcontentloaded" });
  const m = await page.evaluate(() => {
    const el = document.querySelector(".sb__head .sc-head__left-primary");
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { h: el.getBoundingClientRect().height, lh: parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.04 };
  });
  await browser.close();
  if (!m) { console.error("FAIL name element not found"); process.exit(1); }
  const lines = m.h / m.lh;
  const ok = lines <= 2.4;
  console.log(`${ok ? "PASS" : "FAIL"} goblin-warrior name renders in ~${lines.toFixed(1)} line boxes (want ≤ 2.4)`);
  process.exit(ok ? 0 : 1);
})();
