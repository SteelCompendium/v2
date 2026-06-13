---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: For each 3 Malice spent, one minotaur acting this turn gains a +4 bonus to speed and ignores difficult terrain until the start of their next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Bull Rush
    - body: One minotaur acting this turn halves any damage they take, and can use the Knockback maneuver as a free triggered action whenever an enemy comes adjacent to them, all until the start of their next turn.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Cut the... Nonsense!
    - body: All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is teleported up to 5 squares and makes an **Intuition test**.
      cost: 7 Malice
      icon: ❇️
      name: Bullseye
      power_roll:
        tiers:
            high: No effect.
            low: The target has line of effect only within 3 squares and is frightened of all minotaurs (save ends).
            mid: The target has line of effect only within 3 squares (EoT).
flavor: At the start of any minotaur's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Minotaur Malice
scc: mcdm.monsters.v1/monster.minotaurs/minotaur-malice
type: featureblock
---

# Bull Rush

---

At the start of any minotaur's turn, you can spend Malice to activate one of the following features.

> 👤 **Bull Rush (3 Malice)**
>
> For each 3 Malice spent, one minotaur acting this turn gains a +4 bonus to speed and ignores difficult terrain until the start of their next turn.

> 👤 **Cut the... Nonsense! (5 Malice)**
>
> One minotaur acting this turn halves any damage they take, and can use the Knockback maneuver as a free triggered action whenever an enemy comes adjacent to them, all until the start of their next turn.

> ❇️ **Bullseye (7 Malice)**
>
> All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is teleported up to 5 squares and makes an **Intuition test**.
>
> - **≤11:** The target has line of effect only within 3 squares and is frightened of all minotaurs (save ends).
> - **12-16:** The target has line of effect only within 3 squares (EoT).
> - **17+:** No effect.
