---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "40"
free_strike: 8
intuition: 2
keywords:
    - Giant
    - Stone Giant
level: 8
might: 4
movement: Burrow
name: Basalt Stone Giant
organization: Elite
presence: 1
reason: 1
role: Controller
scc: mcdm.monsters.v1/monster.giants.statblock/basalt-stone-giant
size: "4"
speed: 7
stability: 10
stamina: "207"
type: statblock
---

# Basalt Stone Giant

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"basalt-stone-giant","name":"Basalt Stone Giant","ancestry":"Giant, Stone Giant","level":"8","role":"Elite Controller","roleKey":"controller","ev":"40","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"207"},{"l":"Stability","v":"10"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Rune-Signed Blade","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; M \u003c 4 [slowed](../../../condition/slowed/) (save ends)","low":"12 damage; M \u003c 2 [slowed](../../../condition/slowed/) (save ends)","mid":"17 damage; M \u003c 3 [slowed](../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"If a target was already [slowed](../../../condition/slowed/), that condition continues but their speed is 0 until the end of their next turn."}]},{"kind":"ability","action":"main","name":"Forked Knife","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 3 or ranged 12","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"20 damage; [prone](../../../condition/prone/); A \u003c 4 [restrained](../../../condition/restrained/) (save ends)","low":"10 damage; A \u003c 2 [restrained](../../../condition/restrained/) (save ends)","mid":"16 damage; A \u003c 3 [restrained](../../../condition/restrained/) (save ends)"}},"sections":[{"label":"Effect","text":"The knife lands in the target's square, and has 30 [Stamina](../../../rule/health/stamina/) and damage immunity 5. Whenever the knife takes damage, it deals 4 sonic damage to each enemy within 3 squares. The knife lasts until the end of the encounter, and can't be picked up or manipulated."}]},{"kind":"ability","action":"maneuver","name":"Cobblestone Shape","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The basalt stone giant moves up to their speed. Each square that they leave during this move is [difficult terrain](../../../movement/difficult-terrain/) for enemies. Giants ignore this [difficult terrain](../../../movement/difficult-terrain/)."}]},{"kind":"ability","action":"triggered","name":"Resonate Rune","usage":"Triggered action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy in the area","sections":[{"label":"Trigger","text":"The basalt stone giant takes damage."},{"label":"Effect","text":"The target is [pushed](../../../movement/forced-movement/) up to 3 squares, or if they have A \u003c 3, they are [pushed](../../../movement/forced-movement/) up to 6 squares and knocked [prone](../../../condition/prone/)."}]},{"kind":"passive","action":"passive","name":"Stonebreaker Flesh","body":"Whenever an enemy obtains a tier 1 outcome on a melee ability used against the basalt stone giant, they take a bane on that ability until the end of the encounter."},{"kind":"passive","action":"passive","name":"Stone Steps","body":"The basalt stone giant ignores [difficult terrain](../../../movement/difficult-terrain/)."},{"kind":"passive","action":"passive","name":"Stone Swim","body":"The basalt stone giant can [burrow](../../../movement/burrow/) through stone, but can't drag other creatures underground when they do so."}]}
</script></div>
