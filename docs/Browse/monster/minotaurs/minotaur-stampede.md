---
agility: 5
ev: 12 for four minions
free_strike: 4
intuition: 2
keywords:
    - Accursed
    - Humanoid
    - Minotaur
    - Swarm
level: 10
might: 5
name: Minotaur Stampede
organization: Minion
presence: -1
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.minotaurs.statblock/minotaur-stampede
size: "4"
speed: 8
stability: 2
stamina: "17"
type: statblock
with_captain: Gain an edge on strikes
---

# Minotaur Stampede

---

<script type="application/json" class="sc-statblock-data">
{"id":"minotaur-stampede","name":"Minotaur Stampede","ancestry":"Accursed, Humanoid, Minotaur, Swarm","level":"10","role":"Minion Defender","roleKey":"defender","ev":"12 for four minions","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"17"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+5"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Bull Rush","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object per minion","powerRoll":{"formula":"+ 5","tiers":{"high":"9 damage; prone; M \u003c 5 can't stand (save ends)","low":"4 damage","mid":"7 damage; prone"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the Charge main action, each creature the stampede moves through who has M \u003c 4 is knocked prone."}]},{"kind":"passive","action":"passive","name":"Swarm","body":"The stampede can move through spaces as if they were a size 2 creature, and can occupy other creatures' spaces. At the start of each of the stampede's turns, they can make a free strike against each creature whose space they share."}]}
</script>
