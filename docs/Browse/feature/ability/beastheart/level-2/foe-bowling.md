---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 5 Ferocity
distance: Melee 1
effects:
    - roll: Power Roll + Might
      tier1: 3 + M damage; push 2; M < WEAK [prone](../../../../condition/prone.md)
      tier2: 5 + M damage; push 3; M < AVERAGE [prone](../../../../condition/prone.md)
      tier3: 8 + M damage; push 4; M < STRONG [prone](../../../../condition/prone.md)
    - effect: If the target is [force moved](../../../../movement/forced-movement.md) at least 1 square, an enemy adjacent to the target at the end of this forced movement is also targeted by this ability's power roll, but they don't trigger this effect.
      name: Effect
flavor: Your companion sends one enemy tumbling into another, taking them both out.
keywords:
    - Charge
    - Companion
    - Melee
    - Strike
    - Weapon
level: "2"
name: Foe Bowling
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-2/foe-bowling
subclass: punisher
target: One creature
tier1: 3 + M damage; push 2; M < WEAK [prone](../../../../condition/prone.md)
tier2: 5 + M damage; push 3; M < AVERAGE [prone](../../../../condition/prone.md)
tier3: 8 + M damage; push 4; M < STRONG [prone](../../../../condition/prone.md)
type: ability
---

# Foe Bowling

---

<article class="sc-ability sc-fil" data-action="main" data-conditions="prone">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Foe Bowling</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart · Punisher</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">Your companion sends one enemy tumbling into another, taking them both out.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Companion</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Might</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 + M damage; push 2; M &lt; WEAK <a href="../../../../../condition/prone/">prone</a></span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 + M damage; push 3; M &lt; AVERAGE <a href="../../../../../condition/prone/">prone</a></span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">8 + M damage; push 4; M &lt; STRONG <a href="../../../../../condition/prone/">prone</a></span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>If the target is <a href="../../../../../movement/forced-movement/">force moved</a> at least 1 square, an enemy adjacent to the target at the end of this forced movement is also targeted by this ability&#39;s power roll, but they don&#39;t trigger this effect.</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*Your companion sends one enemy tumbling into another, taking them both out.*&#10;&#10;| **Charge, Companion, Melee, Strike, Weapon** | **Main action** |&#10;|----------------------------------------------|----------------:|&#10;| **📏 Melee 1**                               | **🎯 One creature** |&#10;&#10;**Power Roll + Might:**&#10;&#10;- **≤11:** 3 + M damage; push 2; M &lt; WEAK &#91;prone](../../../../condition/prone.md)&#10;- **12-16:** 5 + M damage; push 3; M &lt; AVERAGE &#91;prone](../../../../condition/prone.md)&#10;- **17+:** 8 + M damage; push 4; M &lt; STRONG &#91;prone](../../../../condition/prone.md)&#10;&#10;**Effect:** If the target is &#91;force moved](../../../../movement/forced-movement.md) at least 1 square, an enemy adjacent to the target at the end of this forced movement is also targeted by this ability&#39;s power roll, but they don&#39;t trigger this effect."></template>
