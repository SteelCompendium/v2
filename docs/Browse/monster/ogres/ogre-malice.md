---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a **Might test** or **Agility test**.
      cost: 3 Malice
      icon: ❇️
      name: Shockwave
      power_roll:
        tiers:
            high: Push 1
            low: 5 damage; vertical push 3
            mid: 4 damage; vertical push 2
    - body: Each ogre in the encounter shifts up to their speed and can make a free strike. If they can, they gang up on the same target rather than picking different targets.
      cost: 5 Malice
      icon: "\U0001F300"
      name: Bully
    - body: Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).
      cost: 7 Malice
      icon: ⭐️
      name: Rampage
flavor: At the start of any ogre's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ogre Malice
scc: mcdm.monsters.v1/monster.ogres/ogre-malice
type: featureblock
---

# Shockwave

---

At the start of any ogre's turn, you can spend Malice to activate one of the following features.

> ❇️ **Shockwave (3 Malice)**
>
> One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a **Might test** or **Agility test**.
>
> - **≤11:** 5 damage; vertical push 3
> - **12-16:** 4 damage; vertical push 2
> - **17+:** Push 1

> 🌀 **Bully (5 Malice)**
>
> Each ogre in the encounter shifts up to their speed and can make a free strike. If they can, they gang up on the same target rather than picking different targets.

> ⭐️ **Rampage (7 Malice)**
>
> Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).
