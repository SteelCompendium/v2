---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "4"
free_strike: 2
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 2
might: 2
name: War Dog Subcommander
organization: Horde
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-subcommander
size: 1M
speed: 5
stability: 0
stamina: "20"
type: statblock
---

# War Dog Subcommander

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-subcommander","name":"War Dog Subcommander","ancestry":"Humanoid, Soulless, War Dog","level":"2","role":"Horde Support","roleKey":"support","ev":"4","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Command Saber","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage","low":"4 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"One ally within 5 squares of the subcommander can make a [free strike](../../../../feature/common/main-actions/free-strike/) against the target."}]},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"passive","action":"passive","name":"The Iron Saint Does Not Recognize Retreat","body":"Each ally within 5 squares of the subcommander gains a +3 bonus to stability."},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the subcommander is reduced to 0 [Stamina](../../../../rule/health/stamina/), their loyalty collar explodes, dealing 1d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object."}]}
</script></div>
