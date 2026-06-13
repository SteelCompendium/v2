---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The watchtower must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: Creatures who have access to the watchtower's interior ladders or stairs have high ground and cover against creatures outside the watchtower.
      icon: ⭐️
      name: High Ground and Cover
    - body: A creature outside and adjacent to the watchtower can gain access to the interior by climbing it as an **Agility test** or breaking into it with a **Might test**.
      icon: "\U0001F300"
      name: Getting Inside
      power_roll:
        tiers:
            high: The creature gains access to the watchtower.
            low: 1d6 damage; the creature remains outside the watchtower
            mid: The creature remains outside the watchtower.
    - body: |-
        **Ballista Emplacement (+12 EV)** The watchtower is equipped with a field ballista that can be used by creatures in the watchtower. The ballista can't be moved.

        **Boiling Oil Cauldron (+17 EV)** The watchtower is equipped with a boiling oil cauldron that can be used by creatures in the watchtower.

        **Spyglass (+2 EV)** Any creature in the watchtower can use the spyglass to search for hidden creatures around the tower, gaining an edge on the Intuition test and increasing the distance at which creatures can be spotted to 15 squares.

        **Stone Tower (+2 EV)** The watchtower is reinforced with stone and has 75 Stamina.

        **Iron Tower (+4 EV)** The watchtower is reinforced with stone and iron and has 100 Stamina.
      icon: ⭐️
      name: Upgrades
flavor: A sturdy wooden tower accessed by interior ladders or stairs provides cover and high ground for attackers.
level: 2
name: Watchtower
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/watchtower
stats:
    - name: EV
      value: "8"
    - name: Stamina
      value: "50"
    - name: Size
      value: "3"
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A sturdy wooden tower accessed by interior ladders or stairs provides cover and high ground for attackers.

- **EV:** 8
- **Stamina:** 50
- **Size:** 3

> 🌀 **Deactivate**
>
> The watchtower must be completely destroyed.

> ⭐️ **High Ground and Cover**
>
> Creatures who have access to the watchtower's interior ladders or stairs have high ground and cover against creatures outside the watchtower.

> 🌀 **Getting Inside**
>
> A creature outside and adjacent to the watchtower can gain access to the interior by climbing it as an **Agility test** or breaking into it with a **Might test**.
>
> - **≤11:** 1d6 damage; the creature remains outside the watchtower
> - **12-16:** The creature remains outside the watchtower.
> - **17+:** The creature gains access to the watchtower.

> ⭐️ **Upgrades**
>
> **Ballista Emplacement (+12 EV)** The watchtower is equipped with a field ballista that can be used by creatures in the watchtower. The ballista can't be moved.
>
> **Boiling Oil Cauldron (+17 EV)** The watchtower is equipped with a boiling oil cauldron that can be used by creatures in the watchtower.
>
> **Spyglass (+2 EV)** Any creature in the watchtower can use the spyglass to search for hidden creatures around the tower, gaining an edge on the Intuition test and increasing the distance at which creatures can be spotted to 15 squares.
>
> **Stone Tower (+2 EV)** The watchtower is reinforced with stone and has 75 Stamina.
>
> **Iron Tower (+4 EV)** The watchtower is reinforced with stone and iron and has 100 Stamina.
