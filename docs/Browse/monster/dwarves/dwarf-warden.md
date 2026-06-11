---
agility: 0
ev: "8"
free_strike: 5
intuition: 1
keywords:
    - Dwarf
    - Humanoid
level: 2
might: 2
name: Dwarf Warden
organization: Platoon
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-warden
size: 1M
speed: 5
stability: 3
stamina: "59"
type: statblock
---

# Dwarf Warden

---

<script type="application/json" class="sc-statblock-data">
{"id":"dwarf-warden","name":"Dwarf Warden","ancestry":"Dwarf, Humanoid","level":"2","role":"Platoon Brute","roleKey":"brute","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"59"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Concussive Maul","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; push 5; M \u003c 2 restrained (save ends)","low":"7 damage; push 1","mid":"10 damage; push 3"}},"sections":[{"label":"Effect","text":"A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}]},{"kind":"ability","action":"main","name":"Concussive Shockwave","cost":"5 Malice","usage":"Main action","keywords":["Area","Weapon"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"11 damage; push 2; A \u003c 2 slowed (save ends)","low":"5 damage; push 2; A \u003c 0 slowed (save ends)","mid":"8 damage; push 2; A \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}]},{"kind":"passive","action":"passive","name":"Escort the Prisoners","body":"Whenever the warden moves, they can carry an adjacent restrained enemy as if the enemy were grabbed by them."}]}
</script>
