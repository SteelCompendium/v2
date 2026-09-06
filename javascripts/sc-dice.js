/* sc-dice.js — click a power-roll header to roll it. One delegated listener;
 * popover shows dice + edge/bane steppers; the matching tier row highlights.
 * Math in sc-dice-core.js. instant-nav safe: document$-driven, teardown on
 * swap; delegation covers embedded/transcluded cards too. */
(function () {
  "use strict";
  let teardown = null;

  function esc(s) { return String(s).replace(/</g, "&lt;"); }

  function init() {
    if (teardown) { teardown(); teardown = null; }
    document.querySelectorAll(".sc-dice-pop").forEach(function (n) { n.remove(); });
    if (!window.SCDice) return;
    const D = window.SCDice;

    function closeAll() {
      document.querySelectorAll(".sc-dice-pop").forEach(function (n) { n.remove(); });
      document.querySelectorAll(".sc-ability__tier.is-rolled").forEach(function (r) {
        r.classList.remove("is-rolled");
      });
    }

    function onClick(ev) {
      const head = ev.target.closest(".sc-ability__pr-head");
      if (!head) {
        if (!ev.target.closest(".sc-dice-pop")) closeAll();
        return;
      }
      if (head.querySelector(".sc-dice-pop")) { closeAll(); return; } // toggle off
      closeAll();
      const card = head.closest(".sc-ability") || head.closest(".sb__feat") || head.parentElement;
      const mod = D.parseModifier((head.querySelector(".chars") || {}).textContent);
      const state = { dice: D.roll(), edges: 0, banes: 0, bonus: mod.bonus };

      const pop = document.createElement("div");
      pop.className = "sc-dice-pop";
      head.style.position = "relative";
      head.appendChild(pop);

      function paint() {
        const r = D.resolve({ d1: state.dice.d1, d2: state.dice.d2, bonus: state.bonus || 0, edges: state.edges, banes: state.banes });
        card.querySelectorAll(".sc-ability__tier").forEach(function (row) {
          row.classList.toggle("is-rolled", row.dataset.tier === D.tierKey(r.tier));
        });
        pop.innerHTML =
          '<span class="dice">' + state.dice.d1 + " + " + state.dice.d2 + "</span>" +
          (state.bonus != null
            ? ' <span class="mod">' + (state.bonus >= 0 ? "+" + state.bonus : state.bonus) + "</span>"
            : ' <span class="mod">' + esc(mod.label) + "</span>") +
          ' <b class="total">= ' + r.total + "</b>" +
          (r.crit ? ' <span class="crit">CRIT!</span>' : "") +
          (r.shifted ? ' <span class="shift">tier ' + (r.shifted > 0 ? "+1" : "−1") + "</span>" : "") +
          '<span class="ctl"><button type="button" data-k="edges">Edge ' + state.edges + "</button>" +
          '<button type="button" data-k="banes">Bane ' + state.banes + "</button>" +
          '<button type="button" data-k="reroll" title="Reroll">↻</button></span>';
      }
      pop.addEventListener("click", function (e) {
        const b = e.target.closest("button[data-k]");
        if (!b) return;
        e.stopPropagation();
        if (b.dataset.k === "reroll") state.dice = D.roll();
        else state[b.dataset.k] = (state[b.dataset.k] + 1) % 3;
        paint();
      });
      paint();
    }
    document.addEventListener("click", onClick);
    teardown = function () { document.removeEventListener("click", onClick); };
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
