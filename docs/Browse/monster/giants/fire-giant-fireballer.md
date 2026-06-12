---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: 11 for four minions
free_strike: 3
immunities:
    - Fire 9
intuition: 2
keywords:
    - Fire Giant
    - Giant
level: 9
might: 4
name: Fire Giant Fireballer
organization: Minion
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.giants.statblock/fire-giant-fireballer
size: "4"
speed: 7
stability: 5
stamina: "13"
type: statblock
with_captain: +3 bonus to speed
---

# Fire Giant Fireballer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"fire-giant-fireballer","name":"Fire Giant Fireballer","ancestry":"Fire Giant, Giant","level":"9","role":"Minion Harrier","roleKey":"harrier","ev":"11 for four minions","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"13"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Fire 9","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Blazing Leap","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"6 fire damage; [push](../../../movement/forced-movement/) 2","low":"2 fire damage","mid":"5 fire damage; [push](../../../movement/forced-movement/) 1"}},"sections":[{"label":"Effect","text":"The fireballer can jump up to 4 squares before using this ability."}]},{"kind":"passive","action":"passive","name":"Searing Skin","body":"Whenever an [adjacent](../../../rule/combat/adjacent/) enemy [grabs](../../../condition/grabbed/) the fireballer or uses a melee ability against them, that enemy takes 5 fire damage."}]}
</script></div>
