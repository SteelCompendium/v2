/**
 * SCC permalink — rewrite the visible URL to the SCC permalink form so that
 * when the user copies the URL from the address bar, they get a stable link
 * that survives Browse-section restructuring.
 *
 * The friendly Browse paths still resolve normally; we just swap what's shown
 * in the URL bar via history.replaceState(). The browser back/forward stack
 * is unaffected.
 *
 * Pages opt in by emitting <meta name="scc-permalink" content="...">
 * (added by overrides/main.html when frontmatter contains an scc field).
 */
(function () {
  "use strict";

  function applyPermalink() {
    var meta = document.querySelector('meta[name="scc-permalink"]');
    if (!meta) return;
    var permalink = meta.getAttribute("content");
    if (!permalink) return;

    var url;
    try {
      url = new URL(permalink, location.href);
    } catch (e) {
      return;
    }

    // Only rewrite if we're not already on the permalink path.
    if (location.pathname === url.pathname) return;

    // Preserve any hash and query the user navigated with.
    var target = url.pathname + location.search + location.hash;
    try {
      history.replaceState(history.state, "", target);
    } catch (e) {
      // replaceState can throw if the target origin differs; ignore.
    }
  }

  // MkDocs Material instant navigation: document$ fires per page load.
  if (typeof document$ !== "undefined") {
    document$.subscribe(applyPermalink);
  } else {
    document.addEventListener("DOMContentLoaded", applyPermalink);
  }
})();
