---
printing: "1.0"
printing_book: "Summoner"
agility: 0
ev: "28"
free_strike: 6
immunities:
    - —
intuition: 2
keywords:
    - —
level: 5
might: 0
movement: —
name: Rival Summoner
organization: Elite
presence: 1
reason: 3
role: Controller
scc: mcdm.summoner.v1/rival.summoner.2nd-echelon.statblock/rival-summoner
size: 1M
speed: 5
stability: 0
stamina: "120"
type: statblock
weaknesses:
    - —
---

# Rival Summoner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-summoner","name":"Rival Summoner","ancestry":"—","level":"5","role":"Elite Controller","roleKey":"controller","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"passive","action":"passive","name":"Undead Summoner","body":"The summoner can command up to two squads of minions with a maximum of 6 minions per squad. They can only have one squad of [signature minions](../../../../feature/summoner/level-1/minions/) active at any time.\n\nAt the start of each of the summoner's turns, up to three **skeletons** appear in unoccupied spaces within 5 squares of the summoner. On each of the summoner's turns, they direct the squad of skeletons to move and use a main action."},{"kind":"ability","action":"main","name":"Essence Steal","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"2d10 + 3","tiers":{"high":"14 corruption damage","low":"6 corruption damage","mid":"11 corruption damage"}},"sections":[{"label":"Effect","text":"The summoner summons a **skeleton** into an unoccupied space [adjacent](../../../../rule/combat/adjacent/) to the target."}]},{"kind":"ability","action":"main","name":"Call Forth","cost":"1+ Malice","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The summoner summons the listed number of minions for their Malice cost into unoccupied spaces within distance. If the minions are a part of a new squad, the summoner directs the squad to move and use a main action on each of their turns."}]},{"kind":"ability","action":"triggered","name":"Corpse Carry","usage":"Triggered action","keywords":["—"],"distance":"Ranged 10","target":"Self or one ally","sections":[{"label":"Trigger","text":"The target is targeted by a [strike](../../../../rule/combat/strike/)"},{"label":"Effect","text":"If one of the summoner's minions is [adjacent](../../../../rule/combat/adjacent/) to the target and is within distance of the [strike](../../../../rule/combat/strike/), they become the new target of the strike. The original target can [shift](../../../../movement/shifting/) into any square [adjacent](../../../../rule/combat/adjacent/) to the minion."}],"enhancements":[{"cost":"2 Malice","text":"Instead of commanding an existing minion, the summoner summons a **skeleton** into an unoccupied space [adjacent](../../../../rule/combat/adjacent/) to the target to take the strike."}]},{"kind":"passive","action":"passive","name":"Rivalry","cost":"With All of Us","body":"At the start of an encounter, the summoner chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the summoner and the creature can add a d3 roll to [power rolls](../../../../rule/dice/power-roll/) they make against each other. Whenever one of the summoner's squads uses a damaging ability against the creature, the creature takes an additional 3 damage."}]}
</script></div>
