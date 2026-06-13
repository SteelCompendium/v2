---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to the black obelisk can make a **Reason test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The obelisk is deactivated until the end of the encounter.
            low: The creature accidentally activates the **Your Fears Become Manifest** ability, which gains an edge.
            mid: The creature must make another test to deactivate the obelisk. If they obtain this outcome a second time, they accidentally activate **Your Fears Become Manifest**.
    - body: A new round starts.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Your Fears Become Manifest** ability.
    - distance: 10 burst
      icon: ❗️
      keywords:
        - Area
        - Magic
      name: Your Fears Become Manifest
      power_roll:
        formula: + 2
        tiers:
            high: P < 3 [frightened](scc:mcdm.heroes.v1/condition/frightened), [slowed](scc:mcdm.heroes.v1/condition/slowed), and [weakened](scc:mcdm.heroes.v1/condition/weakened) (EoT)
            low: P < 1 [slowed](scc:mcdm.heroes.v1/condition/slowed) (EoT)
            mid: P < 2 [slowed](scc:mcdm.heroes.v1/condition/slowed) and [weakened](scc:mcdm.heroes.v1/condition/weakened) (EoT)
      sections:
        - label: Trigger
          text: A new round starts.
        - label: Effect
          text: The target is pushed 2 squares.
      target: Each enemy in the area
      usage: Free triggered action
flavor: A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.
level: 3
name: The Black Obelisk
role: Controller
scc: mcdm.monsters.v1/dynamic-terrain.supernatural-objects/the-black-obelisk
stats:
    - name: EV
      value: "20"
    - name: Stamina
      value: "100"
    - name: Size
      value: "2"
terrain_type: Relic
type: dynamic-terrain
---

# The Black Obelisk

---

<div class="fb-wrap" data-role="controller">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Relic · Controller</div>
<h2 class="fb__name">The Black Obelisk</h2>
</header>
<div class="fb__flavor">A foreboding obelisk shaped of dark stone harrows the minds and spirits of those around it.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">20</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">100</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Your Fears Become Manifest</b> ability, which gains an edge.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature must make another test to deactivate the obelisk. If they obtain this outcome a second time, they accidentally activate <b>Your Fears Become Manifest</b>.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The obelisk is deactivated until the end of the encounter.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to the black obelisk can make a <b>Reason test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Your Fears Become Manifest</b> ability.</p></div></div>
<div class="fb__feat-body">A new round starts.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Your Fears Become Manifest</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">P &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">P &lt; 2 <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> and <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">P &lt; 3 <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a>, <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a>, and <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (EoT)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A new round starts.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target is pushed 2 squares.</p></div></div>
</article>
</div>
</article>
</div>
