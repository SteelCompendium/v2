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
    - cost: 7 Malice
      icon: ❇️
      intro: All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is [teleported](../../movement/teleport.md) up to 5 squares and makes an **Intuition test**.
      name: Bullseye
      power_roll:
        tiers:
            high: No effect.
            low: The target has line of effect only within 3 squares and is [frightened](../../condition/frightened.md) of all minotaurs (save ends).
            mid: The target has line of effect only within 3 squares (EoT).
flavor: At the start of any minotaur's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Minotaur Malice
scc: mcdm.monsters.v1/monster.minotaur/minotaur-malice
type: featureblock
---

# Minotaur Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Minotaur Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any minotaur&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bull Rush</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">For each 3 <a href="../../../rule/monster/malice/">Malice</a> spent, one minotaur acting this turn gains a +4 bonus to speed and ignores <a href="../../../movement/difficult-terrain/">difficult terrain</a> until the start of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Cut the... Nonsense!</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">One minotaur acting this turn halves any damage they take, and can use the Knockback maneuver as a free triggered action whenever an enemy comes <a href="../../../rule/combat/adjacent/">adjacent</a> to them, all until the start of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bullseye</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">All minotaurs in the encounter fill the area around them with psychic impressions of feeling lost and isolated. Each enemy within 5 squares of a minotaur is <a href="../../../movement/teleport/">teleported</a> up to 5 squares and makes an <b>Intuition test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target has line of effect only within 3 squares and is <a href="../../../condition/frightened/">frightened</a> of all minotaurs (save ends).</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The target has line of effect only within 3 squares (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>
