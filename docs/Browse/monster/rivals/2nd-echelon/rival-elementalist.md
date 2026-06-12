---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "28"
free_strike: 6
intuition: 2
keywords:
    - Humanoid
    - Rival
level: 5
might: 0
name: Rival Elementalist
organization: Elite
presence: 0
reason: 3
role: Controller
scc: mcdm.monsters.v1/monster.rivals.2nd-echelon.statblock/rival-elementalist
size: 1M
speed: 5
stability: 1
stamina: "120"
type: statblock
---

# Rival Elementalist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-elementalist","name":"Rival Elementalist","ancestry":"Humanoid, Rival","level":"5","role":"Elite Controller","roleKey":"controller","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"The Thriving Wilds","cost":"Signature","usage":"Main action","keywords":["Green","Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; slide 3; M \u003c 3 7 acid damage","low":"9 damage; slide 1; M \u003c 1 3 acid damage","mid":"14 damage; slide 2; M \u003c 2 5 acid damage"}}},{"kind":"ability","action":"main","name":"The Depths Hunger","cost":"4 Malice","usage":"Main action","keywords":["Area","Green","Magic","Ranged"],"distance":"4 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 damage; restrained (save ends)","low":"5 damage","mid":"9 damage; restrained (EoT)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain for enemies until the end of the encounter. Any enemy in the area has acid weakness 3."}]},{"kind":"ability","action":"triggered","name":"Fissures of Darkness","usage":"Triggered action","keywords":["Magic","Void"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The elementalist takes damage."},{"label":"Effect","text":"The elementalist can teleport up to 3 squares. Each creature adjacent to the space they leave takes 3 corruption damage."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the elementalist chooses one creature within their line of effect. Both the elementalist and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
