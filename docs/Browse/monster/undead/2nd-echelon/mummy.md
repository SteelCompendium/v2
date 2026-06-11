---
agility: -1
ev: "6"
free_strike: 3
immunities:
    - Corruption 4
    - poison 4
intuition: 3
keywords:
    - Mummy
    - Undead
level: 4
might: 3
name: Mummy
organization: Horde
presence: 0
reason: 1
role: Brute
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/mummy
size: 1M
speed: 5
stability: 2
stamina: "50"
type: statblock
weaknesses:
    - Fire 5
---

# Mummy

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"mummy","name":"Mummy","ancestry":"Mummy, Undead","level":"4","role":"Horde Brute","roleKey":"brute","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"Fire 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Accursed Bindings","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"10 corruption damage; pull 2; M \u003c 3 restrained (save ends)","low":"6 corruption damage; pull 1","mid":"8 corruption damage; pull 2"}},"sections":[{"label":"Effect","text":"The next ability the mummy uses against the target has any potency increased by 1 for the target."}]},{"kind":"ability","action":"main","name":"Eldritch Curse","cost":"3 Malice","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"7 corruption damage; I \u003c 3 the target is cursed (save ends)","low":"3 corruption damage; I \u003c 1 the target is cursed (save ends)","mid":"5 corruption damage; I \u003c 2 the target is cursed (save ends)"}},"sections":[{"label":"Effect","text":"A cursed target is bleeding and weakened, and allies gain an edge on strikes made against them."}]},{"kind":"ability","action":"triggered","name":"Blast of Mummy Dust","cost":"1 Malice","usage":"Triggered action","keywords":["Area"],"distance":"1 burst","target":"The triggering creature","sections":[{"label":"Trigger","text":"The mummy comes within distance of a restrained creature or starts their turn within distance of one."},{"label":"Effect","text":"The target takes 8 poison damage."}]}]}
</script></div>
