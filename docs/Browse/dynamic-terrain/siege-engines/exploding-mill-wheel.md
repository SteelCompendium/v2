---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: |-
        As a maneuver, a creature adjacent to an exploding mill wheel that isn't rolling can make an **Agility test**.

        Once the wheel is rolling, it can't be deactivated. However, it can be exploded early by destroying it or blocking its movement with a suitably large creature or object.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The exploding mill wheel is deactivated and can't be used.
            low: The creature accidentally activates the **Roll the Wheel** ability.
            mid: The exploding mill wheel is deactivated but the creature is slowed (EoT).
    - distance: Special
      icon: "\U0001F300"
      keywords:
        - Area
      name: Roll the Wheel
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; push 3; M < 2 burning (save ends)
            low: 5 damage; push 1; M < 0 burning (save ends)
            mid: 9 damage; push 2; M < 1 burning (save ends)
      sections:
        - label: Effect
          text: When this ability is used and at the start of every turn thereafter, the exploding mill wheel rolls, moving 2 squares in a straight line. Each creature and object of size 2 or smaller in the area defined by the wheel's movement is targeted by the following power roll. A target force moved this way is moved to either side of the wheel, as the Director determines.
      target: Each creature and object in the area
      trailing: If the wheel enters the space of any creature or object of size 3 or larger, or if it is reduced to 0 Stamina, its movement stops and it explodes. Each creature and object in a 5 burst centered on the wheel is targeted by the following power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
      usage: Main action (Adjacent creature)
    - body: |-
        **Piloted (+4 EV)** The wheel has been fitted with a control mechanism and a pilot's seat for a creature of size 1M or smaller. As a move action, the pilot can turn the wheel in any direction while it is moving. As a main action, the pilot can leap out of the pilot's seat, landing in an adjacent space while the wheel continues moving in a straight line.

        Without proper training, determining how to pilot the wheel requires a **Reason test**.

        On a natural 19 or 20, a creature can both pilot the wheel and can disarm its explosives as a maneuver.
      icon: ⭐️
      name: Upgrade
      power_roll:
        tiers:
            high: The creature can pilot the wheel.
            low: The wheel immediately explodes as if striking a size 3 or larger creature or object.
            mid: The creature fails to pilot the wheel.
flavor: A massive wooden wheel is loaded with explosives and rolled toward enemy forces or fortifications, ready to explode.
level: 3
name: Exploding Mill Wheel
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/exploding-mill-wheel
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "25"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Deactivate

---

A massive wooden wheel is loaded with explosives and rolled toward enemy forces or fortifications, ready to explode.

- **EV:** 10
- **Stamina:** 25
- **Size:** 2

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to an exploding mill wheel that isn't rolling can make an **Agility test**.
>
> - **≤11:** The creature accidentally activates the **Roll the Wheel** ability.
> - **12-16:** The exploding mill wheel is deactivated but the creature is slowed (EoT).
> - **17+:** The exploding mill wheel is deactivated and can't be used.
>
> Once the wheel is rolling, it can't be deactivated. However, it can be exploded early by destroying it or blocking its movement with a suitably large creature or object.

> 🌀 **Roll the Wheel**
>
> | **Area**       |         **Main action (Adjacent creature)** |
> |----------------|--------------------------------------------:|
> | **📏 Special** | **🎯 Each creature and object in the area** |
>
> **Effect:** When this ability is used and at the start of every turn thereafter, the exploding mill wheel rolls, moving 2 squares in a straight line. Each creature and object of size 2 or smaller in the area defined by the wheel's movement is targeted by the following power roll. A target force moved this way is moved to either side of the wheel, as the Director determines.
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage; push 1
> - **12-16:** 9 damage; push 2
> - **17+:** 12 damage; push 3
>
> If the wheel enters the space of any creature or object of size 3 or larger, or if it is reduced to 0 Stamina, its movement stops and it explodes. Each creature and object in a 5 burst centered on the wheel is targeted by the following power roll.
>
> - **≤11:** 5 damage; push 1; M < 0 burning (save ends)
> - **12-16:** 9 damage; push 2; M < 1 burning (save ends)
> - **17+:** 12 damage; push 3; M < 2 burning (save ends)
>
> A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.

> ⭐️ **Upgrade**
>
> **Piloted (+4 EV)** The wheel has been fitted with a control mechanism and a pilot's seat for a creature of size 1M or smaller. As a move action, the pilot can turn the wheel in any direction while it is moving. As a main action, the pilot can leap out of the pilot's seat, landing in an adjacent space while the wheel continues moving in a straight line.
>
> Without proper training, determining how to pilot the wheel requires a **Reason test**.
>
> - **≤11:** The wheel immediately explodes as if striking a size 3 or larger creature or object.
> - **12-16:** The creature fails to pilot the wheel.
> - **17+:** The creature can pilot the wheel.
>
> On a natural 19 or 20, a creature can both pilot the wheel and can disarm its explosives as a maneuver.
