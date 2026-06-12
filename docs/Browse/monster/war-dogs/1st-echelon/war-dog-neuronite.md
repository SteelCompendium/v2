---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "3"
free_strike: 1
immunities:
    - Psychic 2
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 1
might: 0
movement: Fly
name: War Dog Neuronite
organization: Horde
presence: 2
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-neuronite
size: 1M
speed: 5
stability: 0
stamina: "20"
type: statblock
---

# War Dog Neuronite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-neuronite","name":"War Dog Neuronite","ancestry":"Humanoid, Soulless, War Dog","level":"1","role":"Horde Defender","roleKey":"defender","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Psychic 2","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Synlirii Grafts","cost":"Signature","usage":"Main action","keywords":["Area","Psionic"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"3 psychic damage; vertical slide 3","low":"1 psychic damage; vertical slide 1","mid":"2 psychic damage; vertical slide 2"}}},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 Stamina."}]},{"kind":"ability","action":"maneuver","name":"The Voice","cost":"1 Malice","usage":"Maneuver","keywords":["Area","Psionic"],"distance":"5 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The neuronite chooses one ally within 10 squares. Each target is either taunted by the ally, or the ally has damage immunity 3 whenever any target makes a strike against them (the neuronite's choice). Either effect lasts until the start of the neuronite's next turn."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the neuronite is reduced to 0 Stamina, their loyalty collar explodes, dealing 1d6 damage to each adjacent enemy and object."}]}
</script></div>
