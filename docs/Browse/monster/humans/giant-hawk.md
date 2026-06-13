---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 3
intuition: 1
keywords:
    - Animal
    - Human
level: 1
might: 2
movement: Fly
name: Giant Hawk
organization: Platoon
presence: -2
reason: -3
role: Mount
scc: mcdm.monsters.v1/monster.humans.statblock/giant-hawk
size: "2"
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Giant Hawk

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"giant-hawk","name":"Giant Hawk","ancestry":"Animal, Human","level":"1","role":"Platoon Mount","roleKey":"mount","ev":"6","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Talons","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; [grabbed](../../../condition/grabbed/)","low":"5 damage","mid":"7 damage"}},"enhancements":[{"cost":"2 [Malice](../../rule/monster/malice.md)","text":"If this ability gains an edge or has a double edge, it deals an extra 2 damage."}]},{"kind":"ability","action":"maneuver","name":"Dive (1 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The hawk moves up to their speed."}]},{"kind":"passive","action":"passive","name":"Mounted Platform","body":"Once per turn when the hawk moves, any creature riding the hawk can make a [free strike](../../../feature/common/main-actions/free-strike/) during or after the movement."}]}
</script></div>
