---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "6"
free_strike: 2
immunities:
    - Corruption 4
    - poison 4
intuition: 1
keywords:
    - Undead
level: 4
might: -2
movement: Fly, hover
name: Wraith
organization: Horde
presence: 3
reason: 1
role: Hexer
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/wraith
size: 1M
speed: 8
stability: 1
stamina: "25"
type: statblock
---

# Wraith

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wraith","name":"Wraith","ancestry":"Undead","level":"4","role":"Horde Hexer","roleKey":"hexer","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"25"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Chilling Gravetouch","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"9 cold damage; P \u003c 3 [slowed](../../../../condition/slowed/) (save ends)","low":"5 cold damage; P \u003c 1 [slowed](../../../../condition/slowed/) (save ends)","mid":"7 cold damage; P \u003c 2 [slowed](../../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"Any living creature who dies from this damage rises at the start of the next round as a ghoul craver under the Director's control."}]},{"kind":"ability","action":"maneuver","name":"Hidden Movement","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The wraith turns invisible, moves up to their speed, and is visible again."}]},{"kind":"ability","action":"triggered","name":"Stolen Vitality","cost":"1 [Malice](../../../../rule/monster/malice/)","usage":"Free triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"An enemy within distance regains [Stamina](../../../../rule/health/stamina/)."},{"label":"Effect","text":"The target regains only half the [Stamina](../../../../rule/health/stamina/), and the wraith regains the remaining [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"passive","action":"passive","name":"Agonizing Phasing","body":"The wraith can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the wraith moves through a creature, that creature takes 5 corruption damage and takes a bane on their next strike. The wraith doesn't take damage from being [force moved](../../../../movement/forced-movement/) into objects."}]}
</script></div>
