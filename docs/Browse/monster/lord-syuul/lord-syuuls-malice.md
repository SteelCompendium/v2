---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Lord Syuul projects a psionic screen over his body, preventing other creatures from treating him as an enemy until the end of his next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guise
    - body: Lord Syuul psionically plunders the minds of each creature within 2 squares of him. Each such creature makes a **Reason test**.
      cost: 5 Malice
      icon: ❇️
      name: Do It for Me
      power_roll:
        tiers:
            high: No effect.
            low: 13 psychic damage; the target uses a signature ability against a creature of Lord Syuul's choice
            mid: 10 psychic damage; the target makes a free strike against a creature of Lord Syuul's choice
    - body: Lord Syuul takes an additional main action on his turn. He can use this feature even if he is dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: |-
        Lord Syuul sends out a psionic burst to completely overpower his greatest threats. He makes a **Reason test** (2d10 + 4).

        Once per round as a maneuver, Lord Syuul can repeat this test, replacing the previous Overpower effect.

        Whenever an Overpower effect is active, any hero who has one or more psionic abilities can use a maneuver to push back by making a **Reason test**, replacing the previous Overpower effect.

        The Overpower effect lasts until the end of the encounter.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Overpower
      power_roll:
        tiers:
            high: Lord Syuul has damage weakness 5.
            low: Lord Syuul has damage immunity 5.
            mid: Lord Syuul has damage immunity 2.
flavor: At the start of Lord Syuul's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lord Syuul's Malice
scc: mcdm.monsters.v1/monster.lord-syuul/lord-syuuls-malice
type: featureblock
---

# Guise

---

At the start of Lord Syuul's turn, you can spend Malice to activate one of the following features.

> 👤 **Guise (3 Malice)**
>
> Lord Syuul projects a psionic screen over his body, preventing other creatures from treating him as an enemy until the end of his next turn.

> ❇️ **Do It for Me (5 Malice)**
>
> Lord Syuul psionically plunders the minds of each creature within 2 squares of him. Each such creature makes a **Reason test**.
>
> - **≤11:** 13 psychic damage; the target uses a signature ability against a creature of Lord Syuul's choice
> - **12-16:** 10 psychic damage; the target makes a free strike against a creature of Lord Syuul's choice
> - **17+:** No effect.

> ☠️ **Solo Action (5 Malice)**
>
> Lord Syuul takes an additional main action on his turn. He can use this feature even if he is dazed.

> 🌀 **Overpower (7 Malice)**
>
> Lord Syuul sends out a psionic burst to completely overpower his greatest threats. He makes a **Reason test** (2d10 + 4).
>
> - **≤11:** Lord Syuul has damage weakness 5.
> - **12-16:** Lord Syuul has damage immunity 2.
> - **17+:** Lord Syuul has damage immunity 5.
>
> Once per round as a maneuver, Lord Syuul can repeat this test, replacing the previous Overpower effect.
>
> Whenever an Overpower effect is active, any hero who has one or more psionic abilities can use a maneuver to push back by making a **Reason test**, replacing the previous Overpower effect.
>
> - **≤11:** Lord Syuul has damage immunity 5.
> - **12-16:** Lord Syuul has damage immunity 2.
> - **17+:** Lord Syuul has damage weakness 5.
>
> The Overpower effect lasts until the end of the encounter.
