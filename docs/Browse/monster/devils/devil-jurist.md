---
agility: 2
ev: "28"
free_strike: 7
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 5
might: 0
movement: Fly
name: Devil Jurist
organization: Elite
presence: 3
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.devils.statblock/devil-jurist
size: 1M
speed: 6
stability: 0
stamina: "120"
type: statblock
---

# Devil Jurist

---

<script type="application/json" class="sc-statblock-data">
{"id":"devil-jurist","name":"Devil Jurist","ancestry":"Devil, Infernal","level":"5","role":"Elite Artillery","roleKey":"artillery","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"passive","action":"passive","name":"Hellfire","body":"Fire damage dealt by the jurist ignores damage immunity."},{"kind":"ability","action":"main","name":"Fire and Brimstone","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 12","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 fire damage; A \u003c 3 burning (save ends)","low":"10 fire damage","mid":"15 fire damage; A \u003c 2 burning (save ends)"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}],"enhancements":[{"cost":"1+ Malice","text":"The jurist can target one additional creature or object for each Malice spent."}]},{"kind":"ability","action":"main","name":"Dismissal with Prejudice","usage":"Main action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"12 damage; slide 5","low":"6 damage; slide 1","mid":"10 damage; slide 3"}},"sections":[{"label":"Effect","text":"If the target has M \u003c 2, the forced distance movement gains a +3 bonus."}]},{"kind":"ability","action":"maneuver","name":"Ashes to Ashes","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 12","target":"One creature","sections":[{"label":"Effect","text":"If the target is burning (see Fire and Brimstone), they take 6 fire damage."}]},{"kind":"ability","action":"triggered","name":"Devilish Charm","cost":"2 Malice","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"The target takes a bane on the strike.","low":"The jurist chooses a new target for the strike.","mid":"The jurist halves the triggering damage."}},"sections":[{"label":"Trigger","text":"A creature targets the jurist with a strike."},{"label":"Effect","text":"The target makes a Presence test."}]},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the jurist's true name, the jurist loses their fire immunity, any nondamaging effects of their signature ability, and their Devilish Charm ability until the end of the encounter."}]}
</script>
