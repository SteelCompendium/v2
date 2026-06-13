---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One troll acting this turn spews out a half-digested meal in a 5 x 1 line within 1 square of them. Each troll in the area regains 3 Stamina. Each enemy in the area makes a **Might test**.
      cost: 3 Malice
      icon: "\U0001F533"
      name: Foul Spew
      power_roll:
        tiers:
            high: 6 acid damage
            low: 12 acid damage; dazed (EoT)
            mid: 10 acid damage; weakened (EoT)
    - body: Each troll in the encounter can make a free strike against a creature adjacent to them, and regains Stamina equal to the damage dealt.
      cost: 5 Malice
      icon: "\U0001F5E1"
      name: Emergency Meal
    - body: Each winded troll in the encounter disgorges the contents of their stomach onto the ground around them, creating a 1 burst of foul vomitus that lasts until the end of the encounter. Each non-troll who enters this area for the first time in a round or starts their turn there takes 5 acid damage. Each troll in the area has a double edge on power rolls.
      cost: 7 Malice
      icon: ❇️
      name: Bloody Banquet
flavor: At the start of any troll's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Troll Malice
scc: mcdm.monsters.v1/monster.trolls/troll-malice
type: featureblock
---

# Foul Spew

---

At the start of any troll's turn, you can spend Malice to activate one of the following features.

> 🔳 **Foul Spew (3 Malice)**
>
> One troll acting this turn spews out a half-digested meal in a 5 x 1 line within 1 square of them. Each troll in the area regains 3 Stamina. Each enemy in the area makes a **Might test**.
>
> - **≤11:** 12 acid damage; dazed (EoT)
> - **12-16:** 10 acid damage; weakened (EoT)
> - **17+:** 6 acid damage

> 🗡 **Emergency Meal (5 Malice)**
>
> Each troll in the encounter can make a free strike against a creature adjacent to them, and regains Stamina equal to the damage dealt.

> ❇️ **Bloody Banquet (7 Malice)**
>
> Each winded troll in the encounter disgorges the contents of their stomach onto the ground around them, creating a 1 burst of foul vomitus that lasts until the end of the encounter. Each non-troll who enters this area for the first time in a round or starts their turn there takes 5 acid damage. Each troll in the area has a double edge on power rolls.
