---
agility: 0
ev: "10"
free_strike: 5
intuition: 0
keywords:
    - Dwarf
    - Humanoid
level: 3
might: 2
name: Dwarf Shieldwall
organization: Platoon
presence: 1
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-shieldwall
size: 1M
speed: 5
stability: 4
stamina: "72"
type: statblock
---

# Dwarf Shieldwall

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-shieldwall","name":"Dwarf Shieldwall","ancestry":"Dwarf, Humanoid","level":"3","role":"Platoon Defender","roleKey":"defender","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"72"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Wide Axe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; slide 1","low":"7 damage; slide 1","mid":"10 damage; slide 1"}},"sections":[{"label":"Effect","text":"The shieldwall can shift 1 square to remain adjacent to the target. A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}],"enhancements":[{"cost":"3 Malice","text":"This ability targets one additional target."}]},{"kind":"ability","action":"triggered","name":"Intercepting Shield","cost":"1 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature makes a strike against an ally adjacent to the shieldwall."},{"label":"Effect","text":"The shieldwall becomes the target of the triggering strike and halves the damage."}]},{"kind":"passive","action":"passive","name":"Call to the Wall","body":"Whenever a creature deals damage to or takes damage from the shieldwall, the shieldwall can make that creature taunted until the end of the creature's next turn."}]}
</script></div>
