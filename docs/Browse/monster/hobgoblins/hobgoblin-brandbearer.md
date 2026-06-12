---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: 6 for four minions
free_strike: 2
immunities:
    - Fire 2
intuition: 0
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 0
name: Hobgoblin Brandbearer
organization: Minion
presence: 3
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-brandbearer
size: 1M
speed: 5
stability: 0
stamina: "7"
type: statblock
with_captain: Gain an edge on strikes
---

# Hobgoblin Brandbearer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-brandbearer","name":"Hobgoblin Brandbearer","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Minion Hexer","roleKey":"hexer","ev":"6 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"7"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Fire 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Searing Grasp","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"6 fire damage; M \u003c 3 fire weakness 5 (save ends)","low":"2 fire damage","mid":"4 fire damage; M \u003c 2 fire weakness 5 (save ends)"}}},{"kind":"passive","action":"passive","name":"Open Furnace","body":"Whenever an enemy takes fire damage, they take 1 extra fire damage for each brandbearer adjacent to them."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the brandbearer is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the brandbearer takes 2 fire damage."}]}
</script></div>
