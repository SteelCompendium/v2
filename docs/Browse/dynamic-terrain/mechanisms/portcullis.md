---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature adjacent to a portcullis can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The portcullis is deactivated and doesn't trigger.
            low: The creature triggers the portcullis and is affected as if in its area.
            mid: The portcullis is deactivated but the creature is slowed (EoT).
    - body: A pressure plate, switch, or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Heavy Gate** ability.
    - distance: Special
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Heavy Gate
      power_roll:
        formula: + 2
        tiers:
            high: 10 damage; A < 3 restrained (save ends)
            low: 3 damage; slide 1, ignoring stability
            mid: 7 damage; A < 2 restrained (save ends)
      sections:
        - label: Trigger
          text: A pressure plate, switch, or other linked trigger is activated.
        - label: Special
          text: The area of this ability is the area directly beneath the portcullis when it falls.
        - label: Effect
          text: The portcullis blocks movement from one side of it to the other. A target slid by the portcullis ends up on one side of it or the other (choose randomly). The portcullis must be manually reset.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: The portcullis is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A portcullis is hidden in the ceiling of a passage or choke point, waiting to drop when activated.
level: 3
name: Portcullis
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/portcullis
stats:
    - name: EV
      value: "4"
    - name: Stamina
      value: 9 per square
    - name: Size
      value: The area of the corridor to be blocked
    - name: Typical Space
      value: 2 x 1-square area, up to a 4 x 2-square area
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Trap · Ambusher</div>
<h2 class="fb__name">Portcullis</h2>
</header>
<div class="fb__flavor">A portcullis is hidden in the ceiling of a passage or choke point, waiting to drop when activated.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">4</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">9 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">The area of the corridor to be blocked</div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">2 x 1-square area, up to a 4 x 2-square area</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the portcullis and is affected as if in its area.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The portcullis is deactivated but the creature is slowed (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The portcullis is deactivated and doesn&#39;t trigger.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature adjacent to a portcullis can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Heavy Gate</b> ability.</p></div></div>
<div class="fb__feat-body">A pressure plate, switch, or other linked trigger is activated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Heavy Gate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 damage; slide 1, ignoring stability</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">7 damage; A &lt; 2 restrained (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 damage; A &lt; 3 restrained (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A pressure plate, switch, or other linked trigger is activated.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The area of this ability is the area directly beneath the portcullis when it falls.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The portcullis blocks movement from one side of it to the other. A target slid by the portcullis ends up on one side of it or the other (choose randomly). The portcullis must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hidden</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The portcullis is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
