---
agility: 1
ev: '-'
free_strike: 6
intuition: 1
keywords:
    - Accursed
    - Humanoid
    - Minotaur
level: 3
might: 2
name: Minotaur Gorer
organization: Retainer
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/retainer.statblock/minotaur-gorer
size: "2"
speed: 6
stability: 2
stamina: "39"
type: statblock
---

# Minotaur Gorer

---

<script type="application/json" class="sc-statblock-data">
{"id":"minotaur-gorer","name":"Minotaur Gorer","ancestry":"Accursed, Humanoid, Minotaur","level":"3","role":"Retainer Brute","roleKey":"brute","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"39"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gore","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 damage; M \u003c STRONG prone","low":"5 damage","mid":"9 damage"}}},{"kind":"ability","action":"triggered","name":"Retaliatory Strike","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 6","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the gorer."},{"label":"Effect","text":"The gorer uses the Charge main action and Gore against the target."}]},{"kind":"passive","action":"passive","name":"Minotaur Sense","body":"The gorer can't obtain less than a tier 2 outcome when making tests to navigate, search, or seek."},{"kind":"ability","action":"triggered","name":"Horn Toss","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature","sections":[{"label":"Trigger","text":"The gorer damages a creature within distance using Gore."},{"label":"Effect","text":"The target is pushed up to 3 squares. If the target has stability 0, they are also knocked prone."}]},{"kind":"ability","action":"maneuver","name":"Triumphant Bay","cost":"Encounter","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The gorer gains 3 surges, and until the start of the gorer's next turn, strikes made against them and their mentor take a bane."}]},{"kind":"ability","action":"main","name":"Horn Rake","cost":"Encounter","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"21 damage; M \u003c STRONG prone and can't stand (save ends).","low":"11 damage; M \u003c WEAK bleeding (save ends)","mid":"16 damage; M \u003c AVERAGE bleeding (save ends)"}}}]}
</script>
