---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 5 Ferocity
distance: Melee 1
effects:
    - roll: Power Roll + Might
      tier1: 8 + M damage; M < WEAK [grabbed](../../../../condition/grabbed.md)
      tier2: 12 + M damage; M < AVERAGE [grabbed](../../../../condition/grabbed.md)
      tier3: 16 + M damage; M < STRONG [grabbed](../../../../condition/grabbed.md)
    - effect: If you grab the target while your companion is adjacent to them, your companion can make a melee free strike against the target.
      name: Effect
flavor: The wilderness has no concept of fair play.
keywords:
    - Beastheart
    - Charge
    - Melee
    - Strike
    - Weapon
level: "1"
name: You Let Me Get Too Close
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-1/you-let-me-get-too-close
target: One creature
tier1: 8 + M damage; M < WEAK [grabbed](../../../../condition/grabbed.md)
tier2: 12 + M damage; M < AVERAGE [grabbed](../../../../condition/grabbed.md)
tier3: 16 + M damage; M < STRONG [grabbed](../../../../condition/grabbed.md)
type: ability
---

# You Let Me Get Too Close

---

<article class="sc-ability sc-fil" data-action="main" data-conditions="grabbed">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">You Let Me Get Too Close</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">The wilderness has no concept of fair play.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Beastheart</span><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Might</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 + M damage; M &lt; WEAK <a href="../../../../../condition/grabbed/">grabbed</a></span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 + M damage; M &lt; AVERAGE <a href="../../../../../condition/grabbed/">grabbed</a></span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 + M damage; M &lt; STRONG <a href="../../../../../condition/grabbed/">grabbed</a></span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>If you grab the target while your companion is adjacent to them, your companion can make a melee free strike against the target.</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*The wilderness has no concept of fair play.*&#10;&#10;| **Beastheart, Charge, Melee, Strike, Weapon** | **Main action** |&#10;|-----------------------------------------------|----------------:|&#10;| **📏 Melee 1**                                | **🎯 One creature** |&#10;&#10;**Power Roll + Might:**&#10;&#10;- **≤11:** 8 + M damage; M &lt; WEAK &#91;grabbed](../../../../condition/grabbed.md)&#10;- **12-16:** 12 + M damage; M &lt; AVERAGE &#91;grabbed](../../../../condition/grabbed.md)&#10;- **17+:** 16 + M damage; M &lt; STRONG &#91;grabbed](../../../../condition/grabbed.md)&#10;&#10;**Effect:** If you grab the target while your companion is adjacent to them, your companion can make a melee free strike against the target."></template>
