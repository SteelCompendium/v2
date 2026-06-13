---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The column of blades must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object moves adjacent to the column of blades.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spinning Blades** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Spinning Blades
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; M < 3 bleeding (save ends)
            low: 4 damage
            mid: 6 damage; M < 2 bleeding (save ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - body: |-
        **Stone Column (+1 EV)** The column is made of stone and has 8 Stamina.

        **Metal Column (+1 EV)** The column is made of metal and has 11 Stamina.

        **Concealed (+1 EV)** The blades are concealed inside the column, which remains motionless until triggered.

        **Spiked Flails (+4 EV)** Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The **Whirling Flails** ability replaces **Spinning Blades**.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 2
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Whirling Flails
      power_roll:
        tiers:
            high: 11 damage; M < 3 dazed (save ends)
            low: 5 damage
            mid: 8 damage; M < 2 dazed (save ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - body: Allies who shift don't trigger the column. A creature observing an ally shift this way can make an **Intuition test** to shift in imitation of their movements.
      icon: ⭐️
      name: Allied Awareness
      power_roll:
        formula: + 2
        tiers:
            high: The creature doesn't trigger the column.
            low: The creature triggers the column and the column's ability gains an edge.
            mid: The creature triggers the column.
flavor: A spinning wooden column is affixed with sharp blades to slash the unwary.
level: 3
name: Column of Blades
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/column-of-blades
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "5"
    - name: Size
      value: 1L
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A spinning wooden column is affixed with sharp blades to slash the unwary.

- **EV:** 3
- **Stamina:** 5
- **Size:** 1L

> 🌀 **Deactivate**
>
> The column of blades must be completely destroyed.

> ❕ **Activate**
>
> A creature or object moves adjacent to the column of blades.
>
> **Effect:** The **Spinning Blades** ability.

> ❗️ **Spinning Blades**
>
> | **Melee, Strike, Weapon** |                **Free triggered action** |
> |---------------------------|-----------------------------------------:|
> | **📏 Melee 1**            | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object moves within distance of the column.
>
> **Power Roll + 2:**
>
> - **≤11:** 4 damage
> - **12-16:** 6 damage; M < 2 bleeding (save ends)
> - **17+:** 9 damage; M < 3 bleeding (save ends)

> ⭐️ **Upgrades**
>
> **Stone Column (+1 EV)** The column is made of stone and has 8 Stamina.
>
> **Metal Column (+1 EV)** The column is made of metal and has 11 Stamina.
>
> **Concealed (+1 EV)** The blades are concealed inside the column, which remains motionless until triggered.
>
> **Spiked Flails (+4 EV)** Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The **Whirling Flails** ability replaces **Spinning Blades**.

> ❗️ **Whirling Flails**
>
> | **Melee, Strike, Weapon** |                **Free triggered action** |
> |---------------------------|-----------------------------------------:|
> | **📏 Melee 2**            | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object moves within distance of the column.
>
> - **≤11:** 5 damage
> - **12-16:** 8 damage; M < 2 dazed (save ends)
> - **17+:** 11 damage; M < 3 dazed (save ends)

> ⭐️ **Allied Awareness**
>
> Allies who shift don't trigger the column. A creature observing an ally shift this way can make an **Intuition test** to shift in imitation of their movements.
>
> **Power Roll + 2:**
>
> - **≤11:** The creature triggers the column and the column's ability gains an edge.
> - **12-16:** The creature triggers the column.
> - **17+:** The creature doesn't trigger the column.
