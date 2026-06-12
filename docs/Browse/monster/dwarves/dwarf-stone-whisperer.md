---
printing: "1.01"
printing_book: "Bestiary"
agility: 0
ev: "10"
free_strike: 5
intuition: 2
keywords:
    - Dwarf
    - Humanoid
level: 3
might: 1
movement: Burrow
name: Dwarf Stone Whisperer
organization: Platoon
presence: 0
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-stone-whisperer
size: 1M
speed: 5
stability: 2
stamina: "52"
type: statblock
---

# Dwarf Stone Whisperer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-stone-whisperer","name":"Dwarf Stone Whisperer","ancestry":"Dwarf, Humanoid","level":"3","role":"Platoon Controller","roleKey":"controller","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"52"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Tile Slide","cost":"Signature","usage":"Main action","keywords":["Area","Magic"],"distance":"2 cube within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"11 damage; slide 5; M \u003c 2 restrained (save ends)","low":"5 damage; slide 1; M \u003c 0 slowed (save ends)","mid":"8 damage; slide 3; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}]},{"kind":"ability","action":"maneuver","name":"Stone Wave","cost":"3 Malice","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; push 3; R \u003c 3 slowed (save ends)","low":"4 damage; push 2; R \u003c 1 slowed (save ends)","mid":"6 damage; push 3; R \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain for enemies. A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}]},{"kind":"passive","action":"passive","name":"Stone Walker","body":"Whenever the stone whisperer willingly moves, they can phase through up to 2 squares of stone as part of that movement. If they end their movement inside stone, they are shunted out into the space from which they entered it."}]}
</script></div>
