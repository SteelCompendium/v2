---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 6
might: 1
name: Devil Magistrate
organization: Elite
presence: 2
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.devils.statblock/devil-magistrate
size: 1M
speed: 7
stability: 0
stamina: "160"
type: statblock
---

# Devil Magistrate

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-magistrate","name":"Devil Magistrate","ancestry":"Devil, Infernal","level":"6","role":"Elite Harrier","roleKey":"harrier","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"160"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Edge of the Law","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"18 fire damage; R \u003c 3 [dazed](../../../condition/dazed/) (save ends)","low":"10 damage","mid":"15 damage"}},"sections":[{"label":"Effect","text":"The magistrate [shifts](../../../movement/shifting/) up to 3 squares before or after using this ability, or between each strike."}]},{"kind":"ability","action":"main","name":"Verdict","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"21 damage","low":"11 damage","mid":"17 damage"}},"sections":[{"label":"Effect","text":"This ability has a double [edge](../../../rule/dice/edge/) if the magistrate was hidden from the target, and deals an extra 5 damage if the target is [dazed](../../../condition/dazed/)."}]},{"kind":"ability","action":"maneuver","name":"Justice Turns Its Gaze","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The magistrate turns invisible until the start of their next turn, and can attempt to hide as a [free maneuver](../../../rule/combat/free-maneuver/) before the end of the current turn."}]},{"kind":"ability","action":"triggered","name":"Devilish Charm (2 [Malice](../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"The target takes a [bane](../../../rule/dice/bane/) on the strike.","low":"The magistrate chooses a new target for the strike.","mid":"The magistrate halves the triggering damage."}},"sections":[{"label":"Trigger","text":"A creature targets the magistrate with a strike."},{"label":"Effect","text":"The target makes a Presence test."}]},{"kind":"passive","action":"passive","name":"Leading","body":"Whenever the magistrate moves away from an enemy who is [adjacent](../../../rule/combat/adjacent/) to one of the magistrate's allies, they can [shift](../../../movement/shifting/) instead."},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the magistrate's true name, the magistrate loses their damage immunities, any nondamaging effects of their [signature ability](../../../rule/combat/signature-ability/), and their Devilish Charm ability until the end of the encounter."}]}
</script></div>
