---
agility: 1
ev: 3 for four minions
free_strike: 2
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 2
name: Orc Razor
organization: Minion
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-razor
size: 1L
speed: 6
stability: 0
stamina: "5"
type: statblock
with_captain: +1 damage bonus to strikes
---

# Orc Razor

---

<script type="application/json" class="sc-statblock-data">
{"id":"orc-razor","name":"Orc Razor","ancestry":"Humanoid, Orc","level":"1","role":"Minion Brute","roleKey":"brute","ev":"3 for four minions","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"5"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Boot and Blade","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; push 3 or prone","low":"2 damage","mid":"4 damage; push 3"}},"sections":[{"label":"Effect","text":"The razor gains an edge against any target affected by a condition."}]},{"kind":"passive","action":"passive","name":"Bloodfire Burn","body":"If the razor is reduced to 0 Stamina, they can make a free strike before dying."}]}
</script>
