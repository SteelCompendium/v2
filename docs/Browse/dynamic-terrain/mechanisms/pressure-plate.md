---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a pressure plate can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The pressure plate is deactivated and doesn't trigger.
            low: The creature triggers the pressure plate.
            mid: The pressure plate is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: The pressure plate is calibrated to be triggered by creatures or objects of a particular size. The pressure plate triggers when a creature or object of the appropriate size enters its area.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The linked mechanism is activated. A pressure plate automatically resets and can be triggered repeatedly.
    - body: '**Tripwire (−1 EV)** The pressure plate is a tripwire, which can trigger once and must be manually reset. A concealed tripwire can be discovered with an **easy Intuition test**.'
      icon: ⭐️
      name: Upgrade
    - body: The pressure plate is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: This mechanism acts as a trigger for another linked mechanism, and is skillfully hidden from view in the floor.
level: 1
name: Pressure Plate
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: '-'
    - name: Size
      value: Any area
    - name: Typical Space
      value: One square, up to a 4 x 4-square area
    - name: Link
      value: A pressure plate is linked to another mechanism that it activates when triggered.
terrain_type: Trigger
type: dynamic-terrain
---

# Pressure Plate

---

<div class="fb-wrap" data-role="support">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Pressure Plate</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="support">Trigger Support</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 2</div></div></header>
<div class="fb__flavor">This mechanism acts as a trigger for another linked mechanism, and is skillfully hidden from view in the floor.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">-</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">Any area</div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">One square, up to a 4 x 4-square area</div></div>
<div class="fb__stat"><div class="fb__stat-l">Link</div><div class="fb__stat-v">A pressure plate is linked to another mechanism that it activates when triggered.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a pressure plate can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the pressure plate.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The pressure plate is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The pressure plate is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The linked mechanism is activated. A pressure plate automatically resets and can be triggered repeatedly.</p></div></div>
<div class="fb__feat-body">The pressure plate is calibrated to be triggered by creatures or objects of a particular size. The pressure plate triggers when a creature or object of the appropriate size enters its area.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Tripwire (−1 EV)</b> The pressure plate is a tripwire, which can trigger once and must be manually reset. A concealed tripwire can be discovered with an <b>easy Intuition test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The pressure plate is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
