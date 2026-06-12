---
printing: "1.01"
printing_book: "Bestiary"
agility: 3
ev: "44"
free_strike: 9
immunities:
    - Fire 10
intuition: 2
keywords:
    - Fire Giant
    - Giant
level: 9
might: 5
name: Fire Giant Chief
organization: Leader
presence: 3
reason: 0
scc: mcdm.monsters.v1/monster.giants.statblock/fire-giant-chief
size: "5"
speed: 10
stability: 10
stamina: "240"
type: statblock
---

# Fire Giant Chief

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"fire-giant-chief","name":"Fire Giant Chief","ancestry":"Fire Giant, Giant","level":"9","role":"Leader","roleKey":"leader","ev":"44","defenses":[{"l":"Size","v":"5"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"10"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Fire 10","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Roiling Fist","cost":"Signature","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 4","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"9 fire damage","low":"18 fire damage; prone; weakened (save ends)","mid":"14 fire damage; prone"}},"sections":[{"label":"Effect","text":"Each target makes either an **Agility test** or an **Intuition test**."}]},{"kind":"ability","action":"main","name":"Burning Kick","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 4","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"23 damage; push 15; A \u003c 5 9 fire damage","low":"14 damage; push 5; A \u003c 3 9 fire damage","mid":"19 damage; push 10; A \u003c 4 9 fire damage"}}},{"kind":"ability","action":"maneuver","name":"Lava Pillar","cost":"3 Malice","usage":"Maneuver","keywords":["Area","Ranged"],"distance":"3 cube within 10","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"9 fire damage; M \u003c 5 vertical push 5","low":"5 fire damage; M \u003c 3 vertical push 3","mid":"7 fire damage; M \u003c 4 vertical push 4"}}},{"kind":"ability","action":"triggered","name":"Fuel the Fire","cost":"1 Malice","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 12","target":"The triggering ally","sections":[{"label":"Trigger","text":"A fire giant ally within distance makes a strike."},{"label":"Effect","text":"The strike has a double edge and deals an extra 10 fire damage."}]},{"kind":"villain","action":"villain","name":"Forward!","cost":"Villain Action 1","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target shifts up to their speed and can make a free strike. Any enemy who takes damage from a free strike this way and who has A \u003c 4 is burning (save ends). A burning enemy takes 1d6 fire damage at the start of each of their turns."}]},{"kind":"villain","action":"villain","name":"Burning Legion","cost":"Villain Action 2","keywords":["Ranged"],"distance":"Ranged 15","target":"Special","sections":[{"label":"Effect","text":"The chief shifts up to 10 squares. Five fire giant fireballer then arrive in unoccupied spaces within distance."}]},{"kind":"villain","action":"villain","name":"All to Cinders","cost":"Villain Action 3","keywords":["Area"],"distance":"10 burst","target":"Self and each fire giant ally in the area","powerRoll":{"formula":"","tiers":{"high":"9 fire damage","low":"18 fire damage","mid":"14 fire damage"}},"sections":[{"label":"Effect","text":"Each target unleashes a wave of fire, and each enemy within 2 squares of any target makes an Agility test. An enemy affected by two targets takes a bane on the test, while an enemy affected by three or more targets has a double bane."}]},{"kind":"passive","action":"passive","name":"Scorching Skin","body":"Whenever an adjacent enemy grabs the chief or uses a melee ability against them, that enemy takes 9 fire damage, and if they have M \u003c 4 they are weakened (save ends)"}]}
</script></div>
