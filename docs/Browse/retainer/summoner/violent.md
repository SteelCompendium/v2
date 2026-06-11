---
agility: 3
free_strike: 4
immunities:
    - —
keywords:
    - —
might: 2
movement: Climb
name: Violent
organization: Minion
reason: 0
role: Ambusher
scc: mcdm.summoner.v1/retainer.summoner.statblock/violent
size: 1M
speed: 7
stability: 1
type: statblock
weaknesses:
    - Holy 1
---

# Violent

---

<script type="application/json" class="sc-statblock-data">
{"id":"violent","name":"Violent","ancestry":"—","level":"","role":"Minion Ambusher","roleKey":"ambusher","ev":"","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"—"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"Holy 1","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"—"},{"l":"Presence","k":"P","v":"—"}],"features":[{"kind":"passive","action":"passive","name":"Transforming Strike","body":"The violent's melee [free strikes](../../../feature/common/main-actions/free-strike/) deal an additional 2 damage to each [adjacent](../../../rule/combat/adjacent/) enemy from whom they were hidden. The violent loses their disguise after striking."},{"kind":"passive","action":"passive","name":"Mimicry","body":"The violent uses the [Hide](../../../feature/common/maneuvers/hide/) maneuver at the start of their turn as a [free maneuver](../../../rule/combat/free-maneuver/), disguising themselves as a a [size](../../../rule/character/size/) 1M or smaller object."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Each creature [adjacent](../../../rule/combat/adjacent/) to the violent can't be hidden from them."},{"kind":"ability","action":"maneuver","name":"Cleansing Flense","cost":"Encounter","usage":"Maneuver","keywords":["Area","Magic"],"distance":"5 burst","target":"Each of the detective's minions in the area","sections":[{"label":"Effect","text":"Each target moves up to their [speed](../../../rule/character/speed/) toward an ally. Each ally within [line of effect](../../../rule/combat/line-of-effect/) of the detective can give one [EoT](../../../rule/combat/end-of-turn/) or save ends effect they're affected by to an [adjacent](../../../rule/combat/adjacent/) minion and end that effect on themself."}],"trailing":"Until the end of the encounter, whenever an enemy kills a target and has P \u003c STRONG, they receive all EoT or save ends effects the target was affected by."},{"kind":"ability","action":"main","name":"Blightwash","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"Ranged 5","target":"One of the detective's minions","powerRoll":{"formula":"2d10 + highest characteristic","tiers":{"high":"10 corruption damage; M \u003c STRONG [weakened](../../../condition/weakened/) (save ends)","low":"5 corruption damage; M \u003c WEAK [weakened](../../../condition/weakened/) (save ends)","mid":"8 corruption damage; M \u003c AVERAGE [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"The minion explodes. Make a power roll, targeting each enemy within 2 squares of the target."}],"trailing":"The area within 2 squares of the exploded minion is covered in blight until the end of the encounter. Abilities used against an enemy in the area have an [edge](../../../rule/dice/edge/)."},{"kind":"ability","action":"main","name":"Summon Gorrres","cost":"Encounter","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The detective summons two gorrres into unoccupied spaces within distance. On each of the detective's turns, they direct the squad of **gorrres** to move and use a main action."}]}]}
</script>
