---
agility: 3
ev: 12 for four minions
free_strike: 4
immunities:
    - Corruption 10
    - poison 10
intuition: 1
keywords:
    - Undead
level: 10
might: -2
movement: Fly, hover
name: Wraith Skulker
organization: Minion
presence: 5
reason: 1
role: Harrier
scc: mcdm.monsters.v1/monster.undead.4th-echelon.statblock/wraith-skulker
size: 1M
speed: 7
stability: 1
stamina: "15"
type: statblock
with_captain: +3 bonus to speed
---

# Wraith Skulker

---

<script type="application/json" class="sc-statblock-data">
{"id":"wraith-skulker","name":"Wraith Skulker","ancestry":"Undead","level":"10","role":"Minion Harrier","roleKey":"harrier","ev":"12 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 10, poison 10","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+5"}],"features":[{"kind":"ability","action":"main","name":"Draining Rake","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 5","tiers":{"high":"9 cold damage; P \u003c 5 slowed (save ends); the wraith shifts up to 3 squares","low":"4 cold damage; the wraith can shift 1 square","mid":"7 cold damage; the wraith shifts up to 2 square"}},"sections":[{"label":"Effect","text":"The wraith turns invisible until the start of their next turn."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The wraith can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the wraith moves through a creature, that creature takes 5 corruption damage. The wraith doesn't take damage from being force moved into objects."}]}
</script>
