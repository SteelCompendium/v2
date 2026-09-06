const test = require("node:test");
const assert = require("node:assert");
const C = require("./scc-card-copy-core.js");

test("cardKind detects the statblock wrapper", () => {
  assert.strictEqual(C.cardKind("sb-wrap"), "sb");
  assert.strictEqual(C.cardKind("md-typeset sb-wrap"), "sb");
});

test("cardKind detects the featureblock wrapper", () => {
  assert.strictEqual(C.cardKind("fb-wrap"), "fb");
});

test("cardKind detects a standalone ability card", () => {
  assert.strictEqual(C.cardKind("sc-ability"), "ability");
});

test("cardKind rejects an ability embedded in a statblock (sb__feat)", () => {
  assert.strictEqual(C.cardKind("sc-ability sb__feat"), "");
});

test("cardKind uses whole-token matching, not substring", () => {
  // "scc-ability-foo" must NOT match the "sc-ability" token.
  assert.strictEqual(C.cardKind("scc-ability-foo"), "");
});

test("cardKind returns '' for unrelated or empty class strings", () => {
  assert.strictEqual(C.cardKind("md-typeset"), "");
  assert.strictEqual(C.cardKind(""), "");
  assert.strictEqual(C.cardKind(null), "");
});

test("cleanPermalink trims whitespace", () => {
  assert.strictEqual(C.cleanPermalink("  https://x/scc/a/  "), "https://x/scc/a/");
});

test("cleanPermalink returns '' for empty / nullish input", () => {
  assert.strictEqual(C.cleanPermalink("   "), "");
  assert.strictEqual(C.cleanPermalink(null), "");
  assert.strictEqual(C.cleanPermalink(undefined), "");
});
