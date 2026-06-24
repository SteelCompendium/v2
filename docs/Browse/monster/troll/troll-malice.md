---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      icon: "\U0001F533"
      intro: One troll acting this turn spews out a half-digested meal in a 5 x 1 line within 1 square of them. Each troll in the area regains 3 [Stamina](../../rule/health/stamina.md). Each enemy in the area makes a **Might test**.
      name: Foul Spew
      power_roll:
        tiers:
            high: 6 acid damage
            low: 12 acid damage; [dazed](../../condition/dazed.md) (EoT)
            mid: 10 acid damage; [weakened](../../condition/weakened.md) (EoT)
    - body: Each troll in the encounter can make a [free strike](../../feature/common/main-actions/free-strike.md) against a creature [adjacent](../../rule/combat/adjacent.md) to them, and regains [Stamina](../../rule/health/stamina.md) equal to the damage dealt.
      cost: 5 Malice
      icon: "\U0001F5E1"
      name: Emergency Meal
    - body: Each [winded](../../rule/health/winded.md) troll in the encounter disgorges the contents of their stomach onto the ground around them, creating a 1 burst of foul vomitus that lasts until the end of the encounter. Each non-troll who enters this area for the first time in a round or starts their turn there takes 5 acid damage. Each troll in the area has a double edge on power rolls.
      cost: 7 Malice
      icon: ❇️
      name: Bloody Banquet
flavor: At the start of any troll's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Troll Malice
scc: mcdm.monsters.v1/monster.troll/troll-malice
type: featureblock
---

# Troll Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Troll Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any troll&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Foul Spew</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-intro">One troll acting this turn spews out a half-digested meal in a 5 x 1 line within 1 square of them. Each troll in the area regains 3 <a href="../../../rule/health/stamina/">Stamina</a>. Each enemy in the area makes a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 acid damage; <a href="../../../condition/dazed/">dazed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 acid damage; <a href="../../../condition/weakened/">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 acid damage</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Emergency Meal</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each troll in the encounter can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to them, and regains <a href="../../../rule/health/stamina/">Stamina</a> equal to the damage dealt.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bloody Banquet</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">Each <a href="../../../rule/health/winded/">winded</a> troll in the encounter disgorges the contents of their stomach onto the ground around them, creating a 1 burst of foul vomitus that lasts until the end of the encounter. Each non-troll who enters this area for the first time in a round or starts their turn there takes 5 acid damage. Each troll in the area has a double edge on power rolls.</div>
</article>
</div>
</article>
</div>
