const test = require("node:test");
const assert = require("node:assert");
const C = require("./settings-core.js");

test("resolveSbPreview falls back to defaults when pref is empty", () => {
  const r = C.resolveSbPreview({});
  assert.deepStrictEqual(r, { stats: "on", meta: "off", chars: "off", feats: "off" });
});

test("resolveSbPreview applies explicit overrides", () => {
  const r = C.resolveSbPreview({ meta: "on", feats: "on" });
  assert.strictEqual(r.meta, "on");
  assert.strictEqual(r.feats, "on");
  assert.strictEqual(r.stats, "on");
});

test("resolveSbPreview ignores junk values, keeping default", () => {
  const r = C.resolveSbPreview({ stats: "maybe" });
  assert.strictEqual(r.stats, "on");
});

test("resolveSbPreview tolerates null/undefined", () => {
  assert.deepStrictEqual(C.resolveSbPreview(null), { stats: "on", meta: "off", chars: "off", feats: "off" });
});
