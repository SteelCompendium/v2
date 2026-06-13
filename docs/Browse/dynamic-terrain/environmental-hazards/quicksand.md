---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: '-'
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the quicksand or starts their turn there.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Grasping Depths** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Grasping Depths
      power_roll:
        formula: + 2
        tiers:
            high: M < 2 [restrained](scc:mcdm.heroes.v1/condition/restrained) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            low: M < 0 [slowed](scc:mcdm.heroes.v1/condition/slowed) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            mid: M < 1 [restrained](scc:mcdm.heroes.v1/condition/restrained) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
      sections:
        - label: Trigger
          text: A creature or object enters the quicksand or starts their turn there.
        - label: Effect
          text: This ability takes a bane if a triggering creature [shifted](scc:mcdm.heroes.v1/movement/shifting) into the quicksand. A character who starts their turn [restrained](scc:mcdm.heroes.v1/condition/restrained) this way is [suffocating](scc:mcdm.heroes.v1/rule.health/suffocating).
      target: The triggering creature or object
      usage: Free triggered action
    - body: The quicksand is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: When this patch of sand is stepped on, it is revealed to be a slurry saturated by water—and ready to draw creatures down to their doom.
level: 3
name: Quicksand
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/quicksand
stats:
    - name: EV
      value: 3 per 10 x 10 patch
    - name: Stamina
      value: '-'
    - name: Size
      value: One or more squares
terrain_type: Hazard
type: dynamic-terrain
---

# Quicksand

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Hazard · Hexer</div>
<h2 class="fb__name">Quicksand</h2>
</header>
<div class="fb__flavor">When this patch of sand is stepped on, it is revealed to be a slurry saturated by water—and ready to draw creatures down to their doom.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3 per 10 x 10 patch</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">-</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">-</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Grasping Depths</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object enters the quicksand or starts their turn there.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Grasping Depths</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">M &lt; 0 <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">M &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">M &lt; 2 <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters the quicksand or starts their turn there.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>This ability takes a bane if a triggering creature <a href="../scc:mcdm.heroes.v1/movement/shifting">shifted</a> into the quicksand. A character who starts their turn <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> this way is <a href="../scc:mcdm.heroes.v1/rule.health/suffocating">suffocating</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hidden</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The quicksand is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
