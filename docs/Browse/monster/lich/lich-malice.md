---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The lich makes a free strike against one enemy within 20 squares. They then gain an edge on their next power roll.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Soul Sip
    - body: The lich takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The lich summons a swirling cloud of angry spirits to surround them until the start of the next round. Any creature who deals damage to the lich with a melee strike while the spirit shell is active makes a **Presence test**.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Spirit Shell
      power_roll:
        tiers:
            high: No effect.
            low: 16 psychic damage, dazed (save ends)
            mid: Dazed (save ends)
    - body: |-
        The lich summons a mind-altering mist, turns invisible until the start of their next turn, and moves up to half their speed. Each enemy within 20 squares of the lich's starting point who has I < 4 is deceived. While deceived, a creature perceives all allies and enemies as the lich, and perceives the environment as an unfamiliar wasteland corrupted by necrotic blight. If other creatures attempt to communicate with a deceived creature, that creature interprets their words as ghastly taunts in the lich's voice.

        This effect lasts until an affected creature takes damage or an ally uses a main action to shake them out of it. Each time this feature is used during an encounter, the distance of the effect decreases by 5 squares (to a minimum of 5 squares) and the potency increases by 1.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Cloud of Deceit
flavor: At the start of a lich's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lich Malice
scc: mcdm.monsters.v1/monster.lich/lich-malice
type: featureblock
---

# Soul Sip

---

At the start of a lich's turn, you can spend Malice to activate one of the following features.

> 👤 **Soul Sip (3 Malice)**
>
> The lich makes a free strike against one enemy within 20 squares. They then gain an edge on their next power roll.

> ☠️ **Solo Action (5 Malice)**
>
> The lich takes an additional main action on their turn. They can use this feature even if they are dazed.

> 👤 **Spirit Shell (5 Malice)**
>
> The lich summons a swirling cloud of angry spirits to surround them until the start of the next round. Any creature who deals damage to the lich with a melee strike while the spirit shell is active makes a **Presence test**.
>
> - **≤11:** 16 psychic damage, dazed (save ends)
> - **12-16:** Dazed (save ends)
> - **17+:** No effect.

> 🌀 **Cloud of Deceit (7 Malice)**
>
> The lich summons a mind-altering mist, turns invisible until the start of their next turn, and moves up to half their speed. Each enemy within 20 squares of the lich's starting point who has I < 4 is deceived. While deceived, a creature perceives all allies and enemies as the lich, and perceives the environment as an unfamiliar wasteland corrupted by necrotic blight. If other creatures attempt to communicate with a deceived creature, that creature interprets their words as ghastly taunts in the lich's voice.
>
> This effect lasts until an affected creature takes damage or an ally uses a main action to shake them out of it. Each time this feature is used during an encounter, the distance of the effect decreases by 5 squares (to a minimum of 5 squares) and the potency increases by 1.
