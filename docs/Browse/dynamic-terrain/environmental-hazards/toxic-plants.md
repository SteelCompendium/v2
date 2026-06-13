---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of plants must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without shifting.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Sleep Spores** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Magic
        - Melee
        - Strike
      name: Sleep Spores
      power_roll:
        formula: + 2
        tiers:
            high: M < 2 dazed (save ends)
            low: M < 0 dazed (save ends)
            mid: M < 1 dazed (save ends)
      sections:
        - label: Trigger
          text: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without shifting.
        - label: Effect
          text: While dazed this way, a target who starts their turn in the area of the toxic plants falls prone and can't stand.
      target: The triggering creature
      usage: Free triggered action
    - body: |-
        **Poisonous Spores (+2 EV)** Any creature dazed by this hazard takes 1d6 poison damage at the start of each of their turns.

        **Carnivorous Plants (+2 EV)** The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn prone in the area takes 4 acid damage.
      icon: ⭐️
      name: Upgrades
flavor: Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.
level: 2
name: Toxic Plants
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/toxic-plants
stats:
    - name: EV
      value: 2 per 10 x 10 field
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.

- **EV:** 2 per 10 x 10 field
- **Stamina:** 3 per square
- **Size:** One or more squares

> 🌀 **Deactivate**
>
> Each square of plants must be individually destroyed.

> ❕ **Activate**
>
> A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without shifting.
>
> **Effect:** The **Sleep Spores** ability.

> ❗️ **Sleep Spores**
>
> | **Magic, Melee, Strike** |      **Free triggered action** |
> |--------------------------|-------------------------------:|
> | **📏 Melee 0**           | **🎯 The triggering creature** |
>
> **Trigger:** A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without shifting.
>
> **Power Roll + 2:**
>
> - **≤11:** M < 0 dazed (save ends)
> - **12-16:** M < 1 dazed (save ends)
> - **17+:** M < 2 dazed (save ends)
>
> **Effect:** While dazed this way, a target who starts their turn in the area of the toxic plants falls prone and can't stand.

> ⭐️ **Upgrades**
>
> **Poisonous Spores (+2 EV)** Any creature dazed by this hazard takes 1d6 poison damage at the start of each of their turns.
>
> **Carnivorous Plants (+2 EV)** The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn prone in the area takes 4 acid damage.
