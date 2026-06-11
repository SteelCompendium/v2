---
agility: 3
ev: "14"
free_strike: 6
intuition: 2
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 5
might: 1
movement: Climb
name: Shadow Elf Moondancer
organization: Platoon
presence: 0
reason: 1
role: Harrier
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-moondancer
size: 1M
speed: 7
stability: 0
stamina: "70"
type: statblock
---

# Shadow Elf Moondancer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-moondancer","name":"Shadow Elf Moondancer","ancestry":"Fey, Humanoid, Shadow Elf","level":"5","role":"Platoon Harrier","roleKey":"harrier","ev":"14","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Crescent Sweep","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"16 damage","low":"9 damage","mid":"13 damage"}},"sections":[{"label":"Effect","text":"Until the end of the current turn, the moondancer ignores opportunity attacks from the target."}]},{"kind":"ability","action":"triggered","name":"Dissolve","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The moondancer takes damage from a strike."},{"label":"Effect","text":"The moondancer can teleport up to 10 squares to a space with concealment created by darkness."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The moondancer ignores concealment created by darkness. While the moondancer is in direct sunlight, they have damage weakness 3. While the moondancer has concealment, they have damage immunity 3."}]}
</script></div>
