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
might: 0
movement: Climb
name: Shadow Elf Duskcaller
organization: Platoon
presence: 1
reason: 3
role: Controller
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-duskcaller
size: 1M
speed: 5
stability: 0
stamina: "60"
type: statblock
---

# Shadow Elf Duskcaller

---

<script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-duskcaller","name":"Shadow Elf Duskcaller","ancestry":"Fey, Humanoid, Shadow Elf","level":"5","role":"Platoon Controller","roleKey":"controller","ev":"14","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Night Knife","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"16 damage","low":"9 damage","mid":"13 damage"}},"sections":[{"label":"Effect","text":"If the duskcaller has concealment, they can target one additional creature or object."}]},{"kind":"ability","action":"maneuver","name":"The Lay of Cor'thoroth","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"2 cube within 3","target":"Special","sections":[{"label":"Effect","text":"Until the start of the duskcaller's next turn, the area is filled with darkness."}],"enhancements":[{"cost":"2 Malice","text":"The size of the cube increases by 3."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The duskcaller ignores concealment created by darkness. While the duskcaller is in direct sunlight, they have damage weakness 3. While the duskcaller has concealment, they have damage immunity 3."}]}
</script>
