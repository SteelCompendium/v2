---
name: Conditions
scc: mcdm.heroes.v1/rule.combat/condition
type: rule
---

# Conditions

---

Some abilities and other effects apply specific negative effects called conditions to a creature. The following conditions show up regularly in the game and can be tracked on your character sheet when they affect your hero.

## Bleeding {data-scc="mcdm.heroes.v1/condition/bleeding"}

While a creature is [bleeding](../../condition/bleeding.md), whenever they use a main action, use a triggered action, or make a test or ability roll using [Might](../character/might.md) or [Agility](../character/agility.md), they lose [Stamina](../health/stamina.md) equal to 1d6 + their level after the main action, triggered action, or power roll is resolved. This [Stamina](../health/stamina.md) loss can't be prevented in any way, and only happens once per action.

You take damage from this condition when you use a main action off your turn. For example, a signature ability used as a free triggered action with the assistance of the [tactician's](../../class/tactician.md) [Strike Now](../../feature/ability/tactician/level-1/strike-now.md) ability triggers the damage from the [bleeding](../../condition/bleeding.md) condition.

## Dazed {data-scc="mcdm.heroes.v1/condition/dazed"}

A creature who is [dazed](../../condition/dazed.md) can do only one thing on their turn: use a main action, use a maneuver, or use a move action. A [dazed](../../condition/dazed.md) creature also can't use triggered actions, free triggered actions, or free maneuvers.

## Frightened {data-scc="mcdm.heroes.v1/condition/frightened"}

When a creature is [frightened](../../condition/frightened.md), any ability roll they make against the source of their fear takes a [bane](../dice/bane.md). If that source is a creature, their ability rolls made against the [frightened](../../condition/frightened.md) creature gain an [edge](../dice/edge.md). A [frightened](../../condition/frightened.md) creature can't willingly move closer to the source of their fear if they know the location of that source. If a creature gains the [frightened](../../condition/frightened.md) condition from one source while already [frightened](../../condition/frightened.md) by a different source, the new condition replaces the old one.

## Grabbed {data-scc="mcdm.heroes.v1/condition/grabbed"}

A creature who is [grabbed](../../condition/grabbed.md) has speed 0, can't be [force moved](../../movement/forced-movement.md) except by a creature, object, or effect that has them [grabbed](../../condition/grabbed.md), can't use the [Knockback](../../feature/common/maneuvers/knockback.md) maneuver (see Maneuvers in Chapter 10: [Combat](../../../Read/heroes/combat.md)), and takes a [bane](../dice/bane.md) on abilities that don't target the creature, object, or effect that has them [grabbed](../../condition/grabbed.md). If a creature is [grabbed](../../condition/grabbed.md) by another creature and that creature moves, they bring the [grabbed](../../condition/grabbed.md) creature with them. If a creature's [size](../character/size.md) is equal to or less than the size of a creature they have [grabbed](../../condition/grabbed.md), their speed is halved while they have that creature [grabbed](../../condition/grabbed.md).

A creature who has another creature [grabbed](../../condition/grabbed.md) can use a maneuver to move the [grabbed](../../condition/grabbed.md) creature into an unoccupied space adjacent to them.

A creature can release a creature they have [grabbed](../../condition/grabbed.md) at any time to end that condition (no action required). A [grabbed](../../condition/grabbed.md) creature can attempt to escape being [grabbed](../../condition/grabbed.md) using the [Escape Grab](../../feature/common/maneuvers/escape-grab.md) maneuver (see Chapter 10: [Combat](../../../Read/heroes/combat.md)). If a [grabbed](../../condition/grabbed.md) creature [teleports](../../movement/teleport.md), or if either the [grabbed](../../condition/grabbed.md) creature or the creature grabbing them is [force moved](../../movement/forced-movement.md) so that both creatures are not adjacent to each other, that creature is no longer [grabbed](../../condition/grabbed.md).

A creature can grab only creatures of their [size](../character/size.md) or smaller. If a creature's [Might](../character/might.md) score is 2 or higher, they can grab any creature larger than them with a [size](../character/size.md) equal to or less than their [Might](../character/might.md) score.

Unless otherwise indicated, a creature can grab only one creature at a time.

## Prone {data-scc="mcdm.heroes.v1/condition/prone"}

While a creature is [prone](../../condition/prone.md), they are flat on the ground, any strike they make takes a [bane](../dice/bane.md), and melee abilities used against them gain an [edge](../dice/edge.md). A [prone](../../condition/prone.md) creature must [crawl](../../movement/crawl.md) to move along the ground, which costs 1 additional square of movement for every square crawled. A creature can't climb, [jump](../../movement/jump.md), swim, or [fly](../../movement/fly.md) while [prone](../../condition/prone.md). If they are climbing, [flying](../../movement/fly.md), or jumping when knocked [prone](../../condition/prone.md), they fall.

Unless the ability or effect that imposed the [prone](../../condition/prone.md) condition says otherwise, a [prone](../../condition/prone.md) creature can stand up using the [Stand Up](../../feature/common/maneuvers/stand-up.md) maneuver (see Maneuvers in Chapter 10: [Combat](../../../Read/heroes/combat.md)). A creature adjacent to a willing [prone](../../condition/prone.md) creature can likewise use the [Stand Up](../../feature/common/maneuvers/stand-up.md) maneuver to make that creature stand up.

## Restrained {data-scc="mcdm.heroes.v1/condition/restrained"}

A creature who is [restrained](../../condition/restrained.md) has speed 0, can't use the [Stand Up](../../feature/common/maneuvers/stand-up.md) maneuver, and can't be [force moved](../../movement/forced-movement.md). A [restrained](../../condition/restrained.md) creature takes a [bane](../dice/bane.md) on ability rolls and on [Might](../character/might.md) and [Agility](../character/agility.md) tests, and abilities used against them gain an [edge](../dice/edge.md).

If a creature [teleports](../../movement/teleport.md) while [restrained](../../condition/restrained.md), that condition ends.

## Slowed {data-scc="mcdm.heroes.v1/condition/slowed"}

A creature who is [slowed](../../condition/slowed.md) has speed 2 unless their speed is already lower, and they can't [shift](../../movement/shifting.md).

## Taunted {data-scc="mcdm.heroes.v1/condition/taunted"}

A creature who is [taunted](../../condition/taunted.md) has a double [bane](../dice/bane.md) on ability rolls for any ability that doesn't target the creature who [taunted](../../condition/taunted.md) them, as long as they have line of effect to that creature. If a creature gains the [taunted](../../condition/taunted.md) condition from one source while already [taunted](../../condition/taunted.md) by a different source, the new condition replaces the old one.

## Weakened {data-scc="mcdm.heroes.v1/condition/weakened"}

A creature who is [weakened](../../condition/weakened.md) takes a [bane](../dice/bane.md) on power rolls.
