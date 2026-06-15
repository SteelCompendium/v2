---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The lich makes a [free strike](../../feature/common/main-actions/free-strike.md) against one enemy within 20 squares. They then gain an edge on their next power roll.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Soul Sip
    - body: The lich takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      icon: "\U0001F464"
      intro: The lich summons a swirling cloud of angry spirits to surround them until the start of the next round. Any creature who deals damage to the lich with a melee strike while the spirit shell is active makes a **Presence test**.
      name: Spirit Shell
      power_roll:
        tiers:
            high: No effect.
            low: 16 psychic damage, [dazed](../../condition/dazed.md) (save ends)
            mid: '[Dazed](../../condition/dazed.md) (save ends)'
    - body: |-
        The lich summons a mind-altering mist, turns invisible until the start of their next turn, and moves up to half their speed. Each enemy within 20 squares of the lich's starting point who has I < 4 is deceived. While deceived, a creature perceives all allies and enemies as the lich, and perceives the environment as an unfamiliar wasteland corrupted by necrotic blight. If other creatures attempt to communicate with a deceived creature, that creature interprets their words as ghastly taunts in the lich's voice.

        This effect lasts until an affected creature takes damage or an ally uses a main action to shake them out of it. Each time this feature is used during an encounter, the distance of the effect decreases by 5 squares (to a minimum of 5 squares) and the [potency](../../rule/character/potency.md) increases by 1.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Cloud of Deceit
flavor: At the start of a lich's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lich Malice
scc: mcdm.monsters.v1/monster.lich/lich-malice
type: featureblock
---

# Lich Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Lich Malice</h2>
</header>
<div class="fb__flavor">At the start of a lich&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Soul Sip</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The lich makes a <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against one enemy within 20 squares. They then gain an edge on their next power roll.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The lich takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Spirit Shell</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-intro">The lich summons a swirling cloud of angry spirits to surround them until the start of the next round. Any creature who deals damage to the lich with a melee strike while the spirit shell is active makes a <b>Presence test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">16 psychic damage, <a href="../../../condition/dazed/">dazed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../condition/dazed/">Dazed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Cloud of Deceit</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">The lich summons a mind-altering mist, turns invisible until the start of their next turn, and moves up to half their speed. Each enemy within 20 squares of the lich&#39;s starting point who has I &lt; 4 is deceived. While deceived, a creature perceives all allies and enemies as the lich, and perceives the environment as an unfamiliar wasteland corrupted by necrotic blight. If other creatures attempt to communicate with a deceived creature, that creature interprets their words as ghastly taunts in the lich&#39;s voice.

This effect lasts until an affected creature takes damage or an ally uses a main action to shake them out of it. Each time this feature is used during an encounter, the distance of the effect decreases by 5 squares (to a minimum of 5 squares) and the <a href="../../../rule/character/potency/">potency</a> increases by 1.</div>
</article>
</div>
</article>
</div>
