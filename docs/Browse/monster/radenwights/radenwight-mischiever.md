---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: 3 for 4 minions
free_strike: 2
intuition: 1
keywords:
    - Humanoid
    - Radenwight
level: 1
might: -1
movement: Climb
name: Radenwight Mischiever
organization: Minion
presence: 0
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-mischiever
size: 1S
speed: 7
stability: 0
stamina: "4"
type: statblock
with_captain: +1 damage bonus to strikes
---

# Radenwight Mischiever

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-mischiever","name":"Radenwight Mischiever","ancestry":"Humanoid, Radenwight","level":"1","role":"Minion Ambusher","roleKey":"ambusher","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"4"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Dagger Dance","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"2 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"If the mischiever is hidden when they use this ability, they can target two creatures."}]},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The mischiever makes a free strike against the target."}]}]}
</script></div>
