---
agility: 4
ev: 9 for four minions
free_strike: 3
immunities:
    - Corruption 7
    - poison 7
intuition: 1
keywords:
    - Undead
level: 7
might: -3
movement: Fly, hover
name: Faded Echo Spirit
organization: Minion
presence: -3
reason: -5
role: Hexer
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/faded-echo-spirit
size: 1M
speed: 5
stability: 1
stamina: "10"
type: statblock
with_captain: Gain an edge on strikes
---

# Faded Echo Spirit

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"faded-echo-spirit","name":"Faded Echo Spirit","ancestry":"Undead","level":"7","role":"Minion Hexer","roleKey":"hexer","ev":"9 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-3"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"-5"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Hollow Grasp","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 4","tiers":{"high":"7 corruption damage; P \u003c 4 weakened","low":"3 corruption damage","mid":"6 corruption damage; P \u003c 3 weakened"}},"sections":[{"label":"Effect","text":"This weakened condition ends if an affected target ends their turn with no spirit within 5 squares of them."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The spirit can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the spirit moves through a creature, that creature takes 4 corruption damage. The spirit doesn't take damage from being force moved into objects."}]}
</script></div>
