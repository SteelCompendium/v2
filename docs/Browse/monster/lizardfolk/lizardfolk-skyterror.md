---
agility: 2
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Lizardfolk
level: 1
might: 1
movement: Swim
name: Lizardfolk Skyterror
organization: Platoon
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.lizardfolk.statblock/lizardfolk-skyterror
size: 1S
speed: 7
stability: 0
stamina: "30"
type: statblock
---

# Lizardfolk Skyterror

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lizardfolk-skyterror","name":"Lizardfolk Skyterror","ancestry":"Humanoid, Lizardfolk","level":"1","role":"Platoon Harrier","roleKey":"harrier","ev":"6","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Glaive Rush","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; prone","low":"5 damage","mid":"7 damage"}},"sections":[{"label":"Effect","text":"If the skyterror is flying, they shift up to 4 squares."}]},{"kind":"ability","action":"main","name":"Poison Blow Dart","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage; M \u003c 2 weakened (save ends)","low":"3 damage; M \u003c 0 weakened (save ends)","mid":"5 damage; M \u003c 1 weakened (save ends)"}},"sections":[{"label":"Effect","text":"Any creature who ends their turn adjacent to a target weakened this way is weakened until the end of their next turn."}]},{"kind":"passive","action":"passive","name":"Glider","body":"Whenever the skyterror moves 2 or more squares along the ground or falls 2 or more squares, they can fly until the end of their next turn."},{"kind":"passive","action":"passive","name":"Reptilian Escape","body":"While the skyterror has a tail, whenever they are grabbed, prone, slowed, or weakened, they can lose their tail to immediately end that condition, then shift up to 2 squares."}]}
</script></div>
