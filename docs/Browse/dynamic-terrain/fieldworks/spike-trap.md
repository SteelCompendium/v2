---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to a spike trap can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its area.
            mid: The trap is deactivated but the creature is [slowed](scc:mcdm.heroes.v1/condition/slowed) (EoT).
    - body: The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spike Trap** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Spike Trap
      power_roll:
        formula: + 2
        tiers:
            high: 6 damage; the target falls into the pit; A < 1 [prone](scc:mcdm.heroes.v1/condition/prone); [restrained](scc:mcdm.heroes.v1/condition/restrained) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            low: 3 damage; the target [shifts](scc:mcdm.heroes.v1/movement/shifting) 1 square away from the trap
            mid: 4 damage; the target falls into the pit; A < 0 [prone](scc:mcdm.heroes.v1/condition/prone)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's area.
        - label: Effect
          text: The target ends their movement when they enter the trap's area. The pit is typically 2 squares deep. The trap must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: The spike trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.
level: 2
name: Spike Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/spike-trap
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "6"
    - name: Size
      value: One or more squares
    - name: Typical Space
      value: 2 x 2-square area
terrain_type: Trap
type: dynamic-terrain
---

# Deactivate

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Trap · Ambusher</div>
<h2 class="fb__name">Spike Trap</h2>
</header>
<div class="fb__flavor">A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">6</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">2 x 2-square area</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is affected as if in its area.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn&#39;t trigger.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to a spike trap can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Spike Trap</b> ability.</p></div></div>
<div class="fb__feat-body">The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Spike Trap</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 damage; the target <a href="../scc:mcdm.heroes.v1/movement/shifting">shifts</a> 1 square away from the trap</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; the target falls into the pit; A &lt; 0 <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 damage; the target falls into the pit; A &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a>; <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object of the appropriate size enters the trap&#39;s area.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target ends their movement when they enter the trap&#39;s area. The pit is typically 2 squares deep. The trap must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hidden</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The spike trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
