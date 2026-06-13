---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One non-minion voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker's next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guise
    - cost: 5 Malice
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Psionic
        - Ranged
      name: Memory Thief
      power_roll:
        formula: + 3
        tiers:
            high: 13 psychic damage; R < 3 the target perceives their allies as enemies (save ends)
            low: 6 psychic damage; R < 1 the target can't treat their allies as allies (save ends)
            mid: 10 psychic damage; R < 2 the target perceives their allies as enemies (save ends)
      sections:
        - label: Special
          text: This ability can't be used by a minion.
      target: One creature
      usage: Maneuver
    - body: All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-minion voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker minion on the encounter map. The minion takes the damage instead.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Evolutionary Circuit
flavor: At the start of any voiceless talker's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Voiceless Talker Malice
scc: mcdm.monsters.v1/monster.voiceless-talkers/voiceless-talker-malice
type: featureblock
---

# Guise

---

At the start of any voiceless talker's turn, you can spend Malice to activate one of the following features.

> 👤 **Guise (3 Malice)**
>
> One non-minion voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker's next turn.

> 🏹 **Memory Thief (5 Malice)**
>
> | **Psionic, Ranged** |        **Maneuver** |
> |---------------------|--------------------:|
> | **📏 Ranged 5**     | **🎯 One creature** |
>
> **Power Roll + 3:**
>
> - **≤11:** 6 psychic damage; R < 1 the target can't treat their allies as allies (save ends)
> - **12-16:** 10 psychic damage; R < 2 the target perceives their allies as enemies (save ends)
> - **17+:** 13 psychic damage; R < 3 the target perceives their allies as enemies (save ends)
>
> **Special:** This ability can't be used by a minion.

> 🌀 **Evolutionary Circuit (10 Malice)**
>
> All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-minion voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker minion on the encounter map. The minion takes the damage instead.
