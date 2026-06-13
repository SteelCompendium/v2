---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "16"
free_strike: 5
intuition: 2
keywords:
    - Bugbear
    - Fey
    - Goblin
    - Humanoid
level: 2
might: 1
name: Bugbear Channeler
organization: Elite
presence: 2
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.bugbears.statblock/bugbear-channeler
size: 1L
speed: 5
stability: 0
stamina: "60"
type: statblock
---

# Bugbear Channeler

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"bugbear-channeler","name":"Bugbear Channeler","ancestry":"Bugbear, Fey, Goblin, Humanoid","level":"2","role":"Elite Controller","roleKey":"controller","ev":"16","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Shadow Drag","cost":"Signature","usage":"Main Action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; pull 4","low":"7 damage; pull 2","mid":"10 damage; pull 3"}},"sections":[{"label":"Effect","text":"Each target must be on the ground, and each square a target is pulled through is difficult terrain for enemies."}]},{"kind":"ability","action":"main","name":"Blistering Element","usage":"Main Action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"4 damage; M \u003c 2 bleeding (save ends)","low":"2 damage; M \u003c 0 bleeding (save ends)","mid":"3 damage; M \u003c 1 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"The channeler chooses one of the following damage types: acid, cold, corruption, fire, or poison."}]},{"kind":"ability","action":"main","name":"Twist Shape","cost":"5 Malice","usage":"Main Action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"11 corruption damage; P \u003c 2 the target is shapechanged (save ends)","low":"5 corruption damage; P \u003c 0 slowed (save ends)","mid":"8 corruption damage; P \u003c 1 the target is shapechanged (save ends)"}},"sections":[{"label":"Effect","text":"A shapechanged creature is slowed and has fire weakness 10 as their limbs stretch and their skin becomes paper thin."}]},{"kind":"ability","action":"maneuver","name":"Throw","usage":"Maneuver","keywords":["Melee","Strike"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be grabbed by the channeler."},{"label":"Effect","text":"The target is vertical pushed up to 3 squares. An ally doesn't take damage from being force moved this way."}]},{"kind":"ability","action":"triggered","name":"Catcher","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance."},{"label":"Effect","text":"The target is grabbed by the channeler."}]},{"kind":"ability","action":"triggered","name":"Shadow Veil","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering ally","sections":[{"label":"Trigger","text":"An ally within distance takes damage."},{"label":"Effect","text":"The target is wrapped in shadow and halves the damage. The target can't be targeted by strikes until the start of their next turn."}]}]}
</script></div>
