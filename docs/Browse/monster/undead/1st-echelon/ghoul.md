---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 1
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
level: 1
might: 0
name: Ghoul
organization: Horde
presence: -1
reason: -2
role: Harrier
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/ghoul
size: 1M
speed: 7
stability: 0
stamina: "15"
type: statblock
---

# Ghoul

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ghoul","name":"Ghoul","ancestry":"Undead","level":"1","role":"Horde Harrier","roleKey":"harrier","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Razor Claws","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; M \u003c 2 [bleeding](../../../../condition/bleeding/) (save ends)","low":"3 damage","mid":"4 damage"}}},{"kind":"ability","action":"maneuver","name":"Leap","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The ghoul jumps up to 3 squares. If they land on a size 1 enemy, that enemy is knocked [prone](../../../../condition/prone/) and the ghoul can make a [free strike](../../../../feature/common/main-actions/free-strike/) against them."}]},{"kind":"passive","action":"passive","name":"Arise","body":"The first time the ghoul is reduced to 0 [Stamina](../../../../rule/health/stamina/) by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 1 [Stamina](../../../../rule/health/stamina/) and fall [prone](../../../../condition/prone/)."},{"kind":"passive","action":"passive","name":"Hunger","body":"When the ghoul uses the Charge main action, they gain a +2 bonus to speed until the end of their turn."}]}
</script></div>
