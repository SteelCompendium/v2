---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "16"
free_strike: 5
intuition: 2
keywords:
    - Beast
    - Griffon
level: 2
might: 2
movement: Fly
name: Striped Condor Griffon
organization: Elite
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.griffons.statblock/striped-condor-griffon
size: "3"
speed: 7
stability: 3
stamina: "100"
type: statblock
---

# Striped Condor Griffon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"striped-condor-griffon","name":"Striped Condor Griffon","ancestry":"Beast, Griffon","level":"2","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Violent Thrashing","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; one target is [pushed](../../../movement/forced-movement/) up to 2 squares and knocked [prone](../../../condition/prone/); the other target is vertical [pushed](../../../movement/forced-movement/) up to 3 squares","low":"7 damage; [push](../../../movement/forced-movement/) 1","mid":"11 damage; one target is [pushed](../../../movement/forced-movement/) up to 2 squares; the other target is vertical [pushed](../../../movement/forced-movement/) up to 2 squares"}}},{"kind":"ability","action":"main","name":"Bound Ahead","cost":"5 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The griffon [shifts](../../../movement/shifting/) up to their speed along the ground in straight line. Each enemy who comes [adjacent](../../../rule/combat/adjacent/) to the griffon during this shift can choose to either take 5 damage or be knocked [prone](../../../condition/prone/)."}]},{"kind":"ability","action":"maneuver","name":"Power Wing Buffet","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area"],"distance":"5 x 3 line within 1","target":"Each creature or object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"[Push](../../../movement/forced-movement/) 6; M \u003c 2 the [forced movement](../../../movement/forced-movement/) is vertical","low":"[Push](../../../movement/forced-movement/) 2; M \u003c 0 the [forced movement](../../../movement/forced-movement/) is vertical","mid":"[Push](../../../movement/forced-movement/) 4; M \u003c 1 the [forced movement](../../../movement/forced-movement/) is vertical"}}},{"kind":"ability","action":"triggered","name":"Circle and Strike","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"The griffon flies directly above a creature within distance."},{"label":"Effect","text":"The griffon dives down onto the target, taking no damage from falling if they reach the ground. The target takes 3 damage for each square the griffon dove, and if they have A \u003c 2, they are [grabbed](../../../condition/grabbed/) or knocked [prone](../../../condition/prone/)."}]},{"kind":"passive","action":"passive","name":"Beast of Prey","body":"While [grabbed](../../../condition/grabbed/) by the griffon, a creature has a double bane on the Escape Grab maneuver."},{"kind":"passive","action":"passive","name":"Steady","body":"Any power roll that could knock the griffon [prone](../../../condition/prone/) takes a bane."},{"kind":"passive","action":"passive","name":"Banded Predator","body":"The griffon can attempt hide even while observed. Additionally, while no enemy has line of effect to them, the griffon can attempt to hide at the end of their turn."}]}
</script></div>
