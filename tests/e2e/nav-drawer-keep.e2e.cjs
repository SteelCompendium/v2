/*
 * nav-drawer-keep.e2e.cjs — real-browser E2E for keeping the mobile nav drawer
 * open across instant navigations (nav-drawer-keep.js + nav-drawer-keep-core.js).
 *
 * Like settings-panel.e2e.cjs, drives the locally installed Brave via
 * playwright-core + executablePath (Playwright MCP / chrome channel is broken here).
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/nav-drawer-keep.e2e.cjs
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

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });

  // ---------- MOBILE: drawer stays open when drilling into a section ----------
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mpage = await mctx.newPage();
  await mpage.goto(BASE + "Browse/", { waitUntil: "networkidle" });

  // Open the nav drawer (hamburger toggles #__drawer).
  await mpage.click('label.md-header__button[for="__drawer"]');
  await mpage.waitForTimeout(300);
  check("mobile: drawer opens", await mpage.evaluate(() => document.getElementById("__drawer").checked));

  // Find a visible nav link that drills DEEPER than the current page (its
  // resolved path starts with, but isn't equal to, the current path).
  const target = await mpage.evaluate(() => {
    var here = location.pathname;
    var links = Array.from(document.querySelectorAll(".md-nav--primary a.md-nav__link[href]"));
    var l = links.find(function (a) {
      if (a.offsetParent === null) return false;        // visible
      var p = new URL(a.href, location.href).pathname;  // resolved path
      return p.indexOf(here) === 0 && p !== here;        // deeper than here
    });
    if (!l) return null;
    l.setAttribute("data-e2e-target", "1");
    return new URL(l.href, location.href).pathname;
  });
  check("mobile: found a section nav link to drill into", !!target, String(target));

  if (target) {
    await mpage.click('a.md-nav__link[data-e2e-target="1"]');
    // Wait for the instant navigation to land (history pushState updates location).
    await mpage.waitForFunction(
      (start) => location.pathname !== start,
      await mpage.evaluate(() => location.pathname),
      { timeout: 5000 }
    ).catch(() => {});
    await mpage.waitForTimeout(300); // let document$ + the rAF restore run

    const after = await mpage.evaluate(() => ({
      open: document.getElementById("__drawer").checked,
      path: location.pathname
    }));
    check("mobile: navigated to the section", /\/Browse\//.test(after.path) && after.path !== "/Browse/", after.path);
    check("mobile: drawer STAYS OPEN after drilling in", after.open === true, "drawer.checked=" + after.open);
  }
  await mctx.close();

  // ---------- DESKTOP: behavior is inert (no drawer to keep) ----------
  const dctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const dpage = await dctx.newPage();
  await dpage.goto(BASE + "Browse/", { waitUntil: "networkidle" });
  const armed = await dpage.evaluate(() => {
    var l = document.querySelector(".md-sidebar--primary a.md-nav__link[href]");
    if (l) l.click();
    return sessionStorage.getItem("sc:keepDrawer");
  });
  check("desktop: keep-open flag NOT armed on nav click", armed === null, "flag=" + String(armed));
  await dctx.close();

  await browser.close();
  console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error("SCRIPT ERROR:", e.stack || e.message); process.exit(2); });
