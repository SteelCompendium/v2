---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -2
ev: "48"
free_strike: 10
intuition: -1
keywords:
    - Construct
    - Servok
    - Soulless
    - Valok
level: 10
might: 5
name: Servok War Engine
organization: Elite
presence: -5
reason: -4
role: Brute
scc: mcdm.monsters.v1/monster.valok.statblock/servok-war-engine
size: "3"
speed: 5
stability: 8
stamina: "260"
type: statblock
---

# Servok War Engine

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"servok-war-engine","name":"Servok War Engine","ancestry":"Construct, Servok, Soulless, Valok","level":"10","role":"Elite Brute","roleKey":"brute","ev":"48","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"260"},{"l":"Stability","v":"8"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-5"}],"features":[{"kind":"ability","action":"main","name":"Blade Rake","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"25 damage; [pull](../../../movement/forced-movement/) 6","low":"15 damage","mid":"21 damage; [pull](../../../movement/forced-movement/) 3"}}},{"kind":"ability","action":"main","name":"Prismacore Cannon","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 20","target":"One creature or object","powerRoll":{"formula":"+ 5","tiers":{"high":"34 damage; I \u003c 5 [dazed](../../../condition/dazed/) (save ends)","low":"22 damage","mid":"29 damage; I \u003c 4 [dazed](../../../condition/dazed/) (save ends)"}},"sections":[{"label":"Effect","text":"This damage can't be reduced in any way. This ability can't be used again until the start of the next round."}]},{"kind":"ability","action":"maneuver","name":"Destructive Rollout","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The war engine moves up to their speed in a straight line, automatically destroying mundane size 1 objects or walls in their path. The first time the war engine moves through a creature's space during this movement, that creature can choose to either fall [prone](../../../condition/prone/) or take 10 damage."}]},{"kind":"ability","action":"maneuver","name":"Burning Oil","cost":"3 Malice","usage":"Maneuver","keywords":["Area"],"distance":"20 x 1 line within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"8 fire damage","low":"16 fire damage; the target is burning (save ends)","mid":"12 fire damage; the target is burning (EoT)"}},"sections":[{"label":"Effect","text":"Each target makes an Agility test."}],"trailing":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Additionally, the area is burning until the end of the encounter. While the area is burning, it is [difficult terrain](../../../movement/difficult-terrain/) and any enemy takes 3 fire damage for each square of the area they enter."},{"kind":"ability","action":"triggered","name":"Quick Blast","cost":"1 Malice","usage":"Free triggered action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 20","target":"One creature or object","powerRoll":{"formula":"+ 5","tiers":{"high":"16 damage; [push](../../../movement/forced-movement/) 8","low":"8 damage; [push](../../../movement/forced-movement/) 2","mid":"12 damage; [push](../../../movement/forced-movement/) 5"}},"sections":[{"label":"Trigger","text":"The target deals damage to the war engine."},{"label":"Effect","text":"This damage can't be reduced in any way."}]},{"kind":"passive","action":"passive","name":"Servok Siege Machine","body":"The war engine ignores [difficult terrain](../../../movement/difficult-terrain/), and their abilities deal an extra 15 damage to objects."},{"kind":"passive","action":"passive","name":"Crafted to Perfection","body":"The war engine's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Valiar Might","body":"While the war engine isn't [bleeding](../../../condition/bleeding/), [weakened](../../../condition/weakened/), or [winded](../../../rule/health/winded/), any power roll made against them is automatically a tier 1 outcome. A critical hit still grants its additional main action."}]}
</script></div>
