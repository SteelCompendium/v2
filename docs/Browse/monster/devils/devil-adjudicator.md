---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "32"
free_strike: 7
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 6
might: 0
movement: Fly
name: Devil Adjudicator
organization: Elite
presence: 3
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.devils.statblock/devil-adjudicator
size: 1M
speed: 6
stability: 1
stamina: "140"
type: statblock
---

# Devil Adjudicator

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-adjudicator","name":"Devil Adjudicator","ancestry":"Devil, Infernal","level":"6","role":"Elite Controller","roleKey":"controller","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Infernal Injunction","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 fire damage; I \u003c 1 [frightened](../../../condition/frightened/) (save ends)","low":"10 fire damage; I \u003c 1 [frightened](../../../condition/frightened/) (save ends)","mid":"15 fire damage; I \u003c 1 [frightened](../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"The adjudicator can slide a target [frightened](../../../condition/frightened/) by this ability up to 2 squares."}]},{"kind":"ability","action":"main","name":"Adjudicator's Interdiction","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"","tiers":{"high":"[Slowed](../../../condition/slowed/) (save ends)","low":"The target is [slowed](../../../condition/slowed/), takes a [bane](../../../rule/dice/bane/) on power rolls, and can't regain [Stamina](../../../rule/health/stamina/) (save ends).","mid":"The target is [slowed](../../../condition/slowed/) and takes a [bane](../../../rule/dice/bane/) on power rolls (save ends)."}},"sections":[{"label":"Effect","text":"The target makes a Presence test."}]},{"kind":"ability","action":"maneuver","name":"Quid Pro Quo","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One ally or [frightened](../../../condition/frightened/) creature","sections":[{"label":"Effect","text":"The adjudicator and the target [teleport](../../../movement/teleport/) to switch places."}]},{"kind":"ability","action":"triggered","name":"Devilish Charm","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"The target takes a [bane](../../../rule/dice/bane/) on the strike.","low":"The adjudicator chooses a new target for the strike.","mid":"The adjudicator halves the triggering damage."}},"sections":[{"label":"Trigger","text":"A creature targets the adjudicator with a strike."},{"label":"Effect","text":"The target makes a Presence test."}]},{"kind":"passive","action":"passive","name":"Vexatious Litigation","body":"Any creature within 10 squares of the adjudicator who has P \u003c 3 takes a −2 penalty to saving throws."},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the adjudicator's true name, the adjudicator loses their damage immunities, any nondamaging effects of their [signature ability](../../../rule/combat/signature-ability/), and their Devilish Charm ability until the end of the encounter."}]}
</script></div>
