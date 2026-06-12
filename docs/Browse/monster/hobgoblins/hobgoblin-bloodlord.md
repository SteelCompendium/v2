---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "32"
free_strike: 7
immunities:
    - Fire 6
intuition: 3
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 6
might: 4
movement: Teleport
name: Hobgoblin Bloodlord
organization: Leader
presence: 3
reason: 2
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-bloodlord
size: 1M
speed: 6
stability: 2
stamina: "180"
type: statblock
---

# Hobgoblin Bloodlord

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-bloodlord","name":"Hobgoblin Bloodlord","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Fire 6","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Soul Sword","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 corruption damage; P \u003c 4 [bleeding](../../../condition/bleeding/) (save ends)","low":"11 corruption damage; P \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","mid":"16 corruption damage; P \u003c 3 [bleeding](../../../condition/bleeding/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../rule/monster/malice.md)","text":"Each target is marked until the end of the encounter or until they die. The bloodlord's allies gain an edge on strikes against any target marked this way. The bloodlord can have up to three targets marked this way. If they mark a new target who would exceed the limit, the oldest mark ends."}]},{"kind":"ability","action":"maneuver","name":"Take Point!","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"One ally","sections":[{"label":"Effect","text":"The target moves up to their speed and can use a signature ability."}]},{"kind":"ability","action":"triggered","name":"An Army From Blood (3 [Malice](../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A non-[minion](../../../rule/organization/minion/) hobgoblin within distance takes damage."},{"label":"Effect","text":"Three hobgoblin recruits manifest from the target's blood into unoccupied spaces [adjacent](../../../rule/combat/adjacent/) to the target."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the bloodlord is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the bloodlord takes 3 fire damage."},{"kind":"passive","action":"passive","name":"[End Effect]","cost":"../../rule/monster/end-effect.md","body":"At the end of each of their turns, the bloodlord can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"ability","action":"main","name":"Advance! ([Villain Action](../../rule/monster/villain-action.md) 1)","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target gains 10 temporary [Stamina](../../../rule/health/stamina/) and can move up to their speed. Then each non-[minion](../../../rule/organization/minion/) target can make a [free strike](../../../feature/common/main-actions/free-strike/)."}]},{"kind":"ability","action":"main","name":"Skulls Abound ([Villain Action](../../rule/monster/villain-action.md) 2)","keywords":["Area","Magic"],"distance":"3 aura","target":"Self","sections":[{"label":"Effect","text":"Until the end of the encounter, the bloodlord surrounds themself with a storm of flying skulls. Any enemy who enters the area for the first time in a round or starts their turn there takes 8 corruption damage and takes a bane on their next power roll until the start of their next turn."}]},{"kind":"ability","action":"main","name":"I Am Fire! I Am Death! ([Villain Action](../../rule/monster/villain-action.md) 3)","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"5 fire damage; P \u003c 4 10 fire damage, [push](../../../movement/forced-movement/) 5, [prone](../../../condition/prone/)","low":"5 fire damage; P \u003c 2 2 fire damage, [push](../../../movement/forced-movement/) 2, [prone](../../../condition/prone/)","mid":"5 fire damage; P \u003c 3 7 fire damage, [push](../../../movement/forced-movement/) 3, [prone](../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"Until the end of the encounter, the bloodlord is wreathed in black flames. Whenever any [adjacent](../../../rule/combat/adjacent/) enemy [grabs](../../../condition/grabbed/) the bloodlord or uses a melee ability against them, that enemy takes 5 corruption damage."}]}]}
</script></div>
