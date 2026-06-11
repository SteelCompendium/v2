---
agility: 2
free_strike: 1
immunities:
    - —
keywords:
    - —
might: 0
movement: —
name: Razor
organization: Minion
role: Harrier
scc: mcdm.summoner.v1/retainer.summoner.statblock/razor
size: 1M
speed: 6
stability: 0
stamina: "2"
type: statblock
weaknesses:
    - Holy 1
---

# Razor

---

<script type="application/json" class="sc-statblock-data">
{"id":"razor","name":"Razor","ancestry":"—","level":"","role":"Minion Harrier","roleKey":"harrier","ev":"","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"2"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"Holy 1","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"—"},{"l":"Intuition","k":"I","v":"—"},{"l":"Presence","k":"P","v":"—"}],"features":[{"kind":"passive","action":"passive","name":"Teeth!","body":"Once per turn, whenever an [adjacent](../../../rule/combat/adjacent/) enemy [grabs](../../../feature/common/maneuvers/grab/) the razor or uses a melee ability against them, that enemy takes 1 damage for each razor [adjacent](../../../rule/combat/adjacent/) to them."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Each creature [adjacent](../../../rule/combat/adjacent/) to the razor can't be hidden from them."},{"kind":"ability","action":"main","name":"Soul Sleuth","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"4 cube within 5","target":"Each enemy or object in the area","powerRoll":{"formula":"2d10 + highest characteristic","tiers":{"high":"5 damage; A \u003c STRONG [bleeding](../../../condition/bleeding/) (save ends)","low":"2 damage; A \u003c WEAK [bleeding](../../../condition/bleeding/) (save ends)","mid":"4 damage; A \u003c AVERAGE [bleeding](../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Special","text":"The detective can instantly kill one or more of their minions to give themself a double [edge](../../../rule/dice/edge/) on the [power roll](../../../rule/dice/power-roll/)."},{"label":"Effect","text":"Any enemy that was hiding in the area is revealed. The area is now [difficult terrain](../../../movement/difficult-terrain/) for enemies."}]},{"kind":"ability","action":"main","name":"Summon Violents","cost":"Encounter","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The detective summons 3 violents into unoccupied spaces within distance. On each of the detective's turns, they direct the squad of **violents** to move and use a main action."}]}]}
</script>
