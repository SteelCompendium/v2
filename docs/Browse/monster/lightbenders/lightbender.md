---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "20"
free_strike: 6
intuition: 1
keywords:
    - Beast
    - Lightbender
level: 3
might: 2
name: Lightbender
organization: Elite
presence: -1
reason: -3
role: Ambusher
scc: mcdm.monsters.v1/monster.lightbenders.statblock/lightbender
size: "2"
speed: 10
stability: 1
stamina: "100"
type: statblock
---

# Lightbender

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lightbender","name":"Lightbender","ancestry":"Beast, Lightbender","level":"3","role":"Elite Ambusher","roleKey":"ambusher","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Flash Swipe","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"18 damage","low":"9 damage","mid":"14 damage"}},"sections":[{"label":"Effect","text":"If this ability gains an edge or has a double edge, it deals an extra 4 damage."}]},{"kind":"ability","action":"main","name":"Piercing Tails","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"15 damage; M \u003c 2 bleeding (save ends)","low":"8 damage","mid":"12 damage; M \u003c 1 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"While bleeding this way, the target takes a bane on tests to search for the lightbender while they are hidden."}]},{"kind":"ability","action":"maneuver","name":"Hypnotic Mane","cost":"5 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"I \u003c 2 dazed (save ends)","low":"I \u003c 0 dazed (save ends)","mid":"I \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"While dazed this way, a target has speed 0. If a target takes damage, or if someone else uses a main action to shake the target out of their stupor, the dazed condition ends."}]},{"kind":"ability","action":"triggered","name":"Stalker's Afterimage","usage":"Triggered action","keywords":["Magic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The lightbender takes damage from a strike."},{"label":"Effect","text":"The lightbender halves the damage, ignores any nondamaging effects associated with it, and can teleport up to 5 squares. If they teleport into concealment or cover, the lightbender can immediately attempt to hide as a free maneuver."}]},{"kind":"passive","action":"passive","name":"Avoidance","body":"Any effect on the lightbender that would be ended by a saving throw instead ends automatically at the end of their next turn."}]}
</script></div>
