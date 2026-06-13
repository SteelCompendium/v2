/*
 * featureblock-fixture.e2e.cjs — e2e for fixture statblock pages rendering via
 * the .fb-wrap "Forged Band" card path (Plan 3: featureblock fixture routing).
 *
 * Asserts:
 *  - .fb-wrap[data-role="defender"] exists, no .sc-statblock-mount island
 *  - .fb__band--adv[data-level="5"] and [data-level="9"] exist with .fb__adv-head
 *  - .fb__adv-head color is a real computed value (role-token wiring guard)
 *
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/featureblock-fixture.e2e.cjs
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
const BARROW_GATES = BASE + "Browse/fixture/undead/barrow-gates/";

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  // ---- Barrow Gates fixture renders via featureblock card path ----
  await page.goto(BARROW_GATES, { waitUntil: "networkidle" });
  await page.waitForSelector(".fb-wrap");

  // 1. .fb-wrap[data-role="defender"] exists
  const role = await page.evaluate(() => {
    const el = document.querySelector(".fb-wrap");
    return el ? el.getAttribute("data-role") : null;
  });
  check("fixture: .fb-wrap[data-role=\"defender\"] exists", role === "defender", "data-role=" + role);

  // 2. No .sc-statblock-mount JSON island on the page
  const hasMount = await page.evaluate(() => !!document.querySelector(".sc-statblock-mount"));
  check("fixture: no .sc-statblock-mount island on page", !hasMount);

  // 3. .fb__band--adv[data-level="5"] exists and contains .fb__adv-head
  const band5 = await page.evaluate(() => {
    const band = document.querySelector('.fb__band--adv[data-level="5"]');
    if (!band) return { exists: false };
    return { exists: true, hasHead: !!band.querySelector(".fb__adv-head") };
  });
  check("fixture: .fb__band--adv[data-level=\"5\"] exists", band5.exists);
  check("fixture: band[5] contains .fb__adv-head", band5.exists && band5.hasHead);

  // 4. .fb__band--adv[data-level="9"] exists and contains .fb__adv-head
  const band9 = await page.evaluate(() => {
    const band = document.querySelector('.fb__band--adv[data-level="9"]');
    if (!band) return { exists: false };
    return { exists: true, hasHead: !!band.querySelector(".fb__adv-head") };
  });
  check("fixture: .fb__band--adv[data-level=\"9\"] exists", band9.exists);
  check("fixture: band[9] contains .fb__adv-head", band9.exists && band9.hasHead);

  // 5. .fb__adv-head color is a real computed value (role-token wiring guard).
  //    The body text color in the default scheme is the plain dark color; the
  //    adv-head must resolve to a distinct role color (not empty, not "").
  //    We check that (a) the value is non-empty, and (b) it differs from the
  //    plain body text color — guards the 2026-06-11 regression class where
  //    the attribute was set but --role resolved to an empty string.
  const colorCheck = await page.evaluate(() => {
    const head = document.querySelector('.fb__adv-head');
    if (!head) return { missing: true };
    const advColor = getComputedStyle(head).color;
    const bodyColor = getComputedStyle(document.body).color;
    return { advColor, bodyColor, hasDiff: advColor !== bodyColor && advColor !== "" };
  });
  check("fixture: .fb__adv-head color is non-empty", !colorCheck.missing && colorCheck.advColor !== "",
    colorCheck.missing ? "element missing" : colorCheck.advColor);
  check("fixture: .fb__adv-head color differs from plain body text (role-token wired)",
    !colorCheck.missing && colorCheck.hasDiff,
    (colorCheck.advColor || "n/a") + " vs body:" + (colorCheck.bodyColor || "n/a"));

  await ctx.close();
  await browser.close();
  console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error("SCRIPT ERROR:", e.stack || e.message); process.exit(2); });
