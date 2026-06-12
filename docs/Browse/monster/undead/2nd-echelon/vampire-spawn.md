---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "6"
free_strike: 2
immunities:
    - Corruption 4
    - poison 4
intuition: 1
keywords:
    - Undead
    - Vampire
level: 4
might: 2
movement: Climb
name: Vampire Spawn
organization: Horde
presence: 2
reason: -1
role: Harrier
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/vampire-spawn
size: 1M
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Vampire Spawn

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"vampire-spawn","name":"Vampire Spawn","ancestry":"Undead, Vampire","level":"4","role":"Horde Harrier","roleKey":"harrier","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Exsanguinating Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"9 corruption damage; M \u003c 3 bleeding (save ends)","low":"5 damage","mid":"7 corruption damage; M \u003c 2 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"The vampire spawn regains Stamina equal to any corruption damage dealt."}],"enhancements":[{"cost":"1 Malice","text":"The target takes an additional 3 corruption damage."}]},{"kind":"ability","action":"maneuver","name":"Vampiric Celerity","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The vampire spawn can shift 1 square, then move up to their speed. The next ability the vampire uses before the start of their next turn gains an edge."}]},{"kind":"passive","action":"passive","name":"Unslakable Bloodthirst","body":"The vampire spawn has speed 10 while any creature within 10 squares of them is bleeding. The vampire spawn must use Exsanguinating Bite against a bleeding creature on their turn if they are able to."}]}
</script></div>
