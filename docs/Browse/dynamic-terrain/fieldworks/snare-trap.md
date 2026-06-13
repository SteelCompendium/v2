---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to a snare trap can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its space.
            mid: The trap is deactivated but the creature is [slowed](scc:mcdm.heroes.v1/condition/slowed) (EoT).
    - body: The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A triggering creature or object ends their movement and is targeted by the **Snare** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Snare
      power_roll:
        formula: + 2
        tiers:
            high: 3 damage; A < 2 [restrained](scc:mcdm.heroes.v1/condition/restrained) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            low: The target [shifts](scc:mcdm.heroes.v1/movement/shifting) 1 square away from the snare.
            mid: 1 damage; A < 1 [restrained](scc:mcdm.heroes.v1/condition/restrained) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's space.
        - label: Effect
          text: A creature [restrained](scc:mcdm.heroes.v1/condition/restrained) this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful [save](scc:mcdm.heroes.v1/rule.general/saving-throw), the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Net Trap (+1 EV)** The snare becomes a net that can wrap up multiple targets. The net has 3 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina) and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their [save](scc:mcdm.heroes.v1/rule.general/saving-throw) to end the [restrained](scc:mcdm.heroes.v1/condition/restrained) effect ends that effect for all targets, who all fall to the ground.'
      icon: ⭐️
      name: Upgrade
    - body: The snare trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A rope snare is set to grab a target, leaving them hanging upside down.
level: 1
name: Snare Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/snare-trap
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "1"
    - name: Size
      value: 1S
terrain_type: Trap
type: dynamic-terrain
---

# Snare Trap

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Trap · Ambusher</div>
<h2 class="fb__name">Snare Trap</h2>
</header>
<div class="fb__flavor">A rope snare is set to grab a target, leaving them hanging upside down.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is affected as if in its space.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn&#39;t trigger.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to a snare trap can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A triggering creature or object ends their movement and is targeted by the <b>Snare</b> ability.</p></div></div>
<div class="fb__feat-body">The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Snare</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target <a href="../scc:mcdm.heroes.v1/movement/shifting">shifts</a> 1 square away from the snare.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">1 damage; A &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">3 damage; A &lt; 2 <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object of the appropriate size enters the trap&#39;s space.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A creature <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful <a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a>, the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrade</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Net Trap (+1 EV)</b> The snare becomes a net that can wrap up multiple targets. The net has 3 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a> and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their <a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> to end the <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> effect ends that effect for all targets, who all fall to the ground.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hidden</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The snare trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
