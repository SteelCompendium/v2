---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a field ballista can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The field ballista is deactivated and can't be used.
            low: The creature accidentally activates the **Release Bolt** ability.
            mid: The field ballista is deactivated but the creature is slowed (EoT).
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Release Bolt
      power_roll:
        formula: + 2
        tiers:
            high: 11 damage; M < 2 push 2
            low: 5 damage
            mid: 8 damage; M < 1 push 1
      sections:
        - label: Effect
          text: This ability can't be used again until the field ballista is reloaded.
      target: One creature or object
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The field ballista is reloaded, allowing **Release Bolt** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The field ballista and the creature using this action move together up to 3 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Penetrating Bolt (+2 EV)** The field ballista targets the nearest two additional creatures or objects in a straight line beyond the initial target.

        **Chain Bolt (+2 EV)** The field ballista's bolts are set with heavy chains that wrap around targets. The **Chain Bolt** ability replaces **Release Bolt**, and the field ballista gains the **Crank the Chain** ability.
      icon: ⭐️
      name: Upgrades
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - '- - Ranged'
        - Strike
        - Weapon
      name: Chain Bolt
      power_roll:
        formula: + 2
        tiers:
            high: 10 damage; M < 2 slowed (save ends)
            low: 4 damage
            mid: 7 damage; M < 1 slowed (save ends)
      sections:
        - label: Effect
          text: This ability can't be used again until the field ballista is reloaded.
      target: One creature or object
      usage: Main action (Adjacent creature)
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Crank the Chain
      power_roll:
        formula: + 2
        tiers:
            high: 3 Pull 5
            low: Pull 1
            mid: Pull
      sections:
        - label: Special
          text: The target must be slowed by the field ballista.
        - label: Effect
          text: This forced movement triggers opportunity attacks.
      target: One creature
      usage: Main action (Adjacent creature)
flavor: A massive crossbow fires thick metal bolts with devastating effect.
level: 2
name: Field Ballista
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/field-ballista
stats:
    - name: EV
      value: "8"
    - name: Stamina
      value: "40"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Deactivate

---

A massive crossbow fires thick metal bolts with devastating effect.

- **EV:** 8
- **Stamina:** 40
- **Size:** 2

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a field ballista can make an **Agility test**.
>
> - **≤11:** The creature accidentally activates the **Release Bolt** ability.
> - **12-16:** The field ballista is deactivated but the creature is slowed (EoT).
> - **17+:** The field ballista is deactivated and can't be used.

> 🏹 **Release Bolt**
>
> | **Ranged, Strike, Weapon** | **Main action (Adjacent creature)** |
> |----------------------------|------------------------------------:|
> | **📏 Ranged 20**           |       **🎯 One creature or object** |
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage
> - **12-16:** 8 damage; M < 1 push 1
> - **17+:** 11 damage; M < 2 push 2
>
> **Effect:** This ability can't be used again until the field ballista is reloaded.

> ⭐️ **Reload**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The field ballista is reloaded, allowing **Release Bolt** to be used again. This action can be used only once per round.

> ⭐️ **Spot**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |

**Effect:** The next use of **Release Bolt** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.

> ⭐️ **Move**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The field ballista and the creature using this action move together up to 3 squares.

> ⭐️ **Upgrades**
>
> **Penetrating Bolt (+2 EV)** The field ballista targets the nearest two additional creatures or objects in a straight line beyond the initial target.
>
> **Chain Bolt (+2 EV)** The field ballista's bolts are set with heavy chains that wrap around targets. The **Chain Bolt** ability replaces **Release Bolt**, and the field ballista gains the **Crank the Chain** ability.
>
> 🏹 **Chain Bolt**
>
> | **- - Ranged, Strike, Weapon** | **Main action (Adjacent creature)** |
> |--------------------------------|------------------------------------:|
> | **📏 Ranged 20**               |       **🎯 One creature or object** |
>
> **Power Roll + 2:**
>
> - **≤11:** 4 damage
> - **12-16:** 7 damage; M < 1 slowed (save ends)
> - **17+:** 10 damage; M < 2 slowed (save ends)
>
> **Effect:** This ability can't be used again until the field ballista is reloaded.
>
> 🏹 **Crank the Chain**
>
> | **Ranged, Strike, Weapon** | **Main action (Adjacent creature)** |
> |----------------------------|------------------------------------:|
> | **📏 Ranged 20**           |                 **🎯 One creature** |
>
> **Special:** The target must be slowed by the field ballista.
>
> **Power Roll + 2:**
>
> - **≤11:** Pull 1
> - **12-16:** Pull
> - **17+:** 3 Pull 5
>
> **Effect:** This forced movement triggers opportunity attacks.
