---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The ashen hoarder moves up to their speed and can make a free strike against two targets.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Relentless Strikes
    - body: The ashen hoarder summons a 10 wall of bones and blades into unoccupied squares within 5 squares of them. Each square of the wall has 5 Stamina. An enemy who comes adjacent to the wall for the first time in a round or starts their turn there takes 3 damage.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Blade Wall
    - body: The ashen hoarder takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The ashen hoarder launches bone lances into the air, raining them down on enemies and impaling those unlucky enough to be on the receiving end. Each enemy within 20 squares of the ashen hoarder makes an **Agility test**.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Bone Storm
      power_roll:
        tiers:
            high: 6 damage
            low: 14 damage; restrained and bleeding (save ends)
            mid: 11 damage; bleeding (EoT)
flavor: At the start of an ashen hoarder's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ashen Hoarder Malice
scc: mcdm.monsters.v1/monster.ashen-hoarder/ashen-hoarder-malice
type: featureblock
---

# Relentless Strikes

---

At the start of an ashen hoarder's turn, you can spend Malice to activate one of the following features.

> 👤 **Relentless Strikes (3 Malice)**
>
> The ashen hoarder moves up to their speed and can make a free strike against two targets.

> 🔳 **Blade Wall (5 Malice)**
>
> The ashen hoarder summons a 10 wall of bones and blades into unoccupied squares within 5 squares of them. Each square of the wall has 5 Stamina. An enemy who comes adjacent to the wall for the first time in a round or starts their turn there takes 3 damage.

> ☠️ **Solo Action (5 Malice)**
>
> The ashen hoarder takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🔳 **Bone Storm (7 Malice)**
>
> The ashen hoarder launches bone lances into the air, raining them down on enemies and impaling those unlucky enough to be on the receiving end. Each enemy within 20 squares of the ashen hoarder makes an **Agility test**.
>
> - **≤11:** 14 damage; restrained and bleeding (save ends)
> - **12-16:** 11 damage; bleeding (EoT)
> - **17+:** 6 damage
