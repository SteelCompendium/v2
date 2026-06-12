---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "10"
free_strike: 5
intuition: -1
keywords:
    - Humanoid
    - Orc
level: 3
might: 2
name: Orc Juggernaut
organization: Platoon
presence: 2
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-juggernaut
size: 1L
speed: 6
stability: 0
stamina: "60"
type: statblock
---

# Orc Juggernaut

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-juggernaut","name":"Orc Juggernaut","ancestry":"Humanoid, Orc","level":"3","role":"Platoon Brute","roleKey":"brute","ev":"10","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Haymaker Greataxe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; prone; M \u003c 2 bleeding (save ends)","low":"7 damage","mid":"11 damage; prone"}},"sections":[{"label":"Effect","text":"A target who is already prone takes an extra 6 damage."}]},{"kind":"ability","action":"triggered","name":"Hrraaaaaagh!","cost":"1 Malice","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The juggernaut takes damage."},{"label":"Effect","text":"The juggernaut moves up to their speed and can make a free strike."}]},{"kind":"passive","action":"passive","name":"Blood in the Water","body":"Whenever the juggernaut willingly moves, they can move 3 additional squares if they end their movement closer to a prone creature."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the juggernaut is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the juggernaut is reduced to 1 Stamina instead."}]}
</script></div>
