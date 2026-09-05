/*
 * chrome-panel.e2e.cjs — geometry + behaviour gate for the shared card chrome
 * plate (SC-297), the site's port of the DSE plugin's element chrome panel
 * (SC-169/SC-189). The site twin of the plugin's `assertChromePlacement`: jsdom
 * computes no layout, so this contract can't live in the unit suite.
 *
 * Asserts, per family x scheme: the plate's right edge sits 10px inside the
 * card's border-box right edge and its bottom edge lands exactly on the card's
 * border-box top; no bottom border; opacity 0 at rest / 1 on card hover, back
 * to 0 once the mouse leaves, 1 again on :focus-within WITH THE MOUSE AWAY
 * (round 4, MEDIUM-3: a stray hover can't explain the focus result away
 * anymore); the plate's contents are exactly the family's expected set — not
 * just logged (round 4, MEDIUM-2: this is what would have caught HIGH-1);
 * nothing left behind in the card head; `display: none` under print; at 375px
 * always visible with reserved top space, the same geometry, and clearance
 * against the last *rendered* preceding sibling (round 4, MEDIUM-3: walks
 * past `display:none` elements — every family's injected h1/hr is hidden, so
 * the old check against the immediate previousElementSibling measured a zero
 * rect and could never fail). Also the two SC-297 Read-chapter fixes (D1/D2):
 * an embedded card in a chapter must mount neither an encounter-add chip nor
 * a copy-link.
 *
 * Originated as sc297-round1-chrome-panel.e2e.cjs (round 1, statblock +
 * ability only, 53/53). Round 2 extended it to all five ported families and
 * the D1/D2 negative checks, and moved it into the repo (135/135). Round 4
 * (owner ruling, decisions.md -> "Round 3"): adds the three `sb-backlink`
 * minion pages (HIGH-2), per-family expected-contents assertions (MEDIUM-2),
 * and fixes the two vacuous assertions (MEDIUM-3).
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/chrome-panel.e2e.cjs
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

// One real leaf page per ported family, plus the three sb-backlink minion
// pages (HIGH-2). `card` is a selector unique to the page's MAIN card
// (nested/embedded instances of the same class must not match — see each
// selector's comment). `expect` is the plate's exact expected content set,
// sorted, by class-name-first-token (MEDIUM-2) — kit has no MD/PNG because
// kit leaf pages carry no `<template class="sc-src">` export island at all
// (SC-298, a steel-etl content-pipeline gap, unrelated to this rollout).
const PAGES = [
  { name: "statblock", url: "Browse/monster/minotaur/minotaur-sunderer/", card: ".sb-wrap",
    expect: ["sc-copylink", "sc-enc-add", "sc-export", "sc-pin"] },
  { name: "ability", url: "Browse/feature/ability/dragon-knight/dragon-breath/", card: ".md-typeset > .sc-ability", // bare .sc-ability also matches nested sub-features
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
  { name: "featureblock", url: "Browse/monster/ogre/ogre-malice/", card: ".fb-wrap",
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
  { name: "trait", url: "Browse/feature/trait/orc/glowing-recovery/", card: ".md-typeset > .sc-trait", // bare .sc-trait also matches nested sub-traits
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
  { name: "kit", url: "Browse/kit/cloak-and-dagger/", card: ".md-typeset > .sc-kit",
    expect: ["sc-copylink", "sc-pin"] },
  // SC-297 round 4, HIGH-2: these three pages render
  // <h1> -> <hr> -> <p class="sb-backlink">Summoned by <a>…</a></p> -> .sb-wrap.
  // The intervening <p> used to defeat SCChrome's strict adjacency, so no
  // plate mounted here at all, but sc-export.js's OWN bare descendant
  // selector still matched and dropped the MD/PNG pair into the card head
  // with no placement CSS. SCChrome.anchor() now accepts that one optional
  // element, so these ARE card pages and get a normal plate. None of the
  // three has an EV chip (they're retainer/summoner minions, not buyable by
  // EV), so — like ability/featureblock/trait — no encounter-add mounts;
  // that absence is a property of the page content, not this gate's family
  // list, and is asserted the same way every other family's set is.
  { name: "minion-razor", url: "Browse/monster/retainer/summoner/minion/razor/", card: ".sb-wrap",
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
  { name: "minion-gorrre", url: "Browse/monster/retainer/summoner/minion/gorrre/", card: ".sb-wrap",
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
  { name: "minion-violent", url: "Browse/monster/retainer/summoner/minion/violent/", card: ".sb-wrap",
    expect: ["sc-copylink", "sc-export", "sc-pin"] },
];

// SC-297 D1/D2: a Read chapter embeds many cards (21 .sb-wrap on this page)
// but is a plain page — no card gets its own chrome plate or panel-hosted
// control. Before the fix, an "add to encounter" chip mounted on the FIRST
// embedded statblock's head, and a copy-link mounted on an embedded card
// (copying the chapter's own permalink instead of nothing).
const CHAPTER = { name: "read-chapter", url: "Read/bestiary/retainers/" };

let fails = 0;
function ok(cond, msg) { console.log((cond ? "PASS " : "FAIL ") + msg); if (!cond) fails++; }

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });

  for (const pg of PAGES) {
    for (const cs of ["dark", "light"]) {
      const ctx = await browser.newContext({ colorScheme: cs, viewport: { width: 1280, height: 1000 } });
      const page = await ctx.newPage();
      await page.goto(BASE + pg.url, { waitUntil: "networkidle" });
      await page.waitForTimeout(600);
      const tag = `${pg.name}/${cs}`;

      const rest = await page.evaluate((sel) => {
        const card = document.querySelector(sel);
        const p = card && card.querySelector(":scope > .sc-chrome");
        if (!p) return { panel: false };
        const cr = card.getBoundingClientRect(), pr = p.getBoundingClientRect();
        return {
          panel: true,
          opacity: getComputedStyle(p).opacity,
          display: getComputedStyle(p).display,
          rightGap: cr.right - pr.right,      // want 10
          bottomDelta: pr.bottom - cr.top,    // want 0
          items: [...p.children].map(e => e.className.split(" ")[0]),
          order: [...p.children].map(e => getComputedStyle(e).order),
          borderBottom: getComputedStyle(p).borderBottomWidth,
          cardOverflow: getComputedStyle(card).overflow,
        };
      }, pg.card);
      ok(rest.panel, `${tag} panel mounted`);
      if (rest.panel) {
        ok(rest.opacity === "0", `${tag} hidden at rest (opacity=${rest.opacity})`);
        ok(Math.abs(rest.rightGap - 10) < 0.6, `${tag} right edge 10px inside card border-box right (got ${rest.rightGap.toFixed(2)})`);
        ok(Math.abs(rest.bottomDelta) < 0.6, `${tag} bottom edge on the card's border-box top (delta ${rest.bottomDelta.toFixed(2)})`);
        ok(rest.borderBottom === "0px", `${tag} no bottom border (${rest.borderBottom})`);
        // Round 4, MEDIUM-2: the contents are ASSERTED, not just logged — a
        // family that silently lost a control (HIGH-1: kit and trait lost
        // copy-link) now fails a named check instead of passing 135/135.
        const gotSorted = rest.items.slice().sort();
        const wantSorted = pg.expect.slice().sort();
        ok(JSON.stringify(gotSorted) === JSON.stringify(wantSorted),
          `${tag} plate contains exactly the expected controls (want ${JSON.stringify(wantSorted)}, got ${JSON.stringify(gotSorted)})`);
        console.log(`INFO ${tag} order=${JSON.stringify(rest.order)} cardOverflow=${rest.cardOverflow}`);
      }

      // hover reveal
      const cr = await page.evaluate((s) => { const r = document.querySelector(s).getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width }; }, pg.card);
      await page.mouse.move(cr.x + cr.w / 2, cr.y + 60);
      await page.waitForTimeout(400);
      const hovOp = await page.evaluate((s) => getComputedStyle(document.querySelector(s).querySelector(":scope > .sc-chrome")).opacity, pg.card);
      ok(hovOp === "1", `${tag} revealed on card hover (opacity=${hovOp})`);

      // Round 4, MEDIUM-3: move the mouse away and confirm the plate actually
      // hides again BEFORE testing :focus-within — otherwise a stray :hover
      // (the mouse never having left the card between the two checks) can
      // explain the "revealed" result on its own, and the focus arm proves
      // nothing (verified: deleting :focus-within from steel-chrome.css still
      // passed the old sequence).
      await page.mouse.move(0, 0);
      await page.waitForTimeout(400);
      const awayOp = await page.evaluate((s) => getComputedStyle(document.querySelector(s).querySelector(":scope > .sc-chrome")).opacity, pg.card);
      ok(awayOp === "0", `${tag} hides again once the mouse leaves (opacity=${awayOp})`);

      // keyboard twin — mouse is now away from the card, so this cannot be
      // :hover in disguise. Focus and the opacity readback are split across
      // two evaluate() calls with a wait between them (matching the hover
      // check's own move-then-wait-then-read shape): focus() synchronously
      // triggers a fresh 0.18s opacity transition, and reading computed
      // style in the SAME script tick that calls focus() can observe the
      // pre-transition frame (measured: opacity still "0" immediately after
      // focus() with pointer-events already "auto" — the non-transitioned
      // half of the same rule had already applied).
      await page.evaluate((s) => {
        document.querySelector(s).querySelector(":scope > .sc-chrome").querySelector("button").focus();
      }, pg.card);
      await page.waitForTimeout(400);
      const focOp = await page.evaluate((s) => getComputedStyle(document.querySelector(s).querySelector(":scope > .sc-chrome")).opacity, pg.card);
      ok(focOp === "1", `${tag} revealed by :focus-within with the mouse away (opacity=${focOp})`);

      // legacy strip must be gone from the head
      const stray = await page.evaluate(() => ({
        headCopy: !!document.querySelector(".sc-head .sc-copylink, .sb__head > .sc-copylink"),
        headPin: !!document.querySelector(".sc-head > .sc-pin"),
        headEnc: !!document.querySelector(".sb__head > .sc-enc-addpage"),
        headExp: !!document.querySelector(".sc-head > .sc-export"),
        pageact: !!document.querySelector(".sc-pageact"),
      }));
      ok(!stray.headCopy && !stray.headPin && !stray.headEnc && !stray.headExp,
        `${tag} no control left in the card head (${JSON.stringify(stray)})`);

      // print
      await page.emulateMedia({ media: "print" });
      await page.waitForTimeout(300);
      const pr = await page.evaluate((s) => {
        const p = document.querySelector(s).querySelector(":scope > .sc-chrome");
        return { display: getComputedStyle(p).display, mt: getComputedStyle(document.querySelector(s)).marginTop };
      }, pg.card);
      ok(pr.display === "none", `${tag} absent in print (display=${pr.display}); anchor margin-top=${pr.mt}`);
      await page.emulateMedia({ media: "screen" });
      await ctx.close();

      // phone
      const pctx = await browser.newContext({ colorScheme: cs, viewport: { width: 375, height: 820 }, isMobile: true, hasTouch: true });
      const ppage = await pctx.newPage();
      await ppage.goto(BASE + pg.url, { waitUntil: "networkidle" });
      await ppage.waitForTimeout(600);
      const ph = await ppage.evaluate((s) => {
        const card = document.querySelector(s);
        const p = card.querySelector(":scope > .sc-chrome");
        const cr = card.getBoundingClientRect(), pr = p.getBoundingClientRect();
        // Round 4, MEDIUM-3: walk past hidden/zero-rect siblings to the last
        // one actually rendered (every family's injected h1/hr is
        // display:none; the sb-backlink minion pages' <p> is the one case
        // that IS rendered, and clearance must be measured against it).
        let sib = card.previousElementSibling, prevRect = null;
        while (sib) {
          const cs2 = getComputedStyle(sib);
          const r = sib.getBoundingClientRect();
          if (cs2.display !== "none" && (r.width > 0 || r.height > 0)) { prevRect = r; break; }
          sib = sib.previousElementSibling;
        }
        return {
          opacity: getComputedStyle(p).opacity,
          marginTop: getComputedStyle(card).marginTop,
          clearsPrev: prevRect ? pr.top - prevRect.bottom : null,
          prevTag: sib ? sib.tagName + "." + sib.className : null,
          rightGap: cr.right - pr.right,
          bottomDelta: pr.bottom - cr.top,
        };
      }, pg.card);
      ok(ph.opacity === "1", `${tag} phone: always visible (opacity=${ph.opacity})`);
      ok(parseFloat(ph.marginTop) >= 30, `${tag} phone: reserved top space (margin-top=${ph.marginTop})`);
      ok(ph.clearsPrev === null || ph.clearsPrev >= -0.5,
        `${tag} phone: panel clears the last rendered element above (gap=${ph.clearsPrev}, prev=${ph.prevTag})`);
      ok(Math.abs(ph.rightGap - 10) < 0.6 && Math.abs(ph.bottomDelta) < 0.6, `${tag} phone: geometry holds (right ${ph.rightGap.toFixed(2)}, bottom ${ph.bottomDelta.toFixed(2)})`);
      await pctx.close();
    }
  }

  // SC-297 D1/D2: the Read chapter is a plain page — no embedded card gets a
  // chrome plate, an encounter-add chip, or a copy-link.
  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
    const page = await ctx.newPage();
    await page.goto(BASE + CHAPTER.url, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    const d = await page.evaluate(() => ({
      sbWraps: document.querySelectorAll(".sb-wrap").length,
      chromePanels: document.querySelectorAll(".sc-chrome").length,
      encChips: document.querySelectorAll(".sc-enc-addpage").length,
      copyLinks: document.querySelectorAll(".sc-copylink").length,
      pageact: !!document.querySelector(".sc-pageact"),
    }));
    ok(d.sbWraps > 1, `${CHAPTER.name} embeds multiple statblocks (found ${d.sbWraps})`);
    ok(d.chromePanels === 0, `${CHAPTER.name} no chrome plate on any embedded card (found ${d.chromePanels})`);
    ok(d.encChips === 0, `${CHAPTER.name} D1: no encounter-add chip on any embedded statblock (found ${d.encChips})`);
    ok(d.copyLinks === 0, `${CHAPTER.name} D2: no copy-link on any embedded card (found ${d.copyLinks})`);
    ok(d.pageact, `${CHAPTER.name} keeps its own page-tier action strip (.sc-pageact present=${d.pageact})`);
    await ctx.close();
  }

  await browser.close();
  console.log(fails ? `FAILURES ${fails}` : "ALL PASS");
  process.exit(fails ? 1 : 0);
})();
