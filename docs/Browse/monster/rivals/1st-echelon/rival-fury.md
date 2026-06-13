---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 2
might: 2
name: Rival Fury
organization: Elite
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.rivals.1st-echelon.statblock/rival-fury
size: 1M
speed: 5
stability: 3
stamina: "100"
type: statblock
---

# Rival Fury

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-fury","name":"Rival Fury","ancestry":"Humanoid, Rival","level":"2","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Brutal Impact ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; [push](../../../../movement/forced-movement/) 3","low":"7 damage; [push](../../../../movement/forced-movement/) 1","mid":"11 damage; [push](../../../../movement/forced-movement/) 2"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"Each target who has M \u003c 1 is [slowed](../../../../condition/slowed/) (save ends)."}]},{"kind":"ability","action":"main","name":"Let's Tussle (2 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; M \u003c 2 [grabbed](../../../../condition/grabbed/)","low":"8 damage; M \u003c 0 [grabbed](../../../../condition/grabbed/)","mid":"13 damage; M \u003c 1 [grabbed](../../../../condition/grabbed/)"}},"sections":[{"label":"Effect","text":"The target must be the fury's size or smaller. While the target is [grabbed](../../../../condition/grabbed/) this way, the fury gains an edge on [strikes](../../../../rule/combat/strike/) against them."}]},{"kind":"passive","action":"passive","name":"Overwhelm","body":"Once per turn, when the fury [force moves](../../../../movement/forced-movement/) a creature or object, or [shifts](../../../../movement/shifting/) [adjacent](../../../../rule/combat/adjacent/) to a creature or object, they can make a [free strike](../../../../feature/common/main-actions/free-strike/) against that creature or object."},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the fury chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the fury and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
