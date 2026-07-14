/*
 * statblock-band.e2e.cjs — SC-66 regression guards for the statblock
 * Villain Actions band and mixed-content head chips.
 *
 * Material styles EVERY `.md-typeset details/summary` as a collapsible "note"
 * admonition (blue border + bg, pencil ::before, chevron ::after, block-layout
 * summary with icon padding, .64rem font) at (0,1,1) specificity — which beat
 * the (0,1,0) band rules and produced the doubled chevron / stray pencil /
 * cramped header reported in SC-66. The chips lost their internal space
 * ("Villain Action1", "2Malice") because inline-flex drops whitespace-only
 * text nodes between flex items.
 *
 * Same harness as settings-panel.e2e.cjs (Brave via playwright-core):
 *   cd v2
 *   devbox run -- mkdocs build                                   # ~145s
 *   devbox run -- python3 -m http.server 8124 --directory site &
 *   devbox run -- node tests/e2e/statblock-band.e2e.cjs
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
const PAGE = BASE + "Browse/monster/undead/3rd-echelon/vampire-lord/"; // leader: villain band + VA chips + malice chips

let failures = 0;
function check(name, cond, detail) {
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (detail ? "  (" + detail + ")" : ""));
  if (!cond) failures++;
}

const BAND_PROBE = () => {
  const band = document.querySelector("details.sb__band--villain");
  const head = band.querySelector("summary.sb__band-head");
  const body = band.querySelector(".sb__band-body");
  const bandS = getComputedStyle(band);
  const headS = getComputedStyle(head);
  const before = getComputedStyle(head, "::before");
  const after = getComputedStyle(head, "::after");
  const title = head.querySelector(".sb__band-title");
  const chev = head.querySelector(".sb__band-chev");
  return {
    bandBorderColor: bandS.borderTopColor,
    bandFontSize: parseFloat(bandS.fontSize),
    featFontSize: parseFloat(getComputedStyle(document.querySelector(".sb__features")).fontSize),
    bodyMarginBottom: getComputedStyle(body).marginBottom,
    headDisplay: headS.display,
    headPaddingLeft: headS.paddingLeft,
    beforeContent: before.content,
    afterContent: after.content,
    // our own chevron must sit at the rail end: title flexes, so the chevron's
    // left edge should be near the summary's right padding edge
    chevGap: head.getBoundingClientRect().right - chev.getBoundingClientRect().right,
    titleToChev: chev.getBoundingClientRect().left - title.getBoundingClientRect().left
  };
};

// Visual gap between a chip's link and its neighboring text node — the
// SC-66 "Villain Action1" / "2Malice" symptom is a gap of ~0px.
const CHIP_GAP_PROBE = () => {
  const out = {};
  for (const chip of document.querySelectorAll(".sc-head__slot--chip")) {
    const a = chip.querySelector("a.sb-term");
    if (!a) continue;
    const sib = a.nextSibling && a.nextSibling.nodeType === 3 ? a.nextSibling
      : a.previousSibling && a.previousSibling.nodeType === 3 ? a.previousSibling : null;
    if (!sib || !sib.textContent.trim()) continue;
    const r = document.createRange();
    r.selectNodeContents(sib);
    const tr = r.getBoundingClientRect();
    const ar = a.getBoundingClientRect();
    const gap = sib === a.nextSibling ? tr.left - ar.right : ar.left - tr.right;
    const key = chip.textContent.trim();
    if (!(key in out)) out[key] = gap;
  }
  return out;
};

(async () => {
  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  await page.goto(PAGE, { waitUntil: "networkidle" });
  await page.waitForSelector("details.sb__band--villain");

  const band = await page.evaluate(BAND_PROBE);

  check("band border is not Material admonition blue (#448aff)",
    band.bandBorderColor !== "rgb(68, 138, 255)", band.bandBorderColor);
  check("band font-size matches the feature list (no .64rem admonition shrink)",
    Math.abs(band.bandFontSize - band.featFontSize) < 0.5,
    band.bandFontSize + " vs " + band.featFontSize);
  check("band head lays out as flex (crest · title · chevron rail)",
    band.headDisplay === "flex", band.headDisplay);
  check("band head has no Material icon padding (2rem reserved for the pencil)",
    parseFloat(band.headPaddingLeft) < 20, band.headPaddingLeft);
  check("no Material pencil ::before on the band head",
    band.beforeContent === "none" || band.beforeContent === "normal", band.beforeContent);
  check("no Material chevron ::after on the band head (ours is the ▾ span)",
    band.afterContent === "none" || band.afterContent === "normal", band.afterContent);
  check("own chevron is pushed to the rail end (title flex:1 active)",
    band.chevGap < 30 && band.titleToChev > 100,
    "railGap=" + band.chevGap.toFixed(1) + " titleToChev=" + band.titleToChev.toFixed(1));
  check("band body keeps no admonition :last-child margin",
    band.bodyMarginBottom === "0px", band.bodyMarginBottom);

  // native <details> toggle still works and our chevron rotates off [open].
  // checkVisibility (not getClientRects) — Chromium hides closed-details
  // content via content-visibility, which keeps layout boxes. The 350ms wait
  // outlasts the chevron's .2s transform transition.
  await page.click("summary.sb__band-head");
  await page.waitForTimeout(350);
  const closed = await page.evaluate(() => {
    const band = document.querySelector("details.sb__band--villain");
    return {
      open: band.open,
      bodyVisible: band.querySelector(".sb__band-body").checkVisibility(),
      chevTransform: getComputedStyle(band.querySelector(".sb__band-chev")).transform
    };
  });
  check("band collapses on summary click", !closed.open && !closed.bodyVisible,
    JSON.stringify(closed));
  check("chevron rotates when closed", closed.chevTransform !== "none", closed.chevTransform);
  await page.click("summary.sb__band-head"); // reopen for the chip probe

  const chips = await page.evaluate(CHIP_GAP_PROBE);
  const entries = Object.entries(chips);
  check("found mixed-content chips to probe (Villain Action N / N Malice)",
    entries.length >= 2, JSON.stringify(entries.map(([k]) => k)));
  for (const [label, gap] of entries) {
    check("chip renders a visible space between link and value: \"" + label + "\"",
      gap >= 2, gap.toFixed(2) + "px");
  }

  await browser.close();
  console.log(failures ? "FAILURES: " + failures : "ALL PASS");
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
