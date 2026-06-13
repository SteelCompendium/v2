---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Until the end of the round, whenever a high elf uses a magic ability, they can use it as if they were occupying the square of another high elf on the encounter map to whom they have line of effect.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Chaincast
    - cost: 5 Malice
      distance: 5 x 1 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Gift From an Accursed Tome
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; R < 3 chosen condition (save ends)
            low: 5 damage; R < 1 chosen condition (save ends)
            mid: 9 damage; R < 2 chosen condition (save ends)
      sections:
        - label: Effect
          text: 'The high elf chooses a damage type and condition from one of the following combinations: cold damage and slowed, poison damage and weakened, or corruption damage and frightened.'
        - label: Special
          text: This ability can't be used by a minion.
      target: Each enemy in the area
      usage: Main action
    - body: Until the end of the round, each high elf in the encounter gains a +4 bonus to speed, and whenever a high elf uses an ability against an enemy, each high elf adjacent to that enemy can make a free strike against them.
      cost: 7 Malice
      icon: "\U0001F300"
      name: In Defiance of Time
flavor: At the start of any high elf's turn, you can spend Malice to activate one of the following features.
kind: malice
name: High Elf Malice
scc: mcdm.monsters.v1/monster.elves-high/high-elf-malice
type: featureblock
---

# Chaincast

---

At the start of any high elf's turn, you can spend Malice to activate one of the following features.

> 🌀 **Chaincast (3 Malice)**
>
> Until the end of the round, whenever a high elf uses a magic ability, they can use it as if they were occupying the square of another high elf on the encounter map to whom they have line of effect.

> 🔳 **Gift From an Accursed Tome (5 Malice)**
>
> | **Area, Magic**            |               **Main action** |
> |----------------------------|------------------------------:|
> | **📏 5 x 1 line within 1** | **🎯 Each enemy in the area** |
>
> **Effect:** The high elf chooses a damage type and condition from one of the following combinations: cold damage and slowed, poison damage and weakened, or corruption damage and frightened.
>
> **Power Roll + 2:**
>
> - **≤11:** 5 damage; R < 1 chosen condition (save ends)
> - **12-16:** 9 damage; R < 2 chosen condition (save ends)
> - **17+:** 12 damage; R < 3 chosen condition (save ends)
>
> **Special:** This ability can't be used by a minion.

> 🌀 **In Defiance of Time (7 Malice)**
>
> Until the end of the round, each high elf in the encounter gains a +4 bonus to speed, and whenever a high elf uses an ability against an enemy, each high elf adjacent to that enemy can make a free strike against them.
