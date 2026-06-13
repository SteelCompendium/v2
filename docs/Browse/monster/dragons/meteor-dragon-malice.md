---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The next time the dragon uses their Crescent Claws ability, they can also slide the target up to 5 squares. If the target is dragonsealed, the dragon can vertical slide them instead.
      cost: 3 Malice
      icon: ⭐️
      name: Liftoff
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is difficult terrain, and each creature and object in the area when it appears makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Starfall
      power_roll:
        tiers:
            high: 10 holy damage
            low: 20 holy damage; slowed (save ends), prone
            mid: 16 holy damage; slowed (save ends)
    - body: A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M < 5 and each object of size 3 or smaller is vertical pulled 2 squares toward the area at the start of each round, ignoring stability. Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon's Voidlight Breath ability, and the black hole disappears.
      cost: 10 Malice
      icon: ☠️
      name: Event Horizon
flavor: At the start of a meteor dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Meteor Dragon Malice
scc: mcdm.monsters.v1/monster.dragons/meteor-dragon-malice
type: featureblock
---

# Liftoff

---

At the start of a meteor dragon's turn, you can spend Malice to activate one of the following features.

> ⭐️ **Liftoff (3 Malice)**
>
> The next time the dragon uses their Crescent Claws ability, they can also slide the target up to 5 squares. If the target is dragonsealed, the dragon can vertical slide them instead.

> ☠️ **Solo Action (5 Malice)**
>
> The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.

> 🔳 **Starfall (5 Malice)**
>
> The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is difficult terrain, and each creature and object in the area when it appears makes an **Agility test**.
>
> - **≤11:** 20 holy damage; slowed (save ends), prone
> - **12-16:** 16 holy damage; slowed (save ends)
> - **17+:** 10 holy damage

> ☠️ **Event Horizon (10 Malice)**
>
> A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M < 5 and each object of size 3 or smaller is vertical pulled 2 squares toward the area at the start of each round, ignoring stability. Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon's Voidlight Breath ability, and the black hole disappears.
