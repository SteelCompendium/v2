---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "8"
free_strike: 3
intuition: 0
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 2
might: 0
movement: Climb
name: Wode Elf Druid
organization: Platoon
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-druid
size: 1M
speed: 7
stability: 0
stamina: "30"
type: statblock
---

# Wode Elf Druid

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-druid","name":"Wode Elf Druid","ancestry":"Fey, Humanoid, Wode Elf","level":"2","role":"Platoon Controller","roleKey":"controller","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Entangling Vines","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"10 damage; pull 5; M \u003c 2 slowed (save ends)","low":"5 damage; pull 1","mid":"8 damage; pull 3; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"While slowed this way, a target can't search for hidden creatures."}],"enhancements":[{"cost":"3 Malice","text":"The size of the cube and the potency both increase by 1."}]},{"kind":"ability","action":"maneuver","name":"The Wode Protects Us","cost":"3 Malice","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self and three allies","sections":[{"label":"Effect","text":"Each target can teleport up to 10 squares to a space that has cover or concealment."}]},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the druid that would take a bane from cover or concealment have a double bane instead."}]}
</script></div>
