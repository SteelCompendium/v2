---
agility: 2
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 1
might: 0
name: Wode Elf Sentry
organization: Platoon
presence: 1
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-sentry
size: 1M
speed: 7
stability: 0
stamina: "30"
type: statblock
---

# Wode Elf Sentry

---

<script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-sentry","name":"Wode Elf Sentry","ancestry":"Fey, Humanoid, Wode Elf","level":"1","role":"Platoon Support","roleKey":"support","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Tracer Longbow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; the target is marked (save ends)","low":"5 damage","mid":"7 damage"}},"sections":[{"label":"Effect","text":"Allies gain an edge on abilities against a target marked by any wode elf."}],"enhancements":[{"cost":"3 Malice","text":"The sentry targets two additional creatures or objects."}]},{"kind":"ability","action":"maneuver","name":"Death Blossom","cost":"2 Malice","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"5 burst","target":"Each marked enemy","sections":[{"label":"Effect","text":"Each target takes 3 damage."}]},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the sentry that would take a bane from cover or concealment have a double bane instead."}]}
</script>
