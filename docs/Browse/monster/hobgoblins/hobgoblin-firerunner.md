---
printing: "1.01"
printing_book: "Bestiary"
agility: 3
ev: "14"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 5
might: 2
name: Hobgoblin Firerunner
organization: Platoon
presence: 0
reason: 1
role: Harrier
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-firerunner
size: 1M
speed: 8
stability: 0
stamina: "70"
type: statblock
---

# Hobgoblin Firerunner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-firerunner","name":"Hobgoblin Firerunner","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"5","role":"Platoon Harrier","roleKey":"harrier","ev":"14","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Flaming Kick","cost":"Signature","usage":"Main action","keywords":["Charge","Magic","Melee","Strike"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"16 fire damage; A \u003c 3 dazed (EoT)","low":"9 fire damage","mid":"13 fire damage"}}},{"kind":"ability","action":"maneuver","name":"Blazing Trail","usage":"Maneuver","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The firerunner moves up to their speed and creates an 8 wall of fire along the path of their movement. Creatures can enter and pass through the wall. Any enemy who enters the wall for the first time in a round or starts their turn there takes 5 fire damage."}]},{"kind":"passive","action":"passive","name":"Hot to Go","body":"Whenever the firerunner takes fire damage for the first time in round, their speed and the size of the wall they can create with Blazing Trail increases by 4 until the end of their next turn."},{"kind":"passive","action":"passive","name":"Kindlestep","body":"The firerunner ignores difficult terrain."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the firerunner is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the firerunner takes 3 fire damage."}]}
</script></div>
