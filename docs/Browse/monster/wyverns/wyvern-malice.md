---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One wyvern in the encounter can make a free strike against each enemy adjacent to them.
      cost: 3 Malice
      icon: "\U0001F5E1"
      name: Simmering Anger
    - body: Until the end of the round, each wyvern in the encounter has a double edge on strikes and can use their signature ability instead of a free strike when making opportunity attacks.
      cost: 5 Malice
      icon: ⭐️
      name: Boiling Fury
    - body: Every wyvern's anger fills the encounter map with a thick miasma of hatred. Each enemy in the encounter makes an **Intuition test**.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Overflowing Rage
      power_roll:
        tiers:
            high: No effect.
            low: The target is taunted by the nearest creature or object (save ends). While the target is taunted this way, power rolls against them have a double edge.
            mid: The target is taunted by the nearest creature or object (save ends).
flavor: At the start of any wyvern's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Wyvern Malice
scc: mcdm.monsters.v1/monster.wyverns/wyvern-malice
type: featureblock
---

# Simmering Anger

---

At the start of any wyvern's turn, you can spend Malice to activate one of the following features.

> 🗡 **Simmering Anger (3 Malice)**
>
> One wyvern in the encounter can make a free strike against each enemy adjacent to them.

> ⭐️ **Boiling Fury (5 Malice)**
>
> Until the end of the round, each wyvern in the encounter has a double edge on strikes and can use their signature ability instead of a free strike when making opportunity attacks.

> 🌀 **Overflowing Rage (7 Malice)**
>
> Every wyvern's anger fills the encounter map with a thick miasma of hatred. Each enemy in the encounter makes an **Intuition test**.
>
> - **≤11:** The target is taunted by the nearest creature or object (save ends). While the target is taunted this way, power rolls against them have a double edge.
> - **12-16:** The target is taunted by the nearest creature or object (save ends).
> - **17+:** No effect.
