---
class: beastheart
level: "1"
name: Wild Nature Maneuver
scc: mcdm.beastheart.v1/feature.trait.beastheart.level-1/wild-nature-maneuver
type: trait
---

# Wild Nature Maneuver

---

Your wild nature grants you a maneuver, as shown on the Wild Nature Maneuvers table. Each maneuver can be used only by the beastheart.

| Wild Nature | Maneuver                                                                                         |
|-------------|--------------------------------------------------------------------------------------------------|
| Guardian    | [Living Arrow](../../../ability/beastheart/level-1/living-arrow.md)           |
| Prowler     | [Lightning Leap](../../../ability/beastheart/level-1/lightning-leap.md)       |
| Punisher    | [Avalanche Rush](../../../ability/beastheart/level-1/avalanche-rush.md)       |
| Spark       | [Jaws of the Storm](../../../ability/beastheart/level-1/jaws-of-the-storm.md) |

### Avalanche Rush {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-1/avalanche-rush"}

*You ride a cascade of ice over your foes.*

| **Beastheart, Melee, Weapon** |        **Maneuver** |
|-------------------------------|--------------------:|
| **📏 Melee 1**                | **🎯 One creature** |

**Effect:** The target takes damage equal to 3 + your Might score, and if they have M < AVERAGE, they are knocked [prone](../../../../condition/prone.md).

You can move up to 3 squares before and after you use this ability. During this movement, a [prone](../../../../condition/prone.md) enemy's space doesn't count as difficult terrain, and the first time you enter a [prone](../../../../condition/prone.md) enemy's space, that enemy takes cold damage equal to your Might score.

**Spend 1 Ferocity:** If the target has M < STRONG, they are knocked [prone](../../../../condition/prone.md).

### Jaws of the Storm {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-1/jaws-of-the-storm"}

*Your foes are torn by a tempest of primordial teeth and claws.*

| **Area, Beastheart, Magic** |                  **Maneuver** |
|-----------------------------|------------------------------:|
| **📏 2 cube within 5**      | **🎯 Each enemy in the area** |

**Effect:** Each target takes cold, fire, lightning, or sonic damage (your choice) equal to your Might score.

**Spend 1 Ferocity:** The size of the cube increases by 1.

### Lightning Leap {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-1/lightning-leap"}

*You summon a lightning bolt and ride it into battle.*

| **Beastheart, Melee, Weapon** |        **Maneuver** |
|-------------------------------|--------------------:|
| **📏 Melee 1**                | **🎯 One creature** |

**Effect:** The target takes damage equal to 3 + your Might score. Before you use this ability, you can [jump](../../../../movement/jump.md) up to a number of squares equal to your Intuition score in a straight line. During this jump, enemies' spaces don't count as [difficult terrain](../../../../movement/difficult-terrain.md) for you. The target takes extra lightning damage equal to the number of squares you jumped this way.

**Spend 1 Ferocity:** Your jump doesn't provoke opportunity attacks.

### Living Arrow {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-1/living-arrow"}

*You point, and your companion appears.*

| **Beastheart, Magic, Ranged** |                **Maneuver** |
|-------------------------------|----------------------------:|
| **📏 Ranged 10**              | **🎯 One unoccupied space** |

**Effect:** If your companion is within range and can fit into the target space, they [teleport](../../../../movement/teleport.md) to the space. They can then make a melee free strike.

**Spend 1 Ferocity:** The distance increases to ranged 15.
