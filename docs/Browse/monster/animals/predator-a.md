---
agility: 2
ev: "12"
free_strike: 5
intuition: 1
keywords:
    - Animal
level: 1
might: 1
name: Predator A
organization: Elite
presence: 1
reason: -2
role: Brute
scc: mcdm.monsters.v1/monster.animals.statblock/predator-a
size: "2"
speed: 5
stability: 0
stamina: "80"
type: statblock
---

# Predator A

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"predator-a","name":"Predator A","ancestry":"Animal","level":"1","role":"Elite Brute","roleKey":"brute","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Natural Weapon","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; M \u003c 1 prone","low":"7 damage","mid":"10 damage; M \u003c 1 prone"}}},{"kind":"ability","action":"maneuver","name":"Ready to Strike","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The predator assesses their environment or lets loose a threatening roar and gains an edge on their next strike."}]},{"kind":"ability","action":"triggered","name":"Quick Strike","usage":"Triggered action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object comes within distance."},{"label":"Effect","text":"The predator makes a free strike against the target. If the predator was hidden from the target, the strike deals an extra 3 damage."}]},{"kind":"passive","action":"passive","name":"Nature's Spirit","body":"While outdoors or in a natural environment, the predator can negate a bane on their abilities or turn a double bane into a bane."}]}
</script></div>
