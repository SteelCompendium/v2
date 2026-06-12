---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Bugbear
    - Fey
    - Goblin
    - Humanoid
level: 2
might: 2
name: Bugbear Roughneck
organization: Elite
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.bugbears.statblock/bugbear-roughneck
size: 1L
speed: 6
stability: 0
stamina: "109"
type: statblock
---

# Bugbear Roughneck

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"bugbear-roughneck","name":"Bugbear Roughneck","ancestry":"Bugbear, Fey, Goblin, Humanoid","level":"2","role":"Elite Brute","roleKey":"brute","ev":"16","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"109"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Haymaker","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; one target is grabbed; one target is vertical pushed up to 3 squares","low":"7 damage","mid":"11 damage; one target is grabbed; one target is pushed up to 2 squares"}},"enhancements":[{"cost":"5 Malice","text":"The ability takes the Area keyword and loses the Strike keyword, its distance becomes a 1 burst, and it targets each enemy in the area."}]},{"kind":"ability","action":"main","name":"Leaping Fury","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; M \u003c 3 prone","low":"8 damage; M \u003c 1 prone","mid":"13 damage; M \u003c 2 prone"}},"sections":[{"label":"Effect","text":"The roughneck can jump up to 5 squares to an unoccupied space within distance of the target before making this strike."}]},{"kind":"ability","action":"maneuver","name":"Drag Through Hell","cost":"3 Malice","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be grabbed by the roughneck."},{"label":"Effect","text":"The roughneck moves up to their speed across the ground, dragging the target with them. The target takes 2 damage for each square they were dragged through. When this movement ends, the target is no longer grabbed and falls prone. Each square the target was dragged through is difficult terrain for enemies."}]},{"kind":"ability","action":"maneuver","name":"Throw","usage":"Maneuver","keywords":["Melee","Strike"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be grabbed by the roughneck."},{"label":"Effect","text":"The target is vertical pushed up to 5 squares. An ally doesn't take damage from being force moved this way."}]},{"kind":"ability","action":"triggered","name":"Catcher","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance."},{"label":"Effect","text":"The target is grabbed by the roughneck."}]},{"kind":"ability","action":"triggered","name":"Flying Sawblade","usage":"Triggered action","keywords":["Melee"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The roughneck is vertical force moved by another creature."},{"label":"Effect","text":"The roughneck uses Haymaker against a creature or object at any point during the forced movement, or after falling as a result of it."}]}]}
</script></div>
