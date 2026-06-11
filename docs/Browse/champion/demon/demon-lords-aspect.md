---
agility: 5
free_strike: 9
immunities:
    - Corruption 5
intuition: 2
keywords:
    - —
might: 2
movement: Teleport
name: Demon Lord's Aspect
presence: 2
reason: 5
scc: mcdm.summoner.v1/champion.demon.statblock/demon-lords-aspect
size: "2"
speed: 5
stability: 2
stamina: SPECIAL
type: statblock
weaknesses:
    - —
---

# Demon Lord's Aspect

---

<script type="application/json" class="sc-statblock-data">
{"id":"demon-lord-s-aspect","name":"Demon Lord's Aspect","ancestry":"—","level":"","role":"","roleKey":"leader","ev":"","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"SPECIAL"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Corruption 5","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+5"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Grasping Appendages","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 5","target":"Two creatures or objects","powerRoll":{"formula":"2d10 + 5 (Signature Ability)","tiers":{"high":"14 corruption [damage](../../../rule/damage/damage/); [pull](../../../movement/forced-movement/) 5","low":"9 corruption [damage](../../../rule/damage/damage/); [pull](../../../movement/forced-movement/) 2","mid":"12 corruption [damage](../../../rule/damage/damage/); [pull](../../../movement/forced-movement/) 4"}},"sections":[{"label":"Effect","text":"A target [pulled](../../../movement/forced-movement/) [adjacent](../../../rule/combat/adjacent/) to the Aspect is [grabbed](../../../condition/grabbed/)."}]},{"kind":"passive","action":"passive","name":"Warping Strike","body":"The Aspect's [free strikes](../../../feature/common/main-actions/free-strike/) [teleport](../../../movement/teleport/) the target 5 squares."},{"kind":"passive","action":"passive","name":"Champion's Ire","body":"If the Aspect only targets one creature or object with a [strike](../../../rule/combat/strike/), they deal additional [damage](../../../rule/damage/damage/) to the target equal to your [Reason](../../../rule/character/reason/)."},{"kind":"ability","action":"triggered","name":"I Like Your Taste","usage":"[Free triggered action](../../rule/combat/triggered-action.md)","keywords":["—"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The Aspect takes [damage](../../../rule/damage/damage/) from an enemy."},{"label":"Effect","text":"The Aspect has a double [edge](../../../rule/dice/edge/) on their next [power roll](../../../rule/dice/power-roll/). They can choose to give this benefit to an ally within your Summoner's Range instead."}]},{"kind":"passive","action":"passive","name":"Frenzy","body":"When the Aspect is reduced to 0 [Stamina](../../../rule/health/stamina/), they make a [free strike](../../../feature/common/main-actions/free-strike/) against each [adjacent](../../../rule/combat/adjacent/) enemy before [dying](../../../rule/health/dying/)."},{"kind":"passive","action":"passive","name":"Size Increase","body":"The Aspect is now size 3."},{"kind":"ability","action":"main","name":"Reality Flense","usage":"1 Eidos","keywords":["—"],"distance":"20 burst","target":"Self and each non-minion ally in the area","sections":[{"label":"Effect","text":"Each target [teleports](../../../movement/teleport/) up to their [speed](../../../rule/character/speed/) and makes a [free strike](../../../feature/common/main-actions/free-strike/). If a target has a [Save Ends](../../../rule/general/saving-throw/) [condition](../../../rule/combat/condition/), they can inflict the [condition](../../../rule/combat/condition/) onto a creature with their [strike](../../../rule/combat/strike/) and end the [condition](../../../rule/combat/condition/) on themself."}],"trailing":"**Champion Action**"}]}
</script>
