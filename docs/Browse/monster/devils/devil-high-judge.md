---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 6
might: 1
movement: Fly
name: Devil High Judge
organization: Leader
presence: 2
reason: 0
scc: mcdm.monsters.v1/monster.devils.statblock/devil-high-judge
size: 1M
speed: 7
stability: 2
stamina: "181"
type: statblock
---

# Devil High Judge

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-high-judge","name":"Devil High Judge","ancestry":"Devil, Infernal","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"181"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Infernal Decree","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 12","target":"Three creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; P \u003c 4 the target can't hide (save ends)","low":"10 damage; P \u003c 2 the target can't hide (save ends)","mid":"15 damage; P \u003c 3 the target can't hide (save ends)"}},"enhancements":[{"cost":"2 Malice","text":"While a target is unable to hide this way, any strike against them made by a devil gains an edge."}]},{"kind":"ability","action":"maneuver","name":"Compel the Jury","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 12","target":"Two creatures","powerRoll":{"formula":"+ 4","tiers":{"high":"I \u003c 4 the target is charmed (save ends)","low":"I \u003c 2 the target is charmed (save ends)","mid":"I \u003c 3 the target is charmed (save ends)"}},"sections":[{"label":"Effect","text":"While charmed this way, a creature treats the high judge as an ally, and the high judge can spend 1 Malice on their turn to make that creature move up to 3 squares."}]},{"kind":"ability","action":"triggered","name":"Devilish Suggestion","cost":"2 Malice","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"The target takes a bane on the strike.","low":"The target is charmed (save ends).","mid":"The high judge chooses a new target for the strike."}},"sections":[{"label":"Trigger","text":"A creature targets the high judge with a strike."},{"label":"Effect","text":"The target makes a **Presence test**."}],"trailing":"While charmed this way, a creature treats the high judge as an ally, and the high judge can spend 1 Malice on their turn to make that creature move up to 3 squares."},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the high judge can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the high judge's true name, the high judge loses their damage immunities, any nondamaging effects of their signature ability, and their Devilish Suggestion triggered action until the end of the encounter."},{"kind":"villain","action":"villain","name":"All Rise","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"7 psychic damage","low":"15 psychic damage; the target is charmed (save ends)","mid":"12 psychic damage; the target is charmed (save ends)"}},"sections":[{"label":"Effect","text":"The target makes a **Presence test**."}],"trailing":"While charmed this way, a creature treats the high judge as an ally, and the high judge can spend 1 Malice on their turn to make that creature move up to 3 squares."},{"kind":"villain","action":"villain","name":"Heed My Decree","cost":"Villain Action 2","keywords":["Area"],"distance":"5 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target shifts up to their speed. The high judge can make each creature charmed by All Rise, Compel the Jury, or Devilish Suggestion move up to half that creature's speed."}]},{"kind":"villain","action":"villain","name":"Deceptive Stratagem","cost":"Villain Action 3","keywords":["Magic","Ranged"],"distance":"Ranged 12","target":"One creature","sections":[{"label":"Effect","text":"If the target is an ally or a creature charmed by All Rise, Compel the Jury, or Devilish Suggestion, the high judge and the target teleport to swap places. Each ally within 12 squares of the high judge can then make a free strike against a target of the high judge's choice. Each creature charmed by All Rise, Compel the Jury, or Devilish Suggestion makes a free strike against a target of the high judge's choice."}]}]}
</script></div>
