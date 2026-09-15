/**
 * SCC card copy-link button.
 *
 * Card pages hide their page <h1> (per family, so the native heading-permalink
 * (¶) copy affordance scc-headerlinks.js wires elsewhere is hidden too). This
 * module restores a copy affordance for those pages: it injects ONE small
 * button into the page's primary card's chrome plate that copies the stable
 * /scc/<code>/ permalink (from the page's <meta name="scc-permalink">) to the
 * clipboard.
 *
 * Non-intrusive by design: hidden until the card is hovered (desktop) so it
 * stays out of screenshots; touch/print behaviour is the plate's, not this
 * module's (steel-chrome.css).
 *
 * SC-297 round 4 (owner ruling, decisions.md -> "Round 3"): the card AND the
 * mount point both come from `SCChrome` — the single source of truth for "is
 * this a card page, and which element is the card". No private selector, no
 * private adjacency check: this mounts nothing on a page SCChrome doesn't
 * recognize as a card page. (Round 4 fixed HIGH-1 here: `cardKind` didn't know
 * the kit/trait families, so every kit and trait leaf page lost its only
 * permalink affordance — not a gate problem, a missing-branch one; see
 * scc-card-copy-core.js.) Uses document$ so it re-runs under Material's
 * navigation.instant, and is idempotent (skips a card that already has a
 * button). Adds no window/document listeners; the per-button click handler
 * dies with the card on body swap.
 */
(function () {
  "use strict";

  var Core = (typeof window !== "undefined" && window.SccCardCopy) || {};
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

    // SC-297 round 4: SCChrome is the single card-page discriminator — no
    // private selector, no private adjacency check here any more.
    var C = window.SCChrome;
    var card = C && C.anchor();
    if (!card) return; // not a card page

    var kind = Core.cardKind(card.className);
    if (!kind) return;

    // Idempotent under navigation.instant re-fires.
    if (card.querySelector(".sc-copylink")) return;

    var host = C.panel();
    if (!host) return; // mount nothing without a plate to mount into

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
