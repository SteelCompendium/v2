---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Elemental
    - High Elf
level: 1
might: 2
name: Ceramic Horse
organization: Platoon
presence: 1
reason: 0
role: Mount
scc: mcdm.monsters.v1/monster.elves-high.statblock/ceramic-horse
size: "2"
speed: 10
stability: 2
stamina: "30"
type: statblock
---

# Ceramic Horse

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ceramic-horse","name":"Ceramic Horse","ancestry":"Elemental, High Elf","level":"1","role":"Platoon Mount","roleKey":"mount","ev":"6","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Elemental Charge","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 lightning damage; M \u003c 2 prone","low":"5 damage","mid":"7 fire damage"}}},{"kind":"ability","action":"main","name":"Stomp","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"Any target who is prone takes an extra 2 damage."}]},{"kind":"ability","action":"maneuver","name":"Buck","cost":"2 Malice","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"The horse's rider","sections":[{"label":"Effect","text":"The horse vertical slides the target up to 3 squares, ignoring stability. The target can use a ranged ability at any point during this forced movement, and takes no damage if they then fall."}]},{"kind":"passive","action":"passive","name":"Shared Otherworldly Grace","body":"If the ceramic horse's rider has the Otherworldly Grace trait, the ceramic horse also has that trait."}]}
</script></div>
