---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: 3 for four minions
free_strike: 2
intuition: 1
keywords:
    - Humanoid
    - Lizardfolk
level: 1
might: 0
movement: Swim
name: Lizardfolk Tonguer
organization: Minion
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.lizardfolk.statblock/lizardfolk-tonguer
size: 1S
speed: 5
stability: 0
stamina: "3"
type: statblock
with_captain: +1 bonus to strikes
---

# Lizardfolk Tonguer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lizardfolk-tonguer","name":"Lizardfolk Tonguer","ancestry":"Humanoid, Lizardfolk","level":"1","role":"Minion Artillery","roleKey":"artillery","ev":"3 for four minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"3"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Tonguelash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 8","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; pull 3, or the tonguer shifts up to 3 squares toward the target","low":"2 damage; pull 1, or the tonguer can shift 1 square toward the target","mid":"4 damage; pull 2, or the tonguer shifts up to 2 squares toward the target"}},"sections":[{"label":"Effect","text":"If the forced movement or the shift leaves the target adjacent to the tonguer, the target is also grabbed."}]},{"kind":"passive","action":"passive","name":"Reptilian Escape","body":"While the tonguer has a tail, whenever they are grabbed, prone, slowed, or weakened, they can lose their tail to immediately end that condition, then shift up to 2 squares."}]}
</script></div>
