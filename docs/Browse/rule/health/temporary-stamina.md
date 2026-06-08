---
name: Temporary Stamina
scc: mcdm.heroes.v1/rule.health/temporary-stamina
type: rule
---

# Temporary Stamina

---

Some abilities, treasures, and other effects grant a creature temporary [Stamina](stamina.md). Temporary [Stamina](stamina.md) shouldn't be included in a creature's [Stamina](stamina.md) total when figuring out a creature's [recovery value](recoveries.md) or [winded](winded.md) value. If you have temporary [Stamina](stamina.md) while [winded](winded.md), [dying](dying.md), or dead, the temporary [Stamina](stamina.md) doesn't change those states.

Whenever you take damage while you have temporary [Stamina](stamina.md), the temporary [Stamina](stamina.md) decreases first, and any leftover damage is applied to your [Stamina](stamina.md) as usual. For instance, if you have 10 temporary [Stamina](stamina.md) and take 16 damage, you lose the temporary [Stamina](stamina.md) and then lose another 6 [Stamina](stamina.md).

There is no maximum to how much temporary [Stamina](stamina.md) you can have. Regaining [Stamina](stamina.md) can't restore temporary [Stamina](stamina.md). If you have temporary [Stamina](stamina.md) and then gain more temporary [Stamina](stamina.md), you get whichever amount of temporary [Stamina](stamina.md) is greater, rather than adding the two pools together. For instance, if an ability grants you 10 temporary [Stamina](stamina.md) when you already have 5, you have 10 temporary [Stamina](stamina.md), not 15.

Unless otherwise indicated, temporary [Stamina](stamina.md) disappears at the end of an encounter.
