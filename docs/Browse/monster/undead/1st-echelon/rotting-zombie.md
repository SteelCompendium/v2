---
agility: -2
ev: 3 for four minions
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: -2
keywords:
    - Undead
    - Soulless
level: 1
might: 2
name: Rotting Zombie
organization: Minion
presence: -3
reason: -5
role: Brute
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/rotting-zombie
size: 1M
speed: 4
stability: 0
stamina: "5"
type: statblock
with_captain: +1 damage bonus to strikes
---

# Rotting Zombie

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rotting-zombie","name":"Rotting Zombie","ancestry":"Undead, Soulless","level":"1","role":"Minion Brute","roleKey":"brute","ev":"3 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"4"},{"l":"Stamina","v":"5"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-5"},{"l":"Intuition","k":"I","v":"-2"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Rotting Fist","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; M \u003c 2 prone if size 1, or slowed (save ends) otherwise","low":"2 damage","mid":"4 damage"}}},{"kind":"passive","action":"passive","name":"Death Grasp","body":"When the rotting zombie is reduced to 0 Stamina, their space is difficult terrain. The first time any enemy who has M \u003c 2 enters this space, they are slowed (save ends) and the effect ends."}]}
</script></div>
