---
agility: 1
ev: "6"
free_strike: 4
immunities:
    - Cold
    - fire
    - or lightning
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 1
name: Orc Eye of Grole
organization: Platoon
presence: 2
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-eye-of-grole
size: 1M
speed: 6
stability: 0
stamina: "20"
type: statblock
---

# Orc Eye of Grole

---

<script type="application/json" class="sc-statblock-data">
{"id":"orc-eye-of-grole","name":"Orc Eye of Grole","ancestry":"Humanoid, Orc","level":"1","role":"Platoon Artillery","roleKey":"artillery","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Cold, fire, or lightning","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"passive","action":"passive","name":"Elemental Affinity","body":"The eye has an affinity for one of the following damage types cold, fire, or lightning. The chosen type determines the eye's damage immunity and the damage dealt by their abilities."},{"kind":"ability","action":"main","name":"Elemental Discharge","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; slide 6, or the eye shifts up to 6 squares away from the target","low":"6 damage; push 2, or the eye shifts up to 2 squares away from the target","mid":"9 damage; slide 4, or the eye shifts up to 4 squares away from the target"}},"sections":[{"label":"Effect","text":"This ability deals cold, fire, or lightning damage."}]},{"kind":"ability","action":"main","name":"Power Burst","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"5 x 2 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; push 4, prone","low":"3 damage; push 2","mid":"5 damage; push 3"}},"sections":[{"label":"Effect","text":"This ability deals cold, fire, or lightning damage, and any enemy targeted by the ability has damage weakness 3 to the same damage type (save ends)."}]},{"kind":"passive","action":"passive","name":"Relentless","body":"If the eye is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the eye is reduced to 1 Stamina instead."}]}
</script>
