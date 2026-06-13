---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a portcullis can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The portcullis is deactivated and doesn't trigger.
            low: The creature triggers the portcullis and is affected as if in its area.
            mid: The portcullis is deactivated but the creature is slowed (EoT).
    - body: A pressure plate, switch, or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Heavy Gate** ability.
    - distance: Special
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Heavy Gate
      power_roll:
        formula: + 2
        tiers:
            high: 10 damage; A < 3 restrained (save ends)
            low: 3 damage; slide 1, ignoring stability
            mid: 7 damage; A < 2 restrained (save ends)
      sections:
        - label: Trigger
          text: A pressure plate, switch, or other linked trigger is activated.
        - label: Special
          text: The area of this ability is the area directly beneath the portcullis when it falls.
        - label: Effect
          text: The portcullis blocks movement from one side of it to the other. A target slid by the portcullis ends up on one side of it or the other (choose randomly). The portcullis must be manually reset.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: The portcullis is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A portcullis is hidden in the ceiling of a passage or choke point, waiting to drop when activated.
level: 3
name: Portcullis
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/portcullis
stats:
    - name: EV
      value: "4"
    - name: Stamina
      value: 9 per square
    - name: Size
      value: The area of the corridor to be blocked
    - name: Typical Space
      value: 2 x 1-square area, up to a 4 x 2-square area
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

A portcullis is hidden in the ceiling of a passage or choke point, waiting to drop when activated.

- **EV:** 4
- **Stamina:** 9 per square
- **Size:** The area of the corridor to be blocked
- **Typical Space:** 2 x 1-square area, up to a 4 x 2-square area

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a portcullis can make an **Agility test**.
>
> - **≤11:** The creature triggers the portcullis and is affected as if in its area.
> - **12-16:** The portcullis is deactivated but the creature is slowed (EoT).
> - **17+:** The portcullis is deactivated and doesn't trigger.

> ❕ **Activate**
>
> A pressure plate, switch, or other linked trigger is activated.
>
> **Effect:** The **Heavy Gate** ability.

> ❗️ **Heavy Gate**
>
> | **Area, Weapon** |                   **Free triggered action** |
> |------------------|--------------------------------------------:|
> | **📏 Special**   | **🎯 Each creature and object in the area** |
>
> **Trigger:** A pressure plate, switch, or other linked trigger is activated.
>
> **Special:** The area of this ability is the area directly beneath the portcullis when it falls.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 damage; slide 1, ignoring stability
> - **12-16:** 7 damage; A < 2 restrained (save ends)
> - **17+:** 10 damage; A < 3 restrained (save ends)
>
> **Effect:** The portcullis blocks movement from one side of it to the other. A target slid by the portcullis ends up on one side of it or the other (choose randomly). The portcullis must be manually reset.

> ⭐️ **Hidden**
>
> The portcullis is hidden until triggered or detected.
