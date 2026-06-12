---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "60"
free_strike: 3
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 1
name: Gnoll Gnasher
organization: Retainer
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/gnoll-gnasher
size: 1M
speed: 7
stability: 1
stamina: "30"
type: statblock
---

# Gnoll Gnasher

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-gnasher","name":"Gnoll Gnasher","ancestry":"Abyssal, Gnoll","level":"2","role":"Retainer Harrier","roleKey":"harrier","ev":"60","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Gnash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"10 damage; M \u003c STRONG bleeding (save ends)","low":"4 damage","mid":"7 damage"}}},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-minion ally within 7 squares of the gnasher is reduced to 0 Stamina, the gnasher moves up to their speed and can make a melee free strike."},{"kind":"ability","action":"triggered","name":"Frenzied Bite","cost":"Encounter","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"An enemy within 5 squares is reduced to 0 Stamina."},{"label":"Effect","text":"The gnasher moves up to their speed and can use their signature ability."}]},{"kind":"ability","action":"main","name":"Flurry of Fangs","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Three creatures or objects","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage","low":"7 damage","mid":"11 damage"}}},{"kind":"ability","action":"main","name":"Horrific Feas","cost":"Encounter","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The gnasher reduces a creature to 0 Stamina."},{"label":"Effect","text":"The gnasher consumes part of the target's body. The gnasher can spend a Recovery, and each enemy within 5 squares of the gnasher who has I \u003c AVERAGE is frightened (save ends)."}]}]}
</script></div>
