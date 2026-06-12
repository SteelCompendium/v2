---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "28"
free_strike: 6
immunities:
    - Poison 5
intuition: 2
keywords:
    - Elemental
level: 3
might: 2
movement: Climb
name: Field of Growth
organization: Elite
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.elementals.statblock/field-of-growth
size: "3"
speed: 8
stability: 2
stamina: "120"
type: statblock
---

# Field of Growth

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"field-of-growth","name":"Field of Growth","ancestry":"Elemental","level":"3","role":"Elite Controller","roleKey":"controller","ev":"28","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Poison 5","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Hampering Roots","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; R \u003c 2 [prone](../../../condition/prone/) and can't stand (save ends)","low":"8 damage","mid":"13 damage; R \u003c 1 [prone](../../../condition/prone/) and can't stand (save ends)"}},"sections":[{"label":"Effect","text":"If a target made [prone](../../../condition/prone/) this way is already [prone](../../../condition/prone/), they are instead [restrained](../../../condition/restrained/) (save ends). If the target was also unable to stand, that effect ends when they are no longer [restrained](../../../condition/restrained/) this way."}]},{"kind":"ability","action":"maneuver","name":"Convocation of Verdure","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self or one elemental","sections":[{"label":"Effect","text":"The target gains 15 temporary Stamina that lasts until the start of the field's next turn."}],"enhancements":[{"cost":"3 [Malice](../../rule/monster/malice.md)","text":"Until the end of the encounter, the ground within 1 square of the target is overgrown with underbrush and vines. Whenever any enemy makes a strike against the target while within line of effect of that area, the enemy is [pulled](../../../movement/forced-movement/) 5 squares toward the area after the strike is resolved. Any enemy who enters the area for the first time in a round or starts their turn there is knocked [prone](../../../condition/prone/)."}]},{"kind":"ability","action":"triggered","name":"Rose Thorn Lash (1 [Malice](../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Magic","Melee"],"distance":"Melee 3","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object within distance deals damage to the field."},{"label":"Effect","text":"The target takes 6 damage, and if they have A \u003c 2, they are [bleeding](../../../condition/bleeding/) (save ends)."}]},{"kind":"passive","action":"passive","name":"Fickle and Free","body":"The field can't be [restrained](../../../condition/restrained/), [slowed](../../../condition/slowed/), or knocked [prone](../../../condition/prone/), and they ignore [difficult terrain](../../../movement/difficult-terrain/)."},{"kind":"passive","action":"passive","name":"Roots Run Deep","body":"The field can target any creature touching the ground with their abilities, even if they don't have line of effect to that creature."}]}
</script></div>
