/*
 * capture-statblock-golden.cjs — capture the CURRENT steel-statblock.js render()
 * output as golden HTML for the Go build-time-render equivalence test.
 *
 *   cd v2
 *   devbox run -- mkdocs build                                   # ~145s
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/capture-statblock-golden.cjs
 *
 * Reads  ../steel-etl/internal/site/testdata/statblock_golden/<name>.island.json
 * Writes ../steel-etl/internal/site/testdata/statblock_golden/<name>.golden.html
 *
 * Env: E2E_BASE (default http://127.0.0.1:8124/), BRAVE_PATH
 *      (default /opt/brave.com/brave/brave),
 *      SEED_PAGE (default Browse/monster/arixx/arixx/ — any statblock page).
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
  throw new Error("playwright-core not found (install it, or `npx playwright` once to populate ~/.npm/_npx)");
}

const BASE = process.env.E2E_BASE || "http://127.0.0.1:8124/";
const BRAVE = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";
const SEED = process.env.SEED_PAGE || "Browse/monster/arixx/arixx/";
const DATA = path.resolve(__dirname, "../../../steel-etl/internal/site/testdata/statblock_golden");

(async () => {
  const names = fs.readdirSync(DATA)
    .filter((f) => f.endsWith(".island.json"))
    .map((f) => f.replace(/\.island\.json$/, ""));
  if (!names.length) throw new Error("no *.island.json inputs in " + DATA);

  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.goto(BASE + SEED, { waitUntil: "networkidle" });
    await page.waitForSelector(".sb-wrap"); // SCStatblock is loaded + mounted

    for (const name of names) {
      const island = JSON.parse(fs.readFileSync(path.join(DATA, name + ".island.json"), "utf8"));
      const html = await page.evaluate((data) => {
        const node = window.SCStatblock.render(data);
        // wire() sets a --sticky-top inline style on the root (runtime-only). Strip
        // every inline style attribute — only the root carries one — so the golden
        // matches the build-time DOM, which has none. removeAttribute can leave an
        // empty style="" behind, so strip from the serialized string too.
        return node.outerHTML.replace(/ style="[^"]*"/g, "");
      }, island);
      fs.writeFileSync(path.join(DATA, name + ".golden.html"), html);
      console.log("wrote " + name + ".golden.html (" + html.length + " bytes)");
    }
  } finally {
    await browser.close(); // don't leak Brave on a mid-loop throw
  }
})().catch((e) => { console.error("CAPTURE ERROR:", e.stack || e.message); process.exit(2); });
