---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "12"
free_strike: 4
intuition: 1
keywords:
    - Animal
level: 1
might: 1
name: Big Animal A
organization: Elite
presence: -2
reason: -2
role: Mount
scc: mcdm.monsters.v1/monster.animals.statblock/big-animal-a
size: "2"
speed: 6
stability: 1
stamina: "60"
type: statblock
---

# Big Animal A

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"big-animal-a","name":"Big Animal A","ancestry":"Animal","level":"1","role":"Elite Mount","roleKey":"mount","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Natural Weapon","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; A \u003c 2 3 damage","low":"6 damage","mid":"9 damage; A \u003c 1 3 damage"}}},{"kind":"ability","action":"maneuver","name":"Toss","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be the animal's size or smaller."},{"label":"Effect","text":"The target vertical slides up to 3 squares. If the target is an ally, they can make a free strike at the end of the forced movement, then fall without taking damage."}]},{"kind":"ability","action":"triggered","name":"Juke","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The animal is targeted by an area ability."},{"label":"Effect","text":"The animal shifts up to 2 squares before the ability resolves."}]},{"kind":"passive","action":"passive","name":"Nature's Spirit","body":"While outdoors or in a natural environment, the animal can negate a bane on their abilities or turn a double bane into a bane."}]}
</script></div>
