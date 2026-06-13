---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a pulley can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The pulley is deactivated and doesn't trigger.
            low: The creature triggers the pulley.
            mid: The pulley is deactivated but the creature is slowed (EoT).
    - body: A creature adjacent to the pulley uses a maneuver to release the pulley.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature is lifted to the top of the structure the pulley is attached to. The pulley must be manually reset.
    - body: A creature adjacent to the pulley can climb its ropes with an **easy Agility test** to ascend to the top of the structure it's attached to.
      icon: ⭐️
      name: Climbable
    - body: '**Looped Chain (+1 EV)** Instead of a rope and pulley, the system uses a counterweighted looped chain. A looped chain automatically resets and can be triggered repeatedly.'
      icon: ⭐️
      name: Upgrade
flavor: A counterweighted pulley system can be used to quickly ascend to the top of a wall, scaffold, tower, or other structure.
level: 1
name: Pulley
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pulley
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "1"
    - name: Size
      value: 1S
terrain_type: Trigger
type: dynamic-terrain
---

# Deactivate

---

A counterweighted pulley system can be used to quickly ascend to the top of a wall, scaffold, tower, or other structure.

- **EV:** 1
- **Stamina:** 1
- **Size:** 1S

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a pulley can make an **Agility test**.
>
> - **≤11:** The creature triggers the pulley.
> - **12-16:** The pulley is deactivated but the creature is slowed (EoT).
> - **17+:** The pulley is deactivated and doesn't trigger.

> ❕ **Activate**
>
> A creature adjacent to the pulley uses a maneuver to release the pulley.
>
> **Effect:** The triggering creature is lifted to the top of the structure the pulley is attached to. The pulley must be manually reset.

> ⭐️ **Climbable**
>
> A creature adjacent to the pulley can climb its ropes with an **easy Agility test** to ascend to the top of the structure it's attached to.

> ⭐️ **Upgrade**
>
> **Looped Chain (+1 EV)** Instead of a rope and pulley, the system uses a counterweighted looped chain. A looped chain automatically resets and can be triggered repeatedly.
