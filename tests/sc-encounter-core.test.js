const test = require("node:test");
const assert = require("node:assert");
const E = require("../docs/javascripts/sc-encounter-core.js");

test("parseEV handles plain, minion-group, and missing", () => {
  assert.deepStrictEqual(E.parseEV("16"), { ev: 16, perFour: false });
  assert.deepStrictEqual(E.parseEV("10 for four minions"), { ev: 10, perFour: true });
  assert.deepStrictEqual(E.parseEV("7 for four minions"), { ev: 7, perFour: true });
  assert.deepStrictEqual(E.parseEV("-"), { ev: null, perFour: false });
  assert.deepStrictEqual(E.parseEV(""), { ev: null, perFour: false });
});

test("encounter strength math matches the book table", () => {
  assert.strictEqual(E.heroES(1), 6);          // 1st-level hero = 6
  assert.strictEqual(E.heroES(3), 10);         // book: 4+2+2+2
  assert.strictEqual(E.partyES(5, 3, 0), 50);  // book: five 3rd-level heroes = 50
  assert.strictEqual(E.partyES(5, 3, 2), 60);  // +2 avg victories = +1 hero
});

test("bands + classify follow Step 4", () => {
  const b = E.bands(50, 10); // five 3rd-level heroes
  assert.deepStrictEqual(b, { trivialMax: 40, easyMax: 50, standardMax: 60, hardMax: 80 });
  assert.strictEqual(E.classify(35, b), "Trivial");
  assert.strictEqual(E.classify(45, b), "Easy");
  assert.strictEqual(E.classify(55, b), "Standard");
  assert.strictEqual(E.classify(60, b), "Standard"); // inclusive upper
  assert.strictEqual(E.classify(75, b), "Hard");
  assert.strictEqual(E.classify(81, b), "Extreme");
});

test("minions price by groups of four", () => {
  const minion = { href: "m", ev: "10 for four minions", count: 4 };
  assert.strictEqual(E.pickCost(minion), 10);
  assert.strictEqual(E.pickCost({ ...minion, count: 8 }), 20);
  assert.strictEqual(E.pickCost({ href: "x", ev: "16", count: 2 }), 32);
});

test("addPick starts minions at 4; setCount snaps and removes at 0", () => {
  let picks = E.addPick([], { href: "m", name: "Mob", ev: "10 for four minions", organization: "Minion", level: 1 });
  assert.strictEqual(picks[0].count, 4);
  picks = E.setCount(picks, "m", 6);
  assert.strictEqual(picks[0].count, 8); // snap up
  picks = E.setCount(picks, "m", 0);
  assert.strictEqual(picks.length, 0);
});

test("addPick increments existing picks (minions by 4, others by 1)", () => {
  let picks = E.addPick([], { href: "w", name: "Warrior", ev: "3", organization: "Horde", level: 1 });
  picks = E.addPick(picks, { href: "w", name: "Warrior", ev: "3", organization: "Horde", level: 1 });
  assert.strictEqual(picks.length, 1);
  assert.strictEqual(picks[0].count, 2);
});

test("levelWarn flags over-level and solo-over-level", () => {
  assert.ok(E.levelWarn(4, 1, "Horde"));  // 4 > 1+2
  assert.ok(!E.levelWarn(3, 1, "Horde"));
  assert.ok(E.levelWarn(3, 1, "Solo"));   // solo: only +1 allowed
  assert.ok(!E.levelWarn(2, 1, "Solo"));
});

test("share codec round-trips and drops unknowns", () => {
  const picks = [
    { href: "../Browse/monster/goblin/goblin-warrior/", name: "Goblin Warrior", ev: "3", organization: "Horde", level: 1, count: 4 },
    { href: "../Browse/monster/goblin/war-spider/", name: "War Spider", ev: "8", organization: "Platoon", level: 1, count: 1 },
  ];
  const s = E.encodeShare(picks);
  assert.strictEqual(s, "goblin-warrior:4,war-spider:1");
  const bySlug = { "goblin-warrior": picks[0], "war-spider": picks[1] };
  const back = E.decodeShare("goblin-warrior:2,nonsense:9,war-spider:1", bySlug);
  assert.strictEqual(back.length, 2);
  assert.strictEqual(back[0].count, 2);
});
