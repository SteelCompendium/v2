---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The pillar's linked trigger must be deactivated.
      icon: "\U0001F300"
      name: Deactivate
    - body: The pillar is destroyed, or a [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Toppling Pillar** ability.
    - distance: 4 x 1 line within 1
      icon: ❗️
      keywords:
        - Area
      name: Toppling Pillar
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; M < 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 4 damage
            mid: 6 damage; M < 1 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: The pillar is destroyed, or a [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
        - label: Effect
          text: The area is [difficult terrain](../../movement/difficult-terrain.md).
      target: Each creature and object in the area
      usage: Free triggered action
    - body: |-
        **Metal Pillar (+1 EV)** The pillar is made of metal, has 9 [Stamina](../../rule/health/stamina.md), and deals 1d6 extra damage.

        **Multiple Pillars (+3 EV per additional pillar)** Multiple pillars can be used to represent a larger toppling object such as a wall. If triggered by destruction, all individual pillars need to be destroyed before the object falls.
      icon: ⭐️
      name: Upgrades
flavor: This stone pillar can be toppled onto unsuspecting foes with the right amount of damage or a well-engineered trigger mechanism.
level: 2
name: Pillar
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/pillar
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "6"
    - name: Size
      value: One square that can't be moved through
    - name: Direction
      value: The pillar topples in a preset direction.
terrain_type: Hazard
type: dynamic-terrain
---

# Pillar

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Hazard · Hexer</div>
<h2 class="fb__name">Pillar</h2>
</header>
<div class="fb__flavor">This stone pillar can be toppled onto unsuspecting foes with the right amount of damage or a well-engineered trigger mechanism.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">6</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One square that can&#39;t be moved through</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">The pillar topples in a preset direction.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The pillar&#39;s linked trigger must be deactivated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Toppling Pillar</b> ability.</p></div></div>
<div class="fb__feat-body">The pillar is destroyed, or a <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Toppling Pillar</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 x 1 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; M &lt; 1 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage; M &lt; 2 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The pillar is destroyed, or a <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area is <a href="../../../movement/difficult-terrain/">difficult terrain</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Metal Pillar (+1 EV)</b> The pillar is made of metal, has 9 <a href="../../../rule/health/stamina/">Stamina</a>, and deals 1d6 extra damage.

<b>Multiple Pillars (+3 EV per additional pillar)</b> Multiple pillars can be used to represent a larger toppling object such as a wall. If triggered by destruction, all individual pillars need to be destroyed before the object falls.</div>
</article>
</div>
</article>
</div>
