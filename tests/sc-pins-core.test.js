const test = require("node:test");
const assert = require("node:assert");
const P = require("../docs/javascripts/sc-pins-core.js");

const item = (path, title) => ({ path, title, kind: P.kindOf(path), ts: 1 });

test("parse tolerates garbage", () => {
  assert.deepStrictEqual(P.parse(null).items, []);
  assert.deepStrictEqual(P.parse("nonsense").items, []);
  assert.strictEqual(P.parse('{"v":1,"items":[{"path":"/a/","title":"A"}]}').items.length, 1);
});

test("toggle adds then removes by path", () => {
  let s = P.parse(null);
  s = P.toggle(s, item("/v2/Browse/condition/grabbed/", "Grabbed"));
  assert.ok(P.has(s, "/v2/Browse/condition/grabbed/"));
  s = P.toggle(s, item("/v2/Browse/condition/grabbed/", "Grabbed"));
  assert.ok(!P.has(s, "/v2/Browse/condition/grabbed/"));
});

test("remove deletes by path and never adds", () => {
  let s = P.parse(null);
  s = P.toggle(s, item("/v2/Browse/condition/grabbed/", "Grabbed"));
  s = P.remove(s, "/v2/Browse/condition/grabbed/");
  assert.ok(!P.has(s, "/v2/Browse/condition/grabbed/"));
  // removing a path that isn't there must be a no-op (toggle would add it)
  s = P.remove(s, "/v2/Browse/condition/grabbed/");
  assert.deepStrictEqual(s.items, []);
});

test("kindOf maps path families", () => {
  assert.strictEqual(P.kindOf("/v2/Browse/condition/grabbed/"), "Conditions");
  assert.strictEqual(P.kindOf("/v2/Browse/feature/ability/fury/level-1/brutal-slam/"), "Abilities");
  assert.strictEqual(P.kindOf("/v2/Browse/feature/fury/level-1/growing-ferocity/"), "Features");
  assert.strictEqual(P.kindOf("/v2/Browse/monster/goblin/goblin-warrior/"), "Monsters & Terrain");
  assert.strictEqual(P.kindOf("/v2/Browse/dynamic-terrain/x/"), "Monsters & Terrain");
  assert.strictEqual(P.kindOf("/v2/Browse/class/fury/"), "Classes");
  assert.strictEqual(P.kindOf("/v2/Browse/kit/panther/"), "Kits");
  assert.strictEqual(P.kindOf("/v2/Read/heroes/combat/"), "Chapters");
  assert.strictEqual(P.kindOf("/v2/Browse/treasure/artifact/x/"), "Treasure");
});

test("grouped orders kinds and newest-first inside", () => {
  let s = P.parse(null);
  s = P.toggle(s, { path: "/m1/", title: "M1", kind: "Monsters & Terrain", ts: 1 });
  s = P.toggle(s, { path: "/c1/", title: "C1", kind: "Classes", ts: 2 });
  s = P.toggle(s, { path: "/m2/", title: "M2", kind: "Monsters & Terrain", ts: 3 });
  const g = P.grouped(s);
  assert.strictEqual(g[0].kind, "Classes");
  const m = g.find(x => x.kind === "Monsters & Terrain");
  assert.deepStrictEqual(m.items.map(i => i.title), ["M2", "M1"]);
});

test("serialize caps at 200 newest", () => {
  let s = P.parse(null);
  for (let i = 0; i < 210; i++) s = P.toggle(s, { path: "/p" + i + "/", title: "t", kind: "Other", ts: i });
  const round = P.parse(P.serialize(s));
  assert.strictEqual(round.items.length, 200);
  assert.ok(P.has(round, "/p209/"));
  assert.ok(!P.has(round, "/p0/"));
});

const base = 'https://steelcompendium.io/v2/pins/';
test('custom links preserve anchors, normalize local URLs, and survive storage', () => {
  const result = P.addLink(P.parse(null), '  Combat notes  ', ' https://steelcompendium.io/v2/Read/heroes/combat/#flanking ', base, 2);
  const saved = P.parse(P.serialize(result.state)).items[0];
  assert.strictEqual(saved.title, 'Combat notes');
  assert.strictEqual(saved.path, '/v2/Read/heroes/combat/#flanking');
  assert.strictEqual(saved.kind, 'Custom links');
  assert.strictEqual(P.addLink(result.state, 'External', 'https://example.org/notes?q=1#game', base, 3).state.items[1].path, 'https://example.org/notes?q=1#game');
});
test('adding an existing link renames it without toggling it away', () => {
  const original = P.toggle(P.parse(null), item('/v2/Browse/condition/grabbed/', 'Grabbed'));
  const result = P.addLink(original, 'Grappling reminder', base.replace('pins/', 'Browse/condition/grabbed/'), base, 2);
  assert.strictEqual(result.updated, true);
  assert.strictEqual(result.state.items.length, 1);
  assert.strictEqual(result.state.items[0].title, 'Grappling reminder');
  assert.strictEqual(original.items[0].title, 'Grabbed');
});
test('rejects blank names and unsafe or ambiguous links, including from storage', () => {
  assert.ok(P.addLink(P.parse(null), ' ', 'https://example.org', base, 1).error);
  for (const url of ['javascript:alert(1)', 'data:text/html,x', '//example.org', '/\\example.org', 'https://', 'example.org', 'java\nscript:alert(1)', 42]) {
    assert.ok(P.addLink(P.parse(null), 'Name', url, base, 1).error, String(url));
    assert.strictEqual(P.parse(JSON.stringify({v:1,items:[{path:url}]})).items.length, 0);
  }
});
test('custom additions at capacity do not silently evict existing pins', () => {
  const state = {v:1, items:Array.from({length:200}, (_, n) => item('/p' + n, 'Pin'))};
  assert.ok(P.addLink(state, 'New', 'https://example.org', base, 2).error);
  assert.strictEqual(P.addLink(state, 'Rename', '/p0', base, 2).state.items.length, 200);
});
