---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "12"
free_strike: 4
intuition: 0
keywords:
    - Dwarf
    - Humanoid
level: 1
might: 2
movement: Climb
name: Servitor War Walker
organization: Elite
presence: -2
reason: -2
role: Mount
scc: mcdm.monsters.v1/monster.dwarves.statblock/servitor-war-walker
size: "3"
speed: 8
stability: 2
stamina: "60"
type: statblock
---

# Servitor War Walker

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"servitor-war-walker","name":"Servitor War Walker","ancestry":"Dwarf, Humanoid","level":"1","role":"Elite Mount","roleKey":"mount","ev":"12","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Grasping Claws","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; M \u003c 2 [restrained](../../../condition/restrained/) (save ends)","low":"6 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"A target already [restrained](../../../condition/restrained/) or [restrained](../../../condition/restrained/) by this ability is [pulled](../../../movement/forced-movement/) up to 3 squares. A target [restrained](../../../condition/restrained/) by a dwarf can be force moved by this ability. This forced movement doesn't end the [restrained](../../../condition/restrained/) condition unless the Director determines otherwise."}]},{"kind":"ability","action":"maneuver","name":"Stunning Blast","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"7 lightning damage; A \u003c 2 [slowed](../../../condition/slowed/) (save ends)","low":"3 lightning damage; A \u003c 0 [slowed](../../../condition/slowed/) (save ends)","mid":"6 lightning damage; A \u003c 1 [slowed](../../../condition/slowed/) (save ends)"}}},{"kind":"passive","action":"passive","name":"Cupola","body":"While riding the war walker, three size 1 allies can occupy the same space. Creatures riding the war walker have cover."},{"kind":"passive","action":"passive","name":"Mobile Prison Harness","body":"Any [restrained](../../../condition/restrained/) or [slowed](../../../condition/slowed/) creature who comes [adjacent](../../../rule/combat/adjacent/) to the war walker is automatically [restrained](../../../condition/restrained/) (save ends) and takes a bane on power rolls. A creature [restrained](../../../condition/restrained/) this way moves with the war walker."}]}
</script></div>
