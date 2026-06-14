---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "12"
free_strike: 5
immunities:
    - Fire 4
intuition: 2
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 0
movement: Teleport
name: Hobgoblin Burning Witch
organization: Platoon
presence: 3
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-burning-witch
size: 1M
speed: 5
stability: 0
stamina: "50"
type: statblock
---

# Hobgoblin Burning Witch

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-burning-witch","name":"Hobgoblin Burning Witch","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Platoon Controller","roleKey":"controller","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 4","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Soul Burn","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"8 corruption or fire damage","low":"4 corruption or fire damage","mid":"6 corruption or fire damage"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"Each target who has P \u003c 2 is [weakened](../../../condition/weakened/) (save ends). Any enemy who starts their turn within 3 squares of a target [weakened](../../../condition/weakened/) this way and who has P \u003c 2 is [weakened](../../../condition/weakened/) (save ends)."}]},{"kind":"ability","action":"maneuver","name":"Burning Legion","cost":"1 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Three creatures","sections":[{"label":"Effect","text":"Each target can [teleport](../../../movement/teleport/) up to 5 squares. Each creature [adjacent](../../../rule/combat/adjacent/) to a target at their destination takes 3 fire damage."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the burning witch is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the burning witch takes 3 fire damage."}]}
</script></div>
