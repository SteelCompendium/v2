---
printing: "1.01"
printing_book: "Bestiary"
agility: 4
ev: "9"
free_strike: 3
intuition: 2
keywords:
    - Abyssal
    - Demon
    - Soulraker
level: 7
might: 2
name: Soulraker Praetorian
organization: Horde
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.demons.3rd-echelon.statblock/soulraker-praetorian
size: 1L
speed: 8
stability: 0
stamina: "45"
type: statblock
weaknesses:
    - Holy 5
---

# Soulraker Praetorian

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"soulraker-praetorian","name":"Soulraker Praetorian","ancestry":"Abyssal, Demon, Soulraker","level":"7","role":"Horde Harrier","roleKey":"harrier","ev":"9","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"45"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Barbed Stinger","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature","powerRoll":{"formula":"+ 4","tiers":{"high":"11 poison damage; push 4; A \u003c 4 grabbed","low":"7 poison damage; push 2","mid":"10 poison damage; push 2"}},"sections":[{"label":"Effect","text":"The praetorian can shift into each square the target leaves."}]},{"kind":"ability","action":"triggered","name":"Stinging Departure","cost":"2 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature ends the praetorian's grab."},{"label":"Effect","text":"The praetorian makes a free strike against the target, breaks off part of their stinger in the target, and shifts up to half their speed. The target is bleeding until they remove the stinger fragment as a free maneuver, taking 6 damage in the process."}]},{"kind":"passive","action":"passive","name":"Lethe","body":"While the praetorian is winded, they gain an edge on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Praetorian Buzzing","body":"Any creature who starts their turn with two or more praetorians adjacent to them takes 6 sonic damage."}]}
</script></div>
