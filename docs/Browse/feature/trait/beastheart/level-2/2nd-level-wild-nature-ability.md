---
class: beastheart
level: "2"
name: 2nd-Level Wild Nature Ability
scc: mcdm.beastheart.v1/feature.trait.beastheart.level-2/2nd-level-wild-nature-ability
type: trait
---

# 2nd-Level Wild Nature Ability

---

Your wild nature grants your choice of one of two heroic abilities.

### 2nd-Level Guardian Abilities

Choose one of the following abilities.

### Fetch! {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/fetch"}

*Your companion blinks out of existence, returning with a visitor you were particularly hoping to meet.*

| **Companion, Magic, Melee, Strike, Weapon** | **Main action** |
|---------------------------------------------|----------------:|
| **📏 Melee 1**                              | **🎯 One creature or object** |

**Effect:** Your companion can [teleport](../../../../movement/teleport.md) up to 5 squares before and after making the power roll. Instead of grabbing the target, your companion can pick up a target object that is smaller than they are. You can forgo dealing damage with this ability.

**Power Roll + Might:**

- **≤11:** 6 + M damage; M < WEAK [grabbed](../../../../condition/grabbed.md)
- **12-16:** 8 + M damage; M < AVERAGE [grabbed](../../../../condition/grabbed.md)
- **17+:** 12 + M damage; M < STRONG [grabbed](../../../../condition/grabbed.md)

After making the power roll, your companion can teleport with a [grabbed](../../../../condition/grabbed.md) creature or held object, provided the creature or object can fit in the destination. You choose which squares adjacent to your companion the [grabbed](../../../../condition/grabbed.md) creature or held object is teleported to.

### Omnomnom {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/omnomnom"}

*What do you have in your mouth? No! Bad boy!*

| **Companion, Melee, Strike, Weapon** | **Main action** |
|--------------------------------------|----------------:|
| **📏 Melee 1**                       | **🎯 One creature** |

**Special:** This ability targets only creatures who are [grabbed](../../../../condition/grabbed.md) and are your companion's size or smaller.

**Power Roll + Might:**

- **≤11:** 6 + M damage; M < WEAK the target is swallowed
- **12-16:** 10 + M damage; M < AVERAGE the target is swallowed
- **17+:** 14 + M damage; M < STRONG the target is swallowed

**Effect:** A swallowed creature shares your companion's space, is [grabbed](../../../../condition/grabbed.md) and [restrained](../../../../condition/restrained.md), and has line of effect only to your companion. Nothing has line of effect to the swallowed creature.

Once per round at the start of your turn, the swallowed creature takes acid damage equal to 1 + your companion's Might score. If the swallowed creature escapes the grab, your companion immediately regurgitates the creature, who lands [prone](../../../../condition/prone.md) in an unoccupied square adjacent to your companion. Your companion can also regurgitate a swallowed creature as a free maneuver. Your companion can have only one creature swallowed at a time.

### 2nd-Level Prowler Abilities

Choose one of the following abilities.

### Jump Scare {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/jump-scare"}

*Surprised to see me?*

| **Area, Companion, Magic** | **Main action** |
|----------------------------|----------------:|
| **📏 2 burst**             | **🎯 Each enemy in the area** |

**Special:** This ability targets only enemies with line of effect to your companion.

**Effect:** Your companion [shifts](../../../../movement/shifting.md) up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.

**Power Roll + Intuition:**

- **≤11:** 4 damage; P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
- **12-16:** 6 damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
- **17+:** 10 damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)

### On You Like Your Shadow {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/on-you-like-your-shadow"}

*Your companion darts around their target, staying out of reach and using them as a shield.*

| **Charge, Companion, Melee, Strike, Weapon** | **Main action** |
|----------------------------------------------|----------------:|
| **📏 Melee 1**                               | **🎯 One creature or object** |

**Power Roll + Might:**

- **≤11:** 5 + M damage
- **12-16:** 8 + M damage
- **17+:** 12 + M damage

**Effect:** Your companion enters the target's space. Until your companion is no longer in the target's space, they can end their turn in that space, strikes against them also affect the target, and your strikes against the target gain an edge.

### 2nd-Level Punisher Abilities

Choose one of the following abilities.

### Foe Bowling {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/foe-bowling"}

*Your companion sends one enemy tumbling into another, taking them both out.*

| **Charge, Companion, Melee, Strike, Weapon** | **Main action** |
|----------------------------------------------|----------------:|
| **📏 Melee 1**                               | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 3 + M damage; push 2; M < WEAK [prone](../../../../condition/prone.md)
- **12-16:** 5 + M damage; push 3; M < AVERAGE [prone](../../../../condition/prone.md)
- **17+:** 8 + M damage; push 4; M < STRONG [prone](../../../../condition/prone.md)

**Effect:** If the target is [force moved](../../../../movement/forced-movement.md) at least 1 square, an enemy adjacent to the target at the end of this forced movement is also targeted by this ability's power roll, but they don't trigger this effect.

### One Roar and We're Back In the Fight {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/one-roar-and-were-back-in-the-fight"}

*Your companion builds up courage with a roar, growl, or aggressive display.*

| **Companion** |     **Maneuver** |
|---------------|-----------------:|
| **📏 Ranged 5** | **🎯 One ally** |

**Effect:** Your companion and the target can each gain 2 surges, spend up to 2 Recoveries, and end one condition or effect on them that is ended by a saving throw or that ends at the end of their turn.

### 2nd-Level Spark Abilities

Choose one of the following abilities.

### Burning Lash {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/burning-lash"}

*A blazing tongue of energy entangles a foe.*

| **Companion, Magic, Melee, Strike, Weapon** | **Main action** |
|---------------------------------------------|----------------:|
| **📏 Melee 2**                              | **🎯 One creature** |

**Power Roll + Intuition:**

- **≤11:** 6 + I fire or lightning damage; M < WEAK [prone](../../../../condition/prone.md)
- **12-16:** 9 + I fire or lightning damage; M < AVERAGE [prone](../../../../condition/prone.md)
- **17+:** 14 + I fire or lightning damage; M < STRONG [prone](../../../../condition/prone.md) and can't stand (EoT)

**Spend 1 Ferocity:** If you are within distance of the target, you can use a free maneuver to wield a second whip, dealing extra fire or lightning damage equal to your Intuition score.

### Howling Gale {data-scc="mcdm.beastheart.v1/feature.ability.beastheart.level-2/howling-gale"}

*A blizzard or thunderstorm sends foes flying and lifts you like a feather.*

| **Area, Companion, Magic** | **Main action** |
|----------------------------|----------------:|
| **📏 3 cube within 5**     | **🎯 Each enemy in the area** |

**Power Roll + Might:**

- **≤11:** 6 cold or sonic damage; slide 1
- **12-16:** 9 cold or sonic damage; slide 2
- **17+:** 13 cold or sonic damage; slide 4

**Effect:** Until the end of your next turn, you and your companion can [fly](../../../../movement/fly.md) and gain a +3 bonus to speed.
