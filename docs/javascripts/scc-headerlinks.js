/**
 * SCC-aware heading permalinks.
 *
 * Reuses mkdocs-material's native heading-anchor (¶) icon (rendered by
 * `toc: permalink: true`, class `.headerlink`) as the permalink-copy affordance,
 * replacing the old standalone page-title "Copy permalink" button.
 *
 * For each content heading:
 *   - The page H1 copies the page-level SCC permalink from <meta name="scc-permalink">.
 *   - A heading carrying data-scc (emitted by steel-etl RenderSubtree) copies the
 *     stable `${scc-base}${code}/` URL — this resolves via the /scc/<code>/ redirect
 *     stub to that item's canonical page, surviving site restructures.
 *   - Any other (structural) heading copies the friendly page URL + #anchor: a useful
 *     in-page deep link, but NOT restructure-stable.
 *
 * Click copies to the clipboard AND lets Material's native jump-to-anchor proceed
 * (no preventDefault). SCC-backed anchors get `.headerlink--scc` for distinct styling.
 * Uses document$ so it re-runs under instant navigation. Scoped to .md-content and
 * iterates only headings (tens per page), so it adds no per-link DOM-walk cost.
 */
(function () {
  "use strict";

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

  function flash(anchor) {
    anchor.classList.add("headerlink--copied");
    setTimeout(function () {
      anchor.classList.remove("headerlink--copied");
    }, 1200);
  }

  // Returns { url, scc } for a heading.
  function linkFor(heading, sccBase) {
    if (heading.matches(".md-content h1")) {
      var pageLink = metaContent("scc-permalink");
      if (pageLink) return { url: pageLink, scc: true };
    }
    var code = heading.getAttribute("data-scc");
    if (code && sccBase) return { url: sccBase + code + "/", scc: true };
    var base = location.origin + location.pathname;
    return { url: heading.id ? base + "#" + heading.id : base, scc: false };
  }

  function wire(heading, sccBase) {
    var anchor = heading.querySelector("a.headerlink");
    if (!anchor || anchor.dataset.sccWired) return;
    anchor.dataset.sccWired = "1";

    var info = linkFor(heading, sccBase);
    if (info.scc) anchor.classList.add("headerlink--scc");
    anchor.setAttribute(
      "title",
      info.scc
        ? "Copy stable permalink (" + info.url + ")"
        : "Copy link to this section"
    );
    anchor.setAttribute("aria-label", anchor.getAttribute("title"));

    anchor.addEventListener("click", function () {
      // Do NOT preventDefault: native jump (hash update + scroll) still happens.
      copyText(info.url).then(
        function () { flash(anchor); },
        function () { /* clipboard blocked; native jump still works */ }
      );
    });
  }

  function render() {
    var sccBase = metaContent("scc-base");
    var headings = document.querySelectorAll(
      ".md-content h1, .md-content h2, .md-content h3, .md-content h4, .md-content h5, .md-content h6"
    );
    headings.forEach(function (h) { wire(h, sccBase); });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(render);
  } else {
    document.addEventListener("DOMContentLoaded", render);
  }
})();
