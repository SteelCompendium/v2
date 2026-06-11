---
agility: 2
ev: "12"
free_strike: 6
intuition: 1
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 4
might: 3
movement: Climb
name: Shadow Elf Panther
organization: Platoon
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-panther
size: 1M
speed: 5
stability: 0
stamina: "70"
type: statblock
---

# Shadow Elf Panther

---

<script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-panther","name":"Shadow Elf Panther","ancestry":"Fey, Humanoid, Shadow Elf","level":"4","role":"Platoon Brute","roleKey":"brute","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Dusk Cleave","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"16 damage; I \u003c 3 bleeding (save ends)","low":"9 damage","mid":"13 damage"}},"sections":[{"label":"Effect","text":"The panther can make a free strike against a creature or object adjacent to the target."}]},{"kind":"ability","action":"main","name":"Bladestorm","cost":"3 Malice","usage":"Main action","keywords":["Area","Weapon"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"10 corruption damage; I \u003c 3 dazed (save ends)","low":"5 corruption damage","mid":"8 corruption damage; I \u003c 2 dazed (save ends)"}},"sections":[{"label":"Effect","text":"The panther has a double edge on strikes against targets dazed this way."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The panther ignores concealment created by darkness. While the panther is in direct sunlight, they have damage weakness 3. While the panther has concealment, they have damage immunity 3."}]}
</script>
