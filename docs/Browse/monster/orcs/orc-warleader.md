---
agility: 2
ev: "20"
free_strike: 5
intuition: 2
keywords:
    - Humanoid
    - Orc
level: 3
might: 3
name: Orc Warleader
organization: Leader
presence: 2
reason: 1
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-warleader
size: 1M
speed: 6
stability: 2
stamina: "120"
type: statblock
---

# Orc Warleader

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-warleader","name":"Orc Warleader","ancestry":"Humanoid, Orc","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Go.","cost":"Signature","usage":"Main action","keywords":["Ranged"],"distance":"Ranged 10","target":"One ally","sections":[{"label":"Effect","text":"The target moves up to their speed and can use a main action."}],"enhancements":[{"cost":"1 Malice","text":"The warleader targets two allies."},{"cost":"3 Malice","text":"The warleader targets one ally and a minion squad."}]},{"kind":"ability","action":"main","name":"Mace Lariat","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Each enemy","powerRoll":{"formula":"+ 3","tiers":{"high":"13 damage; push 5; M \u003c 3 dazed (save ends)","low":"7 damage; push 1; M \u003c 1 dazed (save ends)","mid":"10 damage; push 3; M \u003c 2 dazed (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Lockdown","cost":"3 Malice","usage":"Maneuver","keywords":["Ranged"],"distance":"Self and ranged 10","target":"Self and three allies","sections":[{"label":"Effect","text":"Each target moves up to their speed and can use the Grab maneuver, which gains an edge."}]},{"kind":"ability","action":"triggered","name":"Courtesy Call","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"One creature","sections":[{"label":"Trigger","text":"The target obtains a tier 1 outcome on one power roll."},{"label":"Effect","text":"The target has a double edge on their next power roll before the end of the encounter."}]},{"kind":"villain","action":"villain","name":"Close In","cost":"Villain Action 1","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"Frightened of the warleader (save ends)","mid":"Frightened of the warleader (EoT)"}},"sections":[{"label":"Effect","text":"Each target moves up to their speed. Each enemy adjacent to a target after this move makes an Intuition test."}]},{"kind":"villain","action":"villain","name":"Familial Reinforcements","cost":"Villain Action 2","keywords":["Ranged"],"distance":"Ranged 10","target":"Self","sections":[{"label":"Effect","text":"The warleader shifts up to their speed, and four orc blitzers appear in unoccupied spaces within distance."}]},{"kind":"villain","action":"villain","name":"I'll Do This Myself","cost":"Villain Action 3","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Three times in succession, the warleader shifts up to their speed and can use Mace Lariat."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the warleader can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the warleader is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the warleader is reduced to 1 Stamina instead."}]}
</script></div>
