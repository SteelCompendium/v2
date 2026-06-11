---
agility: 1
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Abyssal
    - Demon
level: 1
might: 0
name: Torlas
organization: Horde
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.demons.1st-echelon.statblock/torlas
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
weaknesses:
    - Holy 3
---

# Torlas

---

<script type="application/json" class="sc-statblock-data">
{"id":"torlas","name":"Torlas","ancestry":"Abyssal, Demon","level":"1","role":"Horde Controller","roleKey":"controller","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"Holy 3","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Floor to Flesh","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"Slide 5","low":"Slide 3","mid":"Slide 4"}},"sections":[{"label":"Effect","text":"The ground in the area turns into a morass of spongy flesh before the targets are force moved. Until the start of the torlas's next turn, the area is difficult terrain, and each creature who moves in the area takes 1 damage for each square moved."}]},{"kind":"ability","action":"maneuver","name":"Grasping Tendons","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Three creatures","sections":[{"label":"Effect","text":"The torlas pulls each target up to 3 squares."}]},{"kind":"passive","action":"passive","name":"Lethe","body":"While the torlas is winded, they gain an edge on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 2 squares of the torlas can't be hidden from them."}]}
</script>
