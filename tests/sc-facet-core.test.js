const test = require("node:test");
const assert = require("node:assert");
const Core = require("../docs/javascripts/sc-facet-core.js");

const AREA_FIRE = { Area: true, Fire: true };

test("valuesOf normalizes scalars, arrays, and empties", () => {
  assert.deepStrictEqual(Core.valuesOf(null), []);
  assert.deepStrictEqual(Core.valuesOf(undefined), []);
  assert.deepStrictEqual(Core.valuesOf(""), []);
  assert.deepStrictEqual(Core.valuesOf("Fire"), ["Fire"]);
  assert.deepStrictEqual(Core.valuesOf(3), ["3"]);
  assert.deepStrictEqual(Core.valuesOf(["Area", "Fire"]), ["Area", "Fire"]);
});

test("empty or missing selection matches everything, both modes", () => {
  assert.strictEqual(Core.matchesPicks(["Area"], {}, "any"), true);
  assert.strictEqual(Core.matchesPicks(["Area"], {}, "all"), true);
  assert.strictEqual(Core.matchesPicks(null, {}, "any"), true);
  assert.strictEqual(Core.matchesPicks("Fire", null, "all"), true);
});

test("any-mode ORs picks over array values", () => {
  assert.strictEqual(Core.matchesPicks(["Fire", "Magic"], AREA_FIRE, "any"), true);
  assert.strictEqual(Core.matchesPicks(["Magic"], AREA_FIRE, "any"), false);
});

test("any-mode works on single-valued (string) fields", () => {
  assert.strictEqual(Core.matchesPicks("Fire", AREA_FIRE, "any"), true);
  assert.strictEqual(Core.matchesPicks("Magic", AREA_FIRE, "any"), false);
});

test("all-mode requires every picked value", () => {
  assert.strictEqual(Core.matchesPicks(["Area", "Fire", "Magic"], AREA_FIRE, "all"), true);
  assert.strictEqual(Core.matchesPicks(["Area", "Magic"], AREA_FIRE, "all"), false);
  assert.strictEqual(Core.matchesPicks(["Fire"], AREA_FIRE, "all"), false);
});

test("all-mode on a single-valued field: one pick can match, two never can", () => {
  assert.strictEqual(Core.matchesPicks("Fire", { Fire: true }, "all"), true);
  assert.strictEqual(Core.matchesPicks("Fire", AREA_FIRE, "all"), false);
});

test("empty value never matches a non-empty selection", () => {
  assert.strictEqual(Core.matchesPicks(null, AREA_FIRE, "any"), false);
  assert.strictEqual(Core.matchesPicks([], AREA_FIRE, "all"), false);
});

test("unknown mode falls back to any", () => {
  assert.strictEqual(Core.matchesPicks(["Fire"], AREA_FIRE, undefined), true);
});

test("numeric levels match string picks (chips store strings)", () => {
  assert.strictEqual(Core.matchesPicks(3, { "3": true }, "any"), true);
});

test("isMultiValued detects a >=2-value array on any item", () => {
  const items = [
    { keywords: ["Area", "Fire"], role: "Brute" },
    { keywords: ["Magic"], role: "Ambusher" }
  ];
  assert.strictEqual(Core.isMultiValued(items, "keywords"), true);
  assert.strictEqual(Core.isMultiValued(items, "role"), false);
  assert.strictEqual(Core.isMultiValued(items, "missing"), false);
  assert.strictEqual(Core.isMultiValued([], "keywords"), false);
});
