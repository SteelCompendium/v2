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
level: 7
might: 4
name: Koptourok
organization: Horde
presence: -1
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/koptourok
size: 1M
speed: 5
stability: 1
stamina: "40"
type: statblock
---

# Koptourok

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"koptourok","name":"Koptourok","ancestry":"Undead","level":"7","role":"Horde Hexer","roleKey":"hexer","ev":"9","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Choking Grasp","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 5","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"11 damage; M \u003c 4 grabbed","low":"7 damage; M \u003c 2 grabbed","mid":"10 damage; M \u003c 3 grabbed"}},"sections":[{"label":"Effect","text":"A creature grabbed this way is suffocating. The koptourok can have up to two creatures grabbed at once."}]},{"kind":"ability","action":"main","name":"Inhale","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"Pull 7; M \u003c 4 5 corruption damage","low":"Pull 3; M \u003c 2 5 corruption damage","mid":"Pull 5; M \u003c 3 5 corruption damage"}},"sections":[{"label":"Effect","text":"This ability gains an edge against any target grabbed by the koptourok. If one or more targets are pulled adjacent to the koptourok, the koptourok can fly until the end of the encounter."}]},{"kind":"passive","action":"passive","name":"Exhale","body":"The first time the koptourok is made winded by damage that isn't fire damage or holy damage, each enemy within 3 squares of them takes 8 corruption damage. Any enemy who takes this damage and has M \u003c 3 is also weakened (save ends)"}]}
</script></div>
