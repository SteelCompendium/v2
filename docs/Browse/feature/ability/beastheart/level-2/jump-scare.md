---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 5 Ferocity
distance: 2 burst
effects:
    - effect: This ability targets only enemies with line of effect to your companion.
      name: Special
    - effect: Your companion [shifts](../../../../movement/shifting.md) up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.
      name: Effect
    - roll: Power Roll + Intuition
      tier1: 4 damage; P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
      tier2: 6 damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
      tier3: 10 damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)
flavor: Surprised to see me?
keywords:
    - Area
    - Companion
    - Magic
level: "2"
name: Jump Scare
power_roll_characteristic: Intuition
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-2/jump-scare
subclass: prowler
target: Each enemy in the area
tier1: 4 damage; P < WEAK [frightened](../../../../condition/frightened.md) (save ends)
tier2: 6 damage; P < AVERAGE [frightened](../../../../condition/frightened.md) (save ends)
tier3: 10 damage; P < STRONG [frightened](../../../../condition/frightened.md) (save ends)
type: ability
---

# Jump Scare

---

<article class="sc-ability sc-fil" data-action="main">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Jump Scare</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart · Prowler</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">Surprised to see me?</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Companion</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Intuition</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; P &lt; WEAK <a href="../../../../../condition/frightened/">frightened</a> (save ends)</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; P &lt; AVERAGE <a href="../../../../../condition/frightened/">frightened</a> (save ends)</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 damage; P &lt; STRONG <a href="../../../../../condition/frightened/">frightened</a> (save ends)</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div>
<div class="sc-ability__section-body"><p>This ability targets only enemies with line of effect to your companion.</p></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>Your companion <a href="../../../../../movement/shifting/">shifts</a> up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*Surprised to see me?*&#10;&#10;| **Area, Companion, Magic** | **Main action** |&#10;|----------------------------|----------------:|&#10;| **📏 2 burst**             | **🎯 Each enemy in the area** |&#10;&#10;**Special:** This ability targets only enemies with line of effect to your companion.&#10;&#10;**Effect:** Your companion &#91;shifts](../../../../movement/shifting.md) up to a number of squares equal to their Intuition score. During this movement, they are invisible. They then make a power roll.&#10;&#10;**Power Roll + Intuition:**&#10;&#10;- **≤11:** 4 damage; P &lt; WEAK &#91;frightened](../../../../condition/frightened.md) (save ends)&#10;- **12-16:** 6 damage; P &lt; AVERAGE &#91;frightened](../../../../condition/frightened.md) (save ends)&#10;- **17+:** 10 damage; P &lt; STRONG &#91;frightened](../../../../condition/frightened.md) (save ends)"></template>
