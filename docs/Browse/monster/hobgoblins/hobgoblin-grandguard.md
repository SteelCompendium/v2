---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "16"
free_strike: 6
immunities:
    - Fire 6
intuition: 0
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 6
might: 3
name: Hobgoblin Grandguard
organization: Platoon
presence: 2
reason: 3
role: Defender
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-grandguard
size: "2"
speed: 4
stability: 4
stamina: "111"
type: statblock
---

# Hobgoblin Grandguard

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-grandguard","name":"Hobgoblin Grandguard","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"6","role":"Platoon Defender","roleKey":"defender","ev":"16","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"4"},{"l":"Stamina","v":"111"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 6","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Tower Shield Smash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; [prone](../../../condition/prone/)","low":"9 damage","mid":"14 damage"}},"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"Each ally [adjacent](../../../rule/combat/adjacent/) to a [prone](../../../condition/prone/) target can make a [free strike](../../../feature/common/main-actions/free-strike/) against that target."}]},{"kind":"ability","action":"main","name":"Thunder Rush","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Area","Charge","Weapon"],"distance":"1 x 2 line within 1","target":"Each enemy or object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"14 damage","low":"6 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"Each target is [pushed](../../../movement/forced-movement/) up to 10 squares in the same direction, and the grandguard [shifts](../../../movement/shifting/) into the area left behind by the targets."}]},{"kind":"passive","action":"passive","name":"Wide Guard","body":"Any strike made against an ally within 2 squares of the grandguard takes a bane."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the grandguard is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the grandguard takes 3 fire damage."}]}
</script></div>
