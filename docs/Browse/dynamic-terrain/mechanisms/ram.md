---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a ram can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The ram is deactivated and doesn't trigger.
            low: The creature triggers the ram and is affected as if in its space.
            mid: The ram is deactivated but the creature is slowed (EoT).
    - body: A pressure plate, switch, or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Ram** ability.
    - distance: Special
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Ram
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; push 5
            low: 3 damage; slide 1, ignoring stability
            mid: 6 damage; push 3
      sections:
        - label: Trigger
          text: A pressure plate, switch, or other linked trigger is activated.
        - label: Special
          text: The area of this ability is the path the ram moves through from its starting position.
        - label: Effect
          text: A target slid by the ram ends up on one side of it or the other (choose randomly). The ram must be manually reset.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: |-
        **Stone (+1 EV)** The ram is made of stone, has 6 Stamina per square, and deals an extra 1d3 damage.

        **Metal (+2 EV)** The ram is made of metal, has 9 Stamina per square, and deals an extra 1d6 damage.

        **Repeating (+1 EV)** The ram automatically resets at the start of each round.

        **Rapid Repeating (+3 EV)** The ram automatically resets at the start of each turn.

        **Multiple Rams (+3 EV per additional ram)** Multiple rams can be used to represent a larger mechanism, such as a stack of tumbling logs.
      icon: ⭐️
      name: Upgrades
    - body: The ram is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A heavy wooden ram drops down or swings into the fray, crushing all in its path.
level: 2
name: Ram
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/ram
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: 3 per square
    - name: Size
      value: Any area; the area can't be moved through
    - name: Typical Space
      value: 1 x 3-square area or a 2 x 2-square area
    - name: Direction
      value: One side of the ram is defined as the front.
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

A heavy wooden ram drops down or swings into the fray, crushing all in its path.

- **EV:** 3
- **Stamina:** 3 per square
- **Size:** Any area; the area can't be moved through
- **Typical Space:** 1 x 3-square area or a 2 x 2-square area
- **Direction:** One side of the ram is defined as the front.

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a ram can make an **Agility test**.
>
> - **≤11:** The creature triggers the ram and is affected as if in its space.
> - **12-16:** The ram is deactivated but the creature is slowed (EoT).
> - **17+:** The ram is deactivated and doesn't trigger.

> ❕ **Activate**
>
> A pressure plate, switch, or other linked trigger is activated.
>
> **Effect:** The **Ram** ability.

> ❗️ **Ram**
>
> | **Area, Weapon** |                   **Free triggered action** |
> |------------------|--------------------------------------------:|
> | **📏 Special**   | **🎯 Each creature and object in the area** |
>
> **Trigger:** A pressure plate, switch, or other linked trigger is activated.
>
> **Special:** The area of this ability is the path the ram moves through from its starting position.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 damage; slide 1, ignoring stability
> - **12-16:** 6 damage; push 3
> - **17+:** 9 damage; push 5
>
> **Effect:** A target slid by the ram ends up on one side of it or the other (choose randomly). The ram must be manually reset.

> ⭐️ **Upgrades**
>
> **Stone (+1 EV)** The ram is made of stone, has 6 Stamina per square, and deals an extra 1d3 damage.
>
> **Metal (+2 EV)** The ram is made of metal, has 9 Stamina per square, and deals an extra 1d6 damage.
>
> **Repeating (+1 EV)** The ram automatically resets at the start of each round.
>
> **Rapid Repeating (+3 EV)** The ram automatically resets at the start of each turn.
>
> **Multiple Rams (+3 EV per additional ram)** Multiple rams can be used to represent a larger mechanism, such as a stack of tumbling logs.

> ⭐️ **Hidden**
>
> The ram is hidden until triggered or detected.
