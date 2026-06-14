---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "3"
free_strike: 1
immunities:
    - Poison 2
intuition: 2
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 0
movement: Climb, swim
name: Angulotl Wave
organization: Horde
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-wave
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Angulotl Wave

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-wave","name":"Angulotl Wave","ancestry":"Angulotl, Humanoid","level":"1","role":"Horde Controller","roleKey":"controller","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Refulgent Beams","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"5 holy damage; R \u003c 2 the target is illuminated (save ends)","low":"3 holy damage","mid":"4 holy damage; R \u003c 1 the target is illuminated (save ends)"}},"sections":[{"label":"Effect","text":"An illuminated creature or object can't hide or become invisible, and any strike made against an illuminated target gains an [edge](../../../rule/dice/edge/)."}]},{"kind":"ability","action":"main","name":"Noxious Bubble","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"2 cube of unoccupied space within 10","target":"Special","powerRoll":{"formula":"","tiers":{"high":"1 poison damage; the target is wet ([EoT](../../../rule/combat/end-of-turn/))","low":"3 poison damage; the target is wet and [weakened](../../../condition/weakened/) (save ends)","mid":"2 poison damage; the target is wet (save ends)"}},"sections":[{"label":"Effect","text":"A bubble of toxic gas fills the area, ready to pop. If any creature or object touches the bubble or if the bubble takes damage, it bursts. Each angulotl adjacent to the bubble is wet until the end of the encounter, and each enemy adjacent to the bubble makes a **[Might](../../../rule/character/might/) test**."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy [grabs](../../../feature/common/maneuvers/grab/) the wave or uses a melee ability against them, that enemy takes 2 poison damage."}]}
</script></div>
