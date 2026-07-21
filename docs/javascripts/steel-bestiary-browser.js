/* ============================================================
   Steel Compendium — steel-bestiary-browser.js
   Client-side SEARCH · FILTER · SORT for the Bestiary tab.
   Sibling of steel-feature-browser.js (SCBrowse): reuses the .sc-browse shell
   (steel-indexes.css) but with statblock facets, Level/EV numeric range filters,
   and a dense sortable results table (steel-bestiary.css).

   Item shape (emitted by steel-etl bestiary_search.go):
     { type:"statblock"|"terrain"|"retainer", name, level, ev,
       role?, organization?, keywords?[], size?, href }
   ============================================================ */
(function () {
  "use strict";

  // Shared per-facet pick matching (any/all modes), loaded before this script.
  var FacetCore = (typeof window !== "undefined" && window.SCFacetCore) || null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function cap(s) { return String(s).charAt(0).toUpperCase() + String(s).slice(1); }
  function searchSvg() {
    return '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
  }
  function evNum(it) { var n = parseFloat(it.ev); return isNaN(n) ? null : n; }

  // Result-table columns. num:true → numeric sort; sortable:false → no header click.
  var COLS = [
    { key: "name", label: "Name", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "level", label: "Level", sortable: true, num: true },
    { key: "ev", label: "EV", sortable: true, num: true },
    { key: "role", label: "Role", sortable: true },
    { key: "organization", label: "Org", sortable: true },
    { key: "size", label: "Size", sortable: true },
    { key: "keywords", label: "Keywords", sortable: false },
    { key: "add", label: "", sortable: false }   // encounter-builder "+" (sc-encounter.js)
  ];

  function uniqueSorted(items, key) {
    var seen = {};
    items.forEach(function (it) {
      var v = it[key];
      if (v == null || v === "") return;
      (Array.isArray(v) ? v : [v]).forEach(function (x) { if (x !== "") seen[x] = true; });
    });
    return Object.keys(seen).sort(function (a, b) { return a.localeCompare(b); });
  }

  function mount(root) {
    // navigation.instant recreates inline <script> elements but strips their
    // attributes (class+type), so after a client nav the island is a bare
    // <script>. Try the precise selector, then fall back to the only <script>.
    var island = root.querySelector("script.sc-browse-data") || root.querySelector("script");
    if (!island) return;
    var items;
    try { items = JSON.parse(island.textContent); } catch (e) { return; }
    // Publish the parsed records for other consumers (the encounter builder,
    // sc-encounter.js) — the innerHTML replace below destroys the island, so
    // this window global is the post-mount source of truth (the "advanced
    // data seam" noted at the bottom of this file).
    window.SC_BESTIARY_ITEMS = items;

    var facets = [
      { key: "type", label: "Type", values: uniqueSorted(items, "type"), display: cap },
      { key: "role", label: "Role", values: uniqueSorted(items, "role") },
      { key: "organization", label: "Organization", values: uniqueSorted(items, "organization") },
      { key: "size", label: "Size", values: uniqueSorted(items, "size") },
      { key: "keywords", label: "Keyword", values: uniqueSorted(items, "keywords") }
    ].filter(function (f) { return f.values.length > 1; });

    // any/all toggle only where AND is satisfiable: array-valued fields (keywords).
    facets.forEach(function (f) { f.multi = FacetCore.isMultiValued(items, f.key); });

    var state = { q: "", sort: "name", dir: 1, sel: {}, mode: {}, lvlMin: null, lvlMax: null, evMin: null, evMax: null };
    facets.forEach(function (f) { state.sel[f.key] = {}; state.mode[f.key] = "any"; });

    function rangeInputs(label, key) {
      return '<div class="sc-browse__range"><span class="lbl">' + label + '</span>' +
        '<input type="number" inputmode="numeric" class="sc-range__min" data-range="' + key + '" placeholder="min" aria-label="' + label + ' min">' +
        '<span class="sc-range__dash">–</span>' +
        '<input type="number" inputmode="numeric" class="sc-range__max" data-range="' + key + '" placeholder="max" aria-label="' + label + ' max"></div>';
    }

    root.innerHTML =
      '<div class="sc-browse sc-bestiary-browse">' +
        '<div class="sc-browse__bar">' +
          '<div class="sc-browse__search">' + searchSvg() +
            '<input type="search" placeholder="Search by name, role, or keyword…" aria-label="Search bestiary"></div>' +
        '</div>' +
        '<div class="sc-browse__ranges">' + rangeInputs("Level", "lvl") + rangeInputs("EV", "ev") + '</div>' +
        '<div class="sc-browse__facets">' + facets.map(facetRow).join("") + '</div>' +
        '<div class="sc-browse__head">' +
          '<span class="sc-browse__count"></span>' +
          '<button class="sc-browse__clear" hidden>Clear filters</button>' +
        '</div>' +
        '<div class="sc-browse__results"></div>' +
      '</div>';

    var elSearch = root.querySelector(".sc-browse__search input");
    var elCount = root.querySelector(".sc-browse__count");
    var elClear = root.querySelector(".sc-browse__clear");
    var elResults = root.querySelector(".sc-browse__results");

    elSearch.addEventListener("input", function () { state.q = this.value.trim().toLowerCase(); render(); });

    root.querySelectorAll("input[data-range]").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var v = this.value === "" ? null : parseFloat(this.value);
        var isMin = this.classList.contains("sc-range__min");
        var key = this.dataset.range; // "lvl" | "ev"
        state[key + (isMin ? "Min" : "Max")] = (v == null || isNaN(v)) ? null : v;
        render();
      });
    });

    elClear.addEventListener("click", function () {
      state.q = ""; elSearch.value = "";
      state.lvlMin = state.lvlMax = state.evMin = state.evMax = null;
      root.querySelectorAll("input[data-range]").forEach(function (i) { i.value = ""; });
      facets.forEach(function (f) { state.sel[f.key] = {}; });
      facets.forEach(function (f) { state.mode[f.key] = "any"; });
      root.querySelectorAll(".sc-facet-mode.is-all").forEach(function (b) {
        b.classList.remove("is-all"); b.textContent = "any"; b.setAttribute("aria-pressed", "false");
        b.title = "Match any selected value (OR) — click to require all (AND)";
      });
      root.querySelectorAll(".sc-chip.is-on").forEach(function (c) {
        c.classList.remove("is-on"); c.setAttribute("aria-pressed", "false");
      });
      render();
    });

    root.querySelectorAll(".sc-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var k = chip.dataset.facet, v = chip.dataset.value;
        if (state.sel[k][v]) { delete state.sel[k][v]; chip.classList.remove("is-on"); chip.setAttribute("aria-pressed", "false"); }
        else { state.sel[k][v] = true; chip.classList.add("is-on"); chip.setAttribute("aria-pressed", "true"); }
        render();
      });
    });

    root.querySelectorAll(".sc-facet-mode").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var k = btn.dataset.facet;
        var all = state.mode[k] !== "all";
        state.mode[k] = all ? "all" : "any";
        btn.textContent = all ? "all" : "any";
        btn.title = all
          ? "Match all selected values (AND) — click to return to any (OR)"
          : "Match any selected value (OR) — click to require all (AND)";
        btn.classList.toggle("is-all", all);
        btn.setAttribute("aria-pressed", all ? "true" : "false");
        render();
      });
    });

    function matches(it) {
      if (state.q) {
        var hay = (it.name + " " + (it.role || "") + " " + (it.organization || "") + " " + (it.keywords || []).join(" ")).toLowerCase();
        if (hay.indexOf(state.q) === -1) return false;
      }
      if (state.lvlMin != null && it.level < state.lvlMin) return false;
      if (state.lvlMax != null && it.level > state.lvlMax) return false;
      if (state.evMin != null || state.evMax != null) {
        var ev = evNum(it);
        if (ev == null) return false; // EV "-" excluded once an EV bound is set
        if (state.evMin != null && ev < state.evMin) return false;
        if (state.evMax != null && ev > state.evMax) return false;
      }
      for (var k in state.sel) {
        if (!FacetCore.matchesPicks(it[k], state.sel[k], state.mode[k])) return false;
      }
      return true;
    }

    function sortFn(a, b) {
      var k = state.sort, d = state.dir;
      var col = COLS.filter(function (c) { return c.key === k; })[0] || {};
      if (col.num) {
        var av = k === "ev" ? evNum(a) : a[k];
        var bv = k === "ev" ? evNum(b) : b[k];
        if (av == null) av = -Infinity;
        if (bv == null) bv = -Infinity;
        return (av - bv) * d || a.name.localeCompare(b.name);
      }
      var sa = a[k] || "", sb = b[k] || "";
      if (Array.isArray(sa)) sa = sa.join(" ");
      if (Array.isArray(sb)) sb = sb.join(" ");
      return String(sa).localeCompare(String(sb)) * d || a.name.localeCompare(b.name);
    }

    function headHTML() {
      return "<tr>" + COLS.map(function (c) {
        if (!c.sortable) return '<th>' + esc(c.label) + '</th>';
        var arrow = state.sort === c.key ? (state.dir === 1 ? " ▲" : " ▼") : "";
        return '<th class="is-sortable" data-key="' + c.key + '">' + esc(c.label) + arrow + '</th>';
      }).join("") + "</tr>";
    }

    function rowHTML(it) {
      var kw = (it.keywords || []).map(function (k) {
        return '<span class="sc-bestiary__kw">' + esc(k) + '</span>';
      }).join(" ");
      return "<tr>" +
        '<td><a href="' + esc(it.href) + '">' + esc(it.name) + "</a></td>" +
        "<td>" + esc(cap(it.type)) + "</td>" +
        "<td>" + esc(it.level) + "</td>" +
        "<td>" + esc(it.ev) + "</td>" +
        "<td>" + esc(it.role || "—") + "</td>" +
        "<td>" + esc(it.organization || "—") + "</td>" +
        "<td>" + esc(it.size || "—") + "</td>" +
        "<td>" + kw + "</td>" +
        '<td class="sc-enc-cell"><button type="button" class="sc-enc-add" title="Add to encounter" data-href="' +
        esc(it.href) + '">+</button></td></tr>';
    }

    function render() {
      var list = items.filter(matches).sort(sortFn);
      var any = state.q || state.lvlMin != null || state.lvlMax != null || state.evMin != null || state.evMax != null ||
        facets.some(function (f) { return Object.keys(state.sel[f.key]).length; });
      elClear.hidden = !any;
      elCount.innerHTML = "<b>" + list.length + "</b> of " + items.length + " entries";
      elResults.innerHTML = list.length
        ? '<table class="sc-bestiary"><thead>' + headHTML() + "</thead><tbody>" + list.map(rowHTML).join("") + "</tbody></table>"
        : '<div class="sc-browse__empty">No creatures match these filters.</div>';
      elResults.querySelectorAll("th.is-sortable").forEach(function (th) {
        th.addEventListener("click", function () {
          var k = this.dataset.key;
          if (state.sort === k) state.dir = -state.dir; else { state.sort = k; state.dir = 1; }
          render();
        });
      });
    }
    render();
  }

  function facetRow(f) {
    var chips = f.values.map(function (v) {
      var label = f.display ? f.display(v) : v;
      return '<button type="button" class="sc-chip" role="button" aria-pressed="false" data-facet="' +
        f.key + '" data-value="' + esc(v) + '">' + esc(label) + "</button>";
    }).join("");
    var modeBtn = f.multi
      ? '<button type="button" class="sc-facet-mode" data-facet="' + f.key + '" aria-pressed="false" ' +
        'title="Match any selected value (OR) — click to require all (AND)">any</button>'
      : "";
    return '<div class="sc-browse__facet"><span class="lbl">' + esc(f.label) + '</span>' +
      '<div class="sc-browse__chips">' + modeBtn + chips + "</div></div>";
  }

  window.SCBestiary = { mount: mount };

  // ── Advanced-data seam (Plan B §B5, NOT built now) ─────────────────────────
  // To enable "inflicts <condition>"-style facets later, publish a second island
  // (or window.SC_BESTIARY_AUX) keyed by href, and left-join it onto `items`
  // before building `facets` in mount(). The current build ships no aux data, so
  // this hook intentionally does nothing today.

  function init() { document.querySelectorAll(".sc-bestiary-mount").forEach(mount); }
  if (typeof document$ !== "undefined" && document$ && typeof document$.subscribe === "function") {
    document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
