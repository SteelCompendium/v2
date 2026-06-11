---
agility: 1
ev: 3 for four minions
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 0
name: Orc Glorifier
organization: Minion
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-glorifier
size: 1M
speed: 6
stability: 0
stamina: "3"
type: statblock
with_captain: +5 bonus to ranged distance
---

# Orc Glorifier

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-glorifier","name":"Orc Glorifier","ancestry":"Humanoid, Orc","level":"1","role":"Minion Controller","roleKey":"controller","ev":"3 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"3"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Call to Victory","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike"],"distance":"Melee 1 or ranged 5","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"3 sonic damage; P \u003c 2 slowed (save ends)","low":"1 sonic damage","mid":"2 sonic damage; P \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"Allies gain an edge on melee strikes against the target until the glorifier and each other glorifier in their squad are killed."}]},{"kind":"passive","action":"passive","name":"Bloodfire Burn","body":"If the glorifier is reduced to 0 Stamina, they can make a free strike before dying."}]}
</script></div>
