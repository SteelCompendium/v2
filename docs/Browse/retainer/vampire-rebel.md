---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: '-'
free_strike: 4
intuition: 0
keywords:
    - Undead
    - Vampire
level: 4
might: 2
movement: Climb
name: Vampire Rebel
organization: Retainer
presence: 3
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/vampire-rebel
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Vampire Rebel

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"vampire-rebel","name":"Vampire Rebel","ancestry":"Undead, Vampire","level":"4","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Flashing Fangs","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"","tiers":{"high":"5 damage, 6 corruption damage; M \u003c STRONG [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","low":"5 damage","mid":"5 damage, 3 corruption damage"}},"sections":[{"label":"Effect","text":"The vampire rebel gains [temporary Stamina](../../rule/health/temporary-stamina/) equal to any corruption damage dealt."}],"trailing":"**2d10 + highest characteristic:**"},{"kind":"ability","action":"move","name":"Bat Form","cost":"Encounter","usage":"Move Action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The vampire rebel changes their form into a bat. In bat form, their size is 1T and they can [fly](../../movement/fly/). The vampire rebel then [shifts](../../movement/shifting/) up to their speed, then regains their true form. If they can't fit in their current space when they return to their true form, they take 10 damage and are pushed to the nearest unoccupied space."}]},{"kind":"passive","action":"passive","name":"Agonizing Bloodthirst","body":"The vampire rebel has speed 10 while any creature within 10 squares of them is [bleeding](../../condition/bleeding/). If the vampire rebel is able to deal damage to a [bleeding](../../condition/bleeding/) creature on their turn and does not do so, they take 5 corruption damage at the end of their turn."},{"kind":"ability","action":"main","name":"Blood Surge","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage; M \u003c STRONG [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","low":"7 damage; M \u003c WEAK [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","mid":"11 damage; M \u003c AVERAGE [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)"}},"sections":[{"label":"Effect","text":"Before the [strike](../../rule/combat/strike/), the vampire rebel [shifts](../../movement/shifting/) up to their speed. If the vampire rebel has [temporary Stamina](../../rule/health/temporary-stamina/), they can expend it, dealing an extra 2 corruption damage for each point of [temporary Stamina](../../rule/health/temporary-stamina/) expended this way."}]},{"kind":"ability","action":"main","name":"Exsanguination","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 corruption damage; M \u003c STRONG [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","low":"7 corruption damage; M \u003c WEAK [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","mid":"11 corruption damage; M \u003c AVERAGE [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)"}}}]}
</script></div>
