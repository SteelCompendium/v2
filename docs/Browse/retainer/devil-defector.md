---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: '-'
free_strike: 5
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 5
might: 3
movement: Fly
name: Devil Defector
organization: Retainer
presence: 2
reason: 3
role: Hexer
scc: mcdm.monsters.v1/retainer.statblock/devil-defector
size: 1M
speed: 6
stability: 0
stamina: "57"
type: statblock
---

# Devil Defector

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-defector","name":"Devil Defector","ancestry":"Devil, Infernal","level":"5","role":"Retainer Hexer","roleKey":"hexer","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"57"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Black Flame","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 corruption or fire damage","low":"6 corruption or fire damage","mid":"10 corruption or fire damage"}}},{"kind":"ability","action":"triggered","name":"Tempting Offer","cost":"Encounter","usage":"Free triggered action","keywords":["Ranged","Strike"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A sapient enemy is reduced to 0 Stamina."},{"label":"Effect","text":"The defector makes an offer to keep the target alive. If the target accepts, they are reduced to 1 Stamina instead. On the target's next turn, the defector controls their move action and the target must use a signature ability against a creature of the defector's choice or immediately die. To have the target turn down the offer, the Diretor must spend 3 Malice."}]},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the defector's true name, the defector loses their damage immunities and their Tempting Offer triggered action until the end of the encounter."},{"kind":"ability","action":"main","name":"Flames of Revenge","cost":"Encounter","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 corruption damage","low":"6 corruption damage","mid":"10 corruption damage"}},"sections":[{"label":"Effect","text":"If the defector's mentor is in the area, the mentor burns with flame until the end of the defector's next turn. While this fire burns the mentor has fire immunity 10, and any creature who targets the mentor with a strike takes 10 fire damage."}]},{"kind":"ability","action":"main","name":"Hell On Earth","cost":"Encounter","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"5 cube within 10","target":"Special","sections":[{"label":"Effect","text":"The area burns with infernal fire until the end of the devil's next turn. Any enemy of the defector who ends their turn in the area takes 10 fire damage, and if they have P \u003c AVERAGE they are frightened (save ends)."}]}]}
</script></div>
