---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 3
intuition: 1
keywords:
    - Dwarf
    - Humanoid
level: 1
might: 0
name: Dwarf Reel Winch
organization: Platoon
presence: 0
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-reel-winch
size: 1M
speed: 5
stability: 2
stamina: "36"
type: statblock
---

# Dwarf Reel Winch

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-reel-winch","name":"Dwarf Reel Winch","ancestry":"Dwarf, Humanoid","level":"1","role":"Platoon Support","roleKey":"support","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"36"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Snaring Crossbow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; M \u003c 2 [slowed](../../../condition/slowed/) (save ends)","low":"5 damage; M \u003c 0 [slowed](../../../condition/slowed/) (save ends)","mid":"7 damage; M \u003c 1 [slowed](../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"The target is [pulled](../../../movement/forced-movement/) up to 5 squares. A target [restrained](../../../condition/restrained/) by a dwarf can be force moved by this ability. This forced movement doesn't end the [restrained](../../../condition/restrained/) condition unless the Director determines otherwise."}]},{"kind":"ability","action":"maneuver","name":"Reel Them In (3 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Ranged","Weapon"],"distance":"Ranged 10","target":"Three creatures","sections":[{"label":"Effect","text":"The target is [pulled](../../../movement/forced-movement/) up to 8 squares. A [restrained](../../../condition/restrained/) or [slowed](../../../condition/slowed/) target can be pulled an additional 2 squares. A target [restrained](../../../condition/restrained/) by a dwarf can be force moved by this ability. This forced movement doesn't end the [restrained](../../../condition/restrained/) condition unless the Director determines otherwise."}]},{"kind":"passive","action":"passive","name":"We Have a Quota!","body":"If a target made [slowed](../../../condition/slowed/) by the reel winch is already [grabbed](../../../condition/grabbed/) or [slowed](../../../condition/slowed/), the [grabbed](../../../condition/grabbed/) and [slowed](../../../condition/slowed/) conditions end and the target is [restrained](../../../condition/restrained/) (save ends)."}]}
</script></div>
