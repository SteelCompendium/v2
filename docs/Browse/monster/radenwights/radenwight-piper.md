---
agility: 0
ev: "6"
free_strike: 3
intuition: 2
keywords:
    - Humanoid
    - Radenwight
level: 1
might: 0
movement: Climb
name: Radenwight Piper
organization: Platoon
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-piper
size: 1S
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Radenwight Piper

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-piper","name":"Radenwight Piper","ancestry":"Humanoid, Radenwight","level":"1","role":"Platoon Support","roleKey":"support","ev":"6","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Piercing Trill","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike"],"distance":"Melee 1 or ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 sonic damage; push 4","low":"5 sonic damage; push 1","mid":"7 sonic damage; push 3"}},"sections":[{"label":"Effect","text":"The piper or one ally within distance regains Stamina equal to the damage dealt."}]},{"kind":"ability","action":"maneuver","name":"Vivace Vivace!","usage":"Maneuver","keywords":["Area","Magic"],"distance":"3 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target who has used their Ready Rodent ability this round regains the use of their triggered action."}],"enhancements":[{"cost":"2 Malice","text":"The area increases to a 6 burst."}]},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The piper makes a free strike against the target."}]},{"kind":"passive","action":"passive","name":"Musical Suggestion","body":"At the end of the piper's turn, they can slide one adjacent creature up to 2 squares, ignoring stability."}]}
</script></div>
