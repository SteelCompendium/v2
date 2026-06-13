---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 4
ev: "40"
free_strike: 8
immunities:
    - Cold 8
intuition: 0
keywords:
    - Frost Giant
    - Giant
level: 8
might: 4
name: Frost Giant Wind Sprinter
organization: Elite
presence: 0
reason: -1
role: Harrier
scc: mcdm.monsters.v1/monster.giants.statblock/frost-giant-wind-sprinter
size: "4"
speed: 10
stability: 5
stamina: "200"
type: statblock
---

# Frost Giant Wind Sprinter

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"frost-giant-wind-sprinter","name":"Frost Giant Wind Sprinter","ancestry":"Frost Giant, Giant","level":"8","role":"Elite Harrier","roleKey":"harrier","ev":"40","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"Cold 8","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Cold Axe","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; A \u003c 4 bleeding (save ends)","low":"12 damage","mid":"17 damage; A \u003c 3 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"A target who is already bleeding takes an extra 1d6 cold damage."}]},{"kind":"ability","action":"main","name":"Blizzard Surge","cost":"5 Malice","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The wind sprinter shifts up to their speed and uses Cold Axe against each enemy who comes within 2 squares of them during the move. The wind sprinter makes one power roll against all targets."}]},{"kind":"ability","action":"maneuver","name":"Ice Dance","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One giant ally","sections":[{"label":"Effect","text":"The wind sprinter and the target each shift up to 6 squares while staying adjacent to each other. The target can then jump up to 5 squares and make a free strike."}]},{"kind":"ability","action":"triggered","name":"Begone, Smallfolk!","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The wind sprinter takes damage."},{"label":"Effect","text":"The wind sprinter moves up to their speed and uses Cold Axe against one target."}]},{"kind":"passive","action":"passive","name":"Crush Underfoot","body":"The wind sprinter can move through enemies' spaces at their usual speed. The first time on a turn that a wind sprinter enters a creature's space, that creature can choose to fall prone or to take 8 damage."},{"kind":"passive","action":"passive","name":"Kingdom of Isolation","body":"The wind sprinter is surrounded by a snowstorm. Any enemy who starts their turn within 2 squares of the wind sprinter can't shift."}]}
</script></div>
