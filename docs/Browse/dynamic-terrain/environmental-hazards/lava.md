---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of lava must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the lava or starts their turn there, or starts their turn [adjacent](../../rule/combat/adjacent.md) to the lava.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Liquid Hot Magma** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Liquid Hot Magma
      power_roll:
        formula: + 2
        tiers:
            high: 12 fire damage; M < 3 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            low: 5 fire damage; M < 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 fire damage; M < 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters the lava or starts their turn there, or starts their turn [adjacent](../../rule/combat/adjacent.md) to the lava.
        - label: Effect
          text: If the target is [adjacent](../../rule/combat/adjacent.md) to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava [adjacent](../../rule/combat/adjacent.md) to an existing square of lava.'
      icon: ⭐️
      name: Upgrade
flavor: A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.
level: 3
name: Lava
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/lava
stats:
    - name: EV
      value: 4 per 10 x 10 patch
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Immunity
      value: 20 to all damage except cold damage
terrain_type: Hazard
type: dynamic-terrain
---

# Lava

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Hazard · Hexer</div>
<h2 class="fb__name">Lava</h2>
</header>
<div class="fb__flavor">A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">4 per 10 x 10 patch</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">12 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">20 to all damage except cold damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each square of lava must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Liquid Hot Magma</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object enters the lava or starts their turn there, or starts their turn <a href="../../../rule/combat/adjacent/">adjacent</a> to the lava.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Liquid Hot Magma</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 fire damage; M &lt; 1 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 fire damage; M &lt; 2 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 fire damage; M &lt; 3 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters the lava or starts their turn there, or starts their turn <a href="../../../rule/combat/adjacent/">adjacent</a> to the lava.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target is <a href="../../../rule/combat/adjacent/">adjacent</a> to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrade</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Magma Flow (+4 EV)</b> The lava is flowing! At the start of each round, add one square of lava <a href="../../../rule/combat/adjacent/">adjacent</a> to an existing square of lava.</div>
</article>
</div>
</article>
</div>
