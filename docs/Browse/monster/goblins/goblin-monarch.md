---
agility: 3
ev: "12"
free_strike: 4
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: 0
movement: Climb
name: Goblin Monarch
organization: Leader
presence: 3
reason: 1
scc: mcdm.monsters.v1/monster.goblins.statblock/goblin-monarch
size: 1S
speed: 6
stability: 1
stamina: "80"
type: statblock
---

# Goblin Monarch

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"goblin-monarch","name":"Goblin Monarch","ancestry":"Goblin, Humanoid","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Handaxe","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"13 damage","low":"7 damage","mid":"10 damage"}},"sections":[{"label":"Effect","text":"One ally within 10 squares of the monarch can make a free strike."}]},{"kind":"ability","action":"maneuver","name":"Get in Here!","cost":"1 Malice","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 20","target":"Special","sections":[{"label":"Effect","text":"Two goblin runners appear in unoccupied spaces within distance."}]},{"kind":"ability","action":"triggered","name":"Meat Shield","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"One ally","sections":[{"label":"Trigger","text":"A creature targets the monarch with a strike."},{"label":"Effect","text":"The ally is the target of the triggering strike instead."}]},{"kind":"passive","action":"passive","name":"Crafty","body":"The monarch doesn't provoke opportunity attacks by moving."},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the monarch can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"What Are You Waiting For?","cost":"Villain Action 1","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target can move up to their speed or make a free strike."}]},{"kind":"villain","action":"villain","name":"Focus Fire","cost":"Villain Action 2","keywords":["Ranged"],"distance":"Ranged 10","target":"One enemy or object","sections":[{"label":"Effect","text":"Each ally within 10 squares of the target can move up to their speed toward the target."}]},{"kind":"villain","action":"villain","name":"Kill!","cost":"Villain Action 3","keywords":["-"],"distance":"Special","target":"Special","sections":[{"label":"Effect","text":"Each enemy in the encounter takes 2 damage for each goblin adjacent to them."}]}]}
</script></div>
