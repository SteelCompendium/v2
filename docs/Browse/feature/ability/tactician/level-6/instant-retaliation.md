---
action_type: Free triggered
class: tactician
cost: 9 Focus
distance: Melee 1
effect: The target takes half the damage. You then make a power roll against the triggering creature.
flavor: You [parry](scc:mcdm.heroes.v1/feature.ability.tactician.level-1/parry) with almost supernatural speed.
keywords:
    - Melee
    - Weapon
level: "6"
name: Instant Retaliation
power_roll_characteristic: Might
scc: mcdm.heroes.v1/feature.ability.tactician.level-6/instant-retaliation
subtype: triggered
target: One ally
tier1: A < WEAK, [dazed](scc:mcdm.heroes.v1/condition/dazed) (save ends)
tier2: A < AVERAGE, [dazed](scc:mcdm.heroes.v1/condition/dazed) (save ends)
tier3: A < STRONG, [dazed](scc:mcdm.heroes.v1/condition/dazed) (save ends)
trigger: A creature deals damage to the target.
type: ability
---

# Instant Retaliation

*You [parry](../level-1/parry.md) with almost supernatural speed.*

| **Melee, Weapon** | **Free triggered** |
| ------------------------------------|-------------------:|
| **📏 Melee 1**                   |    **🎯 One ally** |

**Trigger:** A creature deals damage to the target.

**Effect:** The target takes half the damage. You then make a power roll against the triggering creature.

**Power Roll + Might:**

- **≤11:** A < WEAK, [dazed](../../../../condition/dazed.md) (save ends)
- **12-16:** A < AVERAGE, [dazed](../../../../condition/dazed.md) (save ends)
- **17+:** A < STRONG, [dazed](../../../../condition/dazed.md) (save ends)
