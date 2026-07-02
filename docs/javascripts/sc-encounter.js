/* sc-encounter.js — encounter-builder tray on the Bestiary page. Math in
 * sc-encounter-core.js. Items come from the page's .sc-browse-data island;
 * "+" clicks arrive by delegation (the results table re-renders per filter).
 * Statblock pages get a lightweight head "+" that appends to the same
 * localStorage encounter. instant-nav safe: document$-driven, idempotent,
 * teardown on swap. */
(function () {
  "use strict";
  const KEY = "sc-encounter";
  let teardown = null;

  function load() {
    try {
      const o = JSON.parse(localStorage.getItem(KEY));
      if (o && o.v === 1) return o;
    } catch (_) {}
    return { v: 1, party: { n: 5, lvl: 1, vic: 0 }, picks: [] };
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  function esc(x) {
    return String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function readItems(mount) {
    // steel-bestiary-browser.js parses the island and then REPLACES the
    // mount's innerHTML (destroying the island), stashing the records on a
    // window global first. Fall back to the island for a no-browser mount.
    if (Array.isArray(window.SC_BESTIARY_ITEMS)) return window.SC_BESTIARY_ITEMS;
    const el = mount.querySelector(".sc-browse-data") || mount.querySelector("script");
    try { return JSON.parse(el.textContent) || []; } catch (_) { return []; }
  }

  // ── statblock-page "+ add" chip (works on any page with a statblock head) ──
  function mountPageAdd(E) {
    const sb = document.querySelector(".md-content .sb-wrap .sb__head");
    if (!sb || document.querySelector(".sc-enc-addpage")) return;
    const evM = /EV\s*(\S+)/.exec((sb.querySelector(".sc-head__right-deck") || {}).textContent || "");
    if (!evM) return; // no EV → not a buyable creature (companions etc.)
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "sc-enc-add sc-enc-addpage";
    btn.title = "Add to encounter"; btn.textContent = "+";
    btn.addEventListener("click", function () {
      const name = ((sb.querySelector(".sc-head__left-primary") || {}).textContent || document.title)
        .replace(/[¶★☆]/g, "").trim();
      const lvM = /Level\s*(\d+)/i.exec((sb.querySelector(".sc-head__right-eyebrow") || {}).textContent || "");
      const org = ((sb.querySelector(".sc-head__right-primary") || {}).textContent || "").split(/\s+/)[0];
      const s = load();
      s.picks = E.addPick(s.picks, {
        href: location.pathname, name: name,
        ev: evM[1], organization: org, level: lvM ? lvM[1] : "1",
      });
      save(s);
      btn.textContent = "✓";
      setTimeout(function () { btn.textContent = "+"; }, 1200);
    });
    sb.appendChild(btn);
  }

  function init() {
    if (teardown) { teardown(); teardown = null; }
    document.querySelectorAll(".sc-enc").forEach(function (n) { n.remove(); });
    const E = window.SCEncounter;
    if (!E) return;

    mountPageAdd(E);

    const mount = document.querySelector(".sc-bestiary-mount");
    if (!mount) return;
    const items = readItems(mount);
    const byHref = {}, bySlug = {};
    items.forEach(function (it) { byHref[it.href] = it; bySlug[E.slug(it.href)] = it; });

    let state = load();

    // hydrate from ?enc= share links (overrides stored picks)
    const share = new URLSearchParams(location.search).get("enc");
    if (share) { state.picks = E.decodeShare(share, bySlug); save(state); }

    const tray = document.createElement("aside");
    tray.className = "sc-enc";
    document.body.appendChild(tray);

    function lbl(t, k, v, min, max) {
      return "<label>" + t + ' <input type="number" data-party="' + k + '" min="' + min +
        '" max="' + max + '" value="' + v + '"></label>';
    }

    function render() {
      const p = state.party;
      const hES = E.heroES(p.lvl), pES = E.partyES(p.n, p.lvl, p.vic);
      const b = E.bands(pES, hES), total = E.totalEV(state.picks);
      const diff = E.classify(total, b);
      let rows = state.picks.map(function (pk) {
        const warn = E.levelWarn(pk.level, p.lvl, pk.organization)
          ? ' <span class="warn" title="Above the recommended level for this party">⚠</span>' : "";
        return '<div class="sc-enc__row" data-href="' + esc(pk.href) + '">' +
          '<a href="' + esc(pk.href) + '">' + esc(pk.name) + "</a>" + warn +
          '<span class="cost">' + E.pickCost(pk) + " EV</span>" +
          '<span class="ct"><button type="button" data-d="-1">−</button><b>' + pk.count +
          '</b><button type="button" data-d="1">+</button></span></div>';
      }).join("");
      if (!state.picks.length) rows = '<p class="sc-enc__empty">Press + on any creature row to build an encounter.</p>';
      tray.innerHTML =
        '<header class="sc-enc__head"><b>Encounter</b>' +
        '<span class="sc-enc__diff" data-diff="' + diff + '">' + total + " / " + pES + " EV · " + diff + "</span>" +
        '<button type="button" class="sc-enc__toggle" title="Collapse">▾</button></header>' +
        '<div class="sc-enc__body">' +
        '<div class="sc-enc__party">' +
        lbl("Heroes", "n", p.n, 1, 8) + lbl("Level", "lvl", p.lvl, 1, 10) + lbl("Victories", "vic", p.vic, 0, 12) +
        "</div>" + rows +
        '<div class="sc-enc__bands">Trivial ≤ ' + b.trivialMax + " · Easy &lt; " + b.easyMax +
        " · Standard ≤ " + b.standardMax + " · Hard ≤ " + b.hardMax + " · Extreme beyond</div>" +
        '<div class="sc-enc__actions">' +
        '<button type="button" class="sc-enc__share">Copy share link</button>' +
        '<button type="button" class="sc-enc__md">Copy as markdown</button>' +
        '<button type="button" class="sc-enc__clear">Clear</button></div></div>';
      tray.classList.toggle("is-empty", !state.picks.length);
    }

    function flash(sel, txt) {
      const el = tray.querySelector(sel);
      if (!el) return;
      const orig = el.textContent;
      el.textContent = txt;
      setTimeout(function () { el.textContent = orig; }, 1200);
    }

    function onClick(ev) {
      const add = ev.target.closest(".sc-enc-add:not(.sc-enc-addpage)");
      if (add && byHref[add.dataset.href]) {
        state.picks = E.addPick(state.picks, byHref[add.dataset.href]);
        save(state); render(); return;
      }
      if (!tray.contains(ev.target)) return;
      const step = ev.target.closest("[data-d]");
      if (step) {
        const row = step.closest(".sc-enc__row");
        const pk = state.picks.find(function (x) { return x.href === row.dataset.href; });
        const d = parseInt(step.dataset.d, 10) * (E.isMinion(pk) ? 4 : 1);
        state.picks = E.setCount(state.picks, row.dataset.href, pk.count + d);
        save(state); render(); return;
      }
      if (ev.target.closest(".sc-enc__clear")) { state.picks = []; save(state); render(); return; }
      if (ev.target.closest(".sc-enc__toggle")) { tray.classList.toggle("is-min"); return; }
      if (ev.target.closest(".sc-enc__share")) {
        const url = location.origin + location.pathname + "?enc=" + E.encodeShare(state.picks);
        navigator.clipboard.writeText(url);
        flash(".sc-enc__share", "Copied!");
        return;
      }
      if (ev.target.closest(".sc-enc__md")) {
        const md = state.picks.map(function (p2) {
          return "- " + p2.count + "× " + p2.name + " (" + E.pickCost(p2) + " EV)";
        }).join("\n") + "\n\nTotal: " + E.totalEV(state.picks) + " EV";
        navigator.clipboard.writeText(md);
        flash(".sc-enc__md", "Copied!");
        return;
      }
    }
    function onInput(ev) {
      const f = ev.target.closest("[data-party]");
      if (!f) return;
      state.party[f.dataset.party] = parseInt(f.value, 10) || 0;
      save(state); render();
    }

    document.addEventListener("click", onClick);
    tray.addEventListener("input", onInput);
    teardown = function () {
      document.removeEventListener("click", onClick);
      tray.remove();
    };
    render();
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
