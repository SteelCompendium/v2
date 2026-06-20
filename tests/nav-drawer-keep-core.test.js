const test = require("node:test");
const assert = require("node:assert");
const C = require("../docs/javascripts/nav-drawer-keep-core.js");

// shouldRemember: arm the "keep open" flag only when, on mobile, the user
// clicks a nav link while the drawer is open.
test("shouldRemember is true on mobile when the drawer is open", () => {
  assert.strictEqual(C.shouldRemember(true, true), true);
});

test("shouldRemember is false on mobile when the drawer is closed", () => {
  assert.strictEqual(C.shouldRemember(true, false), false);
});

test("shouldRemember is false on desktop even when the drawer is open", () => {
  assert.strictEqual(C.shouldRemember(false, true), false);
});

test("shouldRemember is false on desktop when the drawer is closed", () => {
  assert.strictEqual(C.shouldRemember(false, false), false);
});

// shouldRestore: re-open the drawer after navigation only when the flag was
// set AND we are still on a mobile viewport.
test("shouldRestore is true when flag is set and viewport is mobile", () => {
  assert.strictEqual(C.shouldRestore("1", true), true);
});

test("shouldRestore is false when flag is set but viewport is desktop", () => {
  assert.strictEqual(C.shouldRestore("1", false), false);
});

test("shouldRestore is false when flag is unset on mobile", () => {
  assert.strictEqual(C.shouldRestore(null, true), false);
});

test("shouldRestore ignores junk flag values", () => {
  assert.strictEqual(C.shouldRestore("yes", true), false);
});
