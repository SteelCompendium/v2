---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 2
name: Orc Chainlock
organization: Platoon
presence: 0
reason: 1
role: Hexer
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-chainlock
size: 1L
speed: 5
stability: 2
stamina: "20"
type: statblock
---

# Orc Chainlock

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-chainlock","name":"Orc Chainlock","ancestry":"Humanoid, Orc","level":"1","role":"Platoon Hexer","roleKey":"hexer","ev":"6","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Hook and Chain","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; pull 3; M \u003c 2 the target is hooked (save ends)","low":"5 damage; pull 1; M \u003c 0 the target is hooked (save ends)","mid":"7 damage; pull 2; M \u003c 1 the target is hooked (save ends)"}},"sections":[{"label":"Effect","text":"A hooked target can't move more than 3 squares away from the chainlock's position when this ability is used."}]},{"kind":"ability","action":"main","name":"Heavy Crossbolt","cost":"3 Malice","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; prone; A \u003c 2 slowed (save ends)","low":"5 damage; A \u003c 0 slowed (save ends)","mid":"7 damage; A \u003c 1 slowed (save ends)"}}},{"kind":"passive","action":"passive","name":"Chain Link","body":"Whenever the chainlock is force moved by a creature's melee ability, the creature is pulled the same distance toward the chainlock after the forced movement is resolved."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the chainlock is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the chainlock is reduced to 1 Stamina instead."}]}
</script></div>
