---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Abyssal
    - Demon
level: 1
might: 0
name: Ruinant
organization: Horde
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.demons.1st-echelon.statblock/ruinant
size: 1M
speed: 6
stability: 0
stamina: "15"
type: statblock
weaknesses:
    - Holy 3
---

# Ruinant

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ruinant","name":"Ruinant","ancestry":"Abyssal, Demon","level":"1","role":"Horde Harrier","roleKey":"harrier","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"Holy 3","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Bloodletting Claws","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; M \u003c 2 [bleeding](../../../../condition/bleeding/) (save ends)","low":"3 damage","mid":"4 damage"}}},{"kind":"ability","action":"maneuver","name":"Salt Wounds (3 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Three creatures","powerRoll":{"formula":"+ 2","tiers":{"high":"3 corruption damage","low":"1 corruption damage","mid":"2 corruption damage"}},"sections":[{"label":"Special","text":"Each target must be at less than full [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"passive","action":"passive","name":"Lethe","body":"While the ruinant is [winded](../../../../rule/health/winded/), they gain an [edge](../../../../rule/dice/edge/) on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 2 squares of the ruinant can't be hidden from them."}]}
</script></div>
