---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -2
ev: "44"
free_strike: 9
intuition: -1
keywords:
    - Construct
    - Servok
    - Soulless
    - Valok
level: 9
might: 4
movement: Burrow, climb
name: Servok Miner
organization: Elite
presence: -5
reason: -4
role: Controller
scc: mcdm.monsters.v1/monster.valok.statblock/servok-miner
size: "2"
speed: 5
stability: 6
stamina: "200"
type: statblock
---

# Servok Miner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"servok-miner","name":"Servok Miner","ancestry":"Construct, Servok, Soulless, Valok","level":"9","role":"Elite Controller","roleKey":"controller","ev":"44","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"6"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow, climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-5"}],"features":[{"kind":"ability","action":"main","name":"Drill Press","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 damage; prone; M \u003c 4 restrained (save ends)","low":"13 damage; M \u003c 2 restrained (save ends) and prone","mid":"18 damage; M \u003c 3 restrained (save ends) and prone"}},"sections":[{"label":"Effect","text":"In suitably soft ground, a target restrained this way is etrenched in a 1-square-deep hole."}]},{"kind":"ability","action":"main","name":"Unload Rocks","cost":"3 Malice","usage":"Main action","keywords":["Area"],"distance":"4 cube within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"7 damage","low":"14 damage; slide 4; the miner's allies have concealment from the target (save ends)","mid":"11 damage; slide 2"}},"sections":[{"label":"Effect","text":"Each target makes an **Agility test**."}],"trailing":"The area is difficult terrain."},{"kind":"ability","action":"maneuver","name":"Break Ground","cost":"5 Malice","usage":"Maneuver","keywords":["Area"],"distance":"20 x 1 line within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"7 damage; the target can shift into the nearest unoccupied space outside the fissure","low":"14 damage; the target falls into the fissure, and is prone and can't stand (EoT)","mid":"11 damage; the target is prone and hanging onto the edge of the fissure"}},"sections":[{"label":"Effect","text":"A 5-square-deep fissure opens along the ground in the area. Each ally in the area can shift into the nearest unoccupied space outside the fissure. Each target makes an **Agility test**."}]},{"kind":"ability","action":"triggered","name":"Miner Inconvenience","cost":"2 Malice","usage":"Triggered action","keywords":["Area"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The miner is targeted by a strike."},{"label":"Effect","text":"Until the end of the round, dust and dirt billow in a 2 burst around the miner's initial space. While the miner is in the area, they ignore the nondamaging effects of any strike made against them, including the triggering strike."}]},{"kind":"passive","action":"passive","name":"Valiar Tunneler","body":"The miner can burrow through stone and metal. When the miner burrows, they create a stable size 2 tunnel in their wake."},{"kind":"passive","action":"passive","name":"Servok Siege Machine","body":"The miner ignores difficult terrain, and their abilities deal an extra 15 damage to objects."},{"kind":"passive","action":"passive","name":"Crafted to Perfection","body":"The miner's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Valiar Might","body":"While the miner isn't bleeding, weakened, or winded, any power roll made against them is automatically a tier 1 outcome. A critical hit still grants its additional main action."}]}
</script></div>
