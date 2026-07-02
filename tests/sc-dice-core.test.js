const test = require("node:test");
const assert = require("node:assert");
const D = require("../docs/javascripts/sc-dice-core.js");

test("roll uses injected rng and yields 1..10 each", () => {
  assert.deepStrictEqual(D.roll(() => 0), { d1: 1, d2: 1 });
  assert.deepStrictEqual(D.roll(() => 0.999), { d1: 10, d2: 10 });
});

test("parseModifier: numeric vs characteristic", () => {
  assert.deepStrictEqual(D.parseModifier("+ 2"), { bonus: 2, label: "+2" });
  assert.deepStrictEqual(D.parseModifier("+ Might"), { bonus: null, label: "+ Might" });
  assert.deepStrictEqual(D.parseModifier(""), { bonus: 0, label: "" });
});

test("tierOf boundaries", () => {
  assert.strictEqual(D.tierOf(11), 1);
  assert.strictEqual(D.tierOf(12), 2);
  assert.strictEqual(D.tierOf(16), 2);
  assert.strictEqual(D.tierOf(17), 3);
});

test("resolve: single edge is +2, double edge shifts tier", () => {
  const base = { d1: 5, d2: 5, bonus: 0, edges: 0, banes: 0 }; // 10 → tier 1
  assert.strictEqual(D.resolve(base).tier, 1);
  const oneEdge = D.resolve({ ...base, edges: 1 }); // 12 → tier 2
  assert.strictEqual(oneEdge.total, 12);
  assert.strictEqual(oneEdge.tier, 2);
  const twoEdge = D.resolve({ ...base, edges: 2 }); // total stays 10, tier 1→2
  assert.strictEqual(twoEdge.total, 10);
  assert.strictEqual(twoEdge.tier, 2);
  assert.strictEqual(twoEdge.shifted, 1);
});

test("resolve: banes mirror edges; edge+bane cancel", () => {
  const base = { d1: 8, d2: 8, bonus: 0, edges: 0, banes: 0 }; // 16 tier 2
  assert.strictEqual(D.resolve({ ...base, banes: 1 }).total, 14);
  assert.strictEqual(D.resolve({ ...base, banes: 2 }).tier, 1);
  assert.strictEqual(D.resolve({ ...base, edges: 1, banes: 1 }).total, 16);
});

test("resolve: natural 19-20 is a crit at tier 3 (overrides shifts)", () => {
  const r = D.resolve({ d1: 10, d2: 9, bonus: 0, edges: 0, banes: 2 });
  assert.ok(r.crit);
  assert.strictEqual(r.tier, 3);
});

test("tier shift clamps to 1..3", () => {
  assert.strictEqual(D.resolve({ d1: 10, d2: 8, bonus: 0, edges: 2, banes: 0 }).tier, 3);
  assert.strictEqual(D.resolve({ d1: 2, d2: 2, bonus: 0, edges: 0, banes: 2 }).tier, 1);
});
