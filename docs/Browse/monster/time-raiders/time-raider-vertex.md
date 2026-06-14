---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "10"
free_strike: 5
immunities:
    - Psychic 3
intuition: 1
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 1
movement: Fly, hover
name: Time Raider Vertex
organization: Platoon
presence: 0
reason: 2
role: Support
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-vertex
size: "2"
speed: 5
stability: 2
stamina: "62"
type: statblock
---

# Time Raider Vertex

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-vertex","name":"Time Raider Vertex","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Support","roleKey":"support","ev":"10","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"62"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Psionic Slam","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Strike"],"distance":"Melee 2","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage, 4 psychic damage","low":"5 damage, 2 psychic damage","mid":"7 damage, 3 psychic damage"}},"sections":[{"label":"Effect","text":"Any power roll made against the target gains an edge until the start of the vertex's next turn."}]},{"kind":"ability","action":"main","name":"Split Space","cost":"5 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Area","Psionic","Ranged"],"distance":"2 cube within 10","target":"Special","sections":[{"label":"Effect","text":"A portal fills the area, connecting to a location the vertex has experienced on any plane of existence, in person or otherwise. Any creature who enters the portal for the first time in a round or starts their turn there is instantly [teleported](../../../movement/teleport/) to any unoccupied space in the portal at the chosen location. The portal lasts until the vertex uses this ability again, dismisses the portal (no action required), or is transported by the portal."}]},{"kind":"ability","action":"maneuver","name":"Invigorated March","usage":"Maneuver","keywords":["Area","Psionic"],"distance":"4 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../movement/shifting/) up to half their speed."}]},{"kind":"passive","action":"passive","name":"Foresight","body":"The vertex doesn't take a bane on strikes against creatures with concealment."}]}
</script></div>
