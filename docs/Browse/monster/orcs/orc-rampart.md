---
agility: 2
ev: "8"
free_strike: 4
intuition: 2
keywords:
    - Humanoid
    - Orc
level: 2
might: 2
name: Orc Rampart
organization: Platoon
presence: 2
reason: 2
role: Defender
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-rampart
size: 1L
speed: 6
stability: 2
stamina: "59"
type: statblock
---

# Orc Rampart

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-rampart","name":"Orc Rampart","ancestry":"Humanoid, Orc","level":"2","role":"Platoon Defender","roleKey":"defender","ev":"8","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"59"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"My Spear, My Foe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; taunted (EoT)","low":"6 damage","mid":"9 damage; taunted (EoT)"}},"sections":[{"label":"Effect","text":"This ability has a double edge against any target who dealt damage to the rampart this round."}]},{"kind":"ability","action":"maneuver","name":"Castling","usage":"Maneuver","keywords":["-"],"distance":"Self; see below","target":"One ally","sections":[{"label":"Effect","text":"The rampart moves or shifts up to their speed adjacent to the target, then can swap places with the target."}]},{"kind":"ability","action":"triggered","name":"No.","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature targets an ally adjacent to the rampart with an ability that doesn't also target the rampart."},{"label":"Effect","text":"The rampart becomes the target of the triggering ability instead."}]},{"kind":"passive","action":"passive","name":"Relentless","body":"If the rampart is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the rampart is reduced to 1 Stamina instead."}]}
</script></div>
