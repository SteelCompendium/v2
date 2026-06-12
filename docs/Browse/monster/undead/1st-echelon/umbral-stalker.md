---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "3"
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
level: 1
might: 0
movement: Climb
name: Umbral Stalker
organization: Horde
presence: 1
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/umbral-stalker
size: 1M
speed: 7
stability: 1
stamina: "15"
type: statblock
---

# Umbral Stalker

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"umbral-stalker","name":"Umbral Stalker","ancestry":"Undead","level":"1","role":"Horde Ambusher","roleKey":"ambusher","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Chilling Grasp","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 cold damage; the stalker shifts up to 2 squares","low":"4 cold damage","mid":"6 cold damage; the stalker can shift 1 square"}}},{"kind":"ability","action":"main","name":"Freezing Dark","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"4 cold damage","low":"2 cold damage","mid":"3 cold damage"}},"sections":[{"label":"Effect","text":"Until the end of the stalker's next turn, the area provides concealment, and blocks line of effect for enemies."}]},{"kind":"ability","action":"maneuver","name":"Shadow Jump","cost":"1 Malice","usage":"Free maneuver","keywords":["-"],"distance":"Self","target":"Self","trailing":"The umbral stalker teleports to an unoccupied space in an area of concealment within 10 squares."},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The umbral stalker can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the umbral stalker moves through a creature, that creature takes 2 corruption damage. The umbral stalker doesn't take damage from being force moved into objects."}]}
</script></div>
