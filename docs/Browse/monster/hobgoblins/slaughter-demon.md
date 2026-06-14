---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "24"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Abyssal
    - Demon
    - Hobgoblin
level: 4
might: 3
movement: Burrow
name: Slaughter Demon
organization: Elite
presence: 0
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/slaughter-demon
size: "3"
speed: 7
stability: 3
stamina: "140"
type: statblock
---

# Slaughter Demon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"slaughter-demon","name":"Slaughter Demon","ancestry":"Abyssal, Demon, Hobgoblin","level":"4","role":"Elite Brute","roleKey":"brute","ev":"24","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Steely Skewer","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; A \u003c 3 [bleeding](../../../condition/bleeding/) and [restrained](../../../condition/restrained/) (save ends)","low":"9 damage","mid":"14 damage; A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Effect","text":"A creature [restrained](../../../condition/restrained/) this way moves with the slaughter demon. The slaughter demon can have up to six creatures or objects [restrained](../../../condition/restrained/) at once."}]},{"kind":"ability","action":"main","name":"Tail Stinger","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 5","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"20 poison damage; M \u003c 3 [weakened](../../../condition/weakened/) (save ends)","low":"10 poison damage; M \u003c 1 [weakened](../../../condition/weakened/) (save ends)","mid":"16 poison damage; M \u003c 2 [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"A target [weakened](../../../condition/weakened/) this way also has damage weakness 3."}]},{"kind":"passive","action":"passive","name":"Drag Below","body":"The slaughter demon can make a [free strike](../../../feature/common/main-actions/free-strike/) as part of using the Dig maneuver. If the target of the [free strike](../../../feature/common/main-actions/free-strike/) has M \u003c 2, they are [grabbed](../../../condition/grabbed/) and take a bane on the Escape Grab maneuver."},{"kind":"ability","action":"triggered","name":"Devour Soul","usage":"Triggered action","keywords":["Area","Magic"],"distance":"5 burst","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance who has a soul dies."},{"label":"Effect","text":"The target can't be brought back to life. Until the end of the encounter, the slaughter demon gains an edge on power rolls."}]},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 2 squares of the slaughter demon can't be hidden from them."},{"kind":"passive","action":"passive","name":"Lethe","body":"While the slaughter demon is [winded](../../../rule/health/winded/), they gain an edge on strikes, and any strike made against them gains an edge."}]}
</script></div>
