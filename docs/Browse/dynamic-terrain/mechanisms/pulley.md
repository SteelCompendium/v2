---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a pulley can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The pulley is deactivated and doesn't trigger.
            low: The creature triggers the pulley.
            mid: The pulley is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: A creature [adjacent](../../rule/combat/adjacent.md) to the pulley uses a maneuver to release the pulley.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature is lifted to the top of the structure the pulley is attached to. The pulley must be manually reset.
    - body: A creature [adjacent](../../rule/combat/adjacent.md) to the pulley can climb its ropes with an **easy Agility test** to ascend to the top of the structure it's attached to.
      icon: ⭐️
      name: Climbable
    - body: '**Looped Chain (+1 EV)** Instead of a rope and pulley, the system uses a counterweighted looped chain. A looped chain automatically resets and can be triggered repeatedly.'
      icon: ⭐️
      name: Upgrade
flavor: A counterweighted pulley system can be used to quickly ascend to the top of a wall, scaffold, tower, or other structure.
level: 1
name: Pulley
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pulley
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "1"
    - name: Size
      value: 1S
terrain_type: Trigger
type: dynamic-terrain
---

# Pulley

---

<div class="fb-wrap" data-role="support">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Pulley</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="support">Trigger Support</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 1</div></div></header>
<div class="fb__flavor">A counterweighted pulley system can be used to quickly ascend to the top of a wall, scaffold, tower, or other structure.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a pulley can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the pulley.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The pulley is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The pulley is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature is lifted to the top of the structure the pulley is attached to. The pulley must be manually reset.</p></div></div>
<div class="fb__feat-body">A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the pulley uses a maneuver to release the pulley.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Climbable</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the pulley can climb its ropes with an <b>easy Agility test</b> to ascend to the top of the structure it&#39;s attached to.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Looped Chain (+1 EV)</b> Instead of a rope and pulley, the system uses a counterweighted looped chain. A looped chain automatically resets and can be triggered repeatedly.</div>
</article>
</div>
</article>
</div>
