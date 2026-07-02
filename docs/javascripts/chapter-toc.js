/* chapter-toc.js — injects a collapsible "In this chapter" mini-TOC at the top
 * of Read chapter pages, built from the page's own h2/h3 headings. Logic in
 * chapter-toc-core.js. instant-nav safe: re-runs per document$ emission and is
 * idempotent (guards on an existing .sc-chtoc). */
(function () {
  "use strict";
  function init() {
    const C = window.SCChapterToc;
    if (!C || !C.isReadPage(location.pathname)) return;
    const content = document.querySelector(".md-content .md-typeset");
    if (!content || content.querySelector(".sc-chtoc")) return; // idempotent
    const headings = Array.prototype.slice
      .call(content.querySelectorAll("h2[id], h3[id]"))
      .map(function (el) {
        return {
          level: el.tagName === "H2" ? 2 : 3,
          text: (el.textContent || "").replace(/¶/g, "").trim(),
          id: el.id,
        };
      });
    if (headings.length < 4) return; // short chapters don't need a map
    const model = C.buildTocModel(headings);
    const holder = document.createElement("div");
    holder.innerHTML = C.renderTocHTML(model, "In this chapter");
    const h1 = content.querySelector("h1");
    const anchor = h1 ? h1.nextElementSibling : content.firstElementChild;
    content.insertBefore(holder.firstElementChild, anchor);
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init); // static-serve fallback
})();
