---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "20"
free_strike: 5
immunities:
    - Lightning 5
intuition: 0
keywords:
    - Elemental
level: 3
might: 1
movement: Fly
name: Essence of Storms
organization: Elite
presence: 2
reason: -1
role: Harrier
scc: mcdm.monsters.v1/monster.elementals.statblock/essence-of-storms
size: 1S
speed: 8
stability: 0
stamina: "100"
type: statblock
---

# Essence of Storms

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"essence-of-storms","name":"Essence of Storms","ancestry":"Elemental","level":"3","role":"Elite Harrier","roleKey":"harrier","ev":"20","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Lightning 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Bluster","cost":"Signature","usage":"Main action","keywords":["Area","Magic"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage, 7 lightning damage; [push](../../../movement/forced-movement/) 3","low":"5 damage","mid":"5 damage, 4 lightning damage; [push](../../../movement/forced-movement/) 1"}},"sections":[{"label":"Effect","text":"The essence [shifts](../../../movement/shifting/) up to 3 squares before or after using this ability."}]},{"kind":"ability","action":"maneuver","name":"Convocation of Squalls","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self or one elemental","sections":[{"label":"Effect","text":"Until the start of the essence's next turn, the target has lightning immunity 5."}],"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"Until the end of the encounter, a vortex surrounds the target in a 3 aura. The area is [difficult terrain](../../../movement/difficult-terrain/) for enemies. Additionally, at the end of each of the target's turns, they can [push](../../../movement/forced-movement/) one creature in the area up to 5 squares."}]},{"kind":"ability","action":"triggered","name":"Thunderclap","cost":"1 [Malice](../../../rule/monster/malice/)","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the essence."},{"label":"Effect","text":"The target takes 5 lightning damage."}]},{"kind":"passive","action":"passive","name":"Fickle and Free","body":"The essence can't be [restrained](../../../condition/restrained/), [slowed](../../../condition/slowed/), or knocked [prone](../../../condition/prone/), and they ignore [difficult terrain](../../../movement/difficult-terrain/)."}]}
</script></div>
