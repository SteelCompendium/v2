---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a bear trap can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its space.
            mid: The trap is deactivated but the creature is slowed (EoT).
    - body: The bear trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A triggering creature or object ends their movement and is targeted by the **Bear Trap** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Bear Trap
      power_roll:
        formula: + 2
        tiers:
            high: 5 damage; A < 2 slowed (save ends)
            low: 1 The target shifts 1 square away from the trap.
            mid: 3 damage; A < 1 slowed (save ends)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's space.
        - label: Effect
          text: The bear trap must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Chain (+1 EV)** The bear trap is attached to the ground by a steel chain. A target who would be made slowed by the trap is restrained instead.'
      icon: ⭐️
      name: Upgrade
    - body: The bear trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A set of spring-loaded steel jaws stands ready to snap shut when stepped on.
level: 1
name: Bear Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/bear-trap
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: "6"
    - name: Size
      value: 1S
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

A set of spring-loaded steel jaws stands ready to snap shut when stepped on.

- **EV:** 2
- **Stamina:** 6
- **Size:** 1S

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a bear trap can make an **Agility test**.
>
> - **≤11:** The creature triggers the trap and is affected as if in its space.
> - **12-16:** The trap is deactivated but the creature is slowed (EoT).
> - **17+:** The trap is deactivated and doesn't trigger.

> ❕ **Activate**
>
> The bear trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
>
> **Effect:** A triggering creature or object ends their movement and is targeted by the **Bear Trap** ability.

> ❗️ **Bear Trap**
>
> | **Melee, Strike, Weapon** |                **Free triggered action** |
> |---------------------------|-----------------------------------------:|
> | **📏 Melee 0**            | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object of the appropriate size enters the trap's space.
>
> **Power Roll + 2:**
>
> - **≤11:** 1 The target shifts 1 square away from the trap.
> - **12-16:** 3 damage; A < 1 slowed (save ends)
> - **17+:** 5 damage; A < 2 slowed (save ends)
>
> **Effect:** The bear trap must be manually reset.

> ⭐️ **Upgrade**
>
> **Chain (+1 EV)** The bear trap is attached to the ground by a steel chain. A target who would be made slowed by the trap is restrained instead.

> ⭐️ **Hidden**
>
> The bear trap is hidden until triggered or detected.
