---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Until the end of the round, when an angulotl moves through an inactive angulotl's space, the inactive angulotl can use a free triggered action to jump 3 squares.
      cost: 3 Malice
      icon: ⭐️
      name: Leapfrog
    - body: Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an **[Intuition](../../rule/character/intuition.md) test.**
      cost: 5 Malice
      icon: ❇️
      name: Resonating Croak
      power_roll:
        tiers:
            high: No effect.
            low: 5 sonic damage; [slowed](../../condition/slowed.md) ([EoT](../../rule/combat/end-of-turn.md))
            mid: 4 sonic damage
    - body: An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Rainfall
flavor: At the start of any angulotl's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Angulotl Malice
scc: mcdm.monsters.v1/monster.angulotls/angulotl-malice
type: featureblock
---

# Angulotl Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Angulotl Malice</h2>
</header>
<div class="fb__flavor">At the start of any angulotl&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Leapfrog</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, when an angulotl moves through an inactive angulotl&#39;s space, the inactive angulotl can use a free triggered action to jump 3 squares.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Resonating Croak</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 sonic damage; <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/combat/end-of-turn/">EoT</a>)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 sonic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an <b><a href="../../../rule/character/intuition/">Intuition</a> test.</b></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Rainfall</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.</div>
</article>
</div>
</article>
</div>
