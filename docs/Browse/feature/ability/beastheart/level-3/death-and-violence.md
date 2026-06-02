---
action_type: Triggered Action
class: beastheart
cost: 7 Ferocity
distance: Ranged 10
effect: 'The target dies. You teleport to the target''s space, shift up to a number of squares equal to your Might score, and can then make a melee free strike. You then make the following power roll, targeting each enemy within 5 squares of the target:'
flavor: You leap from your foe's corpse.
keywords:
    - Beastheart
    - Magic
    - Ranged
level: "3"
name: Death and Violence
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-3/death-and-violence
target: One creature
tier1: P < WEAK [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
tier2: 4 psychic damage; P < AVERAGE [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
tier3: 8 psychic damage; P < STRONG [frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)
trigger: Your companion uses an ability that reduces the target to 0 Stamina.
type: ability
---

# Death and Violence

---

*You leap from your foe's corpse.*

| **Beastheart, Magic, Ranged** | **Triggered Action** |
|-------------------------------|---------------------:|
| **📏 Ranged 10**              | **🎯 One creature**  |

**Trigger:** Your companion uses an ability that reduces the target to 0 Stamina.

**Effect:** The target dies. You teleport to the target's space, shift up to a number of squares equal to your Might score, and can then make a melee free strike. You then make the following power roll, targeting each enemy within 5 squares of the target:

**Power Roll + Might:**

- **≤11:** P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
- **12-16:** 4 psychic damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
- **17+:** 8 psychic damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)
