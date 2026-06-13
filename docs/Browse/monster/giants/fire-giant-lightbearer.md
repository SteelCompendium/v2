---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "44"
free_strike: 9
immunities:
    - Fire 9
intuition: 4
keywords:
    - Fire Giant
    - Giant
level: 9
might: 4
name: Fire Giant Lightbearer
organization: Elite
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.giants.statblock/fire-giant-lightbearer
size: "4"
speed: 8
stability: 5
stamina: "200"
type: statblock
---

# Fire Giant Lightbearer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"fire-giant-lightbearer","name":"Fire Giant Lightbearer","ancestry":"Fire Giant, Giant","level":"9","role":"Elite Support","roleKey":"support","ev":"44","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Fire 9","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Flamelash","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 6","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 fire damage; slide 6","low":"13 fire damage; slide 2","mid":"17 fire damage; slide 4"}}},{"kind":"ability","action":"main","name":"Living Blaze","cost":"3 Malice","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 6","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"26 fire damage","low":"15 fire damage","mid":"21 fire damage"}},"sections":[{"label":"Effect","text":"The blaze ricochets, targeting one additional target within 4 squares of an original target and taking a bane against that target, or targeting two additional targets within 2 squares of an original target and having a double bane against those targets. The lightbearer makes one power roll against all targets."}]},{"kind":"ability","action":"maneuver","name":"Travel By Fire","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Two creatures or objects","sections":[{"label":"Effect","text":"The lightbearer can target themself with this ability. Each target takes 1d6 fire damage and teleports in a plume of smoke to swap places with the other target."}]},{"kind":"ability","action":"triggered","name":"Emergency Beacon","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The lightbearer takes damage."},{"label":"Effect","text":"The lightbearer emits a beacon of light until the start of their next turn. Each fire giant who has line of effect to the lightbearer has a double edge on abilities."}]},{"kind":"passive","action":"passive","name":"Healing Heat","body":"Any fire giant targeted by the lightbearer's damage-dealing abilities ignores the damage and instead regains Stamina equal to the damage that would have been dealt. If the lightbearer moves a fire giant using an ability, they can choose to ignore stability."},{"kind":"passive","action":"passive","name":"Searing Skin","body":"Whenever an adjacent enemy grabs the lightbearer or uses a melee ability against them, that enemy takes 5 fire damage."}]}
</script></div>
