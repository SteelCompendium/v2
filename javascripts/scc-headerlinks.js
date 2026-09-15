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

  // The page-level permalink: a copy button in the top-right action strip
  // (.sc-pageact, see sc-pageact.js). Plain pages only — card pages carry the
  // card's own copy-link. The H1's inline ¶ is hidden by steel-pageact.css;
  // section headings (h2+) keep their inline ¶s.
  function mountPageLink() {
    var A = window.SCPageAct;
    if (!A || A.cardHead()) return;
    if (!document.querySelector(".md-content h1")) return;
    var strip = A.strip();
    if (!strip || strip.querySelector(".sc-pageact__link")) return;

    var url = metaContent("scc-permalink");
    var scc = !!url;
    if (!url) url = location.origin + location.pathname;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sc-pageact__link";
    btn.title = scc ? "Copy stable permalink (" + url + ")" : "Copy page link";
    btn.setAttribute("aria-label", btn.title);
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/>' +
      '<path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></svg>';
    btn.addEventListener("click", function () {
      copyText(url).then(
        function () {
          btn.classList.add("is-copied");
          setTimeout(function () { btn.classList.remove("is-copied"); }, 1200);
        },
        function () { /* clipboard blocked */ }
      );
    });
    strip.appendChild(btn);
  }

  function render() {
    var sccBase = metaContent("scc-base");
    var headings = document.querySelectorAll(
      ".md-content h1, .md-content h2, .md-content h3, .md-content h4, .md-content h5, .md-content h6"
    );
    headings.forEach(function (h) { wire(h, sccBase); });
    mountPageLink();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(render);
  } else {
    document.addEventListener("DOMContentLoaded", render);
  }
})();
