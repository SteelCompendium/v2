---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: For each 3 [Malice](../../rule/monster/malice.md) spent, one minotaur acting this turn gains a +4 bonus to speed and ignores [difficult terrain](../../movement/difficult-terrain.md) until the start of their next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Bull Rush
    - body: One minotaur acting this turn halves any damage they take, and can use the Knockback maneuver as a free triggered action whenever an enemy comes [adjacent](../../rule/combat/adjacent.md) to them, all until the start of their next turn.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Cut the... Nonsense!
    - body: All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is [teleported](../../movement/teleport.md) up to 5 squares and makes an **Intuition test**.
      cost: 7 Malice
      icon: ❇️
      name: Bullseye
      power_roll:
        tiers:
            high: No effect.
            low: The target has line of effect only within 3 squares and is [frightened](../../condition/frightened.md) of all minotaurs (save ends).
            mid: The target has line of effect only within 3 squares (EoT).
flavor: At the start of any minotaur's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Minotaur Malice
scc: mcdm.monsters.v1/monster.minotaurs/minotaur-malice
type: featureblock
---

# Minotaur Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Minotaur Malice</h2>
</header>
<div class="fb__flavor">At the start of any minotaur&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Bull Rush</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">For each 3 <a href="../../../rule/monster/malice/">Malice</a> spent, one minotaur acting this turn gains a +4 bonus to speed and ignores <a href="../../../movement/difficult-terrain/">difficult terrain</a> until the start of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Cut the... Nonsense!</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">One minotaur acting this turn halves any damage they take, and can use the Knockback maneuver as a free triggered action whenever an enemy comes <a href="../../../rule/combat/adjacent/">adjacent</a> to them, all until the start of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Bullseye</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target has line of effect only within 3 squares and is <a href="../../../condition/frightened/">frightened</a> of all minotaurs (save ends).</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The target has line of effect only within 3 squares (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is <a href="../../../movement/teleport/">teleported</a> up to 5 squares and makes an <b>Intuition test</b>.</div>
</article>
</div>
</article>
</div>
