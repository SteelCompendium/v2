---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: A cage of thorns grows around one dragonsealed enemy on the encounter map, making that enemy restrained until the end of their next turn.
      cost: 3 Malice
      icon: ⭐️
      name: Cage of Thorns
    - body: The dragon grows a 10 wall of briars in unoccupied spaces on the encounter map. The wall blocks line of effect for all creatures except the dragon. Each square of the wall has 5 Stamina and fire weakness 5. The area can be moved through but is difficult terrain. Any creature who is force moved into or within the area takes 1 damage for each square of the area entered and is bleeding until the end of their next turn.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Bramble Barricade
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The dragon summons poisonous, biting thorns around their foes. Each enemy on the encounter map makes an **Agility test**.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Afflictive Overgrowth
      power_roll:
        tiers:
            high: 5 poison damage; bleeding (EoT)
            low: 12 poison damage; restrained (save ends)
            mid: 9 poison damage; bleeding (save ends)
flavor: At the start of a thorn dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Thorn Dragon Malice
scc: mcdm.monsters.v1/monster.dragons/thorn-dragon-malice
type: featureblock
---

# Cage of Thorns

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Thorn Dragon Malice</h2>
</header>
<div class="fb__flavor">At the start of a thorn dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Cage of Thorns</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">A cage of thorns grows around one dragonsealed enemy on the encounter map, making that enemy restrained until the end of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Bramble Barricade</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The dragon grows a 10 wall of briars in unoccupied spaces on the encounter map. The wall blocks line of effect for all creatures except the dragon. Each square of the wall has 5 Stamina and fire weakness 5. The area can be moved through but is difficult terrain. Any creature who is force moved into or within the area takes 1 damage for each square of the area entered and is bleeding until the end of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Afflictive Overgrowth</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 poison damage; restrained (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 poison damage; bleeding (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 poison damage; bleeding (EoT)</span></div></div></div>
<div class="fb__feat-body">The dragon summons poisonous, biting thorns around their foes. Each enemy on the encounter map makes an <b>Agility test</b>.</div>
</article>
</div>
</article>
</div>
