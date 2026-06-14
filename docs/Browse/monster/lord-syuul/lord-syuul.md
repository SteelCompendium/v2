---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "96"
free_strike: 7
immunities:
    - Psychic 10
intuition: 4
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: 1
movement: Hover, teleport
name: Lord Syuul
organization: Solo
presence: 3
reason: 4
scc: mcdm.monsters.v1/monster.lord-syuul.statblock/lord-syuul
size: 1M
speed: 7
stability: 3
stamina: "450"
type: statblock
---

# Lord Syuul

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lord-syuul","name":"Lord Syuul","ancestry":"Horror, Voiceless Talker","level":"6","role":"Solo","roleKey":"solo","ev":"96","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"450"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Psychic 10","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"[End Effect](../../../rule/monster/end-effect/)","text":"At the end of each of his turns, Lord Syuul can take 10 damage to end one effect on him that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"label":"Solo Turns","text":"Lord Syuul can take two turns each round. He can't take turns consecutively."}]},{"kind":"ability","action":"main","name":"Tentacle Grab","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"20 damage; A \u003c 4 [grabbed](../../../condition/grabbed/)","low":"11 damage; A \u003c 2 [grabbed](../../../condition/grabbed/)","mid":"17 damage; A \u003c 3 [grabbed](../../../condition/grabbed/)"}},"enhancements":[{"cost":"2 Malice","text":"The distance of this ability increases to melee 10. Each target [grabbed](../../../condition/grabbed/) by Lord Syuul is [pulled](../../../movement/forced-movement/) up to 10 squares."}]},{"kind":"ability","action":"main","name":"Dampening Grenade","usage":"Main action","keywords":["Area","Psionic","Ranged"],"distance":"2 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"13 damage; the effect lasts until the end of the encounter","low":"6 damage; the effect ends after 2 turns","mid":"10 damage; the effect ends at the end of Lord Syuul's next turn"}},"sections":[{"label":"Effect","text":"Any supernatural ability used by a creature in the area has a double bane. All reactive tests made against magic or psionic effects in the area have a double edge."}]},{"kind":"ability","action":"main","name":"Mind Blown","cost":"7 Malice","usage":"Main action","keywords":["Melee","Psionic","Strike"],"distance":"Melee 1","target":"One grabbed enemy","powerRoll":{"formula":"+ 4","tiers":{"high":"24 damage","low":"12 damage","mid":"20 damage"}},"sections":[{"label":"Effect","text":"If this action reduces the target to 0 [Stamina](../../../rule/health/stamina/) and they have a brain, their brain explodes, instantly killing them."}]},{"kind":"ability","action":"maneuver","name":"You Come With Me","usage":"Maneuver","keywords":["Psionic"],"distance":"Self","target":"Self","trailing":"Lord Syuul can [teleport](../../../movement/teleport/) up to 5 squares along with each creature and object he has [grabbed](../../../condition/grabbed/). He can release [grabbed](../../../condition/grabbed/) creatures and objects before or after teleporting."},{"kind":"ability","action":"triggered","name":"Adaptability","usage":"[Triggered Action](../../../rule/combat/triggered-action/)","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"Lord Syuul takes damage that has a damage type."},{"label":"Effect","text":"Until the start of his next turn, Lord Syuul gains immunity 5 to the triggering damage type."}]},{"kind":"passive","action":"passive","name":"Mind Over Manners","body":"Whenever Lord Syuul uses a psionic ability, he can do so as if he were in the space of any creature within his line of effect who he has observed using a psionic ability."},{"kind":"villain","action":"villain","name":"See Only Me","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Area","Psionic"],"distance":"10 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"7 psychic damage","low":"16 psychic damage; the target has no line of effect to any creature except Lord Syuul, and takes a bane on strikes targeting Lord Syuul (save ends)","mid":"13 psychic damage; the target has no line of effect to any creature except Lord Syuul (save ends)"}},"sections":[{"label":"Effect","text":"Each target makes an **Intuition test**."}]},{"kind":"villain","action":"villain","name":"Phantom Pain","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Lord Syuul becomes invisible, can [teleport](../../../movement/teleport/) up to 10 squares, and projects an illusory double within 10 squares. The double can't move or act, but Lord Syuul can use psionic abilities as if he were in its square. Whenever a creature touches or damages the double with a melee strike, they take 10 psychic damage. If Lord Syuul takes damage, his invisibility ends and the double disappears."}]},{"kind":"villain","action":"villain","name":"Mindshatter","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["Area","Psionic"],"distance":"5 burst","target":"Each creature in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"16 psychic damage","low":"7 psychic damage","mid":"13 psychic damage"}},"sections":[{"label":"Effect","text":"Until the end of the encounter, each target has damage weakness 3."}]}]}
</script></div>
