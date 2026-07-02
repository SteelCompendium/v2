/* sc-pins.js — DOM wiring for the pinboard: a ★ toggle on entity pages and
 * the /pins/ board renderer. Logic in sc-pins-core.js. instant-nav safe:
 * document$-driven, idempotent per swap (guards on existing .sc-pin). */
(function () {
  "use strict";
  const KEY = "sc-pins";

  function load() { return window.SCPins.parse(localStorage.getItem(KEY)); }
  function save(s) { localStorage.setItem(KEY, window.SCPins.serialize(s)); }

  function pageTitle() {
    const h = document.querySelector(".md-content .sc-head__left-primary") ||
              document.querySelector(".md-content h1");
    // strip the heading-permalink ¶ AND the pin button's own ★/☆ glyph (the
    // button lives inside the h1 on prose pages by the time a click fires)
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
    const P = window.SCPins;
    function paint() {
      const on = P.has(load(), path);
      btn.textContent = on ? "★" : "☆";
      btn.title = on ? "Unpin from My Table" : "Pin to My Table";
      btn.classList.toggle("is-on", on);
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
    const groups = window.SCPins.grouped(load());
    if (!groups.length) return; // keep the authored empty-state prose
    let h = "";
    groups.forEach(function (g) {
      h += '<h2 class="sc-pins__kind">' + esc(g.kind) + '</h2><ul class="sc-pins__list">';
      g.items.forEach(function (i) {
        h += '<li><a href="' + esc(i.path) + '">' + esc(i.title) + "</a>" +
          '<button type="button" class="sc-pins__rm" data-path="' + esc(i.path) + '" title="Remove">×</button></li>';
      });
      h += "</ul>";
    });
    mount.innerHTML = h;
  }

  function onBoardClick(ev) {
    const b = ev.target.closest(".sc-pins__rm");
    if (!b) return;
    save(window.SCPins.toggle(load(), { path: b.dataset.path }));
    renderBoard();
  }

  let boardWired = false;
  function init() {
    if (!window.SCPins) return;
    mountPinButton();
    renderBoard();
    if (!boardWired) {
      document.addEventListener("click", onBoardClick);
      boardWired = true; // single delegated listener, lives for the session
    }
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
