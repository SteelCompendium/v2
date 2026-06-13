---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each wode elf who ends this turn hidden can shift up to their speed while remaining hidden.
      cost: 3 Malice
      icon: ⭐️
      name: Forest Network
    - body: Until the end of the round, each wode elf gains an edge on abilities, and their strikes can slide a target up to 2 squares in addition to their usual effects. If a strike already imposes forced movement, this slide happens after that forced movement. A creature force moved by a wode elf's strike who ends this forced movement in difficult terrain is restrained until the end of their next turn.
      cost: 5 Malice
      icon: ⭐️
      name: Punishing Regrowth
    - body: Vines rapidly grow across the entire encounter map. Each enemy in the encounter makes an **Agility test**.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Vines Everywhere
      power_roll:
        tiers:
            high: No effect.
            low: 8 damage; restrained (save ends)
            mid: Restrained (EoT)
flavor: At the start of any wode elf's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Wode Elf Malice
scc: mcdm.monsters.v1/monster.elves-wode/wode-elf-malice
type: featureblock
---

# Forest Network

---

At the start of any wode elf's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Forest Network (3 Malice)**
>
> Each wode elf who ends this turn hidden can shift up to their speed while remaining hidden.

> ⭐️ **Punishing Regrowth (5 Malice)**
>
> Until the end of the round, each wode elf gains an edge on abilities, and their strikes can slide a target up to 2 squares in addition to their usual effects. If a strike already imposes forced movement, this slide happens after that forced movement. A creature force moved by a wode elf's strike who ends this forced movement in difficult terrain is restrained until the end of their next turn.

> 🌀 **Vines Everywhere (7 Malice)**
>
> Vines rapidly grow across the entire encounter map. Each enemy in the encounter makes an **Agility test**.
>
> - **≤11:** 8 damage; restrained (save ends)
> - **12-16:** Restrained (EoT)
> - **17+:** No effect.
