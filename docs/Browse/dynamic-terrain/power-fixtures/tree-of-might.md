---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The tree of might must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: At the start of each round while the tree of might is intact, each enemy touching the ground in the encounter area who has M < 0 takes 10 corruption damage, and the tree of might grows a fruit. The potency increases by 1 each subsequent round.
      icon: ⭐️
      name: Tree's Nourishment
    - body: Once per round, any creature adjacent to the tree of might can take a fruit from the tree and eat it (no action required). The creature gains 10 temporary Stamina and has their Might score increased by 1 (to a maximum of 6) until the end of the encounter.
      icon: ⭐️
      name: Mighty Fruit
flavor: A gnarled tree has unearthed roots that writhe and curl.
level: 5
name: Tree of Might
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.power-fixtures/tree-of-might
stats:
    - name: EV
      value: "14"
    - name: Stamina
      value: "60"
    - name: Size
      value: "3"
    - name: Immunity
      value: 5 to all damage except corruption or fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Deactivate

---

A gnarled tree has unearthed roots that writhe and curl.

- **EV:** 14
- **Stamina:** 60
- **Size:** 3
- **Immunity:** 5 to all damage except corruption or fire damage

> 🌀 **Deactivate**
>
> The tree of might must be completely destroyed.

> ⭐️ **Tree's Nourishment**
>
> At the start of each round while the tree of might is intact, each enemy touching the ground in the encounter area who has M < 0 takes 10 corruption damage, and the tree of might grows a fruit. The potency increases by 1 each subsequent round.

> ⭐️ **Mighty Fruit**
>
> Once per round, any creature adjacent to the tree of might can take a fruit from the tree and eat it (no action required). The creature gains 10 temporary Stamina and has their Might score increased by 1 (to a maximum of 6) until the end of the encounter.
