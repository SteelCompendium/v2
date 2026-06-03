---
class: beastheart
level: "3"
name: 7-Ferocity Ability
scc: mcdm.beastheart.v1/feature.trait.beastheart.level-3/7-ferocity-ability
type: trait
---

# 7-Ferocity Ability

---

Choose one heroic ability from the following options, each of which costs 7 ferocity to use.

## Death and Violence

*You leap from your foe's corpse.*

| **Beastheart, Magic, Ranged** | **Triggered Action** |
|-------------------------------|---------------------:|
| **📏 Ranged 10**              | **🎯 One creature**  |

**Trigger:** Your companion uses an ability that reduces the target to 0 Stamina.

**Effect:** The target dies. You [teleport](../../../../movement/teleport.md) to the target's space, [shift](../../../../movement/shifting.md) up to a number of squares equal to your Might score, and can then make a melee free strike. You then make the following power roll, targeting each enemy within 5 squares of the target:

**Power Roll + Might:**

- **≤11:** P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
- **12-16:** 4 psychic damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
- **17+:** 8 psychic damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)

## Head to Head

*Your bloody-forehead smash drives your companion into a frenzy.*

| **Beastheart, Melee, Strike** | **Main action** |
|-------------------------------|----------------:|
| **📏 Melee 1**                | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 13 + M damage; P < WEAK [dazed](../../../../condition/dazed.md) (save ends)
- **12-16:** 19 + M damage; P < AVERAGE [dazed](../../../../condition/dazed.md) (save ends)
- **17+:** 25 + M damage; P < STRONG [dazed](../../../../condition/dazed.md) (save ends)

**Effect:** You are [bleeding](../../../../condition/bleeding.md) (save ends). Until the end of your next turn, your companion gains an edge on power rolls.

## Jaws of Death

*Spectral teeth clamp on a foe, chaining them to you and draining their life essence.*

| **Beastheart, Magic, Melee, Ranged** | **Main action** |
|--------------------------------------|----------------:|
| **📏 Melee 1 or ranged 5**           | **🎯 One creature** |

**Power Roll + Intuition:**

- **≤11:** 7 + I damage; P < WEAK [weakened](../../../../condition/weakened.md) (save ends)
- **12-16:** 10 + I damage; P < AVERAGE [weakened](../../../../condition/weakened.md) (save ends)
- **17+:** 14 + I damage; P < STRONG [weakened](../../../../condition/weakened.md) (save ends)

**Effect:** Whenever a target more than 3 squares away from you fails the saving throw while [weakened](../../../../condition/weakened.md) this way, you can pull the target up to a number of squares equal to your Intuition score as a free triggered action.

## Shieldbreaker

*You smash through their guard and shatter their armor, leaving them wide open.*

| **Beastheart, Melee, Ranged, Strike, Weapon** | **Main action** |
|-----------------------------------------------|----------------:|
| **📏 Melee 1 or ranged 5**                    | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 9 + M damage
- **12-16:** 14 + M damage
- **17+:** 19 + M damage

**Effect:** The next creature who damages the target before the start of your next turn gains 3 surges, which they can use on the triggering damage.
