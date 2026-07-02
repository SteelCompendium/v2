---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 3
name: Target
scc: mcdm.heroes.v1/rule.combat/target
type: rule
---

# Target

---

The "[Target](target.md)" entry of an ability, represented by this symbol 🎯, notes the number of creatures, objects, or both who can be targeted by that ability. You can always affect fewer targets than the number indicated by this entry.

## Creature

If an ability targets one or more creatures, it can affect creatures within the ability's [distance](distance.md) or area. You aren't an eligible creature target for your own abilities unless those abilities also have "self" as a target (see below), or unless the ability indicates otherwise.

## Object

If an ability targets one or more objects, it can affect any object within the ability's [distance](distance.md) or area. Unless otherwise noted, objects have poison immunity all and psychic immunity all. \(Damage in Chapter 10: [Combat](../../../Read/heroes/combat.md) has information on [damage immunity](../damage/damage-immunity.md).)

When an ability can target creatures and objects, the ability can damage objects. However, unless otherwise noted (as with the [talent's](../../class/talent.md) [Minor Telekinesis](../../feature/ability/talent/level-1/minor-telekinesis.md) ability) or if the Director allows it, objects are immune to an ability's other effects. If an ability forces an object to make a [test](../test/test.md), the object automatically gets a tier 1 result on the [test](../test/test.md).

## Enemy {data-scc="mcdm.heroes.v1/rule.combat/enemy"}

If an ability targets one or more [enemies](enemy.md), it can affect only creatures who are hostile to the creature using the ability. Typically, you decide who counts as an enemy for the purpose of using your hero's abilities, though the Director has the final say.

## Ally {data-scc="mcdm.heroes.v1/rule.combat/ally"}

If an ability targets one or more [allies](ally.md), it can affect only willing creatures who are friendly to the creature using the ability. Typically, you and any other player whose character you target with an ability decide who counts as an ally, though the Director has the final say.

You aren't an eligible target for your own abilities that target allies unless those abilities also have "self" as a target, or unless the ability indicates otherwise.

## Self

If an ability targets "self," it can affect only the creature using the ability. Your own abilities can affect you only if they target "self."

## Each [Target]

If an area ability doesn't provide a number of targets but instead says it applies to each creature, object, enemy, or ally in the area, then all eligible targets for the ability are affected.

> **Telling Friend From Foe**
>
> There might be times when a foe disguises or obscures themself so that they're temporarily seen as an ally—or at least not seen as an enemy. Until the effect ends, such a creature can't be targeted by abilities that would usually target them by targeting enemies. Fear not, though. All classes have access to at least one ability that targets creatures, whether friend or foe.
