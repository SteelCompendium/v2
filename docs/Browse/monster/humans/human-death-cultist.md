---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
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
might: 0
name: Human Death Cultist
organization: Platoon
presence: 2
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.humans.statblock/human-death-cultist
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# Human Death Cultist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"human-death-cultist","name":"Human Death Cultist","ancestry":"Human, Humanoid","level":"2","role":"Platoon Support","roleKey":"support","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 2, psychic 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Death Scythe","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 corruption damage; I \u003c 2 [weakened](../../../condition/weakened/) (save ends)","low":"6 corruption damage","mid":"9 corruption damage"}},"enhancements":[{"cost":"2 [Malice](../../rule/monster/malice.md)","text":"The death cultist regains [Stamina](../../../rule/health/stamina/) equal to half the damage dealt."}]},{"kind":"ability","action":"maneuver","name":"Rise, My Minions (1 [Malice](../../rule/monster/malice.md) per [minion](../../rule/organization/minion.md))","usage":"Maneuver","keywords":["Area"],"distance":"5 burst","target":"Each dead [minion](../../../rule/organization/minion/) in the area","sections":[{"label":"Effect","text":"Each target who died during this encounter revives with full [Stamina](../../../rule/health/stamina/). They immediately die at the end of the encounter or if the death cultist is killed. A target can be revived multiple times by this ability."}]},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The death cultist ignores concealment if it's granted by a supernatural effect."}]}
</script></div>
