---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: One non-[minion](../../rule/organization/minion.md) voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker's next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guise
    - cost: 5 Malice
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Psionic
        - Ranged
      name: Memory Thief
      power_roll:
        formula: + 3
        tiers:
            high: 13 psychic damage; R < 3 the target perceives their allies as enemies (save ends)
            low: 6 psychic damage; R < 1 the target can't treat their allies as allies (save ends)
            mid: 10 psychic damage; R < 2 the target perceives their allies as enemies (save ends)
      sections:
        - label: Special
          text: This ability can't be used by a [minion](../../rule/organization/minion.md).
      target: One creature
      usage: Maneuver
    - body: All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-[minion](../../rule/organization/minion.md) voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker [minion](../../rule/organization/minion.md) on the encounter map. The [minion](../../rule/organization/minion.md) takes the damage instead.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Evolutionary Circuit
flavor: At the start of any voiceless talker's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Voiceless Talker Malice
scc: mcdm.monsters.v1/monster.voiceless-talker/voiceless-talker-malice
type: featureblock
---

# Voiceless Talker Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Voiceless Talker Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any voiceless talker&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Guise</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">One non-<a href="../../../rule/organization/minion/">minion</a> voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker&#39;s next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Memory Thief</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 psychic damage; R &lt; 1 the target can&#39;t treat their allies as allies (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 psychic damage; R &lt; 2 the target perceives their allies as enemies (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 psychic damage; R &lt; 3 the target perceives their allies as enemies (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../../../rule/organization/minion/">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Evolutionary Circuit</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div></div></header></div>
<div class="fb__feat-body">All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-<a href="../../../rule/organization/minion/">minion</a> voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker <a href="../../../rule/organization/minion/">minion</a> on the encounter map. The <a href="../../../rule/organization/minion/">minion</a> takes the damage instead.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any voiceless talker&#39;s turn, you can spend &#91;Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 👤 **Guise (3 Malice)**&#10;&gt;&#10;&gt; One non-&#91;minion](../../rule/organization/minion.md) voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker&#39;s next turn.&#10;&#10;&gt; 🏹 **Memory Thief (5 Malice)**&#10;&gt;&#10;&gt; | **Psionic, Ranged** |        **&#91;Maneuver](../../rule/combat/turn.md)** |&#10;&gt; |---------------------|--------------------:|&#10;&gt; | **📏 Ranged 5**     | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + 3:**&#10;&gt;&#10;&gt; - **≤11:** 6 psychic damage; R &lt; 1 the target can&#39;t treat their allies as allies (save ends)&#10;&gt; - **12-16:** 10 psychic damage; R &lt; 2 the target perceives their allies as enemies (save ends)&#10;&gt; - **17+:** 13 psychic damage; R &lt; 3 the target perceives their allies as enemies (save ends)&#10;&gt;&#10;&gt; **Special:** This ability can&#39;t be used by a &#91;minion](../../rule/organization/minion.md).&#10;&#10;&gt; 🌀 **Evolutionary Circuit (10 Malice)**&#10;&gt;&#10;&gt; All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-&#91;minion](../../rule/organization/minion.md) voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker &#91;minion](../../rule/organization/minion.md) on the encounter map. The &#91;minion](../../rule/organization/minion.md) takes the damage instead."></template>
