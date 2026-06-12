---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "40"
free_strike: 8
intuition: 3
keywords:
    - Humanoid
    - Rival
level: 8
might: 0
name: Rival Elementalist
organization: Elite
presence: 0
reason: 4
role: Controller
scc: mcdm.monsters.v1/monster.rivals.3rd-echelon.statblock/rival-elementalist
size: 1M
speed: 5
stability: 1
stamina: "180"
type: statblock
---

# Rival Elementalist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-elementalist","name":"Rival Elementalist","ancestry":"Humanoid, Rival","level":"8","role":"Elite Controller","roleKey":"controller","ev":"40","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Verdant Rains","cost":"Signature","usage":"Main action","keywords":["Green","Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; slide 4; M \u003c 4 8 acid damage","low":"12 damage; slide 2; M \u003c 2 4 acid damage","mid":"17 damage; slide 3; M \u003c 3 6 acid damage"}},"sections":[{"label":"Effect","text":"One ally within distance ends one condition on themself."}]},{"kind":"ability","action":"main","name":"The Chasm Engulfs","cost":"4 Malice","usage":"Main action","keywords":["Area","Green","Magic","Ranged"],"distance":"5 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 damage; restrained (save ends)","low":"6 damage","mid":"10 damage; restrained (EoT)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain for enemies until the end of the encounter. Any enemy in the area has acid weakness 5."}]},{"kind":"ability","action":"triggered","name":"Maw of the Abyss","usage":"Triggered action","keywords":["Magic","Void"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The elementalist takes damage."},{"label":"Effect","text":"The elementalist can teleport up to 4 squares. Each creature adjacent to the space they leave or appear in takes 4 corruption damage."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the elementalist chooses one creature within their line of effect. Both the elementalist and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
