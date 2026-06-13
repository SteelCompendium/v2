---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 5 Malice
      distance: 10 x 1 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Hag Wyrd
      power_roll:
        formula: + 3
        tiers:
            high: 11 fire damage; R < 3 frightened (save ends)
            low: 5 fire damage; R < 1 frightened (save ends)
            mid: 8 fire damage; R < 2 frightened (save ends)
      sections:
        - label: Effect
          text: After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and dazed, or cold damage and slowed.
      target: Each enemy in the area
      usage: Main action
    - body: The hag takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The hag's hut springs to life. It enters the encounter map within 10 squares of the hag if it isn't already there and takes its turn. The hut is size 4, has 75 Stamina and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can't be used if the hut is reduced to 0 Stamina. In addition to its move action, the house can take only the following main action.
      cost: 10 Malice
      icon: "\U0001F300"
      name: House Call
    - cost: Signature
      distance: 2 cube within 2
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Kick
      power_roll:
        formula: + 3
        tiers:
            high: 13 damage; push 5; M < 3 prone
            low: 6 damage; push 3; M < 1 prone
            mid: 10 damage; push 4; M < 2 prone
      target: Each enemy in the area
      usage: Main action
flavor: At the start of a hag's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Hag Malice
scc: mcdm.monsters.v1/monster.hag/hag-malice
type: featureblock
---

# Hag Wyrd

---

At the start of a hag's turn, you can spend Malice to activate one of the following features.

❇️ **Casting Curses and Bodies (3 Malice)**

The hag utters terrible words that push each enemy within 2 squares of them up to 3 squares.

> 🔳 **Hag Wyrd (5 Malice)**
>
> | **Area, Magic**             |               **Main action** |
> |-----------------------------|------------------------------:|
> | **📏 10 x 1 line within 1** | **🎯 Each enemy in the area** |
>
> **Power Roll + 3:**
>
> - **≤11:** 5 fire damage; R < 1 frightened (save ends)
> - **12-16:** 8 fire damage; R < 2 frightened (save ends)
> - **17+:** 11 fire damage; R < 3 frightened (save ends)
>
> **Effect:** After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and dazed, or cold damage and slowed.

> ☠️ **Solo Action (5 Malice)**
>
> The hag takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🌀 **House Call (10 Malice)**
>
> The hag's hut springs to life. It enters the encounter map within 10 squares of the hag if it isn't already there and takes its turn. The hut is size 4, has 75 Stamina and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can't be used if the hut is reduced to 0 Stamina. In addition to its move action, the house can take only the following main action.

> 🔳 **Kick (Signature Ability)**
>
> | **Area, Ranged, Weapon** |               **Main action** |
> |--------------------------|------------------------------:|
> | **📏 2 cube within 2**   | **🎯 Each enemy in the area** |
>
> **Power Roll + 3:**
>
> - **≤11:** 6 damage; push 3; M < 1 prone
> - **12-16:** 10 damage; push 4; M < 2 prone
> - **17+:** 13 damage; push 5; M < 3 prone
