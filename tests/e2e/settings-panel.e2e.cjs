/*
 * settings-panel.e2e.cjs — real-browser E2E for the live settings drawer.
 *
 * The Playwright MCP tools are broken in this environment (pinned to the `chrome`
 * channel; no Google Chrome installed). This script instead drives the locally
 * installed Brave (Chromium-based) directly via playwright-core + executablePath.
 * See ../../.repo-docs/troubleshooting.md ("Browser E2E ... Playwright via Brave").
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build                                   # produces site/  (~145s)
 *   devbox run -- python3 -m http.server 8124 --directory site & # serve built site
 *   devbox run -- node tests/e2e/settings-panel.e2e.cjs          # then stop the server
 *
 * Env overrides: E2E_BASE (default http://127.0.0.1:8124/),
 *                BRAVE_PATH (default /opt/brave.com/brave/brave).
 */
"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");

// ---- resolve playwright-core (installed, or from the npx cache) ----
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

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });

  // ---------- DESKTOP ----------
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });

  check("gear button injected", await page.evaluate(() => !!document.getElementById("sc-settings-toggle")));
  const baseFont = await page.evaluate(() => parseFloat(getComputedStyle(document.querySelector(".md-typeset")).fontSize));

  await page.click("#sc-settings-toggle");
  await page.waitForTimeout(400); // let the 0.28s slide-in finish before measuring geometry
  check("drawer opens on gear click", await page.evaluate(() => document.documentElement.getAttribute("data-sc-settings") === "open"));
  check("drawer slid on-screen", await page.evaluate(() => {
    const r = document.getElementById("sc-settings-drawer").getBoundingClientRect();
    return r.left < window.innerWidth - 10 && r.width > 50;
  }));

  const scaleRes = await page.evaluate(() => {
    const s = document.getElementById("set-scale");
    s.value = "1.3"; s.dispatchEvent(new Event("input", { bubbles: true })); s.dispatchEvent(new Event("change", { bubbles: true }));
    return { cssVar: getComputedStyle(document.documentElement).getPropertyValue("--sc-content-scale").trim(),
             stored: JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).contentScale,
             label: document.getElementById("set-scale-val").textContent };
  });
  check("scale: css var = 1.3", scaleRes.cssVar === "1.3", scaleRes.cssVar);
  check("scale: stored = 1.3", scaleRes.stored === 1.3, String(scaleRes.stored));
  check("scale: label = 130%", scaleRes.label === "130%", scaleRes.label);
  const bigFont = await page.evaluate(() => parseFloat(getComputedStyle(document.querySelector(".md-typeset")).fontSize));
  check("scale: body text grew", bigFont > baseFont, baseFont + " -> " + bigFont);

  await page.evaluate(() => { const s = document.getElementById("set-scale"); s.value = "1"; s.dispatchEvent(new Event("input", { bubbles: true })); s.dispatchEvent(new Event("change", { bubbles: true })); });
  const resetFont = await page.evaluate(() => parseFloat(getComputedStyle(document.querySelector(".md-typeset")).fontSize));
  check("scale: resets back to baseline", Math.abs(resetFont - baseFont) < 0.5, resetFont + " vs " + baseFont);

  const widthRes = await page.evaluate(() => {
    const f = document.getElementById("set-fullwidth"); const w = document.getElementById("set-width");
    f.checked = false; f.dispatchEvent(new Event("change", { bubbles: true }));
    w.value = "60"; w.dispatchEvent(new Event("change", { bubbles: true }));
    return { cssVar: getComputedStyle(document.documentElement).getPropertyValue("--md-max_width").trim(),
             gridMax: getComputedStyle(document.querySelector(".md-grid")).maxWidth,
             stored: JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).width };
  });
  check("width: css var = 60em", widthRes.cssVar === "60em", widthRes.cssVar);
  check("width: .md-grid max-width applied", /px$/.test(widthRes.gridMax), widthRes.gridMax);
  check("width: stored = 60em", widthRes.stored === "60em", String(widthRes.stored));
  const wideRes = await page.evaluate(() => {
    const w = document.getElementById("set-width");
    w.value = w.max; w.dispatchEvent(new Event("change", { bubbles: true }));
    return { max: w.max, cssVar: getComputedStyle(document.documentElement).getPropertyValue("--md-max_width").trim() };
  });
  check("width: slider max is 300em", wideRes.max === "300", wideRes.max);
  check("width: 300em applies", wideRes.cssVar === "300em", wideRes.cssVar);
  const fullRes = await page.evaluate(() => {
    const f = document.getElementById("set-fullwidth"); f.checked = true; f.dispatchEvent(new Event("change", { bubbles: true }));
    return { gridMax: getComputedStyle(document.querySelector(".md-grid")).maxWidth,
             stored: JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).width };
  });
  check("width: full toggle => max-width none (full)", fullRes.gridMax === "none", fullRes.gridMax);
  check("width: full toggle removes stored width", fullRes.stored === undefined, String(fullRes.stored));

  await page.keyboard.press("Escape");
  check("Esc closes drawer", await page.evaluate(() => document.documentElement.getAttribute("data-sc-settings") === null));

  // ---- Card size (zoom) on a standalone ability page ----
  await page.goto(BASE + "Browse/feature/ability/dragon-knight/dragon-breath/", { waitUntil: "networkidle" });
  const before = await page.evaluate(() => {
    const c = document.querySelector(".md-typeset .sc-ability");
    const p = c.querySelector("p");
    // zoom applies at the render layer, so getComputedStyle().fontSize stays
    // unchanged — measure the rendered rect height instead.
    return { h: c.getBoundingClientRect().height, p: p ? p.getBoundingClientRect().height : 0 };
  });
  await page.click("#sc-settings-toggle");
  const cardRes = await page.evaluate(() => {
    const s = document.getElementById("set-card-scale");
    s.value = "0.7"; s.dispatchEvent(new Event("input", { bubbles: true })); s.dispatchEvent(new Event("change", { bubbles: true }));
    return { cssVar: getComputedStyle(document.documentElement).getPropertyValue("--sc-card-scale").trim(),
             stored: JSON.parse(localStorage.getItem("mkdocs:fontPrefs")).cardScale,
             label: document.getElementById("set-card-scale-val").textContent };
  });
  check("card: css var = 0.7", cardRes.cssVar === "0.7", cardRes.cssVar);
  check("card: stored = 0.7", cardRes.stored === 0.7, String(cardRes.stored));
  check("card: label = 70%", cardRes.label === "70%", cardRes.label);
  const after = await page.evaluate(() => {
    const c = document.querySelector(".md-typeset .sc-ability");
    const p = c.querySelector("p");
    return { h: c.getBoundingClientRect().height, p: p ? p.getBoundingClientRect().height : 0 };
  });
  // zoom scales content + padding + height (full-column width is preserved by design)
  check("card: height shrank ~0.7x", after.h < before.h * 0.85, Math.round(before.h) + "px -> " + Math.round(after.h) + "px");
  check("card: inner text rendered smaller", after.p > 0 && after.p < before.p * 0.85, Math.round(before.p) + "px -> " + Math.round(after.p) + "px (rendered)");
  await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("mkdocs:fontPrefs") || "{}"); delete p.cardScale; localStorage.setItem("mkdocs:fontPrefs", JSON.stringify(p)); });

  // ---- Nested cards must not compound zoom (trait page) ----
  await page.goto(BASE + "Browse/feature/trait/dragon-knight/dragon-knight-traits/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.documentElement.style.setProperty("--sc-card-scale", "0.7"));
  const nest = await page.evaluate(() => {
    const top = document.querySelector(".md-typeset .sc-trait");
    const inner = document.querySelector(".md-typeset .sc-trait .sc-ability") || document.querySelector(".md-typeset .sc-trait .sc-trait");
    return { topZoom: getComputedStyle(top).zoom, innerZoom: inner ? getComputedStyle(inner).zoom : "n/a" };
  });
  check("card: top-level trait zooms (0.7)", nest.topZoom === "0.7", "topZoom=" + nest.topZoom);
  check("card: nested card does NOT compound (zoom 1)", nest.innerZoom === "1" || nest.innerZoom === "normal", "innerZoom=" + nest.innerZoom);
  await page.evaluate(() => document.documentElement.style.removeProperty("--sc-card-scale"));

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.click("#sc-settings-toggle");
  await page.evaluate(() => document.getElementById("sc-settings-scrim").click());
  check("scrim click closes drawer", await page.evaluate(() => document.documentElement.getAttribute("data-sc-settings") === null));

  await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("mkdocs:fontPrefs") || "{}"); p.contentScale = 1.2; localStorage.setItem("mkdocs:fontPrefs", JSON.stringify(p)); });
  await page.reload({ waitUntil: "networkidle" });
  check("persist: scale 1.2 re-applied after reload (no-flash early-apply)", await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--sc-content-scale").trim() === "1.2"));
  await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("mkdocs:fontPrefs") || "{}"); delete p.contentScale; delete p.width; localStorage.setItem("mkdocs:fontPrefs", JSON.stringify(p)); });

  await page.goto(BASE + "preferences/", { waitUntil: "networkidle" });
  const hasBtn = await page.evaluate(() => !!document.querySelector(".md-typeset button.sc-settings-reset"));
  check("redirect page has Open-settings button", hasBtn);
  if (hasBtn) { await page.click(".md-typeset button.sc-settings-reset"); check("redirect button opens drawer", await page.evaluate(() => document.documentElement.getAttribute("data-sc-settings") === "open")); }
  await ctx.close();

  // ---------- MOBILE ----------
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mpage = await mctx.newPage();
  await mpage.goto(BASE, { waitUntil: "networkidle" });
  await mpage.click("#sc-settings-toggle");
  await mpage.waitForTimeout(400); // bottom-sheet slide-up
  check("mobile: drawer opened", await mpage.evaluate(() => document.documentElement.getAttribute("data-sc-settings") === "open"));
  const sheet = await mpage.evaluate(() => {
    const r = document.getElementById("sc-settings-drawer").getBoundingClientRect();
    return { atBottom: Math.abs(r.bottom - window.innerHeight) < 2, fullWidth: r.width >= window.innerWidth - 2, onScreen: r.top < window.innerHeight - 50, top: r.top, h: r.height };
  });
  check("mobile: drawer anchored to bottom", sheet.atBottom, "top=" + Math.round(sheet.top) + " h=" + Math.round(sheet.h));
  check("mobile: drawer slid on-screen", sheet.onScreen, "top=" + Math.round(sheet.top));
  check("mobile: drawer full width", sheet.fullWidth);
  await mctx.close();

  await browser.close();
  console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error("SCRIPT ERROR:", e.stack || e.message); process.exit(2); });
