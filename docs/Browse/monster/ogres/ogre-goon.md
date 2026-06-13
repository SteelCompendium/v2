---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Giant
    - Ogre
level: 2
might: 2
name: Ogre Goon
organization: Elite
presence: -1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.ogres.statblock/ogre-goon
size: "2"
speed: 5
stability: 4
stamina: "100"
type: statblock
---

# Ogre Goon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ogre-goon","name":"Ogre Goon","ancestry":"Giant, Ogre","level":"2","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Club Swing ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; [push](../../../movement/forced-movement/) 6, [prone](../../../condition/prone/)","low":"7 damage; [push](../../../movement/forced-movement/) 2","mid":"11 damage; [push](../../../movement/forced-movement/) 4"}},"sections":[{"label":"Effect","text":"Any target who takes damage from this [forced movement](../../../movement/forced-movement/) takes an extra 4 damage."}]},{"kind":"ability","action":"maneuver","name":"Grabby Hand (1 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; [grabbed](../../../condition/grabbed/)","low":"7 damage","mid":"11 damage; [grabbed](../../../condition/grabbed/)"}},"sections":[{"label":"Effect","text":"A target [grabbed](../../../condition/grabbed/) this way takes a bane on the Escape Grab maneuver."}]},{"kind":"ability","action":"maneuver","name":"People Bowling (3 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"6 x 1 line within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; [prone](../../../condition/prone/)","low":"5 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"The goon must have a size 1 creature or object [grabbed](../../../condition/grabbed/), which they hurl across the area, ending the grab. The hurled creature or object is targeted by the ability, and lands in the last square of the line or the nearest unoccupied square of the goon's choice."}]},{"kind":"ability","action":"triggered","name":"Swat the Fly","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object within distance moves or [shifts](../../../movement/shifting/) away from the goon."},{"label":"Effect","text":"The goon [slides](../../../movement/forced-movement/) the target up to 5 squares."}]},{"kind":"passive","action":"passive","name":"Defiant Anger","body":"While [winded](../../../rule/health/winded/), the goon has damage immunity 2."}]}
</script></div>
