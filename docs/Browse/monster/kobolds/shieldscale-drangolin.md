---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "12"
free_strike: 5
intuition: 0
keywords:
    - Kobold
    - Beast
level: 1
might: 2
movement: Burrow
name: Shieldscale Drangolin
organization: Elite
presence: -2
reason: -3
role: Brute
scc: mcdm.monsters.v1/monster.kobolds.statblock/shieldscale-drangolin
size: 2 or 3
speed: 7
stability: 0
stamina: "80"
type: statblock
---

# Shieldscale Drangolin

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shieldscale-drangolin","name":"Shieldscale Drangolin","ancestry":"Kobold, Beast","level":"1","role":"Elite Brute","roleKey":"brute","ev":"12","defenses":[{"l":"Size","v":"2 or 3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Fiery Claws","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 fire damage","low":"7 fire damage","mid":"10 fire damage"}},"sections":[{"label":"Special","text":"If the drangolin is size 3, the distance becomes Melee 2."}]},{"kind":"ability","action":"main","name":"Drangolin Plume","cost":"5 Malice","usage":"Main action","keywords":["-"],"distance":"Self; see below","target":"Self","sections":[{"label":"Effect","text":"The drangolin [shifts](../../../movement/shifting/) up to their speed and uses Fiery Claws against each creature who comes [adjacent](../../../rule/combat/adjacent/) to them during the shift. The drangolin makes one power roll against all targets."}]},{"kind":"ability","action":"main","name":"Erupt","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Main action","keywords":["Area","Weapon"],"distance":"2 burst","target":"Each creature in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"11 damage; [push](../../../movement/forced-movement/) 5; A \u003c 0 [prone](../../../condition/prone/)","low":"6 damage; [push](../../../movement/forced-movement/) 1; A \u003c 0 [prone](../../../condition/prone/)","mid":"8 damage; [push](../../../movement/forced-movement/) 3; A \u003c 0 [prone](../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"The drangolin uses the Dig maneuver to breach the surface before using this ability. Each target in the area where the drangolin breaches takes an extra 2 fire damage."}]},{"kind":"passive","action":"passive","name":"Ashen Cloud","body":"Any ally [adjacent](../../../rule/combat/adjacent/) to the drangolin has concealment."},{"kind":"passive","action":"passive","name":"Burrow Bond","body":"When the drangolin burrows, each [adjacent](../../../rule/combat/adjacent/) size 1S or smaller ally can move with them."}]}
</script></div>
