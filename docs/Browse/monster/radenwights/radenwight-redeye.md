---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: 3 for 4 minions
free_strike: 2
intuition: 0
keywords:
    - Humanoid
    - Radenwight
level: 1
might: 1
movement: Climb
name: Radenwight Redeye
organization: Minion
presence: 0
reason: -1
role: Artillery
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-redeye
size: 1S
speed: 5
stability: 0
stamina: "3"
type: statblock
with_captain: Gain an edge on strikes
---

# Radenwight Redeye

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-redeye","name":"Radenwight Redeye","ancestry":"Humanoid, Radenwight","level":"1","role":"Minion Artillery","roleKey":"artillery","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"3"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Eyes-On-Me-Shot","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"2 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"One ally of the redeye within 2 squares of the target shifts up to 2 squares."}]},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The redeye makes a free strike against the target."}]}]}
</script></div>
