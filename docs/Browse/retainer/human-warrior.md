---
agility: 0
ev: '-'
free_strike: 2
intuition: 0
keywords:
    - Human
    - Humanoid
level: 1
might: 2
name: Human Warrior
organization: Retainer
presence: 1
reason: 0
role: Defender
scc: mcdm.monsters.v1/retainer.statblock/human-warrior
size: 1M
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# Human Warrior

---

<script type="application/json" class="sc-statblock-data">
{"id":"human-warrior","name":"Human Warrior","ancestry":"Human, Humanoid","level":"1","role":"Retainer Defender","roleKey":"defender","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Chop","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"If the warrior is adjacent to their mentor, this ability gains an edge."}]},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The warrior ignores concealment if it's granted by a supernatural effect."},{"kind":"ability","action":"triggered","name":"'Scuse Me, Boss","cost":"Encounter","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The warrior's mentor","sections":[{"label":"Trigger","text":"The warrior's mentor is targeted by a strike while within distance."},{"label":"Effect","text":"The warrior and the mentor switch places. The warrior is the strike's new target and the strike has a double bane."}]},{"kind":"ability","action":"main","name":"Defensive Fighting","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage","low":"7 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"Until the start of the warrior's next turn, ability rolls against the warrior or any ally adjacent to the warrior have a double bane."}]},{"kind":"ability","action":"main","name":"Whirlwind of Steel","cost":"Encounter","usage":"Main action","keywords":["Area","Charge","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"24 damage","low":"12 damage","mid":"18 damage"}}}]}
</script>
