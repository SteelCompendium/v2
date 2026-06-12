---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
intuition: 1
keywords:
    - Humanoid
    - Orc
level: 3
might: 2
name: Orc Bloodrunner
organization: Platoon
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-bloodrunner
size: 1M
speed: 8
stability: 0
stamina: "50"
type: statblock
---

# Orc Bloodrunner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-bloodrunner","name":"Orc Bloodrunner","ancestry":"Humanoid, Orc","level":"3","role":"Platoon Harrier","roleKey":"harrier","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Shield Bash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; push special or prone","low":"7 damage; push special","mid":"10 damage; push special"}},"sections":[{"label":"Effect","text":"The forced movement distance is equal to the number of squares the bloodrunner moved on their turn before using this ability. An ally targeted by this ability ignores the damage and can move up to that same distance."}],"enhancements":[{"cost":"2 Malice","text":"An ally targeted by this ability can make a free strike after the forced movement is resolved."}]},{"kind":"passive","action":"passive","name":"Unimpeded","body":"The bloodrunner can end their movement in a prone creature's space. The first time on a turn that a bloodrunner enters any creature's space, that creature takes 3 damage."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the bloodrunner is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the bloodrunner is reduced to 1 Stamina instead."}]}
</script></div>
