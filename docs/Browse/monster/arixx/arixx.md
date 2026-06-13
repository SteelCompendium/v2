---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "36"
free_strike: 5
intuition: 1
keywords:
    - Arixx
    - Beast
level: 1
might: 3
movement: Burrow
name: Arixx
organization: Solo
presence: -4
reason: -3
scc: mcdm.monsters.v1/monster.arixx.statblock/arixx
size: "2"
speed: 5
stability: 2
stamina: "200"
type: statblock
---

# Arixx

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"arixx","name":"Arixx","ancestry":"Arixx, Beast","level":"1","role":"Solo","roleKey":"solo","ev":"36","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-4"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the arixx can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The arixx can take two turns each round. They can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Earthwalk","body":"Difficult terrain composed of earth or loose rock doesn't cost the arixx extra movement."},{"kind":"passive","action":"passive","name":"Soft Underbelly","body":"A prone creature making a melee strike against the arixx has a double edge on the strike instead of taking a bane."},{"kind":"ability","action":"main","name":"Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"16 damage; grabbed","low":"9 damage; grabbed","mid":"13 damage; grabbed"}},"sections":[{"label":"Effect","text":"A size 1 target grabbed this way takes 3 acid damage at the start of each of their turns."}]},{"kind":"ability","action":"main","name":"Claw Swing","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"11 damage; A \u003c 3 grabbed","low":"5 damage; A \u003c 1 grabbed","mid":"8 damage; A \u003c 2 grabbed"}},"sections":[{"label":"Effect","text":"The arixx can vertically slide each grabbed target up to 3 squares."}]},{"kind":"ability","action":"main","name":"Spitfire","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"7 acid damage; prone","low":"4 acid damage","mid":"6 acid damage"}},"sections":[{"label":"Effect","text":"The ground beneath each target is covered in burning acid until the end of the encounter. Any enemy who enters an affected space for the first time in a round or starts their turn there takes 2 acid damage."}]},{"kind":"ability","action":"main","name":"Dirt Devil","cost":"3 Malice","usage":"Main action","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"7 damage; push 4","low":"4 damage","mid":"6 damage; push 2"}},"sections":[{"label":"Effect","text":"The arixx flings rocks and debris to fill the area, and has a double edge on the power roll if they started their turn underground. The area is difficult terrain."}]},{"kind":"ability","action":"maneuver","name":"Dust Cloud","usage":"Maneuver","keywords":["Area"],"distance":"1 burst","target":"Special","sections":[{"label":"Effect","text":"The arixx kicks up dust to fill the area until the start of their next turn, then moves up to their speed. Any enemy in the area or who targets a creature in the area takes a bane on power rolls."}]},{"kind":"ability","action":"triggered","name":"Skitter","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The arixx takes damage."},{"label":"Effect","text":"The arixx halves the damage and shifts up to 3 squares after the triggering effect resolves."}]},{"kind":"villain","action":"villain","name":"Acid Spew","cost":"Villain Action 1","keywords":["Area","Weapon"],"distance":"10 x 2 line within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 acid damage","low":"5 acid damage","mid":"8 acid damage"}},"sections":[{"label":"Effect","text":"The ground in the area is covered in a puddle of acid until the end of the encounter. Any enemy who enters the area for the first time in a round or starts their turn there takes 2 acid damage."}]},{"kind":"villain","action":"villain","name":"Sinkhole","cost":"Villain Action 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The arixx shifts up to their speed. If they end this shift above ground and within 2 squares of a creature, they use Bite against the creature and can then use the Dig maneuver."}]},{"kind":"villain","action":"villain","name":"Acid and Claws","cost":"Villain Action 3","keywords":["Area","Weapon"],"distance":"2 burst","target":"Each creature in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 acid damage; M \u003c 3 weakened (save ends)","low":"5 acid damage; M \u003c 1 weakened (save ends)","mid":"8 acid damage; M \u003c 2 weakened (save ends)"}}}]}
</script></div>
