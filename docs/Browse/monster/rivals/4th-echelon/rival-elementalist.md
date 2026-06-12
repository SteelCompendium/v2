---
printing: "1.01"
printing_book: "Bestiary"
agility: 3
ev: "48"
free_strike: 10
intuition: 4
keywords:
    - Humanoid
    - Rival
level: 10
might: 1
name: Rival Elementalist
organization: Elite
presence: 1
reason: 5
role: Controller
scc: mcdm.monsters.v1/monster.rivals.4th-echelon.statblock/rival-elementalist
size: 1M
speed: 5
stability: 1
stamina: "220"
type: statblock
---

# Rival Elementalist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-elementalist","name":"Rival Elementalist","ancestry":"Humanoid, Rival","level":"10","role":"Elite Controller","roleKey":"controller","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"220"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Viridescent Storm","cost":"Signature","usage":"Main action","keywords":["Green","Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"24 damage; slide 5; M \u003c 5 9 acid damage","low":"15 damage; slide 3; M \u003c 3 5 acid damage","mid":"20 damage; slide 4; M \u003c 4 7 acid damage"}},"sections":[{"label":"Effect","text":"One ally within distance ends all conditions on themself."}]},{"kind":"ability","action":"main","name":"The World Consumes","cost":"5 Malice","usage":"Main action","keywords":["Area","Green","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The area becomes overgrown with caustic vines until the end of the encounter. While in the area, any enemy has acid weakness 5 and is slowed. Any enemy who ends their turn in the area and has M \u003c 4 is restrained (save ends)."}]},{"kind":"ability","action":"triggered","name":"Breach of Nihility","usage":"Triggered action","keywords":["Magic","Void"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The elementalist takes damage."},{"label":"Effect","text":"The elementalist can teleport up to 5 squares. Each creature adjacent to the space they leave or appear in takes 5 corruption damage."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the elementalist chooses one creature within their line of effect. Both the elementalist and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
