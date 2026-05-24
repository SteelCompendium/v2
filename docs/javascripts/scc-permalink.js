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
 *
 * On instant navigation (mkdocs-material's navigation.instant), material calls
 * history.pushState() with the friendly URL at click time, then fetches and
 * swaps the DOM, then fires document$. Without intervention, the friendly URL
 * flashes in the address bar for the duration of the fetch+swap. To avoid
 * that, we monkey-patch pushState to immediately follow up with replaceState
 * to the SCC URL in the same synchronous task — the browser doesn't paint
 * between two synchronous history calls, so the friendly URL never appears.
 *
 * The lookup uses window.__SCC_PERMALINK_MAP__, populated by scc-manifest.js
 * (generated at build time by steel-etl).
 */
(function () {
  "use strict";

  // Determine the site root path (e.g. "/" locally, "/v2/" on prod) so the
  // map lookup works regardless of deploy prefix. Material exposes this via
  // the inline #__config block.
  function detectBasePath() {
    try {
      var cfg = document.getElementById("__config");
      if (cfg && cfg.textContent) {
        var data = JSON.parse(cfg.textContent);
        if (data && data.base) {
          return new URL(data.base, location.href).pathname;
        }
      }
    } catch (e) {}
    return "/";
  }

  var basePath = detectBasePath();

  function sccPathnameFor(pathname) {
    var map = window.__SCC_PERMALINK_MAP__;
    if (!map || !pathname) return null;
    if (pathname.indexOf(basePath) !== 0) return null;
    var key = pathname.slice(basePath.length);
    var scc = map[key];
    return scc ? basePath + scc : null;
  }

  // Monkey-patch pushState. Material calls pushState(null, "", friendlyURL)
  // at click time; we issue a replaceState to the SCC URL in the same task.
  var nativePush = history.pushState;
  history.pushState = function (state, title, url) {
    var result = nativePush.call(this, state, title, url);
    if (url) {
      try {
        var target = new URL(url, location.href);
        var sccPath = sccPathnameFor(target.pathname);
        if (sccPath && sccPath !== target.pathname) {
          history.replaceState(state, "", sccPath + target.search + target.hash);
        }
      } catch (e) {
        // URL constructor or replaceState can throw on cross-origin URLs.
      }
    }
    return result;
  };

  // Fallback path: after material swaps the DOM, re-check the new page's
  // meta tag. Covers (a) the initial page load (manifest unused there since
  // overrides/main.html runs an inline early-rewrite), (b) any page added
  // post-deploy that isn't in the manifest, and (c) cases where the patched
  // pushState couldn't fire (manifest not yet loaded, lookup miss).
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

    if (location.pathname === url.pathname) return;

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

  // Re-apply after anchor clicks (TOC permalinks, in-page jumps). If material's
  // instant nav or any other handler restored the friendly path while updating
  // the hash, this puts us back on the SCC permalink.
  window.addEventListener("hashchange", applyPermalink);
})();
