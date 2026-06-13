---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The psionic shard must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A psionic shard is attuned to one side in an encounter. While a psionic shard is intact, any damage dealt to each ally of the shard in the encounter is halved.
      icon: ⭐️
      name: Psionic Barrier
    - distance: Special
      icon: ❗️
      keywords:
        - '-'
      name: Psionic Pulse
      sections:
        - label: Trigger
          text: The shard is destroyed.
        - label: Effect
          text: The shard releases a shockwave channeled through each creature affected by Psionic Barrier. Each ally in the encounter is dazed until the end of their next turn.
      target: Special
      usage: Free triggered action
flavor: A massive humming crystal makes the air around it feel thick.
level: 5
name: Psionic Shard
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.power-fixtures/psionic-shard
stats:
    - name: EV
      value: "7"
    - name: Stamina
      value: "40"
    - name: Size
      value: "2"
terrain_type: Fortification
type: dynamic-terrain
---

# Deactivate

---

A massive humming crystal makes the air around it feel thick.

- **EV:** 7
- **Stamina:** 40
- **Size:** 2

> 🌀 **Deactivate**
>
> The psionic shard must be completely destroyed.

> ⭐️ **Psionic Barrier**
>
> A psionic shard is attuned to one side in an encounter. While a psionic shard is intact, any damage dealt to each ally of the shard in the encounter is halved.

> ❗️ **Psionic Pulse**
>
> | **-**          | **Free triggered action** |
> |----------------|--------------------------:|
> | **📏 Special** |            **🎯 Special** |
>
> **Trigger:** The shard is destroyed.
>
> **Effect:** The shard releases a shockwave channeled through each creature affected by Psionic Barrier. Each ally in the encounter is dazed until the end of their next turn.
