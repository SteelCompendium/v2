---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: 6 for four minions
free_strike: 3
immunities:
    - Corruption 4
    - poison 4
intuition: 0
keywords:
    - Undead
    - Soulless
level: 4
might: -2
name: Hollowbone Launcher
organization: Minion
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/hollowbone-launcher
size: 1M
speed: 5
stability: 0
stamina: "7"
type: statblock
with_captain: +5 bonus to ranged distance
---

# Hollowbone Launcher

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hollowbone-launcher","name":"Hollowbone Launcher","ancestry":"Undead, Soulless","level":"4","role":"Minion Artillery","roleKey":"artillery","ev":"6 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"7"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Hollowbone Slug","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"7 damage; M \u003c 3 bleeding (save ends)","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"Each creature adjacent to the target takes 2 damage."}]},{"kind":"passive","action":"passive","name":"Brittle Revenge","body":"The hollowbone launcher explodes when they are reduced to 0 Stamina, dealing 2 damage to each adjacent creature."}]}
</script></div>
