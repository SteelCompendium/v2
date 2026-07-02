const test = require("node:test");
const assert = require("node:assert");
const C = require("../docs/javascripts/chapter-toc-core.js");

test("isReadPage matches chapter leaves only", () => {
  assert.ok(C.isReadPage("/v2/Read/heroes/classes/"));
  assert.ok(C.isReadPage("/v2/Read/bestiary/monster-basics/"));
  assert.ok(!C.isReadPage("/v2/Read/"));
  assert.ok(!C.isReadPage("/v2/Read/heroes/")); // book index
  assert.ok(!C.isReadPage("/v2/Browse/class/fury/"));
});

test("buildTocModel nests h3 under preceding h2", () => {
  const m = C.buildTocModel([
    { level: 2, text: "Basics", id: "basics" },
    { level: 3, text: "Turns", id: "turns" },
    { level: 3, text: "Rounds", id: "rounds" },
    { level: 2, text: "Kits", id: "kits" },
  ]);
  assert.strictEqual(m.length, 2);
  assert.strictEqual(m[0].text, "Basics");
  assert.deepStrictEqual(m[0].children.map(c => c.id), ["turns", "rounds"]);
  assert.strictEqual(m[1].children.length, 0);
});

test("buildTocModel tolerates a leading h3 (no h2 parent yet)", () => {
  const m = C.buildTocModel([{ level: 3, text: "Loose", id: "loose" }]);
  assert.strictEqual(m.length, 1);
  assert.strictEqual(m[0].text, "Loose");
});

test("renderTocHTML emits details with anchor links", () => {
  const html = C.renderTocHTML(
    [{ text: "Basics", id: "basics", children: [{ text: "Turns", id: "turns" }] }],
    "In this chapter");
  assert.match(html, /<details class="sc-chtoc"/);
  assert.match(html, /<a href="#basics">Basics<\/a>/);
  assert.match(html, /<a href="#turns">Turns<\/a>/);
  assert.match(html, /In this chapter/);
});

test("renderTocHTML escapes heading text", () => {
  const html = C.renderTocHTML([{ text: "A <b>& B", id: "a", children: [] }], "t");
  assert.match(html, /A &lt;b&gt;&amp; B/);
});
