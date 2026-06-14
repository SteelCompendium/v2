---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
intuition: 1
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 3
might: 0
movement: Climb
name: Wode Elf Gweiadur
organization: Platoon
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-gweiadur
size: 1M
speed: 7
stability: 0
stamina: "40"
type: statblock
---

# Wode Elf Gweiadur

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-gweiadur","name":"Wode Elf Gweiadur","ancestry":"Fey, Humanoid, Wode Elf","level":"3","role":"Platoon Artillery","roleKey":"artillery","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Snare Bow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; A \u003c 2 [restrained](../../../condition/restrained/) (save ends)","low":"7 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"The gweiadur [shifts](../../../movement/shifting/) up to 3 squares."}],"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"If this ability [restrains](../../../condition/restrained/) the target, one enemy [adjacent](../../../rule/combat/adjacent/) to the target is also [restrained](../../../condition/restrained/) (save ends)."}]},{"kind":"ability","action":"maneuver","name":"You Activated My Trap!","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; R \u003c 2 [slowed](../../../condition/slowed/) and the target is marked (save ends)","low":"4 damage; R \u003c 0 the target is marked (save ends)","mid":"6 damage; R \u003c 1 [slowed](../../../condition/slowed/) and the target is marked (save ends)"}},"sections":[{"label":"Effect","text":"Allies gain an edge on abilities against a target marked by any wode elf."}]},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the gweiadur that would take a bane from cover or concealment have a double bane instead."}]}
</script></div>
