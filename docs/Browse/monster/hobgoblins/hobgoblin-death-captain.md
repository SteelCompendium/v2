---
printing: "1.01"
printing_book: "Bestiary"
agility: 0
ev: "12"
free_strike: 5
immunities:
    - Fire 4
intuition: 0
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 3
name: Hobgoblin Death Captain
organization: Platoon
presence: 2
reason: 1
role: Support
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-death-captain
size: 1M
speed: 5
stability: 2
stamina: "60"
type: statblock
---

# Hobgoblin Death Captain

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-death-captain","name":"Hobgoblin Death Captain","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Platoon Support","roleKey":"support","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Blightblade","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"8 damage, 7 corruption damage","low":"8 damage","mid":"8 damage, 4 corruption damage"}},"sections":[{"label":"Effect","text":"The next strike made against the target has a double edge."}],"enhancements":[{"cost":"3 Malice","text":"One ally adjacent to the target can use their signature ability."}]},{"kind":"ability","action":"maneuver","name":"On My Mark!","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 5","target":"One ally","sections":[{"label":"Effect","text":"The target moves up to their speed and can make a free strike."}]},{"kind":"passive","action":"passive","name":"Battle Ready","body":"Any hidden creature who makes a strike against the death captain or any ally within 2 squares of the death captain takes a bane on the strike."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the death captain is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the death captain takes 3 fire damage."}]}
</script></div>
