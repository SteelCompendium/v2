---
agility: 1
ev: "28"
free_strike: 7
intuition: 0
keywords:
    - Giant
    - Troll
level: 5
might: 3
name: Troll Glutton
organization: Elite
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.trolls.statblock/troll-glutton
size: "2"
speed: 6
stability: 4
stamina: "160"
type: statblock
weaknesses:
    - Acid 5
    - fire
---

# Troll Glutton

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"troll-glutton","name":"Troll Glutton","ancestry":"Giant, Troll","level":"5","role":"Elite Brute","roleKey":"brute","ev":"28","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"160"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"Acid 5, fire","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Voracious Mastication","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage; M \u003c 3 slowed (save ends)","low":"10 damage","mid":"15 damage; M \u003c 2 slowed (save ends)"}},"enhancements":[{"cost":"1 Malice","text":"The glutton regains Stamina equal to the damage dealt."}]},{"kind":"ability","action":"main","name":"Crash Through","cost":"3 Malice","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The glutton shifts up to their speed in a straight line, ignoring difficult terrain. The first time during this movement that the glutton moves through the space of a creature or object their size or smaller, that creature or object takes 10 damage, or a creature can choose to fall prone instead. If the glutton moves into a creature or object larger than them and doesn't knock the creature prone or destroy the object, the glutton's movement ends and they are dazed until the end of their next turn."}]},{"kind":"ability","action":"maneuver","name":"Food Frenzy","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Until the start of their next turn, the glutton has a double edge on strikes, and strikes made against them gain an edge."}]},{"kind":"ability","action":"triggered","name":"Spiteful Retort","cost":"1 Malice","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature","sections":[{"label":"Trigger","text":"The glutton is reduced to 0 Stamina but doesn't die."},{"label":"Effect","text":"The glutton uses Voracious Mastication against an adjacent creature."}]},{"kind":"passive","action":"passive","name":"Insatiable Appetite","body":"Once per turn, the glutton can use the Charge main actionas a free maneuver if they target a winded creature."},{"kind":"passive","action":"passive","name":"Relentless Hunger","body":"The glutton dies only if they are reduced to 0 Stamina by acid or fire damage, if they end their turn with 0 Stamina, or if they take acid or fire damage while at 0 Stamina."}]}
</script></div>
