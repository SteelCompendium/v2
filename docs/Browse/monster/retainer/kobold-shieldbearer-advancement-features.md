---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Ranged 5
      icon: ❗️
      keywords:
        - Ranged
      level: 4
      name: Shield Block
      sections:
        - label: Trigger
          text: The mentor takes damage from a strike while within distance.
        - label: Effect
          text: The shieldbearer blocks the [strike](../../rule/combat/strike.md) (if [adjacent](../../rule/combat/adjacent.md) to the mentor) or throws their shield into the mentor's space. The triggering [strike](../../rule/combat/strike.md)'s damage is halved and the [potency](../../rule/character/potency.md) of any [potency](../../rule/character/potency.md) effects is reduced by 1. If the shieldbearer threw their shield, it bounces back to their hand.
      target: The shieldbearer's mentor
      usage: Triggered action
    - distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
      level: 7
      name: Living Backpack
      sections:
        - label: Effect
          text: The shieldbearer straps their shield on their back and climbs onto their mentor's back, entering the mentor's space. While the shieldbearer is on their mentor's back, each of them gains 10 [temporary Stamina](../../rule/health/temporary-stamina.md) and can use Shield Block as a triggered action targeting an ally instead of the shieldbearer's mentor. Additionally, the shieldbearer moves with the mentor, and they can't use main actions, maneuvers, or move actions except to end this effect as a maneuver. The effect also ends if the shieldbearer is [force moved](../../movement/forced-movement.md) away from their mentor or knocked [prone](../../condition/prone.md). If the shieldbearer is still in their mentor's space when the effect ends, they move into an [adjacent](../../rule/combat/adjacent.md) unoccupied space of their choice.
      target: The shieldbearer's mentor
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Charge
        - Melee
        - Strike
        - Weapon
      level: 10
      name: Let's Go Sledding
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 14 damage; M < STRONG [prone](../../condition/prone.md)
            low: 6 damage; M < WEAK [prone](../../condition/prone.md)
            mid: 10 damage; M < AVERAGE [prone](../../condition/prone.md)
      sections:
        - label: Effect
          text: If this ability is used as part of the [Charge](../../feature/common/main-actions/charge.md) main action, the shieldbearer gains 2 [surges](../../rule/resource/surge.md) that can be used immediately.
      target: Three enemies
      usage: Main action
name: Kobold Shieldbearer Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/kobold-shieldbearer
type: featureblock
---

# Kobold Shieldbearer Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Kobold Shieldbearer Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shield Block</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The shieldbearer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The mentor takes damage from a strike while within distance.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shieldbearer blocks the <a href="../../../rule/combat/strike/">strike</a> (if <a href="../../../rule/combat/adjacent/">adjacent</a> to the mentor) or throws their shield into the mentor&#39;s space. The triggering <a href="../../../rule/combat/strike/">strike</a>&#39;s damage is halved and the <a href="../../../rule/character/potency/">potency</a> of any <a href="../../../rule/character/potency/">potency</a> effects is reduced by 1. If the shieldbearer threw their shield, it bounces back to their hand.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Living Backpack</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The shieldbearer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shieldbearer straps their shield on their back and climbs onto their mentor&#39;s back, entering the mentor&#39;s space. While the shieldbearer is on their mentor&#39;s back, each of them gains 10 <a href="../../../rule/health/temporary-stamina/">temporary Stamina</a> and can use Shield Block as a triggered action targeting an ally instead of the shieldbearer&#39;s mentor. Additionally, the shieldbearer moves with the mentor, and they can&#39;t use main actions, maneuvers, or move actions except to end this effect as a maneuver. The effect also ends if the shieldbearer is <a href="../../../movement/forced-movement/">force moved</a> away from their mentor or knocked <a href="../../../condition/prone/">prone</a>. If the shieldbearer is still in their mentor&#39;s space when the effect ends, they move into an <a href="../../../rule/combat/adjacent/">adjacent</a> unoccupied space of their choice.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Let&#39;s Go Sledding</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three enemies</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; M &lt; WEAK <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; M &lt; AVERAGE <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 damage; M &lt; STRONG <a href="../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If this ability is used as part of the <a href="../../../feature/common/main-actions/charge/">Charge</a> main action, the shieldbearer gains 2 <a href="../../../rule/resource/surge/">surges</a> that can be used immediately.</p></div></div>
</article>
</div>
</div>
</article>
</div>
