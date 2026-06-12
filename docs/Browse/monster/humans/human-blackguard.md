---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "12"
free_strike: 4
immunities:
    - Corruption 2
    - psychic 2
intuition: 0
keywords:
    - Human
    - Humanoid
level: 1
might: 3
name: Human Blackguard
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.humans.statblock/human-blackguard
size: 1M
speed: 5
stability: 2
stamina: "80"
type: statblock
---

# Human Blackguard

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"human-blackguard","name":"Human Blackguard","ancestry":"Human, Humanoid","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 2, psychic 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Zweihander Swing","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"8 damage; M \u003c 3 slowed (save ends)","low":"3 damage; M \u003c 1 slowed (save ends)","mid":"6 damage; M \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"One ally within 10 squares can make a free strike."}],"enhancements":[{"cost":"1 Malice","text":"One ally within 10 squares can use their signature ability instead."}]},{"kind":"ability","action":"maneuver","name":"You!","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"One enemy","sections":[{"label":"Effect","text":"The target is marked until the start of the blackguard's next turn. The blackguard and each of their allies gain an edge on abilities used against targets marked by the blackguard."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the blackguard can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The blackguard ignores concealment if it's granted by a supernatural effect."},{"kind":"ability","action":"triggered","name":"Parry!","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"Self or one ally","sections":[{"label":"Trigger","text":"A creature makes a strike against the blackguard or an ally adjacent to them."},{"label":"Effect","text":"The damage is halved."}]},{"kind":"villain","action":"villain","name":"Advance!","cost":"Villain Action 1","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The blackguard shifts up to their speed. During or after this movement, they can use their Zweihander Swing twice."}]},{"kind":"villain","action":"villain","name":"Back!","cost":"Villain Action 2","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The blackguard slides each target up to 5 squares."}]},{"kind":"villain","action":"villain","name":"I Can Throw My Blade and So Should You!","cost":"Villain Action 3","keywords":["Area","Magic","Ranged","Weapon"],"distance":"3 cube within 5","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The blackguard uses their Zweihander Swing against each target. Each ally within 5 squares of the area can then make a free strike against a target (one target per ally)."}]}]}
</script></div>
