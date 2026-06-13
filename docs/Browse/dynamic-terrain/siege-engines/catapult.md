---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a catapult can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The catapult is deactivated and can't be used.
            low: The creature accidentally activates the **Arcing Shot** ability.
            mid: The catapult is deactivated but the creature is slowed (EoT).
    - distance: 3 cube within 20
      icon: "\U0001F533"
      keywords:
        - '- Area'
        - Ranged
        - Weapon
      name: Arcing Shot
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; A < 1 push 2
            low: 5 damage
            mid: 9 damage; A < 0 push 1
      sections:
        - label: Effect
          text: Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can't be used again until the catapult is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The catapult is reloaded, allowing **Arcing Shot** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Arcing Shot** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The catapult and the creature using this action move together up to 2 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Air Assault (+2 EV)** The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.

        **Flammable (+2 EV) Arcing Shot** deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.
      icon: ⭐️
      name: Upgrades
flavor: This massive counterweighted engine hurls a heavy projectile for a devastating assault.
level: 3
name: Catapult
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/catapult
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "50"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Deactivate

---

This massive counterweighted engine hurls a heavy projectile for a devastating assault.

- **EV:** 10
- **Stamina:** 50
- **Size:** 2

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a catapult can make an **Agility test**.
>
> - **≤11:** The creature accidentally activates the **Arcing Shot** ability.
> - **12-16:** The catapult is deactivated but the creature is slowed (EoT).
> - **17+:** The catapult is deactivated and can't be used.

> 🔳 **Arcing Shot**
>
> | **- Area, Ranged, Weapon** |         **Main action (Adjacent creature)** |
> |----------------------------|--------------------------------------------:|
> | **📏 3 cube within 20**    | **🎯 Each creature and object in the area** |
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage
> - **12-16:** 9 damage; A < 0 push 1
> - **17+:** 12 damage; A < 1 push 2
>
> **Effect:** Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can't be used again until the catapult is reloaded.

> ⭐️ **Reload**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|-------------------------------------:|
> | **📏 -** |                             **🎯 -** |
>
> **Effect:** The catapult is reloaded, allowing **Arcing Shot** to be used again. This action can be used only once per round.

> ⭐️ **Spot**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The next use of **Arcing Shot** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.

> ⭐️ **Move**
>
> | **-**    | **Main action (Adjacent creature)** |
> |----------|------------------------------------:|
> | **📏 -** |                            **🎯 -** |
>
> **Effect:** The catapult and the creature using this action move together up to 2 squares.

> ⭐️ **Upgrades**
>
> **Air Assault (+2 EV)** The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.
>
> **Flammable (+2 EV) Arcing Shot** deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.
