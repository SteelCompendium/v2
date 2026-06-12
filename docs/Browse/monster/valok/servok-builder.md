---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -2
ev: "44"
free_strike: 10
intuition: -1
keywords:
    - Construct
    - Servok
    - Soulless
    - Valok
level: 9
might: 4
name: Servok Builder
organization: Elite
presence: -5
reason: -4
role: Brute
scc: mcdm.monsters.v1/monster.valok.statblock/servok-builder
size: "3"
speed: 5
stability: 8
stamina: "240"
type: statblock
---

# Servok Builder

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"servok-builder","name":"Servok Builder","ancestry":"Construct, Servok, Soulless, Valok","level":"9","role":"Elite Brute","roleKey":"brute","ev":"44","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"8"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-5"}],"features":[{"kind":"ability","action":"main","name":"Wrecking Ball","cost":"Signature","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 5","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"8 damage","low":"15 damage; push 5, prone","mid":"12 damage; push 3"}},"sections":[{"label":"Effect","text":"Each target must make either an Agility test or an **Intuition test**."}]},{"kind":"ability","action":"main","name":"Construction Arm","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"28 damage; grabbed; M \u003c 4 vertical push 5","low":"16 damage","mid":"23 damage; grabbed"}}},{"kind":"ability","action":"main","name":"Lay the Foundation","cost":"3 Malice","usage":"Main action","keywords":["Area"],"distance":"6 x 3 line within 1","target":"Special","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"Restrained (EoT)","mid":"Slowed (EoT)"}},"sections":[{"label":"Effect","text":"The area is covered in wet concrete and is difficult terrain. An enemy who starts their turn in the concrete makes a **Might test**."}]},{"kind":"ability","action":"maneuver","name":"Build Wall","usage":"Maneuver","keywords":["Area","Ranged"],"distance":"6 wall within 3","target":"Special","sections":[{"label":"Effect","text":"The builder creates a concrete wall. They can also remove any unoccupied squares of wet concrete within 3 squares of them, creating two additional squares of wall for each square of concrete removed."}]},{"kind":"ability","action":"triggered","name":"Sputter","cost":"1 Malice","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 3","target":"The triggering creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"A \u003c 4 restrained (save ends)","low":"A \u003c 2 restrained (save ends)","mid":"A \u003c 3 restrained (save ends)"}},"sections":[{"label":"Trigger","text":"A creature or object within distance deals damage to the builder."},{"label":"Effect","text":"While a creature is restrained this way, or if the target is an object, the target and their space are encased in wet concrete. A creature no longer restrained leaves squares of wet concrete behind."}]},{"kind":"passive","action":"passive","name":"Servok Siege Machine","body":"The builder ignores difficult terrain, and their abilities deal an extra 15 damage to objects."},{"kind":"passive","action":"passive","name":"Crafted to Perfection","body":"The builder's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Valiar Might","body":"While the builder isn't bleeding, weakened, or winded, any power roll made against them is automatically a tier 1 outcome. A critical hit still grants its additional main action."}]}
</script></div>
