---
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
{"id":"lithgekh","name":"Lithgekh","ancestry":"Undead, Soulless","level":"10","role":"Horde Hexer","roleKey":"hexer","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"55"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Corruption 10, poison 10","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Heartstopper","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 5","tiers":{"high":"14 corruption damage; I \u003c 5 frightened (save ends)","low":"9 corruption damage; I \u003c 3 frightened (save ends)","mid":"12 corruption damage; I \u003c 4 frightened (save ends)"}},"sections":[{"label":"Effect","text":"A creature frightened this way takes a bane on any ability that targets undead."}]},{"kind":"ability","action":"triggered","name":"Mystic Battery","cost":"1 Malice","usage":"Free triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 20","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance uses a magic ability."},{"label":"Effect","text":"Any damage dealt by or Stamina regained from the ability is halved. The lithgekh regains Stamina equal to the remaining damage dealt or Stamina gained."}]},{"kind":"passive","action":"passive","name":"Devour Magic","body":"Each ally within 10 squares of the lithgekh gains an edge on magic abilities."}]}
</script></div>
