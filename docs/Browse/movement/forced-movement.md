---
printing: "1.01b"
printing_book: "Heroes"
name: Forced Movement
scc: mcdm.heroes.v1/movement/forced-movement
type: movement
---

# Forced Movement

---

Some actions and maneuvers allow a creature to push, pull, or slide a target creature or object a specific [distance](../rule/combat/distance.md) across the battlefield. Collectively, these types of movement are called [forced movement](forced-movement.md).

- **Push X:** The creature moves the target up to X squares away from them in a straight line, without moving them vertically. Each square the creature moves the target must put the target farther away from them.
- **Pull X:** The creature moves the target up to X squares toward them in a straight line, without moving them vertically. Each square the creature moves the target must bring the target closer to them.
- **Slide X:** The creature moves the target up to X squares in any direction, except for vertically. Unlike a push or a pull, a slide doesn't need to be a straight line.

When you [force move](forced-movement.md) a target, you can always move that target fewer squares than the number indicated. For example, when the [conduit](../class/conduit.md) obtains a tier 3 "push 3" outcome with their Call the Thunder Down ability, they can push targets any [distance](../rule/combat/distance.md) up to 3 squares, including choosing to not move certain targets at all.

[Forced movement](forced-movement.md) ignores [difficult terrain](difficult-terrain.md) and never provokes [opportunity attacks](../rule/combat/opportunity-attack.md). When you force move a target into [damaging terrain](damaging-terrain.md) or into terrain that produces an effect, they are affected as if they had moved into it willingly.

> **Multitarget Abilities and [Forced Movement](forced-movement.md)**
>
> Some creatures can force move multiple creatures or objects with a single ability. Unless the ability specifies otherwise, the creature using the ability determines the order in which the targets are force moved. The creature should select each target individually and complete their [forced movement](forced-movement.md) before force moving the next target affected.

## Vertical

If a [forced movement](forced-movement.md) effect has the word "vertical" in front of it, then the [forced movement](forced-movement.md) can move a target up or down in addition to horizontally. For example, if a [forced movement](forced-movement.md) effect says "vertical push 5," then a creature targeted by the effect can be pushed up to 5 squares in any direction, as long as the [forced movement](forced-movement.md) is a straight line.

If a creature who can't [fly](fly.md) is left in midair at the end of a vertical forced move, they fall. [Forced movement](forced-movement.md) made against a creature who is [flying](fly.md) is always a vertical forced move, whether or not the effect specifies it.

Though you can't freely push, pull, or slide a target up and down unless that [forced movement](forced-movement.md) specifies "vertical," you can move them along a physical slope such as a hill or staircase. For a target to be force moved along a slope, each square of the slope can be no more than 1 square higher or lower than the previous square.

## Big Versus Little

When a larger creature force moves a smaller target with a [melee](../rule/combat/melee.md) weapon ability, the [distance](../rule/combat/distance.md) of the [forced movement](forced-movement.md) is increased by 1. If a smaller creature force moves a larger target with a [melee](../rule/combat/melee.md) weapon ability, the [distance](../rule/combat/distance.md) doesn't change.

## Slamming into Creatures

When you force move a creature into another creature, the movement ends and both creatures take 1 damage for each square remaining in the first creature's [forced movement](forced-movement.md). You can also force move an object into a creature. The object's movement ends, and the creature takes 1 damage for each square remaining in the object's [forced movement](forced-movement.md).

It's possible to move a creature or object of a larger [size](../rule/character/size.md) into several creatures of a smaller [size](../rule/character/size.md) at the same time. When this happens, the larger creature in the collision takes damage only once, not once for each smaller creature they slam into.

If a creature is killed by damage from an ability or effect that also [force move](forced-movement.md)s them, a second creature they are slammed into still takes damage unless the Director deems otherwise.

You can [force move](forced-movement.md) another creature into yourself with a pull or a slide.

## Slamming Into Objects

When a creature force moves a target into a stationary object that is the target's [size](../rule/character/size.md) or larger and the object doesn't break (see below), the movement ends and the target takes 2 damage plus 1 damage for each square remaining in their [forced movement](forced-movement.md).

If you [force move](forced-movement.md) a creature downward into an object that doesn't break (including the ground), they also take falling damage as if they had fallen the [distance](../rule/combat/distance.md) [force moved](forced-movement.md) and their [Agility](../rule/character/agility.md) score was 0 (see Falling above).

> **Tracking Object Forced-Movement Damage**
>
> At the Director's discretion, mundane objects that are [force moved](forced-movement.md) into creatures or other objects take damage as if they were creatures. Sturdy objects can take damage as follows before they are destroyed:
>
> - **Wood object:** 3 damage for each square it occupies
> - **Stone object:** 6 damage for each square it occupies
> - **Metal object:** 9 damage for each square it occupies
>
> More fragile objects are destroyed after taking any damage.

## Hurling Through Objects

When you move a creature into a mundane object, the object can break depending on how many squares of [forced movement](forced-movement.md) remain. The cost of being slammed into an object is tied to the damage a target takes for being hurled through it:

- It costs 1 remaining square of [forced movement](forced-movement.md) to destroy 1 square of glass. The creature moved takes 3 damage.
- It costs 3 remaining squares of [forced movement](forced-movement.md) to destroy 1 square of wood. The creature moved takes 5 damage.
- It costs 6 remaining squares of [forced movement](forced-movement.md) to destroy 1 square of stone. The creature moved takes 8 damage.
- It costs 9 remaining squares of [forced movement](forced-movement.md) to destroy 1 square of metal. The creature moved takes 11 damage.

If any [forced movement](forced-movement.md) remains after the object is destroyed, you can continue to move the creature who destroyed the object.

## Forced Into a Fall

If you can't [fly](fly.md) and are force moved across an open space that would cause you to fall, such as being pushed over the edge of a cliff, you continue moving the total [distance](../rule/combat/distance.md) you were moved first. If you are still in a position to fall when the [forced movement](forced-movement.md) ends, you fall.

## Stability {data-scc="mcdm.heroes.v1/rule.character/stability"}

Each creature has a stability that allows them to resist [forced movement](forced-movement.md). When a creature is force moved, they can reduce that movement up to a number of squares equal to their stability. Heroes start with stability 0 and can increase their stability through ancestry, class, and kit options.

A creature's stability can't be less than 0, even when reduced by a [penalty](../rule/dice/bonuses-and-penalties.md).

## "When a Creature Moves..."

Certain abilities and effects trigger when a creature moves into a particular area. [Forced movement](forced-movement.md) triggers these options unless otherwise noted, including an effect stating that a creature must willingly move to trigger it.

## Death Effects and Forced Movement

Some creatures have traits or abilities that trigger when they die or are reduced to 0 [Stamina](../rule/health/stamina.md). If such a creature is reduced to 0 [Stamina](../rule/health/stamina.md) by damage from an ability or effect that also force moves them, the [forced movement](forced-movement.md) takes place before the triggered effect.
