---
agility: 1
ev: "40"
free_strike: 8
intuition: 2
keywords:
    - Giant
    - Stone Giant
level: 8
might: 4
movement: Burrow
name: Granite Stone Giant
organization: Elite
presence: 1
reason: 1
role: Defender
scc: mcdm.monsters.v1/monster.giants.statblock/granite-stone-giant
size: "4"
speed: 7
stability: 10
stamina: "247"
type: statblock
---

# Granite Stone Giant

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"granite-stone-giant","name":"Granite Stone Giant","ancestry":"Giant, Stone Giant","level":"8","role":"Elite Defender","roleKey":"defender","ev":"40","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"247"},{"l":"Stability","v":"10"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Jagged Stone Club","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; R \u003c 4 weakened (save ends)","low":"12 damage","mid":"17 damage; R \u003c 3 weakened (save ends)"}},"sections":[{"label":"Effect","text":"If the target is already weakened, they are also bleeding (save ends)."}]},{"kind":"ability","action":"main","name":"Crag Burst","cost":"3 Malice","usage":"Main action","keywords":["Area"],"distance":"2 burst","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 damage; vertical push 4","low":"6 damage; push 2","mid":"10 damage; push 4"}},"sections":[{"label":"Effect","text":"The area is difficult terrain. Whenever a creature enters square in the area, they take 3 damage."}]},{"kind":"ability","action":"maneuver","name":"Castle Stone Shape","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The granite stone giant moves up to their speed and creates a 14 wall of stone in squares adjacent to the path of their movement."}]},{"kind":"ability","action":"triggered","name":"Pillar","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 3","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object within distance moves or shifts away from the granite stone giant."},{"label":"Effect","text":"A 1-square pillar of stone rises 5 squares out of the ground beneath the target, who moves with the ground to its new elevation, then is vertical pushed 5 squares."}]},{"kind":"passive","action":"passive","name":"Stonebreaker Flesh","body":"Whenever an enemy obtains a tier 1 outcome on a melee ability used against the granite stone giant, they take a bane on that ability until the end of the encounter."},{"kind":"passive","action":"passive","name":"Stone Steps","body":"The granite stone giant ignores difficult terrain."},{"kind":"passive","action":"passive","name":"Stone Swim","body":"The granite stone giant can burrow through stone, but can't drag other creatures underground when they do so."}]}
</script></div>
