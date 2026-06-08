---
name: Damage Immunity
scc: mcdm.heroes.v1/rule.damage/damage-immunity
type: rule
---

# Damage Immunity

---

Damage immunity means that a creature can ignore some or all of the damage they would usually take from certain attacks or effects.

Damage immunity might have a [damage type](damage-type.md) associated with it, expressed as "[damage type] immunity." Damage immunity often has a value associated with it, so that one creature's stat block notes "damage immunity 5" (representing immunity to all damage), while another creature has "lightning immunity 5." Whenever a target with damage immunity takes damage of the indicated type, they can reduce the damage by the value of the immunity (to a minimum of 0 damage). If the value of the immunity is "all," then the target ignores all damage of the indicated type.

Damage immunity should be the last thing applied when calculating damage. For instance, if your hero has fire immunity 5 and takes 8 fire damage, they take 3 damage. But if an ally first halved the damage with a triggered action, your hero would take 4 damage before immunity is applied, with immunity then reducing the damage to 0.

If multiple damage immunities apply to a source of damage, only the immunity with the highest value applies. For instance, a creature with damage immunity 5 and fire immunity 10 who takes 12 fire damage reduces the damage by 10 points.
