---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "84"
free_strike: 7
intuition: 1
keywords:
    - Plant
    - Shambling Mound
level: 5
might: 4
name: Shambling Mound
organization: Solo
presence: 0
reason: 0
scc: mcdm.monsters.v1/monster.shambling-mound.statblock/shambling-mound
size: "3"
speed: 3
stability: 5
stamina: "400"
type: statblock
---

# Shambling Mound

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shambling-mound","name":"Shambling Mound","ancestry":"Plant, Shambling Mound","level":"5","role":"Solo","roleKey":"solo","ev":"84","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"3"},{"l":"Stamina","v":"400"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the shambling mound can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The shambling mound can take two turns each round. They can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Engulfing Sac","body":"The shambling mound has a vegetative sack on their body where they carry engulfed creatures. The sack has 30 Stamina, damage immunity 5, and fire weakness 10. Destroying the sack frees creatures trapped by the shambling mound's Engulf ability. The shambling mound regrows a destroyed sack at the start of their next turn."},{"kind":"ability","action":"main","name":"Vine Lash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 6","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; grabbed","low":"11 damage; A \u003c 3 grabbed","mid":"16 damage; A \u003c 4 grabbed"}},"enhancements":[{"cost":"2 Malice","text":"The shambling mound can slide each target up to 6 squares."},{"cost":"3 Malice","text":"Each target takes 7 poison damage."}]},{"kind":"ability","action":"main","name":"Seismic Slam","usage":"Main action","keywords":["Area","Weapon"],"distance":"6 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"7 damage; M \u003c 4 dazed (save ends)","low":"4 damage; M \u003c 2 dazed (save ends)","mid":"6 damage; M \u003c 3 dazed (save ends)"}}},{"kind":"ability","action":"main","name":"Engulf","cost":"2 Malice","usage":"Main action","keywords":["Melee"],"distance":"Melee 6","target":"One creature or object","sections":[{"label":"Effect","text":"The target must be size 1L or smaller. The shambling mound reaches out with writhing vines, and if the target has A \u003c 3, they are engulfed into the shambling mound's sack. If the target is grabbed by the shambling mound, the potency increases by 1. An engulfed creature is restrained, takes 3 poison damage at the start of each turn, and can't take damage from abilities used from outside the sack. When the shambling mound moves, the engulfed creature moves with them. If the shambling mound dies or their sack is destroyed, each engulfed creature is freed and appears in an unoccupied space within 2 squares of the shambling mound."}],"enhancements":[{"cost":"2+ Malice","text":"The shambling mound can engulf one additional target for each 2 Malice spent."}]},{"kind":"ability","action":"maneuver","name":"Leech","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Each creature engulfed by the shambling mound takes 5 poison damage. The shambling mound gains 5 temporary Stamina for each creature who takes damage this way."}]},{"kind":"ability","action":"triggered","name":"Tether Down","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 6","target":"The triggering creature","powerRoll":{"formula":"+ 4","tiers":{"high":"15 damage; M \u003c 4 restrained (EoT)","low":"7 damage; M \u003c 2 restrained (EoT)","mid":"12 damage; M \u003c 3 restrained (EoT)"}},"sections":[{"label":"Trigger","text":"A creature within distance willingly moves."}]},{"kind":"passive","action":"passive","name":"False Appearance","body":"While the shambling mound remains motionless, they are indistinguishable from ordinary vegetation."},{"kind":"passive","action":"passive","name":"Frothing Flora","body":"The area within 6 squares of the shambling mound is difficult terrain."},{"kind":"villain","action":"villain","name":"Ravenous Overgrowth","cost":"Villain Action 1","keywords":["Area","Weapon"],"distance":"10 x 2 line within 1","target":"Each creature in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"15 damage; pull 6; the target has poison weakness 5 until the end of the encounter","low":"7 damage, pull 3","mid":"12 damage; pull 4; the target has poison weakness 3 until the end of the encounter"}}},{"kind":"villain","action":"villain","name":"Composting","cost":"Villain Action 2","keywords":["Melee"],"distance":"Melee 6","target":"Each enemy","sections":[{"label":"Effect","text":"The shambling mound uses Engulf against each target without spending Malice."}]},{"kind":"villain","action":"villain","name":"Exposed Crux","cost":"Villain Action 3","keywords":["Melee"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The shambling mound rips themself apart, exposing the crux of magic holding them together. The distance of the shambling mound's melee abilities increases to melee 10, the creature has a double edge on power rolls, and strikes made against them gain an edge."}]}]}
</script></div>
