---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: 7 for four minions
free_strike: 3
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 5
might: 0
name: Devil Notary
organization: Minion
presence: 2
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.devils.statblock/devil-notary
size: 1M
speed: 6
stability: 0
stamina: "8"
type: statblock
with_captain: +5 bonus to ranged distance
---

# Devil Notary

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-notary","name":"Devil Notary","ancestry":"Devil, Infernal","level":"5","role":"Minion Hexer","roleKey":"hexer","ev":"7 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"8"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Importunity","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"6 fire damage; R \u003c 3 the target takes a bane on their next strike","low":"3 fire damage","mid":"5 fire damage; R \u003c 2 the target takes a bane on their next strike"}},"sections":[{"label":"Effect","text":"One non-minion devil within 5 squares of the notary gains an edge on their next strike."}]},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the notary's true name, the notary loses their fire immunity and any nondamaging effects of their signature ability until the end of the encounter."}]}
</script></div>
