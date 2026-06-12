---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "3"
free_strike: 1
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
level: 1
might: -5
movement: Fly, hover
name: Specter
organization: Horde
presence: 2
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/specter
size: 1M
speed: 5
stability: 1
stamina: "10"
type: statblock
---

# Specter

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"specter","name":"Specter","ancestry":"Undead","level":"1","role":"Horde Hexer","roleKey":"hexer","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-5"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Decaying Touch","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"5 corruption damage; P \u003c 2 weakened (save ends)","low":"3 corruption damage; P \u003c 0 weakened (save ends)","mid":"4 corruption damage; P \u003c 1 weakened (save ends)"}},"enhancements":[{"cost":"2 Malice","text":"The potency increases by 1. Any living creature who dies from this damage rises at the start of the next round in the target's space as a specter under the Director's control."}]},{"kind":"ability","action":"maneuver","name":"Hidden Movement","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The specter turns invisible, moves up to their speed, and is visible again."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The specter can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the specter moves through a creature, that creature takes 2 corruption damage. The specter doesn't take damage from being force moved into objects."}]}
</script></div>
