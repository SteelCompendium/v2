---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "20"
free_strike: 5
intuition: 0
keywords:
    - Animal
    - Orc
level: 3
might: 2
name: Scyza
organization: Elite
presence: -1
reason: -4
role: Mount
scc: mcdm.monsters.v1/monster.orcs.statblock/scyza
size: "4"
speed: 6
stability: 3
stamina: "100"
type: statblock
---

# Scyza

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"scyza","name":"Scyza","ancestry":"Animal, Orc","level":"3","role":"Elite Mount","roleKey":"mount","ev":"20","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Clawed Kick","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; prone","low":"7 damage","mid":"11 damage; prone"}},"sections":[{"label":"Effect","text":"The scyza roars, and if the target has I \u003c 2, they are frightened (save ends)."}]},{"kind":"ability","action":"main","name":"Whiptail","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; A \u003c 2 bleeding (save ends)","low":"8 damage","mid":"13 damage; prone"}},"sections":[{"label":"Effect","text":"Against a target on top of the scyza, this ability gains an edge, and the target is pushed into an unoccupied adjacent square and knocked prone."}]},{"kind":"ability","action":"main","name":"Crestfall","cost":"2 Malice","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 2","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage, 3 sonic damage; R \u003c 2 dazed (save ends)","low":"4 damage, 1 sonic damage; R \u003c 0 dazed (save ends)","mid":"7 damage, 2 sonic damage; R \u003c 1 dazed (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Sandstorm","cost":"3 Malice","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Special","powerRoll":{"formula":"","tiers":{"high":"4 damage","low":"10 damage; prone; slowed (EoT)","mid":"7 damage; slowed (EoT)"}},"sections":[{"label":"Effect","text":"The scyza kicks up a sandstorm, granting concealment to themself and any ally in the area until the end of the scyza's next turn. Each enemy in the area makes an Intuition test."}]},{"kind":"ability","action":"triggered","name":"Brace and Break","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The scyza or an ally riding the scyza is targeted by an ability."},{"label":"Effect","text":"Any damage dealt by the triggering ability is halved. If the creature or object who used the ability is within 3 squares of the scyza, the scyza can make a free strike against them."}]},{"kind":"passive","action":"passive","name":"Terrible Beast","body":"The scyza deals an extra 6 damage with abilities used against objects."},{"kind":"passive","action":"passive","name":"War Harness","body":"While riding the scyza, three size 1 allies can occupy the same space."}]}
</script></div>
