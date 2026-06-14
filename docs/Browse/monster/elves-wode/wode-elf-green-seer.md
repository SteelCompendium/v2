---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "6"
free_strike: 3
intuition: 2
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 1
might: 0
name: Wode Elf Green Seer
organization: Platoon
presence: 1
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-green-seer
size: 1M
speed: 7
stability: 0
stamina: "20"
type: statblock
---

# Wode Elf Green Seer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-green-seer","name":"Wode Elf Green Seer","ancestry":"Fey, Humanoid, Wode Elf","level":"1","role":"Platoon Hexer","roleKey":"hexer","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"The Forest's Embrace","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; I \u003c 2 [restrained](../../../condition/restrained/) (save ends)","low":"5 damage","mid":"7 damage; I \u003c 1 [restrained](../../../condition/restrained/) (save ends)"}},"sections":[{"label":"Effect","text":"While [restrained](../../../condition/restrained/) this way, a target can't search for hidden creatures."}]},{"kind":"ability","action":"maneuver","name":"The Natural Cycle","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures","powerRoll":{"formula":"+ 2","tiers":{"high":"6 damage; P \u003c 1 [bleeding](../../../condition/bleeding/) (save ends); the target has a double bane on strikes (save ends)","low":"2 damage","mid":"4 damage; P \u003c 1 [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"While [bleeding](../../../condition/bleeding/) or [weakened](../../../condition/weakened/) this way, a target is covered in lichen."}]},{"kind":"ability","action":"triggered","name":"Foreseen Punishment","usage":"Free triggered action","keywords":["Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature uses a triggered action targeting the green seer or an ally within distance."},{"label":"Effect","text":"The green seer makes a [free strike](../../../feature/common/main-actions/free-strike/) against the target after the target's triggered action is resolved."}]},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the green seer that would take a bane from cover or concealment have a double bane instead."}]}
</script></div>
