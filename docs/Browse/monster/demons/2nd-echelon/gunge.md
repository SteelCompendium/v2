---
agility: 2
ev: "6"
free_strike: 2
intuition: 2
keywords:
    - Abyssal
    - Demon
level: 4
might: 3
name: Gunge
organization: Horde
presence: -1
reason: 1
role: Controller
scc: mcdm.monsters.v1/monster.demons.2nd-echelon.statblock/gunge
size: "3"
speed: 6
stability: 0
stamina: "25"
type: statblock
weaknesses:
    - Holy 5
---

# Gunge

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gunge","name":"Gunge","ancestry":"Abyssal, Demon","level":"4","role":"Horde Controller","roleKey":"controller","ev":"6","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"25"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Bilious Expulsion","cost":"Signature","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"1 burst, or 3 cube within 5","target":"One creature or object in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"9 acid damage; M \u003c 3 restrained (save ends)","low":"5 acid damage; M \u003c 1 slowed (save ends)","mid":"7 acid damage; M \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"The ground and any surfaces in the area pool with slime. The slime is difficult terrain for enemies, and any enemy is bleeding while in the area."}]},{"kind":"ability","action":"triggered","name":"Spew Slide","cost":"1 Malice","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The gunge takes damage from a melee strike."},{"label":"Effect","text":"The gunge vomits with great force, letting them shift up to their speed and ignore any additional effects from the strike. The space the gunge occupied before the shift is covered in slime that is difficult terrain for enemies. Additionally, any enemy is bleeding while in the slime."}]},{"kind":"passive","action":"passive","name":"Lethe","body":"While the gunge is winded, they gain an edge on strikes, and any strike made against them gains an edge."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 2 squares of the gunge can't be hidden from them."}]}
</script></div>
