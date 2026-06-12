---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 2
intuition: 0
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 1
might: -1
name: High Elf Weatherwise
organization: Retainer
presence: 1
reason: 2
role: Controller
scc: mcdm.monsters.v1/retainer.statblock/high-elf-weatherwise
size: 1M
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# High Elf Weatherwise

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"high-elf-weatherwise","name":"High Elf Weatherwise","ancestry":"Fey, High Elf, Humanoid","level":"1","role":"Retainer Controller","roleKey":"controller","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Summer's Bolt","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 fire damage","low":"3 fire damage","mid":"5 fire damage"}},"sections":[{"label":"Effect","text":"If the weatherwise targets their mentor, the mentor ignores the damage and instead gains temporary Stamina equal to the damage dealt."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the weatherwise can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."},{"kind":"ability","action":"main","name":"Winter's Breath","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"8 cold damage; push 5","low":"3 cold damage; push 2","mid":"5 cold damage; push 3"}},"sections":[{"label":"Effect","text":"The weatherwise can teleport up to 5 squares before or after using this ability."}]},{"kind":"ability","action":"main","name":"Spring's Rebirth","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target can spend a Recovery, and can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn."}]},{"kind":"ability","action":"main","name":"Autumn's Decay","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 corruption damage; P \u003c STRONG prone and can't stand (save ends)","low":"6 corruption damage; P \u003c WEAK prone and can't stand (save ends)","mid":"10 corruption damage; P \u003c AVERAGE prone and can't stand (save ends)"}}}]}
</script></div>
