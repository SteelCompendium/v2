---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: "**Area, Ranged, Weapon** |   **Maneuver** | |--------------------------|---------------:| | **\U0001F4CF 1 cube within 3**   | **\U0001F3AF Special** |"
      cost: 3 Malice
      icon: "\U0001F533"
      name: Net Trap
      power_roll:
        tiers:
            high: No effect.
            low: Restrained (save ends).
            mid: Restrained (Eot).
      sections:
        - label: Effect
          text: A lizardfolk acting this turn sets up a net trap into the area. The first time an enemy steps into a square with a net trap, they make an **Agility test**. If the creature was unaware of the trap, they take a bane on the test.
        - label: Effect
          text: Any creature not also restrained by a net trap who is adjacent to a creature restrained by the trap can free them as a maneuver.
    - body: A lizardfolk acting this turn unearths a magical size 2 pit that is 2 squares deep and filled with water. Any lizardfolk who moves into, then exits the pit on their turn gains 10 temporary Stamina, regrows their tail if applicable, and ends one effect on them that can be ended by a saving throw. While adjacent to the pit, any creature who can burrow or who has the Nature skill can make a **Might test** or a **Reason test** to drain it.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Water Pit
      power_roll:
        tiers:
            high: The pit empties of water.
            low: The creature falls into the pit and is knocked prone.
            mid: The creature fails to empty the pit.
    - body: Waist-high water floods the entire encounter map. Any lizardfolk submerged in water gains an edge on abilities and doubles their speed while swimming. If there are no open water pits on the encounter map, the water drains away at the end of the round.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Flood the Shores
flavor: At the start of any lizardfolk's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lizardfolk Malice
scc: mcdm.monsters.v1/monster.lizardfolk/lizardfolk-malice
type: featureblock
---

# Net Trap

---

At the start of any lizardfolk's turn, you can spend Malice to activate one of the following features.

> 🔳 **Net Trap (3 Malice)**
>
>  **Area, Ranged, Weapon** |   **Maneuver** |
> |--------------------------|---------------:|
> | **📏 1 cube within 3**   | **🎯 Special** |
>
> **Effect:** A lizardfolk acting this turn sets up a net trap into the area. The first time an enemy steps into a square with a net trap, they make an **Agility test**. If the creature was unaware of the trap, they take a bane on the test.
>
> - **≤11:** Restrained (save ends).
> - **12-16:** Restrained (Eot).
> - **17+:** No effect.
>
> **Effect:** Any creature not also restrained by a net trap who is adjacent to a creature restrained by the trap can free them as a maneuver.

> 🔳 **Water Pit (5 Malice)**
>
> A lizardfolk acting this turn unearths a magical size 2 pit that is 2 squares deep and filled with water. Any lizardfolk who moves into, then exits the pit on their turn gains 10 temporary Stamina, regrows their tail if applicable, and ends one effect on them that can be ended by a saving throw. While adjacent to the pit, any creature who can burrow or who has the Nature skill can make a **Might test** or a **Reason test** to drain it.
>
> - **≤11:** The creature falls into the pit and is knocked prone.
> - **12-16:** The creature fails to empty the pit.
> - **17+:** The pit empties of water.

> 🌀 **Flood the Shores (7 Malice)**
>
> Waist-high water floods the entire encounter map. Any lizardfolk submerged in water gains an edge on abilities and doubles their speed while swimming. If there are no open water pits on the encounter map, the water drains away at the end of the round.
