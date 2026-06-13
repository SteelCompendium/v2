---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a hidey-hole can make a **Might test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The hidey-hole collapses and can no longer be used until repaired.
            low: The creature is restrained (save ends).
            mid: The hidey-hole collapses but the creature is slowed (save ends).
    - body: A creature starts the encounter in the hidey-hole or ends their turn there.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature can attempt to hide as a free triggered action.
    - body: '**Network (+1 EV per hidey-hole)** The hidey-hole is connected to a tunnel network. A creature familiar with the network can move from one hidey-hole to any space adjacent to a connected hidey-hole if they have movement available equal to the straight-line distance to that space. A creature unfamiliar with the network can use a maneuver to make a **hard Intuition test** to discover a connected hidey-hole.'
      icon: ⭐️
      name: Upgrade
flavor: A cavity in a floor, wall, or ceiling might hold hidden threats.
level: 1
name: Hidey-Hole
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/hidey-hole
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: '-'
    - name: Size
      value: One or more squares
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A cavity in a floor, wall, or ceiling might hold hidden threats.

- **EV:** 1
- **Stamina:** -
- **Size:** One or more squares

> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a hidey-hole can make a **Might test**.
>
> - **≤11:** The creature is restrained (save ends).
> - **12-16:** The hidey-hole collapses but the creature is slowed (save ends).
> - **17+:** The hidey-hole collapses and can no longer be used until repaired.

> ❕ **Activate**
>
> A creature starts the encounter in the hidey-hole or ends their turn there.
>
> **Effect:** The triggering creature can attempt to hide as a free triggered action.

> ⭐️ **Upgrade**
>
> **Network (+1 EV per hidey-hole)** The hidey-hole is connected to a tunnel network. A creature familiar with the network can move from one hidey-hole to any space adjacent to a connected hidey-hole if they have movement available equal to the straight-line distance to that space. A creature unfamiliar with the network can use a maneuver to make a **hard Intuition test** to discover a connected hidey-hole.
