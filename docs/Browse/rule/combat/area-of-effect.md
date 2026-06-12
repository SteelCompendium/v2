---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
name: Area Abilities
scc: mcdm.heroes.v1/rule.combat/area-of-effect
type: rule
---

# Area Abilities

---

Area abilities cover a number of squares on the battlefield at once, creating an effect within that area that lets you target multiple creatures or objects. When an ability creates an area of effect, it sometimes notes a [distance](distance.md) for the effect in the form "within X." The number X tells you how many squares away from you the area can be. If an area ability doesn't have this [distance](distance.md), it originates from you and you are at the center of the area.

If an area ability originates a [distance](distance.md) away from you, then one square of the area of effect must be within that [distance](distance.md), and must also be within your [line of effect](line-of-effect.md) (see below). This square is referred to as the **origin square** of the area of effect. The area of effect can spread from the origin square however you choose, according to the rules for the shape and arrangement of that particular area.

You can place an area of effect to include one or more squares where you don't have [line of effect](line-of-effect.md), as long as you have [line of effect](line-of-effect.md) to the origin square. Unless otherwise noted, area abilities don't pass through solid barriers such as walls or ceilings, and they don't spread around corners.

An area ability might use any of the following areas of effect.

## Aura {data-scc="mcdm.heroes.v1/rule.combat/aura"}

When an ability creates an aura, that area is expressed as "X aura." The number X is the radius of the aura, which always originates from you and moves with you for the duration of the ability that created it. A creature or object must be within X squares of you to be targeted by an aura ability.

## Burst {data-scc="mcdm.heroes.v1/rule.combat/burst"}

When an ability creates a burst area, that area is expressed as "X burst." The number X is the radius of the burst, which always originates from you and lasts only for as long as it takes to affect its targets. A creature or object must be within X squares of you to be targeted by a burst ability.

## Cube {data-scc="mcdm.heroes.v1/rule.combat/cube"}

When an ability affects a cubic area, that area is expressed as "X cube." The number X is the length of each of the area's sides. A creature or object must be within the area to be targeted by a cube ability.

## Line {data-scc="mcdm.heroes.v1/rule.combat/line"}

When an ability affects a linear area, that area is expressed as "A x B line." The number A denotes the line's length in squares, while the number B equals the line's width and height in squares. When you create a line [area of effect](area-of-effect.md), the squares in that area must be in a straight line. A creature or object must be within the area to be targeted by a line ability.

## Wall {data-scc="mcdm.heroes.v1/rule.combat/wall"}

When an ability creates a wall, that area is expressed as "X wall." The number X is how many squares are used to make the wall. When you place a wall, you can build it one square at a time, but each square must share at least one side (not just a corner) with another square of the wall. A creature or object must be within the area to be targeted by a wall ability.

You can stack squares on top of each other to make the wall higher. Unless otherwise stated, a wall can't be placed in occupied squares, and a wall blocks [line of effect](line-of-effect.md).

> **Straight Lines**
>
> Talking about a straight line [area of effect](area-of-effect.md) on an encounter map doesn't mean the line can only be a straight vertical or horizontal line of contiguous squares. It means each square in the line's length must move in the same direction without bending back in an opposite direction. To make a line area quickly, pick your line's origin square, then pick each subsquent square in the line one at a time in a single direction without bending back in an opposite direction.
>
> Likewise, abilities and effects that require a creature to move in a straight line, such as the [Charge](../../feature/common/main-actions/charge.md) main action or [forced movement](../../movement/forced-movement.md) that is a push or a pull, don't have to take the form of a straight series of squares on the grid. Simply move the creature one square at a time in a single direction without ever bending back in a direction opposite to where they've already moved.
