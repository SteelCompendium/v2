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

// The book spells the minion-group qualifier both ways: "3 for four minions"
// (104 statblocks) and "3 for 4 minions" (12 — angulotl, dwarf, radenwight).
// Both mean "this EV buys four minions".
test("parseEV accepts the digit spelling of the minion group", () => {
  assert.deepStrictEqual(E.parseEV("3 for 4 minions"), { ev: 3, perFour: true });
  assert.deepStrictEqual(E.parseEV("12 for 4 minions"), { ev: 12, perFour: true });
  // "4" must be the group size, not any stray digit
  assert.deepStrictEqual(E.parseEV("40"), { ev: 40, perFour: false });
  assert.deepStrictEqual(E.parseEV("14"), { ev: 14, perFour: false });
});

// The statblock-page "+" reads the head chip verbatim, e.g. "EV 3 for 4 minions".
test("parseEV tolerates the head-chip 'EV ' prefix", () => {
  assert.deepStrictEqual(E.parseEV("EV 3 for 4 minions"), { ev: 3, perFour: true });
  assert.deepStrictEqual(E.parseEV("EV 10 for four minions"), { ev: 10, perFour: true });
  assert.deepStrictEqual(E.parseEV("EV 16"), { ev: 16, perFour: false });
  assert.deepStrictEqual(E.parseEV("EV -"), { ev: null, perFour: false });
});

// Bug report: four level-1 minions (EV 3 for four) were billed 12, not 3.
test("a bought group of four minions costs the statblock EV once", () => {
  ["3 for four minions", "3 for 4 minions", "EV 3 for 4 minions"].forEach((ev) => {
    const picks = E.addPick([], { href: "m", name: "Angulotl Cleaver", ev: ev,
      organization: "Minion", level: 1 });
    assert.strictEqual(picks[0].count, 4, ev);
    assert.strictEqual(E.totalEV(picks), 3, ev);
  });
});

// Quick-build cross-check: "Eight minions fill one hero slot", and a 1st-level
// hero's ES is 6 — so eight level-1 minions must total 6 EV.
test("eight level-1 minions equal one 1st-level hero slot", () => {
  const picks = E.setCount(
    E.addPick([], { href: "m", name: "Clawfish", ev: "3 for 4 minions",
      organization: "Minion", level: 1 }), "m", 8);
  assert.strictEqual(E.totalEV(picks), E.heroES(1));
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
