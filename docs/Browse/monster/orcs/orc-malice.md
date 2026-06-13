---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each orc shifts up to their speed, moving through enemy spaces if they can. Each enemy passed through during this movement makes a **Might test**.
      cost: 3 Malice
      icon: ⭐️
      name: Overwhelming March
      power_roll:
        tiers:
            high: Push 2
            low: 6 damage; prone
            mid: 4 damage; prone
    - body: An orc acting this turn summons 2 **mohlers** out of the ground, who dig a trench that is a 10 x 1 line within 10 squares when they appear. The trench is 2 squares deep and is difficult terrain. The trench can't be created directly underneath creatures.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Mohler Trench
    - body: The ground shakes as a group of mohlers dig a 5 cube pit beneath an area where at least one creature is on the ground. The area is difficult terrain. Each orc in the area can shift into the nearest unoccupied space outside the pit before it is completed. Each nonorc in the area makes an **Agility test**.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Mohler Cavity
      power_roll:
        tiers:
            high: The target can shift into the nearest unoccupied space outside the pit.
            low: 4 damage; the target falls; prone and can't stand (EoT)
            mid: 4 damage; the target falls
flavor: At the start of any orc's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Orc Malice
scc: mcdm.monsters.v1/monster.orcs/orc-malice
type: featureblock
---

# Overwhelming March

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Orc Malice</h2>
</header>
<div class="fb__flavor">At the start of any orc&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Overwhelming March</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; prone</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; prone</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">Push 2</span></div></div></div>
<div class="fb__feat-body">Each orc shifts up to their speed, moving through enemy spaces if they can. Each enemy passed through during this movement makes a <b>Might test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Mohler Trench</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">An orc acting this turn summons 2 <b>mohlers</b> out of the ground, who dig a trench that is a 10 x 1 line within 10 squares when they appear. The trench is 2 squares deep and is difficult terrain. The trench can&#39;t be created directly underneath creatures.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Mohler Cavity</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; the target falls; prone and can&#39;t stand (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; the target falls</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target can shift into the nearest unoccupied space outside the pit.</span></div></div></div>
<div class="fb__feat-body">The ground shakes as a group of mohlers dig a 5 cube pit beneath an area where at least one creature is on the ground. The area is difficult terrain. Each orc in the area can shift into the nearest unoccupied space outside the pit before it is completed. Each nonorc in the area makes an <b>Agility test</b>.</div>
</article>
</div>
</article>
</div>
