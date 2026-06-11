---
agility: 0
ev: "16"
free_strike: 5
intuition: 1
keywords:
    - Humanoid
    - Rival
level: 2
might: 0
name: Rival Elementalist
organization: Elite
presence: 0
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.rivals.1st-echelon.statblock/rival-elementalist
size: 1M
speed: 5
stability: 1
stamina: "60"
type: statblock
---

# Rival Elementalist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-elementalist","name":"Rival Elementalist","ancestry":"Humanoid, Rival","level":"2","role":"Elite Controller","roleKey":"controller","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"The Writhing Green","cost":"Signature","usage":"Main action","keywords":["Green","Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; slide 3","low":"7 damage; slide 1","mid":"10 damage; slide 2"}}},{"kind":"ability","action":"main","name":"The Earth Devours","cost":"3 Malice","usage":"Main action","keywords":["Area","Green","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; restrained (save ends)","low":"3 damage","mid":"5 damage; restrained (EoT)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain for enemies until the end of the encounter. Any enemy in the area has acid weakness 2."}]},{"kind":"ability","action":"triggered","name":"Jaws of the Void","usage":"Triggered action","keywords":["Magic","Void"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The elementalist takes damage."},{"label":"Effect","text":"The elementalist can teleport up to 2 squares. Each creature adjacent to the space they leave takes 2 corruption damage."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the elementalist chooses one creature within their line of effect. Both the elementalist and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
