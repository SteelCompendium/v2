---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "36"
free_strike: 8
immunities:
    - Damage 3
intuition: -1
keywords:
    - Giant
    - Hill Giant
level: 7
might: 4
movement: Climb
name: Hill Giant Clobberer
organization: Elite
presence: -1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.giants.statblock/hill-giant-clobberer
size: "4"
speed: 6
stability: 5
stamina: "200"
type: statblock
---

# Hill Giant Clobberer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hill-giant-clobberer","name":"Hill Giant Clobberer","ancestry":"Giant, Hill Giant","level":"7","role":"Elite Brute","roleKey":"brute","ev":"36","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"Damage 3","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Clobberin' Club","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; [prone](../../../condition/prone/)","low":"12 damage","mid":"17 damage; [prone](../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"A target who is already [prone](../../../condition/prone/) takes an extra 12 damage."}]},{"kind":"ability","action":"main","name":"Stomp","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"25 damage; [prone](../../../condition/prone/); M \u003c 4 can't stand (save ends)","low":"14 damage; [prone](../../../condition/prone/)","mid":"20 damage; [prone](../../../condition/prone/); M \u003c 3 can't stand (save ends)"}},"sections":[{"label":"Effect","text":"In suitably soft ground, the target is entrenched in a 2-square deep hole."}]},{"kind":"ability","action":"maneuver","name":"Hill Quake","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"[Push](../../../movement/forced-movement/) 2","low":"6 damage; vertical [push](../../../movement/forced-movement/) 3","mid":"2 damage; vertical [push](../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"Each target must make either a **Might test** or an **Agility test**."},{"label":"Effect","text":"The clobberer can choose to fall [prone](../../../condition/prone/) in order to double the [forced movement](../../../movement/forced-movement/) distance."}]},{"kind":"ability","action":"triggered","name":"You Ain't Getting Away","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 3","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"[Grabbed](../../../condition/grabbed/), and the target takes a bane on the Escape Grab maneuver","mid":"[Grabbed](../../../condition/grabbed/)"}},"sections":[{"label":"Trigger","text":"A creature within distance moves or [shifts](../../../movement/shifting/) away from the clobberer."},{"label":"Effect","text":"The target makes an Agility test."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"A target who would be [grabbed](../../../condition/grabbed/) by this ability is instead either vertical [pushed](../../../movement/forced-movement/) up to 5 squares; or they take 5 damage, are knocked [prone](../../../condition/prone/), and can't stand until the end of their next turn."}]},{"kind":"passive","action":"passive","name":"Destructive Path","body":"The clobberer automatically destroys any mundane size 1 objects in their path when they move or are [forced moved](../../../movement/forced-movement/). They can break through any mundane wall made of wood, stone, or a similarly sturdy material this way as long as the wall is 2 squares thick or less."},{"kind":"passive","action":"passive","name":"Distracted","body":"Whenever the clobberer targets a creature or object with an ability, any enemy within distance of the ability can use a free triggered action to distract the clobberer. The clobberer targets that enemy instead."}]}
</script></div>
