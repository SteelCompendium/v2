---
agility: 1
ev: 3 for four minions
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
level: 1
might: -5
movement: Fly, hover
name: Shade
organization: Minion
presence: 2
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/shade
size: 1M
speed: 5
stability: 1
stamina: "4"
type: statblock
with_captain: +2 bonus to speed
---

# Shade

---

<script type="application/json" class="sc-statblock-data">
{"id":"shade","name":"Shade","ancestry":"Undead","level":"1","role":"Minion Ambusher","roleKey":"ambusher","ev":"3 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"4"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-5"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Life Drain","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 corruption damage; the target must move up to their speed and can't end that movement closer to any shade","low":"2 corruption damage","mid":"4 corruption damage"}}},{"kind":"passive","action":"passive","name":"Shadow Phasing","body":"The shade can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the shade moves through a creature, that creature takes 1 corruption damage. The shade doesn't take damage from being force moved into objects."}]}
</script>
