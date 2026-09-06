---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Maneuver
class: beastheart
companion: sporeling
distance: Melee 1
effects:
    - effect: The target takes poison damage equal to 3 + the sporeling's Might score, and the sporeling is invisible to the target until the end of the sporeling's next turn or they deal damage to the target.
      name: Effect
    - cost: Spend 1 Ferocity
      effect: If the target has M < STRONG, they are [dazed](../../../../../../condition/dazed.md) until the end of their next turn.
flavor: The sporeling breathes a cloud of disorienting fumes.
keywords:
    - Companion
    - Melee
level: "1"
name: Spore Puff
scc: mcdm.beastheart.v1/feature.ability.companion.beastheart.sporeling.level-1/spore-puff
subtype: signature
target: One enemy
type: ability
---

# Spore Puff

---

<article class="sc-ability sc-fil" data-action="maneuver" data-conditions="dazed">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">f</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spore Puff</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Signature</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header>
<p class="sc-ability__flavor">The sporeling breathes a cloud of disorienting fumes.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Companion</span><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>The target takes poison damage equal to 3 + the sporeling&#39;s Might score, and the sporeling is invisible to the target until the end of the sporeling&#39;s next turn or they deal damage to the target.</p></div>
</div>
<div class="sc-ability__enh"><span class="cost">Spend 1 Ferocity</span><span class="txt">If the target has M &lt; STRONG, they are <a href="../../../../../../../condition/dazed/">dazed</a> until the end of their next turn.</span></div>
</article>


<template class="sc-src" data-fmt="md" data-src="*The sporeling breathes a cloud of disorienting fumes.*&#10;&#10;| **Companion, Melee**         |     **Maneuver** |&#10;|------------------------------|-----------------:|&#10;| **📏 Melee 1**               | **🎯 One enemy** |&#10;&#10;**Effect:** The target takes poison damage equal to 3 + the sporeling&#39;s Might score, and the sporeling is invisible to the target until the end of the sporeling&#39;s next turn or they deal damage to the target.&#10;&#10;**Spend 1 Ferocity:** If the target has M &lt; STRONG, they are &#91;dazed](../../../../../../condition/dazed.md) until the end of their next turn."></template>
