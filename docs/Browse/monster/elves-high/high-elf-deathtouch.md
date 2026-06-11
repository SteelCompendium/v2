---
agility: 0
ev: "8"
free_strike: 5
intuition: 0
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 2
might: 2
name: High Elf Deathtouch
organization: Platoon
presence: 1
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.elves-high.statblock/high-elf-deathtouch
size: 1M
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# High Elf Deathtouch

---

<script type="application/json" class="sc-statblock-data">
{"id":"high-elf-deathtouch","name":"High Elf Deathtouch","ancestry":"Fey, High Elf, Humanoid","level":"2","role":"Platoon Artillery","roleKey":"artillery","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Heartpiercer","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; R \u003c 1 bleeding (save ends); I \u003c 1 frightened (save ends); P \u003c 1 restrained (save ends)","low":"7 damage","mid":"10 damage"}},"enhancements":[{"cost":"5 Malice","text":"The ability takes the Area keyword and loses the Strike keyword, its distance becomes a 3 cube within 10, and it targets each enemy in the area."}]},{"kind":"ability","action":"maneuver","name":"Kiss of Death","usage":"Maneuver","keywords":["Magic","Melee"],"distance":"Melee 1","target":"One willing ally","sections":[{"label":"Effect","text":"The target has a +5 bonus to speed and automatically obtains a tier 3 outcome on power rolls. They can still roll to determine if they score a critical hit. At the end of their next turn, the target immediately dies."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the deathtouch can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."}]}
</script>
