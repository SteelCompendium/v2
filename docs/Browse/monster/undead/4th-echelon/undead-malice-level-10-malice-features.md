---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: The [undead](../../../rule/keyword/undead.md) activates a [Malice](../../../rule/monster/malice.md) feature available to [undead](../../../rule/keyword/undead.md) of level 9 or lower.
      cost: 2-7+ Malice
      icon: ⭐️
      name: Prior Malice Features
    - cost: 7 Malice
      icon: ❇️
      intro: The [undead](../../../rule/keyword/undead.md) attempts to rend the vitality of their foes. Each enemy within 5 squares of the [undead](../../../rule/keyword/undead.md) makes a **Might test**.
      name: Death Tax
      power_roll:
        tiers:
            high: 5 corruption damage
            low: 10 corruption damage; the target loses 2 [Recoveries](../../../rule/health/recoveries.md)
            mid: 8 corruption damage; the target loses 1 [Recovery](../../../rule/health/recoveries.md)
      sections:
        - label: Effect
          text: A target who has fewer [Recoveries](../../../rule/health/recoveries.md) than they would lose is also [weakened](../../../condition/weakened.md) (save ends).
        - label: Special
          text: This ability can't be used by a [minion](../../../rule/organization/minion.md).
flavor: At the start of any level 10 undead's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 10
name: Undead Malice (Level 10 Malice Features)
scc: mcdm.monsters.v1/monster.undead.4th-echelon/undead-malice-level-10-malice-features
type: featureblock
---

# Undead Malice (Level 10 Malice Features)

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Undead Malice (Level 10 Malice Features)</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 10</div></div></header>
<div class="fb__flavor">At the start of any level 10 undead&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Prior Malice Features</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">2-7+ Malice</div></div></header></div>
<div class="fb__feat-body">The <a href="../../../../rule/keyword/undead/">undead</a> activates a <a href="../../../../rule/monster/malice/">Malice</a> feature available to <a href="../../../../rule/keyword/undead/">undead</a> of level 9 or lower.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Death Tax</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">The <a href="../../../../rule/keyword/undead/">undead</a> attempts to rend the vitality of their foes. Each enemy within 5 squares of the <a href="../../../../rule/keyword/undead/">undead</a> makes a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 corruption damage; the target loses 2 <a href="../../../../rule/health/recoveries/">Recoveries</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 corruption damage; the target loses 1 <a href="../../../../rule/health/recoveries/">Recovery</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target who has fewer <a href="../../../../rule/health/recoveries/">Recoveries</a> than they would lose is also <a href="../../../../condition/weakened/">weakened</a> (save ends).</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../../../../rule/organization/minion/">minion</a>.</p></div></div>
</article>
</div>
</article>
</div>
