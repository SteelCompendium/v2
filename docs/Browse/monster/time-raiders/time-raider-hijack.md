---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
immunities:
    - Psychic 3
intuition: 2
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
name: Time Raider Hijack
organization: Platoon
presence: 1
reason: 2
role: Ambusher
scc: mcdm.monsters.v1/monster.time-raiders.statblock/time-raider-hijack
size: 1M
speed: 6
stability: 0
stamina: "50"
type: statblock
---

# Time Raider Hijack

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-hijack","name":"Time Raider Hijack","ancestry":"Humanoid, Time Raider","level":"3","role":"Platoon Ambusher","roleKey":"ambusher","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Psychic 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Golden Sickles","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","low":"7 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"The hijack is hidden from any creature who is [bleeding](../../../condition/bleeding/) from this ability until that condition ends."}]},{"kind":"ability","action":"maneuver","name":"Psi-Sickle","usage":"Maneuver","keywords":["Psionic","Ranged","Weapon"],"distance":"Ranged 5","target":"One creature or object","sections":[{"label":"Effect","text":"The hijack psychically latches their sickle onto the target and closes the distance between them. If the target is larger than the hijack, the hijack moves [adjacent](../../../rule/combat/adjacent/) to the target. Otherwise, the target is [pulled](../../../movement/forced-movement/) up to 4 squares toward the hijack."}]},{"kind":"passive","action":"passive","name":"Foresight","body":"The hijack doesn't take a bane on strikes against creatures with concealment."}]}
</script></div>
