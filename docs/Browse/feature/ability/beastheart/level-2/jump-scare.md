---
action_type: Main action
class: beastheart
cost: 5 Ferocity
distance: 2 burst
effect: Your companion shifts up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.
flavor: Surprised to see me?
keywords:
    - Area
    - Companion
    - Magic
level: "2"
name: Jump Scare
power_roll_characteristic: Intuition
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-2/jump-scare
subclass: prowler
target: Each enemy in the area
tier1: 4 damage; P < WEAK [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
tier2: 6 damage; P < AVERAGE [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
tier3: 10 damage; P < STRONG [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
type: ability
---

# Jump Scare

---

*Surprised to see me?*

| **Area, Companion, Magic** | **Main action** |
|----------------------------|----------------:|
| **📏 2 burst**             | **🎯 Each enemy in the area** |

**Special:** This ability targets only enemies with line of effect to your companion.

**Effect:** Your companion shifts up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.

**Power Roll + Intuition:**

- **≤11:** 4 damage; P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
- **12-16:** 6 damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
- **17+:** 10 damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)
