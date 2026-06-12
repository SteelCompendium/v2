---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
flavor: With this stormwight kit, you channel your primordial ferocity into the form of a bear, becoming large, durable, and imposing. Boren are tied to the craggy, rocky north, and this aspect is associated with the blizzard's bitter cold.
name: Boren
scc: mcdm.heroes.v1/kit/boren
type: kit
---

# Boren

---

With this stormwight kit, you channel your [primordial ferocity](../feature/fury/level-10/primordial-ferocity.md) into the form of a bear, becoming large, durable, and imposing. [Boren](boren.md) are tied to the craggy, rocky north, and this aspect is associated with the blizzard's bitter cold.

## Aspect Benefits {data-scc="mcdm.heroes.v1/feature.fury.boren/aspect-benefits"}

Whenever you use [forced movement](../movement/forced-movement.md) to [push](../movement/forced-movement.md) a creature, you can [pull](../movement/forced-movement.md) that creature instead. Whenever you [pull](../movement/forced-movement.md) a creature [adjacent](../rule/combat/adjacent.md) to you and that creature has M < AVERAGE, you can use a free [triggered action](../rule/combat/triggered-action.md) to make that creature [grabbed](../condition/grabbed.md) by you.

## Animal Form: Bear {data-scc="mcdm.heroes.v1/feature.fury.boren/animal-form-bear"}

While you are in your bear form, your [size](../rule/character/size.md) is 2 and you gain a +1 [bonus](../rule/dice/bonuses-and-penalties.md) to [distance](../rule/combat/distance.md) with [melee](../rule/combat/melee.md) weapon abilities.

## Hybrid Form: Bear {data-scc="mcdm.heroes.v1/feature.fury.boren/hybrid-form-bear"}

While you are in your hybrid form, your [size](../rule/character/size.md) is 2 and you gain a +1 [bonus](../rule/dice/bonuses-and-penalties.md) to [distance](../rule/combat/distance.md) with [melee](../rule/combat/melee.md) weapon abilities. At 4th level, the first time you take hybrid form in an encounter, you gain 10 [temporary Stamina](../rule/health/temporary-stamina.md).

## Primordial Storm: Blizzard {data-scc="mcdm.heroes.v1/feature.fury.boren/primordial-storm-blizzard"}

Your primordial [damage type](../rule/damage/damage-type.md) is cold.

## Kit Bonuses {data-scc="mcdm.heroes.v1/feature.fury.boren/kit-bonuses"}

- **[Stamina](../rule/health/stamina.md) [Bonus](../rule/dice/bonuses-and-penalties.md):** +9 per [echelon](../rule/general/echelon.md)
- **[Stability](../rule/character/stability.md) [Bonus](../rule/dice/bonuses-and-penalties.md):** +2
- **[Melee](../rule/combat/melee.md) Damage [Bonus](../rule/dice/bonuses-and-penalties.md):** +0/+0/+4

## Signature Ability

### Bear Claws {data-scc="mcdm.heroes.v1/feature.ability.boren/bear-claws"}

*Attacks with your sharp and deadly claws grab the weak.*

| **[Melee](../rule/combat/melee.md), [Strike](../rule/combat/strike.md), Weapon** |               **Main action** |
|---------------------------|------------------------------:|
| **📏 [Melee](../rule/combat/melee.md) 1**            | **🎯 One creature or object** |

**[Power Roll](../rule/dice/power-roll.md) + [Might](../rule/character/might.md):**

- **≤11:** 2 + M damage; M < WEAK, [grabbed](../condition/grabbed.md)
- **12-16:** 5 + M damage; M < AVERAGE, [grabbed](../condition/grabbed.md)
- **17+:** 11 + M damage; M < STRONG, [grabbed](../condition/grabbed.md)

## Growing Ferocity {data-scc="mcdm.heroes.v1/feature.fury.boren/growing-ferocity"}

As your ferocity grows, you gain benefits as noted on the [Boren](boren.md) [Growing Ferocity](../feature/fury/boren/growing-ferocity.md) table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.

### Boren Growing Ferocity Table

| Ferocity        | Benefit                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2               | You can have up to two creatures [grabbed](../condition/grabbed.md) at a time. Additionally, whenever you make a [strike](../rule/combat/strike.md) against a creature you have [grabbed](../condition/grabbed.md), you gain 1 [surge](../rule/resource/surge.md).                                                                       |
| 4               | The first time you grab a creature on a [turn](../rule/combat/turn.md), you gain 1 [surge](../rule/resource/surge.md).                                                                                                                                                           |
| 6               | You gain an [edge](../rule/dice/edge.md) on the [Grab](../feature/common/maneuvers/grab.md) and [Knockback](../feature/common/maneuvers/knockback.md) maneuvers.                                                                                                                                                                     |
| 8 (4th level)   | The first time you grab a creature on a [turn](../rule/combat/turn.md), you gain 2 [surges](../rule/resource/surge.md) instead of 1.                                                                                                                                             |
| 10 (7th level)  | You have a double [edge](../rule/dice/edge.md) on the [Grab](../feature/common/maneuvers/grab.md) and [Knockback](../feature/common/maneuvers/knockback.md) maneuvers.                                                                                                                                                               |
| 12 (10th level) | Whenever you use a [heroic ability](../rule/general/heroic-ability.md), you gain 10 [temporary Stamina](../rule/health/temporary-stamina.md). Additionally, whenever you have a creature [grabbed](../condition/grabbed.md), any [ability roll](../rule/dice/ability-roll.md) made against that creature gains a [bonus](../rule/dice/bonuses-and-penalties.md) to its [potency](../rule/character/potency.md) equal to your [Might](../rule/character/might.md) score. |
