---
agility: 0
ev: "10"
free_strike: 5
immunities:
    - Corruption 3
    - psychic 3
intuition: 0
keywords:
    - Human
    - Humanoid
level: 3
might: 0
name: Human Storm Mage
organization: Platoon
presence: 1
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.humans.statblock/human-storm-mage
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# Human Storm Mage

---

<script type="application/json" class="sc-statblock-data">
{"id":"human-storm-mage","name":"Human Storm Mage","ancestry":"Human, Humanoid","level":"3","role":"Platoon Controller","roleKey":"controller","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Corruption 3, psychic 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Lightning Bolt","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 lightning damage","low":"7 lightning damage","mid":"10 lightning damage"}},"enhancements":[{"cost":"5 Malice","text":"The ability loses the Ranged and Strike keywords, takes the Area keyword, and is a 10 x 1 line within 15 that targets each enemy and object in the area."}]},{"kind":"ability","action":"maneuver","name":"Gust of Wind","cost":"3 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"5 cube within 1","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"Slide 6; M \u003c 2 slowed (save ends)","low":"Slide 2; M \u003c 0 slowed (save ends)","mid":"Slide 4; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"The gust of wind disperses gas or vapor and extinguishes any flames, including supernatural effects."}]},{"kind":"passive","action":"passive","name":"Arcane Shield","body":"Any melee ability targeting the storm mage takes a bane.\n\nAdditionally, whenever the mage takes damage from an adjacent enemy, the enemy takes 2 lightning damage, and if they have R \u003c 1 they are pushed up to 2 squares."},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The storm mage ignores concealment if it's granted by a supernatural effect."}]}
</script>
