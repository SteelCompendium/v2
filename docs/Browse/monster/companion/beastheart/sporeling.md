---
printing: "1.0"
printing_book: "The Beastheart"
companion: sporeling
level: "1"
name: Sporeling
scc: mcdm.beastheart.v1/monster.companion.beastheart.statblock/sporeling
type: feature-group
---

# Sporeling

---

|     Beast, Companion     |         -         |                        Level 1                        |          -          |            -             |
|:------------------------:|:-----------------:|:-----------------------------------------------------:|:-------------------:|:------------------------:|
|      **1S**<br>Size      |  **5**<br>Speed   |                **= yours**<br>Stamina                 | **0**<br>Stability  | **1 + M**<br>Free Strike |
| **Poison 3**<br>Immunity | **—**<br>Movement | **[Track](../../../skill/intrigue/track.md)**<br>Skills |                     |                          |
|     **+2**<br>Might      | **+2**<br>Agility |                   **−1**<br>Reason                    | **+2**<br>Intuition |    **+1**<br>Presence    |

## Spore Puff {data-scc="mcdm.beastheart.v1/feature.ability.companion.beastheart.sporeling.level-1/spore-puff"}

*The sporeling breathes a cloud of disorienting fumes.*

| **Companion, Melee**         |     **Maneuver** |
|------------------------------|-----------------:|
| **📏 Melee 1**               | **🎯 One enemy** |

**Effect:** The target takes poison damage equal to 3 + the sporeling's Might score, and the sporeling is invisible to the target until the end of the sporeling's next turn or they deal damage to the target.

**Spend 1 Ferocity:** If the target has M < STRONG, they are [dazed](../../../condition/dazed.md) until the end of their next turn.

## Skulker {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.sporeling.level-1/skulker"}

The sporeling can end their movement in an ally's space. While occupying an ally's space, the sporeling has cover.

## Sporeling Advancement Features {data-scc="mcdm.beastheart.v1/monster.companion.beastheart.advancement-features/sporeling"}

### Slowing Spores {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.sporeling.level-3/slowing-spores"}

Whenever the sporeling makes a strike against a creature while rampaging, the sporeling can cause the target to be [slowed](../../../condition/slowed.md) until the end of the target's next turn.

### Plant Walk {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.sporeling.level-6/plant-walk"}

Once on each of your turns while the sporeling is rampaging, you can [teleport](../../../movement/teleport.md) to a space within 15 squares as a free maneuver, provided the space or an adjacent space contains the sporeling or plants or fungus of size 1S or larger. You then gain an edge on the next strike you make before the end of your turn.

### Trailing Mycelia {data-scc="mcdm.beastheart.v1/feature.companion.beastheart.sporeling.level-10/trailing-mycelia"}

While the sporeling is rampaging, you and the sporeling sprout rootlike, gripping mycelia along your limbs, and whenever you or the sporeling makes a strike against a creature who has M < STRONG, the creature is [grabbed](../../../condition/grabbed.md) by the attacker. Additionally, you and the sporeling can't be force moved or knocked [prone](../../../condition/prone.md) until the sporeling's rampage ends.
