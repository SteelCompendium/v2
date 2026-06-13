---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "32"
free_strike: 7
intuition: 2
keywords:
    - Abyssal
    - Demon
level: 6
might: 4
name: Lumbering Egress
organization: Leader
presence: 2
reason: 1
scc: mcdm.monsters.v1/monster.demons.2nd-echelon.statblock/lumbering-egress
size: "3"
speed: 6
stability: 3
stamina: "180"
type: statblock
weaknesses:
    - Holy 5
---

# Lumbering Egress

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lumbering-egress","name":"Lumbering Egress","ancestry":"Abyssal, Demon","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Ensnarer Cannon","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 corruption damage; A \u003c 4 [restrained](../../../../condition/restrained/) (save ends)","low":"11 corruption damage; A \u003c 2 [restrained](../../../../condition/restrained/) (save ends)","mid":"16 corruption damage; A \u003c 3 [restrained](../../../../condition/restrained/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"Two ensnarers appear in unoccupied spaces [adjacent](../../../../rule/combat/adjacent/) to each target. On a tier 3 outcome, four ensnarers appear."}]},{"kind":"ability","action":"maneuver","name":"Demonic Egress (2 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Special","sections":[{"label":"Effect","text":"Four level 1 demon [minions](../../../../rule/organization/minion/) (most commonly ensnarers, frenzieds, and pitlings) burst forth from the egress and appear in unoccupied spaces in the area."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"Four level 4 demon [minions](../../../../rule/organization/minion/) (most commonly orliq, grulqins, and wobalas) appear instead."}]},{"kind":"ability","action":"triggered","name":"Abyssal Protectors (2 [Malice](../../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Area","Magic"],"distance":"5 burst","target":"Special","sections":[{"label":"Trigger","text":"The last ally [minion](../../../../rule/organization/minion/) on the encounter map dies, or the egress is reduced below 25 [Stamina](../../../../rule/health/stamina/)."},{"label":"Effect","text":"Eight ensnarers appear anywhere in the area."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the egress can take 10 damage to end one effect on them that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Frenzied Deluge","cost":"Villain Action 1","keywords":["Ranged"],"distance":"Ranged 10","target":"Three enemies","powerRoll":{"formula":"+ 4","tiers":{"high":"15 corruption damage; two frenzieds appear in unoccupied spaces [adjacent](../../../../rule/combat/adjacent/) to each target","low":"7 corruption damage","mid":"12 corruption damage"}}},{"kind":"villain","action":"villain","name":"Fold Space","cost":"Villain Action 2","keywords":["Ranged"],"distance":"Ranged 20","target":"Self","sections":[{"label":"Effect","text":"The egress folds into their own portal and [teleports](../../../../movement/teleport/) to an unoccupied space within distance. Four level 4 demon [minions](../../../../rule/organization/minion/) (most commonly orliq, grulqins, and wobalas) appear in squares in the egress's former space."}]},{"kind":"villain","action":"villain","name":"Blood of the Abyss","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"10 x 3 line within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 corruption damage; R \u003c 4 [weakened](../../../../condition/weakened/) (save ends)","low":"6 corruption damage; R \u003c 2 [weakened](../../../../condition/weakened/) (save ends)","mid":"11 corruption damage; R \u003c 3 [weakened](../../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"The egress recalls and instantly destroys any [minion](../../../../rule/organization/minion/) allies on the encounter map. A torrent of churned-up minion bodies, blood, and ichor erupts from the egress, dealing an extra 1 damage for each minion destroyed this way."}]}]}
</script></div>
