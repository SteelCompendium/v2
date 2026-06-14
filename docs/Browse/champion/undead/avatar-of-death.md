---
printing: "1.0"
printing_book: "The Summoner"
agility: 2
free_strike: 9
immunities:
    - Corruption 5
    - poison 5
intuition: 2
keywords:
    - —
might: 5
movement: Fly
name: Avatar of Death
presence: 2
reason: 5
scc: mcdm.summoner.v1/champion.undead.statblock/avatar-of-death
size: "2"
speed: 6
stability: 3
stamina: SPECIAL
type: statblock
weaknesses:
    - —
---

# Avatar of Death

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"avatar-of-death","name":"Avatar of Death","ancestry":"—","level":"","role":"","roleKey":"leader","ev":"","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"SPECIAL"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Corruption 5, poison 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Culling Scythe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"2d10 + 5","tiers":{"high":"14 corruption [damage](../../../rule/damage/damage/); M \u003c STRONG [bleeding](../../../condition/bleeding/) ([save ends](../../../rule/general/saving-throw/))","low":"9 corruption [damage](../../../rule/damage/damage/); M \u003c WEAK [bleeding](../../../condition/bleeding/) ([save ends](../../../rule/general/saving-throw/))","mid":"12 corruption [damage](../../../rule/damage/damage/); M \u003c AVERAGE [bleeding](../../../condition/bleeding/) ([save ends](../../../rule/general/saving-throw/))"}},"sections":[{"label":"Effect","text":"If the target is a creature that isn't a leader or a solo and they are still [bleeding](../../../condition/bleeding/) at the end of the encounter, they instantly die."}]},{"kind":"passive","action":"passive","name":"Revelation Strike","body":"The Avatar's melee [free strikes](../../../feature/common/main-actions/free-strike/) P \u003c WEAK instantly reduce a [winded](../../../rule/health/winded/) non-leader or solo creature to 0 [Stamina](../../../rule/health/stamina/), including targets [winded](../../../rule/health/winded/) by the [strike](../../../rule/combat/strike/)."},{"kind":"passive","action":"passive","name":"Champion's Ire","body":"If the Avatar only targets one creature or object with a [strike](../../../rule/combat/strike/), they deal additional [damage](../../../rule/damage/damage/) to the target equal to your [Reason](../../../rule/character/reason/)."},{"kind":"ability","action":"triggered","name":"Dust and Rot","usage":"[Free triggered action](../../../rule/combat/triggered-action/)","keywords":["Area"],"distance":"1 burst","target":"Each enemy in the burst","sections":[{"label":"Trigger","text":"The Avatar takes [damage](../../../rule/damage/damage/)."},{"label":"Effect","text":"M \u003c AVERAGE [weakened](../../../condition/weakened/) ([EoT](../../../rule/combat/end-of-turn/))."}]},{"kind":"passive","action":"passive","name":"Drifting Spirit","body":"The Avatar is unaffected by [difficult terrain](../../../movement/difficult-terrain/) and [damage](../../../rule/damage/damage/) from [forced movement](../../../movement/forced-movement/)."},{"kind":"passive","action":"passive","name":"Size Increase","body":"The Avatar is now size 3."},{"kind":"ability","action":"main","name":"Gravemaker","usage":"1 Eidos","keywords":["Area","Magic","Ranged"],"distance":"5 × 3 line within 1","target":"Each enemy and object in the line","sections":[{"label":"Effect","text":"9 holy [damage](../../../rule/damage/damage/). Each target is vertically [pulled](../../../movement/forced-movement/) a number of squares equal to their [size](../../../rule/character/size/) straight down, ignoring [stability](../../../rule/character/stability/). If the target would be [force moved](../../../movement/forced-movement/) into the ground, they are buried beneath the ground instead."}],"trailing":"**Champion Action**"}]}
</script></div>
