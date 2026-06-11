---
agility: 2
ev: "9"
free_strike: 3
immunities:
    - Corruption 7
    - poison 7
intuition: 1
keywords:
    - Undead
    - Vampire
level: 7
might: 4
movement: Climb
name: Vampire
organization: Horde
presence: 1
reason: 1
role: Hexer
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/vampire
size: 1M
speed: 6
stability: 3
stamina: "40"
type: statblock
---

# Vampire

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"vampire","name":"Vampire","ancestry":"Undead, Vampire","level":"7","role":"Horde Hexer","roleKey":"hexer","ev":"9","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Exsanguinating Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"11 corruption damage; M \u003c 4 7 corruption damage and bleeding (save ends)","low":"7 damage; M \u003c 2 bleeding (save ends)","mid":"10 corruption damage; M \u003c 3 5 corruption damage and bleeding (save ends)"}},"sections":[{"label":"Effect","text":"The vampire regains Stamina equal to any corruption damage dealt."}]},{"kind":"ability","action":"main","name":"Vicious Pursuit","cost":"3 Malice","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"11 damage; A \u003c 4 slowed (save ends)","low":"7 damage; A \u003c 2 slowed (save ends)","mid":"10 damage; A \u003c 3 slowed (save ends)"}},"sections":[{"label":"Effect","text":"If the target is bleeding, the vampire shifts up to their speed before using this ability."}]},{"kind":"ability","action":"triggered","name":"Reactive Charm","cost":"2 Malice","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"One enemy","sections":[{"label":"Trigger","text":"A creature makes a strike against the vampire."},{"label":"Effect","text":"The target becomes the new target of the strike."}]},{"kind":"passive","action":"passive","name":"Unslakable Bloodthirst","body":"The vampire has speed 10 while any creature within 10 squares of them is bleeding. The vampire must make a strike against a bleeding creature on their turn if they are able to."}]}
</script></div>
