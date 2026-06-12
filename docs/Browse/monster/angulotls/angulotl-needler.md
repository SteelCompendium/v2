---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 2
immunities:
    - Poison 2
intuition: 0
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 0
movement: Climb, swim
name: Angulotl Needler
organization: Horde
presence: -1
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-needler
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Angulotl Needler

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-needler","name":"Angulotl Needler","ancestry":"Angulotl, Humanoid","level":"1","role":"Horde Artillery","roleKey":"artillery","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Blowgun","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"7 poison damage","low":"4 poison damage","mid":"6 poison damage"}},"enhancements":[{"cost":"2 [Malice](../../rule/monster/malice.md)","text":"A target who has M \u003c 2 is [weakened](../../../condition/weakened/) (save ends). A target [weakened](../../../condition/weakened/) this way takes 2 poison damage at the start of each of their turns."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy [grabs](../../../feature/common/maneuvers/grab/) the needler or uses a melee ability against them, that enemy takes 2 poison damage."}]}
</script></div>
