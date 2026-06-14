---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "24"
free_strike: 6
immunities:
    - Corruption 6
    - poison 6
intuition: 4
keywords:
    - Mummy
    - Undead
level: 4
might: 4
name: Mummy Lord
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/mummy-lord
size: 1M
speed: 6
stability: 4
stamina: "155"
type: statblock
weaknesses:
    - Fire 5
---

# Mummy Lord

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"mummy-lord","name":"Mummy Lord","ancestry":"Mummy, Undead","level":"4","role":"Leader","roleKey":"leader","ev":"24","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"155"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Corruption 6, poison 6","weakness":"Fire 5","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Accursed Slam","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"17 corruption damage; I \u003c 4 [bleeding](../../../../condition/bleeding/) (save ends)","low":"10 corruption damage; I \u003c 2 [bleeding](../../../../condition/bleeding/) (save ends)","mid":"14 corruption damage; I \u003c 3 [bleeding](../../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Effect","text":"While the target is [bleeding](../../../../condition/bleeding/) this way, the [potency](../../../../rule/character/potency/) of any ability used against them increases by 1 for the target."}]},{"kind":"ability","action":"main","name":"Binding Curse","cost":"1 [Malice](../../../../rule/monster/malice/)","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 20","target":"One creature","powerRoll":{"formula":"+ 4","tiers":{"high":"16 corruption damage; I \u003c 4 [frightened](../../../../condition/frightened/) (save ends)","low":"7 corruption damage; I \u003c 2 [frightened](../../../../condition/frightened/) (save ends)","mid":"12 corruption damage; I \u003c 3 [frightened](../../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"While [frightened](../../../../condition/frightened/) this way, a target takes 4 psychic damage whenever they use a move action."}],"enhancements":[{"cost":"2+ [Malice](../../../../rule/monster/malice/)","text":"This ability targets one additional target for each 2 [Malice](../../../../rule/monster/malice/) spent."}]},{"kind":"ability","action":"triggered","name":"Summon My Guard","cost":"2 [Malice](../../../../rule/monster/malice/)","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Trigger","text":"The mummy lord is made [winded](../../../../rule/health/winded/) for the first time in the encounter."},{"label":"Effect","text":"One mummy or four ghoul cravers appear within distance."}]},{"kind":"passive","action":"passive","name":"Cursed Transference","enhancements":[{"cost":"5 [Malice](../../../../rule/monster/malice/)","text":"The effect that is ended is transferred to another creature within 10 squares."}],"body":"At the end of each of their turns, the mummy lord can take 10 damage to end one effect on them that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Plague of Flies","cost":"[Villain Action](../../../../rule/monster/villain-action/) 1","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"10 poison damage","low":"5 poison damage","mid":"8 poison damage"}},"sections":[{"label":"Effect","text":"Each target takes a bane on their next strike."}]},{"kind":"villain","action":"villain","name":"Land's Guardian","cost":"[Villain Action](../../../../rule/monster/villain-action/) 2","keywords":["-"],"distance":"Self","target":"Self","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"[Prone](../../../../condition/prone/) and can't stand (EoT)","mid":"[Prone](../../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"The mummy lord gains a +2 bonus to speed and can automatically burrow at full speed while moving. They can then use the Dig maneuver. The next time the mummy lord breaches the surface, each enemy within 2 squares of the mummy lord makes an **Agility test**."}]},{"kind":"villain","action":"villain","name":"Unbound Horrors","cost":"[Villain Action](../../../../rule/monster/villain-action/) 3","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"10 corruption damage; I \u003c 4 [frightened](../../../../condition/frightened/) and [restrained](../../../../condition/restrained/) (save ends)","low":"5 corruption damage; I \u003c 2 [frightened](../../../../condition/frightened/) (save ends)","mid":"8 corruption damage; I \u003c 3 [frightened](../../../../condition/frightened/) (save ends)"}}}]}
</script></div>
