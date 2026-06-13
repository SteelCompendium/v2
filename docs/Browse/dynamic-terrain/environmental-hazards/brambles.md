---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of brambles must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters a square of brambles without shifting.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A creature takes 1 damage per square of brambles they enter.
    - body: '**Poisonous Thorns (+1 EV)** The brambles are poisonous. Any creature who takes damage from brambles is also bleeding (save ends).'
      icon: ⭐️
      name: Upgrade
flavor: This thicket features close-growing vines tipped with sharp thorns.
level: 1
name: Brambles
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/brambles
stats:
    - name: EV
      value: 1 per 10 x 10 thicket
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of difficult terrain
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

This thicket features close-growing vines tipped with sharp thorns.

- **EV:** 1 per 10 x 10 thicket
- **Stamina:** 3 per square
- **Size:** One or more squares of difficult terrain

> 🌀 **Deactivate**
>
> Each square of brambles must be individually destroyed.

> ❕ **Activate**
>
> A creature enters a square of brambles without shifting.
>
> **Effect:** A creature takes 1 damage per square of brambles they enter.

> ⭐️ **Upgrade**
>
> **Poisonous Thorns (+1 EV)** The brambles are poisonous. Any creature who takes damage from brambles is also bleeding (save ends).
