const test = require("node:test");
const assert = require("node:assert");
const Core = require("../docs/javascripts/steel-feature-browser-core.js");

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
