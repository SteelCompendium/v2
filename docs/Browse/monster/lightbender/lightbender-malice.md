---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each lightbender acting this turn can [teleport](../../movement/teleport.md) up to their speed as a move action and attempt to hide as a free maneuver, all until the start of their next turn.
      cost: 3 Malice
      icon: ⭐️
      name: Silent Prowl
    - body: Each lightbender acting this turn can create a duplicate lightbender in an unoccupied space [adjacent](../../rule/combat/adjacent.md) to them. The duplicate is indistinguishable from the lightbender except by supernatural means, has 1 [Stamina](../../rule/health/stamina.md), and has the lightbender's speed. A duplicate acts on the lightbender's turn but can take only move actions. Once per round before or after using an ability, a lightbender can trade places with any lightbender duplicate.
      cost: 5 Malice
      icon: ⭐️
      name: Duplicate
    - cost: 7 Malice
      icon: ❇️
      intro: Each lightbender in the encounter shines radiantly, distorting the senses of any enemy within 5 squares of them. Each affected enemy makes a **Reason test**.
      name: Everything the Light Touches
      power_roll:
        tiers:
            high: No effect.
            low: The target doesn't have line of effect to any lightbender (save ends).
            mid: The target doesn't have line of effect to any lightbender (EoT).
flavor: At the start of any lightbender's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lightbender Malice
scc: mcdm.monsters.v1/monster.lightbender/lightbender-malice
type: featureblock
---

# Lightbender Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Lightbender Malice</h2>
</header>
<div class="fb__flavor">At the start of any lightbender&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Silent Prowl</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Each lightbender acting this turn can <a href="../../../movement/teleport/">teleport</a> up to their speed as a move action and attempt to hide as a free maneuver, all until the start of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Duplicate</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each lightbender acting this turn can create a duplicate lightbender in an unoccupied space <a href="../../../rule/combat/adjacent/">adjacent</a> to them. The duplicate is indistinguishable from the lightbender except by supernatural means, has 1 <a href="../../../rule/health/stamina/">Stamina</a>, and has the lightbender&#39;s speed. A duplicate acts on the lightbender&#39;s turn but can take only move actions. Once per round before or after using an ability, a lightbender can trade places with any lightbender duplicate.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Everything the Light Touches</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-intro">Each lightbender in the encounter shines radiantly, distorting the senses of any enemy within 5 squares of them. Each affected enemy makes a <b>Reason test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target doesn&#39;t have line of effect to any lightbender (save ends).</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The target doesn&#39;t have line of effect to any lightbender (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>
