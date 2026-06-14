---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
intuition: 3
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 6
might: 4
name: War Dog Tetrarch
organization: Leader
presence: 4
reason: 2
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-tetrarch
size: 1M
speed: 7
stability: 2
stamina: "180"
type: statblock
---

# War Dog Tetrarch

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-tetrarch","name":"War Dog Tetrarch","ancestry":"Humanoid, Soulless, War Dog","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+4"}],"features":[{"kind":"ability","action":"main","name":"Houndblade","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; taunted (EoT)","low":"11 damage","mid":"16 damage; taunted (EoT)"}},"sections":[{"label":"Effect","text":"A creature taunted this way takes a bane on strikes."}],"enhancements":[{"cost":"3 [Malice](../../../../rule/monster/malice/)","text":"Each target loses 1d3 Recoveries."}]},{"kind":"ability","action":"maneuver","name":"Get Them, You Dolts!","cost":"1 [Malice](../../../../rule/monster/malice/) per target","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"Three creatures","sections":[{"label":"Effect","text":"Each target [shifts](../../../../movement/shifting/) up to their speed and can make a [free strike](../../../../feature/common/main-actions/free-strike/). If the [free strike](../../../../feature/common/main-actions/free-strike/) targets an enemy taunted by the tetrarch, it deals an extra 4 damage."}]},{"kind":"ability","action":"triggered","name":"Sneering Disregard","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance who is not taunted by the tetrarch targets the tetrarch with a power roll."},{"label":"Effect","text":"The power roll has a double bane. If the target obtains a tier 1 outcome, the tetrarch ignores any of the power roll's effects other than damage and the target is [frightened](../../../../condition/frightened/) of the tetrarch (save ends)."}]},{"kind":"passive","action":"passive","name":"[End Effect](../../../../rule/monster/end-effect/)","body":"At the end of each of their turns, the tetrarch can take 10 damage to end one effect on them that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Enter the Fray","cost":"[Villain Action](../../../../rule/monster/villain-action/) 1","keywords":["Area"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"[Push](../../../../movement/forced-movement/) 5; I \u003c 4 [frightened](../../../../condition/frightened/) (save ends)","low":"[Push](../../../../movement/forced-movement/) 2; I \u003c 2 [frightened](../../../../condition/frightened/) (save ends)","mid":"[Push](../../../../movement/forced-movement/) 4; I \u003c 3 [frightened](../../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"The tetrarch can jump up to 7 squares before using this ability."}]},{"kind":"villain","action":"villain","name":"Lay Waste","cost":"[Villain Action](../../../../rule/monster/villain-action/) 2","keywords":["Area","Ranged","Weapon"],"distance":"Five 2 cubes within 20","target":"Each creature and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"16 fire damage; A \u003c 4 [slowed](../../../../condition/slowed/) (save ends)","low":"7 fire damage; A \u003c 2 [slowed](../../../../condition/slowed/) (EoT)","mid":"13 fire damage; A \u003c 3 [slowed](../../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"The area is set ablaze until the end of the encounter. While ablaze, the area is [difficult terrain](../../../../movement/difficult-terrain/), and any creature takes 2 fire damage for each square in the area they enter for the first time in a round."}]},{"kind":"villain","action":"villain","name":"You Would Dare?!","cost":"[Villain Action](../../../../rule/monster/villain-action/) 3","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Until the end of the encounter, the tetrarch has damage immunity 2, and their Houndblade ability targets three creatures or objects."}]}]}
</script></div>
