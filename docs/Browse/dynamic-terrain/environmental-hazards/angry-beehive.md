---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The beehive can't be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters the hive's space or an adjacent space without shifting.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm's space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature's space. After 3 rounds, the swarm dissipates.
    - body: |-
        **Concealed Hive (+1 EV)** The hive is hidden until the swarm is unleashed.

        **Killer Bees (+2 EV)** The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature shifts into or while adjacent to it, and the swarm deals 1d6 + 3 poison damage.
      icon: ⭐️
      name: Upgrades
flavor: This beehive is full of angry bees who swarm and attack with little provocation.
level: 2
name: Angry Beehive
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/angry-beehive
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: "3"
    - name: Size
      value: 1S
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

This beehive is full of angry bees who swarm and attack with little provocation.

- **EV:** 2
- **Stamina:** 3
- **Size:** 1S

> 🌀 **Deactivate**
>
> The beehive can't be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.

> ❕ **Activate**
>
> A creature enters the hive's space or an adjacent space without shifting.
>
> **Effect:** The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm's space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature's space. After 3 rounds, the swarm dissipates.

> ⭐️ **Upgrades**
>
> **Concealed Hive (+1 EV)** The hive is hidden until the swarm is unleashed.
>
> **Killer Bees (+2 EV)** The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature shifts into or while adjacent to it, and the swarm deals 1d6 + 3 poison damage.
