---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Lord Syuul projects a psionic screen over his body, preventing other creatures from treating him as an enemy until the end of his next turn.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guise
    - body: Lord Syuul psionically plunders the minds of each creature within 2 squares of him. Each such creature makes a **Reason test**.
      cost: 5 Malice
      icon: ❇️
      name: Do It for Me
      power_roll:
        tiers:
            high: No effect.
            low: 13 psychic damage; the target uses a [signature ability](scc:mcdm.heroes.v1/rule.combat/signature-ability) against a creature of Lord Syuul's choice
            mid: 10 psychic damage; the target makes a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike) against a creature of Lord Syuul's choice
    - body: Lord Syuul takes an additional main action on his turn. He can use this feature even if he is [dazed](scc:mcdm.heroes.v1/condition/dazed).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: |-
        Lord Syuul sends out a psionic burst to completely overpower his greatest threats. He makes a **Reason test** (2d10 + 4).

        Once per round as a maneuver, Lord Syuul can repeat this test, replacing the previous Overpower effect.

        Whenever an Overpower effect is active, any hero who has one or more psionic abilities can use a maneuver to push back by making a **Reason test**, replacing the previous Overpower effect.

        The Overpower effect lasts until the end of the encounter.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Overpower
      power_roll:
        tiers:
            high: Lord Syuul has damage weakness 5.
            low: Lord Syuul has damage immunity 5.
            mid: Lord Syuul has damage immunity 2.
flavor: At the start of Lord Syuul's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lord Syuul's Malice
scc: mcdm.monsters.v1/monster.lord-syuul/lord-syuuls-malice
type: featureblock
---

# Lord Syuul's Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Lord Syuul&#39;s Malice</h2>
</header>
<div class="fb__flavor">At the start of Lord Syuul&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Guise</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Lord Syuul projects a psionic screen over his body, preventing other creatures from treating him as an enemy until the end of his next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Do It for Me</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">13 psychic damage; the target uses a <a href="../scc:mcdm.heroes.v1/rule.combat/signature-ability">signature ability</a> against a creature of Lord Syuul&#39;s choice</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 psychic damage; the target makes a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a> against a creature of Lord Syuul&#39;s choice</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">Lord Syuul psionically plunders the minds of each creature within 2 squares of him. Each such creature makes a <b>Reason test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Lord Syuul takes an additional main action on his turn. He can use this feature even if he is <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Overpower</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">Lord Syuul has damage immunity 5.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">Lord Syuul has damage immunity 2.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">Lord Syuul has damage weakness 5.</span></div></div></div>
<div class="fb__feat-body">Lord Syuul sends out a psionic burst to completely overpower his greatest threats. He makes a <b>Reason test</b> (2d10 + 4).

Once per round as a maneuver, Lord Syuul can repeat this test, replacing the previous Overpower effect.

Whenever an Overpower effect is active, any hero who has one or more psionic abilities can use a maneuver to push back by making a <b>Reason test</b>, replacing the previous Overpower effect.

The Overpower effect lasts until the end of the encounter.</div>
</article>
</div>
</article>
</div>
