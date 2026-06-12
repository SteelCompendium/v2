---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "28"
free_strike: 7
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 5
might: 3
name: Rival Tactician
organization: Elite
presence: 1
reason: 2
role: Artillery
scc: mcdm.monsters.v1/monster.rivals.2nd-echelon.statblock/rival-tactician
size: 1M
speed: 5
stability: 2
stamina: "120"
type: statblock
---

# Rival Tactician

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-tactician","name":"Rival Tactician","ancestry":"Humanoid, Rival","level":"5","role":"Elite Artillery","roleKey":"artillery","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Mark Targets","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage","low":"10 damage","mid":"15 damage"}},"enhancements":[{"cost":"3 Malice","text":"Two allies within distance can use a signature ability against the same target."}]},{"kind":"ability","action":"main","name":"Preserve and Protect","cost":"3 Malice","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"21 damage; M \u003c 3 weakened (save ends)","low":"11 damage; M \u003c 1 weakened (save ends)","mid":"16 damage; M \u003c 2 weakened (save ends)"}},"sections":[{"label":"Effect","text":"One ally adjacent to the target regains 7 Stamina."}]},{"kind":"ability","action":"triggered","name":"Take the Opening","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance willingly moves."},{"label":"Effect","text":"At any point during the movement, the tactician and one ally within distance can each make a free strike against the target."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the tactician chooses one creature within their line of effect. Both the tactician and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
