---
agility: 1
ev: "6"
free_strike: 4
intuition: 0
keywords:
    - Humanoid
    - Lizardfolk
level: 1
might: 2
movement: Swim
name: Lizardfolk Scaletooth
organization: Platoon
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.lizardfolk.statblock/lizardfolk-scaletooth
size: 1M
speed: 5
stability: 0
stamina: "46"
type: statblock
---

# Lizardfolk Scaletooth

---

<script type="application/json" class="sc-statblock-data">
{"id":"lizardfolk-scaletooth","name":"Lizardfolk Scaletooth","ancestry":"Humanoid, Lizardfolk","level":"1","role":"Platoon Brute","roleKey":"brute","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"46"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Razor Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; A \u003c 2 bleeding (save ends)","low":"6 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"If the scaletooth has the target grabbed, the potency of this ability increases by 1."}]},{"kind":"ability","action":"main","name":"Tail Whip","cost":"2 Malice","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"10 damage; slide 3; M \u003c 2 grabbed if within 2 squares of the scaletooth","low":"5 damage; slide 1","mid":"8 damage; slide 2; M \u003c 1 grabbed if within 2 squares of the scaletooth"}}},{"kind":"passive","action":"passive","name":"Reptilian Escape","body":"While the scaletooth has a tail, whenever they are grabbed, prone, slowed, or weakened, they can lose their tail to immediately end that condition, then shift up to 2 squares."}]}
</script>
