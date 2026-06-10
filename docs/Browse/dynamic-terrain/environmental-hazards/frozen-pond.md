---
ev: 1 per 10 x 10 pond
immunity: 5 to all damage except fire damage
level: "1"
name: Frozen Pond
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/frozen-pond
size: One or more squares of difficult terrain
stamina: 3 per square
type: dynamic-terrain
---

# Frozen Pond

---

A shallow, frozen patch of water features ice thick enough that it won't break, but its surface is slick and treacherous to navigate.

- **EV:** 1 per 10 x 10 pond
- **Stamina:** 3 per square
- **Size:** One or more squares of difficult terrain
- **Immunity:** 5 to all damage except fire damage

> 🌀 **Deactivate**
>
> Destroying a square of the frozen pond turns the square into shallow icy water.

> ❕ **Activate**
>
> A creature or object enters a square of the frozen pond without shifting.
>
> **Effect:** The **Slippery Surface** ability.

> ❗️ **Slippery Surface**
>
> | **Melee, Strike** |                **Free triggered action** |
> |-------------------|-----------------------------------------:|
> | **📏 Melee 0**    | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object enters a square of the frozen pond without shifting.
>
> **Power Roll + 2:**
>
> - **≤11:** Push 1 in the direction the target was moving
> - **12-16:** Push 2 in the direction the target was moving; A < 1 slowed (save ends)
> - **17+:** Push 3 in the direction the target was moving; A < 2 prone and can't stand (save ends)
>
> **Effect:** The triggering creature's movement ends, then they are force moved. If the target triggered this ability by being force moved, this ability gains an edge and any remaining forced movement distance is added to the ability's forced movement. The ability's forced movement doesn't trigger the ability again.

> ⭐️ **Upgrade**
>
> **Thin Ice (+1 EV)** The ice covering the pond is thin and the water is deeper. Whenever a creature or object enters or falls prone in a square of the frozen pond, that square is destroyed and replaced with icy water. The **Icy Water** ability replaces **Slippery Surface**.
>
> Any creature who starts their turn in the icy water takes 1 cold damage. If the water is deep enough, a creature can swim beneath the surface of the frozen pond, but takes this cold damage while doing so.

❗️ **Icy Water**

> **Power Roll + 2:**
>
> | **Melee, Strike** |                **Free triggered action** |
> |-------------------|-----------------------------------------:|
> | **📏 Melee 0**    | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object enters or falls prone in a square of the frozen pond.
>
> - **≤11:** Slide 1
> - **12-16:** 1 cold damage; M < 1 slowed (save ends)
> - **17+:** 3 cold damage; M < 2 restrained (save ends)
>
> **Effect:** The triggering creature's movement ends, then they are force moved if applicable.
