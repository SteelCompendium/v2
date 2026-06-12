---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: '-'
free_strike: 3
intuition: -1
keywords:
    - Undead
    - Soulless
level: 1
might: 2
name: Undead Servitor
organization: Retainer
presence: 0
reason: -3
role: Brute
scc: mcdm.monsters.v1/retainer.statblock/undead-servitor
size: 1M
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# Undead Servitor

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"undead-servitor","name":"Undead Servitor","ancestry":"Undead, Soulless","level":"1","role":"Retainer Brute","roleKey":"brute","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Lurching Swipe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"10 damage","low":"4 damage","mid":"7 damage"}}},{"kind":"passive","action":"passive","name":"Arise","body":"The first time in an encounter that the servitor is reduced to 0 Stamina by damage that isn't fire damage or holy damage and their body isn't destroyed, they regain half their Stamina maximum and fall prone."},{"kind":"ability","action":"main","name":"Grab and Bite","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage; M \u003c STRONG grabbed","low":"7 damage; M \u003c WEAK grabbed","mid":"11 damage; M \u003c AVERAGE grabbed"}}},{"kind":"ability","action":"maneuver","name":"Death to Death","cost":"Encounter","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"17 corruption damage; P \u003c STRONG weakened (save ends)","low":"8 corruption damage; P \u003c WEAK weakened (save ends)","mid":"13 corruption damage; P \u003c AVERAGE weakened (save ends)"}},"sections":[{"label":"Effect","text":"Before making the strike, the servitor can teleport up to 10 squares to a space containing a dead creature, then burst out of the creature's body."}]},{"kind":"ability","action":"triggered","name":"Death Miasma","cost":"Encounter","usage":"Free triggered action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 corruption damage","low":"6 corruption damage","mid":"10 corruption damage"}},"sections":[{"label":"Trigger","text":"The servitor is reduced to 0 Stamina."},{"label":"Effect","text":"The servitor explodes."}]}]}
</script></div>
