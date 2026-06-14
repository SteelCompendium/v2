---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "10"
free_strike: 5
immunities:
    - Psychic 5
intuition: -1
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 3
might: 0
name: High Elf Wyrd
organization: Platoon
presence: 2
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.elves-high.statblock/high-elf-wyrd
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# High Elf Wyrd

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"high-elf-wyrd","name":"High Elf Wyrd","ancestry":"Fey, High Elf, Humanoid","level":"3","role":"Platoon Controller","roleKey":"controller","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Twystrd","cost":"Signature","usage":"Main action","keywords":["Area","Magic"],"distance":"1 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"Vertical push 6","low":"Vertical push 3","mid":"Vertical push 5"}},"sections":[{"label":"Effect","text":"For each elemental mote adjacent to the wyrd, the size of the cube increases by 1."}]},{"kind":"ability","action":"maneuver","name":"Summon Elemental","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 5","target":"Special","sections":[{"label":"Effect","text":"The wyrd summons two elemental motes or two soot crows into unoccupied spaces within distance."}]},{"kind":"ability","action":"maneuver","name":"Wyrd Warp","cost":"2 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"8 wall within 8","target":"Special","sections":[{"label":"Effect","text":"The wyrd shapes the land in the area as if it were loose clay, either raising the ground or pushing it down to create a trench. Any creature in the area moves with the terrain to its new higher elevation, or falls if the ground is lowered beneath them."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the wyrd can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."}]}
</script></div>
