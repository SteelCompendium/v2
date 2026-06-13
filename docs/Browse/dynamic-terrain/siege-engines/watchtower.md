---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The watchtower must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: Creatures who have access to the watchtower's interior ladders or stairs have [high ground](scc:mcdm.heroes.v1/movement/high-ground) and [cover](scc:mcdm.heroes.v1/rule.combat/cover) against creatures outside the watchtower.
      icon: ⭐️
      name: High Ground and Cover
    - body: A creature outside and [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to the watchtower can gain access to the interior by climbing it as an **Agility test** or breaking into it with a **Might test**.
      icon: "\U0001F300"
      name: Getting Inside
      power_roll:
        tiers:
            high: The creature gains access to the watchtower.
            low: 1d6 damage; the creature remains outside the watchtower
            mid: The creature remains outside the watchtower.
    - body: |-
        **Ballista Emplacement (+12 EV)** The watchtower is equipped with a [field ballista](scc:mcdm.monsters.v1/dynamic-terrain.siege-engines/field-ballista) that can be used by creatures in the watchtower. The ballista can't be moved.

        **Boiling Oil Cauldron (+17 EV)** The watchtower is equipped with a [boiling oil cauldron](scc:mcdm.monsters.v1/dynamic-terrain.siege-engines/boiling-oil-cauldron) that can be used by creatures in the watchtower.

        **Spyglass (+2 EV)** Any creature in the watchtower can use the spyglass to search for hidden creatures around the tower, gaining an edge on the Intuition test and increasing the distance at which creatures can be spotted to 15 squares.

        **Stone Tower (+2 EV)** The watchtower is reinforced with stone and has 75 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina).

        **Iron Tower (+4 EV)** The watchtower is reinforced with stone and iron and has 100 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina).
      icon: ⭐️
      name: Upgrades
flavor: A sturdy wooden tower accessed by interior ladders or stairs provides cover and high ground for attackers.
level: 2
name: Watchtower
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/watchtower
stats:
    - name: EV
      value: "8"
    - name: Stamina
      value: "50"
    - name: Size
      value: "3"
terrain_type: Fortification
type: dynamic-terrain
---

# Watchtower

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Fortification · Defender</div>
<h2 class="fb__name">Watchtower</h2>
</header>
<div class="fb__flavor">A sturdy wooden tower accessed by interior ladders or stairs provides cover and high ground for attackers.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">8</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">50</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">3</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The watchtower must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">High Ground and Cover</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Creatures who have access to the watchtower&#39;s interior ladders or stairs have <a href="../scc:mcdm.heroes.v1/movement/high-ground">high ground</a> and <a href="../scc:mcdm.heroes.v1/rule.combat/cover">cover</a> against creatures outside the watchtower.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Getting Inside</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">1d6 damage; the creature remains outside the watchtower</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature remains outside the watchtower.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature gains access to the watchtower.</span></div></div></div>
<div class="fb__feat-body">A creature outside and <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to the watchtower can gain access to the interior by climbing it as an <b>Agility test</b> or breaking into it with a <b>Might test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Ballista Emplacement (+12 EV)</b> The watchtower is equipped with a <a href="../scc:mcdm.monsters.v1/dynamic-terrain.siege-engines/field-ballista">field ballista</a> that can be used by creatures in the watchtower. The ballista can&#39;t be moved.

<b>Boiling Oil Cauldron (+17 EV)</b> The watchtower is equipped with a <a href="../scc:mcdm.monsters.v1/dynamic-terrain.siege-engines/boiling-oil-cauldron">boiling oil cauldron</a> that can be used by creatures in the watchtower.

<b>Spyglass (+2 EV)</b> Any creature in the watchtower can use the spyglass to search for hidden creatures around the tower, gaining an edge on the Intuition test and increasing the distance at which creatures can be spotted to 15 squares.

<b>Stone Tower (+2 EV)</b> The watchtower is reinforced with stone and has 75 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a>.

<b>Iron Tower (+4 EV)</b> The watchtower is reinforced with stone and iron and has 100 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a>.</div>
</article>
</div>
</article>
</div>
