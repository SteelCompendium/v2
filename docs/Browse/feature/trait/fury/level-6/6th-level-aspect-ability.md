---
class: fury
level: "6"
name: 6th-Level Aspect Ability
scc: mcdm.heroes.v1/feature.trait.fury.level-6/6th-level-aspect-ability
type: trait
---

# 6th-Level Aspect Ability

---

Your [primordial aspect](../level-1/primordial-aspect.md) grants your choice of one of two heroic abilities.

## 6th-Level Berserker Abilities

Choose one of the following abilities.

### Avalanche Impact {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/avalanche-impact"}


*You leap and crash down, causing a shockwave that devastates foes.*

| **Magic**   | **Maneuver** |
|-------------|-------------:|
| **📏 Self** |  **🎯 Self** |

**Effect:** You jump up to your maximum jump distance and make one power roll that targets each creature adjacent to the space where you land.

**Power Roll + Might:**

- **≤11:** 4 damage; push 1
- **12-16:** 7 damage; push 2
- **17+:** 11 damage; push 3

### Force of Storms {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/force-of-storms"}


*You strike an enemy hard enough to be a projectile that knocks a crowd of creatures around.*

| **Melee, Strike, Weapon** |     **Main action** |
|---------------------------|--------------------:|
| **📏 Melee 1**            | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 7 + M damage; push 3
- **12-16:** 11 + M damage; push 5
- **17+:** 16 + M damage; push 7

**Effect:** When the target ends this [forced movement](../../../../movement/forced-movement.md), each creature within 2 squares of the target is pushed 3 squares.

## 6th-Level Reaver Abilities

Choose one of the following abilities.

### Death Strike {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/death-strike"}


*Once you taste your foe's blood, you become more efficient and turn every killing blow into an opportunity.*

| **Melee, Strike, Weapon** | **Free triggered** |
|---------------------------|-------------------:|
| **📏 Melee 1**            |        **🎯 Self** |

**Trigger:** You reduce a creature to 0 Stamina with a strike.

**Effect:** You target a creature adjacent to you with the same strike, using the same power roll as the triggering strike.

### Seek and Destroy {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/seek-and-destroy"}


*You break through the enemy lines to make an example.*

| **Melee, Strike, Weapon** |     **Main action** |
|---------------------------|--------------------:|
| **📏 Melee 1**            | **🎯 One creature** |

**Effect:** You [shift](../../../../movement/shifting.md) up to your speed.

**Power Roll + Might:**

- **≤11:** 4 + M damage; P < WEAK, [frightened](../../../../condition/frightened.md) (save ends)
- **12-16:** 6 + M damage; P < AVERAGE, [frightened](../../../../condition/frightened.md) (save ends)
- **17+:** 10 + M damage; P < STRONG, [frightened](../../../../condition/frightened.md) (save ends)

**Effect:** If a target who is not a leader or solo creature is winded by this strike, they are reduced to 0 Stamina and you choose an enemy within 5 squares of you. If that enemy has P < AVERAGE, they are [frightened](../../../../condition/frightened.md) of you (save ends).

## 6th-Level Stormwight Abilities

Choose one of the following abilities.

### Pounce {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/pounce"}


*You strike at the target like the ultimate predator you are.*

| **Magic, Melee, Strike, Weapon** |     **Main action** |
|----------------------------------|--------------------:|
| **📏 Melee 1**                   | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 8 damage; M < WEAK, [grabbed](../../../../condition/grabbed.md)
- **12-16:** 13 damage; M < AVERAGE, [grabbed](../../../../condition/grabbed.md)
- **17+:** 17 damage; M < STRONG, [grabbed](../../../../condition/grabbed.md)

**Effect:** You can [shift](../../../../movement/shifting.md) up to 4 squares, bringing the target with you. While [grabbed](../../../../condition/grabbed.md) this way, the target takes damage equal to twice your Might score at the start of each of your turns.

### Riders on the Storm {data-scc="mcdm.heroes.v1/feature.ability.fury.level-6/riders-on-the-storm"}


*You focus your connection to the Primordial Chaos into a seething storm.*

| **Area, Magic** |                     **Maneuver** |
|-----------------|---------------------------------:|
| **📏 3 aura**   | **🎯 Each creature in the area** |

**Effect:** Until the end of the encounter or until you are dying, each enemy target takes damage of your primordial damage type equal to twice your Might score at the end of each of your turns. Additionally, you can [fly](../../../../movement/fly.md) while the aura is active. Each ally target who starts or ends their turn in the area can also [fly](../../../../movement/fly.md) until the start of their next turn or until the effect ends.

**Special:** When you use this ability outside of combat without spending ferocity, you must spend 1 uninterrupted minute summoning a [primordial storm](../primordial-storm.md) that fills the area, and you take 1d6 damage before the ability takes effect. The storm lasts for 1 hour or until a combat encounter begins.
