---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "28"
free_strike: 6
intuition: 0
keywords:
    - Giant
    - Troll
level: 5
might: 3
name: Troll Butcher
organization: Elite
presence: 0
reason: 1
role: Hexer
scc: mcdm.monsters.v1/monster.trolls.statblock/troll-butcher
size: "2"
speed: 8
stability: 2
stamina: "120"
type: statblock
weaknesses:
    - Acid 5
    - fire
---

# Troll Butcher

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"troll-butcher","name":"Troll Butcher","ancestry":"Giant, Troll","level":"5","role":"Elite Hexer","roleKey":"hexer","ev":"28","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"Acid 5, fire","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Savoring Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; M \u003c 3 bleeding (save ends)","low":"9 damage; M \u003c 1 bleeding (save ends)","mid":"14 damage; M \u003c 2 bleeding (save ends)"}},"enhancements":[{"cost":"1 Malice","text":"The butcher regains Stamina equal to the damage dealt."}]},{"kind":"ability","action":"main","name":"Rotten Scraps","usage":"Main action","keywords":["Area","Ranged"],"distance":"3 cube within 10","target":"Each creature in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 poison damage; M \u003c 3 weakened (save ends)","low":"5 poison damage; M \u003c 1 weakened (save ends)","mid":"9 poison damage; M \u003c 2 weakened (save ends)"}},"sections":[{"label":"Effect","text":"Each troll in the area ignores the damage and instead regains 3 Stamina."}]},{"kind":"ability","action":"maneuver","name":"Gourmet Flesh","cost":"2 Malice","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The butcher enhances their next use of Savoring Bite, changing the damage type and condition imposed to one of the following pairs: corruption damage and dazed, acid damage and restrained, or lightning damage and frightened."}]},{"kind":"ability","action":"triggered","name":"Acquired Taste","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the butcher with an ability that gains an edge, has a double edge, or uses a surge."},{"label":"Effect","text":"The butcher makes a free strike against the target. Until the end of their next turn, the butcher gains an edge on power rolls and deals an extra 3 damage with strikes."}]},{"kind":"passive","action":"passive","name":"Bloody Feast","body":"Each ally within 5 squares of the butcher gains an edge on power rolls against any enemy affected by a condition."},{"kind":"passive","action":"passive","name":"Relentless Hunger","body":"The butcher dies only if they are reduced to 0 Stamina by acid or fire damage, if they end their turn with 0 Stamina, or if they take acid or fire damage while at 0 Stamina."}]}
</script></div>
