---
printing: "1.0"
printing_book: "The Summoner"
agility: 0
free_strike: 2
immunities:
    - Fire 2
intuition: 2
keywords:
    - —
level: 1
movement: —
name: Devil Detective
organization: Retainer
presence: 0
reason: 2
role: Controller
scc: mcdm.summoner.v1/retainer.summoner.statblock/devil-detective
size: 1M
speed: 5
stability: 0
stamina: "21"
type: statblock
weaknesses:
    - —
---

# Devil Detective

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-detective","name":"Devil Detective","ancestry":"—","level":"1","role":"Retainer Controller","roleKey":"controller","ev":"","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Fire 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"—"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Demon Summoner","body":"The detective can command up to two squads of minions with a maximum of 4 minions per squad. They can only have one squad of [signature minions](../../../feature/summoner/level-1/minions/) active at any time.\n\nAt the start of each of the detective's turns, up to three **razors** appear in unoccupied spaces within 5 squares of the detective. On each of the detective's turns, they direct the squad of razors to move and use a main action."},{"kind":"ability","action":"main","name":"Diabolic Probe","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"2d10 + highest characteristic","tiers":{"high":"5 damage; R \u003c STRONG [slowed](../../../condition/slowed/) (save ends)","low":"1 damage","mid":"3 damage"}},"sections":[{"label":"Effect","text":"The target takes an additional 1 damage for each demon [adjacent](../../../rule/combat/adjacent/) to them."}]},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the detective's true name, the detective loses their [damage immunities](../../../rule/damage/damage-immunity/) and can't summon any **razors** until the end of the encounter."}]}
</script></div>
