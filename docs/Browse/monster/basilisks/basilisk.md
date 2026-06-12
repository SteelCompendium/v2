---
printing: "1.01"
printing_book: "Bestiary"
agility: 0
ev: "12"
free_strike: 5
immunities:
    - Poison 4
intuition: -1
keywords:
    - Basilisk
    - Beast
level: 1
might: 2
name: Basilisk
organization: Elite
presence: -1
reason: -3
role: Brute
scc: mcdm.monsters.v1/monster.basilisks.statblock/basilisk
size: "2"
speed: 8
stability: 2
stamina: "80"
type: statblock
---

# Basilisk

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"basilisk","name":"Basilisk","ancestry":"Basilisk, Beast","level":"1","role":"Elite Brute","roleKey":"brute","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Poison 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Noxious Bite","cost":"Signature","usage":"Main Action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 poison damage","low":"7 poison damage","mid":"10 poison damage"}},"sections":[{"label":"Effect","text":"This ability gains an edge against targets the basilisk has previously dealt poison damage to."}]},{"kind":"ability","action":"maneuver","name":"Petrifying Eye Beams","usage":"Maneuver","keywords":["Area","Magic"],"distance":"5 x 2 line within 1","target":"Special","powerRoll":{"formula":"+ 2","tiers":{"high":"Slowed (save ends); or if M \u003c 2 restrained (save ends)","low":"M \u003c 0 restrained (save ends)","mid":"M \u003c 1 restrained (save ends)"}},"sections":[{"label":"Special","text":"The area extends from both the basilisk’s eyes, and this ability targets the first creature without cover on either side of the area."},{"label":"Effect","text":"If a target is already slowed, the potency increases by 1 for that target. A target restrained this way magically begins to turn to stone, and a target who ends two consecutive turns restrained this way is petrified. A target restrained this way or a creature adjacent to them can use a main action to cut encroaching stone from the target’s body, dealing 8 damage to the target that can’t be reduced in any way and ending this effect."}]},{"kind":"ability","action":"main","name":"Poison Fumes","cost":"5 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 poison damage; M \u003c 2 weakened and slowed (save ends)","low":"4 poison damage; M \u003c 0 weakened (save ends)","mid":"6 poison damage; M \u003c 1 weakened and slowed (save ends)"}}},{"kind":"ability","action":"triggered","name":"Lash Out","usage":"Triggered action","keywords":["Area"],"distance":"1 burst","target":"Each enemy in the area","sections":[{"label":"Trigger","text":"The basilisk takes damage from a melee ability."},{"label":"Effect","text":"Each target takes 5 damage. Any target who has A \u003c 2 is also bleeding (save ends)."}]},{"kind":"passive","action":"passive","name":"Calcifying Presence","body":"The area within 3 squares of the basilisk is difficult terrain for enemies."}]}
</script></div>
