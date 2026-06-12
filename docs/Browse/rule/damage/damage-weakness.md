---
printing: "1.01b"
printing_book: "Heroes"
name: Damage Weakness
scc: mcdm.heroes.v1/rule.damage/damage-weakness
type: rule
---

# Damage Weakness

---

Damage weakness works like [damage immunity](damage-immunity.md), except that creatures take extra damage whenever they take damage of the indicated type. For instance, if a creature has fire weakness 5 and is dealt 10 fire damage, they take 15 fire damage instead.

A creature who has "damage weakness X" with no specific type or keyword indicated has weakness of the indicated amount when they take damage of any type.

If a creature has both [damage immunity](damage-immunity.md) and damage weakness for a source of damage, apply the weakness first, then the immunity.

If multiple damage weaknesses apply to a source of damage, only the weakness with the highest value applies.
