---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a pavise shield controlled by another creature can make a **Might test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The creature making the test grabs the shield and takes control of it.
            low: The creature controlling the shield retains control of it and can make an opportunity attack against the creature making the test.
            mid: The creature controlling the shield retains control of it.
    - body: |-
        While a creature has the pavise shield grabbed, they have cover and take half damage from abilities whose line of effect extends through the shield. The pavise shield takes the other half of the damage.

        While a creature has a pavise shield grabbed, their speed is halved and they move the shield like a grabbed creature.
      icon: ⭐️
      name: Controlling the Shield
flavor: A reinforced metal shield embedded in the ground acts as cover for the creature controlling it.
level: 1
name: Pavise Shield
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/pavise-shield
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "9"
    - name: Size
      value: 1M
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A reinforced metal shield embedded in the ground acts as cover for the creature controlling it.

- **EV:** 1
- **Stamina:** 9
- **Size:** 1M

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a pavise shield controlled by another creature can make a **Might test**.
>
> - **≤11:** The creature controlling the shield retains control of it and can make an opportunity attack against the creature making the test.
> - **12-16:** The creature controlling the shield retains control of it.
> - **17+:** The creature making the test grabs the shield and takes control of it.

> ⭐️ **Controlling the Shield**
>
> While a creature has the pavise shield grabbed, they have cover and take half damage from abilities whose line of effect extends through the shield. The pavise shield takes the other half of the damage.
>
> While a creature has a pavise shield grabbed, their speed is halved and they move the shield like a grabbed creature.
