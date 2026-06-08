---
name: Potencies
scc: mcdm.heroes.v1/rule.character/potency
type: rule
---

# Potencies

---

Many abilities and other effects impose conditions and unique statuses on targets. But creatures sometimes get a chance to resist such effects. After all, a monster with a high Might should be harder to knock [prone](../../condition/prone.md) most of the time than a creature lacking in that characteristic.

Ability effects that have a **potency** are applied to a target only if the effect's potency value is higher than the target's indicated characteristic score. The characteristic a target uses to resist a potency is based on the ability used, while the value of the potency for your hero's abilities is based on one of your characteristics and determined by your class.

Your character has a **weak**, an **average**, and a **strong** potency value, as follows:

- Your weak potency value is equal to your highest characteristic score − 2.
- Your average potency value is equal to your highest characteristic score − 1.
- Your strong potency value is equal to your highest characteristic score.

In abilities and other effects, a potency always appears as the single-letter abbreviation for the target's characteristic: M for Might, A for Agility, R for Reason, I for Intuition, or P for Presence. That characteristic is followed by a "less than" sign (<) and your potency value—for example, M < WEAK or R < AVERAGE -with the value indicating the minimum score in that characteristic that the target needs to beat the effect.

As an example, consider the [conduit's](../../class/conduit.md) Judgment's Hammer ability, which has the following power roll:

**Power Roll + Intuition:**

- **≤11:** 3 + I holy damage; A < WEAK, [prone](../../condition/prone.md)
- **12-16:** 6 + I holy damage; A < AVERAGE, [prone](../../condition/prone.md)
- **17+:** 9 + I holy damage; A < STRONG, [prone](../../condition/prone.md) and can't stand (save ends)

At 1st level, a [conduit](../../class/conduit.md) uses their Intuition score to determine their potency values, and that score is 2. That gives the [conduit](../../class/conduit.md) the following potencies:

- Weak: 0
- Average: 1
- Strong: 2

When writing Judgment's Hammer on their character sheet, the [conduit's](../../class/conduit.md) player updates the damage and converts the weak, average, and strong potencies into their numerical values, knowing that those values won't change until the character hits 2nd echelon and their Intuition score becomes 3. That produces the following:

**Power Roll + Intuition:**

- **≤11:** 5 holy damage; A < 0, [prone](../../condition/prone.md)
- **12-16:** 8 holy damage; A < 1, [prone](../../condition/prone.md)
- **17+:** 11 holy damage; A < 2, [prone](../../condition/prone.md) and can't stand (save ends)

During a game session, the [conduit](../../class/conduit.md) uses Judgment's Hammer to target a bandit with an Agility score of 0. The ability thus has the following outcomes at each tier:

- With a tier 1 outcome (11 or lower), the ability deals 5 holy damage to the bandit. But the bandit resists the additional effect because they have Agility 0 (and therefore don't have an Agility of less than 0).
- With a tier 2 outcome (12-16), the ability deals 8 holy damage. But the bandit is also knocked [prone](../../condition/prone.md), unable to resist the additional effect because they would need an Agility of 1 or higher to do so. If the bandit had Agility 1 or higher, they would have taken 8 holy damage but stayed standing.
- With a tier 3 outcome (17 or higher), the bandit takes 11 holy damage and is knocked flat and left struggling to stand, unable to resist the strong potency of the additional effect with a mere Agility 0.

## Potency Presentation

Potencies are presented in an abbreviated style in abilities so they don't take up too much space, and so you can read them by saying: "If the target's [characteristic] is less than [potency value], they [suffer effect]." If our 1st-level [conduit](../../class/conduit.md) obtained a tier 2 outcome when using Judgment's Hammer, the player would say, "I deal 8 holy damage, and if the bandit's Agility is less than 1, they fall [prone](../../condition/prone.md)."

Reading the ability this way prevents a lot of back and forth. You don't need to ask, "What's the target's Agility score?", wait for a response, and then give the outcome. You can simply say, "If they don't have an Agility of 1 or higher, they [fall prone](../../condition/prone.md)." Players can let the Director figure out whether the target [is prone](../../condition/prone.md) and keep the game moving, with the Director doing the same in reverse when monsters and other foes use abilities with potencies against the heroes.

## Adjusting Potencies

Potencies are made for quick resolution at the table, but a number of triggered actions and other abilities—for example, the [censor's](../../class/censor.md) Judgment ability and the [null's](../../class/null.md) [Null Field](../../feature/null/level-1/null-field.md) ability—allow you to manipulate the value of potencies. If you build a hero who can adjust potencies, pay attention during combat! You might be able to help out a friend who needs a little boost to make their ability take full effect, or hinder an enemy about to lock down one of your allies.

## Spending Resources on Potencies

If an ability or feature allows you to spend your Heroic Resource on an effect that is entirely dependent on a potency and the target is unaffected because their characteristic is high enough to resist the potency, then you don't spend the Heroic Resource.

For example, the [tactician's](../../class/tactician.md) Overwatch ability allows the [tactician](../../class/tactician.md) to spend 1 focus to impose the [slowed](../../condition/slowed.md) condition on a target who has R < AVERAGE. Since spending focus this way has no other effect, if the [tactician](../../class/tactician.md) targets a creature whose high Reason leaves them unaffected, the [tactician](../../class/tactician.md) doesn't waste any focus. However, if spending this focus had another automatic effect such as dealing extra damage to the target, the 1 focus would be spent even though the potency was resisted.

This rule also applies to Director-controlled creatures who spend Malice on abilities and features that affect a target using a potency and have no other automatic effects.
