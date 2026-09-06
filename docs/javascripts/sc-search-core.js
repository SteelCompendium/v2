/*
 * sc-search-core.js — pure, DOM-free ranking for the site search (SC-306).
 * Replaces mkdocs-material's lunr ranking; the search UI, the index
 * (search_index.json) and the worker message protocol stay Material's.
 * UMD: exports for node:test, attaches to self.SCSearchCore in the worker
 * (loaded there by sc-search-worker.js via importScripts).
 *
 * Rules (workspace docs/superpowers/specs/2026-09-06-search-ranking-design.md):
 *   - every query term required (AND); prefix match on the LAST term only;
 *     no stop-word removal ("To the Death!" must be findable)
 *   - score × title tier: exact title 100 · title starts with query 10 ·
 *     all terms in title 3 · else 1; page `boost` (frontmatter search.boost)
 *     applies through MiniSearch's boostDocument and breaks ties
 *   - results grouped per page in Material's {items: Doc[][]} shape; each
 *     group holds its page-level doc (score 0 if it did not match itself)
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.SCSearchCore = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var TOKEN_RE = /[\n\r\p{Z}\p{P}]+/u; // MiniSearch's default split
  var TITLE_BOOST = 8;
  var MAX_GROUPS = 300;
  var SNIPPET = 320;
  var LEAD = 64;

  function stripTags(s) { return String(s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }

  function processTerm(t) {
    t = String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (t.length > 3 && t.charAt(t.length - 1) === "s" && t.slice(-2) !== "ss") t = t.slice(0, -1);
    return t;
  }

  function splitWords(s) { return String(s || "").split(TOKEN_RE).filter(Boolean); }

  function tokenize(s) { return splitWords(stripTags(s)).map(processTerm); }

  function normalize(s) { return tokenize(s).join(" "); }

  // 100 exact · 10 prefix · 3 all terms present (last term as prefix) · 1
  function titleTier(title, query) {
    var t = normalize(title), q = normalize(query);
    if (!q) return 1;
    if (t === q) return 100;
    if (t.indexOf(q) === 0) return 10;
    var terms = q.split(" "), words = t.split(" ");
    var all = terms.every(function (term, i) {
      var last = i === terms.length - 1;
      return words.some(function (w) { return last ? w.indexOf(term) === 0 : w === term; });
    });
    return all ? 3 : 1;
  }

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  // Whole-word matcher for the query terms: earlier terms may carry the plural
  // s that processTerm strips, the last term is a prefix. Single-letter terms
  // ("Muse's" → "s") are not highlighted.
  function markRe(terms) {
    var parts = terms.filter(function (t) { return t.length > 1; }).map(function (t, i, arr) {
      var e = escapeRe(t);
      return i === arr.length - 1 ? e + "\\w*" : e + "s?";
    });
    return parts.length ? new RegExp("(?<![\\w])(" + parts.join("|") + ")", "giu") : null;
  }

  function highlight(s, terms) {
    var re = markRe(terms);
    return re ? s.replace(re, "<mark>$1</mark>") : s;
  }

  function snippet(text, terms) {
    var plain = stripTags(text).replace(/\s+/g, " ").trim();
    var re = markRe(terms), start = 0;
    if (re) { var m = re.exec(plain); if (m) start = Math.max(0, m.index - LEAD); }
    var out = plain.slice(start, start + SNIPPET);
    if (start > 0) out = "…" + out;
    if (start + SNIPPET < plain.length) out += "…";
    return highlight(out, terms);
  }

  function createEngine(MiniSearch, docs) {
    var byLocation = new Map();
    var records = docs.map(function (d, i) {
      byLocation.set(d.location, d);
      return { id: i, location: d.location, title: stripTags(d.title), text: stripTags(d.text), boost: d.boost || 1 };
    });
    var ms = new MiniSearch({
      fields: ["title", "text"],
      storeFields: ["location", "boost"],
      tokenize: splitWords,
      processTerm: processTerm,
      searchOptions: {
        boost: { title: TITLE_BOOST, text: 1 },
        prefix: function (_term, i, terms) { return i === terms.length - 1; },
        // steel-etl stamps a page's frontmatter `search.boost` onto every doc
        // chunk it emits for that page, including each heading anchor. Honor
        // it only on the page's own root doc (location has no "#") — applying
        // it to a heading anchor too would let an unrelated ability's name,
        // merely *listed* as a heading inside a boosted class page, out-rank
        // that ability's own dedicated (unboosted, real-content) page.
        boostDocument: function (_id, _term, stored) {
          if (!stored) return 1;
          var isSection = (stored.location || "").indexOf("#") !== -1;
          return (!isSection && stored.boost) || 1;
        }
      }
    });
    ms.addAll(records);

    function suggestFor(items, terms) {
      if (!items.length) return [];
      var last = terms[terms.length - 1];
      var words = tokenize(items[0][0].title);
      for (var j = 0; j < words.length; j++) {
        if (words[j] !== last && words[j].indexOf(last) === 0) return [words[j]];
      }
      return [];
    }

    function search(query, options) {
      var terms = tokenize(query);
      if (!terms.length) return { items: [] };
      var hits = ms.search(query, { combineWith: "AND" });
      var fallback = false;
      if (!hits.length) { hits = ms.search(query, { combineWith: "OR" }); fallback = true; }

      var groups = new Map();
      hits.forEach(function (h) {
        var d = byLocation.get(h.location);
        if (!d) return;
        var matched = h.queryTerms || h.terms || [];
        var termsMap = {};
        terms.forEach(function (t) { termsMap[t] = !fallback || matched.indexOf(t) >= 0; });
        var page = h.location.split("#")[0];
        var g = groups.get(page);
        if (!g) { g = []; groups.set(page, g); }
        g.push({
          location: d.location,
          title: highlight(stripTags(d.title), terms),
          text: snippet(d.text, terms),
          score: h.score * titleTier(d.title, query),
          terms: termsMap
        });
      });

      var items = [];
      groups.forEach(function (g, page) {
        g.sort(function (a, b) { return b.score - a.score; });
        if (!g.some(function (x) { return x.location === page; })) {
          var pd = byLocation.get(page);
          if (!pd) return; // orphan section — the client needs a page doc per group
          g.push({ location: pd.location, title: stripTags(pd.title), text: "", score: 0, terms: {} });
        }
        items.push(g);
      });
      items.sort(function (a, b) { return b[0].score - a[0].score; });
      items = items.slice(0, MAX_GROUPS);

      var out = { items: items };
      if (options && options.suggest) out.suggest = suggestFor(items, terms);
      return out;
    }

    return { search: search };
  }

  return {
    createEngine: createEngine,
    tokenize: tokenize,
    normalize: normalize,
    processTerm: processTerm,
    titleTier: titleTier,
    highlight: highlight,
    snippet: snippet
  };
});
