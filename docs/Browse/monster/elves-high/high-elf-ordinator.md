---
agility: 2
ev: "20"
free_strike: 5
intuition: 2
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 3
might: 0
movement: Fly
name: High Elf Ordinator
organization: Leader
presence: 3
reason: 3
scc: mcdm.monsters.v1/monster.elves-high.statblock/high-elf-ordinator
size: 1M
speed: 5
stability: 0
stamina: "120"
type: statblock
---

# High Elf Ordinator

---

<script type="application/json" class="sc-statblock-data">
{"id":"high-elf-ordinator","name":"High Elf Ordinator","ancestry":"Fey, High Elf, Humanoid","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Lightning Rod","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 lightning damage; R \u003c 3 dazed (save ends)","low":"9 lightning damage; R \u003c 1 dazed (save ends)","mid":"14 lightning damage; R \u003c 2 dazed (save ends)"}},"sections":[{"label":"Effect","text":"Until the start of the ordinator's next turn, each ally high elf in the encounter gains an edge on ability rolls against the target."}]},{"kind":"ability","action":"maneuver","name":"Elemental Uproar","usage":"Maneuver","keywords":["Area","Magic"],"distance":"10 burst","target":"Each elemental ally in the area","sections":[{"label":"Effect","text":"Each target can move up to their speed or make a free strike. Elemental mote targets can, instead, use their Spark of Life trait."}]},{"kind":"ability","action":"maneuver","name":"Summon Elemental","cost":"2 Malice","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The ordinator summons four elemental motes or four soot crows into unoccupied space within distance."}],"enhancements":[{"cost":"3 Malice","text":"The ordinator instead summons one ceramic horse or one winded brambleguard into an unoccupied space within distance."}]},{"kind":"ability","action":"triggered","name":"Enough!","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance uses an ability against the ordinator or any ally within distance."},{"label":"Effect","text":"The ordinator uses Lightning Rod against the target after the ability is resolved."}]},{"kind":"passive","action":"passive","name":"Otherworldly Blessing","body":"At the start of each of their turns, the ordinator can choose one or more effects on them that can be ended by a saving throw. The effects instead end at the end of the ordinator's turn."},{"kind":"villain","action":"villain","name":"Fountains Roar, Now Free From the Earth","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target glows briefly, and can end one effect on themself then move up to their speed."}]},{"kind":"villain","action":"villain","name":"And the Sun Forsook Her Children","cost":"Villain Action 2","keywords":["Area","Magic","Ranged"],"distance":"5 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"Pull 1 toward the center of the cube","low":"12 corruption damage; pull 5 toward the center of the cube","mid":"9 corruption damage; pull 3 toward the center of the cube"}},"sections":[{"label":"Effect","text":"Each target makes a **Presence test**."},{"label":"Effect","text":"The area turns dark and distorted, and is difficult terrain for enemies."}]},{"kind":"villain","action":"villain","name":"But We Will Change Her Mind","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target's free strike now has the Magic keyword and can target two creatures or objects. Additionally, each target glows with magic."}]}]}
</script>
