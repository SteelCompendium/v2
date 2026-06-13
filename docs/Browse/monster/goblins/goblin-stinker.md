---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: -2
movement: Climb
name: Goblin Stinker
organization: Horde
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.goblins.statblock/goblin-stinker
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Goblin Stinker

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"goblin-stinker","name":"Goblin Stinker","ancestry":"Goblin, Humanoid","level":"1","role":"Horde Controller","roleKey":"controller","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Toxic Winds","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 15","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"3 poison damage; [slide](../../../movement/forced-movement/) 3","low":"1 poison damage; [slide](../../../movement/forced-movement/) 1","mid":"2 poison damage; [slide](../../../movement/forced-movement/) 2"}},"enhancements":[{"cost":"1+ [Malice](../../rule/monster/malice.md)","text":"For each [Malice](../../../rule/monster/malice/) spent, one target can be [force moved](../../../movement/forced-movement/) 1 additional square."}]},{"kind":"ability","action":"maneuver","name":"Swamp Gas","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Special","sections":[{"label":"Effect","text":"The area is filled with a green haze that lasts until the start of the stinker's next turn or until the stinker is reduced to 0 [Stamina](../../../rule/health/stamina/), and which can't be dispersed by wind. The area is [difficult terrain](../../../movement/difficult-terrain/) for non-goblins, and each non-goblin who moves in the area takes 2 poison damage for each square moved."}]},{"kind":"passive","action":"passive","name":"Crafty","body":"The stinker doesn't provoke [opportunity attacks](../../../rule/combat/opportunity-attack/) by moving."}]}
</script></div>
