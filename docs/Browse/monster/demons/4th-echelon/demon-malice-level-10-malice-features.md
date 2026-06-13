---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The demon activates a [Malice](scc:mcdm.monsters.v1/rule.monster/malice) feature available to demons of level 9 or lower.
      cost: 3-7 Malice
      icon: ⭐️
      name: Prior Malice Features
    - body: One demon acting this turn unleashes their pent-up agony and pain on every non-demon in a 5 burst. Each target makes a **Presence test**.
      cost: 7 Malice
      icon: ❇️
      name: Soul Flense
      power_roll:
        tiers:
            high: No effect.
            low: 10 corruption damage; the target is soul flensed
            mid: The target is soul flensed
      sections:
        - label: Effect
          text: The demon removes all [conditions](scc:mcdm.heroes.v1/rule.combat/condition) and effects on themself that can be ended by a [saving throw](scc:mcdm.heroes.v1/rule.general/saving-throw), and transfers all those effects to each creature soul flensed this way.
flavor: At the start of any level 10 or higher demon's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 10
name: Demon Malice (Level 10+ Malice Features)
scc: mcdm.monsters.v1/monster.demons.4th-echelon/demon-malice-level-10-malice-features
type: featureblock
---

# Prior Malice Features

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Demon Malice (Level 10+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any level 10 or higher demon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Prior Malice Features</h3><div class="fb__feat-corner"><div class="sc-ability__cost">3-7 Malice</div></div></div>
<div class="fb__feat-body">The demon activates a <a href="../scc:mcdm.monsters.v1/rule.monster/malice">Malice</a> feature available to demons of level 9 or lower.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Soul Flense</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 corruption damage; the target is soul flensed</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The target is soul flensed</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The demon removes all <a href="../scc:mcdm.heroes.v1/rule.combat/condition">conditions</a> and effects on themself that can be ended by a <a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">saving throw</a>, and transfers all those effects to each creature soul flensed this way.</p></div></div>
<div class="fb__feat-body">One demon acting this turn unleashes their pent-up agony and pain on every non-demon in a 5 burst. Each target makes a <b>Presence test</b>.</div>
</article>
</div>
</article>
</div>
