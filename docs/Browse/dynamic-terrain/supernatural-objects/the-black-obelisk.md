---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to the black obelisk can make a **Reason test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The obelisk is deactivated until the end of the encounter.
            low: The creature accidentally activates the **Your Fears Become Manifest** ability, which gains an edge.
            mid: The creature must make another test to deactivate the obelisk. If they obtain this outcome a second time, they accidentally activate **Your Fears Become Manifest**.
    - body: A new round starts.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Your Fears Become Manifest** ability.
    - distance: 10 burst
      icon: ❗️
      keywords:
        - Area
        - Magic
      name: Your Fears Become Manifest
      power_roll:
        formula: + 2
        tiers:
            high: P < 3 [frightened](../../condition/frightened.md), [slowed](../../condition/slowed.md), and [weakened](../../condition/weakened.md) (EoT)
            low: P < 1 [slowed](../../condition/slowed.md) (EoT)
            mid: P < 2 [slowed](../../condition/slowed.md) and [weakened](../../condition/weakened.md) (EoT)
      sections:
        - label: Trigger
          text: A new round starts.
        - label: Effect
          text: The target is pushed 2 squares.
      target: Each enemy in the area
      usage: Free triggered action
flavor: A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.
level: 3
name: The Black Obelisk
role: Controller
scc: mcdm.monsters.v1/dynamic-terrain.supernatural-objects/the-black-obelisk
stats:
    - name: EV
      value: "20"
    - name: Stamina
      value: "100"
    - name: Size
      value: "2"
terrain_type: Relic
type: dynamic-terrain
---

# The Black Obelisk

---

<div class="fb-wrap" data-role="controller">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">The Black Obelisk</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="controller">Relic Controller</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 20</div></div></header>
<div class="fb__flavor">A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">20</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">100</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the black obelisk can make a <b>Reason test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Your Fears Become Manifest</b> ability, which gains an edge.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature must make another test to deactivate the obelisk. If they obtain this outcome a second time, they accidentally activate <b>Your Fears Become Manifest</b>.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The obelisk is deactivated until the end of the encounter.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Your Fears Become Manifest</b> ability.</p></div></div>
<div class="fb__feat-body">A new round starts.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Your Fears Become Manifest</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">P &lt; 1 <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">P &lt; 2 <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">P &lt; 3 <a href="../../../condition/frightened/">frightened</a>, <a href="../../../condition/slowed/">slowed</a>, and <a href="../../../condition/weakened/">weakened</a> (EoT)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A new round starts.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target is pushed 2 squares.</p></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.&#10;&#10;- **EV:** 20&#10;- **Stamina:** 100&#10;- **Size:** 2&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to the black obelisk can make a **Reason test**.&#10;&gt;&#10;&gt; - **≤11:** The creature accidentally activates the **Your Fears Become Manifest** ability, which gains an edge.&#10;&gt; - **12-16:** The creature must make another test to deactivate the obelisk. If they obtain this outcome a second time, they accidentally activate **Your Fears Become Manifest**.&#10;&gt; - **17+:** The obelisk is deactivated until the end of the encounter.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A new round starts.&#10;&gt;&#10;&gt; **Effect:** The **Your Fears Become Manifest** ability.&#10;&#10;&gt; ❗️ **Your Fears Become Manifest**&#10;&gt;&#10;&gt; | **Area, Magic** |     **Free triggered action** |&#10;&gt; |-----------------|------------------------------:|&#10;&gt; | **📏 10 burst** | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Trigger:** A new round starts.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** P &lt; 1 &#91;slowed](../../condition/slowed.md) (EoT)&#10;&gt; - **12-16:** P &lt; 2 &#91;slowed](../../condition/slowed.md) and &#91;weakened](../../condition/weakened.md) (EoT)&#10;&gt; - **17+:** P &lt; 3 &#91;frightened](../../condition/frightened.md), &#91;slowed](../../condition/slowed.md), and &#91;weakened](../../condition/weakened.md) (EoT)&#10;&gt;&#10;&gt; **Effect:** The target is pushed 2 squares."></template>
