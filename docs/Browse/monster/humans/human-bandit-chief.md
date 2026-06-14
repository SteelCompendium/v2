---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "20"
free_strike: 5
immunities:
    - Corruption 4
    - psychic 4
intuition: 3
keywords:
    - Human
    - Humanoid
level: 3
might: 2
name: Human Bandit Chief
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.humans.statblock/human-bandit-chief
size: 1M
speed: 5
stability: 2
stamina: "120"
type: statblock
---

# Human Bandit Chief

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"human-bandit-chief","name":"Human Bandit Chief","ancestry":"Human, Humanoid","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Corruption 4, psychic 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Whip and Magic Longsword","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two enemies or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"15 damage; [pull](../../../movement/forced-movement/) 3","low":"8 damage; [pull](../../../movement/forced-movement/) 1","mid":"12 damage; [pull](../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"Any target who is [adjacent](../../../rule/combat/adjacent/) to the bandit chief after the power roll is resolved takes 3 corruption damage."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"This ability targets one additional target."}]},{"kind":"ability","action":"maneuver","name":"Kneel, Peasant!","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One enemy","powerRoll":{"formula":"+ 3","tiers":{"high":"[Push](../../../movement/forced-movement/) 4; M \u003c 3 [prone](../../../condition/prone/)","low":"[Push](../../../movement/forced-movement/) 1; M \u003c 1 [prone](../../../condition/prone/)","mid":"[Push](../../../movement/forced-movement/) 2; M \u003c 2 [prone](../../../condition/prone/)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"The ability takes the Area keyword, loses the Melee keyword, and is a 1 burst that targets each enemy in the area."}]},{"kind":"ability","action":"triggered","name":"Bloodstones","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The bandit chief makes a power roll."},{"label":"Effect","text":"The bandit chief takes 5 corruption damage and increases the outcome of the power roll by one tier. This damage can't be reduced in any way."}]},{"kind":"passive","action":"passive","name":"[End Effect](../../../rule/monster/end-effect/)","body":"At the end of each of their turns, the bandit chief can take 5 damage to end one effect on them that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The bandit chief ignores concealment if it's granted by a supernatural effect."},{"kind":"villain","action":"villain","name":"Shoot!","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Area"],"distance":"10 burst","target":"Each artillery ally in the area","sections":[{"label":"Effect","text":"Each target makes a ranged [free strike](../../../feature/common/main-actions/free-strike/)."}]},{"kind":"villain","action":"villain","name":"Form Up!","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../movement/shifting/) up to their speed. Additionally, until the end of the encounter, while the bandit chief or any ally is [adjacent](../../../rule/combat/adjacent/) to a target, they have damage immunity 2."}]},{"kind":"villain","action":"villain","name":"Lead From the Front","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The bandit chief [shifts](../../../movement/shifting/) up to 10 squares regardless of their speed. During or after this movement, they can use their Whip and Magic Longsword against up to four targets. Additionally, one ally [adjacent](../../../rule/combat/adjacent/) to each target can make a [free strike](../../../feature/common/main-actions/free-strike/) against that target."}]}]}
</script></div>
