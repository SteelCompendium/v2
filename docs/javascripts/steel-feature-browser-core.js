/*
 * steel-feature-browser-core.js — pure, DOM-free model + matching for the
 * Feature page's merged Source/subclass facet.
 * UMD: exports for node:test, attaches to window.SCFeatureBrowserCore in the
 * browser. Loaded BEFORE steel-feature-browser.js in mkdocs.yml.
 *
 * The Source facet is one OR-group: a class chip (klass) or a class-scoped
 * subclass chip (klass + SUB_SEP + subclass). Subclass names are not globally
 * unique (divine domains repeat across Censor/Conduit), so selection is scoped
 * to the parent class via the composite key.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.SCFeatureBrowserCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var SUB_SEP = "§";
  // source → grouping rank for the Source facet (class first, then ancestry/kit/other).
  var SRC_RANK = { class: 0, ancestry: 1, kit: 2, other: 3 };

  function subKey(klass, subclass) { return String(klass) + SUB_SEP + String(subclass); }

  // rank of a source for facet ordering; unknown sources sort last. (Must NOT
  // use `SRC_RANK[s] || 9` — class is rank 0, which is falsy.)
  function srcRank(s) { return s in SRC_RANK ? SRC_RANK[s] : 9; }

  function subsOf(item) {
    var v = item.subclass;
    if (v == null || v === "") return [];
    return Array.isArray(v) ? v : [v];
  }

  function buildSourceModel(items) {
    var srcOf = {};   // klass -> source
    var subSet = {};  // klass -> { subclass: true }
    items.forEach(function (it) {
      if (!it.klass) return;
      if (!(it.klass in srcOf)) srcOf[it.klass] = it.source || "other";
      subsOf(it).forEach(function (s) {
        (subSet[it.klass] = subSet[it.klass] || {})[s] = true;
      });
    });
    var klasses = Object.keys(srcOf).sort(function (a, b) {
      return srcRank(srcOf[a]) - srcRank(srcOf[b]) || a.localeCompare(b);
    });
    var classes = [], plain = [];
    klasses.forEach(function (k) {
      var subs = subSet[k]
        ? Object.keys(subSet[k]).sort(function (a, b) { return a.localeCompare(b); })
        : [];
      if (srcOf[k] === "class" && subs.length) classes.push({ klass: k, subclasses: subs });
      else plain.push({ klass: k, source: srcOf[k] });
    });
    return { classes: classes, plain: plain };
  }

  function matchesSource(item, selKlass, selSub) {
    selKlass = selKlass || {};
    selSub = selSub || {};
    if (!Object.keys(selKlass).length && !Object.keys(selSub).length) return true;
    if (selKlass[item.klass]) return true;
    var subs = subsOf(item);
    for (var i = 0; i < subs.length; i++) {
      if (selSub[subKey(item.klass, subs[i])]) return true;
    }
    return false;
  }

  return {
    SUB_SEP: SUB_SEP,
    SRC_RANK: SRC_RANK,
    subKey: subKey,
    buildSourceModel: buildSourceModel,
    matchesSource: matchesSource
  };
});
