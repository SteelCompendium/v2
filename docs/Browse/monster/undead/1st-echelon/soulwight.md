---
agility: 1
ev: "3"
free_strike: 1
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
level: 1
might: 2
name: Soulwight
organization: Horde
presence: 1
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/soulwight
size: 1M
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Soulwight

---

<script type="application/json" class="sc-statblock-data">
{"id":"soulwight","name":"Soulwight","ancestry":"Undead","level":"1","role":"Horde Hexer","roleKey":"hexer","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Soulstealer Longsword","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 corruption damage; M \u003c 2 slowed and weakened (save ends)","low":"3 corruption damage","mid":"4 corruption damage; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"The target appears to rapidly age each time they take damage from this ability. The target regains their former appearance when the soulwight is destroyed."}]},{"kind":"ability","action":"maneuver","name":"Stolen Vitality","cost":"3 Malice","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"One ally","sections":[{"label":"Effect","text":"The target regains 10 Stamina. The soulwight can't use this maneuver again until after they strike a creature with their Soulstealer Longsword."}]},{"kind":"passive","action":"passive","name":"Arise","body":"The first time the soulwight is reduced to 0 Stamina by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 1 Stamina and fall prone."}]}
</script>
