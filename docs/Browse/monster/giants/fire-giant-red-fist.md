---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "44"
free_strike: 10
immunities:
    - Fire 9
intuition: 2
keywords:
    - Fire Giant
    - Giant
level: 9
might: 4
name: Fire Giant Red Fist
organization: Elite
presence: 1
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.giants.statblock/fire-giant-red-fist
size: "4"
speed: 8
stability: 5
stamina: "240"
type: statblock
---

# Fire Giant Red Fist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"fire-giant-red-fist","name":"Fire Giant Red Fist","ancestry":"Fire Giant, Giant","level":"9","role":"Elite Brute","roleKey":"brute","ev":"44","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"Fire 9","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Flaming Punch","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"23 fire damage; push 6; A \u003c 4 burning (save ends)","low":"14 fire damage; push 2","mid":"19 fire damage; push 4; A \u003c 3 burning (save ends)"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"main","name":"Caldera","cost":"5 Malice","usage":"Main action","keywords":["Area"],"distance":"Special","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"The distance is a 4 burst; 15 fire damage; M \u003c 4 pull 6","low":"The distance is a 2 burst; 8 fire damage; M \u003c 2 pull 2","mid":"The distance is a 3 burst; 12 fire damage; M \u003c 3 pull 4"}},"sections":[{"label":"Effect","text":"The outermost squares of the area become a 1-square-tall wall of stone. The rest of the area is on fire until the end of the encounter. A creature who enters the area for the first time in a round or starts their turn there takes 3 fire damage."}]},{"kind":"ability","action":"maneuver","name":"Blazing Leap","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The red fist jumps up to 5 squares. Each creature adjacent to them when they land takes 5 fire damage."}]},{"kind":"ability","action":"triggered","name":"Heat and Pressure","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 3","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"Weakened and slowed (save ends)","mid":"Weakened (EoT)"}},"sections":[{"label":"Trigger","text":"A creature within distance willingly moves or shifts away from the red fist."},{"label":"Effect","text":"The target makes a **Might test**. A target with fire immunity automatically obtains a tier 3 outcome."}]},{"kind":"ability","action":"triggered","name":"Guardian Block","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 3","target":"Self","sections":[{"label":"Trigger","text":"An ally within distance is targeted by an enemy's ability."},{"label":"Effect","text":"The red fist becomes the target of the triggering ability, then can make a free strike against the enemy after the ability resolves."}]},{"kind":"passive","action":"passive","name":"Searing Skin","body":"Whenever an adjacent enemy grabs the red fist or uses a melee ability against them, that enemy takes 5 fire damage."}]}
</script></div>
