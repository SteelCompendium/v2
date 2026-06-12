---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
name: Stamina
scc: mcdm.heroes.v1/rule.health/stamina
type: rule
---

# Stamina

---

Your hero's survivability is represented by your Stamina. Think of Stamina as a combination of a creature's physical vitality and their overall energy for dodging and resisting incoming blows, spells, and other violence. It's not that every instance of [damage](../damage/damage.md) deals a [bleeding](../../condition/bleeding.md) wound to you, but that each one chips away at your ability to fight effectively. One attack might make you sweat as you leap back to avoid an arrow, while another might graze your elbow with a dagger nick, leaving a dull, distracting pain. Eventually, this draining of energy leaves you open for bigger blows that can truly harm your body—or possibly kill you.

After any [damage](../damage/damage.md) you take is reduced by [damage immunity](../damage/damage-immunity.md) or other effects, your Stamina is reduced by an amount equal to the remaining [damage](../damage/damage.md). Some effects can also reduce your Stamina maximum, limiting the amount of Stamina you can regain.

## Recoveries and Recovery Value {data-scc="mcdm.heroes.v1/rule.health/recoveries"}

Each hero has a number of Recoveries determined by their class. A hero also has a recovery value that equals one-third of their [Stamina](stamina.md) maximum, rounded down. When you use the [Catch Breath](../../feature/common/maneuvers/catch-breath.md) maneuver in combat (see Maneuvers above), you spend a Recovery and regain [Stamina](stamina.md) equal to your recovery value. Outside of combat, you can spend as many Recoveries as you have remaining. Some abilities, items, and other effects allow you to spend a Recovery to regain [Stamina](stamina.md) equal to your recovery value plus a little extra (as described by the effect), or to regain [Stamina](stamina.md) without spending a Recovery.

## Winded {data-scc="mcdm.heroes.v1/rule.health/winded"}

Your winded value equals half your [Stamina](stamina.md) maximum. When your [Stamina](stamina.md) is equal to or less than your winded value, you are winded. Although being winded has no effects on its own, certain ancestry, class, item, title, and monster abilities affect winded creatures.

You can tell when other creatures are winded and vice versa.

## Dying and Death {data-scc="mcdm.heroes.v1/rule.health/dying"}

When your [Stamina](stamina.md) is 0 or lower, you are dying. While dying, you can't use the [Catch Breath](../../feature/common/maneuvers/catch-breath.md) maneuver in combat. Additionally, you are [bleeding](../../condition/bleeding.md), and this instance of the [condition](../combat/condition.md) can't be negated or removed in any way until you are no longer dying. While you are dying, you can still act, your allies can help you spend [Recoveries](recoveries.md) in combat, and you can spend [Recoveries](recoveries.md) out of combat as usual.

While your [Stamina](stamina.md) is lower than 0, if it reaches the negative of your [winded](winded.md) value, you die. When you die, you can't be brought back to life without the use of a special powerful item, such as a Scroll of Resurrection.

## Director-Controlled Creatures

In most circumstances, Director-controlled creatures die or are destroyed when their [Stamina](stamina.md) drops to 0.

### No Recoveries

Director-controlled creatures don't have [Recoveries](recoveries.md) or a [recovery value](recoveries.md). Any such creatures who regain [Stamina](stamina.md) during a battle do so by way of a special item or an ability in their stat block. However, there are times when a hero might wish to use an ability that allows another creature to spend a [Recovery](recoveries.md) or to regain [Stamina](stamina.md) equal to their [recovery value](recoveries.md) on an injured [NPC](../general/npc.md). In such cases, a Director-controlled creature regains [Stamina](stamina.md) equal to one-third of their [Stamina](stamina.md) maximum.

## Knocking Creatures Out

If you damage a creature with an ability that would kill them, you can choose to instead knock them unconscious. If a creature takes damage while unconscious in this way, they die.

Director-controlled creatures remain unconscious for 1 hour if no one does anything to wake them. They then gain 1 [Stamina](stamina.md) and are no longer unconscious.

Heroes remain unconscious for 1 hour if no one does anything to wake them. After 1 hour, they can spend a [Recovery](recoveries.md) and are no longer unconscious. If the hero has no [Recoveries](recoveries.md) left, they can't wake up until they finish a [respite](../resource/respite.md).

### Unconscious

While you are unconscious, you can't take main actions, maneuvers, [triggered actions](../combat/triggered-action.md), free [triggered actions](../combat/triggered-action.md), or [free maneuvers](../combat/free-maneuver.md); your [speed](../character/speed.md) is 0; you are unaware of your surroundings; and you [are prone](../../condition/prone.md). [Ability rolls](../dice/ability-roll.md) against you have a double [edge](../dice/edge.md). If you wake up from being unconscious, you can stand up from prone as a [free maneuver](../combat/free-maneuver.md).

## Temporary Stamina {data-scc="mcdm.heroes.v1/rule.health/temporary-stamina"}

Some abilities, treasures, and other effects grant a creature temporary [Stamina](stamina.md). Temporary [Stamina](stamina.md) shouldn't be included in a creature's [Stamina](stamina.md) total when figuring out a creature's [recovery value](recoveries.md) or [winded](winded.md) value. If you have temporary [Stamina](stamina.md) while [winded](winded.md), [dying](dying.md), or dead, the temporary [Stamina](stamina.md) doesn't change those states.

Whenever you take damage while you have temporary [Stamina](stamina.md), the temporary [Stamina](stamina.md) decreases first, and any leftover damage is applied to your [Stamina](stamina.md) as usual. For instance, if you have 10 temporary [Stamina](stamina.md) and take 16 damage, you lose the temporary [Stamina](stamina.md) and then lose another 6 [Stamina](stamina.md).

There is no maximum to how much temporary [Stamina](stamina.md) you can have. Regaining [Stamina](stamina.md) can't restore temporary [Stamina](stamina.md). If you have temporary [Stamina](stamina.md) and then gain more temporary [Stamina](stamina.md), you get whichever amount of temporary [Stamina](stamina.md) is greater, rather than adding the two pools together. For instance, if an ability grants you 10 temporary [Stamina](stamina.md) when you already have 5, you have 10 temporary [Stamina](stamina.md), not 15.

Unless otherwise indicated, temporary [Stamina](stamina.md) disappears at the end of an encounter.

## Object Stamina {data-scc="mcdm.heroes.v1/rule.general/unattended-object"}

Mundane objects in the game have [Stamina](stamina.md) based on the material they're made of. When an object's [Stamina](stamina.md) is reduced to 0, the object is destroyed. Objects have poison immunity all and psychic immunity all, though the Director can remove one or both of these immunities in the case of living objects, such as plants. A [size](../character/size.md) 1 object or 1 square of a larger object made of common materials has [Stamina](stamina.md) as follows:

- Glass: 1 [Stamina](stamina.md)
- Wood: 3 [Stamina](stamina.md)
- Stone: 6 [Stamina](stamina.md)
- Metal: 9 [Stamina](stamina.md)

The Director can decide that a well-made or poorly made object has more or less [Stamina](stamina.md). Destroying a [supernatural](../general/supernatural.md) object often (but not always) requires a specific quest, such as throwing a magic ring back into the volcano where it was forged.
