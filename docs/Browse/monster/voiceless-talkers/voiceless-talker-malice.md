---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One non-[minion](scc:mcdm.monsters.v1/rule.organization/minion) voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker's next turn.
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
          text: This ability can't be used by a [minion](scc:mcdm.monsters.v1/rule.organization/minion).
      target: One creature
      usage: Maneuver
    - body: All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-[minion](scc:mcdm.monsters.v1/rule.organization/minion) voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker [minion](scc:mcdm.monsters.v1/rule.organization/minion) on the encounter map. The [minion](scc:mcdm.monsters.v1/rule.organization/minion) takes the damage instead.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Evolutionary Circuit
flavor: At the start of any voiceless talker's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Voiceless Talker Malice
scc: mcdm.monsters.v1/monster.voiceless-talkers/voiceless-talker-malice
type: featureblock
---

# Guise

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Voiceless Talker Malice</h2>
</header>
<div class="fb__flavor">At the start of any voiceless talker&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Guise</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">One non-<a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker&#39;s next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Memory Thief</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 psychic damage; R &lt; 1 the target can&#39;t treat their allies as allies (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 psychic damage; R &lt; 2 the target perceives their allies as enemies (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 psychic damage; R &lt; 3 the target perceives their allies as enemies (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Evolutionary Circuit</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-body">All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-<a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> on the encounter map. The <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> takes the damage instead.</div>
</article>
</div>
</article>
</div>
