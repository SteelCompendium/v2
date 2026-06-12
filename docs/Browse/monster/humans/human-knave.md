---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "8"
free_strike: 4
immunities:
    - Corruption 2
    - psychic 2
intuition: 0
keywords:
    - Human
    - Humanoid
level: 2
might: 2
name: Human Knave
organization: Platoon
presence: 0
reason: 1
role: Defender
scc: mcdm.monsters.v1/monster.humans.statblock/human-knave
size: 1M
speed: 5
stability: 0
stamina: "50"
type: statblock
---

# Human Knave

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"human-knave","name":"Human Knave","ancestry":"Human, Humanoid","level":"2","role":"Platoon Defender","roleKey":"defender","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 2, psychic 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Morningstar and Javelin","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; M \u003c 2 the target has a double bane on their next power roll","low":"6 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"The target is taunted (EoT)."}]},{"kind":"passive","action":"passive","name":"I'm Your Enemy","body":"Whenever an adjacent creature the knave has taunted deals damage to a creature other than the knave, the knave can make a free strike against them."},{"kind":"passive","action":"passive","name":"Overwhelm","body":"An enemy who starts their turn adjacent to the knave can't shift."},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The knave ignores concealment if it's granted by a supernatural effect."}]}
</script></div>
