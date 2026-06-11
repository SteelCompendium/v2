---
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Cold 6
intuition: 3
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: -1
movement: Fly
name: Lydixavus the Deadeye
organization: Elite
presence: 1
reason: 3
role: Artillery
scc: mcdm.monsters.v1/monster.draconians.statblock/lydixavus-the-deadeye
size: 1M
speed: 5
stability: 2
stamina: "140"
type: statblock
---

# Lydixavus the Deadeye

---

<script type="application/json" class="sc-statblock-data">
{"id":"lydixavus-the-deadeye","name":"Lydixavus the Deadeye","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Elite Artillery","roleKey":"artillery","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Cold 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Breathsnipe","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One enemy","powerRoll":{"formula":"+ 3","tiers":{"high":"19 cold damage; the target has a double bane on their next strike","low":"10 cold damage","mid":"16 cold damage; the target takes a bane on their next strike"}}},{"kind":"ability","action":"main","name":"Ice Lob","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"2 cube within 10","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"15 cold damage; M \u003c 3 dazed (save ends)","low":"7 cold damage; M \u003c 1 dazed (save ends)","mid":"12 cold damage; M \u003c 2 dazed (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Parting Gift","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Lydixavus flies up to their speed, leaving a size 1S ice mine in the space they took off from. The ice mine explodes when an enemy enters its space, using the power roll for the Ice Lob ability, and targeting the triggering creature and each creature and object adjacent to the ice mine."}]},{"kind":"ability","action":"triggered","name":"Wasn't Aiming For You","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"Lydixavus obtains a tier 1 outcome on their signature ability."},{"label":"Effect","text":"Lydixavus uses their signature ability again, targeting a creature within 5 squares of the original target."}]},{"kind":"passive","action":"passive","name":"Scorekeeping Scales","body":"Lydixavus knows the location of every creature who has ever dealt damage to them. If any of those creatures are within 20 squares of Lydixavus, Lydixavus always has line of effect to them as long as a size 1 opening exists between Lydixavus and the target."}]}
</script>
