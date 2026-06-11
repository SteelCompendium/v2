---
agility: 2
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: -1
movement: Climb
name: Goblin Underboss
organization: Horde
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.goblins.statblock/goblin-underboss
size: 1S
speed: 5
stability: 0
stamina: "15"
type: statblock
---

# Goblin Underboss

---

<script type="application/json" class="sc-statblock-data">
{"id":"goblin-underboss","name":"Goblin Underboss","ancestry":"Goblin, Humanoid","level":"1","role":"Horde Support","roleKey":"support","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Swordplay","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"3 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"One ally adjacent to the target can make a free strike against them."}]},{"kind":"ability","action":"maneuver","name":"Get Reckless!","usage":"Maneuver","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Until the start of the underboss's next turn, each target gains an edge on strikes, and any strike made against a target gains an edge."}],"enhancements":[{"cost":"2 Malice","text":"Strikes made against targets no longer gain an edge."}]},{"kind":"passive","action":"passive","name":"Crafty","body":"The underboss doesn't provoke opportunity attacks by moving."}]}
</script>
