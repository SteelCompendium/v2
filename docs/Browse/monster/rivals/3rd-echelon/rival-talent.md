---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "40"
free_strike: 8
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 8
might: 0
name: Rival Talent
organization: Elite
presence: 1
reason: 4
role: Hexer
scc: mcdm.monsters.v1/monster.rivals.3rd-echelon.statblock/rival-talent
size: 1M
speed: 5
stability: 2
stamina: "180"
type: statblock
---

# Rival Talent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-talent","name":"Rival Talent","ancestry":"Humanoid, Rival","level":"8","role":"Elite Hexer","roleKey":"hexer","ev":"40","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Control Synapses","cost":"Signature","usage":"Main action","keywords":["Psionic","Ranged","Strike","Telekinesis"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 psychic damage","low":"12 psychic damage","mid":"17 psychic damage"}},"enhancements":[{"cost":"3 Malice","text":"Each target shifts up to their speed and can make a free strike against one enemy of the talent's choice. The target can't be moved in a way that would harm them."}]},{"kind":"ability","action":"maneuver","name":"Disorientate","cost":"2 Malice","usage":"Maneuver","keywords":["Psionic","Ranged","Telepathy"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"8 psychic damage; R \u003c 4 dazed and slowed (save ends)","low":"8 psychic damage; R \u003c 2 dazed (save ends)","mid":"8 psychic damage; R \u003c 3 dazed and slowed (save ends)"}}},{"kind":"ability","action":"triggered","name":"Mind Requital","cost":"2 Malice","usage":"Triggered action","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature deals damage to the talent."},{"label":"Effect","text":"The talent halves the damage and shifts up to 2 squares. The triggering creature takes psychic damage equal to half the damage dealt."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the talent chooses one creature within their line of effect. Both the talent and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
