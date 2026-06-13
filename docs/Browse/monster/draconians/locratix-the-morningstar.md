---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Acid 6
intuition: 2
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: 1
movement: Fly
name: Locratix the Morningstar
organization: Elite
presence: 2
reason: 1
role: Harrier
scc: mcdm.monsters.v1/monster.draconians.statblock/locratix-the-morningstar
size: 1M
speed: 8
stability: 2
stamina: "160"
type: statblock
---

# Locratix the Morningstar

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"locratix-the-morningstar","name":"Locratix the Morningstar","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Elite Harrier","roleKey":"harrier","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"160"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Acid 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Skewer","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage; M \u003c 2 [slowed](../../../condition/slowed/) (save ends)","low":"10 damage","mid":"15 damage; M \u003c 1 [slowed](../../../condition/slowed/) (save ends)"}},"sections":[{"label":"Effect","text":"Locratix deals 6 damage to each creature or object in a 2 x 1 line behind the target."}]},{"kind":"ability","action":"main","name":"Acidic Stun (2 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Area","Magic"],"distance":"3 x 1 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"15 acid damage; M \u003c 3 [dazed](../../../condition/dazed/) (save ends)","low":"7 acid damage; M \u003c 1 [dazed](../../../condition/dazed/) (save ends)","mid":"12 acid damage; M \u003c 2 [dazed](../../../condition/dazed/) (save ends)"}},"sections":[{"label":"Effect","text":"While [dazed](../../../condition/dazed/) this way, a target takes an extra 6 damage from Locratix's abilities."}]},{"kind":"ability","action":"maneuver","name":"Takeoff","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Locratix [flies](../../../movement/fly/) up to her speed. Any creature [adjacent](../../../rule/combat/adjacent/) to the space on the ground she took off from who has A \u003c 2 is knocked [prone](../../../condition/prone/)."}]},{"kind":"ability","action":"triggered","name":"Stay Back!","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 2","target":"The triggering creature","powerRoll":{"formula":"+ 3","tiers":{"high":"15 acid damage; A \u003c 3 the target's speed is 0 (EoT)","low":"7 acid damage; A \u003c 1 the target's speed is 0 (EoT)","mid":"12 acid damage; A \u003c 2 the target's speed is 0 (EoT)"}},"sections":[{"label":"Trigger","text":"A creature within distance moves or is [force moved](../../../movement/forced-movement/)."}]},{"kind":"passive","action":"passive","name":"Flighty","body":"When Locratix deals rolled damage to an enemy, that enemy can't use Locratix as the trigger for any of their [triggered actions](../../../rule/combat/triggered-action/) until the start of Locratix's next turn."},{"kind":"passive","action":"passive","name":"Absorbing Scales","body":"When Locratix takes damage of any type for which she has damage immunity, she has damage immunity 6 against the next strike made against her."}]}
</script></div>
