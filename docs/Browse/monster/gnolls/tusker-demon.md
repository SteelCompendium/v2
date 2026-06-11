---
agility: -1
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Abyssal
    - Demon
    - Gnoll
level: 2
might: 2
name: Tusker Demon
organization: Elite
presence: -1
reason: -3
role: Brute
scc: mcdm.monsters.v1/monster.gnolls.statblock/tusker-demon
size: "3"
speed: 7
stability: 3
stamina: "100"
type: statblock
---

# Tusker Demon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"tusker-demon","name":"Tusker Demon","ancestry":"Abyssal, Demon, Gnoll","level":"2","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Gore","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; push 3, prone","low":"7 damage; push 1","mid":"11 damage; push 2"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the Charge main action, it deals an extra 4 damage."}]},{"kind":"ability","action":"triggered","name":"Vengeful Tusker","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 7","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance deals damage to the tusker."},{"label":"Effect","text":"The tusker demon uses the Charge main action and Gore against the target."}]},{"kind":"passive","action":"passive","name":"Trample","body":"The tusker demon can move through enemies' spaces at their usual speed. When the tusker enters a creature's space for the first time on a turn, that creature takes 5 damage. The tusker demon can end their turn in a prone size 1 creature's space, preventing the creature from standing up."},{"kind":"passive","action":"passive","name":"Lethe","body":"While the tusker demon is winded, they gain an edge on strikes, and any strike made against them gains an edge."}]}
</script></div>
