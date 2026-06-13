---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 4
ev: "48"
free_strike: 10
intuition: 5
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 10
might: 4
name: Strategos Alkestis
organization: Leader
presence: 5
reason: 5
scc: mcdm.monsters.v1/monster.war-dogs.4th-echelon.statblock/strategos-alkestis
size: 1M
speed: 5
stability: 2
stamina: "260"
type: statblock
---

# Strategos Alkestis

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"strategos-alkestis","name":"Strategos Alkestis","ancestry":"Humanoid, Soulless, War Dog","level":"10","role":"Leader","roleKey":"leader","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"260"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+5"},{"l":"Presence","k":"P","v":"+5"}],"features":[{"kind":"ability","action":"main","name":"Houndgun and Houndblade ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"25 damage; M \u003c 6 [bleeding](../../../../condition/bleeding/) (save ends)","low":"15 damage; M \u003c 4 [bleeding](../../../../condition/bleeding/) (save ends)","mid":"21 damage; M \u003c 5 [bleeding](../../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Effect","text":"Each target loses 1d3 Recoveries."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"When a target is made [bleeding](../../../../condition/bleeding/) this way, each ally [adjacent](../../../../rule/combat/adjacent/) to them can make a [free strike](../../../../feature/common/main-actions/free-strike/) against the target."}]},{"kind":"ability","action":"maneuver","name":"Focus Fire","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 15","target":"One creature or object","sections":[{"label":"Effect","text":"Until the start of Alkestis's next turn, any effect that reduces the damage taken by the target has no effect."}]},{"kind":"ability","action":"triggered","name":"Artillery Enfilade (2 [Malice](../../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Area","Ranged","Weapon"],"distance":"7 x 3 line within 10","target":"Each creature and object in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"16 damage; A \u003c 6 [slowed](../../../../condition/slowed/) (save ends)","low":"8 damage; A \u003c 4 [slowed](../../../../condition/slowed/) (save ends)","mid":"13 damage; A \u003c 5 [slowed](../../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Trigger","text":"An ally is reduced to 0 [Stamina](../../../../rule/health/stamina/) within 10 squares of Alkestis."},{"label":"Effect","text":"The area is [difficult terrain](../../../../movement/difficult-terrain/) until the start of the next round."}]},{"kind":"passive","action":"passive","name":"[End Effect]","cost":"../../../rule/monster/end-effect.md","body":"At the end of each of her turns, Alkestis can take 20 damage to end one effect on her that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Tactical Brilliance","body":"At the start of each of Alkestis's turns, the Director gains 2 [Malice](../../../../rule/monster/malice/). While Alkestis is alive and in the encounter, the Director also gains 1 [Malice](../../../../rule/monster/malice/) whenever a war dog in the encounter obtains a tier 3 outcome on a power roll."},{"kind":"ability","action":"main","name":"Fog of War ([Villain Action](../../../rule/monster/villain-action.md) 1)","keywords":["-"],"distance":"Special","target":"Each ally in the encounter","sections":[{"label":"Effect","text":"Each target can disappear, then reappear anywhere on the encounter map 3 or more squares away from any enemy. Additionally, each target has a double edge on their next power roll."}]},{"kind":"ability","action":"main","name":"Send in the Second Wave ([Villain Action](../../../rule/monster/villain-action.md) 2)","keywords":["Ranged"],"distance":"Ranged 15","target":"Special","sections":[{"label":"Effect","text":"For each war dog reduced to 0 [Stamina](../../../../rule/health/stamina/) in the encounter, a war dog shriketrooper appears in an unoccupied space within distance."}]},{"kind":"ability","action":"main","name":"The Silver Wolf's Final Stratagem ([Villain Action](../../../rule/monster/villain-action.md) 3)","keywords":["Area","Magic"],"distance":"5 burst","target":"Each creature in the area","sections":[{"label":"Effect","text":"Until the start of the next round, each target enemy who has I \u003c 4 is [dazed](../../../../condition/dazed/), each target enemy who has M \u003c 4 is [restrained](../../../../condition/restrained/), and each target enemy who has A \u003c 4 can't use [triggered actions](../../../../rule/combat/triggered-action/). Additionally, until the end of the encounter, Alkestis and each target ally have damage immunity 3 and deal an extra 5 damage with strikes."}]}]}
</script></div>
