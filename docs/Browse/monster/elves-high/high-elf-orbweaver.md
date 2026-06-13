---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "10"
free_strike: 5
intuition: 2
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 3
might: 0
name: High Elf Orbweaver
organization: Platoon
presence: 2
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.elves-high.statblock/high-elf-orbweaver
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# High Elf Orbweaver

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"high-elf-orbweaver","name":"High Elf Orbweaver","ancestry":"Fey, High Elf, Humanoid","level":"3","role":"Platoon Hexer","roleKey":"hexer","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Awash","cost":"Signature","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each creature in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 cold damage; M \u003c 2 [slide](../../../movement/forced-movement/) 5 or [prone](../../../condition/prone/)","low":"4 cold damage; M \u003c 0 [push](../../../movement/forced-movement/) 3","mid":"6 cold damage; M \u003c 1 [push](../../../movement/forced-movement/) 5 or [prone](../../../condition/prone/)"}}},{"kind":"ability","action":"main","name":"Aetherweb","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"Two enemies or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"11 damage; R \u003c 2 [restrained](../../../condition/restrained/) (save ends)","low":"5 damage; R \u003c 0 [slowed](../../../condition/slowed/) (save ends)","mid":"8 damage; R \u003c 1 [slowed](../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"Each enemy within 3 squares of a target suffers the same [potency](../../../rule/character/potency/) effect as the target unless they are already [adjacent](../../../rule/combat/adjacent/) to them, or if they immediately [shift](../../../movement/shifting/) into an unoccupied space [adjacent](../../../rule/combat/adjacent/) to the target (no action required)."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the orbweaver can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."}]}
</script></div>
