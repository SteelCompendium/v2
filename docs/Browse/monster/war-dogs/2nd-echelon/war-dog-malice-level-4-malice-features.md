---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The war dog activates a Malice feature available to war dogs of level 3 or lower.
      cost: 3-7 Malice
      icon: ⭐️
      name: Prior Malice Features
    - cost: 5 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Loyalty Unto Death
      power_roll:
        tiers:
            high: Push 2
            low: Push 4; the enemy is frightened of the nearest non-minion war dog (save ends)
            mid: Push 2; the enemy is frightened of the nearest non-minion war dog (EoT)
      sections:
        - label: Effect
          text: Each target who has a loyalty collar shifts up to their speed, then is reduced to 0 Stamina. After each target's Loyalty Collar trait is resolved, each enemy adjacent to either target makes a Presence test.
      target: Two war dogs
      usage: Maneuver
flavor: At the start of any level 4 or higher war dog's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 4
name: War Dog Malice (Level 4+ Malice Features)
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon/war-dog-malice-level-4-malice-features
type: featureblock
---

# Prior Malice Features

---

At the start of any level 4 or higher war dog's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Prior Malice Features (3-7 Malice)**
>
> The war dog activates a Malice feature available to war dogs of level 3 or lower.

> 🏹 **Loyalty Unto Death (5 Malice)**
>
> | **Magic, Ranged** |        **Maneuver** |
> |-------------------|--------------------:|
> | **📏 Ranged 10**  | **🎯 Two war dogs** |
>
> **Effect:** Each target who has a loyalty collar shifts up to their speed, then is reduced to 0 Stamina. After each target's Loyalty Collar trait is resolved, each enemy adjacent to either target makes a Presence test.
>
> - **≤11:** Push 4; the enemy is frightened of the nearest non-minion war dog (save ends)
> - **12-16:** Push 2; the enemy is frightened of the nearest non-minion war dog (EoT)
> - **17+:** Push 2
