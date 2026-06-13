---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 6
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 2
name: Kobold Shieldbearer
organization: Retainer
presence: 0
reason: 0
role: Defender
scc: mcdm.monsters.v1/retainer.statblock/kobold-shieldbearer
size: "2"
speed: 5
stability: 4
stamina: "21"
type: statblock
---

# Kobold Shieldbearer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-shieldbearer","name":"Kobold Shieldbearer","ancestry":"Humanoid, Kobold","level":"1","role":"Retainer Defender","roleKey":"defender","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gladius","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage; [taunted](../../condition/taunted/) (EoT)","low":"3 damage","mid":"5 damage"}}},{"kind":"passive","action":"passive","name":"Shield, Boss?","body":"While the shieldbearer is [adjacent](../../rule/combat/adjacent/) to their mentor, both have a +1 bonus to [stability](../../rule/character/stability/), have [cover](../../rule/combat/cover/), and grant [cover](../../rule/combat/cover/) to allies."},{"kind":"ability","action":"triggered","name":"Shield Block","cost":"Encounter","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 5","target":"The shieldbearer's mentor","sections":[{"label":"Trigger","text":"The mentor takes damage from a strike while within distance."},{"label":"Effect","text":"The shieldbearer blocks the [strike](../../rule/combat/strike/) (if [adjacent](../../rule/combat/adjacent/) to the mentor) or throws their shield into the mentor's space. The triggering [strike](../../rule/combat/strike/)'s damage is halved and the [potency](../../rule/character/potency/) of any [potency](../../rule/character/potency/) effects is reduced by 1. If the shieldbearer threw their shield, it bounces back to their hand."}]},{"kind":"ability","action":"main","name":"Living Backpack","usage":"Main action","keywords":["Melee"],"distance":"Melee 1","target":"The shieldbearer's mentor","sections":[{"label":"Effect","text":"The shieldbearer straps their shield on their back and climbs onto their mentor's back, entering the mentor's space. While the shieldbearer is on their mentor's back, each of them gains 10 [temporary Stamina](../../rule/health/temporary-stamina/) and can use Shield Block as a triggered action targeting an ally instead of the shieldbearer's mentor. Additionally, the shieldbearer moves with the mentor, and they can't use main actions, maneuvers, or move actions except to end this effect as a maneuver. The effect also ends if the shieldbearer is [force moved](../../movement/forced-movement/) away from their mentor or knocked [prone](../../condition/prone/). If the shieldbearer is still in their mentor's space when the effect ends, they move into an [adjacent](../../rule/combat/adjacent/) unoccupied space of their choice."}]},{"kind":"ability","action":"main","name":"Let's Go Sledding","cost":"Encounter","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"Three enemies","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 damage; M \u003c STRONG [prone](../../condition/prone/)","low":"6 damage; M \u003c WEAK [prone](../../condition/prone/)","mid":"10 damage; M \u003c AVERAGE [prone](../../condition/prone/)"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the [Charge](../../feature/common/main-actions/charge/) main action, the shieldbearer gains 2 [surges](../../rule/resource/surge/) that can be used immediately."}]}]}
</script></div>
