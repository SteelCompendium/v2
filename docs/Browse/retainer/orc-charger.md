---
agility: 2
ev: '-'
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 2
name: Orc Charger
organization: Retainer
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/orc-charger
size: 1M
speed: 8
stability: 0
stamina: "21"
type: statblock
---

# Orc Charger

---

<script type="application/json" class="sc-statblock-data">
{"id":"orc-charger","name":"Orc Charger","ancestry":"Humanoid, Orc","level":"1","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Notched Axe","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}}},{"kind":"passive","action":"passive","name":"Relentless","body":"If the charger is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the charger is reduced to 1 Stamina instead."},{"kind":"ability","action":"maneuver","name":"Blood Oath","cost":"Encounter","usage":"Maneuver","keywords":["Self"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Until the start of the charger's next turn, the charger and their mentor each have temporary Stamina equal to their Recovery value and a +2 bonus to speed, and they each gain an edge on reactive tests."}]},{"kind":"ability","action":"main","name":"Mow 'Em Down","cost":"Encounter","usage":"Main action","keywords":["-"],"distance":"Self; See below","target":"Self","sections":[{"label":"Effect","text":"The charger moves in a straight line up to their speed. During this move, they ignore enemy free strikes, and they can make a melee free strike against any creature they move adjacent to."}]},{"kind":"ability","action":"main","name":"Vein Burst","cost":"Encounter","usage":"Main action","keywords":["Area","Psionic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"24 psychic damage","low":"12 psychic damage","mid":"18 psychic damage"}},"sections":[{"label":"Effect","text":"The charger takes psychic damage equal to the number of enemies affected. This damage can't be reducetd in any way."}]}]}
</script>
