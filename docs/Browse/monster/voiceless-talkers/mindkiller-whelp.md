---
agility: 3
ev: 8 for four minions
free_strike: 3
immunities:
    - Psychic 6
intuition: 1
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: -1
movement: Fly, hover
name: Mindkiller Whelp
organization: Minion
presence: 0
reason: 1
role: Hexer
scc: mcdm.monsters.v1/monster.voiceless-talkers.statblock/mindkiller-whelp
size: 1S
speed: 4
stability: 0
stamina: "9"
type: statblock
with_captain: +2 damage bonus to strikes
---

# Mindkiller Whelp

---

<script type="application/json" class="sc-statblock-data">
{"id":"mindkiller-whelp","name":"Mindkiller Whelp","ancestry":"Horror, Voiceless Talker","level":"6","role":"Minion Hexer","roleKey":"hexer","ev":"8 for four minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"4"},{"l":"Stamina","v":"9"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Psychic 6","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Eager Claws","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"7 damage; the target takes a bane on their next strike","low":"3 damage","mid":"5 damage; the target takes a bane on their next strike"}}},{"kind":"ability","action":"triggered","name":"Feast","usage":"Triggered action","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The whelp reduces a non-minion creature to 0 Stamina."},{"label":"Effect","text":"The whelp transforms into a mindkiller whose Stamina equals their squad's Stamina pool before transforming. The Stamina pool then loses the whelp's Stamina."}]},{"kind":"passive","action":"passive","name":"Psionic Conductor","body":"Whenever a non-minion voiceless talker within 5 squares of the whelp uses a psionic ability, they can do so as if they were in the whelp's space."}]}
</script>
