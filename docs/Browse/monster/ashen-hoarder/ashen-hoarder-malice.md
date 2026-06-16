---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The ashen hoarder moves up to their speed and can make a [free strike](../../feature/common/main-actions/free-strike.md) against two targets.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Relentless Strikes
    - body: The ashen hoarder summons a 10 [wall](../../rule/combat/wall.md) of bones and blades into unoccupied squares within 5 squares of them. Each square of the wall has 5 [Stamina](../../rule/health/stamina.md). An enemy who comes adjacent to the wall for the first time in a round or starts their turn there takes 3 damage.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Blade Wall
    - body: The ashen hoarder takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: The ashen hoarder launches bone lances into the air, raining them down on enemies and impaling those unlucky enough to be on the receiving end. Each enemy within 20 squares of the ashen hoarder makes an **[Agility](../../rule/character/agility.md) test**.
      name: Bone Storm
      power_roll:
        tiers:
            high: 6 damage
            low: 14 damage; [restrained](../../condition/restrained.md) and [bleeding](../../condition/bleeding.md) (save ends)
            mid: 11 damage; [bleeding](../../condition/bleeding.md) ([EoT](../../rule/combat/end-of-turn.md))
flavor: At the start of an ashen hoarder's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ashen Hoarder Malice
scc: mcdm.monsters.v1/monster.ashen-hoarder/ashen-hoarder-malice
type: featureblock
---

# Ashen Hoarder Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Ashen Hoarder Malice</h2>
</header>
<div class="fb__flavor">At the start of an ashen hoarder&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Relentless Strikes</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The ashen hoarder moves up to their speed and can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against two targets.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Blade Wall</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The ashen hoarder summons a 10 <a href="../../../rule/combat/wall/">wall</a> of bones and blades into unoccupied squares within 5 squares of them. Each square of the wall has 5 <a href="../../../rule/health/stamina/">Stamina</a>. An enemy who comes adjacent to the wall for the first time in a round or starts their turn there takes 3 damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Solo Action</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The ashen hoarder takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Bone Storm</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-intro">The ashen hoarder launches bone lances into the air, raining them down on enemies and impaling those unlucky enough to be on the receiving end. Each enemy within 20 squares of the ashen hoarder makes an <b><a href="../../../rule/character/agility/">Agility</a> test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">14 damage; <a href="../../../condition/restrained/">restrained</a> and <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/combat/end-of-turn/">EoT</a>)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 damage</span></div></div></div>
</article>
</div>
</article>
</div>
