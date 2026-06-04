---
class: tactician
level: "1"
name: Doctrine Triggered Action
scc: mcdm.heroes.v1/feature.trait.tactician.level-1/doctrine-triggered-action
type: trait
---

# Doctrine Triggered Action

---

Your [tactical doctrine](tactical-doctrine.md) grants you a triggered action, as shown on the Doctrine Triggered Actions table.

### Doctrine Triggered Actions Table

| Doctrine   | Triggered Action |
|------------|------------------|
| Insurgent  | [Advanced Tactics](../../../ability/tactician/level-1/advanced-tactics.md) |
| Mastermind | [Overwatch](../../../ability/tactician/level-1/overwatch.md)        |
| Vanguard   | [Parry](../../../ability/tactician/level-1/parry.md)            |

### Advanced Tactics {data-scc="mcdm.heroes.v1/feature.ability.tactician.level-1/advanced-tactics"}


*Your leadership aids an ally.*

| **Ranged**       |   **Triggered** |
|------------------|----------------:|
| **📏 Ranged 10** | **🎯 One ally** |

**Trigger:** The target deals damage to another creature.

**Effect:** The target gains 2 surges, which they can use on the triggering damage.

**Spend 1 Focus:** If the damage has any potency effect associated with it, the potency is increased by 1.

### Overwatch {data-scc="mcdm.heroes.v1/feature.ability.tactician.level-1/overwatch"}


*Under your direction, an ally waits for just the right moment to strike.*

| **Ranged**       |       **Triggered** |
|------------------|--------------------:|
| **📏 Ranged 10** | **🎯 One creature** |

**Trigger:** The target moves.

**Effect:** At any time during the target's movement, one ally can make a free strike against them.

**Spend 1 Focus:** If the target has R < AVERAGE, they are [slowed](../../../../condition/slowed.md) (EoT).

### Parry {data-scc="mcdm.heroes.v1/feature.ability.tactician.level-1/parry"}


*Your quick reflexes cost an enemy the precision they seek.*

| **Melee, Weapon** |            **Triggered** |
|-------------------|-------------------------:|
| **📏 Melee 2**    |  **🎯 Self or one ally** |

**Trigger:** A creature deals damage to the target.

**Effect:** You can [shift](../../../../movement/shifting.md) 1 square. If the target is you, or if you end this [shift](../../../../movement/shifting.md) adjacent to the target, the target takes half the damage. If the damage has any potency effect associated with it, the potency is decreased by 1.

**Spend 1 Focus:** This ability's distance becomes Melee 1 + your Reason score, and you can [shift](../../../../movement/shifting.md) up to a number of squares equal to your Reason score instead of 1 square.
