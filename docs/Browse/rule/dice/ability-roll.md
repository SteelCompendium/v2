---
name: Ability Roll
scc: mcdm.heroes.v1/rule.dice/ability-roll
type: rule
---

# Ability Roll

---

If an ability requires a [power roll](power-roll.md), it has a "[Power Roll](power-roll.md)" entry that tells you which [characteristic](../character/characteristic.md) to add to the 2d10 roll you make when you use the ability. (Chapter 1: [The Basics](../../../Read/heroes/the-basics.md) talks about [power rolls](power-roll.md).)

Unlike [power rolls](power-roll.md) made as [tests](../test/test.md) (see Chapter 9), ability rolls always do something useful. You're rolling to determine the impact of the ability, including how much damage it deals and any other effects it imposes based on the [tier outcome](tier-outcome.md) of the [power roll](power-roll.md). For instance, the [fury's](../../class/fury.md) [Brutal Slam](../../feature/ability/fury/level-1/brutal-slam.md) ability is a [melee](../combat/melee.md) [strike](../combat/strike.md) that targets one [adjacent](../combat/adjacent.md) creature (within 1 square), and which has the following effects:

- **Tier 1 (11 or lower):** The ability deals damage equal to 3 + your [Might](../character/might.md) score, then pushes the target back 1 square.
- **Tier 2 (12-16):** The ability deals damage equal to 6 + your [Might](../character/might.md) score, then pushes the target back 2 squares.
- **Tier 3 (17 or higher):** The ability deals damage equal to 9 + your [Might](../character/might.md) score, then pushes the target back 4 squares.

### Characteristics and Damage

Certain damage-dealing abilities note that damage as a number followed by a plus sign (+) and the letter M, A, R, I, or P. The indicated letter means you add your [characteristic](../character/characteristic.md) score—either [Might](../character/might.md), [Agility](../character/agility.md), [Reason](../character/reason.md), [Intuition](../character/intuition.md), or [Presence](../character/presence.md)—to the damage dealt by the ability. Certain abilities let you use your highest [characteristic](../character/characteristic.md) score for the [power roll](power-roll.md).

Using the [fury's](../../class/fury.md) [Brutal Slam](../../feature/ability/fury/level-1/brutal-slam.md) ability as an example again, that ability uses a [Might](../character/might.md) [power roll](power-roll.md) and features the following damage expressions in the three [tier outcomes](tier-outcome.md) of the [power roll](power-roll.md):

- **≤11:** 3 + M damage
- **12-16:** 6 + M damage
- **17+:** 9 + M damage

For a [fury](../../class/fury.md) with a [Might](../character/might.md) of 2, the ability's damage breakdown would be:

- **≤11:** 5
- **12-16:** 8
- **17+:** 11

The damage for these abilities increases at each [echelon](../general/echelon.md) of play, since your [characteristics](../character/characteristic.md) improve each time you reach a new [echelon](../general/echelon.md).

Some abilities, including your [free strikes](../../feature/common/main-actions/free-strike.md), allow you to pick which [characteristic](../character/characteristic.md) score you add to their damage. Such abilities use a format similar to "7 + M or A damage," indicating that you can add your [Might](../character/might.md) or your [Agility](../character/agility.md) to determine the damage.

(Chapter 10: [Combat](../../../Read/heroes/combat.md) has more information on damage.)

## Abilities With Damage and Effects

Strikes and area abilities can deal damage and have an additional effect on a target. The damage and the strength of the effect are determined by the [ability roll](ability-roll.md).

To keep things moving quickly and to make abilities easy to read during play, damage and effects are separated with a semicolon in a [power roll](power-roll.md) tier entry, with effects abbreviated whenever possible. An effect determined by a [power roll](power-roll.md) always applies to the target unless otherwise specified. For example, the [Brutal Slam](../../feature/ability/fury/level-1/brutal-slam.md) ability mentioned above has the following [power roll](power-roll.md) setup in the ability format:

**[Power Roll](power-roll.md) + [Might](../character/might.md):**

- **≤11:** 3 + M damage; push 1
- **12-16:** 6 + M damage; push 2
- **17+:** 9 + M damage; push 4

Unless otherwise indicated, any effects that are determined by a [power roll](power-roll.md)'s [tier outcome](tier-outcome.md) occur after the [power roll](power-roll.md)'s damage has been dealt to all targets. If an [ability roll](ability-roll.md) deals damage to multiple targets but its effect targets the creature using the ability or the Director, such as [Muse of Fire](../../feature/ability/elementalist/level-8/muse-of-fire.md), then the effect only occurs once, not once per target. If different tiered outcomes affect multiple targets, the creature using the ability picks which tier of rolled effect applies to them or the Director. If an ability creates multiple effects, those effects resolve in the order in which they are presented.
