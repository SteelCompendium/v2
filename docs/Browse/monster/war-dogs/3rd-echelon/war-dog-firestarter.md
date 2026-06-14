---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 3
immunities:
    - Fire 8
intuition: 4
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 8
might: 0
name: War Dog Firestarter
organization: Horde
presence: 1
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.war-dogs.3rd-echelon.statblock/war-dog-firestarter
size: 1M
speed: 5
stability: 0
stamina: "45"
type: statblock
---

# War Dog Firestarter

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-firestarter","name":"War Dog Firestarter","ancestry":"Humanoid, Soulless, War Dog","level":"8","role":"Horde Hexer","roleKey":"hexer","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"45"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Fire 8","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Twin Flamebelchers","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"10 x 1 line within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"8 fire damage; A \u003c 4 the target is seared (save ends)","low":"3 fire damage; A \u003c 2 the target is seared (save ends)","mid":"6 fire damage; A \u003c 3 the target is seared (save ends)"}},"sections":[{"label":"Effect","text":"A seared creature takes a bane on strikes and has damage weakness 5. If this ability obtains a tier 3 outcome against one or more creatures who are already seared, the firestarter can use Enflame as a free [triggered action](../../../../rule/combat/triggered-action/)."}]},{"kind":"ability","action":"maneuver","name":"Enflame","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","powerRoll":{"formula":"+ 4","tiers":{"high":"6 fire damage; A \u003c 4 the target is seared (save ends)","low":"2 fire damage","mid":"4 fire damage; A \u003c 3 the target is seared (save ends)"}},"sections":[{"label":"Effect","text":"This ability targets each enemy within 2 squares of any seared creature within distance."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the firestarter is reduced to 0 [Stamina](../../../../rule/health/stamina/), their loyalty collar explodes, dealing 3d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object."}]}
</script></div>
