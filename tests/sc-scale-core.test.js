const test = require("node:test");
const assert = require("node:assert");
const S = require("../docs/javascripts/sc-scale-core.js");

test("mods lookup (goblin warrior: horde harrier)", () => {
  const m = S.mods("Harrier", "Horde");
  assert.strictEqual(m.roleMod, 20);
  assert.strictEqual(m.dmgMod, 0);
  assert.strictEqual(m.evOrgMod, 0.5);
  assert.strictEqual(m.stamOrgMod, 0.5);
  assert.ok(m.halveDamage);
  assert.ok(!m.isLeaderOrSolo);
});

test("book cross-checks at level 1 (formula reproduces the printed block)", () => {
  const m = S.mods("Harrier", "Horde");
  // Goblin Warrior prints EV 3, Stamina 15 at level 1; the formulas give
  // EV(3)=⌈10×.5⌉=5 and Stam(3)=⌈50×.5⌉=25.
  assert.strictEqual(3 + S.evDelta(1, 3, m), 5);
  assert.strictEqual(15 + S.staminaDelta(1, 3, m), 25);
});

test("solo stamina uses ×5, ev ×6", () => {
  const m = S.mods("Solo", "Solo");
  assert.strictEqual(S.staminaDelta(1, 2, m), 50); // ⌈(20+30)×5⌉−⌈(10+30)×5⌉
  assert.strictEqual(S.evDelta(1, 2, m), 12);      // ⌈8×6⌉−⌈6×6⌉
});

test("damageDelta: tier mods, horde halving, strike char bump", () => {
  const m = S.mods("Harrier", "Horde");
  assert.strictEqual(S.damageDelta(1, 3, 1, m, false), 1); // 2×0.6/2 = 0.6 → 1
  assert.strictEqual(S.damageDelta(1, 3, 1, m, true), 1);  // echelon 1→1, no bump
  assert.strictEqual(S.damageDelta(1, 4, 1, m, true), 2);  // 0.9 + charΔ1 → 2
  const p = S.mods("Brute", "Platoon");
  assert.strictEqual(S.damageDelta(1, 3, 3, p, false), 3); // 2×1.4 = 2.8 → 3
});

test("potencyDelta follows echelon; applyTierText rewrites", () => {
  const m = S.mods("Harrier", "Horde");
  assert.strictEqual(S.potencyDelta(1, 4, m), 1);
  assert.strictEqual(
    S.applyTierText("5 damage; M < 1 bleeding (save ends)", 2, 1),
    "7 damage; M < 2 bleeding (save ends)");
  assert.strictEqual(S.applyTierText("3 damage", -5, 0), "1 damage"); // floor 1
  assert.strictEqual(S.applyTierText("7 damage; A < 6 dazed", 0, 3), "7 damage; A < 6 dazed"); // cap 6
  assert.strictEqual(S.applyTierText("4 fire damage", 2, 0), "6 fire damage"); // typed damage
});

test("charBonus caps at +5; leader/solo +1", () => {
  assert.strictEqual(S.charBonus(5, false), 3); // 1 + echelon(5)=2
  assert.strictEqual(S.charBonus(5, true), 4);
  assert.strictEqual(S.charBonus(12, true), 5); // cap
});

test("unknown role yields null mods", () => {
  assert.strictEqual(S.mods("Companion", "—"), null);
  assert.strictEqual(S.mods("", ""), null);
});
