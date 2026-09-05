/**
 * SCC card copy-link button.
 *
 * Statblock (.sb-wrap), featureblock (.fb-wrap), and ability (.sc-ability) card
 * pages hide their page <h1>, which also hides the native heading-permalink (¶)
 * copy affordance that scc-headerlinks.js wires elsewhere. This module restores a
 * copy affordance for those pages: it injects ONE small button into the page's
 * primary card that copies the stable /scc/<code>/ permalink (from the page's
 * <meta name="scc-permalink">) to the clipboard.
 *
 * Non-intrusive by design: the button is hidden until the card is hovered
 * (desktop) so it stays out of screenshots; on touch devices (no hover) it shows
 * faint-but-persistent (see steel-copylink.css). Hidden when printing.
 *
 * Gate: injects only when the primary card is a DIRECT child of .md-typeset — the
 * same condition the CSS uses to hide the H1 — so embedded cards (a statblock's
 * nested feature, a kit's signature ability, an index-page preview) never get a
 * button. Uses document$ so it re-runs under Material's navigation.instant, and is
 * idempotent (skips a card that already has a button). Adds no window/document
 * listeners; the per-button click handler dies with the card on body swap.
 */
(function () {
  "use strict";

  var Core = (typeof window !== "undefined" && window.SccCardCopy) || {};
  var SELECTOR = ".sb-wrap, .fb-wrap, .sc-ability";
  // Thin-line link icon, reused verbatim from the original card design mockup
  // (reference/design-system/handoff/preview/comp-ability-card.html).
  var ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/>' +
    '<path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></svg>';

  function metaContent(name) {
    var m = document.querySelector('meta[name="' + name + '"]');
    return m ? m.getAttribute("content") : null;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for non-secure contexts (e.g. http:// during local preview).
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  function flash(btn) {
    btn.classList.add("sc-copylink--copied");
    setTimeout(function () {
      btn.classList.remove("sc-copylink--copied");
    }, 1200);
  }

  function render() {
    var url = Core.cleanPermalink(metaContent("scc-permalink"));
    if (!url) return;

    var content = document.querySelector(".md-content");
    if (!content) return;

    var card = content.querySelector(SELECTOR);
    if (!card) return;

    var kind = Core.cardKind(card.className);
    if (!kind) return;

    // Primary-card gate: same condition as the CSS H1-hide rules.
    if (!card.parentElement || !card.parentElement.classList.contains("md-typeset")) return;

    // Idempotent under navigation.instant re-fires.
    if (card.querySelector(".sc-copylink")) return;

    // SC-297: on a family that carries the chrome panel, mount INTO the panel —
    // the shared plate seated on the card's top border owns every per-card action
    // now. Families not yet ported fall back to the old top-centre strip:
    // statblock/featureblock mount into the card HEAD like the pin /
    // encounter-add / export buttons, so all five share one aligned row.
    // (Mounting on the wrap anchored the button to the wrap's top — which,
    // since the scaler note moved inside the wrap, is the note's text.)
    var host = (window.SCChrome && window.SCChrome.panel()) ||
      card.querySelector(".sb > .sb__head, .fb > .fb__head") || card;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sc-copylink";
    btn.setAttribute("data-card", kind);
    btn.setAttribute("aria-label", "Copy permalink");
    btn.setAttribute("title", "Copy permalink (" + url + ")");
    btn.innerHTML = ICON;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      copyText(url).then(
        function () { flash(btn); },
        function () { /* clipboard blocked; nothing else to do */ }
      );
    });
    host.appendChild(btn);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(render);
  } else {
    document.addEventListener("DOMContentLoaded", render);
  }
})();
