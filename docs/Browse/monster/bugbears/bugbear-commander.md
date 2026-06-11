---
agility: 1
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
name: Bugbear Commander
organization: Elite
presence: 0
reason: 2
role: Support
scc: mcdm.monsters.v1/monster.bugbears.statblock/bugbear-commander
size: 1L
speed: 5
stability: 0
stamina: "80"
type: statblock
---

# Bugbear Commander

---

<script type="application/json" class="sc-statblock-data">
{"id":"bugbear-commander","name":"Bugbear Commander","ancestry":"Bugbear, Fey, Goblin, Humanoid","level":"2","role":"Elite Support","roleKey":"support","ev":"16","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Inspiring Swordplay","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; one target is grabbed","low":"7 damage","mid":"10 damage"}},"sections":[{"label":"Effect","text":"One ally within 5 squares of the commander gains an edge on their next strike until the start of the commander's next turn."}]},{"kind":"ability","action":"main","name":"You Next!","usage":"Main Action","keywords":["Ranged"],"distance":"Ranged 8","target":"One ally","sections":[{"label":"Effect","text":"The target moves up to their speed and uses a signature ability."}]},{"kind":"ability","action":"main","name":"Fall Back!","cost":"5 Malice","usage":"Main Action","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target shifts up to their speed, then can use the Throw maneuver."}]},{"kind":"ability","action":"maneuver","name":"Throw","usage":"Maneuver","keywords":["Melee","Strike"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be grabbed by the commander."},{"label":"Effect","text":"The target is vertical pushed up to 4 squares. An ally doesn't take damage from being force moved this way."}]},{"kind":"ability","action":"triggered","name":"Catcher","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance."},{"label":"Effect","text":"The target is grabbed by the commander."}]},{"kind":"passive","action":"passive","name":"The Commander's Watching","body":"Any ally who has line of effect to the commander can end one condition on themself at the start of each of their turns."}]}
</script>
