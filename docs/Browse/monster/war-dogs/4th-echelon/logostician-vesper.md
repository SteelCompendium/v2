---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "48"
free_strike: 10
intuition: 4
keywords:
    - Soulless
    - War Dog
level: 10
might: 2
name: Logostician Vesper
organization: Elite
presence: 1
reason: 5
role: Controller
scc: mcdm.monsters.v1/monster.war-dogs.4th-echelon.statblock/logostician-vesper
size: "2"
speed: 10
stability: 3
stamina: "253"
type: statblock
---

# Logostician Vesper

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"logostician-vesper","name":"Logostician Vesper","ancestry":"Soulless, War Dog","level":"10","role":"Elite Controller","roleKey":"controller","ev":"48","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"253"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Portal to the Firing Line ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"5 x 3 line within 15","target":"Each creature and object in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"15 damage; I \u003c 5 [slowed](../../../../condition/slowed/) (save ends)","low":"8 damage","mid":"12 damage; I \u003c 4 [slowed](../../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Special","text":"This ability targets only non-[prone](../../../../condition/prone/) creatures."},{"label":"Effect","text":"A target creature can choose to drop [prone](../../../../condition/prone/), in which case the ability takes a bane against them."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"The area remains active until Vesper is reduced to 0 [Stamina](../../../../rule/health/stamina/) or until the end of the encounter. Any non-[prone](../../../../condition/prone/) enemy who enters the area for the first time in a round or starts their turn there takes 15 damage, or 7 damage if they choose to fall [prone](../../../../condition/prone/)."}]},{"kind":"ability","action":"main","name":"Portal to the Mantle (3 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 15","target":"Each creature and object in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"15 fire damage","low":"8 fire damage","mid":"12 fire damage"}},"sections":[{"label":"Effect","text":"The area is [difficult terrain](../../../../movement/difficult-terrain/). Any creature who enters the area for the first time in a round or starts their turn there takes 10 fir damage. Until the end of the encounter, the size of the area increases by 1 at the start of each round."}]},{"kind":"ability","action":"maneuver","name":"Portal to the Void","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"5 cube within 15","target":"Each creature and object in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"[Pull](../../../../movement/forced-movement/) 3 toward the center of the area","low":"A \u003c 4 [pull](../../../../movement/forced-movement/) 3 toward the center of the area","mid":"A \u003c 5 [pull](../../../../movement/forced-movement/) 3 toward the center of the area"}},"sections":[{"label":"Effect","text":"A portal appears at the center of the area. Any creature at the center of the area when this ability is used or who is pulled into the center for the first time in a round takes 10 sonic damage."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"The area remains active and deals its damage until Vesper is reduced to 0 [Stamina](../../../../rule/health/stamina/) or until the end of the encounter. Any creature who enters the area and has A \u003c 4 is [pulled](../../../../movement/forced-movement/) 3 squares toward the center of the area. Any creature who starts their turn in the area and has M \u003c 4 is [slowed](../../../../condition/slowed/) until the end of their turn."}]},{"kind":"ability","action":"triggered","name":"Portal to the Sky","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 3","target":"One enemy","sections":[{"label":"Trigger","text":"The target moves within distance of Vesper."},{"label":"Effect","text":"The target is dropped through a portal, which [teleports](../../../../movement/teleport/) them up to 7 squares above a space within 15 squares."}]},{"kind":"passive","action":"passive","name":"Living Logistics Network","body":"Each ally who starts their turn within 10 squares of Vesper can [teleport](../../../../movement/teleport/) whenever they willingly move until the end of their turn. Whenever an affected ally [teleports](../../../../movement/teleport/), they deal an extra 5 damage on their next strike."},{"kind":"passive","action":"passive","name":"Crash and Burn","body":"When Vesper is reduced to 0 [Stamina](../../../../rule/health/stamina/), they move up to their speed and then explode, dealing 4d6 damage to each [adjacent](../../../../rule/combat/adjacent/) enemy and object. Any enemy who takes more than 14 damage this way vertically [slides](../../../../movement/forced-movement/) 5 squares."}]}
</script></div>
