---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
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
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Trigger · Support</div>
<h2 class="fb__name">Pulley</h2>
</header>
<div class="fb__flavor">A counterweighted pulley system can be used to quickly ascend to the top of a wall, scaffold, tower, or other structure.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a pulley can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the pulley.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The pulley is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The pulley is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature is lifted to the top of the structure the pulley is attached to. The pulley must be manually reset.</p></div></div>
<div class="fb__feat-body">A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the pulley uses a maneuver to release the pulley.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Climbable</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the pulley can climb its ropes with an <b>easy Agility test</b> to ascend to the top of the structure it&#39;s attached to.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrade</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Looped Chain (+1 EV)</b> Instead of a rope and pulley, the system uses a counterweighted looped chain. A looped chain automatically resets and can be triggered repeatedly.</div>
</article>
</div>
</article>
</div>
