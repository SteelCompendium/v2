---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Two elementals on the encounter map [teleport](../../movement/teleport.md) to swap places, and each has damage immunity 2 until the end of the round.
      cost: 3 Malice
      icon: ⭐️
      name: Elemental Swap
    - body: An elemental acting this turn cleaves themself into two separate elementals. Each elemental has the same statistics as the original, except that each has half the original's current Stamina and is one size smaller. Both elementals can then [shift](../../movement/shifting.md) up to their speed.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Split
    - cost: 7 Malice
      distance: Ranged 8
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Convocation of Chaos
      sections:
        - label: Effect
          text: Until the end of the encounter, the target has a +5 bonus to speed and a +5 damage bonus to strikes. Additionally, whenever an elemental within the target's line of effect uses an ability with "Convocation" in the name, the target also gains the effects of that ability.
      target: Self or one elemental
      usage: Maneuver
flavor: At the start of any elemental's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Elemental Malice
scc: mcdm.monsters.v1/monster.elemental/elemental-malice
type: featureblock
---

# Elemental Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Elemental Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any elemental&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Elemental Swap</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">Two elementals on the encounter map <a href="../../../movement/teleport/">teleport</a> to swap places, and each has damage immunity 2 until the end of the round.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Split</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">An elemental acting this turn cleaves themself into two separate elementals. Each elemental has the same statistics as the original, except that each has half the original&#39;s current Stamina and is one size smaller. Both elementals can then <a href="../../../movement/shifting/">shift</a> up to their speed.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Convocation of Chaos</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 8</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self or one elemental</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the end of the encounter, the target has a +5 bonus to speed and a +5 damage bonus to strikes. Additionally, whenever an elemental within the target&#39;s line of effect uses an ability with &#34;Convocation&#34; in the name, the target also gains the effects of that ability.</p></div></div>
</article>
</div>
</article>
</div>
