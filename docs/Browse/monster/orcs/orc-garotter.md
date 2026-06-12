---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "6"
free_strike: 4
intuition: 1
keywords:
    - Humanoid
    - Orc
level: 1
might: 1
name: Orc Garotter
organization: Platoon
presence: -1
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-garotter
size: 1L
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Orc Garotter

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-garotter","name":"Orc Garotter","ancestry":"Humanoid, Orc","level":"1","role":"Platoon Ambusher","roleKey":"ambusher","ev":"6","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Dagger Feint","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; the garroter shifts up to 3 squares","low":"6 damage; the garroter can shift 1 square","mid":"9 damage; the garroter shifts up to 2 squares"}},"sections":[{"label":"Effect","text":"If this ability gains an edge or has a double edge, it deals an extra 4 damage."}]},{"kind":"ability","action":"main","name":"Strangle","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; grabbed; I \u003c 2 dazed (save ends)","low":"6 damage","mid":"9 damage; I \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"While grabbed this way, a target can't communicate or use magic abilities."}]},{"kind":"ability","action":"maneuver","name":"Chroma Cloak","cost":"1 Malice","usage":"Maneuver","keywords":["-"],"distance":"-","target":"-","trailing":"The garroter turns invisible until the end of their turn. This invisibility ends early if they take damage or use an ability."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the garroter is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the garroter is reduced to 1 Stamina instead."}]}
</script></div>
