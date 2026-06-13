---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One wyvern in the encounter can make a free strike against each enemy adjacent to them.
      cost: 3 Malice
      icon: "\U0001F5E1"
      name: Simmering Anger
    - body: Until the end of the round, each wyvern in the encounter has a double edge on strikes and can use their signature ability instead of a free strike when making opportunity attacks.
      cost: 5 Malice
      icon: ⭐️
      name: Boiling Fury
    - body: Every wyvern's anger fills the encounter map with a thick miasma of hatred. Each enemy in the encounter makes an **Intuition test**.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Overflowing Rage
      power_roll:
        tiers:
            high: No effect.
            low: The target is taunted by the nearest creature or object (save ends). While the target is taunted this way, power rolls against them have a double edge.
            mid: The target is taunted by the nearest creature or object (save ends).
flavor: At the start of any wyvern's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Wyvern Malice
scc: mcdm.monsters.v1/monster.wyverns/wyvern-malice
type: featureblock
---

# Simmering Anger

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Wyvern Malice</h2>
</header>
<div class="fb__flavor">At the start of any wyvern&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Simmering Anger</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">One wyvern in the encounter can make a free strike against each enemy adjacent to them.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Boiling Fury</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each wyvern in the encounter has a double edge on strikes and can use their signature ability instead of a free strike when making opportunity attacks.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Overflowing Rage</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target is taunted by the nearest creature or object (save ends). While the target is taunted this way, power rolls against them have a double edge.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The target is taunted by the nearest creature or object (save ends).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">Every wyvern&#39;s anger fills the encounter map with a thick miasma of hatred. Each enemy in the encounter makes an <b>Intuition test</b>.</div>
</article>
</div>
</article>
</div>
