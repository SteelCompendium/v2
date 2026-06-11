---
agility: 2
ev: "20"
free_strike: 5
intuition: 2
keywords:
    - Abyssal
    - Demon
level: 3
might: 2
name: Chorogaunt
organization: Leader
presence: 3
reason: 2
scc: mcdm.monsters.v1/monster.demons.1st-echelon.statblock/chorogaunt
size: 1L
speed: 5
stability: 2
stamina: "120"
type: statblock
weaknesses:
    - Holy 5
---

# Chorogaunt

---

<script type="application/json" class="sc-statblock-data">
{"id":"chorogaunt","name":"Chorogaunt","ancestry":"Abyssal, Demon","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Agonizing Harmony","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"10 psychic damage; I \u003c 3 slowed (save ends)","low":"4 psychic damage; I \u003c 1 slowed (save ends)","mid":"7 psychic damage; I \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"One ally within 10 squares of the chorogaunt shifts up to their speed."}]},{"kind":"ability","action":"maneuver","name":"Chaotic Entrancing Harmony","usage":"Maneuver","keywords":["Area"],"distance":"10 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The chorogaunt slides each target up to 3 squares, ignoring stability."}]},{"kind":"ability","action":"triggered","name":"I Thrive on Pain","cost":"3 Malice","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The chorogaunt is targeted by a strike."},{"label":"Effect","text":"Any damage from the strike is halved, and the chorogaunt's abilities deal an extra 3 damage until the end of their next turn."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the chorogaunt can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Lethe","body":"While the chorogaunt is winded, they gain an edge on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 2 squares of the chorogaunt can't be hidden from them."},{"kind":"villain","action":"villain","name":"Frightening Tones","cost":"Villain Action 1","keywords":["Ranged"],"distance":"Ranged 10","target":"Three enemies","sections":[{"label":"Effect","text":"Each target must choose between taking 5 psychic damage, or being frightened (save ends)."}]},{"kind":"villain","action":"villain","name":"Bully the Weak","cost":"Villain Action 2","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One ally","sections":[{"label":"Effect","text":"The chorogaunt kills the target, and each other ally in the encounter deals an extra 3 damage with strikes until the end of the round. The Director gains Malice equal to the number of heroes in the encounter."}]},{"kind":"villain","action":"villain","name":"Running Cacophony","cost":"Villain Action 3","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The chorogaunt shifts up to their speed, uses Agonizing Harmony, shifts up to their speed, and then uses Agonizing Harmony again."}]}]}
</script>
