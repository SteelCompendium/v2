---
name: Stamina
scc: mcdm.heroes.v1/rule.health/stamina
type: rule
---

# Stamina

---

Your hero's survivability is represented by your Stamina. Think of Stamina as a combination of a creature's physical vitality and their overall energy for dodging and resisting incoming blows, spells, and other violence. It's not that every instance of damage deals a [bleeding](../../condition/bleeding.md) wound to you, but that each one chips away at your ability to fight effectively. One attack might make you sweat as you leap back to avoid an arrow, while another might graze your elbow with a dagger nick, leaving a dull, distracting pain. Eventually, this draining of energy leaves you open for bigger blows that can truly harm your body—or possibly kill you.

After any damage you take is reduced by damage immunity or other effects, your Stamina is reduced by an amount equal to the remaining damage. Some effects can also reduce your Stamina maximum, limiting the amount of Stamina you can regain.

## Recoveries and Recovery Value {data-scc="mcdm.heroes.v1/rule.health/recoveries"}

Each hero has a number of Recoveries determined by their class. A hero also has a recovery value that equals one-third of their Stamina maximum, rounded down. When you use the [Catch Breath](../../feature/trait/common/maneuvers/catch-breath.md) maneuver in combat (see Maneuvers above), you spend a Recovery and regain Stamina equal to your recovery value. Outside of combat, you can spend as many Recoveries as you have remaining. Some abilities, items, and other effects allow you to spend a Recovery to regain Stamina equal to your recovery value plus a little extra (as described by the effect), or to regain Stamina without spending a Recovery.

## Winded {data-scc="mcdm.heroes.v1/rule.health/winded"}

Your winded value equals half your Stamina maximum. When your Stamina is equal to or less than your winded value, you are winded. Although being winded has no effects on its own, certain ancestry, class, item, title, and monster abilities affect winded creatures.

You can tell when other creatures are winded and vice versa.

## Dying and Death {data-scc="mcdm.heroes.v1/rule.health/dying"}

When your Stamina is 0 or lower, you are dying. While dying, you can't use the [Catch Breath](../../feature/trait/common/maneuvers/catch-breath.md) maneuver in combat. Additionally, you are [bleeding](../../condition/bleeding.md), and this instance of the condition can't be negated or removed in any way until you are no longer dying. While you are dying, you can still act, your allies can help you spend Recoveries in combat, and you can spend Recoveries out of combat as usual.

While your Stamina is lower than 0, if it reaches the negative of your winded value, you die. When you die, you can't be brought back to life without the use of a special powerful item, such as a Scroll of Resurrection.

## Director-Controlled Creatures

In most circumstances, Director-controlled creatures die or are destroyed when their Stamina drops to 0.

### No Recoveries

Director-controlled creatures don't have Recoveries or a recovery value. Any such creatures who regain Stamina during a battle do so by way of a special item or an ability in their stat block. However, there are times when a hero might wish to use an ability that allows another creature to spend a Recovery or to regain Stamina equal to their recovery value on an injured NPC. In such cases, a Director-controlled creature regains Stamina equal to one-third of their Stamina maximum.

## Knocking Creatures Out

If you damage a creature with an ability that would kill them, you can choose to instead knock them unconscious. If a creature takes damage while unconscious in this way, they die.

Director-controlled creatures remain unconscious for 1 hour if no one does anything to wake them. They then gain 1 Stamina and are no longer unconscious.

Heroes remain unconscious for 1 hour if no one does anything to wake them. After 1 hour, they can spend a Recovery and are no longer unconscious. If the hero has no Recoveries left, they can't wake up until they finish a respite.

### Unconscious

While you are unconscious, you can't take main actions, maneuvers, triggered actions, free triggered actions, or free maneuvers; your speed is 0; you are unaware of your surroundings; and you [are prone](../../condition/prone.md). Ability rolls against you have a double edge. If you wake up from being unconscious, you can stand up from prone as a free maneuver.

## Temporary Stamina {data-scc="mcdm.heroes.v1/rule.health/temporary-stamina"}

Some abilities, treasures, and other effects grant a creature temporary Stamina. Temporary Stamina shouldn't be included in a creature's Stamina total when figuring out a creature's recovery value or winded value. If you have temporary Stamina while winded, dying, or dead, the temporary Stamina doesn't change those states.

Whenever you take damage while you have temporary Stamina, the temporary Stamina decreases first, and any leftover damage is applied to your Stamina as usual. For instance, if you have 10 temporary Stamina and take 16 damage, you lose the temporary Stamina and then lose another 6 Stamina.

There is no maximum to how much temporary Stamina you can have. Regaining Stamina can't restore temporary Stamina. If you have temporary Stamina and then gain more temporary Stamina, you get whichever amount of temporary Stamina is greater, rather than adding the two pools together. For instance, if an ability grants you 10 temporary Stamina when you already have 5, you have 10 temporary Stamina, not 15.

Unless otherwise indicated, temporary Stamina disappears at the end of an encounter.

## Object Stamina {data-scc="mcdm.heroes.v1/rule.general/unattended-object"}

Mundane objects in the game have Stamina based on the material they're made of. When an object's Stamina is reduced to 0, the object is destroyed. Objects have poison immunity all and psychic immunity all, though the Director can remove one or both of these immunities in the case of living objects, such as plants. A size 1 object or 1 square of a larger object made of common materials has Stamina as follows:

- Glass: 1 Stamina
- Wood: 3 Stamina
- Stone: 6 Stamina
- Metal: 9 Stamina

The Director can decide that a well-made or poorly made object has more or less Stamina. Destroying a supernatural object often (but not always) requires a specific quest, such as throwing a magic ring back into the volcano where it was forged.
