---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: '-'
free_strike: 2
immunities:
    - Corruption 3
    - poison 3
intuition: 0
keywords:
    - Undead
    - Soulless
level: 1
might: -4
movement: Fly, hover
name: Unquiet Spirit
organization: Retainer
presence: 2
reason: 0
role: Hexer
scc: mcdm.monsters.v1/retainer.statblock/unquiet-spirit
size: 1M
speed: 5
stability: 1
stamina: "21"
type: statblock
---

# Unquiet Spirit

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"unquiet-spirit","name":"Unquiet Spirit","ancestry":"Undead, Soulless","level":"1","role":"Retainer Hexer","roleKey":"hexer","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 3, poison 3","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Chill of Death","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 cold damage; P \u003c STRONG slowed (EoT)","low":"3 cold damage","mid":"5 cold damage"}}},{"kind":"ability","action":"main","name":"Spirit Meld","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"While adjacent to their mentor, the unquiet spirit enters the mentor's space. A spirit who enters their mentor's space this way moves with the mentor, can't be sensed, and can't affect or be affected by other creatures or objects. They can't take main actions, maneuvers, or move actions, except to use this ability to leave their mentor's space and appear in an adjacent space."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The unquiet spirit can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the spirit moves through a creature other than their mentor, that creature takes 2 corruption damage."},{"kind":"ability","action":"main","name":"Enervating Curse","cost":"Encounter","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 corruption damage; the target has 3 levels of drain","low":"6 corruption damage; the target has 1 level of drain","mid":"10 corruption damage; the target has 2 levels of drain"}},"sections":[{"label":"Effect","text":"The next creature to make a strike against the target gains 1 surge for each level of drain, which must be used on that strike."}]},{"kind":"ability","action":"main","name":"Ectoplasm","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"A \u003c STRONG slowed and weakened (save ends)","low":"A \u003c WEAK slowed and weakened (save ends)","mid":"A \u003c AVERAGE slowed and weakened (save ends)"}}},{"kind":"ability","action":"main","name":"Death Phase","cost":"Encounter","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"One creature","sections":[{"label":"Effect","text":"If the target has P \u003c STRONG, they are phased until the end of their next turn. A phased target gains the unquiet spirit's Corruptive Phasing trait and can fly. They are visible but can't affect or be affed by other creatures or objects. A willing creature not subject to the ability's potency can choose to automatically be affected."}]}]}
</script></div>
