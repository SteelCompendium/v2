---
printing: "1.0"
printing_book: "The Beastheart"
action_type: Main action
class: beastheart
cost: 11 Ferocity
distance: 5 burst
effects:
    - effect: This ability targets only creatures you choose within distance.
      name: Special
    - roll: Power Roll + Might
      tier1: P < WEAK the target is battle-frenzied
      tier2: P < AVERAGE the target is battle-frenzied
      tier3: The target is battle-frenzied
    - effect: If a target resists the potency, they can choose to become battle-frenzied.
      name: Effect
flavor: Your companion shatters the floodgates that keep their rampage dammed up, and it cascades into the unprepared minds of nearby creatures.
keywords:
    - Area
    - Companion
    - Magic
level: "9"
name: Battle Frenzy
power_roll_characteristic: Might
scc: mcdm.beastheart.v1/feature.ability.beastheart.level-9/battle-frenzy
subclass: punisher
target: Special
tier1: P < WEAK the target is battle-frenzied
tier2: P < AVERAGE the target is battle-frenzied
tier3: The target is battle-frenzied
type: ability
---

# Battle Frenzy

---

<article class="sc-ability sc-fil" data-action="main">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Battle Frenzy</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Beastheart · Punisher</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 9</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">11 Ferocity</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">Your companion shatters the floodgates that keep their rampage dammed up, and it cascades into the unprepared minds of nearby creatures.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Companion</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars">Might</span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">P &lt; WEAK the target is battle-frenzied</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">P &lt; AVERAGE the target is battle-frenzied</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target is battle-frenzied</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div>
<div class="sc-ability__section-body"><p>This ability targets only creatures you choose within distance.</p></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>If a target resists the potency, they can choose to become battle-frenzied.</p><p>A battle-frenzied creature must use a free triggered action to make a melee free strike against themself or a creature adjacent to them. You choose each creature&#39;s target. After making this strike, they are no longer battle frenzied.</p></div>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="*Your companion shatters the floodgates that keep their rampage dammed up, and it cascades into the unprepared minds of nearby creatures.*&#10;&#10;| **Area, Companion, Magic** | **Main action** |&#10;|----------------------------|----------------:|&#10;| **📏 5 burst**             | **🎯 Special**  |&#10;&#10;**Special:** This ability targets only creatures you choose within distance.&#10;&#10;**Power Roll + Might:**&#10;&#10;- **≤11:** P &lt; WEAK the target is battle-frenzied&#10;- **12-16:** P &lt; AVERAGE the target is battle-frenzied&#10;- **17+:** The target is battle-frenzied&#10;&#10;**Effect:** If a target resists the potency, they can choose to become battle-frenzied.&#10;&#10;A battle-frenzied creature must use a free triggered action to make a melee free strike against themself or a creature adjacent to them. You choose each creature&#39;s target. After making this strike, they are no longer battle frenzied."></template>
