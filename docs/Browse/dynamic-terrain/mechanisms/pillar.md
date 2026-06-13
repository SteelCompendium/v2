---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The pillar's linked trigger must be deactivated.
      icon: "\U0001F300"
      name: Deactivate
    - body: The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Toppling Pillar** ability.
    - distance: 4 x 1 line within 1
      icon: ❗️
      keywords:
        - Area
      name: Toppling Pillar
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; M < 2 restrained (save ends)
            low: 4 damage
            mid: 6 damage; M < 1 restrained (save ends)
      sections:
        - label: Trigger
          text: The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
        - label: Effect
          text: The area is difficult terrain.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: |-
        **Metal Pillar (+1 EV)** The pillar is made of metal, has 9 Stamina, and deals 1d6 extra damage.

        **Multiple Pillars (+3 EV per additional pillar)** Multiple pillars can be used to represent a larger toppling object such as a wall. If triggered by destruction, all individual pillars need to be destroyed before the object falls.
      icon: ⭐️
      name: Upgrades
flavor: This stone pillar can be toppled onto unsuspecting foes with the right amount of damage or a well-engineered trigger mechanism.
level: 2
name: Pillar
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pillar
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "6"
    - name: Size
      value: One square that can't be moved through
    - name: Direction
      value: The pillar topples in a preset direction.
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

This stone pillar can be toppled onto unsuspecting foes with the right amount of damage or a well-engineered trigger mechanism.

- **EV:** 3
- **Stamina:** 6
- **Size:** One square that can't be moved through
- **Direction:** The pillar topples in a preset direction.

> 🌀 **Deactivate**
>
> The pillar's linked trigger must be deactivated.

> ❕ **Activate**
>
> The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
>
> **Effect:** The **Toppling Pillar** ability.

> ❗️ **Toppling Pillar**
>
> | **Area**                   |                   **Free triggered action** |
> |----------------------------|--------------------------------------------:|
> | **📏 4 x 1 line within 1** | **🎯 Each creature and object in the area** |
>
> **Trigger:** The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
>
> **Power Roll + 2:**
>
> - **≤11:** 4 damage
> - **12-16:** 6 damage; M < 1 restrained (save ends)
> - **17+:** 9 damage; M < 2 restrained (save ends)
>
> **Effect:** The area is difficult terrain.

> ⭐️ **Upgrades**
>
> **Metal Pillar (+1 EV)** The pillar is made of metal, has 9 Stamina, and deals 1d6 extra damage.
>
> **Multiple Pillars (+3 EV per additional pillar)** Multiple pillars can be used to represent a larger toppling object such as a wall. If triggered by destruction, all individual pillars need to be destroyed before the object falls.
