---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each demon acting this turn has a double edge on abilities.
      cost: 3 Malice
      icon: ⭐️
      name: Soulburn
    - body: A demon minion of your choice transforms into a non-minion horde demon of the same level.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Abyssal Evolution
    - body: Two size 2 rifts to the Abyssal Wasteland appear at locations of your choice. Any demon can use an abyssal rift as a portal to another abyssal rift in the encounter, moving into any space in one rift and appearing immediately in any unoccupied space in the other rift. A non-demon who enters a rift for the first time in a round or starts their turn there takes corruption damage equal to the level of the highest-level demon on the encounter map. An abyssal rift is an immovable object that has 25 Stamina, damage immunity 2, and holy weakness 5. The rift closes when there are no demons remaining on the encounter map. Additionally, a creature who has the Magic or Psionics skill can make a Reason test or Intuition test as a maneuver while adjacent to a rift to destabilize and close it.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Abyssal Rift
      power_roll:
        tiers:
            high: The rift closes.
            low: The rift remains open and regains 5 Stamina.
            mid: The rift remains open.
flavor: At the start of any demon's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 1
name: Demon Malice (Level 1+ Malice Features)
scc: mcdm.monsters.v1/monster.demons.1st-echelon/demon-malice-level-1-malice-features
type: featureblock
---

# Soulburn

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Demon Malice (Level 1+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any demon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Soulburn</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Each demon acting this turn has a double edge on abilities.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Abyssal Evolution</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">A demon minion of your choice transforms into a non-minion horde demon of the same level.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Abyssal Rift</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The rift remains open and regains 5 Stamina.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The rift remains open.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The rift closes.</span></div></div></div>
<div class="fb__feat-body">Two size 2 rifts to the Abyssal Wasteland appear at locations of your choice. Any demon can use an abyssal rift as a portal to another abyssal rift in the encounter, moving into any space in one rift and appearing immediately in any unoccupied space in the other rift. A non-demon who enters a rift for the first time in a round or starts their turn there takes corruption damage equal to the level of the highest-level demon on the encounter map. An abyssal rift is an immovable object that has 25 Stamina, damage immunity 2, and holy weakness 5. The rift closes when there are no demons remaining on the encounter map. Additionally, a creature who has the Magic or Psionics skill can make a Reason test or Intuition test as a maneuver while adjacent to a rift to destabilize and close it.</div>
</article>
</div>
</article>
</div>
