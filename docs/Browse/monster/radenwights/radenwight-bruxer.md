---
agility: 1
ev: "6"
free_strike: 4
intuition: 0
keywords:
    - Humanoid
    - Radenwight
level: 1
might: 2
movement: Climb
name: Radenwight Bruxer
organization: Platoon
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-bruxer
size: 1L
speed: 5
stability: 2
stamina: "40"
type: statblock
---

# Radenwight Bruxer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-bruxer","name":"Radenwight Bruxer","ancestry":"Humanoid, Radenwight","level":"1","role":"Platoon Brute","roleKey":"brute","ev":"6","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Lockjaw","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; grabbed","low":"6 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"A target grabbed this way takes 2 damage at the start of each of the bruxer's turns."}]},{"kind":"ability","action":"main","name":"Flurry of Bites","cost":"3 Malice","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; A \u003c 2 bleeding (save ends)","low":"3 damage; A \u003c 0 bleeding (save ends)","mid":"5 damage; A \u003c 1 bleeding (save ends)"}}},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The bruxer makes a free strike against the target."}]},{"kind":"passive","action":"passive","name":"Lockdown","body":"Any enemy who shifts adjacent to the bruxer has that shift end. Additionally, any enemy adjacent to the bruxer can't shift."}]}
</script></div>
