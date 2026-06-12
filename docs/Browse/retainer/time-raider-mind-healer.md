---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: '-'
free_strike: 4
immunities:
    - Psychic 5
intuition: 2
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
name: Time Raider Mind Healer
organization: Retainer
presence: 0
reason: 2
role: Support
scc: mcdm.monsters.v1/retainer.statblock/time-raider-mind-healer
size: 1M
speed: 5
stability: 0
stamina: "39"
type: statblock
---

# Time Raider Mind Healer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-mind-healer","name":"Time Raider Mind Healer","ancestry":"Humanoid, Time Raider","level":"3","role":"Retainer Support","roleKey":"support","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"39"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Laser Lancet","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 3","target":"One creature or object","powerRoll":{"formula":"","tiers":{"high":"11 fire damage","low":"5 fire damage","mid":"8 fire damage"}},"sections":[{"label":"Effect","text":"If the mind healer targets an ally, the ability deals no damage. Additionally, the target can end one effect on them that can be ended by a saving throw or that ends at the end of their turn."}],"trailing":"**2d10 + highest characteristic:**"},{"kind":"passive","action":"passive","name":"Foresight","body":"The mind healer doesn't take a bane on strikes against creatures with concealment."},{"kind":"ability","action":"main","name":"Stim Charge","cost":"Encounter","usage":"Main action","keywords":["Ranged"],"distance":"Ranged 3","target":"One creature","sections":[{"label":"Effect","text":"The target can spend 1 Recovery, and has their speed doubled until the end of their next turn."}]},{"kind":"ability","action":"main","name":"Mind Whelm","cost":"Encounter","usage":"Main action","keywords":["Psionic","Ranged","Strike"],"distance":"Ranged 3","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"17 psychic damage; R \u003c STRONG frightened (save ends)","low":"8 psychic damage; R \u003c WEAK frightened (save ends)","mid":"13 psychic damage; R \u003c AVERAGE frightened (save ends)"}}},{"kind":"ability","action":"main","name":"Psychic Short Circuit","cost":"Encounter","usage":"Main action","keywords":["Area","Psionic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"21 psychic damage","low":"11 psychic damage","mid":"16 psychic damage"}},"sections":[{"label":"Effect","text":"If the mind healer is dazed, frightened, or taunted, they can end one of those conditions and impose the same condition on one enemy in the area. Additionally, they can do the same for their mentor if the mentor is in the area and is dazed, frightened, or taunted."}]}]}
</script></div>
