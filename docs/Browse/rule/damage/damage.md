---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
name: Damage
scc: mcdm.heroes.v1/rule.damage/damage
type: rule
---

# Damage

---

Strikes, area attacks, environmental effects, and other hazards can all deal damage to the heroes and their foes. Whenever a creature takes damage, they reduce their [Stamina](../health/stamina.md) (see below) by an amount equal to the damage taken.

## Damage Types {data-scc="mcdm.heroes.v1/rule.damage/damage-type"}

Typical damage, such as that caused by weapons, falling, traps, and monstrous claws, has no type associated with it. That's because for most creatures, there's no difference in the amount of harm caused by being run through with a pike, dropped from a height onto a stone floor, slashed by a pendulum scythe, or skewered on a minotaur's horns.

However, when it comes to elemental and [supernatural](../general/supernatural.md) damage sources, some creatures might have an immunity or weakness to that damage. As such, abilities and effects note when they deal any of the following damage types: acid, cold, corruption, fire, holy, lightning, poison, psychic, or sonic.

### Damage Immunity {data-scc="mcdm.heroes.v1/rule.damage/damage-immunity"}

Damage immunity means that a creature can ignore some or all of the damage they would usually take from certain attacks or effects.

Damage immunity might have a [damage type](damage-type.md) associated with it, expressed as "[damage type] immunity." Damage immunity often has a value associated with it, so that one creature's stat block notes "damage immunity 5" (representing immunity to all damage), while another creature has "lightning immunity 5." Whenever a target with damage immunity takes damage of the indicated type, they can reduce the damage by the value of the immunity (to a minimum of 0 damage). If the value of the immunity is "all," then the target ignores all damage of the indicated type.

Damage immunity should be the last thing applied when calculating damage. For instance, if your hero has fire immunity 5 and takes 8 fire damage, they take 3 damage. But if an ally first halved the damage with a [triggered action](../combat/triggered-action.md), your hero would take 4 damage before immunity is applied, with immunity then reducing the damage to 0.

If multiple damage immunities apply to a source of damage, only the immunity with the highest value applies. For instance, a creature with damage immunity 5 and fire immunity 10 who takes 12 fire damage reduces the damage by 10 points.

### Damage Weakness {data-scc="mcdm.heroes.v1/rule.damage/damage-weakness"}

Damage weakness works like [damage immunity](damage-immunity.md), except that creatures take extra damage whenever they take damage of the indicated type. For instance, if a creature has fire weakness 5 and is dealt 10 fire damage, they take 15 fire damage instead.

A creature who has "damage weakness X" with no specific type or keyword indicated has weakness of the indicated amount when they take damage of any type.

If a creature has both [damage immunity](damage-immunity.md) and damage weakness for a source of damage, apply the weakness first, then the immunity.

If multiple damage weaknesses apply to a source of damage, only the weakness with the highest value applies.
