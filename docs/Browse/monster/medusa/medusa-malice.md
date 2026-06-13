---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 4 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - '- Magic'
        - Ranged
        - Strike
      name: Weakening Glare
      power_roll:
        formula: + 4
        tiers:
            high: 12 damage; weakened (save ends)
            low: 6 damage; weakened (EoT)
            mid: 10 damage; weakened (EoT)
      target: One creature
      usage: Main action
    - body: The medusa takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Ssstop and Lisssten
      power_roll:
        formula: + 4
        tiers:
            high: I < 4 the target is charmed
            low: I < 2 the target is charmed
            mid: I < 3 the target is charmed
      sections:
        - label: Effect
          text: At a time of the medusa's choosing, a charmed creature moves up to their speed and makes a free strike against an enemy of the medusa's choice as a free triggered action. The creature is then no longer charmed.
      target: Three creatures
      usage: Main action
    - body: The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy restrained or slowed by the medusa's Petrify ability has a double bane on the test.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Shatter Victims
      power_roll:
        tiers:
            high: 6 damage
            low: 12 damage; vertical push 3; bleeding (save ends)
            mid: 10 damage; vertical push 3
flavor: At the start of a medusa's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Medusa Malice
scc: mcdm.monsters.v1/monster.medusa/medusa-malice
type: featureblock
---

# Weakening Glare

---

At the start of a medusa's turn, you can spend Malice to activate one of the following features.

> 🏹 **Weakening Glare (4 Malice)**
>
> | **- Magic, Ranged, Strike** |     **Main action** |
> |-----------------------------|--------------------:|
> | **📏 Ranged 10**            | **🎯 One creature** |
>
> **Power Roll + 4:**
>
> - **≤11:** 6 damage; weakened (EoT)
> - **12-16:** 10 damage; weakened (EoT)
> - **17+:** 12 damage; weakened (save ends)

> ☠️ **Solo Action (5 Malice)**
>
> The medusa takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🏹 **Ssstop and Lisssten (5 Malice)**
>
> | **Magic, Ranged** |        **Main action** |
> |-------------------|-----------------------:|
> | **📏 Ranged 10**  | **🎯 Three creatures** |
>
> **Power Roll + 4:**
>
> - **≤11:** I < 2 the target is charmed
> - **12-16:** I < 3 the target is charmed
> - **17+:** I < 4 the target is charmed
>
> **Effect:** At a time of the medusa's choosing, a charmed creature moves up to their speed and makes a free strike against an enemy of the medusa's choice as a free triggered action. The creature is then no longer charmed.

> 🔳 **Shatter Victims (7 Malice)**
>
> The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy restrained or slowed by the medusa's Petrify ability has a double bane on the test.
>
> - **≤11:** 12 damage; vertical push 3; bleeding (save ends)
> - **12-16:** 10 damage; vertical push 3
> - **17+:** 6 damage
