---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 4
ev: "9"
free_strike: 3
immunities:
    - Corruption 7
    - poison 7
intuition: 0
keywords:
    - Undead
level: 7
might: -2
movement: Fly, hover
name: Haunt
organization: Horde
presence: 0
reason: -1
role: Controller
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/haunt
size: "2"
speed: 6
stability: 1
stamina: "40"
type: statblock
---

# Haunt

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"haunt","name":"Haunt","ancestry":"Undead","level":"7","role":"Horde Controller","roleKey":"controller","ev":"9","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Lash Out ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"11 damage; [slide](../../../../movement/forced-movement/) 5","low":"7 damage; [slide](../../../../movement/forced-movement/) 2","mid":"10 damage; [slide](../../../../movement/forced-movement/) 3"}},"sections":[{"label":"Effect","text":"If the target is [force moved](../../../../movement/forced-movement/) into another creature's space, that creature takes an additional 4 damage and the haunt [slides](../../../../movement/forced-movement/) them up to 2 squares."}]},{"kind":"ability","action":"main","name":"Crushing Despair (3 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"7 damage; I \u003c 4 [prone](../../../../condition/prone/)","low":"3 damage; I \u003c 2 [prone](../../../../condition/prone/)","mid":"6 damage; I \u003c 3 [prone](../../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"A target knocked [prone](../../../../condition/prone/) this way can't use the [Stand Up](../../../../feature/common/maneuvers/stand-up/) maneuver on themself while any haunt is within 20 squares of them."}]},{"kind":"passive","action":"passive","name":"Invisible Horror","body":"The haunt can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. They are invisible while moving using a move action. The haunt doesn't take damage from being [force moved](../../../../movement/forced-movement/) into objects."}]}
</script></div>
