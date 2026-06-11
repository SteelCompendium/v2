---
agility: -1
ev: "7"
free_strike: 3
intuition: 3
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 5
might: 3
name: War Dog Doomthief
organization: Horde
presence: 1
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-doomthief
size: 1L
speed: 5
stability: 2
stamina: "40"
type: statblock
---

# War Dog Doomthief

---

<script type="application/json" class="sc-statblock-data">
{"id":"war-dog-doomthief","name":"War Dog Doomthief","ancestry":"Humanoid, Soulless, War Dog","level":"5","role":"Horde Defender","roleKey":"defender","ev":"7","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Ripper Shrikegun","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"10 x 3 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"6 damage; push 5; A \u003c 3 slowed (save ends)","low":"3 damage; push 1","mid":"5 damage; push 3"}},"sections":[{"label":"Effect","text":"The doomthief can't willingly move on the same turn they use this ability."}]},{"kind":"passive","action":"passive","name":"Doom Magnet","body":"The doomthief emits a 3 aura of warped fate that blocks line of effect for any enemy ability that doesn't include them as a target."},{"kind":"ability","action":"maneuver","name":"Expanding Doom","cost":"4 Malice","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The doomthief has damage immunity 4 and the size of the aura from their Doom Magnet trait increases by 3, both until the start of their next turn."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the doomthief is reduced to 0 Stamina, their loyalty collar explodes, dealing 2d6 damage to each adjacent enemy and object."}]}
</script>
