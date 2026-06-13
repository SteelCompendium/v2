---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The pool must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see **Explosive Reaction** below).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.
    - distance: 3 burst
      icon: ❗️
      keywords:
        - Area
      name: Explosive Reaction
      power_roll:
        formula: + 2
        tiers:
            high: 9 fire damage; M < 3 the target is burning (save ends)
            low: 3 fire damage; M < 1 the target is burning (save ends)
            mid: 6 fire damage; M < 2 the target is burning (save ends)
      sections:
        - label: Trigger
          text: The pool takes fire damage.
        - label: Effect
          text: The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.
      icon: ⭐️
      name: Allied Awareness
flavor: This shallow pool bubbles with acid or some other corrosive liquid.
level: 2
name: Corrosive Pool
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/corrosive-pool
stats:
    - name: EV
      value: 3 per 10 x 10 pool
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of difficult terrain
    - name: Immunity
      value: 20 to all damage except cold or fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

This shallow pool bubbles with acid or some other corrosive liquid.

- **EV:** 3 per 10 x 10 pool
- **Stamina:** 12 per square
- **Size:** One or more squares of difficult terrain
- **Immunity:** 20 to all damage except cold or fire damage

> 🌀 **Deactivate**
>
> The pool must be completely destroyed.

> ❕ **Activate**
>
> A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see **Explosive Reaction** below).
>
> **Effect:** A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.

> ❗️ **Explosive Reaction**
>
> | **Area**       |                   **Free triggered action** |
> |----------------|--------------------------------------------:|
> | **📏 3 burst** | **🎯 Each creature and object in the area** |
>
> **Trigger:** The pool takes fire damage.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 fire damage; M < 1 the target is burning (save ends)
> - **12-16:** 6 fire damage; M < 2 the target is burning (save ends)
> - **17+:** 9 fire damage; M < 3 the target is burning (save ends)
>
> **Effect:** The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.

> ⭐️ **Allied Awareness**
>
> Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.
