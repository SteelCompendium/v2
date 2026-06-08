---
name: Burrow
scc: mcdm.heroes.v1/movement/burrow
type: movement
---

# Burrow

---

A creature who has "[burrow](burrow.md)" in their [speed](../rule/character/speed.md) entry, or who gains the temporary ability to [burrow](burrow.md), can move through dirt horizontally, and either has the means to breathe while doing so or doesn't require air to live. Such creatures can't move through more solid ground, such as stone, unless their stat block or the effect that lets them [burrow](burrow.md) says otherwise. Similarly, a [burrowing](burrow.md) creature doesn't leave a tunnel unless the rules say so.

## Dig Maneuver

It takes extra effort to dig vertically through the ground as opposed to tunneling horizontally, requiring a creature to use a special maneuver. To use the Dig maneuver, a creature must have "[burrow](burrow.md)" in their [speed](../rule/character/speed.md) entry, they must have a [speed](../rule/character/speed.md) that is equal to or greater than their [size](../rule/character/size.md), and they must be touching terrain that can be burrowed through.

When a creature uses the Dig maneuver, they can move vertically up to a number of squares equal to their [size](../rule/character/size.md). If a [burrowing](burrow.md) creature has a creature who is not unconscious [grabbed](../condition/grabbed.md), they can't willingly move deeper into the ground. It's too difficult to dig with a flailing enemy in your claws.

## Targeting Burrowing Creatures

If you are on the ground, you have [line of effect](../rule/combat/line-of-effect.md) to a [burrowing](burrow.md) creature if that creature occupies 1 or more squares of terrain that can be burrowed through and that touch the ground, and if you have [line of effect](../rule/combat/line-of-effect.md) to any of those squares. The [burrowing](burrow.md) creature gains the benefit of [cover](../rule/combat/cover.md) from you.

If you are completely beneath the ground while [burrowing](burrow.md), you don't have [line of effect](../rule/combat/line-of-effect.md) to any creature on the surface unless a rule states otherwise.

If you are completely beneath the ground while [burrowing](burrow.md) and are adjacent to another creature who is [burrowing](burrow.md), you have [line of effect](../rule/combat/line-of-effect.md) to that creature, though you both have [cover](../rule/combat/cover.md) from each other.

You can't gain the benefit of [high ground](high-ground.md) (see below) against creatures who are completely beneath the ground while [burrowing](burrow.md).

## Non-Burrowing Creatures

If you are on the ground and adjacent to a creature who is beneath the ground while [burrowing](burrow.md), you can use a maneuver to pull that creature up 1 square out of the ground, provided the creature is willing.

If a creature who can't [burrow](burrow.md) wants to dig into the ground, they can use the following ability provided their [speed](../rule/character/speed.md) is 2 or more.

## Claw Dirt {data-scc="mcdm.heroes.v1/feature.ability.common/claw-dirt"}

| **-**       | **Maneuver** |
|-------------|-------------:|
| **📏 Self** |  **🎯 Self** |

**[Power Roll](../rule/dice/power-roll.md) + [Might](../rule/character/might.md):**

- **≤11:** You can move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are [slowed](../condition/slowed.md) and [weakened](../condition/weakened.md) ([EoT](../rule/combat/end-of-turn.md)).
- **12-16:** You can use your main action this turn to move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are [slowed](../condition/slowed.md) ([EoT](../rule/combat/end-of-turn.md)).
- **17+:** You can move 1 square into, out of, or through ground you are touching that can be burrowed through.

## Burrowing Forced Movement

While a creature who is completely beneath the ground while [burrowing](burrow.md) is force moved by movement that isn't vertical, they aren't moved, and they take 1 damage for each square they would have been force moved. If the [forced movement](forced-movement.md) is vertical, the creature is moved through the dirt as if it were air.
