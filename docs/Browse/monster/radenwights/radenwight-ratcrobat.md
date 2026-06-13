---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Radenwight
level: 1
might: -1
movement: Climb
name: Radenwight Ratcrobat
organization: Platoon
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.radenwights.statblock/radenwight-ratcrobat
size: 1S
speed: 7
stability: 0
stamina: "30"
type: statblock
---

# Radenwight Ratcrobat

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"radenwight-ratcrobat","name":"Radenwight Ratcrobat","ancestry":"Humanoid, Radenwight","level":"1","role":"Platoon Harrier","roleKey":"harrier","ev":"6","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"En Garde ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage","low":"4 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"The ratcrobat [shifts](../../../movement/shifting/) up to 2 squares after striking the first target, then can [shift](../../../movement/shifting/) 1 square after striking the second target."}]},{"kind":"ability","action":"maneuver","name":"Over Here, Thanks","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One enemy","sections":[{"label":"Effect","text":"The ratcrobat [slides](../../../movement/forced-movement/) the target up to 3 squares, then can [shift](../../../movement/shifting/) into any square the target left."}]},{"kind":"ability","action":"triggered","name":"Ready Rodent","usage":"Triggered action","keywords":["Melee","Weapon"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Trigger","text":"An ally deals damage to the target."},{"label":"Effect","text":"The ratcrobat makes a [free strike](../../../feature/common/main-actions/free-strike/) against the target."}]},{"kind":"passive","action":"passive","name":"Gymratstics","body":"The ratcrobat gains an edge on [strikes](../../../rule/combat/strike/) against larger creatures."}]}
</script></div>
