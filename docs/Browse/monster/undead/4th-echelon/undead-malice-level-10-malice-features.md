---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The [undead](scc:mcdm.monsters.v1/rule.keyword/undead) activates a [Malice](scc:mcdm.monsters.v1/rule.monster/malice) feature available to [undead](scc:mcdm.monsters.v1/rule.keyword/undead) of level 9 or lower.
      cost: 2-7+ Malice
      icon: ⭐️
      name: Prior Malice Features
    - body: The [undead](scc:mcdm.monsters.v1/rule.keyword/undead) attempts to rend the vitality of their foes. Each enemy within 5 squares of the [undead](scc:mcdm.monsters.v1/rule.keyword/undead) makes a **Might test**.
      cost: 7 Malice
      icon: ❇️
      name: Death Tax
      power_roll:
        tiers:
            high: 5 corruption damage
            low: 10 corruption damage; the target loses 2 [Recoveries](scc:mcdm.heroes.v1/rule.health/recoveries)
            mid: 8 corruption damage; the target loses 1 [Recovery](scc:mcdm.heroes.v1/rule.health/recoveries)
      sections:
        - label: Effect
          text: A target who has fewer [Recoveries](scc:mcdm.heroes.v1/rule.health/recoveries) than they would lose is also [weakened](scc:mcdm.heroes.v1/condition/weakened) (save ends).
        - label: Special
          text: This ability can't be used by a [minion](scc:mcdm.monsters.v1/rule.organization/minion).
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
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Undead Malice (Level 10 Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any level 10 undead&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Prior Malice Features</h3><div class="fb__feat-corner"><div class="sc-ability__cost">2-7+ Malice</div></div></div>
<div class="fb__feat-body">The <a href="../scc:mcdm.monsters.v1/rule.keyword/undead">undead</a> activates a <a href="../scc:mcdm.monsters.v1/rule.monster/malice">Malice</a> feature available to <a href="../scc:mcdm.monsters.v1/rule.keyword/undead">undead</a> of level 9 or lower.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Death Tax</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 corruption damage; the target loses 2 <a href="../scc:mcdm.heroes.v1/rule.health/recoveries">Recoveries</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 corruption damage; the target loses 1 <a href="../scc:mcdm.heroes.v1/rule.health/recoveries">Recovery</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target who has fewer <a href="../scc:mcdm.heroes.v1/rule.health/recoveries">Recoveries</a> than they would lose is also <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (save ends).</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a>.</p></div></div>
<div class="fb__feat-body">The <a href="../scc:mcdm.monsters.v1/rule.keyword/undead">undead</a> attempts to rend the vitality of their foes. Each enemy within 5 squares of the <a href="../scc:mcdm.monsters.v1/rule.keyword/undead">undead</a> makes a <b>Might test</b>.</div>
</article>
</div>
</article>
</div>
