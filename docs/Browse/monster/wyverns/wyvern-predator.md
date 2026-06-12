---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "24"
free_strike: 6
immunities:
    - Acid 5
intuition: 1
keywords:
    - Beast
    - Wyvern
level: 4
might: 3
movement: Fly
name: Wyvern Predator
organization: Elite
presence: 0
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.wyverns.statblock/wyvern-predator
size: "3"
speed: 7
stability: 3
stamina: "140"
type: statblock
---

# Wyvern Predator

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wyvern-predator","name":"Wyvern Predator","ancestry":"Beast, Wyvern","level":"4","role":"Elite Brute","roleKey":"brute","ev":"24","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Acid 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Sedating Stinger","cost":"Signature","usage":"Main action","keywords":["Magic","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; M \u003c 3 slowed (save ends)","low":"9 damage","mid":"14 damage; M \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"If a target slowed this way is already slowed, they are instead restrained (save ends)."}]},{"kind":"ability","action":"main","name":"Tail Sweep","usage":"Main action","keywords":["Area","Weapon"],"distance":"6 x 3 line within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"14 damage; A \u003c 3 3 acid damage","low":"6 damage; A \u003c 1 3 acid damage","mid":"11 damage; A \u003c 2 3 acid damage"}},"enhancements":[{"cost":"5 Malice","text":"The predator uses this ability a second time, either recreating the same line or creating a new line."}]},{"kind":"ability","action":"maneuver","name":"Grasping Jaws","cost":"2 Malice","usage":"Maneuver","keywords":["Magic","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; A \u003c 3 grabbed and the target takes a bane on the Escape Grab maneuver","low":"9 damage; A \u003c 1 grabbed","mid":"14 damage; A \u003c 2 grabbed"}}},{"kind":"ability","action":"triggered","name":"Deterring Sting","cost":"1 Malice","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 3","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the predator with a melee ability."},{"label":"Effect","text":"The predator uses Sedating Stinger against the target, then shifts up to 3 squares."}]},{"kind":"passive","action":"passive","name":"Stubborn Rage","body":"While winded or within 10 squares of another wyvern, the predator can't be made dazed or frightened."},{"kind":"passive","action":"passive","name":"Tenacious Hunter","body":"Any creature affected by a condition imposed by a wyvern can't be hidden from the predator."}]}
</script></div>
