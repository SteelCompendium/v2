---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "12"
free_strike: 4
intuition: 1
keywords:
    - Humanoid
    - Lizardfolk
level: 1
might: 3
movement: Climb, swim
name: Lizardfolk Deathrex
organization: Leader
presence: 2
reason: 0
scc: mcdm.monsters.v1/monster.lizardfolk.statblock/lizardfolk-deathrex
size: "2"
speed: 5
stability: 2
stamina: "80"
type: statblock
---

# Lizardfolk Deathrex

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lizardfolk-deathrex","name":"Lizardfolk Deathrex","ancestry":"Humanoid, Lizardfolk","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Ripper Spear","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"12 damage; [pull](../../../movement/forced-movement/) 2; A \u003c 3 [bleeding](../../../condition/bleeding/) (save ends)","low":"7 damage; [pull](../../../movement/forced-movement/) 1; A \u003c 1 [bleeding](../../../condition/bleeding/) (save ends)","mid":"10 damage; [pull](../../../movement/forced-movement/) 1; A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)"}},"enhancements":[{"cost":"1 [Malice](../../../rule/monster/malice/)","text":"One target [adjacent](../../../rule/combat/adjacent/) to the deathrex is [grabbed](../../../condition/grabbed/) in the deathrex's mouth."}]},{"kind":"ability","action":"main","name":"Death Roll","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One grabbed creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"15 damage; M \u003c 3 [dazed](../../../condition/dazed/) (save ends)","low":"8 damage; M \u003c 1 [dazed](../../../condition/dazed/) (save ends)","mid":"12 damage; M \u003c 2 [dazed](../../../condition/dazed/) (save ends)"}},"sections":[{"label":"Effect","text":"The target is no longer [grabbed](../../../condition/grabbed/) by the deathrex, and the deathrex [slides](../../../movement/forced-movement/) them up to 5 squares."}]},{"kind":"ability","action":"maneuver","name":"Trundle","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The deathrex moves up to their speed. They can make a [free strike](../../../feature/common/main-actions/free-strike/) against each creature who makes an opportunity attack against them during this movement."}]},{"kind":"ability","action":"triggered","name":"Swat the Fly","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object within distance moves or [shifts](../../../movement/shifting/) away from the deathrex."},{"label":"Effect","text":"The deathrex [slides](../../../movement/forced-movement/) the target up to 5 squares."}]},{"kind":"passive","action":"passive","name":"Rex Reptilian Escape","body":"While the deathrex has a tail, whenever they are affected by an effect that can be ended by a [saving throw](../../../rule/general/saving-throw/) or that ends at the end of their turn, they can lose their tail to immediately end that effect, then [shift](../../../movement/shifting/) up to 2 squares."},{"kind":"villain","action":"villain","name":"Snack Attack","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target moves up to their speed and can make a [free strike](../../../feature/common/main-actions/free-strike/). Each target gains temporary [Stamina](../../../rule/health/stamina/) equal to the damage they deal."}]},{"kind":"villain","action":"villain","name":"Shed Some Skin","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The deathrex [shifts](../../../movement/shifting/) up to their speed, leaving behind a shed skin duplicate in the space they started in. The duplicate acts on the deathrex's turn and has the deathrex's characteristics, but has 10 [Stamina](../../../rule/health/stamina/) and no [villain actions](../../../rule/monster/villain-action/)."}]},{"kind":"villain","action":"villain","name":"Thresher Thrasher","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target moves up to their speed. Until the end of the encounter, whenever a creature comes [adjacent](../../../rule/combat/adjacent/) to a target or starts their turn there, the target can make a [free strike](../../../feature/common/main-actions/free-strike/) against them."}]}]}
</script></div>
