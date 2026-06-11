---
agility: 2
free_strike: 9
immunities:
    - Damage 2
intuition: 2
keywords:
    - —
might: 2
movement: Fly, hover
name: Celestial Attendant
presence: 5
reason: 5
scc: mcdm.summoner.v1/champion.fey.statblock/celestial-attendant
size: "2"
speed: 7
stability: 0
stamina: SPECIAL
type: statblock
weaknesses:
    - —
---

# Celestial Attendant

---

<script type="application/json" class="sc-statblock-data">
{"id":"celestial-attendant","name":"Celestial Attendant","ancestry":"—","level":"","role":"","roleKey":"leader","ev":"","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"SPECIAL"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Damage 2","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+5"}],"features":[{"kind":"ability","action":"main","name":"Pixie Swarm","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"2d10 + 5 (Signature Ability)","tiers":{"high":"14 [damage](../../../rule/damage/damage/); [slide](../../../movement/forced-movement/) 6","low":"9 [damage](../../../rule/damage/damage/); [slide](../../../movement/forced-movement/) 3","mid":"12 [damage](../../../rule/damage/damage/); [slide](../../../movement/forced-movement/) 5"}},"sections":[{"label":"Effect","text":"An ally targeted by this ability can, instead, spend Recovery and [shift](../../../movement/shifting/) the slide amount."}]},{"kind":"passive","action":"passive","name":"Neurotoxic Strike","body":"A creature that takes [damage](../../../rule/damage/damage/) from the Attendant's [free strike](../../../feature/common/main-actions/free-strike/) is I \u003c AVERAGE unable to establish [line of effect](../../../rule/combat/line-of-effect/) beyond 3 squares ([EoT](../../../rule/combat/end-of-turn/))."},{"kind":"passive","action":"passive","name":"Champion's Ire","body":"If the Attendant only targets one creature or object with a [strike](../../../rule/combat/strike/), they deal additional [damage](../../../rule/damage/damage/) to the target equal to your [Reason](../../../rule/character/reason/)."},{"kind":"ability","action":"triggered","name":"Celestial Bell","usage":"[Free triggered action](../../rule/combat/triggered-action.md)","keywords":["—"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The Attendant takes [damage](../../../rule/damage/damage/) from an enemy."},{"label":"Effect","text":"The Attendant rings a bell, and you summon a signature minion into an unoccupied space [adjacent](../../../rule/combat/adjacent/) to the Attendant."}]},{"kind":"passive","action":"passive","name":"Pixie Bouquet","body":"The Attendant starts their [turn](../../../rule/combat/turn/) with [temporary Stamina](../../../rule/health/temporary-stamina/) equal to 2 × the number of fey minions within 1 square of them. This [temporary Stamina](../../../rule/health/temporary-stamina/) lasts until the start of their next [turn](../../../rule/combat/turn/)."},{"kind":"passive","action":"passive","name":"Size Increase","body":"The Attendant is now size 3."},{"kind":"ability","action":"main","name":"A Shower of Dust","usage":"1 Eidos","keywords":["—"],"distance":"20 burst","target":"Self and each non-minion ally in the area","sections":[{"label":"Effect","text":"Each target gains 20 [temporary Stamina](../../../rule/health/temporary-stamina/) and receives the benefits of one of your [Flash Powder](../../../feature/summoner/level-5/flash-powder/) effects until the end of their next [turn](../../../rule/combat/turn/)."}],"trailing":"**Champion Action**"}]}
</script>
