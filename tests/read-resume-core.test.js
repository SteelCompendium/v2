const test = require("node:test");
const assert = require("node:assert");
const R = require("../docs/javascripts/read-resume-core.js");

test("storageKey only for Read chapter pages", () => {
  assert.strictEqual(R.storageKey("/v2/Read/heroes/classes/"), "sc-read-pos:/v2/Read/heroes/classes/");
  assert.strictEqual(R.storageKey("/v2/Read/heroes/"), null);
  assert.strictEqual(R.storageKey("/v2/Browse/class/fury/"), null);
});

test("shouldOffer requires meaningful depth", () => {
  assert.ok(R.shouldOffer(5000, 600000, 900));  // deep into a long chapter
  assert.ok(!R.shouldOffer(800, 600000, 900));  // less than 1.5 viewports
  assert.ok(!R.shouldOffer(NaN, 600000, 900));
  assert.ok(!R.shouldOffer(300, 4000, 900));    // shallow on a short page
});

test("clampY never exceeds scrollable range", () => {
  assert.strictEqual(R.clampY(999999, 10000, 900), 9100);
  assert.strictEqual(R.clampY(500, 10000, 900), 500);
  assert.strictEqual(R.clampY(-5, 10000, 900), 0);
});
