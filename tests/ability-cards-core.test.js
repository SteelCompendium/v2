const test = require("node:test");
const assert = require("node:assert");
const Core = require("../docs/javascripts/ability-cards-core.js");

test("hasStatblockDiceRoll detects inline dice notation in titles", () => {
  assert.ok(Core.hasStatblockDiceRoll("Molten Strike 2d10 + R (Signature Ability)"));
  assert.ok(Core.hasStatblockDiceRoll("Grasping Appendages 2d10 + 5 (Signature Ability)"));
  assert.ok(Core.hasStatblockDiceRoll("Diabolic Probe 2d10 + highest characteristic"));
  assert.strictEqual(Core.hasStatblockDiceRoll("Call Forth (1+ Essence)"), false);
  assert.strictEqual(Core.hasStatblockDiceRoll("Soulsight"), false);
  assert.strictEqual(Core.hasStatblockDiceRoll(""), false);
  assert.strictEqual(Core.hasStatblockDiceRoll(null), false);
});

test("isTierLine matches bare damage-led tier outcomes only", () => {
  assert.ok(Core.isTierLine("5 acid damage; M < WEAK weakened (EoT)"));
  assert.ok(Core.isTierLine("11 corruption damage; R < 2 slowed (save ends)"));
  assert.ok(Core.isTierLine("2 damage"));
  assert.strictEqual(Core.isTierLine("Effect: After the squad uses this ability…"), false);
  assert.strictEqual(Core.isTierLine("Trigger: You use a triggered action."), false);
  assert.strictEqual(Core.isTierLine(""), false);
});

test("tierKeyAt maps position to low/mid/high", () => {
  assert.strictEqual(Core.tierKeyAt(0), "low");
  assert.strictEqual(Core.tierKeyAt(1), "mid");
  assert.strictEqual(Core.tierKeyAt(2), "high");
  assert.strictEqual(Core.tierKeyAt(3), null);
});
