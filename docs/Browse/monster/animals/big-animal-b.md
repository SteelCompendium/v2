---
agility: 1
ev: "16"
free_strike: 5
intuition: 1
keywords:
    - Animal
level: 2
might: 2
name: Big Animal B
organization: Elite
presence: 0
reason: -1
role: Mount
scc: mcdm.monsters.v1/monster.animals.statblock/big-animal-b
size: "3"
speed: 6
stability: 3
stamina: "80"
type: statblock
---

# Big Animal B

---

<script type="application/json" class="sc-statblock-data">
{"id":"big-animal-b","name":"Big Animal B","ancestry":"Animal","level":"2","role":"Elite Mount","roleKey":"mount","ev":"16","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Natural Weapon","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; push 2","low":"7 damage","mid":"10 damage; push 1"}}},{"kind":"ability","action":"maneuver","name":"Trundle","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The animal moves up to their speed. They can make a free strike against each creature who makes an opportunity attack against them during this movement."}]},{"kind":"ability","action":"triggered","name":"Animal Rally","usage":"Triggered action","keywords":["-"],"distance":"Ranged 20","target":"One ally","sections":[{"label":"Trigger","text":"The target is knocked prone."},{"label":"Effect","text":"The animal moves up to their speed. If they end their turn adjacent to the target, they can use the Stand Up maneuver to let the target stand, then get on to ride them."}]},{"kind":"passive","action":"passive","name":"Beast of Burden","body":"While riding the animal, two size 1 allies can occupy the same space."},{"kind":"passive","action":"passive","name":"Nature's Spirit","body":"While outdoors or in a natural environment, the animal can negate a bane on their abilities or turn a double bane into a bane."}]}
</script>
