---
printing: "1.01"
printing_book: "Bestiary"
agility: -1
ev: "20"
free_strike: 6
intuition: 1
keywords:
    - Elemental
level: 3
might: 2
movement: Burrow
name: Force of Earth
organization: Elite
presence: 2
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.elementals.statblock/force-of-earth
size: "2"
speed: 5
stability: 2
stamina: "132"
type: statblock
---

# Force of Earth

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"force-of-earth","name":"Force of Earth","ancestry":"Elemental","level":"3","role":"Elite Brute","roleKey":"brute","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"132"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Slam Into Dirt","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"15 damage; M \u003c 2 restrained (save ends)","low":"8 damage","mid":"12 damage; M \u003c 1 restrained (save ends)"}},"sections":[{"label":"Effect","text":"The target's space is difficult terrain."}]},{"kind":"ability","action":"maneuver","name":"Convocation of Quartz","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self or one elemental","sections":[{"label":"Effect","text":"Until the start of the force's next turn, any melee strike made against the target takes a bane if it doesn't already have a bane or double bane."}],"enhancements":[{"cost":"3 Malice","text":"Until the end of the encounter, the target grows a carapace of stone. They have a +3 bonus to stability and gain 15 temporary Stamina."}]},{"kind":"ability","action":"triggered","name":"Break Armor","cost":"1 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The force takes damage."},{"label":"Effect","text":"The force halves the damage, and has damage weakness 3 and a +3 bonus to speed until the end of the encounter. This damage weakness increases by 3 each time the force uses this ability in the same encounter."}]},{"kind":"passive","action":"passive","name":"Fickle and Free","body":"The force can't be restrained, slowed, or knocked prone, and they ignore difficult terrain."},{"kind":"passive","action":"passive","name":"Primordial Strength","body":"The force's strikes gain a +6 damage bonus against objects."},{"kind":"passive","action":"passive","name":"Stone Swim","body":"The force can burrow through stone, but can't drag other creatures underground when they do so."}]}
</script></div>
