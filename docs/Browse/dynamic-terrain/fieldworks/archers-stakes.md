---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of stakes must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters an area of stakes from the front.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature takes 2 damage per square of stakes they enter. If they are force moved into an area of stakes, they take an additional 3 damage.
    - body: |-
        **Poison (+2 EV)** The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns (save ends).

        **Sticky (+3 EV)** A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the **Sticky Stakes** ability in addition to suffering the stakes' other effects.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Sticky Stakes
      power_roll:
        formula: + 2
        tiers:
            high: A < 2 restrained (save ends)
            low: No effect.
            mid: A < 1 slowed (save ends)
      sections:
        - label: Trigger
          text: A creature or object enters an area of sticky stakes.
      target: The triggering creature or object
      usage: Free triggered action
    - body: Allies of this object ignore the difficult terrain created by the stakes, take no damage from moving through the stakes unless they are force moved, and have cover while in an area of archer's stakes.
      icon: ⭐️
      name: Allied Awareness
flavor: A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.
level: 1
name: Archer's Stakes
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/archers-stakes
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of difficult terrain
    - name: Typical Space
      value: 4 x 1-square area
    - name: Direction
      value: One side of the stakes is defined as the front.
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.

- **EV:** 2
- **Stamina:** 3 per square
- **Size:** One or more squares of difficult terrain
- **Typical Space:** 4 x 1-square area
- **Direction:** One side of the stakes is defined as the front.

> 🌀 **Deactivate**
>
> Each square of stakes must be individually destroyed.

> ❕ **Activate**
>
> A creature enters an area of stakes from the front.
>
> **Effect:** The triggering creature takes 2 damage per square of stakes they enter. If they are force moved into an area of stakes, they take an additional 3 damage.

> ⭐️ **Upgrades**
>
> **Poison (+2 EV)** The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns (save ends).
>
> **Sticky (+3 EV)** A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the **Sticky Stakes** ability in addition to suffering the stakes' other effects.

> ❗️ **Sticky Stakes**
>
> | **Melee, Strike, Weapon** |                **Free triggered action** |
> |---------------------------|-----------------------------------------:|
> | **📏 Melee 0**            | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object enters an area of sticky stakes.
>
> **Power Roll + 2:**
>
> - **≤11:** No effect.
> - **12-16:** A < 1 slowed (save ends)
> - **17+:** A < 2 restrained (save ends)

> ⭐️ **Allied Awareness**
>
> Allies of this object ignore the difficult terrain created by the stakes, take no damage from moving through the stakes unless they are force moved, and have cover while in an area of archer's stakes.
