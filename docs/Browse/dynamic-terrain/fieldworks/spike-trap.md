---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a spike trap can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its area.
            mid: The trap is deactivated but the creature is slowed (EoT).
    - body: The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spike Trap** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Spike Trap
      power_roll:
        formula: + 2
        tiers:
            high: 6 damage; the target falls into the pit; A < 1 prone; restrained (save ends)
            low: 3 damage; the target shifts 1 square away from the trap
            mid: 4 damage; the target falls into the pit; A < 0 prone
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's area.
        - label: Effect
          text: The target ends their movement when they enter the trap's area. The pit is typically 2 squares deep. The trap must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: The spike trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.
level: 2
name: Spike Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/spike-trap
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "6"
    - name: Size
      value: One or more squares
    - name: Typical Space
      value: 2 x 2-square area
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.

- **EV:** 3
- **Stamina:** 6
- **Size:** One or more squares
- **Typical Space:** 2 x 2-square area

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a spike trap can make an **Agility test**.
>
> - **≤11:** The creature triggers the trap and is affected as if in its area.
> - **12-16:** The trap is deactivated but the creature is slowed (EoT).
> - **17+:** The trap is deactivated and doesn't trigger.

> ❕ **Activate**
>
> The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.
>
> **Effect:** The **Spike Trap** ability.

> ❗️ **Spike Trap**
>
> | **Area, Weapon** |                **Free triggered action** |
> |------------------|-----------------------------------------:|
> | **📏 Melee 0**   | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object of the appropriate size enters the trap's area.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 damage; the target shifts 1 square away from the trap
> - **12-16:** 4 damage; the target falls into the pit; A < 0 prone
> - **17+:** 6 damage; the target falls into the pit; A < 1 prone; restrained (save ends)
>
> **Effect:** The target ends their movement when they enter the trap's area. The pit is typically 2 squares deep. The trap must be manually reset.

> ⭐️ **Hidden**
>
> The spike trap is hidden until triggered or detected.
