---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a hidey-hole can make a **Might test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The hidey-hole collapses and can no longer be used until repaired.
            low: The creature is [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends).
            mid: The hidey-hole collapses but the creature is [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends).
    - body: A creature starts the encounter in the hidey-hole or ends their turn there.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature can attempt to [hide](../../feature/common/maneuvers/hide.md) as a free triggered action.
    - body: '**Network (+1 EV per hidey-hole)** The hidey-hole is connected to a tunnel network. A creature familiar with the network can move from one hidey-hole to any space [adjacent](../../rule/combat/adjacent.md) to a connected hidey-hole if they have movement available equal to the straight-line distance to that space. A creature unfamiliar with the network can use a maneuver to make a **hard Intuition test** to discover a connected hidey-hole.'
      icon: ⭐️
      name: Upgrade
flavor: A cavity in a floor, wall, or ceiling might hold hidden threats.
level: 1
name: Hidey-Hole
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/hidey-hole
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: '-'
    - name: Size
      value: One or more squares
terrain_type: Fortification
type: dynamic-terrain
---

# Hidey-Hole

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Fortification · Ambusher</div>
<h2 class="fb__name">Hidey-Hole</h2>
</header>
<div class="fb__flavor">A cavity in a floor, wall, or ceiling might hold hidden threats.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">-</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a hidey-hole can make a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature is <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends).</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The hidey-hole collapses but the creature is <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The hidey-hole collapses and can no longer be used until repaired.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature can attempt to <a href="../../../feature/common/maneuvers/hide/">hide</a> as a free triggered action.</p></div></div>
<div class="fb__feat-body">A creature starts the encounter in the hidey-hole or ends their turn there.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrade</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Network (+1 EV per hidey-hole)</b> The hidey-hole is connected to a tunnel network. A creature familiar with the network can move from one hidey-hole to any space <a href="../../../rule/combat/adjacent/">adjacent</a> to a connected hidey-hole if they have movement available equal to the straight-line distance to that space. A creature unfamiliar with the network can use a maneuver to make a <b>hard Intuition test</b> to discover a connected hidey-hole.</div>
</article>
</div>
</article>
</div>
