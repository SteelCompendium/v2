/*
 * feature-browser-cost.e2e.cjs — SC-92: the Cost facet row on the feature
 * Search & Filter page (/Browse/feature/).
 *
 * Asserts:
 *   - a Cost facet row exists between Action and Keyword
 *   - its chips are ordered Signature, No cost, 1, 3, 5, 7, 9, 11 (the exact
 *     set present in the built island — asserted against that data, not
 *     hard-coded)
 *   - no any/all toggle renders for the row (scalar facet)
 *   - clicking "Signature" narrows the result count to exactly the number of
 *     island items whose cost is "Signature", and every visible card's head
 *     tag reads "Signature"
 *   - additionally clicking "No cost" grows the count (OR within the row)
 *   - composing with an existing facet (Source → Conduit) narrows further
 *
 * Like search.e2e.cjs, drives the locally installed Brave via playwright-core
 * + executablePath (the Playwright MCP / chrome channel is broken here).
 *
 * Run:
 *   cd v2
 *   devbox run -- mkdocs build                                    # ~145s
 *   devbox run -- python3 -m http.server 8126 --directory site &
 *   devbox run -- node tests/e2e/feature-browser-cost.e2e.cjs
 *
 * Env overrides: E2E_BASE (default http://127.0.0.1:8126/),
 *                BRAVE_PATH (default /opt/brave.com/brave/brave).
 * SHOT_DIR, if set, saves the four evidence screenshots there.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");
const assert = require("node:assert/strict");

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

const BASE = process.env.E2E_BASE || "http://127.0.0.1:8126/";
const BRAVE_PATH = process.env.BRAVE_PATH || "/opt/brave.com/brave/brave";
const SHOT_DIR = process.env.SHOT_DIR || null;

// Ground truth read straight from the built static HTML (not through the
// mounted page — mount() replaces the island's container innerHTML, so the
// data island is gone by the time the page is interactive).
function islandGroundTruth() {
  const repoRoot = path.join(__dirname, "..", "..");
  const html = fs.readFileSync(path.join(repoRoot, "site", "Browse", "feature", "index.html"), "utf8");
  const m = html.match(/<script[^>]*class="sc-browse-data"[^>]*>([\s\S]*?)<\/script>/);
  assert.ok(m, "sc-browse-data island not found in built site/Browse/feature/index.html");
  const items = JSON.parse(m[1]);
  const abilities = items.filter((it) => it.kind === "ability");
  const signature = abilities.filter((it) => it.cost === "Signature");
  const noCost = abilities.filter((it) => !it.cost);
  const signatureConduit = signature.filter((it) => it.klass === "Conduit");
  return {
    total: items.length,
    signatureCount: signature.length,
    noCostCount: noCost.length,
    signatureOrNoCostCount: signature.length + noCost.length,
    signatureConduitCount: signatureConduit.length
  };
}

(async () => {
  const truth = islandGroundTruth();
  console.log(
    `ground truth: Signature=${truth.signatureCount} NoCost=${truth.noCostCount} ` +
    `Signature+NoCost=${truth.signatureOrNoCostCount} Signature+Conduit=${truth.signatureConduitCount}`
  );

  const { chromium } = resolvePlaywrightCore();
  const browser = await chromium.launch({ executablePath: BRAVE_PATH, headless: true, args: ["--no-sandbox"] });
  let failed = 0;
  const check = (cond, msg) => {
    console.log(`${cond ? "ok  " : "FAIL"} ${msg}`);
    if (!cond) failed++;
  };

  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
    await page.goto(BASE + "Browse/feature/", { waitUntil: "networkidle" });
    await page.locator(".sc-browse__facets").waitFor();

    // ── facet row order + Cost chip order ──────────────────────────────
    const labels = await page.$$eval(".sc-browse__facet .lbl", (els) => els.map((e) => e.textContent.trim()));
    const costIdx = labels.indexOf("Cost");
    check(costIdx !== -1, `Cost facet row exists (labels: ${labels.join(", ")})`);
    check(labels[costIdx - 1] === "Action", `Cost row immediately follows Action (found "${labels[costIdx - 1]}")`);
    check(labels[costIdx + 1] === "Keyword", `Cost row immediately precedes Keyword (found "${labels[costIdx + 1]}")`);

    const costRow = page.locator(".sc-browse__facet").filter({ has: page.locator(".lbl", { hasText: "Cost" }) });
    const chipTexts = await costRow.locator(".sc-chip").allTextContents();
    const trimmed = chipTexts.map((t) => t.trim());
    check(trimmed[0] === "Signature", `first Cost chip is "Signature" (got "${trimmed[0]}")`);
    check(trimmed[1] === "No cost", `second Cost chip is "No cost" (got "${trimmed[1]}")`);
    const amounts = trimmed.slice(2).map(Number);
    const sortedAmounts = [...amounts].sort((a, b) => a - b);
    check(
      JSON.stringify(amounts) === JSON.stringify(sortedAmounts),
      `remaining Cost chips are in ascending numeric order (got [${trimmed.slice(2).join(", ")}])`
    );
    console.log(`Cost chip set: [${trimmed.join(", ")}]`);

    // ── scalar facet: no any/all toggle on the Cost row ────────────────
    const toggleCount = await costRow.locator(".sc-facet-mode").count();
    check(toggleCount === 0, "no any/all toggle rendered for the Cost row");

    // ── desktop screenshot: nothing selected, Cost row in view ─────────
    // .scrollIntoViewIfNeeded() aligns the row the same way a click would,
    // without selecting anything — the facet stack is taller than one
    // viewport, so this brings Level/Action/Cost/Keyword/Condition/Track
    // (and the count) into frame together.
    await costRow.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    if (SHOT_DIR) await page.screenshot({ path: path.join(SHOT_DIR, "sc92-shot-facets-desktop.png") });

    // ── mobile screenshot: nothing selected, 400px, Cost row in view ───
    await page.setViewportSize({ width: 400, height: 1200 });
    await page.waitForTimeout(200);
    check(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      "no horizontal overflow at 400px"
    );
    await costRow.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    if (SHOT_DIR) await page.screenshot({ path: path.join(SHOT_DIR, "sc92-shot-facets-mobile.png") });
    await page.setViewportSize({ width: 1280, height: 1000 });
    await page.waitForTimeout(200);

    // ── click Signature ─────────────────────────────────────────────────
    const sigChip = costRow.locator(".sc-chip", { hasText: "Signature" });
    await sigChip.click();
    await page.waitForFunction(
      (n) => {
        const b = document.querySelector(".sc-browse__count b");
        return b && Number(b.textContent) === n;
      },
      truth.signatureCount,
      { timeout: 5000 }
    );
    const countAfterSig = Number(await page.locator(".sc-browse__count b").textContent());
    check(countAfterSig === truth.signatureCount, `Signature-only count = ${countAfterSig} (expected ${truth.signatureCount})`);

    const tagTexts = await page.locator(".sc-browse__results .sc-prev__tag").allTextContents();
    check(
      tagTexts.length > 0 && tagTexts.every((t) => t.trim() === "Signature"),
      `every visible card's head tag reads "Signature" (${tagTexts.length} cards checked)`
    );

    if (SHOT_DIR) await page.screenshot({ path: path.join(SHOT_DIR, "sc92-shot-signature-selected.png") });

    // ── additionally click No cost: OR within the row, count grows ─────
    const noCostChip = costRow.locator(".sc-chip", { hasText: "No cost" });
    await noCostChip.click();
    await page.waitForFunction(
      (n) => {
        const b = document.querySelector(".sc-browse__count b");
        return b && Number(b.textContent) === n;
      },
      truth.signatureOrNoCostCount,
      { timeout: 5000 }
    );
    const countAfterBoth = Number(await page.locator(".sc-browse__count b").textContent());
    check(countAfterBoth > countAfterSig, `count grows after adding No cost (${countAfterSig} → ${countAfterBoth})`);
    check(
      countAfterBoth === truth.signatureOrNoCostCount,
      `Signature+No-cost count = ${countAfterBoth} (expected ${truth.signatureOrNoCostCount})`
    );

    // deselect No cost, keep only Signature selected for the next screenshot
    await noCostChip.click();
    await page.waitForFunction(
      (n) => {
        const b = document.querySelector(".sc-browse__count b");
        return b && Number(b.textContent) === n;
      },
      truth.signatureCount,
      { timeout: 5000 }
    );

    // ── compose with an existing facet: Source → Conduit ───────────────
    const conduitChip = page.locator('.sc-chip--class[data-value="Conduit"]');
    await conduitChip.click();
    await page.waitForFunction(
      (n) => {
        const b = document.querySelector(".sc-browse__count b");
        return b && Number(b.textContent) === n;
      },
      truth.signatureConduitCount,
      { timeout: 5000 }
    );
    const countSigConduit = Number(await page.locator(".sc-browse__count b").textContent());
    check(
      countSigConduit === truth.signatureConduitCount,
      `Signature+Conduit count = ${countSigConduit} (expected ${truth.signatureConduitCount})`
    );
    // Clicking the Conduit chip scrolls it into view (Source row), which
    // leaves the result count below the fold — scroll back down so the
    // count is the visible evidence, per the brief.
    await page.locator(".sc-browse__count").scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    if (SHOT_DIR) await page.screenshot({ path: path.join(SHOT_DIR, "sc92-shot-signature-plus-conduit.png") });
  } finally {
    await browser.close();
  }

  console.log(failed ? `${failed} check(s) FAILED` : "all checks passed");
  process.exit(failed ? 1 : 0);
})().catch((err) => { console.error(err); process.exit(1); });
