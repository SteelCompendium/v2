---
agility: 0
ev: "7"
free_strike: 3
intuition: 3
keywords:
    - Abyssal
    - Demon
level: 5
might: 0
movement: Fly
name: Bale Eye
organization: Horde
presence: 3
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.demons.2nd-echelon.statblock/bale-eye
size: "4"
speed: 6
stability: 2
stamina: "30"
type: statblock
weaknesses:
    - Holy 5
---

# Bale Eye

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"bale-eye","name":"Bale Eye","ancestry":"Abyssal, Demon","level":"5","role":"Horde Hexer","roleKey":"hexer","ev":"7","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Wilting Visions","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"9 psychic damage","low":"6 psychic damage","mid":"8 psychic damage"}},"sections":[{"label":"Effect","text":"The target has corruption weakness 5 (EoT)."}],"enhancements":[{"cost":"2 Malice","text":"If the target has I \u003c 2, they have corruption weakness 5 (save ends)."}]},{"kind":"ability","action":"main","name":"Demonwarp Tears","cost":"5 Malice","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"6 psychic damage; A \u003c 3 the target is warped (save ends)","low":"3 psychic damage; A \u003c 1 the target is warped (save ends)","mid":"5 psychic damage; A \u003c 2 the target is warped (save ends)"}},"sections":[{"label":"Special","text":"The bale eye must create the cube beneath themself."},{"label":"Effect","text":"While warped, a creature has a double bane on power rolls using any characteristic higher than 0, and has a double edge on power rolls using any characteristic lower than 0."}]},{"kind":"passive","action":"passive","name":"Lethe","body":"While the bale eye is winded, they gain an edge on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 5 squares of the bale eye can't be hidden from them."}]}
</script></div>
