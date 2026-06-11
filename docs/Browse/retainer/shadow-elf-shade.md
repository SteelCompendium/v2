---
agility: 3
ev: '-'
free_strike: 5
intuition: 2
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 4
might: 1
movement: Climb
name: Shadow Elf Shade
organization: Retainer
presence: 1
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/retainer.statblock/shadow-elf-shade
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Shadow Elf Shade

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-shade","name":"Shadow Elf Shade","ancestry":"Fey, Humanoid, Shadow Elf","level":"4","role":"Retainer Ambusher","roleKey":"ambusher","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Gloom Dagger","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 3","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 damage","low":"6 damage","mid":"10 damage"}},"sections":[{"label":"Effect","text":"Whenever the shade starts their turn with concealment from the target, they gain 1 surge."}]},{"kind":"ability","action":"maneuver","name":"Duskfall","cost":"Encounter","usage":"Maneuver","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Special","sections":[{"label":"Effect","text":"Until the end of the next turn, the area is filled with darkness. The shade's mentor ignores concealment created by this darkness."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The shade ignores concealment created by darkness. While the shade is in direct sunlight, they have damage weakness 3. While the shade has concealment, they have damage immunity 3."},{"kind":"ability","action":"main","name":"Slow-Poison Needle","cost":"Encounter","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 poison damage; weakened (save ends)","low":"8 poison damage; weakened (save ends)","mid":"12 poison damage; weakened (save ends)"}},"sections":[{"label":"Effect","text":"The slow-poison needle is initially painless, with the damage and effect delayed until the start of the target's next turn. If the shade is hidden, using this ability doesn't cause them to be revealed."}]},{"kind":"ability","action":"main","name":"Shadow Dagger","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"23 poison damage; the target has shadowed vision (save ends)","low":"12 poison damage; the target has shadowed vision (save ends)","mid":"17 poison damage; the target has shadowed vision (save ends)"}},"sections":[{"label":"Effect","text":"While a creature has shadowed vision, all creatures have concealment from them."}]}]}
</script></div>
