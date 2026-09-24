---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 3
name: Stacking Unique Effects
scc: mcdm.heroes.v1/rule.combat/stacking-effects
type: rule
---

# Stacking Unique Effects

---

The unique effects of different abilities are combined—effectively stacking on top of each other—if their durations and targets overlap. However, the effects of the same ability used multiple times don't stack. Instead, the most impactful effect—such as the highest [bonus](../dice/bonuses-and-penalties.md)—from each use of the ability applies. The most recently used ability applies for determining duration.

For example, the [null's](../../class/null.md) [Null Field](../../feature/null/level-1/null-field.md) ability reduces the [potencies](../character/potency.md) of enemies within the field by 1. If two allied [nulls](../../class/null.md) each have their [Null Field](../../feature/null/level-1/null-field.md) ability active and an enemy cultist is targeted by both abilities, that cultist's [potencies](../character/potency.md) are reduced by 1, not by 2.

Different effects that impose the same [condition](condition.md) (see [Conditions](condition.md) below) don't stack to impose the [condition](condition.md) twice. For instance, if a hero is targeted by numerous creatures whose abilities cause a target to become [weakened](../../condition/weakened.md) (imposing a [bane](../dice/bane.md) on the target's [power rolls](../dice/power-roll.md)), the target isn't [weakened](../../condition/weakened.md) twice to impose a double [bane](../dice/bane.md) on those rolls. A character who is [grabbed](../../condition/grabbed.md) by an enemy can't be [grabbed](../../condition/grabbed.md) again by another enemy. The same holds true for game effects that aren't [conditions](condition.md). For example, if a hero is targeted by multiple abilities or effects that can halve their [recovery value](../health/recoveries.md), the hero's [recovery value](../health/recoveries.md) is halved only once.
