---
agility: 0
ev: "16"
free_strike: 5
immunities:
    - —
intuition: 1
keywords:
    - —
level: 2
might: 0
movement: —
name: Rival Summoner
organization: Elite
presence: 0
reason: 2
role: Controller
scc: mcdm.summoner.v1/rival.summoner.1st-echelon.statblock/rival-summoner
size: 1M
speed: 5
stability: 0
stamina: "60"
type: statblock
weaknesses:
    - —
---

# Rival Summoner

---

<script type="application/json" class="sc-statblock-data">
{"id":"rival-summoner","name":"Rival Summoner","ancestry":"—","level":"2","role":"Elite Controller","roleKey":"controller","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Undead Summoner","body":"The summoner can command up to two squads of minions with a maximum of 4 minions per squad. They can only have one squad of [signature minions](../../../../feature/summoner/level-1/minions/) active at any time.\n\nAt the start of each of the summoner's turns, up to three **skeletons** appear in unoccupied spaces within 5 squares of the summoner. On each of the summoner's turns, they direct the squad of skeletons to move and use a main action."},{"kind":"ability","action":"main","name":"Necro Beam","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"2d10 + 2","tiers":{"high":"11 corruption damage; R \u003c 2 [slowed](../../../../condition/slowed/) (save ends)","low":"5 corruption damage","mid":"8 corruption damage"}}},{"kind":"ability","action":"main","name":"Call Forth","cost":"1+ Malice","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The summoner summons the listed number of minions for their Malice cost into unoccupied spaces within distance. If the minions are a part of a new squad, the summoner directs the squad to move and use a main action on each of their turns."}]},{"kind":"ability","action":"triggered","name":"Corpse Shield","usage":"Triggered action","keywords":["—"],"distance":"Ranged 10","target":"Self or one ally","sections":[{"label":"Trigger","text":"The target is targeted by a [strike](../../../../rule/combat/strike/)."},{"label":"Effect","text":"If one of the summoner's minions is [adjacent](../../../../rule/combat/adjacent/) to the target and is within distance of the [strike](../../../../rule/combat/strike/), they become the new target of the strike."}],"enhancements":[{"cost":"2 Malice","text":"Instead of commanding an existing minion, the summoner summons a **skeleton** into an unoccupied space [adjacent](../../../../rule/combat/adjacent/) to the target to take the strike."}]},{"kind":"passive","action":"passive","name":"Rivalry","cost":"With All of Us","body":"At the start of an encounter, the summoner chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the summoner and the creature can add a d3 roll to [power rolls](../../../../rule/dice/power-roll/) they make against each other. Whenever one of the summoner's squads uses a damaging ability against the creature, the creature takes an additional 2 damage."}]}
</script>
