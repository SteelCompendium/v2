---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 9 Ferocity
distance: Melee 1
effects:
    - roll: Power Roll + Might
      tier1: 11 + M damage; M < WEAK [bleeding](../../../../condition/bleeding.md) (save ends)
      tier2: 17 + M damage; M < AVERAGE [bleeding](../../../../condition/bleeding.md) (save ends)
      tier3: 22 + M damage; M < STRONG [bleeding](../../../../condition/bleeding.md) (save ends)
    - effect: If the target is [grabbed](../../../../condition/grabbed.md) by your partner, the target takes extra damage equal to your Might score plus your partner's Might score. If the target is reduced to 0 Stamina by this ability, each enemy within 2 squares who has P < AVERAGE is [frightened](../../../../condition/frightened.md) (save ends).
      name: Effect
flavor: In a gruesome display, you and your companion rip off a pinned enemy's limb or other body part and toss it away.
keywords:
    - Melee
    - Strike
    - Weapon
level: "5"
name: Rip Them Apart!
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-5/rip-them-apart
target: One creature
tier1: 11 + M damage; M < WEAK [bleeding](../../../../condition/bleeding.md) (save ends)
tier2: 17 + M damage; M < AVERAGE [bleeding](../../../../condition/bleeding.md) (save ends)
tier3: 22 + M damage; M < STRONG [bleeding](../../../../condition/bleeding.md) (save ends)
type: ability
---

# Rip Them Apart!

---

<article class="sc-ability sc-fil" data-action="main">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Rip Them Apart!</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 5</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">9 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">In a gruesome display, you and your companion rip off a pinned enemy&#39;s limb or other body part and toss it away.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Might</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 + M damage; M &lt; WEAK <a href="../../../../../condition/bleeding/">bleeding</a> (save ends)</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">17 + M damage; M &lt; AVERAGE <a href="../../../../../condition/bleeding/">bleeding</a> (save ends)</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">22 + M damage; M &lt; STRONG <a href="../../../../../condition/bleeding/">bleeding</a> (save ends)</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>If the target is <a href="../../../../../condition/grabbed/">grabbed</a> by your partner, the target takes extra damage equal to your Might score plus your partner&#39;s Might score. If the target is reduced to 0 Stamina by this ability, each enemy within 2 squares who has P &lt; AVERAGE is <a href="../../../../../condition/frightened/">frightened</a> (save ends).</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*In a gruesome display, you and your companion rip off a pinned enemy&#39;s limb or other body part and toss it away.*&#10;&#10;| **Melee, Strike, Weapon** | **Main action** |&#10;|---------------------------|----------------:|&#10;| **📏 Melee 1**            | **🎯 One creature** |&#10;&#10;**Power Roll + Might:**&#10;&#10;- **≤11:** 11 + M damage; M &lt; WEAK &#91;bleeding](../../../../condition/bleeding.md) (save ends)&#10;- **12-16:** 17 + M damage; M &lt; AVERAGE &#91;bleeding](../../../../condition/bleeding.md) (save ends)&#10;- **17+:** 22 + M damage; M &lt; STRONG &#91;bleeding](../../../../condition/bleeding.md) (save ends)&#10;&#10;**Effect:** If the target is &#91;grabbed](../../../../condition/grabbed.md) by your partner, the target takes extra damage equal to your Might score plus your partner&#39;s Might score. If the target is reduced to 0 Stamina by this ability, each enemy within 2 squares who has P &lt; AVERAGE is &#91;frightened](../../../../condition/frightened.md) (save ends)."></template>
