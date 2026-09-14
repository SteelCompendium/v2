const test = require("node:test");
const assert = require("node:assert");
const Core = require("../docs/javascripts/steel-feature-browser-core.js");
const FacetCore = require("../docs/javascripts/sc-facet-core.js");

const SAMPLE = [
  { klass: "Censor", source: "class", subclass: "Creation" },
  { klass: "Censor", source: "class", subclass: "Death" },
  { klass: "Conduit", source: "class", subclass: "Creation" },
  { klass: "Tactician", source: "class", subclass: "Vanguard" },
  { klass: "Tactician", source: "class" },        // class-wide, no subclass
  { klass: "Summoner", source: "class" },          // class with no subclasses
  { klass: "Human", source: "ancestry" },
  { klass: "Ranger", source: "kit" },
  { klass: "Common", source: "other" }
];

test("subKey joins class and subclass with SUB_SEP", () => {
  assert.strictEqual(Core.subKey("Censor", "Creation"), "Censor" + Core.SUB_SEP + "Creation");
  assert.notStrictEqual(Core.subKey("Censor", "Creation"), Core.subKey("Conduit", "Creation"));
});

test("buildSourceModel groups classes-with-subclasses, sorted, subs sorted", () => {
  const m = Core.buildSourceModel(SAMPLE);
  assert.deepStrictEqual(m.classes, [
    { klass: "Censor", subclasses: ["Creation", "Death"] },
    { klass: "Conduit", subclasses: ["Creation"] },
    { klass: "Tactician", subclasses: ["Vanguard"] }
  ]);
});

test("buildSourceModel puts subclass-less classes + ancestry/kit/other in plain, rank-ordered", () => {
  const m = Core.buildSourceModel(SAMPLE);
  assert.deepStrictEqual(m.plain, [
    { klass: "Summoner", source: "class" },
    { klass: "Human", source: "ancestry" },
    { klass: "Ranger", source: "kit" },
    { klass: "Common", source: "other" }
  ]);
});

test("matchesSource: empty selection matches everything", () => {
  assert.ok(Core.matchesSource(SAMPLE[0], {}, {}));
});

test("matchesSource: class selection matches that class (incl. subclass-less rows)", () => {
  const selK = { Tactician: true };
  assert.ok(Core.matchesSource({ klass: "Tactician", subclass: "Vanguard" }, selK, {}));
  assert.ok(Core.matchesSource({ klass: "Tactician" }, selK, {}));
  assert.strictEqual(Core.matchesSource({ klass: "Censor", subclass: "Creation" }, selK, {}), false);
});

test("matchesSource: subclass selection is class-scoped (Censor Creation != Conduit Creation)", () => {
  const selS = {}; selS[Core.subKey("Censor", "Creation")] = true;
  assert.ok(Core.matchesSource({ klass: "Censor", subclass: "Creation" }, {}, selS));
  assert.strictEqual(Core.matchesSource({ klass: "Conduit", subclass: "Creation" }, {}, selS), false);
});

test("matchesSource: class OR subclass picks union (single OR-group)", () => {
  const selK = { Tactician: true };
  const selS = {}; selS[Core.subKey("Censor", "Creation")] = true;
  assert.ok(Core.matchesSource({ klass: "Tactician" }, selK, selS));
  assert.ok(Core.matchesSource({ klass: "Censor", subclass: "Creation" }, selK, selS));
  assert.strictEqual(Core.matchesSource({ klass: "Conduit", subclass: "Death" }, selK, selS), false);
});

test("matchesSource + buildSourceModel handle array-valued subclass", () => {
  const item = { klass: "Censor", source: "class", subclass: ["Creation", "Death"] };
  const selS = {}; selS[Core.subKey("Censor", "Death")] = true;
  assert.ok(Core.matchesSource(item, {}, selS));
  const m = Core.buildSourceModel([item]);
  assert.deepStrictEqual(m.classes[0], { klass: "Censor", subclasses: ["Creation", "Death"] });
});

/* ── costFacetValue (SC-92) ──────────────────────────────────────────────── */

test("costFacetValue: 'Signature' (any case/whitespace) → 'Signature'", () => {
  assert.strictEqual(Core.costFacetValue("Signature"), "Signature");
  assert.strictEqual(Core.costFacetValue("signature"), "Signature");
  assert.strictEqual(Core.costFacetValue("  SIGNATURE  "), "Signature");
});

test("costFacetValue: a string beginning with an integer → that integer as a string", () => {
  assert.strictEqual(Core.costFacetValue("11 Discipline"), "11");
  assert.strictEqual(Core.costFacetValue("1 Drama"), "1");
  assert.strictEqual(Core.costFacetValue("5 Piety"), "5");
});

test("costFacetValue: empty/null/undefined/whitespace → 'none'", () => {
  assert.strictEqual(Core.costFacetValue(""), "none");
  assert.strictEqual(Core.costFacetValue(null), "none");
  assert.strictEqual(Core.costFacetValue(undefined), "none");
  assert.strictEqual(Core.costFacetValue("   "), "none");
});

test("costFacetValue: {value, unit} object with a numeric value → its value as a string", () => {
  assert.strictEqual(Core.costFacetValue({ value: 5, unit: "Piety" }), "5");
  assert.strictEqual(Core.costFacetValue({ value: "11", unit: "Discipline" }), "11");
});

test("costFacetValue: anything else (non-numeric string, malformed object) → 'other'", () => {
  assert.strictEqual(Core.costFacetValue("Free action"), "other");
  assert.strictEqual(Core.costFacetValue({ unit: "Piety" }), "other");
  assert.strictEqual(Core.costFacetValue({ value: null }), "other");
  assert.strictEqual(Core.costFacetValue({ value: "several" }), "other");
});

/* ── costTierValues / costTierDisplay (SC-92) ────────────────────────────── */

test("costTierValues: canonical order, filtered to values present, not lexicographic", () => {
  const items = [
    { kind: "ability", cost_tier: "11" },
    { kind: "ability", cost_tier: "Signature" },
    { kind: "ability", cost_tier: "3" },
    { kind: "ability", cost_tier: "none" },
    { kind: "feature" } // cost_tier left undefined — must not appear as a value
  ];
  assert.deepStrictEqual(Core.costTierValues(items), ["Signature", "none", "3", "11"]);
});

test("costTierValues: a tier outside the canonical list is appended after '11' in numeric order", () => {
  const items = [
    { kind: "ability", cost_tier: "Signature" },
    { kind: "ability", cost_tier: "11" },
    { kind: "ability", cost_tier: "13" },   // hypothetical future amount
    { kind: "ability", cost_tier: "other" }
  ];
  assert.deepStrictEqual(Core.costTierValues(items), ["Signature", "11", "13", "other"]);
});

test("costTierValues: an amount outside the hard-coded 1/3/5/7/9/11 set sorts into its numeric place, not after the highest known amount", () => {
  const items = [
    { kind: "ability", cost_tier: "1" },
    { kind: "ability", cost_tier: "2" },   // hypothetical amount between 1 and 3
    { kind: "ability", cost_tier: "3" }
  ];
  assert.deepStrictEqual(Core.costTierValues(items), ["1", "2", "3"]);
});

test("costTierValues: a non-numeric unknown tier sorts after every numeric amount", () => {
  const items = [
    { kind: "ability", cost_tier: "11" },
    { kind: "ability", cost_tier: "other" },
    { kind: "ability", cost_tier: "1" }
  ];
  assert.deepStrictEqual(Core.costTierValues(items), ["1", "11", "other"]);
});

test("costTierDisplay: 'none' reads as 'No cost'; everything else verbatim", () => {
  assert.strictEqual(Core.costTierDisplay("none"), "No cost");
  assert.strictEqual(Core.costTierDisplay("Signature"), "Signature");
  assert.strictEqual(Core.costTierDisplay("5"), "5");
  assert.strictEqual(Core.costTierDisplay("other"), "other");
});

/* ── integration: cost_tier stamping + FacetCore.matchesPicks (SC-92) ───── */

test("Signature/No-cost picks select only stamped abilities, never a feature", () => {
  // Fixture: 2 abilities with resource costs, 1 signature ability, 1 no-cost
  // ability, 1 feature with no `cost` at all — mirrors mount()'s stamping,
  // which sets cost_tier on kind==="ability" items only.
  const rawItems = [
    { kind: "ability", name: "Piety Strike", cost: "3 Piety" },
    { kind: "ability", name: "Discipline Blast", cost: "11 Discipline" },
    { kind: "ability", name: "Gouge", cost: "Signature" },
    { kind: "ability", name: "Free Swing", cost: "" },
    { kind: "feature", name: "Iron Resolve" } // no `cost` field at all
  ];
  const items = rawItems.map((it) => Object.assign({}, it));
  items.forEach((it) => { if (it.kind === "ability") it.cost_tier = Core.costFacetValue(it.cost); });

  assert.strictEqual(items.find((i) => i.name === "Iron Resolve").cost_tier, undefined);

  const bySignature = items.filter((it) => FacetCore.matchesPicks(it.cost_tier, { Signature: true }, "any"));
  assert.deepStrictEqual(bySignature.map((i) => i.name), ["Gouge"]);

  const byNoCost = items.filter((it) => FacetCore.matchesPicks(it.cost_tier, { none: true }, "any"));
  assert.deepStrictEqual(byNoCost.map((i) => i.name), ["Free Swing"]);

  assert.deepStrictEqual(
    Core.costTierValues(items),
    ["Signature", "none", "3", "11"]
  );
});
