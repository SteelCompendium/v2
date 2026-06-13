---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
immunities:
    - Psychic 3
intuition: 2
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
movement: Fly
name: Time Raider Helix
organization: Platoon
presence: 2
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-helix
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# Time Raider Helix

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-helix","name":"Time Raider Helix","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Controller","roleKey":"controller","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Blaster Volley ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Psionic","Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"11 corruption damage; [push](../../../movement/forced-movement/) 6, [prone](../../../condition/prone/)","low":"6 corruption damage; [push](../../../movement/forced-movement/) 2","mid":"8 corruption damage; [push](../../../movement/forced-movement/) 4"}}},{"kind":"ability","action":"maneuver","name":"Kinetic Lane","usage":"Maneuver","keywords":["Area","Psionic","Ranged"],"distance":"4 x 2 line within 10","target":"Special","sections":[{"label":"Effect","text":"The area is a psionically charged treadmill that pushes creatures and objects at high speed in one direction of the helix's choice. Any creature who enters the area or starts their turn there [slides](../../../movement/forced-movement/) 3 squares toward the end of the area in the chosen direction. Each enemy in the area when it first appears takes 3 damage before they slide."}],"enhancements":[{"cost":"3 [Malice](../../rule/monster/malice.md)","text":"The helix creates a second kinetic lane."}]},{"kind":"passive","action":"passive","name":"Foresight","body":"The helix doesn't take a bane on strikes against creatures with concealment."}]}
</script></div>
