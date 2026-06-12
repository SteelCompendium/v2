---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "12"
free_strike: 5
intuition: 3
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 4
might: 0
movement: Climb
name: Shadow Elf Luminator
organization: Platoon
presence: 2
reason: 1
role: Support
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-luminator
size: 1M
speed: 5
stability: 0
stamina: "60"
type: statblock
---

# Shadow Elf Luminator

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-luminator","name":"Shadow Elf Luminator","ancestry":"Fey, Humanoid, Shadow Elf","level":"4","role":"Platoon Support","roleKey":"support","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Lumina Mark","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 3","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"15 lightning damage","low":"8 lightning damage","mid":"12 lightning damage"}},"sections":[{"label":"Effect","text":"The next strike made against the target deals an extra 5 damage."}]},{"kind":"ability","action":"main","name":"Mourning Till Dusk","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each ally in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"The target regains 12 Stamina and the Director gains 3 Malice.","low":"The target regains 6 Stamina.","mid":"The target regains 9 Stamina."}},"sections":[{"label":"Effect","text":"Each target gains an edge on their next strike."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The luminator ignores concealment created by darkness. While the luminator is in direct sunlight, they have damage weakness 3. While the luminator has concealment, they have damage immunity 3."}]}
</script></div>
