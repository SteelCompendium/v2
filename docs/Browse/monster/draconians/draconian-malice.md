---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: A draconian acting this turn flaps their wings and creates a mighty gale. Each creature adjacent to the draconian is pushed up to 4 squares, and if they have M < 2, they are knocked prone.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guarding Gale
    - cost: 5 Malice
      distance: 4 x 2 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Breath Weapon
      power_roll:
        formula: + 3
        tiers:
            high: 13 damage
            low: 6 damage
            mid: 10 damage
      sections:
        - label: Special
          text: The damage dealt by this ability matches a damage type the draconian has immunity to.
      target: Each enemy in the area
      usage: Main action
    - cost: 7 Malice
      distance: 2 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      name: Scaleshatter Burst
      power_roll:
        formula: + 3
        tiers:
            high: 16 damage
            low: 7 damage
            mid: 13 damage
      sections:
        - label: Effect
          text: The draconian's scales shatter from battle damage. The draconian has damage weakness 5 but can take two turns per round until the end of the encounter.
      target: Each enemy in the area
      usage: Free maneuver
flavor: At the start of any draconian's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Draconian Malice
scc: mcdm.monsters.v1/monster.draconians/draconian-malice
type: featureblock
---

# Guarding Gale

---

At the start of any draconian's turn, you can spend Malice to activate one of the following features.

> 👤 **Guarding Gale (3 Malice)**
>
> A draconian acting this turn flaps their wings and creates a mighty gale. Each creature adjacent to the draconian is pushed up to 4 squares, and if they have M < 2, they are knocked prone.

> 🔳 **Breath Weapon (5 Malice)**
>
> | **Area, Magic**            |               **Main action** |
> |----------------------------|------------------------------:|
> | **📏 4 x 2 line within 1** | **🎯 Each enemy in the area** |
>
> **Special:** The damage dealt by this ability matches a damage type the draconian has immunity to.
>
> **Power Roll + 3:**
>
> - **≤11:** 6 damage
> - **12-16:** 10 damage
> - **17+:** 13 damage

> ❇️ **Scaleshatter Burst (7 Malice)**
>
> | **Area, Magic** |             **Free maneuver** |
> |-----------------|------------------------------:|
> | **📏 2 burst**  | **🎯 Each enemy in the area** |
>
> **Power Roll + 3:**
>
> - **≤11:** 7 damage
> - **12-16:** 13 damage
> - **17+:** 16 damage
>
> **Effect:** The draconian's scales shatter from battle damage. The draconian has damage weakness 5 but can take two turns per round until the end of the encounter.
