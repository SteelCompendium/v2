---
name: Power Rolls
scc: mcdm.heroes.v1/rule.dice/power-roll
type: rule
---

# Power Rolls

---

Whenever a hero or other creature in the game attempts a task with an uncertain outcome, such as attacking a foe, sneaking by a guard patrol without being seen, or persuading a queen to provide military aid, the creature makes a power roll to determine the outcome of their actions.

## Types of Power Rolls

The game uses two types of power rolls. An **ability roll** is used when you use certain abilities to determine their impact. For instance, if a [fury](../../class/fury.md) uses their [Brutal Slam](../../feature/ability/fury/level-1/brutal-slam.md) ability to strike an enemy, their ability roll determines how much damage the enemy takes and how far back the enemy is pushed. See Abilities for more information.

A **test** is a power roll you make outside of using your abilities to affect or interact with the world around you. A [tactician](../../class/tactician.md) might not have an ability that lets them climb up the face of a cliff, so climbing is an activity they can attempt with a test. An [elementalist](../../class/elementalist.md) doesn't have an ability that lets them automatically intimidate a cultist into backing down from a fight, but they can make a test if they want to try. See [Tests](../../../Read/heroes/tests.md) for more information.

> **Sapient Creatures**
>
> All creatures in the game are sentient, capable of sensing and reacting to the world around them. But only some creatures are sapient, possessed of advanced intellect and consciousness. Being sapient has nothing to do with a creature's Reason score, but is determined solely by whether a creature is capable of human-like levels of thought and emotion. The Director decides whether creatures are sapient for the purpose of being affected by abilities and features that affect only sapient or nonsapient creatures.

## Making a Power Roll

When you make a power roll, you roll two ten-sided dice (usually noted as 2d10 in the rules) and add one of your characteristics. The characteristic you add depends on the kind of roll you're making, as outlined in Abilities and Tests.

### Power Roll Outcomes {data-scc="mcdm.heroes.v1/rule.dice/tier-outcome"}

The total of a power roll determines your outcome tier—three levels that determine how successful your power roll is.

- **Tier 1:** If your power roll total is **11 or lower**, it is a tier 1 outcome. This is the worst outcome a power roll can have. If you're using an ability, a tier 1 outcome means you still do something, but the impact of what you do is minimal. With this outcome, a strike ability might deal a little bit of damage and not do much else. For a test, a tier 1 outcome might mean you fail at what you set out to do, and you might also incur a negative consequence.
- **Tier 2:** If your power roll total is **12 to 16**, it is a tier 2 outcome. This is the average outcome of many power rolls, especially for heroes who are 1st level. When using an ability, a tier 2 outcome means that what you do has a moderate impact. With this outcome, a strike ability deals a decent amount of damage and has an effect that briefly helps allies or hinders enemies. For a test, a tier 2 outcome means you might succeed at what you set out to do—though depending on the difficulty, success might have a cost.
- **Tier 3:** If your power roll total is **17 or higher**, it is a tier 3 outcome. This is the best outcome a power roll can have. When using an ability, a tier 3 outcome means you deliver the maximum impact possible. With this outcome, a strike ability deals a lot of damage and has a powerful or lasting effect on enemies or allies. For a test, a tier 3 outcome means you succeed at what you set out to do. If the test has an easy difficulty, you also get a little something extra in addition to your success.

The specific outcome of any power roll is determined by the effect or ability that requires the roll (see Abilities) or the rules for tests (see [Tests](../../../Read/heroes/tests.md)).

### Downgrade a Power Roll

Whenever you make a power roll, you can downgrade it to select the outcome of a lower tier. For instance, if an ability has a tier 3 outcome that lets you impose the [restrained](../../condition/restrained.md) condition on a creature, but the tier 2 outcome for that ability lets you impose the [slowed](../../condition/slowed.md) condition, you can use the tier 2 outcome if you would rather have the creature [slowed](../../condition/slowed.md) than [restrained](../../condition/restrained.md).

If you downgrade a critical hit, you still get the extra action benefit of the critical hit (see Critical Hit in [Classes](../../../Read/heroes/classes.md)).

### Natural Roll {data-scc="mcdm.heroes.v1/rule.dice/natural-roll"}

The total of your power roll before your characteristic or any other modifiers are added is called the natural roll. The rules often refer to this as "rolling a natural X," where X is the total of the roll. For example, if you get a 20 on a power roll before adding your characteristic, this is called rolling a natural 20.

When you roll a natural 19 or 20 on a power roll, it is always a tier 3 result regardless of any modifiers, and on certain types of power rolls, this is a critical hit (see Critical Hit in [Classes](../../../Read/heroes/classes.md)).

## Edges and Banes

An archer standing on a castle wall fires down into a throng of enemies, hitting the mark each time thanks to their [high ground](../../movement/high-ground.md). A drunken bandit struggles to land blows on sober opponents as alcohol clouds their senses. Under certain circumstances, you need more than just a characteristic to represent the advantages and disadvantages that heroes, their enemies, and their allies might have.

### Edge {data-scc="mcdm.heroes.v1/rule.dice/edge"}

An **edge** represents a situational advantage a hero or an enemy has when making a power roll. For example, a standing hero who makes a melee strike against a [prone](../../condition/prone.md) creature gains an edge on the power roll for their strike. A pair of magic gloves that makes your hands sticky might grant you an edge when making a power roll to climb walls!

When you make a power roll with an edge, you gain a +2 bonus to the roll. If you make a power roll with two or more edges, you have a **double edge**. With a double edge, you don't add anything to the power roll, but the outcome of the roll automatically improves one tier (to a maximum of tier 3).

### Bane {data-scc="mcdm.heroes.v1/rule.dice/bane"}

A **bane** represents a situational disadvantage a hero or an enemy has when making a power roll. For example, if you make a strike while [prone](../../condition/prone.md), the power roll for the strike takes a bane. A rainstorm might give you a bane on a power roll made to climb an outdoor wall because the weather makes the stone surface extra slick.

When you make a power roll with a bane, you take a −2 penalty to the roll. If you make a power roll with two or more banes, you have a **double bane**. With a double bane, you don't subtract anything from the power roll, but the outcome of the roll automatically decreases one tier (to a minimum of tier 1).

### Rolling With Edges and Banes

Under certain circumstances, you might have one or more edges and banes on the same roll. For instance, you might take a bane when [weakened](../../condition/weakened.md) by poison, even as you gain an edge for striking a [prone](../../condition/prone.md) creature. In general, edges and banes cancel each other out, resolving as follows:

- If you have an edge and a bane, or if you have a double edge and a double bane, the roll is made as usual without any edges or banes.
- If you have a double edge and just one bane, the roll is made with one edge, regardless of how many individual edges contribute to the double edge.
- If you have a double bane and just one edge, the roll is made with one bane, regardless of how many individual banes contribute to the double bane.

### When to Use Edges and Banes

The rules tell you when to modify a roll with an edge or a bane. The Director can also modify rolls with edges and banes as a response to narrative or environmental circumstances. For instance, no rule specifically says that rain imposes a bane on power rolls made to climb a stone wall. But it makes sense that rainy conditions should make climbing that wall harder, so a Director should absolutely do so!

> **Why Cap?**
>
> We capped edges and banes at a maximum of two each for several reasons, including thinking about the narrative of those penalties. Every little advantage or disadvantage in a heroic story has diminishing returns, acknowledging that a creature can benefit or be hindered by short-term circumstances only so much. For example, a character who is [prone](../../condition/prone.md) and [weakened](../../condition/weakened.md) by poison already finds it difficult to attack—so that becoming [restrained](../../condition/restrained.md) by a net can't really make it harder.

We also liked capping edges and banes at two because it keeps play quick. It's nice to not need to count beyond two positive or negative circumstances in a battle with a lot of effects flying around.

## Bonuses and Penalties {data-scc="mcdm.heroes.v1/rule.dice/bonuses-and-penalties"}

While edges and banes cover most circumstantial effects that can have an impact on a power roll, a few rules add numeric bonuses or penalties to power rolls. Bonus and penalty values are specified in the rules that impose them, and are calculated independently of edges and banes, and before edges and banes are factored into a power roll. There is no limit to the number of bonuses or penalties that can apply to a power roll, and bonuses and penalties always add together.

Though it might sound as if the math with bonuses and penalties can get confusing, fear not! Bonuses and penalties are rare except in the case of skills, which appear on your character sheet (see [Skills](../../../Read/heroes/skills.md) for more information).

## Automatic Tier Outcomes

Effects in the game sometimes allow a creature to obtain an automatic tier 1, 2, or 3 outcome on a power roll. Such effects supersede any edges, banes, bonuses, or penalties that might affect the roll. If you obtain an automatic tier outcome and the power roll would have an additional effect if you get a specific roll, such as scoring a critical hit in combat, you can still make the roll to determine if you obtain the additional effect in addition to the automatic outcome.

If you are under multiple effects that each grant you a different automatic outcome, those effects cancel each other out and all automatic outcomes are ignored. If multiple effects grant you the same automatic outcome, you obtain that outcome.
