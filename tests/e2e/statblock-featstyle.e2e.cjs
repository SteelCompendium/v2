/*
 * statblock-featstyle.e2e.cjs — e2e for the data-sb-featstyle preference
 * (card vs flat feature frames inside statblocks) + the FOLLOWUPS #8
 * specificity-paydown regression guards.
 *
 * Same harness as settings-panel.e2e.cjs (Brave via playwright-core):
 *   cd v2
 *   devbox run -- mkdocs build                                   # ~145s
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/statblock-featstyle.e2e.cjs
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
  throw new Error("playwright-core not found (install it, or `npx playwright` once to populate ~/.npm/_npx)");
}

const BASE = process.env.E2E_BASE || "http://127.0.0.1:8124/";
const BRAVE = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";
const PAGE = BASE + "Browse/monster/arixx/arixx/"; // solo: features + villain band

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}

// Computed snapshot of the idx-th feature in the main list (idx 1 = has a `+`
// sibling, so it carries the separator in flat mode). Pass idx as the
// page.evaluate argument: `page.evaluate(FEAT_PROBE, 1)`.
const FEAT_PROBE = (idx) => {
  const f = document.querySelectorAll(".sb__features > .sb__feat")[idx];
  const s = getComputedStyle(f);
  const b = getComputedStyle(f, "::before");
  return {
    borderLeftWidth: s.borderLeftWidth, borderLeftStyle: s.borderLeftStyle,
    background: s.backgroundColor,
    beforeDisplay: b.display, beforeOpacity: b.opacity, beforeBlend: b.mixBlendMode
  };
};

// Chromium serializes computed colors with 8-bit-rounded alpha — compare with
// tolerance instead of exact string match.
function alphaNear(rgba, expected) {
  const m = /^rgba\(0, 0, 0, ([\d.]+)\)$/.exec(rgba || "");
  return !!m && Math.abs(parseFloat(m[1]) - expected) < 0.003;
}

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  await page.goto(PAGE, { waitUntil: "networkidle" });
  await page.waitForSelector(".sb-wrap");

  // ---- default = card ----
  check("default: data-sb-featstyle stamped as card",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "card"));
  // Page defaults to light scheme; force dark (slate) for the dark-tint check.
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "slate"));
  let f = await page.evaluate(FEAT_PROBE, 1);
  check("card: 3px solid action-colored left border", f.borderLeftWidth === "3px" && f.borderLeftStyle === "solid",
    f.borderLeftWidth + " " + f.borderLeftStyle);
  check("card: tinted container background (dark scheme rgba(0,0,0,.16))",
    alphaNear(f.background, 0.16), f.background);
  check("card: no separator/watermark pseudo", f.beforeDisplay === "none", f.beforeDisplay);

  // ---- light scheme card tint (dead scheme-first selector regression) ----
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "default"));
  f = await page.evaluate(FEAT_PROBE, 1);
  check("card/light: light tint applies (rgba(0,0,0,.022))",
    alphaNear(f.background, 0.022), f.background);
  await page.evaluate(() => document.body.setAttribute("data-md-color-scheme", "slate"));

  // ---- hover guard (kill rule floor) ----
  await page.hover(".sb__features > .sb__feat:nth-of-type(2)");
  const hov = await page.evaluate(() => {
    const el = document.querySelectorAll(".sb__features > .sb__feat")[1];
    const s = getComputedStyle(el);
    return { transform: s.transform, boxShadow: s.boxShadow };
  });
  check("card: no hover lift", hov.transform === "none" && hov.boxShadow === "none",
    hov.transform + " / " + hov.boxShadow);

  // ---- switch to flat via the drawer control ----
  await page.click("#sc-settings-toggle");
  await page.evaluate(() => {
    const s = document.getElementById("set-sb-featstyle");
    s.value = "flat"; s.dispatchEvent(new Event("change", { bubbles: true }));
  });
  check("flat: attribute flips",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "flat"));
  check("flat: stored in prefs.statblock.featstyle",
    await page.evaluate(() => JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).statblock.featstyle === "flat"));
  check("flat: preset re-derives to Custom",
    await page.evaluate(() => document.getElementById("set-sb-preset").value === "custom"));

  f = await page.evaluate(FEAT_PROBE, 1);
  check("flat: separator pseudo visible (display/opacity/blend reclaimed)",
    f.beforeDisplay === "block" && f.beforeOpacity === "1" && f.beforeBlend === "normal",
    f.beforeDisplay + "/" + f.beforeOpacity + "/" + f.beforeBlend);
  check("flat: card chrome gone (no left border, no bg)",
    (f.borderLeftStyle === "none" || f.borderLeftWidth === "0px") && f.background === "rgba(0, 0, 0, 0)",
    f.borderLeftStyle + " " + f.borderLeftWidth + " " + f.background);
  const first = await page.evaluate(FEAT_PROBE, 0);
  check("flat: FIRST feature shows no watermark (kill rule intact)",
    first.beforeDisplay === "none", first.beforeDisplay);

  // ---- villain band features follow featstyle ----
  const band = await page.evaluate(() => {
    const feats = document.querySelectorAll(".sb__band-body .sb__feat");
    if (feats.length < 2) return { n: feats.length };
    const b = getComputedStyle(feats[1], "::before");
    return { n: feats.length, beforeDisplay: b.display };
  });
  check("flat: band has 2+ features and second shows separator",
    band.n >= 2 && band.beforeDisplay === "block", JSON.stringify(band));

  // ---- presets bundle featstyle ----
  await page.evaluate(() => {
    const s = document.getElementById("set-sb-preset");
    s.value = "sourcebook"; s.dispatchEvent(new Event("change", { bubbles: true }));
  });
  check("preset: Sourcebook → flat",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "flat"));
  await page.evaluate(() => {
    const s = document.getElementById("set-sb-preset");
    s.value = "steel"; s.dispatchEvent(new Event("change", { bubbles: true }));
  });
  check("preset: Steel Card → card",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "card"));

  // ---- legacy prefs migration (matched pair: main.html early-apply + panel) ----
  await page.evaluate(() => localStorage.setItem("mkdocs:fontPrefs",
    JSON.stringify({ statblock: { kwusage: "text" } })));
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector(".sb-wrap");
  check("migration: legacy non-crest prefs → flat",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "flat"));
  await page.evaluate(() => localStorage.setItem("mkdocs:fontPrefs",
    JSON.stringify({ statblock: { kwusage: "crest" } })));
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector(".sb-wrap");
  check("migration: legacy crest prefs → card",
    await page.evaluate(() => document.documentElement.getAttribute("data-sb-featstyle") === "card"));
  await page.evaluate(() => localStorage.removeItem("mkdocs:fontPrefs"));

  await ctx.close();
  await browser.close();
  console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error("SCRIPT ERROR:", e.stack || e.message); process.exit(2); });
