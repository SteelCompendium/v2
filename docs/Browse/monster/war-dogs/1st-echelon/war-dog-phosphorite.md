---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "4"
free_strike: 2
immunities:
    - Acid 2
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 2
might: 0
name: War Dog Phosphorite
organization: Horde
presence: 0
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-phosphorite
size: 1M
speed: 5
stability: 0
stamina: "15"
type: statblock
---

# War Dog Phosphorite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-phosphorite","name":"War Dog Phosphorite","ancestry":"Humanoid, Soulless, War Dog","level":"2","role":"Horde Hexer","roleKey":"hexer","ev":"4","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Acid 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Caustic Detonator","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"The creature can attach the detonator to another creature or object within 5 squares of them.","low":"No effect.","mid":"The detonator is disarmed and destroyed."}},"sections":[{"label":"Effect","text":"A detonator attaches to the target. At the end of each round, roll a die. On an odd result, the detonator explodes, triggering the following power roll."},{"label":"Special","text":"A creature [adjacent](../../../../rule/combat/adjacent/) to the target can attempt an **Agility test** as a maneuver to remove the detonator."}]},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the phosphorite is reduced to 0 [Stamina](../../../../rule/health/stamina/), their loyalty collar explodes, dealing 1d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object."}]}
</script></div>
