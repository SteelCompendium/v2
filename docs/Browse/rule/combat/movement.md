---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 3
name: Movement
scc: mcdm.heroes.v1/rule.combat/movement
type: rule
---

# Movement

---

During combat, creatures can employ multiple mechanics that allow them to move around the battlefield. The most common of those mechanics is the [Advance](../../feature/common/move-actions/advance.md) or [Disengage](../../feature/common/move-actions/disengage.md) move action (detailed under Move Actions below), but abilities granted by your class, equipment, ancestry, title, or other options might allow you other ways to move.

Your hero starts with a [speed](../character/speed.md) granted by their ancestry—usually 5. This represents the maximum number of squares you can move when you take the [Advance](../../feature/common/move-actions/advance.md) move action or when another effect allows you to move. Your [speed](../character/speed.md) can be increased by your kit and other game options.

All squares [adjacent](adjacent.md) to your character cost 1 movement to move into. No, there's no Pythagorean theorem on the grid. It's a game, don't overthink it.

Your hero can move freely through an ally's space. You can move through an enemy's space, but that space is [difficult terrain](../../movement/difficult-terrain.md) (see below). You can't stop moving in any other creature's space, including to make a [strike](strike.md) or use a main action or maneuver while in that space and then continuing your move, unless that creature's [size](../character/size.md) is two or more [sizes](../character/size.md) greater or smaller than your own.

At the Director's discretion, you can be forced into the same space as another creature whose [size](../character/size.md) is within 1 of yours, such as by falling down a narrow shaft with such a creature already at the bottom. When you are squeezed into the same space as another creature whose [size](../character/size.md) is within 1 of yours, your [ability rolls](../dice/ability-roll.md) and [tests](../test/test.md) take a [bane](../dice/bane.md).

## Can't Exceed Speed

A single move or other effect can never allow a creature to move more squares than their [speed](../character/speed.md), unless the effect states otherwise. For example, a creature with [speed](../character/speed.md) 5 might have that [speed](../character/speed.md) reduced to 2 by the [slowed](../../condition/slowed.md) [condition](condition.md) (see [Conditions](condition.md) in Chapter 5: [Classes](../../../Read/heroes/classes.md)). If an ally then targets them with an effect that allows them to move up to 3 squares, the creature can move only 2 squares because that's their current [speed](../character/speed.md).

## Can't Cut Corners

A creature can't move diagonally when doing so would involve passing through the corner of a wall or some other object that completely fills the corner between the creature's space and the space they are moving to. This rule applies only to moving past objects, not moving past other creatures.

## Shifting {data-scc="mcdm.heroes.v1/movement/shifting"}

[Shifting](../../movement/shifting.md) is a careful form of movement that allows a creature to move safely past dangerous foes. Certain abilities, features, and other rules allow you to [shift](../../movement/shifting.md) a specific number of squares, sometimes up to your [speed](../character/speed.md). Whenever you [shift](../../movement/shifting.md), creatures can't make [opportunity attacks](opportunity-attack.md) against you triggered by that movement (see [Opportunity Attacks](opportunity-attack.md) later in this chapter).

You can't [shift](../../movement/shifting.md) into or while within [difficult terrain](../../movement/difficult-terrain.md) or [damaging terrain](../../movement/damaging-terrain.md) (see below). If a rule allows you to [shift](../../movement/shifting.md), you can choose to instead move up to the number of squares you would have shifted (for example, to get out of [difficult terrain](../../movement/difficult-terrain.md)). However, you can't combine moving and [shifting](../../movement/shifting.md) within that movement.

## Movement Types

Creatures in the game can use eight types of movement: walk, [burrow](../../movement/burrow.md), climb, swim, jump, [crawl](../../movement/crawl.md), [fly](../../movement/fly.md), and [teleport](../../movement/teleport.md).

### Walk {data-scc="mcdm.heroes.v1/movement/walk"}

Walking is the most common movement type, whether it refers to ambulating on legs, rolling, slithering, or some other default method of movement. Unless specified otherwise, all creatures can move over solid horizontal ground without any problem.

### Burrow {data-scc="mcdm.heroes.v1/movement/burrow"}

A creature who has "[burrow](../../movement/burrow.md)" in their [speed](../character/speed.md) entry, or who gains the temporary ability to [burrow](../../movement/burrow.md), can move through dirt horizontally, and either has the means to breathe while doing so or doesn't require air to live. Such creatures can't move through more solid ground, such as stone, unless their stat block or the effect that lets them [burrow](../../movement/burrow.md) says otherwise. Similarly, a [burrowing](../../movement/burrow.md) creature doesn't leave a tunnel unless the rules say so.

#### Dig Maneuver

It takes extra effort to dig vertically through the ground as opposed to tunneling horizontally, requiring a creature to use a special maneuver. To use the Dig maneuver, a creature must have "[burrow](../../movement/burrow.md)" in their [speed](../character/speed.md) entry, they must have a [speed](../character/speed.md) that is equal to or greater than their [size](../character/size.md), and they must be touching terrain that can be burrowed through.

When a creature uses the Dig maneuver, they can move vertically up to a number of squares equal to their [size](../character/size.md). If a [burrowing](../../movement/burrow.md) creature has a creature who is not unconscious [grabbed](../../condition/grabbed.md), they can't willingly move deeper into the ground. It's too difficult to dig with a flailing enemy in your claws.

#### Targeting Burrowing Creatures

If you are on the ground, you have [line of effect](line-of-effect.md) to a [burrowing](../../movement/burrow.md) creature if that creature occupies 1 or more squares of terrain that can be burrowed through and that touch the ground, and if you have [line of effect](line-of-effect.md) to any of those squares. The [burrowing](../../movement/burrow.md) creature gains the benefit of [cover](cover.md) from you.

If you are completely beneath the ground while [burrowing](../../movement/burrow.md), you don't have [line of effect](line-of-effect.md) to any creature on the surface unless a rule states otherwise.

If you are completely beneath the ground while [burrowing](../../movement/burrow.md) and are [adjacent](adjacent.md) to another creature who is [burrowing](../../movement/burrow.md), you have [line of effect](line-of-effect.md) to that creature, though you both have [cover](cover.md) from each other.

You can't gain the benefit of [high ground](../../movement/high-ground.md) (see below) against creatures who are completely beneath the ground while [burrowing](../../movement/burrow.md).

#### Non-Burrowing Creatures

If you are on the ground and [adjacent](adjacent.md) to a creature who is beneath the ground while [burrowing](../../movement/burrow.md), you can use a maneuver to [pull](../../movement/forced-movement.md) that creature up 1 square out of the ground, provided the creature is willing.

If a creature who can't [burrow](../../movement/burrow.md) wants to dig into the ground, they can use the following ability provided their [speed](../character/speed.md) is 2 or more.

#### Claw Dirt {data-scc="mcdm.heroes.v1/feature.ability.common/claw-dirt"}

<address class="sc-embed" data-search-exclude="">
<article class="sc-ability sc-fil" data-action="maneuver" data-conditions="slowed weakened">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Claw Dirt</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../character/might/">Might</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">You can move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (<a href="../end-of-turn/">EoT</a>).</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">You can use your main action this turn to move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are <a href="../../../condition/slowed/">slowed</a> (<a href="../end-of-turn/">EoT</a>).</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">You can move 1 square into, out of, or through ground you are touching that can be burrowed through.</span></div>
</div>
</div>
</article>
</address>

#### Burrowing Forced Movement

While a creature who is completely beneath the ground while [burrowing](../../movement/burrow.md) is force moved by movement that isn't vertical, they aren't moved, and they take 1 damage for each square they would have been force moved. If the [forced movement](../../movement/forced-movement.md) is vertical, the creature is moved through the dirt as if it were air.

### Climb or Swim {data-scc="mcdm.heroes.v1/movement/climb-or-swim"}

A creature who has "climb" in their [speed](../character/speed.md) entry, or who gains the temporary ability to automatically climb, can climb across vertical and horizontal surfaces at full [speed](../character/speed.md). Likewise, a creature who has "swim" in their [speed](../character/speed.md) entry, or who gains the temporary ability to automatically swim, can swim in liquid at full [speed](../character/speed.md).

Creatures without those types of movement can still climb or swim when a rule allows them to move, but each square of climbing or swimming costs 2 squares of movement. If a surface is difficult to climb (for instance, a sheer cliff or ice-covered wall) or a liquid is hard to swim through (a raging river or whirlpool), the Director can call for a [Might](../character/might.md) [test](../test/test.md). On a failure, a creature can't climb or swim but wastes no movement in the attempt. The Director can also impose other consequences to failure, such as being caught in the spinning current of a whirlpool.

#### Climbing Other Creatures

You can attempt to climb a creature whose [size](../character/size.md) is greater than yours. If the creature is willing, you can climb them without any trouble. If the creature is unwilling, you make the following [test](../test/test.md):

**[Power Roll](../dice/power-roll.md) + [Might](../character/might.md) or [Agility](../character/agility.md):**

- **≤11:** You fail to climb the creature, and they can make a [free strike](../../feature/common/main-actions/free-strike.md) against you.
- **12-16:** You fail to climb the creature.
- **17+:** You climb the creature.

While you climb or ride a creature, you gain an [edge](../dice/edge.md) on [melee](melee.md) abilities used against them. The creature can use a maneuver to attempt to knock you off, forcing you to make the following [test](../test/test.md):

**[Power Roll](../dice/power-roll.md) + [Might](../character/might.md) or [Agility](../character/agility.md):**

- **≤11:** You fall off the creature into an unoccupied [adjacent](adjacent.md) space of your choice, taking falling damage and landing [prone](../../condition/prone.md) as usual (see Falling below).
- **12-16:** You slide down the creature into an unoccupied [adjacent](adjacent.md) space of your choice and don't l[and prone](../../condition/prone.md).
- **17+:** You continue to hold on to the creature.

If you are [knocked prone](../../condition/prone.md) while climbing or riding a creature, you fall and l[and prone](../../condition/prone.md) in an [adjacent](adjacent.md) space of your choice, taking damage as usual from the fall.

### Jump {data-scc="mcdm.heroes.v1/movement/jump"}

Whenever an effect allows you to move (including using the [Advance](../../feature/common/move-actions/advance.md) move action), you can automatically long jump a number of squares up to your [Might](../character/might.md) or [Agility](../character/agility.md) score (your choice; minimum 1 square) as part of that movement. The height of your jump is automatically 1 square as part of that movement.

If you want to jump even longer or higher than your baseline jump allows, make a [Might](../character/might.md) or [Agility](../character/agility.md) [test](../test/test.md):

**[Power Roll](../dice/power-roll.md) + [Might](../character/might.md) or [Agility](../character/agility.md):**

- **≤11:** You don't jump any farther than your baseline jump allows.
- **12-16:** You jump 1 square longer and higher than your baseline jump allows.
- **17+:** You jump 2 squares longer and higher than your baseline jump allows.

You can't jump farther or higher than the [distance](distance.md) of the effect that allows you to move. You can't jump out of [difficult terrain](../../movement/difficult-terrain.md) or [damaging terrain](../../movement/damaging-terrain.md) (see below).

### Crawl {data-scc="mcdm.heroes.v1/movement/crawl"}

If you [are prone](../../condition/prone.md) (see [Conditions](condition.md) in Chapter 5: [Classes](../../../Read/heroes/classes.md)), you can remain prone and [crawl](../../movement/crawl.md) on the ground. Doing so costs you 1 additional square of movement for every square you [crawl](../../movement/crawl.md). If you intentionally want to [crawl](../../movement/crawl.md), you can [fall prone](../../condition/prone.md) as a [free maneuver](free-maneuver.md). While voluntarily prone, you can choose to stand as a [free maneuver](free-maneuver.md).

### Fly {data-scc="mcdm.heroes.v1/movement/fly"}

A creature who has "[fly](../../movement/fly.md)" in their [speed](../character/speed.md) entry, or who gains the temporary ability to [fly](../../movement/fly.md), can move through the air vertically or horizontally at full [speed](../character/speed.md) and remain in midair. If a [flying](../../movement/fly.md) creature is [knocked prone](../../condition/prone.md) or has their [speed](../character/speed.md) reduced to 0, they fall (see Falling below).

### Hover {data-scc="mcdm.heroes.v1/movement/hover"}

A creature who has "[hover](../../movement/hover.md)" in their [speed](../character/speed.md) entry (most commonly alongside "[fly](../../movement/fly.md)" or "[teleport](../../movement/teleport.md)"), or who gains the temporary ability to [hover](../../movement/hover.md), can remain motionless in midair. They don't fall even if they are [knocked prone](../../condition/prone.md) or their [speed](../character/speed.md) is reduced to 0.

### Teleport {data-scc="mcdm.heroes.v1/movement/teleport"}

When a creature [teleports](../../movement/teleport.md), they move from one space to another space instantaneously. The following rules apply to [teleporting](../../movement/teleport.md):

- [Teleporting](../../movement/teleport.md) doesn't provoke [opportunity attacks](opportunity-attack.md) or other effects that are triggered by a creature moving.
- When a creature [teleports](../../movement/teleport.md), they bypass any obstacles between the space they leave and their destination space.
- A creature [teleporting](../../movement/teleport.md) themself must have [line of effect](line-of-effect.md) to their destination space. A creature [teleporting](../../movement/teleport.md) another creature must have [line of effect](line-of-effect.md) from the space the [teleport](../../movement/teleport.md)ed creature leaves and to their destination space.
- A [teleporting](../../movement/teleport.md) creature's destination space can't be occupied by another creature or object.
- The effect that lets a creature [teleport](../../movement/teleport.md) indicates how far they can [teleport](../../movement/teleport.md). That [distance](distance.md) can be greater than the creature's [speed](../character/speed.md).
- If a creature can [teleport](../../movement/teleport.md) as part of their usual movement, they can use the [Advance](../../feature/common/move-actions/advance.md) move action to [teleport](../../movement/teleport.md) a number of squares up to their usual [speed](../character/speed.md), unmodified by [conditions](condition.md) or effects.
- If a creature [teleports](../../movement/teleport.md) [while prone](../../condition/prone.md), they can be standing when they reach their destination space provided they are able to stand. If a prone creature is [teleport](../../movement/teleport.md)ed by another creature, it is up to that creature whether the [teleport](../../movement/teleport.md)ed creature remains prone or stands if they are able.
- If you [teleport](../../movement/teleport.md) while affected by the [grabbed](../../condition/grabbed.md) or [restrained](../../condition/restrained.md) [conditions](condition.md), those [conditions](condition.md) end for you.
- When a creature [teleports](../../movement/teleport.md), they must leave the space where they start and enter a new space. A creature can't [teleport](../../movement/teleport.md) to and from the same space.

## Falling {data-scc="mcdm.heroes.v1/rule.health/falling"}

When a creature falls 2 or more squares and lands on the ground, they take 2 damage for each square they fall (to a maximum of 50 damage) and l[and prone](../../condition/prone.md). A creature who falls can reduce the effective height of the fall by a number of squares equal to their [Agility](../character/agility.md) score (to a minimum of 0). Falling into liquid that is 1 square or more deep reduces the effective height of a fall by 4 squares (to a minimum of 0).

Falling is not [forced movement](../../movement/forced-movement.md), but being force moved downward is considered falling. Movement from falling doesn't provoke [opportunity attacks](opportunity-attack.md) (see [Opportunity Attacks](opportunity-attack.md) below).

### Falling Onto Another Creature

A creature who falls and lands on another creature causes that creature to take the same damage from the fall. The falling creature then lands prone in the nearest unoccupied space of their choice. If the falling creature's [size](../character/size.md) is greater than the [Might](../character/might.md) score of the creature they land on, that creature is [knocked prone](../../condition/prone.md).

### Falling Far

When a creature first falls from a great height, they fall 100 squares in the first round. At the end of each subsequent round that they remain falling, they fall another 100 squares.

## Difficult Terrain {data-scc="mcdm.heroes.v1/movement/difficult-terrain"}

Areas of thick underbrush, rubble, spiderwebs, or other obstacles to movement create [difficult terrain](../../movement/difficult-terrain.md). It costs 1 additional square of movement to enter a square of [difficult terrain](../../movement/difficult-terrain.md).

## Damaging Terrain {data-scc="mcdm.heroes.v1/movement/damaging-terrain"}

Areas of acid, fire, sharp rocks, lava, or any other terrain that causes damage to creatures within it is [damaging terrain](../../movement/damaging-terrain.md). The damage dealt by [damaging terrain](../../movement/damaging-terrain.md) is noted in the terrain's description or in the description of the effect that creates the terrain.

## High Ground {data-scc="mcdm.heroes.v1/movement/high-ground"}

Whenever a creature uses an ability to target a creature or object while standing on the ground and occupying a space that is fully above the target's space, they gain an [edge](../dice/edge.md) on the [power roll](../dice/power-roll.md) against that target. To be fully above a target, the bottom of a creature's space must be higher than or bordering on the top of the target's space.

A creature can gain this benefit while climbing only if they have "climb" in their [speed](../character/speed.md) entry or can automatically climb at full [speed](../character/speed.md) while moving.

## Forced Movement {data-scc="mcdm.heroes.v1/movement/forced-movement"}

Some actions and maneuvers allow a creature to push, pull, or slide a target creature or object a specific [distance](distance.md) across the battlefield. Collectively, these types of movement are called [forced movement](../../movement/forced-movement.md).

- **Push X:** The creature moves the target up to X squares away from them in a straight line, without moving them vertically. Each square the creature moves the target must put the target farther away from them.
- **Pull X:** The creature moves the target up to X squares toward them in a straight line, without moving them vertically. Each square the creature moves the target must bring the target closer to them.
- **Slide X:** The creature moves the target up to X squares in any direction, except for vertically. Unlike a push or a pull, a slide doesn't need to be a straight line.

When you [force move](../../movement/forced-movement.md) a target, you can always move that target fewer squares than the number indicated. For example, when the [conduit](../../class/conduit.md) obtains a tier 3 "push 3" outcome with their Call the Thunder Down ability, they can push targets any [distance](distance.md) up to 3 squares, including choosing to not move certain targets at all.

[Forced movement](../../movement/forced-movement.md) ignores [difficult terrain](../../movement/difficult-terrain.md) and never provokes [opportunity attacks](opportunity-attack.md). When you force move a target into [damaging terrain](../../movement/damaging-terrain.md) or into terrain that produces an effect, they are affected as if they had moved into it willingly.

> **Multitarget Abilities and [Forced Movement](../../movement/forced-movement.md)**
>
> Some creatures can force move multiple creatures or objects with a single ability. Unless the ability specifies otherwise, the creature using the ability determines the order in which the targets are force moved. The creature should select each target individually and complete their [forced movement](../../movement/forced-movement.md) before force moving the next target affected.

### Vertical

If a [forced movement](../../movement/forced-movement.md) effect has the word "vertical" in front of it, then the [forced movement](../../movement/forced-movement.md) can move a target up or down in addition to horizontally. For example, if a [forced movement](../../movement/forced-movement.md) effect says "vertical push 5," then a creature targeted by the effect can be pushed up to 5 squares in any direction, as long as the [forced movement](../../movement/forced-movement.md) is a straight line.

If a creature who can't [fly](../../movement/fly.md) is left in midair at the end of a vertical forced move, they fall. [Forced movement](../../movement/forced-movement.md) made against a creature who is [flying](../../movement/fly.md) is always a vertical forced move, whether or not the effect specifies it.

Though you can't freely push, pull, or slide a target up and down unless that [forced movement](../../movement/forced-movement.md) specifies "vertical," you can move them along a physical slope such as a hill or staircase. For a target to be force moved along a slope, each square of the slope can be no more than 1 square higher or lower than the previous square.

### Big Versus Little

When a larger creature force moves a smaller target with a [melee](melee.md) weapon ability, the [distance](distance.md) of the [forced movement](../../movement/forced-movement.md) is increased by 1. If a smaller creature force moves a larger target with a [melee](melee.md) weapon ability, the [distance](distance.md) doesn't change.

### Slamming into Creatures

When you force move a creature into another creature, the movement ends and both creatures take 1 damage for each square remaining in the first creature's [forced movement](../../movement/forced-movement.md). You can also force move an object into a creature. The object's movement ends, and the creature takes 1 damage for each square remaining in the object's [forced movement](../../movement/forced-movement.md).

It's possible to move a creature or object of a larger [size](../character/size.md) into several creatures of a smaller [size](../character/size.md) at the same time. When this happens, the larger creature in the collision takes damage only once, not once for each smaller creature they slam into.

If a creature is killed by damage from an ability or effect that also [force move](../../movement/forced-movement.md)s them, a second creature they are slammed into still takes damage unless the Director deems otherwise.

You can [force move](../../movement/forced-movement.md) another creature into yourself with a pull or a slide.

### Slamming Into Objects

When a creature force moves a target into a stationary object that is the target's [size](../character/size.md) or larger and the object doesn't break (see below), the movement ends and the target takes 2 damage plus 1 damage for each square remaining in their [forced movement](../../movement/forced-movement.md).

If you [force move](../../movement/forced-movement.md) a creature downward into an object that doesn't break (including the ground), they also take falling damage as if they had fallen the [distance](distance.md) [force moved](../../movement/forced-movement.md) and their [Agility](../character/agility.md) score was 0 (see Falling above).

> **Tracking Object Forced-Movement Damage**
>
> At the Director's discretion, mundane objects that are [force moved](../../movement/forced-movement.md) into creatures or other objects take damage as if they were creatures. Sturdy objects can take damage as follows before they are destroyed:
>
> - **Wood object:** 3 damage for each square it occupies
> - **Stone object:** 6 damage for each square it occupies
> - **Metal object:** 9 damage for each square it occupies
>
> More fragile objects are destroyed after taking any damage.

### Hurling Through Objects

When you move a creature into a mundane object, the object can break depending on how many squares of [forced movement](../../movement/forced-movement.md) remain. The cost of being slammed into an object is tied to the damage a target takes for being hurled through it:

- It costs 1 remaining square of [forced movement](../../movement/forced-movement.md) to destroy 1 square of glass. The creature moved takes 3 damage.
- It costs 3 remaining squares of [forced movement](../../movement/forced-movement.md) to destroy 1 square of wood. The creature moved takes 5 damage.
- It costs 6 remaining squares of [forced movement](../../movement/forced-movement.md) to destroy 1 square of stone. The creature moved takes 8 damage.
- It costs 9 remaining squares of [forced movement](../../movement/forced-movement.md) to destroy 1 square of metal. The creature moved takes 11 damage.

If any [forced movement](../../movement/forced-movement.md) remains after the object is destroyed, you can continue to move the creature who destroyed the object.

### Forced Into a Fall

If you can't [fly](../../movement/fly.md) and are force moved across an open space that would cause you to fall, such as being pushed over the edge of a cliff, you continue moving the total [distance](distance.md) you were moved first. If you are still in a position to fall when the [forced movement](../../movement/forced-movement.md) ends, you fall.

### Stability {data-scc="mcdm.heroes.v1/rule.character/stability"}

Each creature has a stability that allows them to resist [forced movement](../../movement/forced-movement.md). When a creature is force moved, they can reduce that movement up to a number of squares equal to their stability. Heroes start with stability 0 and can increase their stability through ancestry, class, and kit options.

A creature's stability can't be less than 0, even when reduced by a [penalty](../dice/bonuses-and-penalties.md).

### "When a Creature Moves..."

Certain abilities and effects trigger when a creature moves into a particular area. [Forced movement](../../movement/forced-movement.md) triggers these options unless otherwise noted, including an effect stating that a creature must willingly move to trigger it.

### Death Effects and Forced Movement

Some creatures have traits or abilities that trigger when they die or are reduced to 0 [Stamina](../health/stamina.md). If such a creature is reduced to 0 [Stamina](../health/stamina.md) by damage from an ability or effect that also force moves them, the [forced movement](../../movement/forced-movement.md) takes place before the triggered effect.
