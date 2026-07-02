---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 3
name: Triggered Actions and Free Triggered Actions
scc: mcdm.heroes.v1/rule.combat/triggered-action
type: rule
---

# Triggered Actions and Free Triggered Actions

---

Your hero might have one or more unique triggered actions, each of which has a specified trigger that allows the action to be used. You can use one triggered action per round, either on your [turn](turn.md) or another creature's [turn](turn.md), but only when the action's trigger occurs. For instance, a [fury](../../class/fury.md) hero can use the [Lines of Force](../../feature/ability/fury/level-1/lines-of-force.md) triggered action to [force move](../../movement/forced-movement.md) a target, but only after an enemy has first tried to [force move](../../movement/forced-movement.md) the [fury](../../class/fury.md) or another nearby creature.

A free triggered action follows the same rules as a triggered action, but it doesn't count against your limit of one triggered action per round. For instance, a [shadow](../../class/shadow.md) hero can use their [Hesitation Is Weakness](../../feature/ability/shadow/level-1/hesitation-is-weakness.md) ability to take their [turn](turn.md) in response to the trigger of another hero ending their [turn](turn.md). But because that ability is a free triggered action, the [shadow](../../class/shadow.md) can still use their In All This Confusion triggered action later in the round.

If multiple triggered actions occur in response to the same trigger, any heroes and other player-controlled creatures taking a triggered action or a free triggered action decide among themselves which of those triggered actions are resolved first. Then the Director decides the same for creatures they control.

Any effect that prevents you from using triggered actions also prevents you from using free triggered actions.
