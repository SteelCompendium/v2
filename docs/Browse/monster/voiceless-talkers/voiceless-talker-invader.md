---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "32"
free_strike: 7
immunities:
    - Psychic 6
intuition: 2
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: -1
movement: Hover, teleport
name: Voiceless Talker Invader
organization: Elite
presence: 2
reason: 3
role: Controller
scc: mcdm.monsters.v1/monster.voiceless-talkers.statblock/voiceless-talker-invader
size: 1M
speed: 5
stability: 2
stamina: "140"
type: statblock
---

# Voiceless Talker Invader

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"voiceless-talker-invader","name":"Voiceless Talker Invader","ancestry":"Horror, Voiceless Talker","level":"6","role":"Elite Controller","roleKey":"controller","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Psychic 6","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Tentacle ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage; M \u003c 3 [grabbed](../../../condition/grabbed/)","low":"10 damage","mid":"15 damage; M \u003c 2 [grabbed](../../../condition/grabbed/)"}}},{"kind":"ability","action":"main","name":"Psionic Boom","cost":"3 Malice","usage":"Main action","keywords":["Area","Psionic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"12 psychic damage; R \u003c 3 [push](../../../movement/forced-movement/) 4 and [prone](../../../condition/prone/)","low":"6 psychic damage; R \u003c 1 [push](../../../movement/forced-movement/) 2","mid":"10 psychic damage; R \u003c 2 [push](../../../movement/forced-movement/) 3"}},"enhancements":[{"cost":"2 Malice","text":"The size of the burst increases to 5."}]},{"kind":"ability","action":"maneuver","name":"Tentacle Toss","usage":"Maneuver","keywords":["Melee","Psionic"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"12 damage; vertical [slide](../../../movement/forced-movement/) 3","low":"6 damage; vertical [slide](../../../movement/forced-movement/) 2","mid":"10 damage; vertical [slide](../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"The target must be [grabbed](../../../condition/grabbed/) by the invader."}]},{"kind":"ability","action":"triggered","name":"Brain Drain","usage":"[Triggered Action](../../rule/combat/triggered-action.md)","keywords":["Melee","Psionic"],"distance":"Special","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature [grabbed](../../../condition/grabbed/) by the invader resists an ability's [potency](../../../rule/character/potency/)."},{"label":"Effect","text":"The [potency](../../../rule/character/potency/) increases by 2."}]},{"kind":"passive","action":"passive","name":"Psionic Amplifier","body":"Whenever a non-[minion](../../../rule/organization/minion/) voiceless talker within 5 squares of the invader uses a psionic ability, they can do so as if they were in the invader's space, and the ability has a double edge."}]}
</script></div>
