---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "16"
free_strike: 6
immunities:
    - Fire 6
intuition: 3
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 6
might: 0
movement: Teleport
name: Hobgoblin Redglare
organization: Platoon
presence: 3
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-redglare
size: 1L
speed: 5
stability: 4
stamina: "70"
type: statblock
---

# Hobgoblin Redglare

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-redglare","name":"Hobgoblin Redglare","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"6","role":"Platoon Hexer","roleKey":"hexer","ev":"16","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 6","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Eye Flash","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 corruption damage; P \u003c 3 [restrained](../../../condition/restrained/) (save ends)","low":"9 corruption damage; P \u003c 1 [slowed](../../../condition/slowed/) (save ends)","mid":"14 corruption damage; P \u003c 2 [restrained](../../../condition/restrained/) (save ends)"}}},{"kind":"ability","action":"main","name":"Glare of the Old Judgments (5 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"The target is judged.","low":"10 corruption damage","mid":"10 corruption damage, or if the target has P \u003c 2 they are judged"}},"sections":[{"label":"Effect","text":"Until the end of the encounter, a judged target takes 10 corruption damage at the start of each of their turns, and regains 5 [Stamina](../../../rule/health/stamina/) each time they use an ability or other effect that allows another creature to spend a Recovery."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the redglare is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the redglare takes 3 fire damage."}]}
</script></div>
