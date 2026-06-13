---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a boiling oil cauldron can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The boiling oil cauldron is deactivated and can't be used.
            low: The creature accidentally activates the **Boiling Oil** ability.
            mid: The boiling oil cauldron is deactivated but the creature is slowed (EoT).
    - distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Weapon
      name: Boiling Oil
      power_roll:
        formula: + 2
        tiers:
            high: 12 fire damage; M < 3 burning (save ends)
            low: 5 fire damage; M < 1 burning (save ends)
            mid: 9 fire damage; M < 2 burning (save ends)
      sections:
        - label: Effect
          text: If the boiling oil is poured down on targets from above, it has high ground and gains an edge on the power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can't be used again until the boiling oil cauldron is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The boiling oil cauldron is reloaded, allowing **Boiling Oil** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
flavor: A large cauldron of boiling oil stands ready to be poured onto enemies.
level: 3
name: Boiling Oil Cauldron
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/boiling-oil-cauldron
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "50"
    - name: Size
      value: 1L
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A large cauldron of boiling oil stands ready to be poured onto enemies.

- **EV:** 10
- **Stamina:** 50
- **Size:** 1L

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a boiling oil cauldron can make an **Agility test**.
>
> - **≤11:** The creature accidentally activates the **Boiling Oil** ability.
> - **12-16:** The boiling oil cauldron is deactivated but the creature is slowed (EoT).
> - **17+:** The boiling oil cauldron is deactivated and can't be used.

> 🔳 **Boiling Oil**
>
> | **Area, Weapon**       |         **Main action (Adjacent creature)** |
> |------------------------|--------------------------------------------:|
> | **📏 3 cube within 1** | **🎯 Each creature and object in the area** |
>
> **Power Roll + 2:**
>
> - **≤11:** 5 fire damage; M < 1 burning (save ends)
> - **12-16:** 9 fire damage; M < 2 burning (save ends)
> - **17+:** 12 fire damage; M < 3 burning (save ends)
>
> **Effect:** If the boiling oil is poured down on targets from above, it has high ground and gains an edge on the power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can't be used again until the boiling oil cauldron is reloaded.

> ⭐️ **Reload**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The boiling oil cauldron is reloaded, allowing **Boiling Oil** to be used again. This action can be used only once per round.
