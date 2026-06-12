---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "7"
free_strike: 3
intuition: 3
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 5
might: 0
name: War Dog Tormentite
organization: Horde
presence: 0
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-tormentite
size: 1M
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# War Dog Tormentite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-tormentite","name":"War Dog Tormentite","ancestry":"Humanoid, Soulless, War Dog","level":"5","role":"Horde Hexer","roleKey":"hexer","ev":"7","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Mark of Agony","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"9 corruption damage; the target is marked (save ends)","low":"6 corruption damage","mid":"8 corruption damage; the target is marked (save ends)"}},"sections":[{"label":"Effect","text":"Strikes made against a target marked this way gain an edge. Additionally, whenever the tormentite takes damage, each target marked by them takes 3 damage."}]},{"kind":"ability","action":"main","name":"Vortex of Pain","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"5 corruption damage; one ally in the area can end one effect on them that can be ended by a saving throw, and can give that effect to one target","low":"2 corruption damage","mid":"4 corruption damage"}},"sections":[{"label":"Effect","text":"The tormentite regains 2 Stamina for each creature targeted by this ability."}]},{"kind":"passive","action":"passive","name":"Persistent Pain","body":"From the start of the encounter, the tormentite takes 1 damage at the start of each of their turns."},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the tormentite is reduced to 0 Stamina, their loyalty collar explodes, dealing 2d6 damage to each adjacent enemy and object."}]}
</script></div>
