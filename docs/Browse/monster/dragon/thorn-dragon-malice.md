---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: A cage of thorns grows around one dragonsealed enemy on the encounter map, making that enemy [restrained](../../condition/restrained.md) until the end of their next turn.
      cost: 3 Malice
      icon: ⭐️
      name: Cage of Thorns
    - body: The dragon grows a 10 wall of briars in unoccupied spaces on the encounter map. The wall blocks [line of effect](../../rule/combat/line-of-effect.md) for all creatures except the dragon. Each square of the wall has 5 [Stamina](../../rule/health/stamina.md) and fire weakness 5. The area can be moved through but is [difficult terrain](../../movement/difficult-terrain.md). Any creature who is [force moved](../../movement/forced-movement.md) into or within the area takes 1 damage for each square of the area entered and is [bleeding](../../condition/bleeding.md) until the end of their next turn.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Bramble Barricade
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 7 Malice
      icon: "\U0001F300"
      intro: The dragon summons poisonous, biting thorns around their foes. Each enemy on the encounter map makes an **Agility test**.
      name: Afflictive Overgrowth
      power_roll:
        tiers:
            high: 5 poison damage; [bleeding](../../condition/bleeding.md) (EoT)
            low: 12 poison damage; [restrained](../../condition/restrained.md) (save ends)
            mid: 9 poison damage; [bleeding](../../condition/bleeding.md) (save ends)
flavor: At the start of a thorn dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Thorn Dragon Malice
scc: mcdm.monsters.v1/monster.dragon/thorn-dragon-malice
type: featureblock
---

# Thorn Dragon Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Thorn Dragon Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of a thorn dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Cage of Thorns</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">A cage of thorns grows around one dragonsealed enemy on the encounter map, making that enemy <a href="../../../condition/restrained/">restrained</a> until the end of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bramble Barricade</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The dragon grows a 10 wall of briars in unoccupied spaces on the encounter map. The wall blocks <a href="../../../rule/combat/line-of-effect/">line of effect</a> for all creatures except the dragon. Each square of the wall has 5 <a href="../../../rule/health/stamina/">Stamina</a> and fire weakness 5. The area can be moved through but is <a href="../../../movement/difficult-terrain/">difficult terrain</a>. Any creature who is <a href="../../../movement/forced-movement/">force moved</a> into or within the area takes 1 damage for each square of the area entered and is <a href="../../../condition/bleeding/">bleeding</a> until the end of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Afflictive Overgrowth</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">The dragon summons poisonous, biting thorns around their foes. Each enemy on the encounter map makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 poison damage; <a href="../../../condition/restrained/">restrained</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 poison damage; <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 poison damage; <a href="../../../condition/bleeding/">bleeding</a> (EoT)</span></div></div></div>
</article>
</div>
</article>
</div>
