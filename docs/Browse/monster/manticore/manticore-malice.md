---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The manticore uses their mimicry in an attempt to unnerve one creature within their line of effect. If the target has R < 4, they take a bane on power rolls against the manticore (save ends). Each time this feature is used against the same target during the encounter, its potency decreases by 2.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Uncanny Mimicry
    - body: The manticore takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The manticore lets out an unnerving cry. Each enemy within the manticore's line of effect makes an **Intuition test**.
      cost: 5 Malice
      icon: "\U0001F300"
      name: Desperate Howl
      power_roll:
        tiers:
            high: No effect.
            low: Frightened (save ends)
            mid: Frightened (EoT)
    - body: The manticore sprays tail spikes across the ground within 5 squares of them. Each enemy in that area who has A < 3 is bleeding (save ends). Additionally, the area is difficult terrain, and any enemy takes 3 poison damage for each square of the area they enter. An enemy who takes 9 poison damage this way on one turn is weakened until the end of the encounter.
      cost: 7 Malice
      icon: ❇️
      name: Barrage of Barbs
flavor: At the start of any manticore's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Manticore Malice
scc: mcdm.monsters.v1/monster.manticore/manticore-malice
type: featureblock
---

# Uncanny Mimicry

---

At the start of any manticore's turn, you can spend Malice to activate one of the following features.

> 🌀 **Uncanny Mimicry (3 Malice)**
>
> The manticore uses their mimicry in an attempt to unnerve one creature within their line of effect. If the target has R < 4, they take a bane on power rolls against the manticore (save ends). Each time this feature is used against the same target during the encounter, its potency decreases by 2.

> ☠️ **Solo Action (5 Malice)**
>
> The manticore takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🌀 **Desperate Howl (5 Malice)**
>
> The manticore lets out an unnerving cry. Each enemy within the manticore's line of effect makes an **Intuition test**.
>
> - **≤11:** Frightened (save ends)
> - **12-16:** Frightened (EoT)
> - **17+:** No effect.

> ❇️ **Barrage of Barbs (7 Malice)**
>
> The manticore sprays tail spikes across the ground within 5 squares of them. Each enemy in that area who has A < 3 is bleeding (save ends). Additionally, the area is difficult terrain, and any enemy takes 3 poison damage for each square of the area they enter. An enemy who takes 9 poison damage this way on one turn is weakened until the end of the encounter.
