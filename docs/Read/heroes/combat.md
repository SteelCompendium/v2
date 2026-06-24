---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  exclude: true
name: Combat
order: 10
scc: mcdm.heroes.v1/chapter/combat
type: chapter
---

# Combat

---

When the heroes face a problem that can be solved only with action, or when they come up against creatures who want to harm them, it's time to throw down!

### Set the Map

When combat begins, the Director should position miniatures or tokens on a gridded map to represent the environment, the heroes, their foes, and any other creatures in the battle.

> **How Big is a Square?**
>
> It's helpful to know how big a square is for abilities and features that heroes and [NPCs](../../Browse/rule/general/npc.md) can use outside of combat. By default, a square is 5 feet on all sides. But the Director can change this measurement to 2 yards, 2 meters, 1 meter, or any other measurement you prefer, as long as that scale stays consistent throughout your game.

#### Size and Space {data-scc="mcdm.heroes.v1/rule.character/size"}

A creature's size indicates how many squares they occupy during combat, which defines the creature's space. If a creature's size is 1, they occupy a space of 1 square. If a creature is larger than 1 square, their size equals the number of squares they take up in length, width, and height. For example, a horse has a size of 2, which means that during combat, they occupy a space that is 2 squares long, 2 squares wide, and 2 squares high. You could also think of that space as a [cube](../../Browse/rule/combat/cube.md) that is 2 squares on all sides.

The minimum amount of space a creature can take up during combat is 1 square, but size 1 creatures can run the range from tiny pixies to small [polders](../../Browse/ancestry/polder.md), medium [humans](../../Browse/ancestry/human.md), and large [hakaan](../../Browse/ancestry/hakaan.md). As such, for creatures of size 1, that size is further broken down as 1T, 1S, 1M, or 1L—abbreviations for tiny, small, medium, and large. Size 1T is one size smaller than size 1S, two sizes smaller than 1M, three sizes smaller than 1L, and four sizes smaller than size 2. If a mechanic mentions size 1 creatures, that mechanic applies to all creatures of size 1.

Objects also have a size rating, which usually indicates how many squares they occupy. Some objects are identified as having an irregular size, with that size instead representing the object's mass and weight relative to a creature of the same size. If a mechanic mentions objects of a certain size, that mechanic includes all objects of that size, including irregular objects.

The Creature Sizes table shows example sizes for creatures up to size 5, but larger sizes are possible. There is no limit to what a creature's size might be.

###### Creature Sizes Table

| [Size](../../Browse/rule/character/size.md)  | Example Creature |
|-------|------------------|
| 1T    | Pixie            |
| 1S    | [Polder](../../Browse/ancestry/polder.md)           |
| 1M    | [Human](../../Browse/ancestry/human.md)            |
| 1L    | [Hakaan](../../Browse/ancestry/hakaan.md)           |
| 2     | Ogre             |
| 3     | Shambling mound  |
| 4     | Hill giant       |
| 5     | Omen dragon      |

#### Sides {data-scc="mcdm.heroes.v1/rule.combat/side"}

Every combat encounter is a conflict between two sides. The heroes and any of their allies are one side, controlled by the players. Any creatures who oppose the heroes are the other side, controlled by the Director. All creatures who oppose the heroes are on the same side, even if those creatures also oppose each other. For example, if the heroes are battling a group of bandits when a kingfissure worm suddenly [bursts](../../Browse/rule/combat/burst.md) into the fray to devour player characters and brigands alike, the worm is still on the side of the bandits for the purpose of the game's combat rules.

> **[NPC](../../Browse/rule/general/npc.md) Allies**
>
> If an [NPC](../../Browse/rule/general/npc.md) ally fights alongside the heroes, the Director should give the players the ally's stat block and let them control the [NPC](../../Browse/rule/general/npc.md) during combat. The Director has enough to worry about. As well, any missteps, mistakes, or triumphs the ally makes will be thanks to the decisions of the players and not the Director, which can make the outcome of the battle more satisfying for the players.

### Combat Round {data-scc="mcdm.heroes.v1/rule.combat/combat-round"}

Combat takes place over a series of combat rounds. During a combat round, each creature in the battle takes a [turn](../../Browse/rule/combat/turn.md). Once every creature has taken a [turn](../../Browse/rule/combat/turn.md), a new round begins.

#### When Does Combat Start?

Combat starts as soon as one creature intends to harm another, or when some environmental effect is in a position to deal damage to or impose other negative effects on one or more creatures. This means that even before the action happens, a hero can't use a [heroic ability](../../Browse/rule/general/heroic-ability.md) without spending their [Heroic Resource](../../Browse/rule/resource/heroic-resource.md) on it, because combat has already begun!

#### Determine Surprise {data-scc="mcdm.heroes.v1/rule.combat/surprised"}

When battle starts, the Director determines which creatures, if any, are caught off guard. Any creature who isn't ready for combat at the start of an encounter is surprised until the end of the first [combat round](../../Browse/rule/combat/combat-round.md). A surprised creature can't take [triggered actions](../../Browse/rule/combat/triggered-action.md) or free [triggered actions](../../Browse/rule/combat/triggered-action.md), and [ability rolls](../../Browse/rule/dice/ability-roll.md) made against them gain an [edge](../../Browse/rule/dice/edge.md).

For example, if the heroes sneak up unnoticed on a camp of marauders and attack, each marauder is surprised. Likewise, if the heroes fail to notice that all the cloaked figures in a tavern are actually brain-devouring zombies, then the heroes are surprised. If one of the heroes notices the disguised undead before the zombies attack but has no opportunity to warn their allies, that hero isn't surprised but the rest of the characters are.

#### Determine Who Goes First

Sometimes figuring out who gets to take the first [turn](../../Browse/rule/combat/turn.md) in combat is automatic. If all the creatures on one side are [surprised](../../Browse/rule/combat/surprised.md), then a creature on the other side gets to act first. But if both sides have creatures who aren't [surprised](../../Browse/rule/combat/surprised.md), the Director or a player they choose rolls a d10. On a 6 or higher, the players determine who goes first—the heroes' side or the other side. Otherwise, the Director decides which side goes first.

#### Creatures Take Turns

Whichever side goes first chooses a creature (or sometimes a group of creatures on the Director's side) to act at the start of combat. Whenever the rules talk about a creature acting in combat, that creature gets to take their [turn](../../Browse/rule/combat/turn.md). When that [turn](../../Browse/rule/combat/turn.md) is over, the other side chooses a creature to act. Play continues back and forth this way as each creature takes their [turn](../../Browse/rule/combat/turn.md).

Unless an ability or special rule allows them to do so, any creature who has taken a [turn](../../Browse/rule/combat/turn.md) during a [combat round](../../Browse/rule/combat/combat-round.md) can't act again until a new round begins. To help track which creatures have already acted in the current round, each creature can have a coin, token, or card they flip over on the table, or some kind of flag they set on their virtual tabletop token, once they've taken a [turn](../../Browse/rule/combat/turn.md). That way, all the players know who has already acted and who hasn't.

In many encounters, a point comes when one side has creatures who haven't acted yet but all the creatures on the other side have. The creatures who have yet to act get to take their [turns](../../Browse/rule/combat/turn.md) in any order they choose, without [turns](../../Browse/rule/combat/turn.md) in between from the other side. For example, consider four heroes taking on six enemies. When all four heroes have taken their [turns](../../Browse/rule/combat/turn.md) and four of the enemies have taken theirs, the two enemies who are left take their turns one after the other to end the round.

##### Determining Who Acts Next

When it comes to the heroes' side, the choice of who should act next is intended to give players the opportunity to comment, strategize, and plan. Some tables, in some encounters, might find that the choice of who should act next isn't obvious, leading to debate. That's fine. Deliberating about what the group should do next is classic roleplaying.

In general, though, most groups find that it's usually only one or two players in a given round who think it best if they act next. And as soon as those players explain why they want to act next and what they plan on doing, the issue is quickly resolved.

##### Argument Timer

If the players do end up arguing in circles about what to do next, the Director can place a timer on the discussion. Usually, giving the players a warning and 30 seconds to decide who goes next does the trick. If they can't choose by the end of that time, the Director chooses a hero to act.

> **Alternative [Turn](../../Browse/rule/combat/turn.md) Order**
>
> If planning everyone's [turn](../../Browse/rule/combat/turn.md) order isn't fun for your group, you can leave it to the dice instead. At the start of combat, have each hero, enemy, and group of enemies make an [Agility](../../Browse/rule/character/agility.md) [test](../../Browse/rule/test/test.md), then record the totals. When it's time for someone on the heroes' side to act, the hero with the highest total goes first. On the next hero [turn](../../Browse/rule/combat/turn.md), the hero with the second-highest total takes their [turn](../../Browse/rule/combat/turn.md), and so on. The Director-controlled creatures act the same way. Creatures on the same side should reroll tied [Agility](../../Browse/rule/character/agility.md) [tests](../../Browse/rule/test/test.md) to determine who among the tied creatures acts before the others.
>
> At the Director's discretion, a hero can swap their [turn](../../Browse/rule/combat/turn.md) in the order with another willing hero at the start of a new [combat round](../../Browse/rule/combat/combat-round.md). This allows certain abilities that interact with the core [turn](../../Browse/rule/combat/turn.md) order system, such as the [shadow's](../../Browse/class/shadow.md) [Hesitation Is Weakness](../../Browse/feature/ability/shadow/level-1/hesitation-is-weakness.md) ability, to better work with this alternative system.

##### Enemies Act In Groups

Director-controlled creatures act in groups, with information for building groups found in *Draw Steel: Monsters*. When a group of enemies acts, the Director chooses a single creature or minion squad to take a [turn](../../Browse/rule/combat/turn.md). Once that [turn](../../Browse/rule/combat/turn.md) is over, the Director chooses another creature in that group to take a [turn](../../Browse/rule/combat/turn.md), continuing until all members of the group have taken their [turn](../../Browse/rule/combat/turn.md).

#### End of Round

Once all creatures on both sides of a battle have acted, the [combat round](../../Browse/rule/combat/combat-round.md) ends and a new [combat round](../../Browse/rule/combat/combat-round.md) begins. The side whose members acted first during the initial [combat round](../../Browse/rule/combat/combat-round.md) goes first in all subsequent rounds.

### Taking a Turn {data-scc="mcdm.heroes.v1/rule.combat/turn"}

Each creature in combat—whether hero, adversary, or something in between—gets to take a **main action**, a **maneuver**, and a **move action** on their turn (explained later in this chapter). Each combatant can perform their maneuver and main action in any order, and can break up the movement granted by their move action before, after, or between their maneuver and main action however they like. You can also turn your main action into a move action or a maneuver, so that your turn can alternatively consist of two move actions and a maneuver, or two maneuvers and a move action.

The Movement section below breaks down how your move action works, while the Maneuvers and Main Actions sections break down the baseline maneuvers and main actions your character can undertake. For any activities not specifically covered in those rules, such as cutting down a chandelier to drop on enemies, the Director decides whether such an activity is a maneuver or a main action.

#### Triggered Actions and Free Triggered Actions {data-scc="mcdm.heroes.v1/rule.combat/triggered-action"}

Your hero might have one or more unique triggered actions, each of which has a specified trigger that allows the action to be used. You can use one triggered action per round, either on your [turn](../../Browse/rule/combat/turn.md) or another creature's [turn](../../Browse/rule/combat/turn.md), but only when the action's trigger occurs. For instance, a [fury](../../Browse/class/fury.md) hero can use the [Lines of Force](../../Browse/feature/ability/fury/level-1/lines-of-force.md) triggered action to [force move](../../Browse/movement/forced-movement.md) a target, but only after an enemy has first tried to [force move](../../Browse/movement/forced-movement.md) the [fury](../../Browse/class/fury.md) or another nearby creature.

A free triggered action follows the same rules as a triggered action, but it doesn't count against your limit of one triggered action per round. For instance, a [shadow](../../Browse/class/shadow.md) hero can use their [Hesitation Is Weakness](../../Browse/feature/ability/shadow/level-1/hesitation-is-weakness.md) ability to take their [turn](../../Browse/rule/combat/turn.md) in response to the trigger of another hero ending their [turn](../../Browse/rule/combat/turn.md). But because that ability is a free triggered action, the [shadow](../../Browse/class/shadow.md) can still use their In All This Confusion triggered action later in the round.

If multiple triggered actions occur in response to the same trigger, any heroes and other player-controlled creatures taking a triggered action or a free triggered action decide among themselves which of those triggered actions are resolved first. Then the Director decides the same for creatures they control.

Any effect that prevents you from using triggered actions also prevents you from using free triggered actions.

#### Free Maneuvers {data-scc="mcdm.heroes.v1/rule.combat/free-maneuver"}

Boring stuff like opening an unlocked door, picking up an arrow from the ground, giving an object to an [adjacent](../../Browse/rule/combat/adjacent.md) ally, or drawing a weapon doesn't require a maneuver or a main action. Rather, you can undertake such straightforward activities as free maneuvers on your [turn](../../Browse/rule/combat/turn.md). A free maneuver follows the same rules as a regular maneuver, but you can typically take as many free maneuvers as you like.

At the Director's discretion, circumstances could make something that is typically boring more impactful and exciting. For instance, if you need to pick a magic arrow up off the ground during a violent earthquake, what would otherwise be a free maneuver could require a maneuver or a main action to accomplish.

Likewise, the nature of an activity might make it too complicated for a free maneuver. For example, picking up the body of an unconscious [talent](../../Browse/class/talent.md) ally to carry them to safety can probably be done as a free maneuver. But if your [Might](../../Browse/rule/character/might.md) is lacking and you need to pick up a [tactician](../../Browse/class/tactician.md) ally decked out in the [Shining Armor](../../Browse/kit/shining-armor.md) kit, the Director might determine that you need to use a regular maneuver to hoist their armored form over your shoulders.

Any effect that prevents you from using maneuvers also prevents you from using free maneuvers.

#### No-Action Activities

[Free maneuvers](../../Browse/rule/combat/free-maneuver.md) cover most of the simple activities you might want to undertake on your [turn](../../Browse/rule/combat/turn.md). When it isn't your [turn](../../Browse/rule/combat/turn.md), you can typically undertake even simpler activities requiring no action with the Director's approval. For instance, shouting out a warning to an ally or dropping an item so another creature can pick it up require no action.

The Director can limit what kinds of no-action activities you can attempt when it isn't your [turn](../../Browse/rule/combat/turn.md). For instance, shouting out a warning about an unseen foe to an ally on the ally's or the foe's [turn](../../Browse/rule/combat/turn.md) requires no action. But the Director might stop you from giving that ally complex tactical advice when it isn't your [turn](../../Browse/rule/combat/turn.md), saying that doing so instead requires a [free maneuver](../../Browse/rule/combat/free-maneuver.md) on your [turn](../../Browse/rule/combat/turn.md).

### Movement

During combat, creatures can employ multiple mechanics that allow them to move around the battlefield. The most common of those mechanics is the [Advance](../../Browse/feature/common/move-actions/advance.md) or [Disengage](../../Browse/feature/common/move-actions/disengage.md) move action (detailed under Move Actions below), but abilities granted by your class, equipment, ancestry, title, or other options might allow you other ways to move.

Your hero starts with a [speed](../../Browse/rule/character/speed.md) granted by their ancestry—usually 5. This represents the maximum number of squares you can move when you take the [Advance](../../Browse/feature/common/move-actions/advance.md) move action or when another effect allows you to move. Your [speed](../../Browse/rule/character/speed.md) can be increased by your kit and other game options.

All squares [adjacent](../../Browse/rule/combat/adjacent.md) to your character cost 1 movement to move into. No, there's no Pythagorean theorem on the grid. It's a game, don't overthink it.

Your hero can move freely through an ally's space. You can move through an enemy's space, but that space is [difficult terrain](../../Browse/movement/difficult-terrain.md) (see below). You can't stop moving in any other creature's space, including to make a [strike](../../Browse/rule/combat/strike.md) or use a main action or maneuver while in that space and then continuing your move, unless that creature's [size](../../Browse/rule/character/size.md) is two or more [sizes](../../Browse/rule/character/size.md) greater or smaller than your own.

At the Director's discretion, you can be forced into the same space as another creature whose [size](../../Browse/rule/character/size.md) is within 1 of yours, such as by falling down a narrow shaft with such a creature already at the bottom. When you are squeezed into the same space as another creature whose [size](../../Browse/rule/character/size.md) is within 1 of yours, your [ability rolls](../../Browse/rule/dice/ability-roll.md) and [tests](../../Browse/rule/test/test.md) take a [bane](../../Browse/rule/dice/bane.md).

#### Can't Exceed Speed

A single move or other effect can never allow a creature to move more squares than their [speed](../../Browse/rule/character/speed.md), unless the effect states otherwise. For example, a creature with [speed](../../Browse/rule/character/speed.md) 5 might have that [speed](../../Browse/rule/character/speed.md) reduced to 2 by the [slowed](../../Browse/condition/slowed.md) [condition](../../Browse/rule/combat/condition.md) (see [Conditions](../../Browse/rule/combat/condition.md) in Chapter 5: [Classes](classes.md)). If an ally then targets them with an effect that allows them to move up to 3 squares, the creature can move only 2 squares because that's their current [speed](../../Browse/rule/character/speed.md).

#### Can't Cut Corners

A creature can't move diagonally when doing so would involve passing through the corner of a wall or some other object that completely fills the corner between the creature's space and the space they are moving to. This rule applies only to moving past objects, not moving past other creatures.

#### Shifting {data-scc="mcdm.heroes.v1/movement/shifting"}

[Shifting](../../Browse/movement/shifting.md) is a careful form of movement that allows a creature to move safely past dangerous foes. Certain abilities, features, and other rules allow you to [shift](../../Browse/movement/shifting.md) a specific number of squares, sometimes up to your [speed](../../Browse/rule/character/speed.md). Whenever you [shift](../../Browse/movement/shifting.md), creatures can't make [opportunity attacks](../../Browse/rule/combat/opportunity-attack.md) against you triggered by that movement (see [Opportunity Attacks](../../Browse/rule/combat/opportunity-attack.md) later in this chapter).

You can't [shift](../../Browse/movement/shifting.md) into or while within [difficult terrain](../../Browse/movement/difficult-terrain.md) or [damaging terrain](../../Browse/movement/damaging-terrain.md) (see below). If a rule allows you to [shift](../../Browse/movement/shifting.md), you can choose to instead move up to the number of squares you would have shifted (for example, to get out of [difficult terrain](../../Browse/movement/difficult-terrain.md)). However, you can't combine moving and [shifting](../../Browse/movement/shifting.md) within that movement.

#### Movement Types

Creatures in the game can use eight types of movement: walk, [burrow](../../Browse/movement/burrow.md), climb, swim, jump, [crawl](../../Browse/movement/crawl.md), [fly](../../Browse/movement/fly.md), and [teleport](../../Browse/movement/teleport.md).

##### Walk {data-scc="mcdm.heroes.v1/movement/walk"}

Walking is the most common movement type, whether it refers to ambulating on legs, rolling, slithering, or some other default method of movement. Unless specified otherwise, all creatures can move over solid horizontal ground without any problem.

##### Burrow {data-scc="mcdm.heroes.v1/movement/burrow"}

A creature who has "[burrow](../../Browse/movement/burrow.md)" in their [speed](../../Browse/rule/character/speed.md) entry, or who gains the temporary ability to [burrow](../../Browse/movement/burrow.md), can move through dirt horizontally, and either has the means to breathe while doing so or doesn't require air to live. Such creatures can't move through more solid ground, such as stone, unless their stat block or the effect that lets them [burrow](../../Browse/movement/burrow.md) says otherwise. Similarly, a [burrowing](../../Browse/movement/burrow.md) creature doesn't leave a tunnel unless the rules say so.

###### Dig Maneuver

It takes extra effort to dig vertically through the ground as opposed to tunneling horizontally, requiring a creature to use a special maneuver. To use the Dig maneuver, a creature must have "[burrow](../../Browse/movement/burrow.md)" in their [speed](../../Browse/rule/character/speed.md) entry, they must have a [speed](../../Browse/rule/character/speed.md) that is equal to or greater than their [size](../../Browse/rule/character/size.md), and they must be touching terrain that can be burrowed through.

When a creature uses the Dig maneuver, they can move vertically up to a number of squares equal to their [size](../../Browse/rule/character/size.md). If a [burrowing](../../Browse/movement/burrow.md) creature has a creature who is not unconscious [grabbed](../../Browse/condition/grabbed.md), they can't willingly move deeper into the ground. It's too difficult to dig with a flailing enemy in your claws.

###### Targeting Burrowing Creatures

If you are on the ground, you have [line of effect](../../Browse/rule/combat/line-of-effect.md) to a [burrowing](../../Browse/movement/burrow.md) creature if that creature occupies 1 or more squares of terrain that can be burrowed through and that touch the ground, and if you have [line of effect](../../Browse/rule/combat/line-of-effect.md) to any of those squares. The [burrowing](../../Browse/movement/burrow.md) creature gains the benefit of [cover](../../Browse/rule/combat/cover.md) from you.

If you are completely beneath the ground while [burrowing](../../Browse/movement/burrow.md), you don't have [line of effect](../../Browse/rule/combat/line-of-effect.md) to any creature on the surface unless a rule states otherwise.

If you are completely beneath the ground while [burrowing](../../Browse/movement/burrow.md) and are [adjacent](../../Browse/rule/combat/adjacent.md) to another creature who is [burrowing](../../Browse/movement/burrow.md), you have [line of effect](../../Browse/rule/combat/line-of-effect.md) to that creature, though you both have [cover](../../Browse/rule/combat/cover.md) from each other.

You can't gain the benefit of [high ground](../../Browse/movement/high-ground.md) (see below) against creatures who are completely beneath the ground while [burrowing](../../Browse/movement/burrow.md).

###### Non-Burrowing Creatures

If you are on the ground and [adjacent](../../Browse/rule/combat/adjacent.md) to a creature who is beneath the ground while [burrowing](../../Browse/movement/burrow.md), you can use a maneuver to [pull](../../Browse/movement/forced-movement.md) that creature up 1 square out of the ground, provided the creature is willing.

If a creature who can't [burrow](../../Browse/movement/burrow.md) wants to dig into the ground, they can use the following ability provided their [speed](../../Browse/rule/character/speed.md) is 2 or more.

###### Claw Dirt {data-scc="mcdm.heroes.v1/feature.ability.common/claw-dirt"}

<article class="sc-ability sc-fil" data-action="maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Claw Dirt</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../../Browse/rule/character/might/">Might</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">You can move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are <a href="../../../Browse/condition/slowed/">slowed</a> and <a href="../../../Browse/condition/weakened/">weakened</a> (<a href="../../../Browse/rule/combat/end-of-turn/">EoT</a>).</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">You can use your main action this turn to move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are <a href="../../../Browse/condition/slowed/">slowed</a> (<a href="../../../Browse/rule/combat/end-of-turn/">EoT</a>).</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">You can move 1 square into, out of, or through ground you are touching that can be burrowed through.</span></div>
</div>
</div>
</article>

###### Burrowing Forced Movement

While a creature who is completely beneath the ground while [burrowing](../../Browse/movement/burrow.md) is force moved by movement that isn't vertical, they aren't moved, and they take 1 damage for each square they would have been force moved. If the [forced movement](../../Browse/movement/forced-movement.md) is vertical, the creature is moved through the dirt as if it were air.

##### Climb or Swim {data-scc="mcdm.heroes.v1/movement/climb-or-swim"}

A creature who has "climb" in their [speed](../../Browse/rule/character/speed.md) entry, or who gains the temporary ability to automatically climb, can climb across vertical and horizontal surfaces at full [speed](../../Browse/rule/character/speed.md). Likewise, a creature who has "swim" in their [speed](../../Browse/rule/character/speed.md) entry, or who gains the temporary ability to automatically swim, can swim in liquid at full [speed](../../Browse/rule/character/speed.md).

Creatures without those types of movement can still climb or swim when a rule allows them to move, but each square of climbing or swimming costs 2 squares of movement. If a surface is difficult to climb (for instance, a sheer cliff or ice-covered wall) or a liquid is hard to swim through (a raging river or whirlpool), the Director can call for a [Might](../../Browse/rule/character/might.md) [test](../../Browse/rule/test/test.md). On a failure, a creature can't climb or swim but wastes no movement in the attempt. The Director can also impose other consequences to failure, such as being caught in the spinning current of a whirlpool.

###### Climbing Other Creatures

You can attempt to climb a creature whose [size](../../Browse/rule/character/size.md) is greater than yours. If the creature is willing, you can climb them without any trouble. If the creature is unwilling, you make the following [test](../../Browse/rule/test/test.md):

**[Power Roll](../../Browse/rule/dice/power-roll.md) + [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md):**

- **≤11:** You fail to climb the creature, and they can make a [free strike](../../Browse/feature/common/main-actions/free-strike.md) against you.
- **12-16:** You fail to climb the creature.
- **17+:** You climb the creature.

While you climb or ride a creature, you gain an [edge](../../Browse/rule/dice/edge.md) on [melee](../../Browse/rule/combat/melee.md) abilities used against them. The creature can use a maneuver to attempt to knock you off, forcing you to make the following [test](../../Browse/rule/test/test.md):

**[Power Roll](../../Browse/rule/dice/power-roll.md) + [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md):**

- **≤11:** You fall off the creature into an unoccupied [adjacent](../../Browse/rule/combat/adjacent.md) space of your choice, taking falling damage and landing [prone](../../Browse/condition/prone.md) as usual (see Falling below).
- **12-16:** You slide down the creature into an unoccupied [adjacent](../../Browse/rule/combat/adjacent.md) space of your choice and don't l[and prone](../../Browse/condition/prone.md).
- **17+:** You continue to hold on to the creature.

If you are [knocked prone](../../Browse/condition/prone.md) while climbing or riding a creature, you fall and l[and prone](../../Browse/condition/prone.md) in an [adjacent](../../Browse/rule/combat/adjacent.md) space of your choice, taking damage as usual from the fall.

##### Jump {data-scc="mcdm.heroes.v1/movement/jump"}

Whenever an effect allows you to move (including using the [Advance](../../Browse/feature/common/move-actions/advance.md) move action), you can automatically long jump a number of squares up to your [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md) score (your choice; minimum 1 square) as part of that movement. The height of your jump is automatically 1 square as part of that movement.

If you want to jump even longer or higher than your baseline jump allows, make a [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md) [test](../../Browse/rule/test/test.md):

**[Power Roll](../../Browse/rule/dice/power-roll.md) + [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md):**

- **≤11:** You don't jump any farther than your baseline jump allows.
- **12-16:** You jump 1 square longer and higher than your baseline jump allows.
- **17+:** You jump 2 squares longer and higher than your baseline jump allows.

You can't jump farther or higher than the [distance](../../Browse/rule/combat/distance.md) of the effect that allows you to move. You can't jump out of [difficult terrain](../../Browse/movement/difficult-terrain.md) or [damaging terrain](../../Browse/movement/damaging-terrain.md) (see below).

##### Crawl {data-scc="mcdm.heroes.v1/movement/crawl"}

If you [are prone](../../Browse/condition/prone.md) (see [Conditions](../../Browse/rule/combat/condition.md) in Chapter 5: [Classes](classes.md)), you can remain prone and [crawl](../../Browse/movement/crawl.md) on the ground. Doing so costs you 1 additional square of movement for every square you [crawl](../../Browse/movement/crawl.md). If you intentionally want to [crawl](../../Browse/movement/crawl.md), you can [fall prone](../../Browse/condition/prone.md) as a [free maneuver](../../Browse/rule/combat/free-maneuver.md). While voluntarily prone, you can choose to stand as a [free maneuver](../../Browse/rule/combat/free-maneuver.md).

##### Fly {data-scc="mcdm.heroes.v1/movement/fly"}

A creature who has "[fly](../../Browse/movement/fly.md)" in their [speed](../../Browse/rule/character/speed.md) entry, or who gains the temporary ability to [fly](../../Browse/movement/fly.md), can move through the air vertically or horizontally at full [speed](../../Browse/rule/character/speed.md) and remain in midair. If a [flying](../../Browse/movement/fly.md) creature is [knocked prone](../../Browse/condition/prone.md) or has their [speed](../../Browse/rule/character/speed.md) reduced to 0, they fall (see Falling below).

##### Hover {data-scc="mcdm.heroes.v1/movement/hover"}

A creature who has "[hover](../../Browse/movement/hover.md)" in their [speed](../../Browse/rule/character/speed.md) entry (most commonly alongside "[fly](../../Browse/movement/fly.md)" or "[teleport](../../Browse/movement/teleport.md)"), or who gains the temporary ability to [hover](../../Browse/movement/hover.md), can remain motionless in midair. They don't fall even if they are [knocked prone](../../Browse/condition/prone.md) or their [speed](../../Browse/rule/character/speed.md) is reduced to 0.

##### Teleport {data-scc="mcdm.heroes.v1/movement/teleport"}

When a creature [teleports](../../Browse/movement/teleport.md), they move from one space to another space instantaneously. The following rules apply to [teleporting](../../Browse/movement/teleport.md):

- [Teleporting](../../Browse/movement/teleport.md) doesn't provoke [opportunity attacks](../../Browse/rule/combat/opportunity-attack.md) or other effects that are triggered by a creature moving.
- When a creature [teleports](../../Browse/movement/teleport.md), they bypass any obstacles between the space they leave and their destination space.
- A creature [teleporting](../../Browse/movement/teleport.md) themself must have [line of effect](../../Browse/rule/combat/line-of-effect.md) to their destination space. A creature [teleporting](../../Browse/movement/teleport.md) another creature must have [line of effect](../../Browse/rule/combat/line-of-effect.md) from the space the [teleport](../../Browse/movement/teleport.md)ed creature leaves and to their destination space.
- A [teleporting](../../Browse/movement/teleport.md) creature's destination space can't be occupied by another creature or object.
- The effect that lets a creature [teleport](../../Browse/movement/teleport.md) indicates how far they can [teleport](../../Browse/movement/teleport.md). That [distance](../../Browse/rule/combat/distance.md) can be greater than the creature's [speed](../../Browse/rule/character/speed.md).
- If a creature can [teleport](../../Browse/movement/teleport.md) as part of their usual movement, they can use the [Advance](../../Browse/feature/common/move-actions/advance.md) move action to [teleport](../../Browse/movement/teleport.md) a number of squares up to their usual [speed](../../Browse/rule/character/speed.md), unmodified by [conditions](../../Browse/rule/combat/condition.md) or effects.
- If a creature [teleports](../../Browse/movement/teleport.md) [while prone](../../Browse/condition/prone.md), they can be standing when they reach their destination space provided they are able to stand. If a prone creature is [teleport](../../Browse/movement/teleport.md)ed by another creature, it is up to that creature whether the [teleport](../../Browse/movement/teleport.md)ed creature remains prone or stands if they are able.
- If you [teleport](../../Browse/movement/teleport.md) while affected by the [grabbed](../../Browse/condition/grabbed.md) or [restrained](../../Browse/condition/restrained.md) [conditions](../../Browse/rule/combat/condition.md), those [conditions](../../Browse/rule/combat/condition.md) end for you.
- When a creature [teleports](../../Browse/movement/teleport.md), they must leave the space where they start and enter a new space. A creature can't [teleport](../../Browse/movement/teleport.md) to and from the same space.

#### Falling {data-scc="mcdm.heroes.v1/rule.health/falling"}

When a creature falls 2 or more squares and lands on the ground, they take 2 damage for each square they fall (to a maximum of 50 damage) and l[and prone](../../Browse/condition/prone.md). A creature who falls can reduce the effective height of the fall by a number of squares equal to their [Agility](../../Browse/rule/character/agility.md) score (to a minimum of 0). Falling into liquid that is 1 square or more deep reduces the effective height of a fall by 4 squares (to a minimum of 0).

Falling is not [forced movement](../../Browse/movement/forced-movement.md), but being force moved downward is considered falling. Movement from falling doesn't provoke [opportunity attacks](../../Browse/rule/combat/opportunity-attack.md) (see [Opportunity Attacks](../../Browse/rule/combat/opportunity-attack.md) below).

##### Falling Onto Another Creature

A creature who falls and lands on another creature causes that creature to take the same damage from the fall. The falling creature then lands prone in the nearest unoccupied space of their choice. If the falling creature's [size](../../Browse/rule/character/size.md) is greater than the [Might](../../Browse/rule/character/might.md) score of the creature they land on, that creature is [knocked prone](../../Browse/condition/prone.md).

##### Falling Far

When a creature first falls from a great height, they fall 100 squares in the first round. At the end of each subsequent round that they remain falling, they fall another 100 squares.

#### Difficult Terrain {data-scc="mcdm.heroes.v1/movement/difficult-terrain"}

Areas of thick underbrush, rubble, spiderwebs, or other obstacles to movement create [difficult terrain](../../Browse/movement/difficult-terrain.md). It costs 1 additional square of movement to enter a square of [difficult terrain](../../Browse/movement/difficult-terrain.md).

#### Damaging Terrain {data-scc="mcdm.heroes.v1/movement/damaging-terrain"}

Areas of acid, fire, sharp rocks, lava, or any other terrain that causes damage to creatures within it is [damaging terrain](../../Browse/movement/damaging-terrain.md). The damage dealt by [damaging terrain](../../Browse/movement/damaging-terrain.md) is noted in the terrain's description or in the description of the effect that creates the terrain.

#### High Ground {data-scc="mcdm.heroes.v1/movement/high-ground"}

Whenever a creature uses an ability to target a creature or object while standing on the ground and occupying a space that is fully above the target's space, they gain an [edge](../../Browse/rule/dice/edge.md) on the [power roll](../../Browse/rule/dice/power-roll.md) against that target. To be fully above a target, the bottom of a creature's space must be higher than or bordering on the top of the target's space.

A creature can gain this benefit while climbing only if they have "climb" in their [speed](../../Browse/rule/character/speed.md) entry or can automatically climb at full [speed](../../Browse/rule/character/speed.md) while moving.

#### Forced Movement {data-scc="mcdm.heroes.v1/movement/forced-movement"}

Some actions and maneuvers allow a creature to push, pull, or slide a target creature or object a specific [distance](../../Browse/rule/combat/distance.md) across the battlefield. Collectively, these types of movement are called [forced movement](../../Browse/movement/forced-movement.md).

- **Push X:** The creature moves the target up to X squares away from them in a straight line, without moving them vertically. Each square the creature moves the target must put the target farther away from them.
- **Pull X:** The creature moves the target up to X squares toward them in a straight line, without moving them vertically. Each square the creature moves the target must bring the target closer to them.
- **Slide X:** The creature moves the target up to X squares in any direction, except for vertically. Unlike a push or a pull, a slide doesn't need to be a straight line.

When you [force move](../../Browse/movement/forced-movement.md) a target, you can always move that target fewer squares than the number indicated. For example, when the [conduit](../../Browse/class/conduit.md) obtains a tier 3 "push 3" outcome with their Call the Thunder Down ability, they can push targets any [distance](../../Browse/rule/combat/distance.md) up to 3 squares, including choosing to not move certain targets at all.

[Forced movement](../../Browse/movement/forced-movement.md) ignores [difficult terrain](../../Browse/movement/difficult-terrain.md) and never provokes [opportunity attacks](../../Browse/rule/combat/opportunity-attack.md). When you force move a target into [damaging terrain](../../Browse/movement/damaging-terrain.md) or into terrain that produces an effect, they are affected as if they had moved into it willingly.

> **Multitarget Abilities and [Forced Movement](../../Browse/movement/forced-movement.md)**
>
> Some creatures can force move multiple creatures or objects with a single ability. Unless the ability specifies otherwise, the creature using the ability determines the order in which the targets are force moved. The creature should select each target individually and complete their [forced movement](../../Browse/movement/forced-movement.md) before force moving the next target affected.

##### Vertical

If a [forced movement](../../Browse/movement/forced-movement.md) effect has the word "vertical" in front of it, then the [forced movement](../../Browse/movement/forced-movement.md) can move a target up or down in addition to horizontally. For example, if a [forced movement](../../Browse/movement/forced-movement.md) effect says "vertical push 5," then a creature targeted by the effect can be pushed up to 5 squares in any direction, as long as the [forced movement](../../Browse/movement/forced-movement.md) is a straight line.

If a creature who can't [fly](../../Browse/movement/fly.md) is left in midair at the end of a vertical forced move, they fall. [Forced movement](../../Browse/movement/forced-movement.md) made against a creature who is [flying](../../Browse/movement/fly.md) is always a vertical forced move, whether or not the effect specifies it.

Though you can't freely push, pull, or slide a target up and down unless that [forced movement](../../Browse/movement/forced-movement.md) specifies "vertical," you can move them along a physical slope such as a hill or staircase. For a target to be force moved along a slope, each square of the slope can be no more than 1 square higher or lower than the previous square.

##### Big Versus Little

When a larger creature force moves a smaller target with a [melee](../../Browse/rule/combat/melee.md) weapon ability, the [distance](../../Browse/rule/combat/distance.md) of the [forced movement](../../Browse/movement/forced-movement.md) is increased by 1. If a smaller creature force moves a larger target with a [melee](../../Browse/rule/combat/melee.md) weapon ability, the [distance](../../Browse/rule/combat/distance.md) doesn't change.

##### Slamming into Creatures

When you force move a creature into another creature, the movement ends and both creatures take 1 damage for each square remaining in the first creature's [forced movement](../../Browse/movement/forced-movement.md). You can also force move an object into a creature. The object's movement ends, and the creature takes 1 damage for each square remaining in the object's [forced movement](../../Browse/movement/forced-movement.md).

It's possible to move a creature or object of a larger [size](../../Browse/rule/character/size.md) into several creatures of a smaller [size](../../Browse/rule/character/size.md) at the same time. When this happens, the larger creature in the collision takes damage only once, not once for each smaller creature they slam into.

If a creature is killed by damage from an ability or effect that also [force move](../../Browse/movement/forced-movement.md)s them, a second creature they are slammed into still takes damage unless the Director deems otherwise.

You can [force move](../../Browse/movement/forced-movement.md) another creature into yourself with a pull or a slide.

##### Slamming Into Objects

When a creature force moves a target into a stationary object that is the target's [size](../../Browse/rule/character/size.md) or larger and the object doesn't break (see below), the movement ends and the target takes 2 damage plus 1 damage for each square remaining in their [forced movement](../../Browse/movement/forced-movement.md).

If you [force move](../../Browse/movement/forced-movement.md) a creature downward into an object that doesn't break (including the ground), they also take falling damage as if they had fallen the [distance](../../Browse/rule/combat/distance.md) [force moved](../../Browse/movement/forced-movement.md) and their [Agility](../../Browse/rule/character/agility.md) score was 0 (see Falling above).

> **Tracking Object Forced-Movement Damage**
>
> At the Director's discretion, mundane objects that are [force moved](../../Browse/movement/forced-movement.md) into creatures or other objects take damage as if they were creatures. Sturdy objects can take damage as follows before they are destroyed:
>
> - **Wood object:** 3 damage for each square it occupies
> - **Stone object:** 6 damage for each square it occupies
> - **Metal object:** 9 damage for each square it occupies
>
> More fragile objects are destroyed after taking any damage.

##### Hurling Through Objects

When you move a creature into a mundane object, the object can break depending on how many squares of [forced movement](../../Browse/movement/forced-movement.md) remain. The cost of being slammed into an object is tied to the damage a target takes for being hurled through it:

- It costs 1 remaining square of [forced movement](../../Browse/movement/forced-movement.md) to destroy 1 square of glass. The creature moved takes 3 damage.
- It costs 3 remaining squares of [forced movement](../../Browse/movement/forced-movement.md) to destroy 1 square of wood. The creature moved takes 5 damage.
- It costs 6 remaining squares of [forced movement](../../Browse/movement/forced-movement.md) to destroy 1 square of stone. The creature moved takes 8 damage.
- It costs 9 remaining squares of [forced movement](../../Browse/movement/forced-movement.md) to destroy 1 square of metal. The creature moved takes 11 damage.

If any [forced movement](../../Browse/movement/forced-movement.md) remains after the object is destroyed, you can continue to move the creature who destroyed the object.

##### Forced Into a Fall

If you can't [fly](../../Browse/movement/fly.md) and are force moved across an open space that would cause you to fall, such as being pushed over the edge of a cliff, you continue moving the total [distance](../../Browse/rule/combat/distance.md) you were moved first. If you are still in a position to fall when the [forced movement](../../Browse/movement/forced-movement.md) ends, you fall.

##### Stability {data-scc="mcdm.heroes.v1/rule.character/stability"}

Each creature has a stability that allows them to resist [forced movement](../../Browse/movement/forced-movement.md). When a creature is force moved, they can reduce that movement up to a number of squares equal to their stability. Heroes start with stability 0 and can increase their stability through ancestry, class, and kit options.

A creature's stability can't be less than 0, even when reduced by a [penalty](../../Browse/rule/dice/bonuses-and-penalties.md).

##### "When a Creature Moves..."

Certain abilities and effects trigger when a creature moves into a particular area. [Forced movement](../../Browse/movement/forced-movement.md) triggers these options unless otherwise noted, including an effect stating that a creature must willingly move to trigger it.

##### Death Effects and Forced Movement

Some creatures have traits or abilities that trigger when they die or are reduced to 0 [Stamina](../../Browse/rule/health/stamina.md). If such a creature is reduced to 0 [Stamina](../../Browse/rule/health/stamina.md) by damage from an ability or effect that also force moves them, the [forced movement](../../Browse/movement/forced-movement.md) takes place before the triggered effect.

### Move Actions

A move action allows a creature to move around the battlefield. Sometimes you'll already be exactly where you want to be so that you don't need to use a move action on your [turn](../../Browse/rule/combat/turn.md). That's okay! The decision to not move is just as tactical as the decision to move.

#### Advance {data-scc="mcdm.heroes.v1/feature.common.move-actions/advance"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Advance</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>When a creature takes the <a href="../../../Browse/feature/common/move-actions/advance/">Advance</a> move action, they move a number of squares up to their <a href="../../../Browse/rule/character/speed/">speed</a>. They can break up this movement with their maneuver and main action however they wish.</p>
</div>
</section>

#### Disengage {data-scc="mcdm.heroes.v1/feature.common.move-actions/disengage"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Disengage</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>When a creature takes the <a href="../../../Browse/feature/common/move-actions/disengage/">Disengage</a> move action, they can <a href="../../../Browse/movement/shifting/">shift</a> 1 square. Certain class features, kits, and other rules allow a creature to <a href="../../../Browse/movement/shifting/">shift</a> more than 1 square when they disengage. A creature who does so can break up their <a href="../../../Browse/movement/shifting/">shift</a> with their maneuver and main action however they wish.</p>
</div>
</section>

#### Ride {data-scc="mcdm.heroes.v1/feature.common.move-actions/ride"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ride</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature can take the <a href="../../../Browse/feature/common/move-actions/ride/">Ride</a> move action only while mounted on another creature (see <a href="../../../Browse/rule/combat/mounted-combat/">Mounted Combat</a> below). When a creature takes the <a href="../../../Browse/feature/common/move-actions/ride/">Ride</a> move action, they cause their mount to move up to the mount&#39;s <a href="../../../Browse/rule/character/speed/">speed</a>, taking the rider with them. Alternatively, a creature can use the <a href="../../../Browse/feature/common/move-actions/ride/">Ride</a> move action to have their mount use the <a href="../../../Browse/feature/common/move-actions/disengage/">Disengage</a> move action as a free <a href="../../../Browse/rule/combat/triggered-action/">triggered action</a>. A creature can use the <a href="../../../Browse/feature/common/move-actions/ride/">Ride</a> move action only once per round. A mounted creature can only have this move action applied to them once per round. This movement can be broken up with the rider&#39;s maneuver and main action however they wish.</p>
</div>
</section>

### Maneuvers

A maneuver typically involves less focus and exertion than a main action (see below). It can be an opportunity to move other creatures, drink a potion, or undertake similar activities.

Sometimes you might not have anything you can do with your maneuver. That's totally fine! Often, the best thing to do on your [turn](../../Browse/rule/combat/turn.md) is take a main action and move on.

#### Aid Attack {data-scc="mcdm.heroes.v1/feature.common.maneuvers/aid-attack"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Aid Attack</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature who uses the <a href="../../../Browse/feature/common/maneuvers/aid-attack/">Aid Attack</a> maneuver chooses an enemy <a href="../../../Browse/rule/combat/adjacent/">adjacent</a> to them. The next <a href="../../../Browse/rule/dice/ability-roll/">ability roll</a> an ally makes against that enemy before the start of the aiding creature&#39;s next <a href="../../../Browse/rule/combat/turn/">turn</a> gains an <a href="../../../Browse/rule/dice/edge/">edge</a>.</p>
</div>
</section>

#### Catch Breath {data-scc="mcdm.heroes.v1/feature.common.maneuvers/catch-breath"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Catch Breath</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature who uses the <a href="../../../Browse/feature/common/maneuvers/catch-breath/">Catch Breath</a> maneuver spends a <a href="../../../Browse/rule/health/recoveries/">Recovery</a> and regains <a href="../../../Browse/rule/health/stamina/">Stamina</a> equal to their <a href="../../../Browse/rule/health/recoveries/">recovery value</a>. (See below for <a href="../../../Browse/rule/health/stamina/">Stamina</a>. See <a href="../../../Browse/rule/health/recoveries/">Recoveries</a> in Chapter 1: <a href="../the-basics/">The Basics</a>.)</p>
<p>A creature who is <a href="../../../Browse/rule/health/dying/">dying</a> (see <a href="../../../Browse/rule/health/dying/">Dying</a> and Death in <a href="../../../Browse/rule/health/stamina/">Stamina</a> below) can&#39;t use the <a href="../../../Browse/feature/common/maneuvers/catch-breath/">Catch Breath</a> maneuver, but other creatures can help them spend <a href="../../../Browse/rule/health/recoveries/">Recoveries</a> in other ways.</p>
</div>
</section>

#### Escape Grab {data-scc="mcdm.heroes.v1/feature.common.maneuvers/escape-grab"}

<section class="sc-trait sc-trait--crest" data-action="trait" data-sub="1" data-grant="the Escape Grab maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Escape Grab</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p class="sc-trait__leadin"><span class="sc-trait__dia"></span>A creature who is <a href="../../../Browse/condition/grabbed/">grabbed</a> by another creature, an object, or an effect (see <a href="../../../Browse/feature/common/maneuvers/grab/">Grab</a> below) can attempt to escape by using the following ability.</p>
<div class="sc-trait__nest">
<article class="sc-ability sc-fil" data-action="maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Escape Grab</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../../Browse/rule/character/might/">Might</a> or <a href="../../../Browse/rule/character/agility/">Agility</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">No effect.</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">You can escape the grab, but if you do, a creature who has you <a href="../../../Browse/condition/grabbed/">grabbed</a> can make a <a href="../../../Browse/rule/combat/melee/">melee</a> <a href="../../../Browse/feature/common/main-actions/free-strike/">free strike</a> against you before you are no longer <a href="../../../Browse/condition/grabbed/">grabbed</a>.</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">You are no longer <a href="../../../Browse/condition/grabbed/">grabbed</a>.</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>You take a <a href="../../../Browse/rule/dice/bane/">bane</a> on this maneuver if your <a href="../../../Browse/rule/character/size/">size</a> is smaller than the size of the creature, object, or effect that has you <a href="../../../Browse/condition/grabbed/">grabbed</a>.</p><p>See <a href="../../../Browse/rule/combat/condition/">Conditions</a> in Chapter 5: <a href="../classes/">Classes</a> for information on the <a href="../../../Browse/condition/grabbed/">grabbed</a> <a href="../../../Browse/rule/combat/condition/">condition</a>.</p></div>
</div>
</article>
</div>
</div>
</section>

#### Grab {data-scc="mcdm.heroes.v1/feature.common.maneuvers/grab"}

<section class="sc-trait sc-trait--crest" data-action="trait" data-sub="1" data-grant="the Grab maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Grab</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p class="sc-trait__leadin"><span class="sc-trait__dia"></span>A creature seeking to keep a foe close and locked down can attempt to grab a creature using the following ability.</p>
<div class="sc-trait__nest">
<article class="sc-ability sc-fil" data-action="maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Grab</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<div class="sc-ability__kw"><span class="sc-ability__chip"><a href="../../../Browse/rule/combat/melee/">Melee</a></span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v"><a href="../../../Browse/rule/combat/melee/">Melee</a> 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../../Browse/rule/character/might/">Might</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">No effect.</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">You can grab the target, but if you do, the target can make a <a href="../../../Browse/rule/combat/melee/">melee</a> <a href="../../../Browse/feature/common/main-actions/free-strike/">free strike</a> against you before they are <a href="../../../Browse/condition/grabbed/">grabbed</a>.</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target is <a href="../../../Browse/condition/grabbed/">grabbed</a> by you.</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>You can usually target only creatures of your <a href="../../../Browse/rule/character/size/">size</a> or smaller. If your <a href="../../../Browse/rule/character/might/">Might</a> score is 2 or higher, you can target any creature with a <a href="../../../Browse/rule/character/size/">size</a> equal to or less than your <a href="../../../Browse/rule/character/might/">Might</a> score.</p><p>Unless otherwise indicated, a creature can grab only one creature at a time.</p><p>See <a href="../../../Browse/rule/combat/condition/">Conditions</a> in Chapter 5: <a href="../classes/">Classes</a> for information on the <a href="../../../Browse/condition/grabbed/">grabbed</a> <a href="../../../Browse/rule/combat/condition/">condition</a>.</p></div>
</div>
</article>
</div>
</div>
</section>

#### Hide {data-scc="mcdm.heroes.v1/feature.common.maneuvers/hide"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hide</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>Using the <a href="../../../Browse/feature/common/maneuvers/hide/">Hide</a> maneuver, a creature attempts to hide from other creatures who aren&#39;t observing them while they have <a href="../../../Browse/rule/combat/cover/">cover</a> or <a href="../../../Browse/rule/combat/concealment/">concealment</a>. See Hide and Sneak in Chapter 9: <a href="../tests/">Tests</a> for full details.</p>
</div>
</section>

#### Knockback {data-scc="mcdm.heroes.v1/feature.common.maneuvers/knockback"}

<section class="sc-trait sc-trait--crest" data-action="trait" data-sub="1" data-grant="the Knockback maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Knockback</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p class="sc-trait__leadin"><span class="sc-trait__dia"></span>A creature wanting to <a href="../../../Browse/movement/forced-movement/">push</a> an <a href="../../../Browse/rule/combat/adjacent/">adjacent</a> creature away from them can attempt to shove that creature using the following ability.</p>
<div class="sc-trait__nest">
<article class="sc-ability sc-fil" data-action="maneuver">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Knockback</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<div class="sc-ability__kw"><span class="sc-ability__chip"><a href="../../../Browse/rule/combat/melee/">Melee</a></span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v"><a href="../../../Browse/rule/combat/melee/">Melee</a> 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../../Browse/rule/character/might/">Might</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../../../Browse/movement/forced-movement/">Push</a> 1</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../Browse/movement/forced-movement/">Push</a> 2</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res"><a href="../../../Browse/movement/forced-movement/">Push</a> 3</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>You can usually target only creatures of your <a href="../../../Browse/rule/character/size/">size</a> or smaller. If your <a href="../../../Browse/rule/character/might/">Might</a> score is 2 or higher, you can target any creature with a <a href="../../../Browse/rule/character/size/">size</a> equal to or less than your <a href="../../../Browse/rule/character/might/">Might</a> score.</p></div>
</div>
</article>
</div>
</div>
</section>

#### Make or Assist a Test {data-scc="mcdm.heroes.v1/feature.common.maneuvers/make-or-assist-a-test"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Make or Assist a Test</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>Many <a href="../../../Browse/rule/test/test/">tests</a> are maneuvers if made in combat. Searching a chest with a <a href="../../../Browse/rule/character/reason/">Reason</a> <a href="../../../Browse/rule/test/test/">test</a>, picking a door&#39;s lock with an <a href="../../../Browse/rule/character/agility/">Agility</a> <a href="../../../Browse/rule/test/test/">test</a>, or lifting a portcullis with a <a href="../../../Browse/rule/character/might/">Might</a> <a href="../../../Browse/rule/test/test/">test</a> would all be maneuvers. Assisting a <a href="../../../Browse/rule/test/test/">test</a> is also a maneuver in combat (see Assist a <a href="../../../Browse/rule/test/test/">Test</a> in Chapter 9: <a href="../tests/">Tests</a>).</p>
<p>Complex or time-consuming <a href="../../../Browse/rule/test/test/">tests</a> might require a main action if made in combat—or could take so long that they can&#39;t be made during combat at all. Other <a href="../../../Browse/rule/test/test/">tests</a> that take no time at all, such as a <a href="../../../Browse/rule/character/reason/">Reason</a> <a href="../../../Browse/rule/test/test/">test</a> to recall lore about mummies, are usually <a href="../../../Browse/rule/combat/free-maneuver/">free maneuvers</a> in combat. The Director has the final say regarding which <a href="../../../Browse/rule/test/test/">tests</a> can be made as maneuvers.</p>
</div>
</section>

#### Search for Hidden Creatures {data-scc="mcdm.heroes.v1/feature.common.maneuvers/search-for-hidden-creatures"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Search for Hidden Creatures</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>The <a href="../../../Browse/feature/common/maneuvers/search-for-hidden-creatures/">Search for Hidden Creatures</a> maneuver allows a creature to attempt to locate creatures hidden from them (see Hide and Sneak in Chapter 9: <a href="../tests/">Tests</a>).</p>
</div>
</section>

#### Stand Up {data-scc="mcdm.heroes.v1/feature.common.maneuvers/stand-up"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Stand Up</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature can use the <a href="../../../Browse/feature/common/maneuvers/stand-up/">Stand Up</a> maneuver to stand up if they <a href="../../../Browse/condition/prone/">are prone</a>, ending that <a href="../../../Browse/rule/combat/condition/">condition</a>. Alternatively, they can use this maneuver to make a willing <a href="../../../Browse/rule/combat/adjacent/">adjacent</a> prone creature stand up.</p>
</div>
</section>

#### Use Consumable {data-scc="mcdm.heroes.v1/feature.common.maneuvers/use-consumable"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Use Consumable</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>Unless otherwise noted in its description, a creature can activate a <a href="../../../Browse/rule/treasure/consumable/">consumable</a> treasure such as a potion with the <a href="../../../Browse/feature/common/maneuvers/use-consumable/">Use Consumable</a> maneuver. A creature can use this maneuver to administer a <a href="../../../Browse/rule/treasure/consumable/">consumable</a> treasure that benefits the user either to themself or to a willing <a href="../../../Browse/rule/combat/adjacent/">adjacent</a> creature. See <a href="../../../Browse/rule/treasure/consumable/">Consumables</a> in Chapter 13: <a href="../rewards/">Rewards</a>.</p>
</div>
</section>

### Main Actions

When you take a main action, you most often do so to use a unique ability granted by your class, kit, or a treasure (see Abilities in Chapter 5: [Classes](classes.md)). These abilities represent the most unique, flavorful, and impactful things you can do with your main action.

You can also use your main action to help another creature regain [Stamina](../../Browse/rule/health/stamina.md), [charge](../../Browse/feature/common/main-actions/charge.md) into battle, [defend](../../Browse/feature/common/main-actions/defend.md) yourself, or make a [free strike](../../Browse/feature/common/main-actions/free-strike.md).

You can convert your main action into a maneuver or a move action, allowing you to [take two](../../Browse/feature/ability/troubadour/level-5/take-two.md) maneuvers or move actions on your [turn](../../Browse/rule/combat/turn.md).

#### Charge {data-scc="mcdm.heroes.v1/feature.common.main-actions/charge"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Charge</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>When a creature takes the <a href="../../../Browse/feature/common/main-actions/charge/">Charge</a> main action, they move up to their <a href="../../../Browse/rule/character/speed/">speed</a> in a straight line, then make a <a href="../../../Browse/rule/combat/melee/">melee</a> <a href="../../../Browse/feature/common/main-actions/free-strike/">free strike</a> (see <a href="../../../Browse/feature/common/main-actions/free-strike/">Free Strikes</a> below) against a target when they end their move. If the creature has an ability with the Charge keyword, they can use that ability against the target instead of a <a href="../../../Browse/feature/common/main-actions/free-strike/">free strike</a>.</p>
<p>A creature can&#39;t move through <a href="../../../Browse/movement/difficult-terrain/">difficult terrain</a> or <a href="../../../Browse/movement/shifting/">shift</a> when they charge. They can <a href="../../../Browse/movement/fly/">fly</a> or <a href="../../../Browse/movement/burrow/">burrow</a> as part of the <a href="../../../Browse/feature/common/main-actions/charge/">Charge</a> main action if they have that movement available to them, but they can&#39;t climb or swim while charging unless they can automatically use that movement at full <a href="../../../Browse/rule/character/speed/">speed</a>.</p>
</div>
</section>

#### Defend {data-scc="mcdm.heroes.v1/feature.common.main-actions/defend"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Defend</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>When a creature takes the <a href="../../../Browse/feature/common/main-actions/defend/">Defend</a> main action, <a href="../../../Browse/rule/dice/ability-roll/">ability rolls</a> made against them have a double <a href="../../../Browse/rule/dice/bane/">bane</a> until the start of their next <a href="../../../Browse/rule/combat/turn/">turn</a>. Additionally, you have a double <a href="../../../Browse/rule/dice/edge/">edge</a> on <a href="../../../Browse/rule/test/test/">tests</a> when called for to resist environmental effects or a creature&#39;s traits or abilities. A creature gains no benefit from this action while another creature is <a href="../../../Browse/condition/taunted/">taunted</a> by them (see <a href="../../../Browse/rule/combat/condition/">Conditions</a> in Chapter 5: <a href="../classes/">Classes</a>).</p>
</div>
</section>

#### Free Strike {data-scc="mcdm.heroes.v1/feature.common.main-actions/free-strike"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Free Strike</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature can use this main action to make a <a href="../../../Browse/feature/common/main-actions/free-strike/">free strike</a> (see Free Strikes below). Most of the time, you&#39;ll want to use the more impactful main actions granted by your class, kit, or other feature, just as the Director will use the main actions in a creature&#39;s stat block, but <a href="../../../Browse/feature/common/main-actions/free-strike/">free strikes</a> are available for when all else fails. For instance, a <a href="../../../Browse/class/fury/">fury</a> who has no other options for <a href="../../../Browse/rule/combat/ranged/">ranged</a> <a href="../../../Browse/rule/combat/strike/">strikes</a> might use the <a href="../../../Browse/feature/ability/common/ranged-weapon-free-strike/">Ranged Weapon Free Strike</a> ability with an improvised weapon when battling a <a href="../../../Browse/movement/fly/">flying</a> foe.</p>
</div>
</section>

#### Heal {data-scc="mcdm.heroes.v1/feature.common.main-actions/heal"}

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Feature</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Heal</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-trait__body">
<p>A creature who uses the <a href="../../../Browse/feature/common/main-actions/heal/">Heal</a> main action employs medicine or inspiring words to make an <a href="../../../Browse/rule/combat/adjacent/">adjacent</a> creature feel better and stay in the fight. The target creature can spend a <a href="../../../Browse/rule/health/recoveries/">Recovery</a> to regain <a href="../../../Browse/rule/health/stamina/">Stamina</a>, or can make a <a href="../../../Browse/rule/general/saving-throw/">saving throw</a> against one effect they are suffering that is ended by a <a href="../../../Browse/rule/general/saving-throw/">saving throw</a>.</p>
</div>
</section>

### Free Strikes

Every creature can use a [free strike](../../Browse/feature/common/main-actions/free-strike.md) ability as a main action on their [turn](../../Browse/rule/combat/turn.md), though doing so typically isn't the most effective choice. Most of the time, you'll use [free strikes](../../Browse/feature/common/main-actions/free-strike.md) when the rules call for it. Specific rules let you use [free strikes](../../Browse/feature/common/main-actions/free-strike.md) as part of an action that allows you to also do something else impactful, such as how the [Charge](../../Browse/feature/common/main-actions/charge.md) main action lets you move and use a [melee](../../Browse/rule/combat/melee.md) [free strike](../../Browse/feature/common/main-actions/free-strike.md) in one main action (see Charge above).

Many rules and abilities allow heroes to make [free strikes](../../Browse/feature/common/main-actions/free-strike.md) when it isn't their [turn](../../Browse/rule/combat/turn.md), such as the [tactician's](../../Browse/class/tactician.md) Overwatch ability. As well, all characters can make an [opportunity attack](../../Browse/rule/combat/opportunity-attack.md) [free strike](../../Browse/feature/common/main-actions/free-strike.md).

#### Granted Abilities

Some abilities, such as the [tactician's](../../Browse/class/tactician.md) [Strike Now](../../Browse/feature/ability/tactician/level-1/strike-now.md) or I'll Open and You'll Close abilities, allow another creature to use a [signature ability](../../Browse/rule/combat/signature-ability.md) or [heroic ability](../../Browse/rule/general/heroic-ability.md) when it isn't their [turn](../../Browse/rule/combat/turn.md). Unless otherwise stated, a creature can always use a [free strike](../../Browse/feature/common/main-actions/free-strike.md) instead of a granted [signature ability](../../Browse/rule/combat/signature-ability.md) or [heroic ability](../../Browse/rule/general/heroic-ability.md).

#### Opportunity Attacks {data-scc="mcdm.heroes.v1/rule.combat/opportunity-attack"}

Whenever a creature has an enemy [adjacent](../../Browse/rule/combat/adjacent.md) to them and the enemy willingly moves to a space that isn't [adjacent](../../Browse/rule/combat/adjacent.md) to the creature without [shifting](../../Browse/movement/shifting.md), the creature can take advantage of that movement to quickly make a [melee](../../Browse/rule/combat/melee.md) [free strike](../../Browse/feature/common/main-actions/free-strike.md) against the enemy as a free [triggered action](../../Browse/rule/combat/triggered-action.md). This is called an opportunity attack.

If a creature has a [bane](../../Browse/rule/dice/bane.md) or double [bane](../../Browse/rule/dice/bane.md) on the [power roll](../../Browse/rule/dice/power-roll.md) against the enemy, they can't make an opportunity attack.

#### Standard Free Strikes

Every hero has two standard [free strike](../../Browse/feature/common/main-actions/free-strike.md) abilities available to them. Your class might give you additional [free strike](../../Browse/feature/common/main-actions/free-strike.md) options, and your kit can improve the standard options (see Chapter 6: [Kits](kits.md)).

A [melee](../../Browse/rule/combat/melee.md) weapon free strike is a [melee](../../Browse/rule/combat/melee.md) [strike](../../Browse/rule/combat/strike.md) made with an unarmed [strike](../../Browse/rule/combat/strike.md) or an improvised weapon. A [ranged](../../Browse/rule/combat/ranged.md) weapon free strike is a [ranged](../../Browse/rule/combat/ranged.md) [strike](../../Browse/rule/combat/strike.md) made with an improvised weapon. At the Director's discretion, the [damage type](../../Browse/rule/damage/damage-type.md) of an improvised weapon can change based on the object used. For example, if you use a burning torch as an improvised weapon, it could deal fire damage when used for a [free strike](../../Browse/feature/common/main-actions/free-strike.md).

**Melee Weapon Free Strike**

| **Charge, [Melee](../../Browse/rule/combat/melee.md), [Strike](../../Browse/rule/combat/strike.md), Weapon** |               **Main action** |
| -------------------------------- | -----------------------------:|
| **📏 [Melee](../../Browse/rule/combat/melee.md) 1**                   | **🎯 One creature or object** |

**[Power Roll](../../Browse/rule/dice/power-roll.md) + [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md):**

- **≤11:** 2 + M or A damage
- **12-16:** 5 + M or A damage
- **17+:** 7 + M or A damage

**Ranged Weapon Free Strike**

| **[Ranged](../../Browse/rule/combat/ranged.md), [Strike](../../Browse/rule/combat/strike.md), Weapon** |               **Main action** |
|---------------------------| -----------------------------:|
| **📏 [Ranged](../../Browse/rule/combat/ranged.md) 5**           | **🎯 One creature or object** |

**[Power Roll](../../Browse/rule/dice/power-roll.md) + [Might](../../Browse/rule/character/might.md) or [Agility](../../Browse/rule/character/agility.md):**

- **≤11:** 2 + M or A damage
- **12-16:** 4 + M or A damage
- **17+:** 6 + M or A damage

### Flanking {data-scc="mcdm.heroes.v1/rule.combat/flanking"}

When you and one or more allies are [adjacent](../../Browse/rule/combat/adjacent.md) to the same enemy and on opposite sides of the enemy, you are flanking that enemy. While flanking an enemy, you gain an [edge](../../Browse/rule/dice/edge.md) on [melee](../../Browse/rule/combat/melee.md) [strikes](../../Browse/rule/combat/strike.md) against them.

If you're unsure whether your hero and an ally are flanking a foe, imagine a line extending from the center of your space to the center of your ally's space. If that line passes through opposite sides or corners of the enemy's space, then you and your ally are flanking the enemy.

You must have [line of effect](../../Browse/rule/combat/line-of-effect.md) to the enemy and be able to take [triggered actions](../../Browse/rule/combat/triggered-action.md) to gain or grant the flanking benefit.

### Cover {data-scc="mcdm.heroes.v1/rule.combat/cover"}

When you have [line of effect](../../Browse/rule/combat/line-of-effect.md) to a creature or object but that target has at least half their form blocked by a solid object such as a tree, wall, or overturned table, the target has cover. You take a [bane](../../Browse/rule/dice/bane.md) on damage-dealing abilities used against creatures or objects that have cover from you.

### Concealment {data-scc="mcdm.heroes.v1/rule.combat/concealment"}

Darkness, fog, invisibility magic, and any other effect that fully obscures a creature or object but doesn't protect their physical form grants that creature or object concealment. Even if you have [line of effect](../../Browse/rule/combat/line-of-effect.md) to such a target, a creature or object has concealment from you if you can't see or otherwise observe them. You can target a creature or object with concealment using a [strike](../../Browse/rule/combat/strike.md), provided they aren't hidden (see Hide  and Sneak in Chapter 9: [Tests](tests.md)). However, [strikes](../../Browse/rule/combat/strike.md) against such targets take a [bane](../../Browse/rule/dice/bane.md).

#### Invisible Creatures

Invisible creatures always have [concealment](../../Browse/rule/combat/concealment.md) from other creatures. If an invisible creature isn't hidden, they can still be targeted by abilities. The [test](../../Browse/rule/test/test.md) made to find a hidden creature who is invisible takes a [bane](../../Browse/rule/dice/bane.md).

### Damage {data-scc="mcdm.heroes.v1/rule.damage/damage"}

Strikes, area attacks, environmental effects, and other hazards can all deal damage to the heroes and their foes. Whenever a creature takes damage, they reduce their [Stamina](../../Browse/rule/health/stamina.md) (see below) by an amount equal to the damage taken.

#### Damage Types {data-scc="mcdm.heroes.v1/rule.damage/damage-type"}

Typical damage, such as that caused by weapons, falling, traps, and monstrous claws, has no type associated with it. That's because for most creatures, there's no difference in the amount of harm caused by being run through with a pike, dropped from a height onto a stone floor, slashed by a pendulum scythe, or skewered on a minotaur's horns.

However, when it comes to elemental and [supernatural](../../Browse/rule/general/supernatural.md) damage sources, some creatures might have an immunity or weakness to that damage. As such, abilities and effects note when they deal any of the following damage types: acid, cold, corruption, fire, holy, lightning, poison, psychic, or sonic.

##### Damage Immunity {data-scc="mcdm.heroes.v1/rule.damage/damage-immunity"}

Damage immunity means that a creature can ignore some or all of the damage they would usually take from certain attacks or effects.

Damage immunity might have a [damage type](../../Browse/rule/damage/damage-type.md) associated with it, expressed as "[damage type] immunity." Damage immunity often has a value associated with it, so that one creature's stat block notes "damage immunity 5" (representing immunity to all damage), while another creature has "lightning immunity 5." Whenever a target with damage immunity takes damage of the indicated type, they can reduce the damage by the value of the immunity (to a minimum of 0 damage). If the value of the immunity is "all," then the target ignores all damage of the indicated type.

Damage immunity should be the last thing applied when calculating damage. For instance, if your hero has fire immunity 5 and takes 8 fire damage, they take 3 damage. But if an ally first halved the damage with a [triggered action](../../Browse/rule/combat/triggered-action.md), your hero would take 4 damage before immunity is applied, with immunity then reducing the damage to 0.

If multiple damage immunities apply to a source of damage, only the immunity with the highest value applies. For instance, a creature with damage immunity 5 and fire immunity 10 who takes 12 fire damage reduces the damage by 10 points.

##### Damage Weakness {data-scc="mcdm.heroes.v1/rule.damage/damage-weakness"}

Damage weakness works like [damage immunity](../../Browse/rule/damage/damage-immunity.md), except that creatures take extra damage whenever they take damage of the indicated type. For instance, if a creature has fire weakness 5 and is dealt 10 fire damage, they take 15 fire damage instead.

A creature who has "damage weakness X" with no specific type or keyword indicated has weakness of the indicated amount when they take damage of any type.

If a creature has both [damage immunity](../../Browse/rule/damage/damage-immunity.md) and damage weakness for a source of damage, apply the weakness first, then the immunity.

If multiple damage weaknesses apply to a source of damage, only the weakness with the highest value applies.

### Stamina {data-scc="mcdm.heroes.v1/rule.health/stamina"}

Your hero's survivability is represented by your Stamina. Think of Stamina as a combination of a creature's physical vitality and their overall energy for dodging and resisting incoming blows, spells, and other violence. It's not that every instance of [damage](../../Browse/rule/damage/damage.md) deals a [bleeding](../../Browse/condition/bleeding.md) wound to you, but that each one chips away at your ability to fight effectively. One attack might make you sweat as you leap back to avoid an arrow, while another might graze your elbow with a dagger nick, leaving a dull, distracting pain. Eventually, this draining of energy leaves you open for bigger blows that can truly harm your body—or possibly kill you.

After any [damage](../../Browse/rule/damage/damage.md) you take is reduced by [damage immunity](../../Browse/rule/damage/damage-immunity.md) or other effects, your Stamina is reduced by an amount equal to the remaining [damage](../../Browse/rule/damage/damage.md). Some effects can also reduce your Stamina maximum, limiting the amount of Stamina you can regain.

#### Recoveries and Recovery Value {data-scc="mcdm.heroes.v1/rule.health/recoveries"}

Each hero has a number of Recoveries determined by their class. A hero also has a recovery value that equals one-third of their [Stamina](../../Browse/rule/health/stamina.md) maximum, rounded down. When you use the [Catch Breath](../../Browse/feature/common/maneuvers/catch-breath.md) maneuver in combat (see Maneuvers above), you spend a Recovery and regain [Stamina](../../Browse/rule/health/stamina.md) equal to your recovery value. Outside of combat, you can spend as many Recoveries as you have remaining. Some abilities, items, and other effects allow you to spend a Recovery to regain [Stamina](../../Browse/rule/health/stamina.md) equal to your recovery value plus a little extra (as described by the effect), or to regain [Stamina](../../Browse/rule/health/stamina.md) without spending a Recovery.

#### Winded {data-scc="mcdm.heroes.v1/rule.health/winded"}

Your winded value equals half your [Stamina](../../Browse/rule/health/stamina.md) maximum. When your [Stamina](../../Browse/rule/health/stamina.md) is equal to or less than your winded value, you are winded. Although being winded has no effects on its own, certain ancestry, class, item, title, and monster abilities affect winded creatures.

You can tell when other creatures are winded and vice versa.

#### Dying and Death {data-scc="mcdm.heroes.v1/rule.health/dying"}

When your [Stamina](../../Browse/rule/health/stamina.md) is 0 or lower, you are dying. While dying, you can't use the [Catch Breath](../../Browse/feature/common/maneuvers/catch-breath.md) maneuver in combat. Additionally, you are [bleeding](../../Browse/condition/bleeding.md), and this instance of the [condition](../../Browse/rule/combat/condition.md) can't be negated or removed in any way until you are no longer dying. While you are dying, you can still act, your allies can help you spend [Recoveries](../../Browse/rule/health/recoveries.md) in combat, and you can spend [Recoveries](../../Browse/rule/health/recoveries.md) out of combat as usual.

While your [Stamina](../../Browse/rule/health/stamina.md) is lower than 0, if it reaches the negative of your [winded](../../Browse/rule/health/winded.md) value, you die. When you die, you can't be brought back to life without the use of a special powerful item, such as a Scroll of Resurrection.

#### Director-Controlled Creatures

In most circumstances, Director-controlled creatures die or are destroyed when their [Stamina](../../Browse/rule/health/stamina.md) drops to 0.

##### No Recoveries

Director-controlled creatures don't have [Recoveries](../../Browse/rule/health/recoveries.md) or a [recovery value](../../Browse/rule/health/recoveries.md). Any such creatures who regain [Stamina](../../Browse/rule/health/stamina.md) during a battle do so by way of a special item or an ability in their stat block. However, there are times when a hero might wish to use an ability that allows another creature to spend a [Recovery](../../Browse/rule/health/recoveries.md) or to regain [Stamina](../../Browse/rule/health/stamina.md) equal to their [recovery value](../../Browse/rule/health/recoveries.md) on an injured [NPC](../../Browse/rule/general/npc.md). In such cases, a Director-controlled creature regains [Stamina](../../Browse/rule/health/stamina.md) equal to one-third of their [Stamina](../../Browse/rule/health/stamina.md) maximum.

#### Knocking Creatures Out

If you damage a creature with an ability that would kill them, you can choose to instead knock them unconscious. If a creature takes damage while unconscious in this way, they die.

Director-controlled creatures remain unconscious for 1 hour if no one does anything to wake them. They then gain 1 [Stamina](../../Browse/rule/health/stamina.md) and are no longer unconscious.

Heroes remain unconscious for 1 hour if no one does anything to wake them. After 1 hour, they can spend a [Recovery](../../Browse/rule/health/recoveries.md) and are no longer unconscious. If the hero has no [Recoveries](../../Browse/rule/health/recoveries.md) left, they can't wake up until they finish a [respite](../../Browse/rule/resource/respite.md).

##### Unconscious

While you are unconscious, you can't take main actions, maneuvers, [triggered actions](../../Browse/rule/combat/triggered-action.md), free [triggered actions](../../Browse/rule/combat/triggered-action.md), or [free maneuvers](../../Browse/rule/combat/free-maneuver.md); your [speed](../../Browse/rule/character/speed.md) is 0; you are unaware of your surroundings; and you [are prone](../../Browse/condition/prone.md). [Ability rolls](../../Browse/rule/dice/ability-roll.md) against you have a double [edge](../../Browse/rule/dice/edge.md). If you wake up from being unconscious, you can stand up from prone as a [free maneuver](../../Browse/rule/combat/free-maneuver.md).

#### Temporary Stamina {data-scc="mcdm.heroes.v1/rule.health/temporary-stamina"}

Some abilities, treasures, and other effects grant a creature temporary [Stamina](../../Browse/rule/health/stamina.md). Temporary [Stamina](../../Browse/rule/health/stamina.md) shouldn't be included in a creature's [Stamina](../../Browse/rule/health/stamina.md) total when figuring out a creature's [recovery value](../../Browse/rule/health/recoveries.md) or [winded](../../Browse/rule/health/winded.md) value. If you have temporary [Stamina](../../Browse/rule/health/stamina.md) while [winded](../../Browse/rule/health/winded.md), [dying](../../Browse/rule/health/dying.md), or dead, the temporary [Stamina](../../Browse/rule/health/stamina.md) doesn't change those states.

Whenever you take damage while you have temporary [Stamina](../../Browse/rule/health/stamina.md), the temporary [Stamina](../../Browse/rule/health/stamina.md) decreases first, and any leftover damage is applied to your [Stamina](../../Browse/rule/health/stamina.md) as usual. For instance, if you have 10 temporary [Stamina](../../Browse/rule/health/stamina.md) and take 16 damage, you lose the temporary [Stamina](../../Browse/rule/health/stamina.md) and then lose another 6 [Stamina](../../Browse/rule/health/stamina.md).

There is no maximum to how much temporary [Stamina](../../Browse/rule/health/stamina.md) you can have. Regaining [Stamina](../../Browse/rule/health/stamina.md) can't restore temporary [Stamina](../../Browse/rule/health/stamina.md). If you have temporary [Stamina](../../Browse/rule/health/stamina.md) and then gain more temporary [Stamina](../../Browse/rule/health/stamina.md), you get whichever amount of temporary [Stamina](../../Browse/rule/health/stamina.md) is greater, rather than adding the two pools together. For instance, if an ability grants you 10 temporary [Stamina](../../Browse/rule/health/stamina.md) when you already have 5, you have 10 temporary [Stamina](../../Browse/rule/health/stamina.md), not 15.

Unless otherwise indicated, temporary [Stamina](../../Browse/rule/health/stamina.md) disappears at the end of an encounter.

#### Object Stamina {data-scc="mcdm.heroes.v1/rule.general/unattended-object"}

Mundane objects in the game have [Stamina](../../Browse/rule/health/stamina.md) based on the material they're made of. When an object's [Stamina](../../Browse/rule/health/stamina.md) is reduced to 0, the object is destroyed. Objects have poison immunity all and psychic immunity all, though the Director can remove one or both of these immunities in the case of living objects, such as plants. A [size](../../Browse/rule/character/size.md) 1 object or 1 square of a larger object made of common materials has [Stamina](../../Browse/rule/health/stamina.md) as follows:

- Glass: 1 [Stamina](../../Browse/rule/health/stamina.md)
- Wood: 3 [Stamina](../../Browse/rule/health/stamina.md)
- Stone: 6 [Stamina](../../Browse/rule/health/stamina.md)
- Metal: 9 [Stamina](../../Browse/rule/health/stamina.md)

The Director can decide that a well-made or poorly made object has more or less [Stamina](../../Browse/rule/health/stamina.md). Destroying a [supernatural](../../Browse/rule/general/supernatural.md) object often (but not always) requires a specific quest, such as throwing a magic ring back into the volcano where it was forged.

### Underwater Combat {data-scc="mcdm.heroes.v1/rule.combat/underwater-combat"}

If a creature is fully submerged in water, they have fire immunity 5 and lightning weakness 5. If they can't automatically swim at full [speed](../../Browse/rule/character/speed.md) while moving, their [power rolls](../../Browse/rule/dice/power-roll.md) take a [bane](../../Browse/rule/dice/bane.md).

### Suffocating {data-scc="mcdm.heroes.v1/rule.health/suffocating"}

During combat or under similarly stressful circumstances, you can hold your breath for a number of [combat rounds](../../Browse/rule/combat/combat-round.md) equal to your [Might](../../Browse/rule/character/might.md) score (minimum 1 round). At the end of each [combat round](../../Browse/rule/combat/combat-round.md) after that, you take 1d6 damage while holding your breath.

Out of combat, you can hold your breath for a number of minutes equal to your [Might](../../Browse/rule/character/might.md) score. Being unable to breathe after that time counts as a stressful [condition](../../Browse/rule/combat/condition.md), causing you to run out of air as above.

### Mounted Combat {data-scc="mcdm.heroes.v1/rule.combat/mounted-combat"}

A willing creature with the Mount role (see Creature Roles in *Draw Steel: Monsters*) can serve as your mount as long as their [size](../../Browse/rule/character/size.md) is greater than yours. You can climb onto your mount freely (see Climbing Other Creatures above). You determine which space you occupy. While mounted, you can take the [Ride](../../Browse/feature/common/move-actions/ride.md) move action, but a mount can only be ridden this way once per round. Both mount and rider each take a [turn](../../Browse/rule/combat/turn.md) during combat.

If a creature riding a mount is [force moved](../../Browse/movement/forced-movement.md), they are knocked off the mount and must make a [test](../../Browse/rule/test/test.md) to determine how they land (see Climbing Other Creatures\). If a mount is [force moved](../../Browse/movement/forced-movement.md), they carry any riders with them. Riders and mounts [teleport](../../Browse/movement/teleport.md) separately.

If your mount dies, they [fall prone](../../Browse/condition/prone.md), and you fall off them and l[and prone](../../Browse/condition/prone.md) in the nearest unoccupied space of your choice.

### End of Combat

At the end of combat, the Director determines if the heroes earn any [Victories](../../Browse/rule/resource/victories.md). Any effect or [condition](../../Browse/rule/combat/condition.md) on you that you suffered during combat (except for being [winded](../../Browse/rule/health/winded.md), unconscious, or [dying](../../Browse/rule/health/dying.md)) ends if you want it to.

#### How Combat Ends

The Director determines when a combat encounter is over. While some battles—especially showdowns with important villains—can be about a fight to the bitter end, many other encounters can become a tedious slog if the heroes need to fight until every last enemy's [Stamina](../../Browse/rule/health/stamina.md) is reduced to 0.

To avoid a battle dragging, the Director can set [objectives](../../Browse/rule/combat/objective.md) when they build the encounter. Once the heroes achieve those [objectives](../../Browse/rule/combat/objective.md), or if it becomes clear that they can win the fight with minimal effort, the Director can end the encounter. They might do so by calling "Cut!" like a film director, or they can use some other phrase or indicator.

When the Director ends combat this way, the players typically choose how the battle ends by narrating a dramatic finish. Or in rarer cases when the heroes achieve a major [objective](../../Browse/rule/combat/objective.md) that sets off a story-defining event, the Director narrates the end of the battle with a positive outcome for the players, called an event ending (see below).

#### Objective Endings {data-scc="mcdm.heroes.v1/rule.combat/objective"}

While planning a combat encounter, the Director can set one or more objectives the heroes can achieve to end the encounter without dropping every last foe. Some broad categories of objectives are described in this section, but the Director should feel free to create their own. As well, Directors can always end combat anytime it becomes clear that the heroes are going to win an encounter with minimal effort, even if they haven't achieved all the objectives.

Each of the objective endings in this section is explored in detail including looking at monster roles, map advice, success [conditions](../../Browse/rule/combat/condition.md), and more—in the Introduction section of *Draw Steel: Monsters*.

##### Diminish Numbers

The simplest combat encounter [objective](../../Browse/rule/combat/objective.md) is almost always "defeat them before they defeat us." Though the heroes don't have to kill every last enemy in this type of encounter, winning the day requires that they push their opponents to the point where they are broken, flee, or surrender.

##### Defeat a Specific Foe

An encounter built around defeating a specific foe includes one or more of the heroes' enemies commanding the rest, such as a hobgoblin bloodlord leading a group of mercenaries, or one or more particularly powerful foes among a group of weaker ones, such as a pair of tusker demons in a gnoll war band. Because these more-powerful enemies are the stars of the encounter, if only weak foes are left once the stars are gone, the battle loses its challenge and it's time to wrap it up. It makes sense for those weaker foes to flee or surrender once their strongest allies have gone down.

##### Get the Thing!

Classic heroic fantasy is full of important objects that the heroes must protect from the forces of evil: magic rings, royal birth certificates, dragon eggs, and the like. Heroes often find themselves at violent odds with their enemies as they race to collect a valuable or important item from a guarded temple or castle, or when they need to steal the item from a group of enemies already in possession of it.

[Objectives](../../Browse/rule/combat/objective.md) in this category work well when paired with other [objectives](../../Browse/rule/combat/objective.md), such as defeating a specific foe. For instance, the heroes must steal a ledger containing a record of criminal activity from an overmind and her lackeys. However, even if they obtain the ledger, the battle won't be over until they also defeat the overmind, who won't let the book go without a fight!

##### Destroy the Thing!

Combat doesn't always have to be about destroying your enemies. Sometimes it's about destroying their stuff! Burning a pirate captain's vessel, closing a portal to the Abyssal Wasteland before it lets in an army of demons, or shutting down a massive kobold trap made of spinning blades could so hamper the heroes' foes that the battle is no longer worth fighting once the damage is done.

##### Save Another

No one earns the mantle of hero without saving a few lives. Sometimes the point of an encounter isn't to kill, but to save as many folks as you can. If the heroes rescue powerful allies from the clutches of their foes during combat, the added strength of those allies might be enough to make the remainder of the encounter trivial. When you and your companions save a griffon from a crew of poachers, the hunters become the... well, you know the rest.

##### Escort

Surprising as it may seem, sometimes the fate of the mission doesn't rest on the heroes' shoulders at all! Sometimes it rests on the shoulders of someone standing next to the heroes. The heroes' job is to keep this important person safe as they travel to a specific destination.

Not every escort encounter is on behalf of a wise or mighty ally. Sometimes the heroes are tasked with protecting a helpless or even an actively troublesome creature, such as a hapless noble or a wayward child. They might even have to protect a bulky or inconvenient inanimate object. Whatever the case, the enemies just keep coming until the heroes get their charge to their destination.

##### Hold Them Off

Sometimes the heroes just need to buy time. They might need to battle a conquering tyrant's army to allow innocent villagers time to escape. They might need to hold off wave after wave of zombies while a group of priests completes a ritual to lay the undead to rest for good. To achieve this [objective](../../Browse/rule/combat/objective.md), the heroes need to stay alive and protect a particular position for a number of rounds determined by you.

##### Assault the Defenses

The enemy holds a strategically important position and the heroes want it. The encounter ends when the heroes secure the [objective](../../Browse/rule/combat/objective.md) defensive location for themselves, even if there are more enemies outside it. Sometimes an encounter with this [objective](../../Browse/rule/combat/objective.md) is part of a combined [objective](../../Browse/rule/combat/objective.md), as when heroes must first assault the defenses, then hold that defensive position against counterattack.

##### Stop the Action

Sometimes combat is complicated by the fact that the heroes need to stop the villainous actions of their foes. It's not enough to simply defeat the warriors in a cult. The heroes must also stop the zealots' archdevil-summoning ritual! Or it might be that the heroes need to interrupt a wedding and make sure an evil mage doesn't marry the heir to the throne. Despite combat, the mage forces the ceremony to continue! [Objectives](../../Browse/rule/combat/objective.md) in this category have a timer associated with them. If the heroes don't achieve the [objective](../../Browse/rule/combat/objective.md) in a certain number of rounds, the [conditions](../../Browse/rule/combat/condition.md) of the battle could well change. For instance, if the cultists summon the archdevil, defeating the [devil](../../Browse/ancestry/devil.md) suddenly becomes the heroes' new [objective](../../Browse/rule/combat/objective.md)!

##### Complete the Action

This encounter [objective](../../Browse/rule/combat/objective.md) sees the characters charged with initiating an event, performing a ritual, and so forth. For instance, if the heroes are attempting to launch an airship while repelling a [time raider](../../Browse/ancestry/time-raider.md) boarding party, the encounter could be over the moment the heroes manage to activate the vessel and take off with just a few [time raiders](../../Browse/ancestry/time-raider.md) actually aboard.

#### Dramatic Finish

If the heroes are able to end a fight with a dramatic finish, the Director assigns each hero one or more of their remaining enemies, then asks that hero's player to describe how the hero neutralizes that threat. The hero might deliver a killing blow, knock their foe out, or let the enemy flee with their tail between their legs (literally or figuratively). If the fight has more heroes than Director-controlled enemies, the Director can assign more than one hero to an enemy, then ask the players how their characters work together to bring that enemy down. After everyone gives a description, the battle ends.

#### Event Ending

If the Director calls the end of combat when a specific [objective](../../Browse/rule/combat/objective.md) in an encounter is achieved, the event ending creates a big narrative finish. The Director can pick a narrative trigger for an event ending before an encounter begins, or can come up with one on the fly if that makes more sense.

Event endings can cover big scenarios such as the characters destroying a dam to unleash a river upon their enemies, or completing a ritual that causes all the demons they've been battling to be sent back to the Abyssal Wasteland, accompanied by visual details. For example, if the heroes are battling a necromancer who controls a horde of zombies, the undead might all crumble to dust when the necromancer is defeated. If the heroes destroy an eldritch machine sapping the land of its natural energy, the shockwave from the device's destruction could vaporize the cultists attempting to protect it.

> **Fleeing Foes**
>
> If you've played a fantasy RPG before, odds are you've had an encounter where you didn't chase down every last fleeing foe—and then one such foe [grabbed](../../Browse/condition/grabbed.md) another bunch of evil buddies and came back to ambush you. It takes only one experience like this to create players who promise, "No survivors. No mercy!" whenever foes break ranks. Chasing down every last foe can be fun once in a while, but it can easily [turn](../../Browse/rule/combat/turn.md) a tactical encounter into a slog.
>
> Luckily, this is a heroic game. Although the Director can surprise the players with dramatic reveals and twisty-turny stories, "Gotcha!" moments that make players suspicious of every fleeing bandit shouldn't be part of those stories. If a bandit is fleeing an encounter, they're running away to rethink their life. If they're going for help, the players should get some sense of that—for example, the bandit screaming at the top of their lungs for help as they run toward their leader's tent. That way, the players can process what's happening, and will understand that stopping that fleeing bandit is part of the challenge of the encounter.
