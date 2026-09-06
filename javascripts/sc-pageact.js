/* sc-pageact.js — shared helper for the page-level action strip (.sc-pageact):
 * an always-visible button cluster in the top-right of the content pane on
 * "plain" pages — any page whose main content is NOT a single entity card
 * (card pages carry their own hover-revealed chrome plate, sc-chrome.js).
 * Consumers mount their buttons themselves: scc-headerlinks.js the page
 * permalink, sc-pins.js the pin; CSS `order` fixes the visual order, so mount
 * order doesn't matter. Styled by steel-pageact.css. Must load BEFORE its
 * consumers in mkdocs.yml extra_javascript (and AFTER sc-chrome.js, which it
 * depends on — see cardHead() below).
 *
 * SC-297 round 4 (owner ruling): `SCChrome` is the single source of truth for
 * "is this a card page, and which element is the card" — this module's
 * plain-page test shares that exact predicate rather than keeping its own, so
 * a page is never read as "card" by one seam and "plain" by the other. */
(function () {
  "use strict";
  window.SCPageAct = {
    // the main entity card's head, or null on a plain page. Delegates the
    // card-page predicate to SCChrome.anchor() (see file header) — no private
    // selector here any more.
    cardHead: function () {
      var card = window.SCChrome && window.SCChrome.anchor();
      return card && card.querySelector(".sc-head");
    },
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
