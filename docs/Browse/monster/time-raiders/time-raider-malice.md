---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: 5 cube within 3
      icon: "\U0001F533"
      keywords:
        - Area
        - Psionic
        - Ranged
        - Weapon
      name: Gravity Well
      sections:
        - label: Effect
          text: A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature adjacent to the well uses a maneuver to deactivate it. The area is difficult terrain for enemies. Any enemy who ends their turn in the area is pulled up to 4 squares toward the well.
      target: Special
      usage: Maneuver
    - body: Until the end of the round, each time raider gains a +3 bonus to speed, and can teleport up to their speed as a move action.
      cost: 5 Malice
      icon: ⭐️
      name: Recall Module
    - body: All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest Stamina maximum drops to 0 Stamina or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a **Reason test** against this psionic effect at the start of each round.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Psi-Cage
      power_roll:
        tiers:
            high: No effect.
            low: 10 psychic damage; slowed (EoT)
            mid: 7 psychic damage; slowed (EoT)
flavor: At the start of any time raider's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Time Raider Malice
scc: mcdm.monsters.v1/monster.time-raiders/time-raider-malice
type: featureblock
---

# Gravity Well

---

At the start of any time raider's turn, you can spend Malice to activate one of the following features.

> 🔳 **Gravity Well (3 Malice)**
>
> | **Area, Psionic, Ranged, Weapon** |   **Maneuver** |
> |-----------------------------------|---------------:|
> | **📏 5 cube within 3**            | **🎯 Special** |
>
> **Effect:** A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature adjacent to the well uses a maneuver to deactivate it. The area is difficult terrain for enemies. Any enemy who ends their turn in the area is pulled up to 4 squares toward the well.

> ⭐️ **Recall Module (5 Malice)**
>
> Until the end of the round, each time raider gains a +3 bonus to speed, and can teleport up to their speed as a move action.

> 🌀 **Psi-Cage (10 Malice)**
>
> All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest Stamina maximum drops to 0 Stamina or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a **Reason test** against this psionic effect at the start of each round.
>
> - **≤11:** 10 psychic damage; slowed (EoT)
> - **12-16:** 7 psychic damage; slowed (EoT)
> - **17+:** No effect.
