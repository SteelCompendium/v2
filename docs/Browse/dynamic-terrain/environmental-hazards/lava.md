---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of lava must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Liquid Hot Magma** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Liquid Hot Magma
      power_roll:
        formula: + 2
        tiers:
            high: 12 fire damage; M < 3 the target is burning (save ends)
            low: 5 fire damage; M < 1 the target is burning (save ends)
            mid: 9 fire damage; M < 2 the target is burning (save ends)
      sections:
        - label: Trigger
          text: A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
        - label: Effect
          text: If the target is adjacent to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava adjacent to an existing square of lava.'
      icon: ⭐️
      name: Upgrade
flavor: A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.
level: 3
name: Lava
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/lava
stats:
    - name: EV
      value: 4 per 10 x 10 patch
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of difficult terrain
    - name: Immunity
      value: 20 to all damage except cold damage
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.

- **EV:** 4 per 10 x 10 patch
- **Stamina:** 12 per square
- **Size:** One or more squares of difficult terrain
- **Immunity:** 20 to all damage except cold damage

> 🌀 **Deactivate**
>
> Each square of lava must be individually destroyed.

> ❕ **Activate**
>
> A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
>
> **Effect:** The **Liquid Hot Magma** ability.

> ❗️ **Liquid Hot Magma**
>
> | **Melee, Strike** |                **Free triggered action** |
> |-------------------|-----------------------------------------:|
> | **📏 Melee 1**    | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
>
> **Power Roll + 2:**
>
> - **≤11:** 5 fire damage; M < 1 the target is burning (save ends)
> - **12-16:** 9 fire damage; M < 2 the target is burning (save ends)
> - **17+:** 12 fire damage; M < 3 the target is burning (save ends)
>
> **Effect:** If the target is adjacent to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.

> ⭐️ **Upgrade**
>
> **Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava adjacent to an existing square of lava.
