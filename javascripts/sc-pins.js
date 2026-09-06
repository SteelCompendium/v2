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
    // main card's name if this is a card page; else the page h1 (hidden h1s —
    // class pages — still carry the title text). NOT the first .sc-head on
    // the page: Read chapters embed dozens of cards, and the first embedded
    // card's name is not the chapter title.
    const A = window.SCPageAct;
    const main = A && A.cardHead();
    const h = (main && main.querySelector(".sc-head__left-primary")) ||
              document.querySelector(".md-content h1");
    // strip the heading-permalink ¶ (and legacy ★/☆ from the pre-SVG button)
    return h ? h.textContent.replace(/[¶★☆]/g, "").trim() : document.title;
  }

  // ── entity-page pin button ──
  function mountPinButton() {
    if (document.querySelector(".sc-pin")) return; // idempotent per swap
    const path = location.pathname;
    if (!/\/(Browse|Read)\//.test(path)) return;
    // Only leaf-ish pages: skip section indexes (they end at a type dir whose
    // page is index.html — heuristically: h1 present is enough; indexes get
    // pins too and that's fine, but the Browse tab roots are excluded).
    if (/\/(Browse|Read)\/?$/.test(path)) return;
    // SC-297 round 4 (owner ruling): SCChrome is the single card-page
    // discriminator, and sc-pageact.js's plain-page test shares its predicate
    // — so exactly one of these two is ever non-null for a given page, and
    // neither consumer keeps its own private card-finding selector. Card
    // pages join the chrome panel; plain pages (incl. Read chapters, whose
    // EMBEDDED cards must not capture the pin) get the page action strip.
    const C = window.SCChrome;
    const A = window.SCPageAct;
    const host = (C && C.panel()) || (A && A.strip());
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

  function siteBase() {
    // The board lives at <site root>/pins/ (also works on local previews).
    return new URL("../", location.href).href;
  }

  function renderBoard(expandPath) {
    const mount = document.querySelector(".sc-pins-mount");
    if (!mount) return;
    // Remember the authored empty-state prose so removing the last pin can
    // restore it instead of leaving the stale rendered list behind.
    if (mount.__scEmptyHTML === undefined) mount.__scEmptyHTML = mount.innerHTML;
    if (window.__scPinsFetch) window.__scPinsFetch.abort();
    window.__scPinsFetch = new AbortController();
    const signal = window.__scPinsFetch.signal;
    const open = new Set(Array.from(mount.querySelectorAll("details[open]"), el => el.dataset.path));
    if (expandPath) open.add(expandPath);
    const groups = window.SCPins.grouped(load());
    if (!groups.length) { mount.innerHTML = mount.__scEmptyHTML; return; }
    let h = "";
    groups.forEach(function (g) {
      h += '<h2 class="sc-pins__kind">' + esc(g.kind) + '</h2><ul class="sc-pins__list">';
      g.items.forEach(function (i) {
        if (window.SCPinsSections && window.SCPinsSections.eligible(i.path, siteBase())) {
          h += '<li class="sc-pins__section"><details class="sc-pins__section-fold" data-path="' + esc(i.path) + '"' + (open.has(i.path) ? ' open' : '') + '><summary>' + esc(i.title || i.path) + '</summary><div class="sc-pins__section-body"><p class="sc-pins__loading" role="status">Loading section…</p></div></details>' +
            '<div class="sc-pins__section-actions"><a href="' + esc(i.path) + '">Open original</a><button type="button" class="sc-pins__rm" data-path="' + esc(i.path) + '" aria-label="Remove ' + esc(i.title || i.path) + '">Remove</button></div></li>';
          return;
        }
        h += '<li><a href="' + esc(i.path) + '">' + esc(i.title || i.path) + "</a>" +
          '<button type="button" class="sc-pins__rm" data-path="' + esc(i.path) + '" aria-label="Remove ' + esc(i.title || i.path) + '" title="Remove">×</button></li>';
      });
      h += "</ul>";
    });
    mount.innerHTML = h;
    mount.querySelectorAll(".sc-pins__section-fold").forEach(function (fold, index) {
      async function show() {
        if (!fold.open || fold.dataset.loaded) return;
        fold.dataset.loaded = "1";
        const target = fold.querySelector(".sc-pins__section-body");
        try {
          const content = await window.SCPinsSections.load(fold.dataset.path, siteBase(), signal, "sc-excerpt-" + index + "-");
          if (!signal.aborted && target.isConnected) target.replaceChildren(content);
        } catch (error) {
          if (signal.aborted || !target.isConnected) return;
          target.textContent = "Could not load this section. Open the original to check the link, or close and reopen to retry.";
          delete fold.dataset.loaded;
        }
      }
      fold.addEventListener("toggle", show);
      show();
    });
  }

  function onBoardClick(ev) {
    const b = ev.target.closest(".sc-pins__rm");
    if (!b) return;
    save(window.SCPins.remove(load(), b.dataset.path));
    renderBoard();
  }

  function mountLinkForm() {
    const mount = document.querySelector(".sc-pins-mount");
    if (!mount || document.querySelector(".sc-pins__form")) return;
    const toolbar = document.createElement("div");
    toolbar.className = "sc-pins__toolbar";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "sc-pins__add";
    toggle.textContent = "Add a section";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "sc-pins-form");
    const notice = document.createElement("span");
    notice.setAttribute("role", "status");
    toolbar.append(toggle, notice);
    const form = document.createElement("form");
    form.id = "sc-pins-form";
    form.hidden = true;
    form.className = "sc-pins__form";
    form.innerHTML = '<h2>Add a section</h2>' +
      '<p id="sc-pins-help">Copy a heading link from this site and paste it below. Its section will appear here under your chosen name. Adding the same link again renames it. Other web URLs are saved as links only.</p>' +
      '<label for="sc-pins-name">Display name</label><input id="sc-pins-name" name="title" required autocomplete="off" placeholder="e.g. Minion rules">' +
      '<label for="sc-pins-url">URL</label><input id="sc-pins-url" name="url" required type="text" inputmode="url" spellcheck="false" autocomplete="off" aria-describedby="sc-pins-help" placeholder="https://…">' +
      '<button type="submit">Add link</button><p class="sc-pins__status" role="status" aria-live="polite"></p>';
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "sc-pins__cancel";
    cancel.textContent = "Cancel";
    const actions = document.createElement("div");
    actions.className = "sc-pins__form-actions";
    const submit = form.querySelector('button[type="submit"]');
    submit.before(actions);
    actions.append(submit, cancel);
    function close() {
      form.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
    toggle.addEventListener("click", function () {
      if (!form.hidden) { close(); return; }
      form.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      notice.textContent = "";
      form.querySelector(".sc-pins__status").textContent = "";
      form.elements.title.focus();
    });
    cancel.addEventListener("click", close);
    form.addEventListener("keydown", function (event) {
      if (event.key === "Escape") { event.preventDefault(); close(); }
    });
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const status = form.querySelector(".sc-pins__status");
      try {
        const result = window.SCPins.addLink(load(), form.elements.title.value, form.elements.url.value, location.href, Date.now());
        if (result.error) { status.textContent = result.error; return; }
        save(result.state);
        renderBoard(result.state.items[result.state.items.length - 1].path);
        status.textContent = result.updated ? "Link updated." : "Link added.";
        form.reset();
        notice.textContent = status.textContent;
        close();
      } catch (_) {
        status.textContent = "Could not save this link. Check that browser storage is available and try again.";
      }
    });
    mount.before(toolbar, form);
  }

  function init() {
    if (!window.SCPins) return;
    if (window.__scPinsFetch) window.__scPinsFetch.abort();
    mountPinButton();
    renderBoard();
    mountLinkForm();
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
