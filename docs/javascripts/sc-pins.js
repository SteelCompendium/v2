/* sc-pins.js — DOM wiring for the pinboard: a pushpin toggle on entity pages
 * and the /pins/ board renderer. Logic in sc-pins-core.js. instant-nav safe:
 * document$-driven, idempotent per swap (guards on existing .sc-pin). */
(function () {
  "use strict";
  const KEY = "sc-pins";

  // Material Design pushpin (mdi pin-outline / pin) — DESIGN.md's icon rule:
  // no glyph-font pin exists, so Material thin-line is the fallback tier.
  const PIN_D_OFF = "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z";
  const PIN_D_ON = "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z";
  const PIN_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + PIN_D_OFF + '"/></svg>';

  function load() { return window.SCPins.parse(localStorage.getItem(KEY)); }
  function save(s) { localStorage.setItem(KEY, window.SCPins.serialize(s)); }

  function pageTitle() {
    const h = document.querySelector(".md-content .sc-head__left-primary") ||
              document.querySelector(".md-content h1");
    // strip the heading-permalink ¶ (and legacy ★/☆ from the pre-SVG button —
    // the pin button lives inside the h1 on prose pages when a click fires)
    return h ? h.textContent.replace(/[¶★☆]/g, "").trim() : document.title;
  }

  // ── entity-page ★ button ──
  function mountPinButton() {
    if (document.querySelector(".sc-pin")) return; // idempotent per swap
    const path = location.pathname;
    if (!/\/(Browse|Read)\//.test(path)) return;
    // Only leaf-ish pages: skip section indexes (they end at a type dir whose
    // page is index.html — heuristically: h1 present is enough; indexes get
    // pins too and that's fine, but the Browse tab roots are excluded).
    if (/\/(Browse|Read)\/?$/.test(path)) return;
    const host = document.querySelector(".md-content .sc-head") ||
                 document.querySelector(".md-content h1");
    if (!host) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sc-pin";
    btn.innerHTML = PIN_SVG;
    const P = window.SCPins;
    function paint() {
      const on = P.has(load(), path);
      btn.title = on ? "Unpin from My Table" : "Pin to My Table";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
      btn.querySelector("path").setAttribute("d", on ? PIN_D_ON : PIN_D_OFF);
    }
    btn.addEventListener("click", function () {
      save(P.toggle(load(), { path: path, title: pageTitle(), kind: P.kindOf(path), ts: Date.now() }));
      paint();
    });
    paint();
    host.appendChild(btn);
  }

  // ── /pins/ board ──
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderBoard() {
    const mount = document.querySelector(".sc-pins-mount");
    if (!mount) return;
    // Remember the authored empty-state prose so removing the last pin can
    // restore it instead of leaving the stale rendered list behind.
    if (mount.__scEmptyHTML === undefined) mount.__scEmptyHTML = mount.innerHTML;
    const groups = window.SCPins.grouped(load());
    if (!groups.length) { mount.innerHTML = mount.__scEmptyHTML; return; }
    let h = "";
    groups.forEach(function (g) {
      h += '<h2 class="sc-pins__kind">' + esc(g.kind) + '</h2><ul class="sc-pins__list">';
      g.items.forEach(function (i) {
        h += '<li><a href="' + esc(i.path) + '">' + esc(i.title || i.path) + "</a>" +
          '<button type="button" class="sc-pins__rm" data-path="' + esc(i.path) + '" title="Remove">×</button></li>';
      });
      h += "</ul>";
    });
    mount.innerHTML = h;
  }

  function onBoardClick(ev) {
    const b = ev.target.closest(".sc-pins__rm");
    if (!b) return;
    save(window.SCPins.remove(load(), b.dataset.path));
    renderBoard();
  }

  function init() {
    if (!window.SCPins) return;
    mountPinButton();
    renderBoard();
    // Guard on window, not a closure var: instant nav can re-execute this
    // script on the deployed site, and a second delegated listener makes ×
    // clicks double-fire.
    if (!window.__scPinsBoardWired) {
      document.addEventListener("click", onBoardClick);
      window.__scPinsBoardWired = true;
    }
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
