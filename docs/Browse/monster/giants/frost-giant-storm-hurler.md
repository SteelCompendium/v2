---
printing: "1.01"
printing_book: "Bestiary"
agility: -1
ev: "40"
free_strike: 9
immunities:
    - Cold 8
intuition: 0
keywords:
    - Frost Giant
    - Giant
level: 8
might: 4
name: Frost Giant Storm Hurler
organization: Elite
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.giants.statblock/frost-giant-storm-hurler
size: "4"
speed: 7
stability: 5
stamina: "180"
type: statblock
---

# Frost Giant Storm Hurler

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"frost-giant-storm-hurler","name":"Frost Giant Storm Hurler","ancestry":"Frost Giant, Giant","level":"8","role":"Elite Artillery","roleKey":"artillery","ev":"40","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"Cold 8","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Ice Javelins","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 cold damage; M \u003c 4 bleeding (save ends)","low":"13 cold damage","mid":"18 cold damage; M \u003c 3 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"Whenever a creature bleeding this way takes damage from that condition, their speed decreases by 1 (to a minimum of 0) until that condition ends."}]},{"kind":"ability","action":"main","name":"Flower of Frost","cost":"3 Malice","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 15","target":"Special","powerRoll":{"formula":"","tiers":{"high":"7 cold damage","low":"14 cold damage; push 4; bleeding (save ends)","mid":"11 cold damage; push 2; slowed (save ends)"}},"sections":[{"label":"Effect","text":"The storm hurler throws three size 1L ice javelins into unoccupied squares within distance. Each javelin has 30 Stamina and fire weakness 5. At the start of the storm hurler's next turn, all javelins not destroyed explode in a shower of icicles. Each enemy and object within 3 squares of an exploding javelin makes an **Agility test**."}]},{"kind":"ability","action":"maneuver","name":"Ice Dance","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One giant ally","sections":[{"label":"Effect","text":"The storm hurler and the target each shift up to 6 squares while staying adjacent to each other. The target can then jump up to 5 squares and make a free strike."}]},{"kind":"ability","action":"triggered","name":"Frozen Retribution","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The storm hurler is targeted by a ranged strike."},{"label":"Effect","text":"The triggering strike has a double bane. If the strike obtains a tier 1 outcome, the storm hurler uses Ice Javelins against the creature who made it."}]},{"kind":"passive","action":"passive","name":"Kingdom of Isolation","body":"The storm hurler is surrounded by a snowstorm. Any enemy who starts their turn within 2 squares of the storm hurler can't shift."}]}
</script></div>
