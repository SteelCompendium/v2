---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: The throne of A'An can be deactivated only by the current hierophant of A'An (see **Sitting on the Throne**), who must succeed on a **Presence test** that takes a bane to do so.
      name: Deactivate
      power_roll:
        tiers:
            high: The throne is deactivated until the end of the encounter.
            low: The hierophant triggers the **Nova** ability.
            mid: The hierophant fails to deactivate the throne.
    - body: |-
        In the Age of Suns, there was no darkness and no night. Even among the many suns of that time, the light of A'An was the brightest. The throne of A'An manifests the sun powers of that god, even when no one is seated in it. The following effects always occur within 10 squares of the throne:

        - The throne sheds bright light that negates all darkness and concealment, and which prevents creatures from being hidden. - Any creature with cold immunity has fire weakness 10. - Any creature who uses an ability that deals cold damage takes 11 fire damage.
      icon: ⭐️
      name: Light of the Northern Sun
    - icon: ⭐️
      intro: Only a creature attuned to the throne can sit on it. A creature [adjacent](../../rule/combat/adjacent.md) to the throne can use a main action to attune to it by succeeding on a **Presence test**.
      name: Sitting on the Throne
      power_roll:
        tiers:
            high: The creature attunes to the throne and can sit on it.
            low: The creature takes 11 fire damage.
            mid: The creature fails to attune to the throne.
      trailing: |-
        A creature seated on the throne becomes the hierophant of A'An and gains the following benefits:

        - The hierophant and each of their allies within 10 squares of the throne have fire immunity 10. - The hierophant and each of their allies within 10 squares of the throne can choose to have their abilities deal fire damage instead of their usual damage. - The hierophant has a +5 bonus to [stability](../../rule/character/stability.md), and any strike made against them takes a bane unless the attacker is also attuned to the throne. - The hierophant can use the **Primordial Flare** and **Solar Accretion** abilities.
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
        - Strike
      name: Primordial Flare
      power_roll:
        formula: + 3
        tiers:
            high: 14 fire damage
            low: 6 fire damage
            mid: 11 fire damage
      sections:
        - label: Effect
          text: The target has fire weakness 10 until the start of the hierophant's next turn.
      target: One creature or object
      usage: Maneuver
    - distance: Ranged 10
      icon: ❗️
      keywords:
        - Magic
        - Ranged
      name: Solar Accretion
      sections:
        - label: Trigger
          text: A target within distance is made [winded](../../rule/health/winded.md) or is reduced to 0 [Stamina](../../rule/health/stamina.md) by fire damage.
        - label: Effect
          text: If the hierophant is a hero, they gain 3 of their Heroic Resource. If the hierophant is a Director-controlled creature, the Director gains 3 [Malice](../../rule/monster/malice.md).
      target: One creature
      usage: Free triggered action
    - distance: 10 burst
      icon: ❗️
      keywords:
        - Area
        - Magic
      name: Nova
      sections:
        - label: Trigger
          text: The throne is destroyed or the hierophant obtains a tier 1 outcome on the test to deactivate it.
        - label: Effect
          text: Each target takes 14 fire damage and the Hierophant gains the Incubator of A'An complication (see the sidebar). If there is no hierophant, one creature within 10 squares of the throne chosen by the Director gains this complication.
      target: Each creature and object in the area
      usage: Free triggered action
flavor: The throne of A'An, sun god of the Antical Protectorate in what is now Vanigar, retains some of her power from the age before she was slain to end the Age of Suns—and plunge the region into eternal winter.
level: 4
name: The Throne of A'An
role: Controller
scc: mcdm.monsters.v1/dynamic-terrain.supernatural-objects/the-throne-of-aan
stats:
    - name: EV
      value: "24"
    - name: Stamina
      value: "140"
    - name: Size
      value: "2"
terrain_type: Relic
type: dynamic-terrain
---

# The Throne of A'An

---

<div class="fb-wrap" data-role="controller">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">The Throne of A&#39;An</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 4</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="controller">Relic Controller</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 24</div></div></header>
<div class="fb__flavor">The throne of A&#39;An, sun god of the Antical Protectorate in what is now Vanigar, retains some of her power from the age before she was slain to end the Age of Suns—and plunge the region into eternal winter.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">24</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">140</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">The throne of A&#39;An can be deactivated only by the current hierophant of A&#39;An (see <b>Sitting on the Throne</b>), who must succeed on a <b>Presence test</b> that takes a bane to do so.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The hierophant triggers the <b>Nova</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The hierophant fails to deactivate the throne.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The throne is deactivated until the end of the encounter.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Light of the Northern Sun</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">In the Age of Suns, there was no darkness and no night. Even among the many suns of that time, the light of A&#39;An was the brightest. The throne of A&#39;An manifests the sun powers of that god, even when no one is seated in it. The following effects always occur within 10 squares of the throne:

- The throne sheds bright light that negates all darkness and concealment, and which prevents creatures from being hidden. - Any creature with cold immunity has fire weakness 10. - Any creature who uses an ability that deals cold damage takes 11 fire damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Sitting on the Throne</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">Only a creature attuned to the throne can sit on it. A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the throne can use a main action to attune to it by succeeding on a <b>Presence test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature takes 11 fire damage.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature fails to attune to the throne.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature attunes to the throne and can sit on it.</span></div></div></div>
<div class="fb__feat-trailing">A creature seated on the throne becomes the hierophant of A&#39;An and gains the following benefits:

- The hierophant and each of their allies within 10 squares of the throne have fire immunity 10. - The hierophant and each of their allies within 10 squares of the throne can choose to have their abilities deal fire damage instead of their usual damage. - The hierophant has a +5 bonus to <a href="../../../rule/character/stability/">stability</a>, and any strike made against them takes a bane unless the attacker is also attuned to the throne. - The hierophant can use the <b>Primordial Flare</b> and <b>Solar Accretion</b> abilities.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Primordial Flare</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 fire damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 fire damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 fire damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target has fire weakness 10 until the start of the hierophant&#39;s next turn.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solar Accretion</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A target within distance is made <a href="../../../rule/health/winded/">winded</a> or is reduced to 0 <a href="../../../rule/health/stamina/">Stamina</a> by fire damage.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the hierophant is a hero, they gain 3 of their Heroic Resource. If the hierophant is a Director-controlled creature, the Director gains 3 <a href="../../../rule/monster/malice/">Malice</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Nova</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The throne is destroyed or the hierophant obtains a tier 1 outcome on the test to deactivate it.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target takes 14 fire damage and the Hierophant gains the Incubator of A&#39;An complication (see the sidebar). If there is no hierophant, one creature within 10 squares of the throne chosen by the Director gains this complication.</p></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="The throne of A&#39;An, sun god of the Antical Protectorate in what is now Vanigar, retains some of her power from the age before she was slain to end the Age of Suns—and plunge the region into eternal winter.&#10;&#10;- **EV:** 24&#10;- **Stamina:** 140&#10;- **Size:** 2&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; The throne of A&#39;An can be deactivated only by the current hierophant of A&#39;An (see **Sitting on the Throne**), who must succeed on a **Presence test** that takes a bane to do so.&#10;&gt;&#10;&gt; - **≤11:** The hierophant triggers the **Nova** ability.&#10;&gt; - **12-16:** The hierophant fails to deactivate the throne.&#10;&gt; - **17+:** The throne is deactivated until the end of the encounter.&#10;&#10;&gt; ⭐️ **Light of the Northern Sun**&#10;&gt;&#10;&gt; In the Age of Suns, there was no darkness and no night. Even among the many suns of that time, the light of A&#39;An was the brightest. The throne of A&#39;An manifests the sun powers of that god, even when no one is seated in it. The following effects always occur within 10 squares of the throne:&#10;&gt;&#10;&gt; - The throne sheds bright light that negates all darkness and concealment, and which prevents creatures from being hidden.&#10;&gt; - Any creature with cold immunity has fire weakness 10.&#10;&gt; - Any creature who uses an ability that deals cold damage takes 11 fire damage.&#10;&#10;&gt; ⭐️ **Sitting on the Throne**&#10;&gt;&#10;&gt; Only a creature attuned to the throne can sit on it. A creature &#91;adjacent](../../rule/combat/adjacent.md) to the throne can use a main action to attune to it by succeeding on a **Presence test**.&#10;&gt;&#10;&gt; - **≤11:** The creature takes 11 fire damage.&#10;&gt; - **12-16:** The creature fails to attune to the throne.&#10;&gt; - **17+:** The creature attunes to the throne and can sit on it.&#10;&gt;&#10;&gt; A creature seated on the throne becomes the hierophant of A&#39;An and gains the following benefits:&#10;&gt;&#10;&gt; - The hierophant and each of their allies within 10 squares of the throne have fire immunity 10.&#10;&gt; - The hierophant and each of their allies within 10 squares of the throne can choose to have their abilities deal fire damage instead of their usual damage.&#10;&gt; - The hierophant has a +5 bonus to &#91;stability](../../rule/character/stability.md), and any strike made against them takes a bane unless the attacker is also attuned to the throne.&#10;&gt; - The hierophant can use the **Primordial Flare** and **Solar Accretion** abilities.&#10;&#10;&gt; 🏹 **Primordial Flare**&#10;&gt;&#10;&gt; | **Magic, Ranged, Strike** |                  **Maneuver** |&#10;&gt; |---------------------------|------------------------------:|&#10;&gt; | **📏 Ranged 20**          | **🎯 One creature or object** |&#10;&gt;&#10;&gt; **Power Roll + 3:**&#10;&gt;&#10;&gt; - **≤11:** 6 fire damage&#10;&gt; - **12-16:** 11 fire damage&#10;&gt; - **17+:** 14 fire damage&#10;&gt;&#10;&gt; **Effect:** The target has fire weakness 10 until the start of the hierophant&#39;s next turn.&#10;&#10;&gt; ❗️ **Solar Accretion**&#10;&gt;&#10;&gt; | **Magic, Ranged** | **Free triggered action** |&#10;&gt; |-------------------|--------------------------:|&#10;&gt; | **📏 Ranged 10**  |       **🎯 One creature** |&#10;&gt;&#10;&gt; **Trigger:** A target within distance is made &#91;winded](../../rule/health/winded.md) or is reduced to 0 &#91;Stamina](../../rule/health/stamina.md) by fire damage.&#10;&gt;&#10;&gt; **Effect:** If the hierophant is a hero, they gain 3 of their Heroic Resource. If the hierophant is a Director-controlled creature, the Director gains 3 &#91;Malice](../../rule/monster/malice.md).&#10;&#10;&gt; ❗️ **Nova**&#10;&gt;&#10;&gt; | **Area, Magic** |                   **Free triggered action** |&#10;&gt; |-----------------|--------------------------------------------:|&#10;&gt; | **📏 10 burst** | **🎯 Each creature and object in the area** |&#10;&gt;&#10;&gt; **Trigger:** The throne is destroyed or the hierophant obtains a tier 1 outcome on the test to deactivate it.&#10;&gt;&#10;&gt; **Effect:** Each target takes 14 fire damage and the Hierophant gains the Incubator of A&#39;An complication (see the sidebar). If there is no hierophant, one creature within 10 squares of the throne chosen by the Director gains this complication."></template>
