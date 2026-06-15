---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The column of blades must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object moves [adjacent](../../rule/combat/adjacent.md) to the column of blades.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spinning Blades** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Spinning Blades
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; M < 3 [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 4 damage
            mid: 6 damage; M < 2 [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - body: |-
        **Stone Column (+1 EV)** The column is made of stone and has 8 [Stamina](../../rule/health/stamina.md).

        **Metal Column (+1 EV)** The column is made of metal and has 11 [Stamina](../../rule/health/stamina.md).

        **Concealed (+1 EV)** The blades are concealed inside the column, which remains motionless until triggered.

        **Spiked Flails (+4 EV)** Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The **Whirling Flails** ability replaces **Spinning Blades**.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 2
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Whirling Flails
      power_roll:
        tiers:
            high: 11 damage; M < 3 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 5 damage
            mid: 8 damage; M < 2 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - icon: ⭐️
      intro: Allies who [shift](../../movement/shifting.md) don't trigger the column. A creature observing an ally [shift](../../movement/shifting.md) this way can make an **Intuition test** to [shift](../../movement/shifting.md) in imitation of their movements.
      name: Allied Awareness
      power_roll:
        formula: + 2
        tiers:
            high: The creature doesn't trigger the column.
            low: The creature triggers the column and the column's ability gains an edge.
            mid: The creature triggers the column.
flavor: A spinning wooden column is affixed with sharp blades to slash the unwary.
level: 3
name: Column of Blades
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/column-of-blades
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "5"
    - name: Size
      value: 1L
terrain_type: Fortification
type: dynamic-terrain
---

# Column of Blades

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Fortification · Defender</div>
<h2 class="fb__name">Column of Blades</h2>
</header>
<div class="fb__flavor">A spinning wooden column is affixed with sharp blades to slash the unwary.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">5</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1L</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The column of blades must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Spinning Blades</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object moves <a href="../../../rule/combat/adjacent/">adjacent</a> to the column of blades.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Spinning Blades</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; M &lt; 2 <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage; M &lt; 3 <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object moves within distance of the column.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Stone Column (+1 EV)</b> The column is made of stone and has 8 <a href="../../../rule/health/stamina/">Stamina</a>.

<b>Metal Column (+1 EV)</b> The column is made of metal and has 11 <a href="../../../rule/health/stamina/">Stamina</a>.

<b>Concealed (+1 EV)</b> The blades are concealed inside the column, which remains motionless until triggered.

<b>Spiked Flails (+4 EV)</b> Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The <b>Whirling Flails</b> ability replaces <b>Spinning Blades</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Whirling Flails</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 2</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage; M &lt; 2 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 damage; M &lt; 3 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object moves within distance of the column.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Allied Awareness</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">Allies who <a href="../../../movement/shifting/">shift</a> don&#39;t trigger the column. A creature observing an ally <a href="../../../movement/shifting/">shift</a> this way can make an <b>Intuition test</b> to <a href="../../../movement/shifting/">shift</a> in imitation of their movements.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the column and the column&#39;s ability gains an edge.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature triggers the column.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature doesn&#39;t trigger the column.</span></div></div></div>
</article>
</div>
</article>
</div>
