---
agility: 1
ev: "44"
free_strike: 9
intuition: 1
keywords:
    - Construct
    - Multivok
    - Soulless
    - Valok
level: 9
might: 4
name: Multivok Chief
organization: Elite
presence: -3
reason: -2
role: Support
scc: mcdm.monsters.v1/monster.valok.statblock/multivok-chief
size: 1L
speed: 5
stability: 3
stamina: "220"
type: statblock
---

# Multivok Chief

---

<script type="application/json" class="sc-statblock-data">
{"id":"multivok-chief","name":"Multivok Chief","ancestry":"Construct, Multivok, Soulless, Valok","level":"9","role":"Elite Support","roleKey":"support","ev":"44","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"220"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Pneumatic Punch","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 damage; push 8","low":"13 damage; push 3","mid":"18 damage; push 5"}}},{"kind":"ability","action":"main","name":"Targeting Beam","cost":"3 Malice","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"26 damage; A \u003c 4 slowed (save ends)","low":"15 damage; A \u003c 2 slowed (save ends)","mid":"21 damage; A \u003c 3 slowed (save ends)"}},"sections":[{"label":"Effect","text":"This damage can't be reduced in any way. While a target is slowed this way, any strike against them has a double edge."}]},{"kind":"ability","action":"maneuver","name":"Chief's Command","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 5","target":"One ally","sections":[{"label":"Effect","text":"The target shifts up to their speed and can use a main action."}]},{"kind":"ability","action":"triggered","name":"Quick Shield","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"The chief or an ally within distance is subject to an effect that can be ended by a saving throw or that ends at the end of their turn."},{"label":"Effect","text":"The target gains 15 temporary Stamina. Each time this triggered action is used, the amount of temporary Stamina received decreases by 3 (to a minimum of 0)."}]},{"kind":"passive","action":"passive","name":"Multivok Maintenance","body":"At the start of the chief's turn, each servok within 2 squares of them regains 15 Stamina."},{"kind":"passive","action":"passive","name":"Crafted to Perfection","body":"The chief's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Valiar Might","body":"While the chief isn't bleeding, weakened, or winded, any power roll made against them is automatically a tier 1 outcome. A critical hit still grants its additional main action."}]}
</script>
