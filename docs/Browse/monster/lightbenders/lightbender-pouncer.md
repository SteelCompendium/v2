---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "20"
free_strike: 5
intuition: 1
keywords:
    - Beast
    - Lightbender
level: 3
might: 2
name: Lightbender Pouncer
organization: Elite
presence: -1
reason: -3
role: Harrier
scc: mcdm.monsters.v1/monster.lightbenders.statblock/lightbender-pouncer
size: "2"
speed: 10
stability: 1
stamina: "100"
type: statblock
---

# Lightbender Pouncer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lightbender-pouncer","name":"Lightbender Pouncer","ancestry":"Beast, Lightbender","level":"3","role":"Elite Harrier","roleKey":"harrier","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Pounce","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; A \u003c 2 prone","low":"7 damage","mid":"11 damage; A \u003c 1 prone"}},"sections":[{"label":"Effect","text":"The pouncer can make a free strike against each target they knock prone."}]},{"kind":"ability","action":"main","name":"Sparkling Tail Whip","usage":"Main action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"10 damage; A \u003c 2 the target is dazzled (save ends)","low":"4 damage","mid":"7 damage; A \u003c 1 the target is dazzled (save ends)"}},"sections":[{"label":"Effect","text":"A dazzled target takes a bane on strikes and has line of effect only within 1 square."}]},{"kind":"ability","action":"maneuver","name":"Illusory Feint","cost":"5 Malice","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"I \u003c 2 dazed (save ends)","low":"I \u003c 0 dazed (save ends)","mid":"I \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"While dazed this way, a target has speed 0. If a target takes damage, or if someone else uses a main action to shake the target out of their stupor, the dazed condition ends."}]},{"kind":"ability","action":"triggered","name":"Striking Afterimage","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The pouncer takes damage from a strike."},{"label":"Effect","text":"The pouncer halves the damage, ignores any nondamaging effects associated with it, and can teleport up to 5 squares. If they teleport into concealment or cover, the pouncer can immediately attempt to hide as a free maneuver."}]},{"kind":"passive","action":"passive","name":"Avoidance","body":"Any effect on the pouncer that would be ended by a saving throw instead ends automatically at the end of their next turn."}]}
</script></div>
