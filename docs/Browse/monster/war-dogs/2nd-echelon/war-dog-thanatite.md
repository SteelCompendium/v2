---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "8"
free_strike: 3
intuition: 3
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 6
might: 1
name: War Dog Thanatite
organization: Horde
presence: 1
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-thanatite
size: 1M
speed: 5
stability: 0
stamina: "35"
type: statblock
---

# War Dog Thanatite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-thanatite","name":"War Dog Thanatite","ancestry":"Humanoid, Soulless, War Dog","level":"6","role":"Horde Controller","roleKey":"controller","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"35"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Snaking Entrails","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One ally","powerRoll":{"formula":"+ 3","tiers":{"high":"7 corruption damage; A \u003c 3 [restrained](../../../../condition/restrained/) (save ends)","low":"3 corruption damage; A \u003c 1 [slowed](../../../../condition/slowed/) (save ends)","mid":"5 corruption damage; A \u003c 2 [slowed](../../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"The target dies and the thanatite makes one power roll against each enemy within 2 squares of the target."}],"enhancements":[{"cost":"3 [Malice](../../../../rule/monster/malice/)","text":"If an affected enemy is [adjacent](../../../../rule/combat/adjacent/) to any corpse, they are [frightened](../../../../condition/frightened/) of the thanatite (save ends)."}]},{"kind":"ability","action":"maneuver","name":"Wall of Flesh","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"10 wall within 10","target":"One corpse","sections":[{"label":"Effect","text":"The target spawns a wall of bloody muscle and pulsing viscera that must share one or more squares with the target. Each enemy in the area when the wall is created vertically [slides](../../../../movement/forced-movement/) up to 2 squares and is knocked [prone](../../../../condition/prone/). Each square of the wall has 3 [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the thanatite is reduced to 0 [Stamina](../../../../rule/health/stamina/), their loyalty collar explodes, dealing 2d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object."}]}
</script></div>
