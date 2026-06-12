---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "12"
free_strike: 4
intuition: 2
keywords:
    - Animal
    - Swarm
level: 1
might: -2
name: Animal Swarm
organization: Elite
presence: -3
reason: -3
role: Hexer
scc: mcdm.monsters.v1/monster.animals.statblock/animal-swarm
size: "2"
speed: 5
stability: 1
stamina: "40"
type: statblock
---

# Animal Swarm

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"animal-swarm","name":"Animal Swarm","ancestry":"Animal, Swarm","level":"1","role":"Elite Hexer","roleKey":"hexer","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Flurry","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; pull 2","low":"6 damage","mid":"9 damage; pull 1"}},"sections":[{"label":"Effect","text":"If the target is pulled into the animal swarm, that forced movement deals damage only at the Director's determination."}]},{"kind":"passive","action":"passive","name":"Swarm","body":"The animal swarm can move through spaces as if they were a size 1M creature, and can occupy other creatures' spaces. At the start of each of the animal swarm's turns, they can make a free strike against each creature whose space they share."},{"kind":"ability","action":"maneuver","name":"Impede","usage":"Maneuver","keywords":["Area"],"distance":"1 aura","target":"Special","sections":[{"label":"Effect","text":"The area is difficult terrain for enemies until the start of the animal swarm's next turn."}]},{"kind":"passive","action":"passive","name":"Nature's Spirit","body":"While outdoors or in a natural environment, the animal swarm can negate a bane on their abilities or turn a double bane into a bane."}]}
</script></div>
