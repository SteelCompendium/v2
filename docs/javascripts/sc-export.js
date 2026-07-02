/* sc-export.js — "Copy as Markdown" (from the steel-etl sc-src template
 * island) and "Download PNG" (html-to-image over the card node) on carded
 * leaf pages. Buttons join the hover-revealed top-center control strip
 * (copy-link / pin / encounter-add pattern). instant-nav safe: document$-
 * driven, idempotent per swap. */
(function () {
  "use strict";
  function cardNode() {
    return document.querySelector(
      ".md-content .sb-wrap, .md-content .md-typeset > .sc-ability, " +
      ".md-content .fb-wrap, .md-content .sc-kit, .md-content .md-typeset > .sc-trait");
  }

  function init() {
    if (document.querySelector(".sc-export")) return; // idempotent
    const tpl = document.querySelector("template.sc-src");
    const card = cardNode();
    if (!tpl || !card) return;
    const host = card.querySelector(".sc-head") || card;

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
      navigator.clipboard.writeText((tpl.getAttribute("data-src") || "").trim()).then(function () {
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
