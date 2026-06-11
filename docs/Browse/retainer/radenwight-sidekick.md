---
agility: 2
ev: '-'
free_strike: 2
intuition: 1
keywords:
    - Humanoid
    - Radenwight
level: 1
might: 0
movement: Climb
name: Radenwight Sidekick
organization: Retainer
presence: 0
reason: 0
role: Support
scc: mcdm.monsters.v1/retainer.statblock/radenwight-sidekick
size: 1S
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# Radenwight Sidekick

---

<script type="application/json" class="sc-statblock-data">
{"id":"radenwight-sidekick","name":"Radenwight Sidekick","ancestry":"Humanoid, Radenwight","level":"1","role":"Retainer Support","roleKey":"support","ev":"-","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Dagger's Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}}},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The sidekick makes a free strike against the target."}]},{"kind":"ability","action":"maneuver","name":"Boost","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"If the sidekick's mentor moves adjacent to the sidekick at any point during the mentor's turn, the mentor gains a +1 bonus to speed and can automatically climb at full speed while moving until the end of their turn."}]},{"kind":"ability","action":"main","name":"Bug Bag","cost":"Encounter","usage":"Main action","keywords":["Area","Ranged"],"distance":"3 cube within 3","target":"Each creature in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 poison damage; M \u003c STRONG weakened (save ends)","low":"6 poison damage; M \u003c WEAK weakened (save ends)","mid":"9 poison damage; M \u003c AVERAGE weakened (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Triumphant Squeak","cost":"Encounter","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"Self and each ally","sections":[{"label":"Effect","text":"Each target can spend a Recovery, and ends the dazed, frightened, and weakened conditions on themself."}]}]}
</script>
