---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each lightbender acting this turn can teleport up to their speed as a move action and attempt to hide as a free maneuver, all until the start of their next turn.
      cost: 3 Malice
      icon: ⭐️
      name: Silent Prowl
    - body: Each lightbender acting this turn can create a duplicate lightbender in an unoccupied space adjacent to them. The duplicate is indistinguishable from the lightbender except by supernatural means, has 1 Stamina, and has the lightbender's speed. A duplicate acts on the lightbender's turn but can take only move actions. Once per round before or after using an ability, a lightbender can trade places with any lightbender duplicate.
      cost: 5 Malice
      icon: ⭐️
      name: Duplicate
    - body: Each lightbender in the encounter shines radiantly, distorting the senses of any enemy within 5 squares of them. Each affected enemy makes a **Reason test**.
      cost: 7 Malice
      icon: ❇️
      name: Everything the Light Touches
      power_roll:
        tiers:
            high: No effect.
            low: The target doesn't have line of effect to any lightbender (save ends).
            mid: The target doesn't have line of effect to any lightbender (EoT).
flavor: At the start of any lightbender's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lightbender Malice
scc: mcdm.monsters.v1/monster.lightbenders/lightbender-malice
type: featureblock
---

# Silent Prowl

---

At the start of any lightbender's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Silent Prowl (3 Malice)**
>
> Each lightbender acting this turn can teleport up to their speed as a move action and attempt to hide as a free maneuver, all until the start of their next turn.

> ⭐️ **Duplicate (5 Malice)**
>
> Each lightbender acting this turn can create a duplicate lightbender in an unoccupied space adjacent to them. The duplicate is indistinguishable from the lightbender except by supernatural means, has 1 Stamina, and has the lightbender's speed. A duplicate acts on the lightbender's turn but can take only move actions. Once per round before or after using an ability, a lightbender can trade places with any lightbender duplicate.

> ❇️ **Everything the Light Touches (7 Malice)**
>
> Each lightbender in the encounter shines radiantly, distorting the senses of any enemy within 5 squares of them. Each affected enemy makes a **Reason test**.
>
> - **≤11:** The target doesn't have line of effect to any lightbender (save ends).
> - **12-16:** The target doesn't have line of effect to any lightbender (EoT).
> - **17+:** No effect.
