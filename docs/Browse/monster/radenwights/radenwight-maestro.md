---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "12"
free_strike: 4
intuition: 0
keywords:
    - Humanoid
    - Radenwight
level: 1
might: -2
movement: Climb
name: Radenwight Maestro
organization: Leader
presence: 3
reason: 0
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-maestro
size: 1S
speed: 5
stability: 1
stamina: "80"
type: statblock
---

# Radenwight Maestro

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-maestro","name":"Radenwight Maestro","ancestry":"Humanoid, Radenwight","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Cacophony","cost":"Signature","usage":"Main action","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"8 sonic damage; [slide](../../../movement/forced-movement/) 5, the maestro [shifts](../../../movement/shifting/) up to 5 squares","low":"3 sonic damage; [slide](../../../movement/forced-movement/) 1, the maestro can [shift](../../../movement/shifting/) 1 square","mid":"6 sonic damage; [slide](../../../movement/forced-movement/) 3, the maestro [shifts](../../../movement/shifting/) up to 3 squares"}},"sections":[{"label":"Effect","text":"Each ally within distance can use Ready Rodent as a free triggered action once before the end of the round."}]},{"kind":"ability","action":"maneuver","name":"Tempo Changer","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two enemies","powerRoll":{"formula":"+ 3","tiers":{"high":"P \u003c 3 [slowed](../../../condition/slowed/) (save ends)","low":"P \u003c 1 [slowed](../../../condition/slowed/) (save ends)","mid":"P \u003c 2 [slowed](../../../condition/slowed/) (save ends)"}},"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"Each ally within 3 squares of any target has a +2 bonus to speed until the end of their next turn."}]},{"kind":"ability","action":"triggered","name":"Ever-Ready Rodent","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Free triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to an ally or takes damage from an ally."},{"label":"Effect","text":"The maestro makes a [free strike](../../../feature/common/main-actions/free-strike/) against the target."}]},{"kind":"passive","action":"passive","name":"[End Effect](../../../rule/monster/end-effect/)","body":"At the end of each of their turns, the maestro can take 5 damage to end one effect on them that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Overture","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target can [shift](../../../movement/shifting/) up to their speed or take the Defend action."}]},{"kind":"villain","action":"villain","name":"Solo Act","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["Ranged"],"distance":"Ranged 15","target":"One creature","sections":[{"label":"Effect","text":"Until the end of their next turn, the target halves any damage they take, gains a +4 damage bonus to [strikes](../../../rule/combat/strike/), and has their speed doubled."}]},{"kind":"villain","action":"villain","name":"Rondo of Rat","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["Area"],"distance":"10 burst","target":"Each dead ally in the area","sections":[{"label":"Effect","text":"Each target stands, makes a [free strike](../../../feature/common/main-actions/free-strike/), then falls dead again. Any ally of the targets can use Ready Rodent as a free triggered action once in conjunction with these free strikes."}]}]}
</script></div>
