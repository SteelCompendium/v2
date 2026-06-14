---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "20"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Elemental
level: 3
might: -1
name: Crux of Fire
organization: Elite
presence: 2
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.elementals.statblock/crux-of-fire
size: 1T
speed: 6
stability: 0
stamina: "80"
type: statblock
---

# Crux of Fire

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"crux-of-fire","name":"Crux of Fire","ancestry":"Elemental","level":"3","role":"Elite Artillery","roleKey":"artillery","ev":"20","defenses":[{"l":"Size","v":"1T"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Spitfire","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 12","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"15 fire damage; A \u003c 2 the target is burning (save ends)","low":"8 fire damage","mid":"12 fire damage; A \u003c 1 the target is burning (save ends)"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"maneuver","name":"Convocation of Flames","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self or one elemental","sections":[{"label":"Effect","text":"Until the start of the crux's next turn, the target has fire immunity 5."}],"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"Until the end of the encounter, the ground within 3 squares of the target is wreathed in fire. Any enemy who enters that area for the first time in a round or starts their turn there takes 3 fire damage."}]},{"kind":"ability","action":"triggered","name":"Flame Jet","cost":"1 [Malice](../../../rule/monster/malice/)","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The crux takes damage."},{"label":"Effect","text":"The crux ignores any effects associated with the damage and can [fly](../../../movement/fly/) up to their speed. If the crux doesn't end this movement on solid ground, they fall."}]},{"kind":"passive","action":"passive","name":"Fickle and Free","body":"The crux can't be [restrained](../../../condition/restrained/), [slowed](../../../condition/slowed/), or knocked [prone](../../../condition/prone/), and they ignore [difficult terrain](../../../movement/difficult-terrain/)."}]}
</script></div>
