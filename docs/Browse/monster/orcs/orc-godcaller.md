---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "6"
free_strike: 3
intuition: 1
keywords:
    - Humanoid
    - Orc
level: 1
might: 1
name: Orc Godcaller
organization: Platoon
presence: 2
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-godcaller
size: 1M
speed: 6
stability: 0
stamina: "30"
type: statblock
---

# Orc Godcaller

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-godcaller","name":"Orc Godcaller","ancestry":"Humanoid, Orc","level":"1","role":"Platoon Support","roleKey":"support","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Power Chord","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike"],"distance":"Melee 1 or ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 sonic damage; P \u003c 2 weakened (save ends)","low":"5 sonic damage","mid":"7 sonic damage"}}},{"kind":"ability","action":"main","name":"Cadenza","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One ally","sections":[{"label":"Effect","text":"The target moves up to their speed and can use a main action."}],"enhancements":[{"cost":"3 Malice","text":"The godcaller targets a second ally."}]},{"kind":"ability","action":"maneuver","name":"Rallying Ostinato","cost":"2 Malice","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Self and three allies","sections":[{"label":"Effect","text":"Each target regains 15 Stamina and ignores difficult terrain until the end of the encounter."}]},{"kind":"passive","action":"passive","name":"Relentless","body":"If the godcaller is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the godcaller is reduced to 1 Stamina instead."}]}
</script></div>
