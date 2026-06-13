---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "60"
free_strike: 6
immunities:
    - Fire 6
intuition: 1
keywords:
    - Beast
    - Chimera
level: 3
might: 3
movement: Fly
name: Chimera
organization: Solo
presence: 0
reason: -2
scc: mcdm.monsters.v1/monster.chimera.statblock/chimera
size: "2"
speed: 10
stability: 1
stamina: "300"
type: statblock
---

# Chimera

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"chimera","name":"Chimera","ancestry":"Beast, Chimera","level":"3","role":"Solo","roleKey":"solo","ev":"60","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"300"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the chimera can take 5 damage to end one effect on them that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The chimera can take two turns each round. They can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Volant","body":"When the chimera makes a creature [winded](../../../rule/health/winded/) or reduces them to 0 [Stamina](../../../rule/health/stamina/), they can move their speed toward an enemy."},{"kind":"ability","action":"main","name":"Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"16 damage","low":"9 damage","mid":"13 damage"}},"sections":[{"label":"Effect","text":"This strike deals an extra 3 damage if it gains an [edge](../../../rule/dice/edge/) or has a double edge."}]},{"kind":"ability","action":"main","name":"Dragon's Eruption (5 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"7 fire damage; A \u003c 3 7 fire damage","low":"3 fire damage; A \u003c 1 3 fire damage","mid":"5 fire damage; A \u003c 2 5 fire damage"}}},{"kind":"ability","action":"main","name":"Roar (5 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"10 psychic damage; I \u003c 3 [frightened](../../../condition/frightened/) (save ends)","low":"4 psychic damage","mid":"8 psychic damage; I \u003c 2 [frightened](../../../condition/frightened/) (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Lion's Toss","usage":"Maneuver","keywords":["Melee","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"Vertical push 5","low":"Vertical push 2","mid":"Vertical push 3"}}},{"kind":"ability","action":"triggered","name":"Ram's Defiance","usage":"Triggered action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"The triggering creature","powerRoll":{"formula":"+ 3","tiers":{"high":"10 damage; [prone](../../../condition/prone/); M \u003c 3 [slowed](../../../condition/slowed/) (save ends)","low":"6 damage; M \u003c 1 [slowed](../../../condition/slowed/) (save ends)","mid":"8 damage; [prone](../../../condition/prone/); M \u003c 2 [slowed](../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Trigger","text":"A creature makes a strike against the chimera and obtains a tier 1 outcome."},{"label":"Effect","text":"The chimera [shifts](../../../movement/shifting/) up to 5 squares. If they end this shift within distance of the target, make a power roll."}]},{"kind":"villain","action":"villain","name":"Overture of Destruction","cost":"Villain Action 1","keywords":["Area"],"distance":"1 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The chimera can use Bite and Lion's Toss against each target."}]},{"kind":"villain","action":"villain","name":"Fire Solo","cost":"Villain Action 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The chimera uses Dragon's Eruption and Roar without spending [Malice](../../../rule/monster/malice/)."}]},{"kind":"villain","action":"villain","name":"Chorus of Destruction","cost":"Villain Action 3","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The chimera uses Roar, then [shifts](../../../movement/shifting/) up to their speed and can make a [free strike](../../../feature/common/main-actions/free-strike/) against each enemy who comes [adjacent](../../../rule/combat/adjacent/) to them during the shift. When the chimera ends this shift, they use Dragon's Eruption. The use of these abilities as part of this [villain action](../../../rule/monster/villain-action/) costs no [Malice](../../../rule/monster/malice/)."}]}]}
</script></div>
