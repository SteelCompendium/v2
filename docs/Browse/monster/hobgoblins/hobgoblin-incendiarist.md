---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "14"
free_strike: 6
immunities:
    - Fire 5
intuition: 2
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 5
might: 1
name: Hobgoblin Incendiarist
organization: Platoon
presence: 1
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-incendiarist
size: 1M
speed: 5
stability: 0
stamina: "60"
type: statblock
---

# Hobgoblin Incendiarist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-incendiarist","name":"Hobgoblin Incendiarist","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"5","role":"Platoon Artillery","roleKey":"artillery","ev":"14","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Fire Crossbow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 fire damage; A \u003c 3 burning (save ends)","low":"9 fire damage","mid":"14 fire damage"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"main","name":"Fireball Volley (3 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 10","target":"Each enemy or object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 fire damage; [prone](../../../condition/prone/); A \u003c 3 burning (save ends)","low":"5 fire damage; A \u003c 1 burning (save ends)","mid":"9 fire damage; A \u003c 2 burning (save ends)"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"passive","action":"passive","name":"Raining Cinders","body":"The ranged [free strike](../../../feature/common/main-actions/free-strike/) of each ally within 3 squares of the incendiarist has a distance of 10 and deals fire damage."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the incendiarist is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the incendiarist takes 3 fire damage."}]}
</script></div>
