---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "48"
free_strike: 10
immunities:
    - Damage 3
intuition: 3
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 10
might: 5
name: Castellan Hoplon
organization: Elite
presence: 4
reason: 4
role: Defender
scc: mcdm.monsters.v1/monster.war-dogs.4th-echelon.statblock/castellan-hoplon
size: 1M
speed: 5
stability: 3
stamina: "260"
type: statblock
---

# Castellan Hoplon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"castellan-hoplon","name":"Castellan Hoplon","ancestry":"Humanoid, Soulless, War Dog","level":"10","role":"Elite Defender","roleKey":"defender","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"260"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"Damage 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+4"}],"features":[{"kind":"ability","action":"main","name":"Inspiring Strike","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"24 damage; [push](../../../../movement/forced-movement/) 5","low":"15 damage","mid":"20 damage; [push](../../../../movement/forced-movement/) 3"}},"sections":[{"label":"Effect","text":"Two allies within 10 squares of Hoplon each [shift](../../../../movement/shifting/) up to their speed, then can take the Defend main action or make a [free strike](../../../../feature/common/main-actions/free-strike/)."}]},{"kind":"ability","action":"maneuver","name":"Summon the Onyx Tower","cost":"5 [Malice](../../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 15","target":"Special","sections":[{"label":"Effect","text":"A 10-square-tall tower made of black stone shimmers into being in an unoccupied space that is 5 squares on a side. The tower has three floors, an entrance in the middle of each side on the ground floor, and a crenelated rooftop. Any war dog inside or [adjacent](../../../../rule/combat/adjacent/) to the tower has damage immunity 2 and regains 5 [Stamina](../../../../rule/health/stamina/) at the start of each of their turns, and war dogs inside the tower can observe through and have line of effect through its walls. This ability can be used only once per encounter."}]},{"kind":"ability","action":"maneuver","name":"Shield Warden","cost":"2 [Malice](../../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"R \u003c 5 taunted (EoT)","low":"R \u003c 3 taunted (EoT)","mid":"R \u003c 4 taunted (EoT)"}},"sections":[{"label":"Effect","text":"Until the start of Hoplon's next turn, any enemy ability that includes him as a target takes a bane."}]},{"kind":"ability","action":"triggered","name":"Timely Intervention","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"An enemy within 10 squares targets an ally with an ability."},{"label":"Effect","text":"Hoplon [teleports](../../../../movement/teleport/) to an unoccupied space [adjacent](../../../../rule/combat/adjacent/) to the enemy and becomes the new target of the ability. He can then make a [free strike](../../../../feature/common/main-actions/free-strike/) against the enemy, and if that enemy has R \u003c 4 they are taunted until the end of their next turn."}]},{"kind":"passive","action":"passive","name":"Hold the Line","body":"Each ally within 3 squares of Hoplon has cover and damage immunity 2."},{"kind":"passive","action":"passive","name":"Last Stand","body":"The first time in an encounter that Hoplon is reduced to 0 [Stamina](../../../../rule/health/stamina/), he instead has 1 [Stamina](../../../../rule/health/stamina/) and gains damage immunity 10 until the end of his next turn. When Hoplon is reduced to 0 [Stamina](../../../../rule/health/stamina/) again, each ally within 5 squares of him gains damage immunity 3 and deals an extra 5 damage on strikes, all until the end of the encounter."}]}
</script></div>
