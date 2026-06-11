---
agility: 1
ev: 3 for 4 minions
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Radenwight
level: 1
might: -1
movement: Climb
name: Radenwight Scrapper
organization: Minion
presence: 2
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-scrapper
size: 1S
speed: 5
stability: 1
stamina: "5"
type: statblock
with_captain: +2 bonus to melee distance
---

# Radenwight Scrapper

---

<script type="application/json" class="sc-statblock-data">
{"id":"radenwight-scrapper","name":"Radenwight Scrapper","ancestry":"Humanoid, Radenwight","level":"1","role":"Minion Defender","roleKey":"defender","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"5"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Buckler Bash","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"3 damage; taunted (EoT)","low":"1 damage","mid":"2 damage; taunted (EoT)"}}},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The scrapper makes a free strike against the target."}]}]}
</script>
