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
 * ## Strategy
 *
 * URL rewriting ONLY happens on full page loads (initial navigation, hard
 * refresh, or direct SCC stub hit). The inline script in main.html runs
 * synchronously during HTML parse — before Material loads — and calls
 * replaceState + injects a <base> tag pointing at the friendly URL.
 *
 * During instant navigation (Material's navigation.instant), we do NOT
 * rewrite the URL. The friendly Browse path stays in the address bar.
 * This avoids a path-depth mismatch between location.href and the actual
 * page location that would cause Material's DOM-swap logic to resolve
 * relative stylesheet/script URLs against the wrong base (producing 404s
 * for CSS, JS, and link targets).
 *
 * For back/forward navigation, the history stack may contain an SCC URL
 * (from an earlier full-page rewrite). A capture-phase popstate handler
 * converts it back to the friendly URL before Material's handler fires,
 * so Material loads the correct page.
 *
 * A MutationObserver on <head> keeps the <base> tag alive on the initial
 * page (where the URL was rewritten) in case Material's search overlay or
 * other features manipulate head elements.
 *
 * The lookup uses window.__SCC_PERMALINK_MAP__, populated by scc-manifest.js
 * (generated at build time by steel-etl).
 */
(function () {
  "use strict";

  function detectBasePath() {
    try {
      var cfg = document.getElementById("__config");
      if (cfg && cfg.textContent) {
        var data = JSON.parse(cfg.textContent);
        if (data && data.base) {
          var resolveBase = document.baseURI || location.href;
          return new URL(data.base, resolveBase).pathname;
        }
      }
    } catch (e) {}
    return "/";
  }

  var basePath = detectBasePath();

  // The inline early-rewrite script sets this on the initial page load so
  // we can maintain the <base> tag even if Material removes it.
  var currentFriendlyPath = window.__SCC_FRIENDLY_PATH__ || null;

  function sccPathnameFor(pathname) {
    var map = window.__SCC_PERMALINK_MAP__;
    if (!map || !pathname) return null;
    if (pathname.indexOf(basePath) !== 0) return null;
    var key = pathname.slice(basePath.length);
    var scc = map[key];
    return scc ? basePath + scc : null;
  }

  function friendlyPathnameFor(sccPathname) {
    var map = window.__SCC_PERMALINK_MAP__;
    if (!map || !sccPathname) return null;
    if (sccPathname.indexOf(basePath) !== 0) return null;
    var sccKey = sccPathname.slice(basePath.length);
    for (var friendly in map) {
      if (map[friendly] === sccKey) {
        return basePath + friendly;
      }
    }
    return null;
  }

  function setFriendlyBase(friendlyPathname) {
    currentFriendlyPath = friendlyPathname;
    var base = document.querySelector("base[data-scc]");
    if (!base) {
      base = document.createElement("base");
      base.setAttribute("data-scc", "");
      document.head.prepend(base);
    }
    base.href = friendlyPathname;
  }

  function clearFriendlyBase() {
    currentFriendlyPath = null;
    var base = document.querySelector("base[data-scc]");
    if (base) base.remove();
  }

  // Keep the <base> tag alive on the initial page where the URL was
  // rewritten. Material's search overlay and other features can trigger
  // head element changes that remove our tag.
  if (typeof MutationObserver !== "undefined") {
    new MutationObserver(function () {
      if (!currentFriendlyPath) return;
      if (document.querySelector("base[data-scc]")) return;
      var base = document.createElement("base");
      base.setAttribute("data-scc", "");
      base.href = currentFriendlyPath;
      document.head.prepend(base);
    }).observe(document.head, { childList: true });
  }

  // Capture-phase popstate handler: when the user navigates back to a page
  // whose history entry has an SCC URL (from a prior full-page rewrite),
  // convert it to the friendly URL before Material's handler fires. This
  // ensures Material fetches and renders the correct page.
  window.addEventListener("popstate", function () {
    var friendly = friendlyPathnameFor(location.pathname);
    if (friendly) {
      history.replaceState(history.state, "", friendly);
      clearFriendlyBase();
    }
  }, true);

  // After Material swaps the DOM (fires document$), handle cleanup:
  // - If the URL was rewritten (initial page load), maintain the <base> tag.
  // - If it wasn't rewritten (instant nav), clear any stale <base> tag.
  function onPageReady() {
    var meta = document.querySelector('meta[name="scc-permalink"]');
    if (!meta) {
      clearFriendlyBase();
      return;
    }

    var permalink = meta.getAttribute("content");
    if (!permalink) return;

    var url;
    try {
      url = new URL(permalink, document.baseURI || location.href);
    } catch (e) {
      return;
    }

    if (location.pathname === url.pathname) {
      // URL already shows the SCC path (initial page load or reloaded SCC
      // stub). Maintain the <base> tag so relative links resolve correctly.
      if (currentFriendlyPath) {
        setFriendlyBase(currentFriendlyPath);
      }
      return;
    }

    // Instant nav: the friendly URL is in the address bar, which is correct
    // for Material's relative URL resolution. Clear any stale <base> tag.
    clearFriendlyBase();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(onPageReady);
  } else {
    document.addEventListener("DOMContentLoaded", onPageReady);
  }

  window.addEventListener("hashchange", function () {
    // Re-check after anchor navigation in case the hash change somehow
    // altered the pathname (shouldn't happen, but defensive).
    var meta = document.querySelector('meta[name="scc-permalink"]');
    if (meta && currentFriendlyPath) {
      setFriendlyBase(currentFriendlyPath);
    }
  });
})();
