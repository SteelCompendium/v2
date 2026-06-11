---
agility: 1
ev: "40"
free_strike: 9
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 8
might: 4
name: Rival Tactician
organization: Elite
presence: 2
reason: 3
role: Artillery
scc: mcdm.monsters.v1/monster.rivals.3rd-echelon.statblock/rival-tactician
size: 1M
speed: 5
stability: 2
stamina: "180"
type: statblock
---

# Rival Tactician

---

<script type="application/json" class="sc-statblock-data">
{"id":"rival-tactician","name":"Rival Tactician","ancestry":"Humanoid, Rival","level":"8","role":"Elite Artillery","roleKey":"artillery","ev":"40","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Command From the Back","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 damage; A \u003c 4 prone","low":"13 damage","mid":"18 damage; A \u003c 3 prone"}},"enhancements":[{"cost":"4 Malice","text":"Two allies within distance move up to their speed and can use a signature ability."}]},{"kind":"ability","action":"main","name":"Safeguard","cost":"3 Malice","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"26 damage; M \u003c 4 weakened (save ends)","low":"15 damage; M \u003c 2 weakened (save ends)","mid":"21 damage; M \u003c 3 weakened (save ends)"}},"sections":[{"label":"Effect","text":"Two allies adjacent to the target each regain 7 Stamina."}]},{"kind":"ability","action":"triggered","name":"Quickshot","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance willingly moves."},{"label":"Effect","text":"At any point during the movement, the tactician uses a signature ability against the target."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the tactician chooses one creature within their line of effect. Both the tactician and the creature can add a d3 roll to power rolls they make against each other."}]}
</script>
