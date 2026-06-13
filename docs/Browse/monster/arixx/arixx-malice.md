---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The arixx dribbles acid over their mandibles, causing the next strike they make to gain an edge and deal an extra 3 acid damage.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Burning Maw
    - body: The arixx's underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Geyser
      power_roll:
        tiers:
            high: The target shifts to the nearest unoccupied space outside the area.
            low: 4 damage; vertical push 5
            mid: 4 damage; vertical push 3
    - body: The arixx takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A < 1 is knocked prone. Until the end of the encounter, each creature who starts their turn on the ground and can't burrow must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn prone or underground. A creature who starts and ends their turn in the same space on the ground and can't burrow sinks 1 square into the ground.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Earth Sink
flavor: At the start of an arixx's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Arixx Malice
scc: mcdm.monsters.v1/monster.arixx/arixx-malice
type: featureblock
---

# Burning Maw

---

At the start of an arixx's turn, you can spend Malice to activate one of the following features.

> 👤 **Burning Maw (3 Malice)**
>
> The arixx dribbles acid over their mandibles, causing the next strike they make to gain an edge and deal an extra 3 acid damage.

> 🔳 **Geyser (5 Malice)**
>
> The arixx's underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **Agility test**.
>
> - **≤11:** 4 damage; vertical push 5
> - **12-16:** 4 damage; vertical push 3
> - **17+:** The target shifts to the nearest unoccupied space outside the area.

> ☠️ **Solo Action (5 Malice)**
>
> The arixx takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🌀 **Earth Sink (7 Malice)**
>
> The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A < 1 is knocked prone. Until the end of the encounter, each creature who starts their turn on the ground and can't burrow must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn prone or underground. A creature who starts and ends their turn in the same space on the ground and can't burrow sinks 1 square into the ground.
