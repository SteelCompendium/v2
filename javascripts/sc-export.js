/* sc-export.js — "Copy as Markdown" (from the steel-etl sc-src template
 * island) and "Download PNG" (html-to-image over the card node) on carded
 * leaf pages. Buttons join the shared chrome plate (sc-chrome.js).
 * instant-nav safe: document$-driven, idempotent per swap.
 *
 * SC-297 round 4 (owner ruling, decisions.md -> "Round 3"): the card comes
 * from `SCChrome` — the single source of truth for "is this a card page, and
 * which element is the card" — not a private descendant selector. Round 4
 * fixed HIGH-2 here: on the three `sb-backlink` minion pages the old bare
 * descendant selector still matched `.sb-wrap` even though `SCChrome.panel()`
 * was null (the intervening `<p class="sb-backlink">` defeated the strict
 * adjacency this module never enforced), so the MD/PNG pair fell into the
 * card's plain `.sc-head` with none of the placement CSS that block used to
 * carry (steel-copylink.css/steel-pins.css/steel-encounter.css/
 * steel-export.css's legacy strip rules, deleted in round 2) — static,
 * always-visible, stacked over the head. Now `SCChrome.anchor()` accepts that
 * one optional intervening element, so those pages get a real plate too, and
 * this module mounts nothing when there is no plate to mount into. */
(function () {
  "use strict";
  function cardNode() {
    return window.SCChrome && window.SCChrome.anchor();
  }

  // The stashed source keeps the generator's FILE-relative links
  // ("../../rule/x.md"), which are dead outside the site tree. Resolve them
  // to absolute page URLs so the copied markdown works wherever it's pasted.
  // The md file lives one directory above the directory-style page URL
  // (…/slug.md → …/slug/), hence the extra "../" on the base.
  function absolutizeLinks(src) {
    const base = new URL("..", location.href);
    return src.replace(/\]\(([^)\s#]+\.md)(#[^)]*)?\)/g, function (m, path, hash) {
      if (/^[a-z]+:/i.test(path)) return m; // already absolute / scheme'd
      try {
        return "](" + new URL(path.replace(/\.md$/, "/"), base).href + (hash || "") + ")";
      } catch (_) { return m; }
    });
  }

  function init() {
    if (document.querySelector(".sc-export")) return; // idempotent
    const tpl = document.querySelector("template.sc-src");
    const card = cardNode();
    if (!tpl || !card) return;
    const host = window.SCChrome && window.SCChrome.panel();
    if (!host) return; // mount nothing without a plate to mount into

    const bar = document.createElement("span");
    bar.className = "sc-export";

    const mdBtn = document.createElement("button");
    mdBtn.type = "button";
    mdBtn.className = "sc-export__btn sc-export__md";
    mdBtn.title = "Copy as Markdown";
    mdBtn.textContent = "MD";
    mdBtn.addEventListener("click", function () {
      // source rides in the data-src attribute (markdown-processing-proof);
      // getAttribute returns it entity-decoded.
      const src = absolutizeLinks((tpl.getAttribute("data-src") || "").trim());
      navigator.clipboard.writeText(src).then(function () {
        mdBtn.textContent = "✓";
        setTimeout(function () { mdBtn.textContent = "MD"; }, 1200);
      });
    });
    bar.appendChild(mdBtn);

    if (window.htmlToImage) {
      const pngBtn = document.createElement("button");
      pngBtn.type = "button";
      pngBtn.className = "sc-export__btn sc-export__png";
      pngBtn.title = "Download card as PNG";
      pngBtn.textContent = "PNG";
      pngBtn.addEventListener("click", function () {
        document.body.classList.add("sc-export-shooting"); // hides controls + sticky
        window.htmlToImage.toPng(card, {
          pixelRatio: 2,
          backgroundColor: getComputedStyle(document.body).backgroundColor,
        }).then(function (url) {
          document.body.classList.remove("sc-export-shooting");
          const a = document.createElement("a");
          a.download = (location.pathname.split("/").filter(Boolean).pop() || "card") + ".png";
          a.href = url;
          a.click();
        }).catch(function () {
          document.body.classList.remove("sc-export-shooting");
          pngBtn.textContent = "✗";
          setTimeout(function () { pngBtn.textContent = "PNG"; }, 1500);
        });
      });
      bar.appendChild(pngBtn);
    }
    host.appendChild(bar);
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
