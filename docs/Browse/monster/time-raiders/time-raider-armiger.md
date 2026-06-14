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
name: Time Raider Armiger
organization: Platoon
presence: 0
reason: 2
role: Defender
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-armiger
size: 1M
speed: 5
stability: 0
stamina: "60"
type: statblock
---

# Time Raider Armiger

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-armiger","name":"Time Raider Armiger","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Defender","roleKey":"defender","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Serrated Saber","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; R \u003c 2 [weakened](../../../condition/weakened/) (save ends)","low":"7 damage","mid":"10 damage"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"A creature [weakened](../../../condition/weakened/) this way is also [bleeding](../../../condition/bleeding/)."}]},{"kind":"ability","action":"triggered","name":"Shared Sickness","usage":"Triggered action","keywords":["Psionic","Ranged"],"distance":"Ranged 20","target":"The triggering creature","powerRoll":{"formula":"+ 2","tiers":{"high":"9 psychic damage; R \u003c 2 5 poison damage","low":"4 psychic damage; R \u003c 0 5 poison damage","mid":"6 psychic damage; R \u003c 1 5 poison damage"}},"sections":[{"label":"Trigger","text":"A creature deals damage to any ally of the armiger who the armiger has [line of effect](../../../rule/combat/line-of-effect/) to."}]},{"kind":"passive","action":"passive","name":"Foresight","body":"The armiger doesn't take a bane on strikes against creatures with concealment."},{"kind":"passive","action":"passive","name":"Kuran'zoi Heraldry","body":"Any time raider who starts their turn with [line of effect](../../../rule/combat/line-of-effect/) to the armiger can end one condition affecting the."}]}
</script></div>
