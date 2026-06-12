---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "16"
free_strike: 5
intuition: 1
keywords:
    - Animal
level: 3
might: 2
name: Predator B
organization: Elite
presence: 0
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.animals.statblock/predator-b
size: "3"
speed: 5
stability: 2
stamina: "100"
type: statblock
---

# Predator B

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"predator-b","name":"Predator B","ancestry":"Animal","level":"3","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Natural Weapon","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; push 2; M \u003c 1 prone","low":"7 damage","mid":"11 damage; push 1; M \u003c 1 prone"}}},{"kind":"ability","action":"main","name":"Wild Swing","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy or object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; A \u003c 2 bleeding (save ends)","low":"3 damage","mid":"6 damage"}}},{"kind":"ability","action":"triggered","name":"Swat","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A creature or object within distance deals damage to the predator."},{"label":"Effect","text":"The target is pushed up to 5 squares."}]},{"kind":"passive","action":"passive","name":"Trample","body":"The predator can move through enemies' and objects' spaces at their usual speed. Any mundane size 2 or smaller object whose space they move through is destroyed. When the predator enters a creature's space for the first time on a turn, that creature takes 3 damage."},{"kind":"passive","action":"passive","name":"Nature's Spirit","body":"While outdoors or in a natural environment, the predator can negate a bane on their abilities or turn a double bane into a bane."}]}
</script></div>
