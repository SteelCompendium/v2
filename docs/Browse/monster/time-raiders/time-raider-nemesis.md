---
agility: 2
ev: "10"
free_strike: 5
immunities:
    - Psychic 3
intuition: 1
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 1
movement: Fly
name: Time Raider Nemesis
organization: Platoon
presence: 0
reason: 2
role: Harrier
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-nemesis
size: 1M
speed: 7
stability: 0
stamina: "50"
type: statblock
---

# Time Raider Nemesis

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-nemesis","name":"Time Raider Nemesis","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Harrier","roleKey":"harrier","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Golden Scythe","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; pull 3; A \u003c 2 restrained (save ends)","low":"7 damage; pull 1","mid":"10 damage; pull 2"}},"sections":[{"label":"Effect","text":"This ability can target creatures on parallel planes of existence and pull them onto the nemesis's plane."}]},{"kind":"ability","action":"main","name":"Kinetic Crush","cost":"2 Malice","usage":"Main action","keywords":["Psionic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"13 psychic damage; M \u003c 2 slowed (save ends)","low":"7 psychic damage; M \u003c 0 slowed (save ends)","mid":"10 psychic damage; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"Any creature slowed this way takes 2 damage for each square they move or are force moved until that condition ends."}]},{"kind":"passive","action":"passive","name":"Foresight","body":"The nemesis doesn't take a bane on strikes against creatures with concealment."}]}
</script></div>
