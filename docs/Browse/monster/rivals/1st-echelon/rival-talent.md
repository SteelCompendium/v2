---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 2
might: 0
name: Rival Talent
organization: Elite
presence: 1
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.rivals.1st-echelon.statblock/rival-talent
size: 1M
speed: 5
stability: 2
stamina: "60"
type: statblock
---

# Rival Talent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-talent","name":"Rival Talent","ancestry":"Humanoid, Rival","level":"2","role":"Elite Hexer","roleKey":"hexer","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Reverberating Blast","cost":"Signature","usage":"Main action","keywords":["Psionic","Ranged","Strike","Telekinesis"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 psychic damage; push 3; M \u003c 2 prone","low":"7 psychic damage; M \u003c 0 prone","mid":"10 psychic damage; push 2; M \u003c 1 prone"}}},{"kind":"ability","action":"maneuver","name":"Muddle the Mind","cost":"2 Malice","usage":"Maneuver","keywords":["Psionic","Ranged","Telepathy"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"R \u003c 2 dazed and slowed (save ends)","low":"R \u003c 0 slowed (save ends)","mid":"R \u003c 1 dazed (save ends)"}}},{"kind":"ability","action":"triggered","name":"Precognitive Shift","cost":"1 Malice","usage":"Triggered action","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature deals damage to the talent."},{"label":"Effect","text":"The talent halves the damage and shifts up to 2 squares."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the talent chooses one creature within their line of effect. Both the talent and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
