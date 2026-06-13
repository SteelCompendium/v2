---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -2
ev: "12"
free_strike: 4
immunities:
    - Corruption 10
    - poison 10
intuition: 3
keywords:
    - Undead
    - Soulless
level: 10
might: 5
movement: Climb
name: Bonecage
organization: Horde
presence: -1
reason: -2
role: Controller
scc: mcdm.monsters.v1/monster.undead.4th-echelon.statblock/bonecage
size: "3"
speed: 6
stability: 5
stamina: "55"
type: statblock
---

# Bonecage

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"bonecage","name":"Bonecage","ancestry":"Undead, Soulless","level":"10","role":"Horde Controller","roleKey":"controller","ev":"12","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"55"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 10, poison 10","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Ribcage Chomp ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"14 damage; [grabbed](../../../../condition/grabbed/)","low":"9 damage; M \u003c 4 [grabbed](../../../../condition/grabbed/)","mid":"12 damage; M \u003c 5 [grabbed](../../../../condition/grabbed/)"}},"sections":[{"label":"Effect","text":"The bonecage can have up to four [size](../../../../rule/character/size/) 1 targets [grabbed](../../../../condition/grabbed/) at once. Any creature [grabbed](../../../../condition/grabbed/) by the bonecage takes a [bane](../../../../rule/dice/bane/) on the [Escape Grab](../../../../feature/common/maneuvers/escape-grab/) maneuver, and the bonecage has [damage immunity](../../../../rule/damage/damage-immunity/) 5 against that creature's abilities. When the bonecage is [force moved](../../../../movement/forced-movement/), any creature or object they have [grabbed](../../../../condition/grabbed/) moves with them."}],"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice.md)","text":"While [grabbed](../../../../condition/grabbed/) this way, a target can't [teleport](../../../../movement/teleport/) or be [teleported](../../../../movement/teleport/)."}]},{"kind":"ability","action":"main","name":"Labyrinth of Bone (5 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"Four 10 x 1 lines within 3","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"4 damage","low":"9 damage","mid":"7 damage"}},"sections":[{"label":"Effect","text":"The bonecage can put up to two 90-degree bends in each of the lines. Each target makes an Agility test."},{"label":"Effect","text":"The area is [difficult terrain](../../../../movement/difficult-terrain/) for enemies. The effect ends at the end of the encounter or when the bonecage uses this ability again."}]}]}
</script></div>
