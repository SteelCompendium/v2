---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "6"
free_strike: 3
immunities:
    - Psychic 5
intuition: 2
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 1
might: 0
name: High Elf Palinode
organization: Platoon
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.elves-high.statblock/high-elf-palinode
size: 1M
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# High Elf Palinode

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"high-elf-palinode","name":"High Elf Palinode","ancestry":"Fey, High Elf, Humanoid","level":"1","role":"Platoon Support","roleKey":"support","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Instill Regret","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"9 psychic damage; I \u003c 2 [weakened](../../../condition/weakened/) (save ends)","low":"5 psychic damage","mid":"7 psychic damage; I \u003c 1 [weakened](../../../condition/weakened/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"The [potency](../../../rule/character/potency/) increases by 1. If the target is [weakened](../../../condition/weakened/) this way at the end of the encounter, they can't take a respite activity during their next respite."}]},{"kind":"ability","action":"maneuver","name":"Recall","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Two allies","sections":[{"label":"Effect","text":"Each target can [teleport](../../../movement/teleport/) to an unoccupied space [adjacent](../../../rule/combat/adjacent/) to the palinode. The palinode and each target then gain 5 temporary Stamina."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the palinode can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."}]}
</script></div>
