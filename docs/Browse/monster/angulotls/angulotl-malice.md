---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Until the end of the round, when an angulotl moves through an inactive angulotl's space, the inactive angulotl can use a free triggered action to jump 3 squares.
      cost: 3 Malice
      icon: ⭐️
      name: Leapfrog
    - body: Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an **Intuition test.**
      cost: 5 Malice
      icon: ❇️
      name: Resonating Croak
      power_roll:
        tiers:
            high: No effect.
            low: 5 sonic damage; slowed (EoT)
            mid: 4 sonic damage
    - body: An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Rainfall
flavor: At the start of any angulotl's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Angulotl Malice
scc: mcdm.monsters.v1/monster.angulotls/angulotl-malice
type: featureblock
---

# Leapfrog

---

At the start of any angulotl's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Leapfrog (3 Malice)**
>
> Until the end of the round, when an angulotl moves through an inactive angulotl's space, the inactive angulotl can use a free triggered action to jump 3 squares.

> ❇️ **Resonating Croak (5 Malice)**
>
> Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an **Intuition test.**
>
> - **≤11:** 5 sonic damage; slowed (EoT)
> - **12-16:** 4 sonic damage
> - **17+:** No effect.

> 🌀 **Rainfall (7 Malice)**
>
> An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.
