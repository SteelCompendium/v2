---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a switch can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The switch is deactivated and doesn't trigger.
            low: The creature triggers the switch.
            mid: The switch is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: A creature [adjacent](../../rule/combat/adjacent.md) to the switch uses a maneuver to trigger it.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The linked mechanism is activated. A switch automatically resets and can be triggered repeatedly.
    - body: '**Concealed (+1 EV)** The switch is hidden.'
      icon: ⭐️
      name: Upgrade
flavor: Set into any surface, this mechanism acts as a trigger for another linked mechanism.
level: 1
name: Switch
role: Support
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/switch
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "3"
    - name: Size
      value: 1T
    - name: Link
      value: A switch is linked to another mechanism that it activates when triggered.
terrain_type: Trigger
type: dynamic-terrain
---

# Switch

---

<div class="fb-wrap" data-role="support">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Trigger · Support</div>
<h2 class="fb__name">Switch</h2>
</header>
<div class="fb__flavor">Set into any surface, this mechanism acts as a trigger for another linked mechanism.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1T</div></div>
<div class="fb__stat"><div class="fb__stat-l">Link</div><div class="fb__stat-v">A switch is linked to another mechanism that it activates when triggered.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a switch can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the switch.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The switch is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The switch is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The linked mechanism is activated. A switch automatically resets and can be triggered repeatedly.</p></div></div>
<div class="fb__feat-body">A creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the switch uses a maneuver to trigger it.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrade</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Concealed (+1 EV)</b> The switch is hidden.</div>
</article>
</div>
</article>
</div>
