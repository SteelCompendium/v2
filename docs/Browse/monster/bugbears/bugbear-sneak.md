---
agility: 2
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Bugbear
    - Fey
    - Goblin
    - Humanoid
level: 2
might: 2
name: Bugbear Sneak
organization: Elite
presence: 0
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.bugbears.statblock/bugbear-sneak
size: 1L
speed: 7
stability: 0
stamina: "80"
type: statblock
---

# Bugbear Sneak

---

<script type="application/json" class="sc-statblock-data">
{"id":"bugbear-sneak","name":"Bugbear Sneak","ancestry":"Bugbear, Fey, Goblin, Humanoid","level":"2","role":"Elite Ambusher","roleKey":"ambusher","ev":"16","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Sucker Punch","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; grabbed","low":"8 damage; A \u003c 1 grabbed","mid":"13 damage; A \u003c 2 grabbed"}},"sections":[{"label":"Effect","text":"The target can't use triggered actions until the start of the next round. Additionally, if the sneak started their turn hidden from the target, this ability deals an extra 4 damage."}]},{"kind":"ability","action":"main","name":"Shadow Cloak","cost":"3 Malice","usage":"Main action","keywords":["Area"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"4 damage; I \u003c 2 the sneak has concealment from the target (save ends)","low":"2 damage; I \u003c 0 the sneak has concealment from the target (save ends)","mid":"3 damage; I \u003c 1 the sneak has concealment from the target (save ends)"}},"sections":[{"label":"Effect","text":"The sneak shifts up to their speed and can attempt to hide."}]},{"kind":"ability","action":"main","name":"Carving Dagger","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 8","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; M \u003c 2 bleeding (save ends)","low":"7 damage; M \u003c 0 bleeding (save ends)","mid":"11 damage; M \u003c 1 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"While bleeding this way, the target can't hide from the sneak or their allies."}]},{"kind":"ability","action":"maneuver","name":"Throw","usage":"Maneuver","keywords":["Melee","Strike"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be grabbed by the sneak."},{"label":"Effect","text":"The target is vertical pushed up to 4 squares. An ally doesn't take damage from being force moved this way."}]},{"kind":"ability","action":"triggered","name":"Catcher","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance."},{"label":"Effect","text":"The target is grabbed by the sneak."}]},{"kind":"ability","action":"triggered","name":"Clever Trick","cost":"1 Malice","usage":"Triggered action","keywords":["-"],"distance":"Special","target":"One enemy","sections":[{"label":"Trigger","text":"The sneak is targeted by a strike."},{"label":"Effect","text":"The sneak chooses one enemy within distance of the strike to become the target of the strike."}]}]}
</script>
