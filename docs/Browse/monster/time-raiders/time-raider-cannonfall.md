---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
immunities:
    - Psychic 3
intuition: 2
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
name: Time Raider Cannonfall
organization: Platoon
presence: 0
reason: 2
role: Artillery
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-cannonfall
size: 1L
speed: 5
stability: 3
stamina: "40"
type: statblock
---

# Time Raider Cannonfall

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-cannonfall","name":"Time Raider Cannonfall","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Artillery","roleKey":"artillery","ev":"10","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Sunderbuss ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Area","Psionic","Ranged","Weapon"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"10 sonic damage; [prone](../../../condition/prone/); M \u003c 2 [slowed](../../../condition/slowed/) (save ends)","low":"4 sonic damage","mid":"7 sonic damage"}},"sections":[{"label":"Effect","text":"A layer of ground beneath the area that is 1 square deep is destroyed."}]},{"kind":"ability","action":"triggered","name":"Buss Buffe (1 [Malice](../../rule/monster/malice.md))","usage":"Free triggered action","keywords":["Area","Psionic"],"distance":"5 burst","target":"Self and each ally in the area","sections":[{"label":"Trigger","text":"A creature damages the cannonfall with a ranged or area ability."},{"label":"Effect","text":"The damage is halved for the cannonfall and each target also affected by the triggering ability."}]},{"kind":"passive","action":"passive","name":"Foresight Squared","body":"The cannonfall doesn't take a bane on strikes against creatures with concealment or cover."}]}
</script></div>
