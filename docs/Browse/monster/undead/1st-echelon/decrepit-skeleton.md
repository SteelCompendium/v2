---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: 3 for four minions
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
    - Soulless
level: 1
might: 0
name: Decrepit Skeleton
organization: Minion
presence: -2
reason: -2
role: Artillery
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/decrepit-skeleton
size: 1M
speed: 5
stability: 0
stamina: "3"
type: statblock
with_captain: Gain an edge on strikes
---

# Decrepit Skeleton

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"decrepit-skeleton","name":"Decrepit Skeleton","ancestry":"Undead, Soulless","level":"1","role":"Minion Artillery","roleKey":"artillery","ev":"3 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"3"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Bone Bow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"2 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"The decrepit skeleton chooses one other target within distance, who takes 1 damage."}]},{"kind":"passive","action":"passive","name":"Bonetrops","body":"When the decrepit skeleton is reduced to 0 Stamina, their space is difficult terrain. The first time any enemy enters this space, the take 1 damage and the effect end."}]}
</script></div>
