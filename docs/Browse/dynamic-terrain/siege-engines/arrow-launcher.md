---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to an arrow launcher can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The arrow launcher is deactivated and can't be used.
            low: The creature accidentally activates the **Arrow Storm** ability.
            mid: The arrow launcher is deactivated but the creature is slowed (EoT).
    - distance: 5 cube within 20
      icon: "\U0001F533"
      keywords:
        - '- Area'
        - Ranged
        - Weapon
      name: Arrow Storm
      power_roll:
        formula: + 2
        tiers:
            high: 11 damage
            low: 5 damage
            mid: 8 damage
      sections:
        - label: Effect
          text: This ability can't be used again until the arrow launcher is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The arrow launcher is reloaded, allowing **Arrow Storm** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Arrow Storm** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The arrow launcher and the creature using this action move together up to 3 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Flaming Arrows (+1 EV) Arrow Storm** deals fire damage, and can ignite flammable objects in its area.

        **Screamers (+3 EV)** The arrows make a high-pitched screaming noise as they are fired and descend onto their targets. The **Screamers** ability replaces **Arrow Storm**.
      icon: ⭐️
      name: Upgrades
    - distance: 5 cube within 20
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Screamers
      power_roll:
        formula: + 2
        tiers:
            high: 11 damage; R < 2 frightened (save ends)
            low: 5 damage; R < 0 dazed (save ends)
            mid: 8 damage; R < 1 dazed (save ends)
      sections:
        - label: Effect
          text: This ability can't be used again until the arrow launcher is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
flavor: A small wooden cart uses alchemical rockets to launch up to a hundred arrows at a time across a wide area.
level: 2
name: Arrow Launcher
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/arrow-launcher
stats:
    - name: EV
      value: "8"
    - name: Stamina
      value: "30"
    - name: Size
      value: 1L
terrain_type: Siege Engine
type: dynamic-terrain
---

# Deactivate

---

A small wooden cart uses alchemical rockets to launch up to a hundred arrows at a time across a wide area.

- **EV:** 8
- **Stamina:** 30
- **Size:** 1L

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to an arrow launcher can make an **Agility test**.
>
> - **≤11:** The creature accidentally activates the **Arrow Storm** ability.
> - **12-16:** The arrow launcher is deactivated but the creature is slowed (EoT).
> - **17+:** The arrow launcher is deactivated and can't be used.

> 🔳 **Arrow Storm**
>
> | **- Area, Ranged, Weapon** |         **Main action (Adjacent creature)** |
> |----------------------------|--------------------------------------------:|
> | **📏 5 cube within 20**    | **🎯 Each creature and object in the area** |
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage
> - **12-16:** 8 damage
> - **17+:** 11 damage
>
> **Effect:** This ability can't be used again until the arrow launcher is reloaded.

> ⭐️ **Reload**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The arrow launcher is reloaded, allowing **Arrow Storm** to be used again. This action can be used only once per round.

> ⭐️ **Spot**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The next use of **Arrow Storm** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.

> ⭐️ **Move**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The arrow launcher and the creature using this action move together up to 3 squares.

> ⭐️ **Upgrades**
>
> **Flaming Arrows (+1 EV) Arrow Storm** deals fire damage, and can ignite flammable objects in its area.
>
> **Screamers (+3 EV)** The arrows make a high-pitched screaming noise as they are fired and descend onto their targets. The **Screamers** ability replaces **Arrow Storm**.

> 🔳 **Screamers**
>
> | **Area, Ranged, Weapon** |         **Main action (Adjacent creature)** |
> |--------------------------|--------------------------------------------:|
> | **📏 5 cube within 20**  | **🎯 Each creature and object in the area** |
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage; R < 0 dazed (save ends)
> - **12-16:** 8 damage; R < 1 dazed (save ends)
> - **17+:** 11 damage; R < 2 frightened (save ends)
>
> **Effect:** This ability can't be used again until the arrow launcher is reloaded.
