---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "12"
free_strike: 5
immunities:
    - Corruption 10
    - poison 10
intuition: 3
keywords:
    - Undead
    - Soulless
level: 10
might: 0
movement: Fly, hover
name: Lithgekh
organization: Horde
presence: -1
reason: 5
role: Hexer
scc: mcdm.monsters.v1/monster.undead.4th-echelon.statblock/lithgekh
size: 1M
speed: 6
stability: 1
stamina: "55"
type: statblock
---

# Lithgekh

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lithgekh","name":"Lithgekh","ancestry":"Undead, Soulless","level":"10","role":"Horde Hexer","roleKey":"hexer","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"55"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Corruption 10, poison 10","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Heartstopper ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 5","tiers":{"high":"14 corruption damage; I \u003c 5 [frightened](../../../../condition/frightened/) (save ends)","low":"9 corruption damage; I \u003c 3 [frightened](../../../../condition/frightened/) (save ends)","mid":"12 corruption damage; I \u003c 4 [frightened](../../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"A creature [frightened](../../../../condition/frightened/) this way takes a [bane](../../../../rule/dice/bane/) on any ability that targets [undead](../../../../rule/keyword/undead/)."}]},{"kind":"ability","action":"triggered","name":"Mystic Battery (1 [Malice](../../../rule/monster/malice.md))","usage":"Free [triggered action](../../../rule/combat/triggered-action.md)","keywords":["Magic","Ranged"],"distance":"Ranged 20","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance uses a magic ability."},{"label":"Effect","text":"Any damage dealt by or [Stamina](../../../../rule/health/stamina/) regained from the ability is halved. The lithgekh regains [Stamina](../../../../rule/health/stamina/) equal to the remaining damage dealt or [Stamina](../../../../rule/health/stamina/) gained."}]},{"kind":"passive","action":"passive","name":"Devour Magic","body":"Each ally within 10 squares of the lithgekh gains an [edge](../../../../rule/dice/edge/) on magic abilities."}]}
</script></div>
