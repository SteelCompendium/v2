---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The demon activates a Malice feature available to demons of level 9 or lower.
      cost: 3-7 Malice
      icon: ⭐️
      name: Prior Malice Features
    - body: One demon acting this turn unleashes their pent-up agony and pain on every non-demon in a 5 burst. Each target makes a **Presence test**.
      cost: 7 Malice
      icon: ❇️
      name: Soul Flense
      power_roll:
        tiers:
            high: No effect.
            low: 10 corruption damage; the target is soul flensed
            mid: The target is soul flensed
      sections:
        - label: Effect
          text: The demon removes all conditions and effects on themself that can be ended by a saving throw, and transfers all those effects to each creature soul flensed this way.
flavor: At the start of any level 10 or higher demon's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 10
name: Demon Malice (Level 10+ Malice Features)
scc: mcdm.monsters.v1/monster.demons.4th-echelon/demon-malice-level-10-malice-features
type: featureblock
---

# Prior Malice Features

---

At the start of any level 10 or higher demon's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Prior Malice Features (3-7 Malice)**
>
> The demon activates a Malice feature available to demons of level 9 or lower.

> ❇️ **Soul Flense (7 Malice)**
>
> One demon acting this turn unleashes their pent-up agony and pain on every non-demon in a 5 burst. Each target makes a **Presence test**.
>
> - **≤11:** 10 corruption damage; the target is soul flensed
> - **12-16:** The target is soul flensed
> - **17+:** No effect.
>
> **Effect:** The demon removes all conditions and effects on themself that can be ended by a saving throw, and transfers all those effects to each creature soul flensed this way.
