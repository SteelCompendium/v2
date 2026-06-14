---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "24"
free_strike: 6
immunities:
    - Corruption 4
    - poison 4
intuition: 1
keywords:
    - Undead
    - Soulless
level: 4
might: 3
name: Giant Zombie
organization: Elite
presence: 2
reason: -2
role: Brute
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/giant-zombie
size: "3"
speed: 6
stability: 2
stamina: "140"
type: statblock
---

# Giant Zombie

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"giant-zombie","name":"Giant Zombie","ancestry":"Undead, Soulless","level":"4","role":"Elite Brute","roleKey":"brute","ev":"24","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Rotten Smash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; A \u003c 3 [grabbed](../../../../condition/grabbed/)","low":"9 damage","mid":"14 damage; A \u003c 2 [grabbed](../../../../condition/grabbed/)"}}},{"kind":"ability","action":"triggered","name":"Knocking Heads","cost":"1 [Malice](../../../../rule/monster/malice/)","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self; see below","sections":[{"label":"Trigger","text":"The giant zombie [grabs](../../../../condition/grabbed/) two creatures or objects, or starts their turn with two creatures or objects [grabbed](../../../../condition/grabbed/)."},{"label":"Effect","text":"The creatures or objects are smashed together using Rotten Smash, which has a double edge."}]},{"kind":"passive","action":"passive","name":"Endless Knight","body":"The first time the giant zombie is reduced to 0 [Stamina](../../../../rule/health/stamina/) by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 50 [Stamina](../../../../rule/health/stamina/) and fall [prone](../../../../condition/prone/)."},{"kind":"passive","action":"passive","name":"Negative Nerves","body":"When the giant zombie is targeted by an ability that deals rolled damage, they halve the damage from a tier 1 outcome."}]}
</script></div>
