---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "48"
free_strike: 10
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 10
might: 5
name: Rival Tactician
organization: Elite
presence: 3
reason: 4
role: Artillery
scc: mcdm.monsters.v1/monster.rivals.4th-echelon.statblock/rival-tactician
size: 1M
speed: 5
stability: 2
stamina: "220"
type: statblock
---

# Rival Tactician

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-tactician","name":"Rival Tactician","ancestry":"Humanoid, Rival","level":"10","role":"Elite Artillery","roleKey":"artillery","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"220"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Forward Assault","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"25 damage; prone; A \u003c 5 can't stand (EoT)","low":"15 damage","mid":"21 damage; A \u003c 4 prone and can't stand (EoT)"}},"enhancements":[{"cost":"5 Malice","text":"Two allies within distance move up to their speed and can use a signature ability that has a double edge."}]},{"kind":"ability","action":"main","name":"Guardian From Afar","cost":"3 Malice","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 10","target":"One creature in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"20 damage; M \u003c 5 weakened (save ends)","low":"10 damage; M \u003c 3 weakened (save ends)","mid":"16 damage; M \u003c 4 weakened (save ends)"}},"sections":[{"label":"Effect","text":"Each ally in the area regains 10 Stamina."}]},{"kind":"ability","action":"triggered","name":"Battlefield Control","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance willingly moves."},{"label":"Effect","text":"At any point during the movement, the tactician and one ally within distance can use a signature ability against the target."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the tactician chooses one creature within their line of effect. Both the tactician and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
