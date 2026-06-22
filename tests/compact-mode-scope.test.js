const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

// Regression guard for the "Compact Mode blows up search results" bug.
//
// Material reuses the `.md-typeset` class on the search-result dropdown
// (`<article class="md-search-result__article md-typeset"><h1>…`) and on
// preview tooltips. Compact Mode's heading rules use em-based multipliers
// (h1: 3em) that tie Material's own `.md-search-result .md-typeset h1`
// (font-size: .8rem) on specificity and win on source order, so unscoped
// `[data-compact="true"] .md-typeset …` rules leak into that chrome and
// render search titles ~3x too large.
//
// Invariant: every Compact Mode selector must be scoped to the page content
// region (`.md-content`) so it cannot match search results / tooltips.

const cssPath = path.join(__dirname, "..", "docs", "stylesheets", "extra.css");
const css = fs.readFileSync(cssPath, "utf8");

// Pull out each rule's selector list (the text before every `{`), then keep
// only the individual selectors that target Compact Mode.
function compactSelectors(source) {
  const selectors = [];
  for (const m of source.matchAll(/([^{}]+)\{/g)) {
    for (const sel of m[1].split(",")) {
      const s = sel.trim();
      if (s.includes('data-compact="true"')) selectors.push(s);
    }
  }
  return selectors;
}

test("Compact Mode rules exist (so the guard is actually exercising something)", () => {
  assert.ok(compactSelectors(css).length > 0, "no [data-compact] selectors found");
});

test("every Compact Mode selector is scoped to page content (.md-content)", () => {
  const leaking = compactSelectors(css).filter((s) => !s.includes(".md-content"));
  assert.deepStrictEqual(
    leaking,
    [],
    "Compact Mode selectors not scoped to .md-content leak into the search " +
      "dropdown / preview tooltips (which reuse .md-typeset):\n  " +
      leaking.join("\n  ")
  );
});
