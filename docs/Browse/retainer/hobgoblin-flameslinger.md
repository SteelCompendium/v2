---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: '-'
free_strike: 5
immunities:
    - Fire 4
intuition: 1
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 1
name: Hobgoblin Flameslinger
organization: Retainer
presence: 3
reason: 2
role: Controller
scc: mcdm.monsters.v1/retainer.statblock/hobgoblin-flameslinger
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Hobgoblin Flameslinger

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-flameslinger","name":"Hobgoblin Flameslinger","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Retainer Controller","roleKey":"controller","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Fire Curse","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 fire damage; A \u003c STRONG the target is burning (save ends)","low":"5 fire damage","mid":"9 fire damage"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"main","name":"Fuel for the Fire","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature","sections":[{"label":"Effect","text":"Until the end of the flameslinger's next turn, the target has fire weakness equal to the flameslinger's level. If the target is the flameslinger's mentor, they instead have fire immunity equal to the flameslinger's level."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the flameslinger is reduced to 0 [Stamina](../../rule/health/stamina/), they spray buring blood. Each creature [adjacent](../../rule/combat/adjacent/) to the flameslinger takes 3 fire damage."},{"kind":"ability","action":"main","name":"Unholy Attraction","cost":"Encounter","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage, pull 4","low":"8 damage; pull 1","mid":"12 damage; pull 2"}},"sections":[{"label":"Effect","text":"A target who is pulled [adjacent](../../rule/combat/adjacent/) to the flameslinger and who has P \u003c AVERAGE is knocked [prone](../../condition/prone/)."}]},{"kind":"ability","action":"main","name":"Fire Spiral","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage; [push](../../movement/forced-movement/) 5","low":"8 damage; [push](../../movement/forced-movement/) 2","mid":"12 damage; [push](../../movement/forced-movement/) 3"}},"sections":[{"label":"Effect","text":"If the flameslinger's mentor is within 10 squares of the flameslinger, the mentor can be the source of the burst instead of the flameslinger."}]}]}
</script></div>
