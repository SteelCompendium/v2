---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "20"
free_strike: 5
immunities:
    - Psychic 5
intuition: 1
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
movement: Hover, teleport
name: Time Raider Tyrannis
organization: Leader
presence: 0
reason: 3
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-tyrannis
size: "2"
speed: 10
stability: 2
stamina: "120"
type: statblock
---

# Time Raider Tyrannis

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-tyrannis","name":"Time Raider Tyrannis","ancestry":"Humanoid, Time Raider","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gatling Blaster","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Ranged","Strike","Weapon"],"distance":"Melee 2 or ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"15 corruption damage","low":"8 corruption damage","mid":"12 corruption damage"}},"sections":[{"label":"Effect","text":"Each target takes a −2 penalty to speed until the start of the tyrannis's next turn."}]},{"kind":"ability","action":"maneuver","name":"Air Raid!","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"Three time raiders","sections":[{"label":"Effect","text":"Each target can [fly](../../../movement/fly/) up to their speed and make a [free strike](../../../feature/common/main-actions/free-strike/). If a target doesn't land in an unoccupied space, they fall."}]},{"kind":"ability","action":"triggered","name":"Precog Reflexes","usage":"Triggered action","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance makes a strike against the tyrannis."},{"label":"Effect","text":"The strike takes a bane. After the strike resolves, the tyrannis can make a [free strike](../../../feature/common/main-actions/free-strike/) against the target."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"The strike has a double bane instead."}]},{"kind":"passive","action":"passive","name":"[End Effect](../../../rule/monster/end-effect/)","body":"At the end of each of their turns, the tyrannis can take 5 damage to end one effect on them that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Foresight","body":"The tyrannis doesn't take a bane on strikes against creatures with concealment."},{"kind":"villain","action":"villain","name":"We Will Won!","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"Self and three allies","sections":[{"label":"Effect","text":"Each target gains 15 temporary [Stamina](../../../rule/health/stamina/), and has their speed doubled until the end of their next turn."}]},{"kind":"villain","action":"villain","name":"Stick to the Plan!","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target can end one effect on them or can move up to their speed."}]},{"kind":"villain","action":"villain","name":"Armageddon","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["Area"],"distance":"5 burst","target":"Special","sections":[{"label":"Effect","text":"The tyrannis fires a sensor mine into each unoccupied square in the area, and creates a gravity well whose area contains one or more squares of the tyrannis's space (see Gravity Well). Whenever an enemy enters a square with a sensor mine in it, the mine explodes, dealing 3 damage to the enemy."}]}]}
</script></div>
