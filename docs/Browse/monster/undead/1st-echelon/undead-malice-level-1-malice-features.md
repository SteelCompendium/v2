---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: At the end of this round, each hero not already adjacent to one or more undead is beset by two **rotting zombies** who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is winded. This feature can't be used two rounds in a row.
      cost: 2 Malice
      icon: "\U0001F300"
      name: Ravenous Horde
    - body: Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then pulled 5 squares toward the nearest enemy within 3 squares of the object.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Paranormal Fling
    - body: Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn adjacent to an affected square makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: The Grasping, the Hungry
      power_roll:
        tiers:
            high: 5 damage
            low: 5 damage; restrained (save ends)
            mid: 5 damage; restrained (EoT)
      sections:
        - label: Effect
          text: While restrained this way, a creature takes 1d6 damage at the start of each of their turns.
    - body: Up to four undead in the encounter move up to their speed and can make a free strike. The number of undead affected increases by 1 for each additional Malice spent on this feature. If an undead is reduced to 0 Stamina during this dread march, they don't die until the march is resolved.
      cost: 7+ Malice
      icon: ⭐️
      name: Dread March
flavor: At the start of any undead's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 1
name: Undead Malice (Level 1+ Malice Features)
scc: mcdm.monsters.v1/monster.undead.1st-echelon/undead-malice-level-1-malice-features
type: featureblock
---

# Ravenous Horde

---

At the start of any undead's turn, you can spend Malice to activate one of the following features.

> 🌀 **Ravenous Horde (2 Malice)**
>
> At the end of this round, each hero not already adjacent to one or more undead is beset by two **rotting zombies** who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is winded. This feature can't be used two rounds in a row.

> 🌀 **Paranormal Fling (3 Malice)**
>
> Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then pulled 5 squares toward the nearest enemy within 3 squares of the object.

> 🔳 **The Grasping, the Hungry (5 Malice)**
>
> Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn adjacent to an affected square makes an **Agility test**.
>
> - **≤11:** 5 damage; restrained (save ends)
> - **12-16:** 5 damage; restrained (EoT)
> - **17+:** 5 damage
>
> **Effect:** While restrained this way, a creature takes 1d6 damage at the start of each of their turns.

> ⭐️ **Dread March (7+ Malice)**
>
> Up to four undead in the encounter move up to their speed and can make a free strike. The number of undead affected increases by 1 for each additional Malice spent on this feature. If an undead is reduced to 0 Stamina during this dread march, they don't die until the march is resolved.
