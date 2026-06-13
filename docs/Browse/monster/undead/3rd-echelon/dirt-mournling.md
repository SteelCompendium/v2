---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "9"
free_strike: 3
immunities:
    - Corruption 7
    - poison 7
intuition: 1
keywords:
    - Undead
level: 7
might: 4
movement: Burrow, climb
name: Dirt Mournling
organization: Horde
presence: -3
reason: -2
role: Controller
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/dirt-mournling
size: "3"
speed: 6
stability: 3
stamina: "64"
type: statblock
---

# Dirt Mournling

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dirt-mournling","name":"Dirt Mournling","ancestry":"Undead","level":"7","role":"Horde Controller","roleKey":"controller","ev":"9","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"64"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"Burrow, climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Mudslide ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"11 damage; [grabbed](../../../../condition/grabbed/)","low":"7 damage; M \u003c 3 [grabbed](../../../../condition/grabbed/)","mid":"10 damage; M \u003c 4 [grabbed](../../../../condition/grabbed/)"}},"sections":[{"label":"Effect","text":"A 3-[cube](../../../../rule/combat/cube/) area of ground centered on the target is [difficult terrain](../../../../movement/difficult-terrain/) for enemies."}]},{"kind":"ability","action":"main","name":"Mourning Cry (3 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"7 corruption damage; I \u003c 4 [frightened](../../../../condition/frightened/) (save ends)","low":"3 corruption damage; I \u003c 2 [frightened](../../../../condition/frightened/) (save ends)","mid":"6 corruption damage; I \u003c 3 [frightened](../../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"A target [frightened](../../../../condition/frightened/) this way is [frightened](../../../../condition/frightened/) of all [undead](../../../../rule/keyword/undead/). This effect ends early if the mournling is destroyed."}]},{"kind":"passive","action":"passive","name":"Arise","body":"The first time the mournling is reduced to 0 [Stamina](../../../../rule/health/stamina/) by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 15 [Stamina](../../../../rule/health/stamina/) and fall [prone](../../../../condition/prone/)."},{"kind":"passive","action":"passive","name":"Immutable Form","body":"The mournling's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Rupture","body":"Whenever the mournling uses the Dig maneuver to breach the surface, they make a [free strike](../../../../feature/common/main-actions/free-strike/) against each [adjacent](../../../../rule/combat/adjacent/) enemy."}]}
</script></div>
