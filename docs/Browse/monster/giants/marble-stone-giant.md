---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "40"
free_strike: 8
intuition: 3
keywords:
    - Giant
    - Stone Giant
level: 8
might: 4
movement: Burrow
name: Marble Stone Giant
organization: Elite
presence: 0
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.giants.statblock/marble-stone-giant
size: "4"
speed: 6
stability: 10
stamina: "207"
type: statblock
---

# Marble Stone Giant

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"marble-stone-giant","name":"Marble Stone Giant","ancestry":"Giant, Stone Giant","level":"8","role":"Elite Hexer","roleKey":"hexer","ev":"40","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"207"},{"l":"Stability","v":"10"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Marble From a Great Sling","cost":"Signature","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 15","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 damage; I \u003c 4 [dazed](../../../condition/dazed/) (save ends)","low":"6 damage; I \u003c 2 [dazed](../../../condition/dazed/) (save ends)","mid":"10 damage; I \u003c 3 [dazed](../../../condition/dazed/) (save ends)"}},"sections":[{"label":"Effect","text":"If the target has any effect on them that can be ended by a saving throw or that ends at the end of their turn, they are also knocked [prone](../../../condition/prone/)."}]},{"kind":"ability","action":"main","name":"Far Flung (3 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"Vertical [push](../../../movement/forced-movement/) 12","low":"Vertical [push](../../../movement/forced-movement/) 7","mid":"Vertical [push](../../../movement/forced-movement/) 10"}},"sections":[{"label":"Effect","text":"Against a target who is [prone](../../../condition/prone/) or [grabbed](../../../condition/grabbed/), this ability has a double edge."}]},{"kind":"ability","action":"maneuver","name":"Polish Stone Shape","usage":"Maneuver","keywords":["Area"],"distance":"10 x 2 line within 1","target":"Special","sections":[{"label":"Effect","text":"The ground in the area becomes slick and glossy. Any non-giant who starts or ends their turn in the area is knocked [prone](../../../condition/prone/) and [slides](../../../movement/forced-movement/) 2 squares."}]},{"kind":"ability","action":"triggered","name":"Break Armor (1 [Malice](../../rule/monster/malice.md))","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The marble stone giant takes damage."},{"label":"Effect","text":"The marble stone giant halves the damage, and has damage weakness 3 and a +3 bonus to speed until the end of the encounter. The damage weakness increases by 3 each time the marble stone giant uses this ability in the same encounter."}]},{"kind":"passive","action":"passive","name":"Stonebreaker Flesh","body":"Whenever an enemy obtains a tier 1 outcome on a melee ability used against the marble stone giant, they take a bane on that ability until the end of the encounter."},{"kind":"passive","action":"passive","name":"Stone Steps","body":"The marble stone giant ignores [difficult terrain](../../../movement/difficult-terrain/)."},{"kind":"passive","action":"passive","name":"Stone Swim","body":"The marble stone giant can [burrow](../../../movement/burrow/) through stone, but can't drag other creatures underground when they do so."}]}
</script></div>
