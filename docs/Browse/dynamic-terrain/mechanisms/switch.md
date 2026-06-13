---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a switch can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The switch is deactivated and doesn't trigger.
            low: The creature triggers the switch.
            mid: The switch is deactivated but the creature is slowed (EoT).
    - body: A creature adjacent to the switch uses a maneuver to trigger it.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The linked mechanism is activated. A switch automatically resets and can be triggered repeatedly.
    - body: '**Concealed (+1 EV)** The switch is hidden.'
      icon: ⭐️
      name: Upgrade
flavor: Set into any surface, this mechanism acts as a trigger for another linked mechanism.
level: 1
name: Switch
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/switch
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "3"
    - name: Size
      value: 1T
    - name: Link
      value: A switch is linked to another mechanism that it activates when triggered.
terrain_type: Trigger
type: dynamic-terrain
---

# Deactivate

---

Set into any surface, this mechanism acts as a trigger for another linked mechanism.

- **EV:** 1
- **Stamina:** 3
- **Size:** 1T
- **Link:** A switch is linked to another mechanism that it activates when triggered.

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a switch can make an **Agility test**.
>
> - **≤11:** The creature triggers the switch.
> - **12-16:** The switch is deactivated but the creature is slowed (EoT).
> - **17+:** The switch is deactivated and doesn't trigger.

> ❕ **Activate**
>
> A creature adjacent to the switch uses a maneuver to trigger it.
>
> **Effect:** The linked mechanism is activated. A switch automatically resets and can be triggered repeatedly.

> ⭐️ **Upgrade**
>
> **Concealed (+1 EV)** The switch is hidden.
