---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a pressure plate can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The pressure plate is deactivated and doesn't trigger.
            low: The creature triggers the pressure plate.
            mid: The pressure plate is deactivated but the creature is slowed (EoT).
    - body: The pressure plate is calibrated to be triggered by creatures or objects of a particular size. The pressure plate triggers when a creature or object of the appropriate size enters its area.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The linked mechanism is activated. A pressure plate automatically resets and can be triggered repeatedly.
    - body: '**Tripwire (−1 EV)** The pressure plate is a tripwire, which can trigger once and must be manually reset. A concealed tripwire can be discovered with an **easy Intuition test**.'
      icon: ⭐️
      name: Upgrade
    - body: The pressure plate is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: This mechanism acts as a trigger for another linked mechanism, and is skillfully hidden from view in the floor.
level: 1
name: Pressure Plate
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: '-'
    - name: Size
      value: Any area
    - name: Typical Space
      value: One square, up to a 4 x 4-square area
    - name: Link
      value: A pressure plate is linked to another mechanism that it activates when triggered.
terrain_type: Trigger
type: dynamic-terrain
---

# Deactivate

---

This mechanism acts as a trigger for another linked mechanism, and is skillfully hidden from view in the floor.

- **EV:** 2
- **Stamina:** -
- **Size:** Any area
- **Typical Space:** One square, up to a 4 x 4-square area
- **Link:** A pressure plate is linked to another mechanism that it activates when triggered.

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a pressure plate can make an **Agility test**.
>
> - **≤11:** The creature triggers the pressure plate.
> - **12-16:** The pressure plate is deactivated but the creature is slowed (EoT).
> - **17+:** The pressure plate is deactivated and doesn't trigger.

> ❕ **Activate**
>
> The pressure plate is calibrated to be triggered by creatures or objects of a particular size. The pressure plate triggers when a creature or object of the appropriate size enters its area.
>
> **Effect:** The linked mechanism is activated. A pressure plate automatically resets and can be triggered repeatedly.

> ⭐️ **Upgrade**
>
> **Tripwire (−1 EV)** The pressure plate is a tripwire, which can trigger once and must be manually reset. A concealed tripwire can be discovered with an **easy Intuition test**.

> ⭐️ **Hidden**
>
> The pressure plate is hidden until triggered or detected.
