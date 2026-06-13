---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The undead activates a Malice feature available to undead of level 9 or lower.
      cost: 2-7+ Malice
      icon: ⭐️
      name: Prior Malice Features
    - body: The undead attempts to rend the vitality of their foes. Each enemy within 5 squares of the undead makes a **Might test**.
      cost: 7 Malice
      icon: ❇️
      name: Death Tax
      power_roll:
        tiers:
            high: 5 corruption damage
            low: 10 corruption damage; the target loses 2 Recoveries
            mid: 8 corruption damage; the target loses 1 Recovery
      sections:
        - label: Effect
          text: A target who has fewer Recoveries than they would lose is also weakened (save ends).
        - label: Special
          text: This ability can't be used by a minion.
flavor: At the start of any level 10 undead's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 10
name: Undead Malice (Level 10 Malice Features)
scc: mcdm.monsters.v1/monster.undead.4th-echelon/undead-malice-level-10-malice-features
type: featureblock
---

# Prior Malice Features

---

At the start of any level 10 undead's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Prior Malice Features (2-7+ Malice)**
>
> The undead activates a Malice feature available to undead of level 9 or lower.

> ❇️ **Death Tax (7 Malice)**
>
> The undead attempts to rend the vitality of their foes. Each enemy within 5 squares of the undead makes a **Might test**.
>
> - **≤11:** 10 corruption damage; the target loses 2 Recoveries
> - **12-16:** 8 corruption damage; the target loses 1 Recovery
> - **17+:** 5 corruption damage
>
> **Effect:** A target who has fewer Recoveries than they would lose is also weakened (save ends).
>
> **Special:** This ability can't be used by a minion.
