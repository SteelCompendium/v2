/* sc-scale.js — "Scale to level" control on monster statblock pages.
 * Rewrites Stamina/EV/level/damage/potencies/free strike by the book's
 * "Adjusting Monster Levels" formulas (sc-scale-core.js), always relative to
 * the PRINTED originals (cached in data-orig on first use). Never persists —
 * a scaled block must not masquerade as the real one on a later visit.
 * instant-nav safe: document$-driven, idempotent. */
(function () {
  "use strict";
  function txt(el) { return el ? el.textContent.trim() : ""; }

  function init() {
    document.querySelectorAll(".sc-scale").forEach(function (n) { n.remove(); });
    const S = window.SCScale;
    const wrap = document.querySelector(".md-content .sb-wrap");
    if (!S || !wrap) return;
    const head = wrap.querySelector(".sb__head");
    if (!head) return;

    const lvlM = /Level\s*(\d+)/i.exec(txt(head.querySelector(".sc-head__right-eyebrow")));
    const evM = /EV\s*(\d+)/i.exec(txt(head.querySelector(".sc-head__right-deck")));
    const words = txt(head.querySelector(".sc-head__right-primary")).split(/\s+/).filter(Boolean);
    if (!lvlM || !evM || !words.length) return;
    const org = words.length > 1 ? words[0] : words[0];
    const role = words.length > 1 ? words[1] : words[0];
    const m = S.mods(role, org);
    if (!m) return;
    const origLevel = parseInt(lvlM[1], 10);
    const origEV = parseInt(evM[1], 10);

    function cacheOrig(el) {
      if (el && el.dataset.orig == null) el.dataset.orig = el.textContent;
    }
    function statCell(label) {
      let hit = null;
      wrap.querySelectorAll(".sb__defenses .sb__stat").forEach(function (c) {
        if (txt(c.querySelector(".l")).toLowerCase() === label) hit = c.querySelector(".v");
      });
      return hit;
    }
    function stickyCell(label) {
      let hit = null;
      wrap.querySelectorAll(".sb__sticky-defs .m").forEach(function (c) {
        if (c.textContent.toLowerCase().indexOf(label) >= 0) hit = c.querySelector("b");
      });
      return hit;
    }

    const ctl = document.createElement("div");
    ctl.className = "sc-scale";
    ctl.innerHTML =
      '<label>Scale to level <input type="number" min="1" max="12" value="' + origLevel + '"></label>' +
      '<span class="sc-scale__note" hidden>≈ scaled from level ' + origLevel +
      " — an approximation via the book's <em>Adjusting Monster Levels</em> formulas, not a published statblock</span>";
    wrap.parentNode.insertBefore(ctl, wrap);
    const input = ctl.querySelector("input");
    const note = ctl.querySelector(".sc-scale__note");

    function apply(nl) {
      const scaled = nl !== origLevel;
      note.hidden = !scaled;
      wrap.classList.toggle("is-scaled", scaled);

      const lvlEl = head.querySelector(".sc-head__right-eyebrow");
      const evEl = head.querySelector(".sc-head__right-deck");
      cacheOrig(lvlEl); cacheOrig(evEl);
      lvlEl.textContent = scaled ? "Level " + nl : lvlEl.dataset.orig;
      evEl.textContent = scaled ? "EV " + (origEV + S.evDelta(origLevel, nl, m)) : evEl.dataset.orig;

      [["stamina", S.staminaDelta(origLevel, nl, m)],
       ["free strike", S.damageDelta(origLevel, nl, 1, m, true)]].forEach(function (pair) {
        [statCell(pair[0]), stickyCell(pair[0])].forEach(function (el) {
          if (!el) return;
          cacheOrig(el);
          const orig = parseInt(el.dataset.orig, 10);
          if (!isFinite(orig)) return;
          el.textContent = scaled ? String(Math.max(1, orig + pair[1])) : el.dataset.orig;
        });
      });

      // tier rows per feature card; Strike-ness from keyword chips
      wrap.querySelectorAll(".sb__feat").forEach(function (feat) {
        let strike = false;
        feat.querySelectorAll(".sc-ability__chip").forEach(function (ch) {
          if (txt(ch).toLowerCase() === "strike") strike = true;
        });
        feat.querySelectorAll(".sc-ability__tier").forEach(function (row) {
          const res = row.querySelector(".res");
          if (!res) return;
          if (res.dataset.orig == null) res.dataset.orig = res.innerHTML;
          if (!scaled) { res.innerHTML = res.dataset.orig; return; }
          const tier = { low: 1, mid: 2, high: 3 }[row.dataset.tier] || 2;
          // Operate on innerHTML so condition links inside tier text survive.
          // applyTierText's patterns (leading "N damage", "M < N") never sit
          // inside tag markup: damage leads the string, potencies are plain text.
          res.innerHTML = S.applyTierText(res.dataset.orig,
            S.damageDelta(origLevel, nl, tier, m, strike),
            S.potencyDelta(origLevel, nl, m));
        });
      });
    }
    input.addEventListener("input", function () {
      const nl = Math.min(12, Math.max(1, parseInt(input.value, 10) || origLevel));
      apply(nl);
    });
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
