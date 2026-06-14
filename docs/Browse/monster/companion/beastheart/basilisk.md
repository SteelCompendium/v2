---
printing: "1.0"
printing_book: "The Beastheart"
companion: basilisk
level: "1"
name: Basilisk
scc: mcdm.beastheart.v1/monster.companion.beastheart.statblock/basilisk
type: feature-group
---

# Basilisk

---

|     Beast, Companion     |         -         |                            Level 1                            |          -          |            -             |
|:------------------------:|:-----------------:|:-------------------------------------------------------------:|:-------------------:|:------------------------:|
|      **1L**<br>Size      |  **5**<br>Speed   |                    **= yours**<br>Stamina                     | **2**<br>Stability  | **1 + M**<br>Free Strike |
| **Poison 3**<br>Immunity | **—**<br>Movement | **[Alertness](../../../skill/intrigue/alertness.md)**<br>Skills |                     |                          |
|     **+2**<br>Might      | **+1**<br>Agility |                       **−1**<br>Reason                        | **+2**<br>Intuition |    **+2**<br>Presence    |

## Petrify {data-scc="mcdm.beastheart.v1/feature.ability.companion.beastheart.basilisk.level-1/petrify"}

*Transfixed by the basilisk's magical gaze or struck by their poisoned claws, the foe's body begins to calcify.*

| **Companion, Magic, Melee, Ranged, Weapon** |     **Maneuver** |
|---------------------------------------------|-----------------:|
| **📏 Melee 1 or ranged 5**                  | **🎯 One enemy** |

**Effect:** The target takes corruption damage equal to 3 + the basilisk's Might score and is stoned (save ends) (see [Stoned](../../../feature/companion/beastheart/basilisk/level-1/stoned.md)).

**Spend 1 Ferocity:** While stoned this way, the target is also [slowed](../../../condition/slowed.md).

## Stoned {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.basilisk.level-1/stoned"}

A stoned creature is magically turning to stone. Each time a creature fails the saving throw to end this effect, they take corruption damage equal to the basilisk's Might score. A stoned creature or a creature adjacent to them can use a maneuver to cut the encroaching stone from the stoned target's body, ending the effect and dealing damage to the target equal to twice the basilisk's Might score that can't be reduced in any way. A creature reduced to 0 Stamina while they are stoned, or by an ability that causes a creature to become stoned, is turned to stone until they are restored to life by magical means.

## Basilisk Advancement Features {data-scc="mcdm.beastheart.v1/monster.companion.beastheart.advancement-features/basilisk"}

### Foes Forever Frozen {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.basilisk.level-3/foes-forever-frozen"}

Whenever the basilisk makes a strike against a creature while rampaging, the target is stoned (save ends).

### Rock Smasher {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.basilisk.level-6/rock-smasher"}

Whenever you deal rolled damage to a stoned creature while the basilisk is rampaging, you deal extra damage equal to twice your Might score.

### Heart of Stone {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.basilisk.level-10/heart-of-stone"}

While the basilisk is rampaging, you and the basilisk have damage immunity 10 as you become nearly impervious living statues.
