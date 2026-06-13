---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: Self
      icon: ❗️
      keywords:
        - '-'
      name: Aftershock
      sections:
        - label: Trigger
          text: A creature deals damage to the kingfissure worm or one of their tongues.
        - label: Effect
          text: Each creature within 5 squares of the kingfissure worm takes 5 damage, and if they have A < 4 they are knocked prone. The kingfissure worm can use this ability only once per round.
      target: Self
      usage: Free triggered action
    - body: The kingfissure worm takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The kingfissure worm loses 35 Stamina and regrows one tongue, to a maximum of three tongues. The worm is then dazed until the end of their turn.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Spontaneous Regeneration
    - cost: 7 Malice
      distance: 5 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      name: Megaquake
      power_roll:
        formula: + 5
        tiers:
            high: 17 damage; M < 5 slide 5
            low: 8 damage; M < 3 slide 5
            mid: 13 damage; M < 4 slide 5
      sections:
        - label: Effect
          text: Until the end of the next round, each target takes a −3 penalty to stability, treats all terrain as difficult terrain, and takes 10 damage whenever they are knocked prone.
      target: Each enemy and object in the area
      usage: Main action
flavor: At the start of a kingfissure worm's turn or when an action's trigger occurs, you can spend Malice to activate one of the following features.
kind: malice
name: Kingfissure Worm Malice
scc: mcdm.monsters.v1/monster.kingfissure-worm/kingfissure-worm-malice
type: featureblock
---

# Aftershock

---

At the start of a kingfissure worm's turn or when an action's trigger occurs, you can spend Malice to activate one of the following features.

> ❗️ **Aftershock (3 Malice)**
>
> | **-**       | **Free triggered action** |
> |-------------|--------------------------:|
> | **📏 Self** |               **🎯 Self** |
>
> **Trigger:** A creature deals damage to the kingfissure worm or one of their tongues.
>
> **Effect:** Each creature within 5 squares of the kingfissure worm takes 5 damage, and if they have A < 4 they are knocked prone. The kingfissure worm can use this ability only once per round.

> ☠️ **Solo Action (5 Malice)**
>
> The kingfissure worm takes an additional main action on their turn. They can use this feature even if they are dazed.

> 👤 **Spontaneous Regeneration (5 Malice)**
>
> The kingfissure worm loses 35 Stamina and regrows one tongue, to a maximum of three tongues. The worm is then dazed until the end of their turn.

> ❇️ **Megaquake (7 Malice)**
>
> | **Area, Weapon** |                          **Main action** |
> |------------------|-----------------------------------------:|
> | **📏 5 burst**   | **🎯 Each enemy and object in the area** |
>
> **Power Roll + 5:**
>
> - **≤11:** 8 damage; M < 3 slide 5
> - **12-16:** 13 damage; M < 4 slide 5
> - **17+:** 17 damage; M < 5 slide 5
>
> **Effect:** Until the end of the next round, each target takes a −3 penalty to stability, treats all terrain as difficult terrain, and takes 10 damage whenever they are knocked prone.
