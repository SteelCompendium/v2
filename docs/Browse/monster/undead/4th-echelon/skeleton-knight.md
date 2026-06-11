---
agility: 5
ev: 12 for four minions
free_strike: 4
immunities:
    - Corruption 10
    - poison 10
intuition: 4
keywords:
    - Undead
    - Soulless
level: 10
might: 3
name: Skeleton Knight
organization: Minion
presence: -2
reason: -2
role: Defender
scc: mcdm.monsters.v1/monster.undead.4th-echelon.statblock/skeleton-knight
size: 1L
speed: 5
stability: 2
stamina: "17"
type: statblock
with_captain: Gain an edge on strikes
---

# Skeleton Knight

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"skeleton-knight","name":"Skeleton Knight","ancestry":"Undead, Soulless","level":"10","role":"Minion Defender","roleKey":"defender","ev":"12 for four minions","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"17"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 10, poison 10","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+5"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Four Swords Swing","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 5","tiers":{"high":"9 damage; the target can't shift (EoT)","low":"4 damage","mid":"7 damage"}}},{"kind":"passive","action":"passive","name":"Bitter Bones","body":"If the knight is reduced to 0 Stamina, their bones collapse to fill their space with an impassable barrier. Any enemy who comes adjacent to the barrier for the first time in a round or starts their turn there takes 5 damage."},{"kind":"passive","action":"passive","name":"More Swings","body":"Whenever the knight makes a free strike, they can make two free strikes instead."}]}
</script></div>
