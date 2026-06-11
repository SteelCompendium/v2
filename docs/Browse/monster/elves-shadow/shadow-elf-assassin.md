---
agility: 3
ev: "16"
free_strike: 7
intuition: 1
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 6
might: 0
movement: Climb
name: Shadow Elf Assassin
organization: Platoon
presence: 1
reason: 2
role: Artillery
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-assassin
size: 1M
speed: 5
stability: 0
stamina: "70"
type: statblock
---

# Shadow Elf Assassin

---

<script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-assassin","name":"Shadow Elf Assassin","ancestry":"Fey, Humanoid, Shadow Elf","level":"6","role":"Platoon Artillery","roleKey":"artillery","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Lumina Assault","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage","low":"10 damage","mid":"15 damage"}},"sections":[{"label":"Effect","text":"The next ability used against the target has a double edge."}],"enhancements":[{"cost":"5 Malice","text":"Each non-minion ally within 3 squares of the target can make a free strike against them."}]},{"kind":"ability","action":"main","name":"Splitbow","cost":"2 Malice","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"4 x 1 line within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"12 damage; I \u003c 3 bleeding (save ends)","low":"5 damage; I \u003c 1 bleeding (save ends)","mid":"10 damage; I \u003c 2 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"Each target is pushed up to 4 squares."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The assassin ignores concealment created by darkness. While the assassin is in direct sunlight, they have damage weakness 3. While the assassin has concealment, they have damage immunity 3."}]}
</script>
