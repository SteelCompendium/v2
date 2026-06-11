---
agility: 2
ev: "16"
free_strike: 5
intuition: 1
keywords:
    - Beast
    - Griffon
level: 2
might: 2
movement: Fly
name: Griffon
organization: Elite
presence: 2
reason: -1
role: Mount
scc: mcdm.monsters.v1/monster.griffons.statblock/griffon
size: "2"
speed: 9
stability: 2
stamina: "80"
type: statblock
---

# Griffon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"griffon","name":"Griffon","ancestry":"Beast, Griffon","level":"2","role":"Elite Mount","roleKey":"mount","ev":"16","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"9"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Claw Swipes","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; the griffon shifts up to 3 squares","low":"7 damage; the griffon can shift 1 square","mid":"10 damage; the griffon shifts up to 2 squares"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the Charge main action, the griffon can grab one of the targets."}]},{"kind":"ability","action":"maneuver","name":"Crack the Earth","usage":"Maneuver","keywords":["Area","Ranged"],"distance":"3 cube within 8","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; A \u003c 2 push 4; prone","low":"4 damage","mid":"6 damage; A \u003c 1 push 3"}},"sections":[{"label":"Special","text":"The griffon must be flying and must have a creature or object grabbed."},{"label":"Effect","text":"The griffon flies up to half their speed toward the ground, then sends the creature or object they've grabbed hurtling down. The creature or object hits the ground to turn the area into an impact crater, and takes falling damage that can't be reduced in any way."}]},{"kind":"ability","action":"maneuver","name":"Wing Buffet","cost":"3 Malice","usage":"Maneuver","keywords":["Area"],"distance":"4 x 2 line within 1","target":"Each creature or object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"Push 5; A \u003c 2 the forced movement is vertical","low":"Push 3; A \u003c 0 the forced movement is vertical","mid":"Push 4; A \u003c 1 the forced movement is vertical"}},"sections":[{"label":"Special","text":"A target object must be size 2 or smaller."}]},{"kind":"ability","action":"triggered","name":"Zephyr Feint","cost":"1 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The griffon takes damage."},{"label":"Effect","text":"The griffon halves the damage, ignores any nondamaging effects associated with it, and shifts up to 2 squares."}]},{"kind":"passive","action":"passive","name":"Beast of Prey","body":"While grabbed by the griffon, a creature has a double bane on the Escape Grab maneuver."},{"kind":"passive","action":"passive","name":"Steady","body":"Any power roll that could knock the griffon or their rider prone takes a bane."}]}
</script></div>
