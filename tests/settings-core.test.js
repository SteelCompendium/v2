const test = require("node:test");
const assert = require("node:assert");
const C = require("../docs/javascripts/settings-core.js");

test("clampScale clamps to [0.8, 1.4] and snaps to 0.05", () => {
  assert.strictEqual(C.clampScale(1), 1);
  assert.strictEqual(C.clampScale(0.5), 0.8);   // below min
  assert.strictEqual(C.clampScale(2), 1.4);     // above max
  assert.strictEqual(C.clampScale("1.07"), 1.05); // snap down to step
  assert.strictEqual(C.clampScale("1.08"), 1.1);  // snap up to step
  assert.strictEqual(C.clampScale("abc"), 1);   // NaN -> default
  assert.strictEqual(C.clampScale(undefined), 1);
});

test("clampCardScale clamps to [0.7, 1.2] and snaps to 0.05", () => {
  assert.strictEqual(C.clampCardScale(1), 1);
  assert.strictEqual(C.clampCardScale(0.5), 0.7);   // below min
  assert.strictEqual(C.clampCardScale(2), 1.2);     // above max
  assert.strictEqual(C.clampCardScale("0.78"), 0.8); // snap up to step
  assert.strictEqual(C.clampCardScale("abc"), 1);   // NaN -> default
  assert.strictEqual(C.clampCardScale(undefined), 1);
});

test("normalizeWidth handles units, keywords, bare numbers", () => {
  assert.strictEqual(C.normalizeWidth("61em"), "61em");
  assert.strictEqual(C.normalizeWidth("1200px"), "1200px");
  assert.strictEqual(C.normalizeWidth("90%"), "90%");
  assert.strictEqual(C.normalizeWidth(" 61EM "), "61em"); // trim + lowercase
  assert.strictEqual(C.normalizeWidth("full"), "none");
  assert.strictEqual(C.normalizeWidth("none"), "none");
  assert.strictEqual(C.normalizeWidth("default"), "default");
  assert.strictEqual(C.normalizeWidth("72"), "72em");     // bare number -> em
  assert.strictEqual(C.normalizeWidth("garbage"), null);
  assert.strictEqual(C.normalizeWidth(""), null);
  assert.strictEqual(C.normalizeWidth(null), null);
});

test("clampEm clamps to [44, 500] and snaps to step", () => {
  assert.strictEqual(C.clampEm(60), 60);
  assert.strictEqual(C.clampEm(10), 44);     // below min
  assert.strictEqual(C.clampEm(200), 200);   // within range
  assert.strictEqual(C.clampEm(600), 500);   // above max
  assert.strictEqual(C.clampEm("63"), 64);   // snap to 2em step
  assert.strictEqual(C.clampEm("xyz"), 80);  // NaN -> default
});

test("widthToControls maps stored width to slider state", () => {
  assert.deepStrictEqual(C.widthToControls("none"), { full: true, em: 80 });
  assert.deepStrictEqual(C.widthToControls("100%"), { full: true, em: 80 });
  assert.deepStrictEqual(C.widthToControls(undefined), { full: true, em: 80 });
  assert.deepStrictEqual(C.widthToControls("default"), { full: true, em: 80 });
  assert.deepStrictEqual(C.widthToControls("60em"), { full: false, em: 60 });
  assert.deepStrictEqual(C.widthToControls("200em"), { full: false, em: 200 });
  assert.deepStrictEqual(C.widthToControls("600em"), { full: false, em: 500 }); // clamp max
});

test("controlsToWidth serializes slider state", () => {
  assert.strictEqual(C.controlsToWidth({ full: true, em: 80 }), "none");
  assert.strictEqual(C.controlsToWidth({ full: false, em: 60 }), "60em");
});

test("width round-trips through controls", () => {
  const r = C.widthToControls(C.controlsToWidth({ full: false, em: 64 }));
  assert.deepStrictEqual(r, { full: false, em: 64 });
});

test("loadPrefs tolerates bad JSON and missing key", () => {
  assert.deepStrictEqual(C.loadPrefs({ getItem: () => "{not json" }), {});
  assert.deepStrictEqual(C.loadPrefs({ getItem: () => null }), {});
  assert.deepStrictEqual(C.loadPrefs({ getItem: () => '{"compact":true}' }), { compact: true });
});
