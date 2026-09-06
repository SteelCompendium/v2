---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 5 Ferocity
distance: Melee 1 or ranged 5
effects:
    - roll: Power Roll + Might
      tier1: 8 + M damage
      tier2: 12 + M damage
      tier3: 16 + M damage; M < STRONG [bleeding](../../../../condition/bleeding.md) (save ends)
    - effect: If the target is killed by this damage, or is winded or [bleeding](../../../../condition/bleeding.md) after taking this damage, you gain 2 surges.
      name: Effect
flavor: Invigorated by the smell of blood, you strike a savage blow.
keywords:
    - Beastheart
    - Melee
    - Ranged
    - Strike
    - Weapon
level: "1"
name: I Feed On Your Pain!
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-1/i-feed-on-your-pain
target: One creature
tier1: 8 + M damage
tier2: 12 + M damage
tier3: 16 + M damage; M < STRONG [bleeding](../../../../condition/bleeding.md) (save ends)
type: ability
---

# I Feed On Your Pain!

---

<article class="sc-ability sc-fil" data-action="main" data-conditions="bleeding">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">I Feed On Your Pain!</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">Invigorated by the smell of blood, you strike a savage blow.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Beastheart</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1 or ranged 5</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Might</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 + M damage</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 + M damage</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 + M damage; M &lt; STRONG <a href="../../../../../condition/bleeding/">bleeding</a> (save ends)</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>If the target is killed by this damage, or is winded or <a href="../../../../../condition/bleeding/">bleeding</a> after taking this damage, you gain 2 surges.</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*Invigorated by the smell of blood, you strike a savage blow.*&#10;&#10;| **Beastheart, Melee, Ranged, Strike, Weapon** | **Main action** |&#10;|-----------------------------------------------|----------------:|&#10;| **📏 Melee 1 or ranged 5**                    | **🎯 One creature** |&#10;&#10;**Power Roll + Might:**&#10;&#10;- **≤11:** 8 + M damage&#10;- **12-16:** 12 + M damage&#10;- **17+:** 16 + M damage; M &lt; STRONG &#91;bleeding](../../../../condition/bleeding.md) (save ends)&#10;&#10;**Effect:** If the target is killed by this damage, or is winded or &#91;bleeding](../../../../condition/bleeding.md) after taking this damage, you gain 2 surges."></template>
