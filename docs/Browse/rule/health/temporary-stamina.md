---
name: Temporary Stamina
scc: mcdm.heroes.v1/rule.health/temporary-stamina
type: rule
---

# Temporary Stamina

---

Some abilities, treasures, and other effects grant a creature temporary Stamina. Temporary Stamina shouldn't be included in a creature's Stamina total when figuring out a creature's recovery value or winded value. If you have temporary Stamina while winded, dying, or dead, the temporary Stamina doesn't change those states.

Whenever you take damage while you have temporary Stamina, the temporary Stamina decreases first, and any leftover damage is applied to your Stamina as usual. For instance, if you have 10 temporary Stamina and take 16 damage, you lose the temporary Stamina and then lose another 6 Stamina.

There is no maximum to how much temporary Stamina you can have. Regaining Stamina can't restore temporary Stamina. If you have temporary Stamina and then gain more temporary Stamina, you get whichever amount of temporary Stamina is greater, rather than adding the two pools together. For instance, if an ability grants you 10 temporary Stamina when you already have 5, you have 10 temporary Stamina, not 15.

Unless otherwise indicated, temporary Stamina disappears at the end of an encounter.
