---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
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
name: Multivok Bodyguard
organization: Elite
presence: -4
reason: -2
role: Defender
scc: mcdm.monsters.v1/monster.valok.statblock/multivok-bodyguard
size: "2"
speed: 5
stability: 5
stamina: "240"
type: statblock
---

# Multivok Bodyguard

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"multivok-bodyguard","name":"Multivok Bodyguard","ancestry":"Construct, Multivok, Soulless, Valok","level":"9","role":"Elite Defender","roleKey":"defender","ev":"44","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-4"}],"features":[{"kind":"ability","action":"main","name":"Gatling Bolt Gun ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"22 damage; A \u003c 4 [bleeding](../../../condition/bleeding/) (save ends)","low":"13 damage","mid":"18 damage"}}},{"kind":"ability","action":"main","name":"Valiar Axe","cost":"3 Malice","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"26 damage; [prone](../../../condition/prone/); M \u003c 4 [weakened](../../../condition/weakened/) (save ends)","low":"15 damage; M \u003c 2 [weakened](../../../condition/weakened/) (save ends)","mid":"21 damage; M \u003c 3 [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"The bodyguard has a double edge on this ability if it was previously used against the same target in this encounter."}]},{"kind":"ability","action":"maneuver","name":"Magnetic Pull","usage":"Maneuver","keywords":["Area"],"distance":"10 burst","target":"Each enemy and object in the area","sections":[{"label":"Special","text":"This ability targets only metal-clad enemies and metal objects of size 3 or smaller."},{"label":"Effect","text":"Each target is [pulled](../../../movement/forced-movement/) up to 8 squares, or if they have M \u003c 3, they are [pulled](../../../movement/forced-movement/) up to 15 squares. The bodyguard can make a [free strike](../../../feature/common/main-actions/free-strike/) against each target who ends this [forced movement](../../../movement/forced-movement/) [adjacent](../../../rule/combat/adjacent/) to them."}]},{"kind":"ability","action":"triggered","name":"Valiar Cloak","usage":"[Triggered Action](../../rule/combat/triggered-action.md)","keywords":["Melee"],"distance":"Melee 2","target":"Self","sections":[{"label":"Trigger","text":"One ally within distance is targeted by an enemy's ability. The bodyguard can use this ability after seeing the outcome of the power roll."},{"label":"Effect","text":"The bodyguard becomes the triggering ability's target instead."}]},{"kind":"passive","action":"passive","name":"Multivok Maintenance","body":"At the start of the bodyguard's turn, each servok within 2 squares of them regains 15 [Stamina](../../../rule/health/stamina/)."},{"kind":"passive","action":"passive","name":"Crafted to Perfection","body":"The bodyguard's shape can't be changed by any external effect."},{"kind":"passive","action":"passive","name":"Valiar Might","body":"While the bodyguard isn't [bleeding](../../../condition/bleeding/), [weakened](../../../condition/weakened/), or [winded](../../../rule/health/winded/), any power roll made against them is automatically a tier 1 outcome. A critical hit still grants its additional main action."}]}
</script></div>
