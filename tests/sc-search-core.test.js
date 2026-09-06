const test = require("node:test");
const assert = require("node:assert");
const MS = require("../docs/javascripts/vendor/minisearch.min.js");
const MiniSearch = MS.default || MS;
const Core = require("../docs/javascripts/sc-search-core.js");

// Shapes mirror Material's search_index.json docs; boosts mirror steel-etl's table.
const DOCS = [
  { location: "Browse/class/fury/", title: "Fury", text: "You do not temper the heat of battle within you.", boost: 4 },
  { location: "Browse/class/fury/#fury-abilities", title: "Fury Abilities", text: "Signature Ability Brutal Slam Hit and Run To the Death!", boost: 4 },
  { location: "Browse/feature/ability/fury/level-1/brutal-slam/", title: "Brutal Slam", text: "<p>Brutal Slam Fury Level 1 Signature Melee Weapon Strike</p>" },
  { location: "Browse/feature/ability/fury/level-1/to-the-death/", title: "To the Death!", text: "Fury signature ability." },
  { location: "Browse/monster/goblin/goblin-warrior/", title: "Goblin Warrior", text: "Goblin Warrior Level 1 Harrier" },
  { location: "Browse/monster/goblin/", title: "Goblins", text: "Goblin Warrior Goblin Sniper Goblin Monarch" },
  { location: "Browse/kit/warrior-priest/", title: "Warrior Priest", text: "A warrior priest kit.", boost: 2 },
  { location: "Browse/class/talent/", title: "Talent", text: "Talent class", boost: 4 },
  { location: "Browse/class/talent/#talent-ward", title: "Talent Ward", text: "Entropy Ward Repulsive Ward", boost: 4 },
  { location: "Browse/feature/ability/tactician/level-2/fog-of-war/", title: "Fog of War", text: "Fog of War Tactician Level 2" },
  { location: "Browse/dynamic-terrain/fieldworks/hidey-hole/", title: "Hidey-Hole", text: "A hidey-hole fieldwork." },
  { location: "Browse/skill/intrigue/hide/", title: "Hide", text: "Hide skill", boost: 2 },
];
const engine = Core.createEngine(MiniSearch, DOCS);
const top = (q) => engine.search(q).items[0][0].location;
const pages = (q) => engine.search(q).items.map((g) => g.find((d) => !d.location.includes("#")).location);

test("processTerm lowercases, strips diacritics and a plural s", () => {
  assert.strictEqual(Core.processTerm("Goblins"), "goblin");
  assert.strictEqual(Core.processTerm("Boss"), "boss");
  assert.strictEqual(Core.processTerm("Éclat"), "eclat");
  assert.strictEqual(Core.processTerm("Is"), "is");
});

test("titleTier: exact 100, prefix 10, all-terms 3, else 1", () => {
  assert.strictEqual(Core.titleTier("Goblin Warrior", "goblin warrior"), 100);
  assert.strictEqual(Core.titleTier("Goblin Warrior", "Goblin"), 10);
  assert.strictEqual(Core.titleTier("Goblin Warrior", "goblin war"), 10);
  assert.strictEqual(Core.titleTier("Warrior Priest", "priest warrior"), 3);
  assert.strictEqual(Core.titleTier("Warrior Priest", "goblin"), 1);
  assert.strictEqual(Core.titleTier("To the Death!", "to the death"), 100);
});

test("exact title beats a boosted section whose title merely contains the words", () => {
  assert.strictEqual(top("Brutal Slam"), "Browse/feature/ability/fury/level-1/brutal-slam/");
});

test("all terms required: 'fog of war' never surfaces the Wards", () => {
  assert.strictEqual(top("fog of war"), "Browse/feature/ability/tactician/level-2/fog-of-war/");
  assert.ok(!pages("fog of war").includes("Browse/class/talent/"));
});

test("no trailing wildcard on earlier terms: goblin warrior beats warrior priest", () => {
  assert.strictEqual(top("goblin warrior"), "Browse/monster/goblin/goblin-warrior/");
});

test("exact title beats a prefix match", () => {
  assert.strictEqual(top("hide"), "Browse/skill/intrigue/hide/");
});

test("stop words are kept", () => {
  assert.strictEqual(top("to the death"), "Browse/feature/ability/fury/level-1/to-the-death/");
});

test("boost breaks exact-title ties: 'fury' → the class page", () => {
  assert.strictEqual(top("fury"), "Browse/class/fury/");
});

test("every group carries its page doc; section-only hits get the page at score 0", () => {
  const items = engine.search("entropy").items;
  assert.strictEqual(items.length, 1);
  const page = items[0].find((d) => d.location === "Browse/class/talent/");
  assert.ok(page, "page doc present");
  assert.strictEqual(page.score, 0);
  assert.strictEqual(items[0][0].location, "Browse/class/talent/#talent-ward");
});

test("OR fallback when AND finds nothing, with missing terms flagged", () => {
  const items = engine.search("goblin zzzz").items;
  assert.ok(items.length > 0);
  assert.strictEqual(items[0][0].terms.goblin, true);
  assert.strictEqual(items[0][0].terms.zzzz, false);
});

test("title and snippet are highlighted, snippet is tag-free", () => {
  const d = engine.search("brutal slam").items[0][0];
  assert.strictEqual(d.title, "<mark>Brutal</mark> <mark>Slam</mark>");
  assert.ok(d.text.startsWith("<mark>Brutal</mark> <mark>Slam</mark> Fury"), d.text);
  assert.ok(!/<p>/.test(d.text));
});

test("suggest completes the last token from the top title", () => {
  assert.deepStrictEqual(engine.search("gob", { suggest: true }).suggest, ["goblin"]);
  assert.deepStrictEqual(engine.search("goblin", { suggest: true }).suggest, []);
  assert.strictEqual(engine.search("gob").suggest, undefined);
});

test("empty query → no items", () => {
  assert.deepStrictEqual(engine.search("   ").items, []);
});
