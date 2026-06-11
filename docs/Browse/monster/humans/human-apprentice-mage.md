---
agility: 1
ev: 4 for four minions
free_strike: 2
immunities:
    - Corruption 2
    - psychic 2
intuition: 0
keywords:
    - Human
    - Humanoid
level: 2
might: 0
name: Human Apprentice Mage
organization: Minion
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.humans.statblock/human-apprentice-mage
size: 1M
speed: 5
stability: 0
stamina: "4"
type: statblock
with_captain: +5 bonus to ranged distance
---

# Human Apprentice Mage

---

<script type="application/json" class="sc-statblock-data">
{"id":"human-apprentice-mage","name":"Human Apprentice Mage","ancestry":"Human, Humanoid","level":"2","role":"Minion Controller","roleKey":"controller","ev":"4 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"4"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 2, psychic 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Lightning Strike","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 lightning damage","low":"2 lightning damage","mid":"3 lightning damage"}},"sections":[{"label":"Effect","text":"If the apprentice mage doesn't use a maneuver or a move action this turn, the target is also slowed (EoT)."}]},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The apprentice mage ignores concealment if it's granted by a supernatural effect."}]}
</script>
