---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "20"
free_strike: 5
intuition: 2
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 3
might: 3
name: War Dog Ground Commander
organization: Leader
presence: 2
reason: 3
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-ground-commander
size: 1M
speed: 5
stability: 2
stamina: "120"
type: statblock
---

# War Dog Ground Commander

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-ground-commander","name":"War Dog Ground Commander","ancestry":"Humanoid, Soulless, War Dog","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Conditioning Spear ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Psionic","Ranged","Strike"],"distance":"Melee 1 or ranged 5","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"15 damage; [pull](../../../../movement/forced-movement/) 3","low":"8 damage; [pull](../../../../movement/forced-movement/) 1","mid":"12 damage; [pull](../../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"One ally within 10 squares of the ground commander can make a [free strike](../../../../feature/common/main-actions/free-strike/)."}],"enhancements":[{"cost":"1 [Malice](../../../rule/monster/malice.md)","text":"A target who has I \u003c 2 and who is [adjacent](../../../../rule/combat/adjacent/) to the ground commander after this ability is resolved is [grabbed](../../../../condition/grabbed/) (save ends). This grab can't be escaped using the Escape Grab maneuver. The ground commander can grab up to two creatures at a time."}]},{"kind":"ability","action":"maneuver","name":"Highest Posthumous Promotion","usage":"Maneuver","keywords":["Area","Magic"],"distance":"10 burst","target":"Each war dog in the area","sections":[{"label":"Effect","text":"Any target who has a loyalty collar is reduced to 0 [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"ability","action":"triggered","name":"Final Orders","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One ally","sections":[{"label":"Trigger","text":"The target takes damage, is [forced moved](../../../../movement/forced-movement/), or is reduced to 0 [Stamina](../../../../rule/health/stamina/)."},{"label":"Effect","text":"Even if reduced to 0 [Stamina](../../../../rule/health/stamina/), the target moves up to their speed and can make a [free strike](../../../../feature/common/main-actions/free-strike/) after the triggering effect is resolved. The target then immediately dies."}]},{"kind":"passive","action":"passive","name":"[End Effect]","cost":"../../../rule/monster/end-effect.md","body":"At the end of each of their turns, the ground commander can take 5 damage to end one effect on them that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the ground commander is reduced to 0 [Stamina](../../../../rule/health/stamina/), their loyalty collar explodes, dealing 2d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object."},{"kind":"ability","action":"main","name":"Combined Arms ([Villain Action](../../../rule/monster/villain-action.md) 1)","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target can make a ranged [free strike](../../../../feature/common/main-actions/free-strike/), then immediately use the Charge main action."}]},{"kind":"ability","action":"main","name":"Make an Example of Them ([Villain Action](../../../rule/monster/villain-action.md) 2)","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One enemy","sections":[{"label":"Effect","text":"Each ally within 5 squares of the target moves up to their speed and can make a [free strike](../../../../feature/common/main-actions/free-strike/) against the target. If the target has I \u003c 2, they are [frightened](../../../../condition/frightened/) of the ground commander (save ends)."}]},{"kind":"ability","action":"main","name":"Claim Them for the Body Banks ([Villain Action](../../../rule/monster/villain-action.md) 3)","keywords":["Area","Magic"],"distance":"10 burst","target":"Each creature in the area","sections":[{"label":"Effect","text":"Each target ally [shifts](../../../../movement/shifting/) up to 2 squares and can use the Grab maneuver. Until the end of the encounter, each target enemy takes a bane on the Escape Grab maneuver."}]}]}
</script></div>
