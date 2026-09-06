/* sc-pageact.js — shared helper for the page-level action strip (.sc-pageact):
 * an always-visible button cluster in the top-right of the content pane on
 * "plain" pages — any page whose main content is NOT a single entity card
 * (card pages carry their own hover-revealed top-center control strip).
 * Consumers mount their buttons themselves: scc-headerlinks.js the page
 * permalink, sc-pins.js the pin; CSS `order` fixes the visual order, so mount
 * order doesn't matter. Styled by steel-pageact.css. Must load BEFORE its
 * consumers in mkdocs.yml extra_javascript. */
(function () {
  "use strict";
  // A main-card page is identified by the strict h1+hr+card adjacency — the
  // same rule the CSS uses to hide the duplicate H1. Embedded cards deeper in
  // prose (Read chapters carry dozens) must NOT match, so no bare descendant
  // selectors here. querySelector returns the MAIN head: it precedes the
  // card's sub-feature heads in document order.
  var MAIN = [".sb-wrap", ".fb-wrap", ".sc-ability", ".sc-trait", ".sc-kit", ".pj"]
    .map(function (c) { return ".md-typeset > h1:first-child + hr + " + c + " .sc-head"; })
    .join(", ");
  window.SCPageAct = {
    // the main entity card's head, or null on a plain page
    cardHead: function () { return document.querySelector(MAIN); },
    // the strip container, created on first call (per instant-nav swap the
    // old one leaves with the swapped-out content)
    strip: function () {
      var inner = document.querySelector(".md-content__inner") ||
                  document.querySelector(".md-content");
      if (!inner) return null;
      var s = inner.querySelector(":scope > .sc-pageact");
      if (!s) {
        s = document.createElement("div");
        s.className = "sc-pageact";
        // append, never prepend: the strip is absolutely positioned, and a
        // prepended sibling would rob the h1 of :first-child (the CSS
        // duplicate-H1 hide rules key on it)
        inner.appendChild(s);
      }
      return s;
    },
  };
})();
