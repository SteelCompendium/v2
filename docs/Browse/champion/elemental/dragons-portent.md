---
printing: "1.0"
printing_book: "The Summoner"
agility: 2
free_strike: 9
immunities:
    - Affinity 5
intuition: 5
keywords:
    - —
might: 2
movement: Fly
name: Dragon's Portent
presence: 2
reason: 5
scc: mcdm.summoner.v1/champion.elemental.statblock/dragons-portent
size: "2"
speed: 6
stability: 4
stamina: SPECIAL
type: statblock
weaknesses:
    - —
---

# Dragon's Portent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dragon-s-portent","name":"Dragon's Portent","ancestry":"—","level":"","role":"","roleKey":"leader","ev":"","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"SPECIAL"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Affinity 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+5"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"passive","action":"passive","name":"Affinity","body":"The Portent selects an affinity for one of the following [damage types](../../../rule/damage/damage-type/) when they are summoned: acid, cold, corruption, fire, lightning, or poison. This type determines the Portent's affinity [immunity](../../../rule/damage/damage-immunity/) and the [damage type](../../../rule/damage/damage-type/) of their abilities."},{"kind":"ability","action":"main","name":"Elemental Tail Swing","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"2d10 + 5 (Signature Ability)","tiers":{"high":"14 affinity [damage](../../../rule/damage/damage/); [push](../../../movement/forced-movement/) 6","low":"9 affinity [damage](../../../rule/damage/damage/); [push](../../../movement/forced-movement/) 2","mid":"12 affinity [damage](../../../rule/damage/damage/); [push](../../../movement/forced-movement/) 4"}}},{"kind":"passive","action":"passive","name":"Sealing Strike","body":"The Portent's [free strikes](../../../feature/common/main-actions/free-strike/) inflict M \u003c STRONG [slowed](../../../condition/slowed/) ([save ends](../../../rule/general/saving-throw/)). While [slowed](../../../condition/slowed/) this way, the target takes 1d6 affinity [damage](../../../rule/damage/damage/) at the start of each of their [turns](../../../rule/combat/turn/)."},{"kind":"passive","action":"passive","name":"Champion's Ire","body":"If the Portent only targets one creature or object with a [strike](../../../rule/combat/strike/), they deal additional [damage](../../../rule/damage/damage/) to the target equal to your [Reason](../../../rule/character/reason/)."},{"kind":"passive","action":"passive","name":"Searing Wyrmscale","body":"Whenever an [adjacent](../../../rule/combat/adjacent/) creature deals [damage](../../../rule/damage/damage/) to the Portent, they take 4 affinity [damage](../../../rule/damage/damage/)."},{"kind":"passive","action":"passive","name":"Dragon Heart","body":"Once per [turn](../../../rule/combat/turn/), the Portent can take 10 [damage](../../../rule/damage/damage/) to allow you or an ally within your Summoner's Range to gain 1 [heroic resource](../../../rule/resource/heroic-resource/). This [damage](../../../rule/damage/damage/) can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Size Increase","body":"The Portent is now size 3."},{"kind":"ability","action":"main","name":"A Breath Felt in a Hurricane","usage":"1 Eidos","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 10","target":"Each enemy and object in the area","sections":[{"label":"Effect","text":"9 affinity [damage](../../../rule/damage/damage/). The [damage](../../../rule/damage/damage/) ignores [immunity](../../../rule/damage/damage-immunity/). The affected area becomes [difficult terrain](../../../movement/difficult-terrain/). An enemy has affinity [weakness](../../../rule/damage/damage-weakness/) 5 while occupying an affected square."}],"trailing":"**Champion Action**"}]}
</script></div>
