/* sc-chrome.js — the shared CARD CHROME PANEL container (SC-297).
 *
 * The site port of the DSE plugin's element chrome panel (SC-169/SC-189). It owns
 * exactly one thing: the plate. Consumers (copy-link, pin, encounter-add, exports)
 * ask for it and mount their own buttons into it; CSS `order` fixes the visual
 * order, so mount order — and therefore extra_javascript order — does not matter.
 * This is the same seam sc-pageact.js established for the plain-page strip.
 *
 * Geometry, material, depth, hover/touch/print behaviour: all CSS
 * (docs/stylesheets/steel-chrome.css). This module owns DOM only, deliberately:
 * the plugin's mountChrome.ts draws the same line, and it is what keeps the print
 * contract structural (a plate that no rule reveals on paper cannot be revealed by
 * a script that mounted it).
 *
 * WHICH CARDS GET A PLATE. The strict `h1:first-child + hr + <card>` adjacency,
 * with one optional intervening element: `<p class="sb-backlink">` (the "Summoned
 * by <a>…</a>" line steel-etl's class_backlinks.go inserts between the hr and
 * certain retainer/summoner minion statblocks — SC-297 round 4, HIGH-2). Those
 * pages ARE card pages and get the plate like any other.
 *
 * SC-297 round 4 (owner ruling, decisions.md -> "Round 3"): this module is the
 * SINGLE source of truth for "is this a card page, and which element is the
 * card" — every consumer (copy-link, pin, encounter-add, export) resolves the
 * card through SCChrome and mounts nothing when panel() is null; none keeps its
 * own private card-finding selector any more. sc-pageact.js's plain-page test
 * shares this exact predicate (calls `SCChrome.anchor()` itself), so a page is
 * never read as "card" by one seam and "plain" by the other.
 *
 * So: the page's ONE main entity card. A page that merely EMBEDS cards (a Read
 * chapter, an index page, a statblock's nested features, a kit's signature
 * ability) matches nothing here and is untouched.
 *
 * ROLLOUT — adding a card family is two edits and nothing else:
 *   1. its selector in FAMILIES below;
 *   2. its `--sc-chrome-frame-top/right` block under "PER-FAMILY FRAME OFFSETS"
 *      in steel-chrome.css (plus the clip relaxation if the card node clips its
 *      own overflow, as .sc-ability does).
 * SC-297 round 2 rolls the panel out to all five families that carried the old
 * floating top-centre strip: statblock, featureblock, ability, trait, kit.
 *
 * instant-nav safe: no listeners at all, and no document$ subscription. panel() is
 * lazy and idempotent — it looks for an existing plate on the current main card
 * first, so a re-fired consumer reuses it and a body swap simply presents a card
 * that has none yet.
 */
(function () {
  "use strict";

  // One entry per ported card family — see ROLLOUT above. Not order-significant:
  // querySelector on a selector list returns the first match in DOCUMENT order,
  // not list order, and only one family can ever be adjacent to the page's hr.
  var FAMILIES = [".sb-wrap", ".sc-ability", ".fb-wrap", ".sc-trait", ".sc-kit"];

  // No bare descendant selectors: an embedded card deeper in prose must NOT
  // match. Each family matches directly after the hr, OR after the single
  // optional `p.sb-backlink` line (see WHICH CARDS GET A PLATE above).
  var MAIN = FAMILIES.map(function (c) {
    return ".md-typeset > h1:first-child + hr + " + c + ", " +
      ".md-typeset > h1:first-child + hr + p.sb-backlink + " + c;
  }).join(", ");

  window.SCChrome = {
    /** The page's main entity card — the node carrying the visible card frame —
     *  or null when this is not a card page. The single shared card-page
     *  predicate: sc-pageact.js's plain-page test calls this too. */
    anchor: function () {
      return document.querySelector(MAIN);
    },

    /** The chrome plate for this page's main card, created on first call.
     *  Returns null on a page that has no main card. */
    panel: function () {
      var card = this.anchor();
      if (!card) return null;

      var panel = card.querySelector(":scope > .sc-chrome");
      if (panel) return panel;

      card.classList.add("sc-chrome-anchor");
      panel = document.createElement("div");
      panel.className = "sc-chrome";
      // A toolbar, not a menu: the items are peer actions, not a list to arrow
      // through. Matches the plugin's role/aria-label on the same plate.
      panel.setAttribute("role", "toolbar");
      panel.setAttribute("aria-label", "Card actions");
      card.appendChild(panel);
      return panel;
    },
  };
})();
