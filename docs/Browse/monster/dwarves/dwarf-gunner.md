---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "6"
free_strike: 4
intuition: 1
keywords:
    - Dwarf
    - Humanoid
level: 1
might: 0
name: Dwarf Gunner
organization: Platoon
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-gunner
size: 1M
speed: 5
stability: 1
stamina: "26"
type: statblock
---

# Dwarf Gunner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-gunner","name":"Dwarf Gunner","ancestry":"Dwarf, Humanoid","level":"1","role":"Platoon Artillery","roleKey":"artillery","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"26"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Portable Ballista","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; push 5","low":"6 damage; push 1","mid":"9 damage; push 3"}},"sections":[{"label":"Effect","text":"If the target is adjacent to an object or a wall after the power roll is resolved, they are restrained until the end of their next turn. A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}],"enhancements":[{"cost":"5 Malice","text":"If the target is pushed into another creature, the target and the creature are each restrained until the end of their next turn."}]},{"kind":"ability","action":"maneuver","name":"Ensnaring Chains","cost":"5 Malice","usage":"Maneuver","keywords":["Ranged","Weapon"],"distance":"Ranged 10","target":"One prone, restrained, or slowed creature","sections":[{"label":"Effect","text":"The gunner makes a free strike against the target, and the prone, restrained, and slowed conditions on the target end. The target is then restrained (save ends)."}]},{"kind":"passive","action":"passive","name":"Split Shot","body":"Whenever the gunner deals rolled damage to a target, one creature or object adjacent to the target takes 3 damage."}]}
</script></div>
