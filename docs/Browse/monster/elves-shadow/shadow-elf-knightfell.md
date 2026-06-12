---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
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
name: Shadow Elf Knightfell
organization: Platoon
presence: 2
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-knightfell
size: 1M
speed: 5
stability: 0
stamina: "70"
type: statblock
---

# Shadow Elf Knightfell

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-knightfell","name":"Shadow Elf Knightfell","ancestry":"Fey, Humanoid, Shadow Elf","level":"4","role":"Platoon Defender","roleKey":"defender","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Suffusing Strike","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 3","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"15 corruption damage; R \u003c 3 taunted (EoT)","low":"8 corruption damage","mid":"12 corruption damage; R \u003c 2 taunted (EoT)"}}},{"kind":"ability","action":"triggered","name":"Trick of the Eye","usage":"Triggered action","keywords":["Magic","Melee"],"distance":"Melee 2","target":"One ally","sections":[{"label":"Trigger","text":"An enemy within distance makes a strike against the target."},{"label":"Effect","text":"The target takes half the damage and the knightfell takes the other half."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The knightfell ignores concealment created by darkness. While the knightfell is in direct sunlight, they have damage weakness 3. While the knightfell has concealment, they have damage immunity 3."}]}
</script></div>
