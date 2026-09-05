const test = require("node:test");
const assert = require("node:assert");
const C = require("../docs/javascripts/scc-card-copy-core.js");

test("cardKind maps every SC-297 chrome-panel family", () => {
  assert.strictEqual(C.cardKind("sb-wrap"), "sb");
  assert.strictEqual(C.cardKind("fb-wrap"), "fb");
  assert.strictEqual(C.cardKind("sc-ability"), "ability");
  assert.strictEqual(C.cardKind("sc-kit sc-fil"), "kit");
  assert.strictEqual(C.cardKind("sc-trait sc-trait--crest sc-trait--lead"), "trait");
});

test("cardKind rejects embedded statblock/featureblock sub-features", () => {
  // sb__feat/fb__feat abilities carry "sc-ability" too — must not be misread
  // as a standalone ability card (round 4, HIGH-1 regression guard).
  assert.strictEqual(C.cardKind("sc-ability sb__feat"), "");
});

test("cardKind does whole-token matching, not substring", () => {
  assert.strictEqual(C.cardKind("scc-ability-foo"), "");
  assert.strictEqual(C.cardKind("sc-kit-preview"), "");
  assert.strictEqual(C.cardKind(""), "");
  assert.strictEqual(C.cardKind(null), "");
});

test("cleanPermalink trims and treats null/empty as unusable", () => {
  assert.strictEqual(C.cleanPermalink("  /scc/x/  "), "/scc/x/");
  assert.strictEqual(C.cleanPermalink(null), "");
  assert.strictEqual(C.cleanPermalink(""), "");
});
