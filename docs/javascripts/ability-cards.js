/**
 * Ability Cards — runtime DOM enhancements for Draw Steel content.
 *
 * 1. Classifies blockquote ability cards by emoji prefix (data-ability-type).
 * 2. Transforms power roll tier lists into glyph badge rows (DrawSteelGlyphs font).
 * 3. Wraps wide tables in scroll containers for mobile.
 * 4. Supports "classic" (glyph badges) and "modern" (colored borders) card styles.
 */
(function () {
  "use strict";

  var Core = (typeof window !== "undefined" && window.AbilityCardsCore) || null;

  /* ── Emoji → ability type mapping ── */
  var EMOJI_MAP = [
    { pattern: "🗡",  type: "strike"    },  // 🗡
    { pattern: "🏹",  type: "ranged"    },  // 🏹
    { pattern: "👤",  type: "maneuver"  },  // 👤
    { pattern: "❗",         type: "triggered" },  // ❗
    { pattern: "❇",         type: "area"      },  // ❇
    { pattern: "⭐",         type: "passive"   },  // ⭐
    { pattern: "☠",         type: "villain"   },  // ☠
    { pattern: "🌀",  type: "special"   },  // 🌀
  ];

  /* Text-based fallback patterns for ability type detection */
  var TEXT_PATTERNS = [
    { pattern: /\bSignature Ability\b/i,  type: "strike"    },
    { pattern: /\bVillain Action\b/i,     type: "villain"   },
    { pattern: /\bTriggered [Aa]ction\b/, type: "triggered" },
  ];

  /* ── Power roll tier patterns ── */
  var TIER_LOW  = /^≤\s*11\s*:/;
  var TIER_MID  = /^12[\s–—-]+16\s*:/;
  var TIER_HIGH = /^17\+?\s*:/;

  /* DrawSteelGlyphs codepoints for tier badges */
  var TIER_GLYPHS = {
    low:  "!",   // Tier 1: ≤11 badge with left arrow
    mid:  "@",   // Tier 2: 12-16 badge with angled corners
    high: "#"    // Tier 3: 17+ badge with right arrow
  };

  /* ── Helpers ── */

  function getTextStart(el) {
    return (el.textContent || "").slice(0, 80).trim();
  }

  function detectAbilityType(blockquote) {
    var text = getTextStart(blockquote);
    var i;

    for (i = 0; i < EMOJI_MAP.length; i++) {
      if (text.indexOf(EMOJI_MAP[i].pattern) !== -1) {
        return EMOJI_MAP[i].type;
      }
    }

    for (i = 0; i < TEXT_PATTERNS.length; i++) {
      if (TEXT_PATTERNS[i].pattern.test(text)) {
        return TEXT_PATTERNS[i].type;
      }
    }

    return null;
  }

  function detectTier(strongText) {
    if (TIER_LOW.test(strongText))  return "low";
    if (TIER_MID.test(strongText))  return "mid";
    if (TIER_HIGH.test(strongText)) return "high";
    return null;
  }

  function getEffectHTML(li, strong) {
    var html = "";
    var node = strong.nextSibling;
    while (node) {
      if (node.nodeType === 3) {
        html += node.textContent;
      } else if (node.nodeType === 1) {
        html += node.outerHTML;
      }
      node = node.nextSibling;
    }
    return html.replace(/^\s*/, "");
  }

  /* ── Main enhancement functions ── */

  function classifyAbilityCards() {
    var blockquotes = document.querySelectorAll(".md-typeset blockquote");
    for (var i = 0; i < blockquotes.length; i++) {
      var bq = blockquotes[i];
      var type = detectAbilityType(bq);
      if (type) {
        bq.setAttribute("data-ability-type", type);
      }
    }
  }

  function transformPowerRolls() {
    var paragraphs = document.querySelectorAll(".md-typeset p");
    for (var i = 0; i < paragraphs.length; i++) {
      var p = paragraphs[i];
      var strong = p.querySelector("strong");
      if (!strong) continue;
      if (!/^Power Roll/i.test(strong.textContent.trim())) continue;

      var ul = p.nextElementSibling;
      if (!ul || ul.tagName !== "UL") continue;
      if (ul.getAttribute("data-power-roll-transformed")) continue;

      var lis = ul.querySelectorAll(":scope > li");
      if (lis.length < 1) continue;

      var hasAnyTier = false;
      for (var j = 0; j < lis.length; j++) {
        var s = lis[j].querySelector("strong:first-child");
        if (s && detectTier(s.textContent.trim())) {
          hasAnyTier = true;
          break;
        }
      }
      if (!hasAnyTier) continue;

      var wrapper = document.createElement("div");
      wrapper.className = "power-roll-tiers";
      wrapper.setAttribute("data-power-roll-transformed", "");

      for (var k = 0; k < lis.length; k++) {
        var li = lis[k];
        var tierStrong = li.querySelector("strong:first-child");
        if (!tierStrong) continue;

        var tierText = tierStrong.textContent.trim();
        var tier = detectTier(tierText);
        if (!tier) continue;

        var row = document.createElement("div");
        row.className = "power-roll-row";

        var badge = document.createElement("span");
        badge.className = "ds-glyph power-roll-badge power-roll-badge--" + tier;
        badge.textContent = TIER_GLYPHS[tier];
        badge.setAttribute("aria-label", tierText.replace(/:$/, ""));

        var effect = document.createElement("span");
        effect.className = "power-roll-effect";
        effect.innerHTML = getEffectHTML(li, tierStrong);

        row.appendChild(badge);
        row.appendChild(effect);
        wrapper.appendChild(row);
      }

      ul.parentNode.replaceChild(wrapper, ul);
      p.classList.add("power-roll-header");
    }
  }

  /**
   * Statblock power rolls: an ability blockquote whose TITLE carries dice
   * notation ("Nd10 + X") is followed by the first contiguous run of bare,
   * digit-led tier paragraphs (≤3). Replace that run with a single
   * .power-roll-tiers badge group (low/mid/high by position), reusing the same
   * markup transformPowerRolls emits so the existing CSS styles it.
   */
  function transformStatblockPowerRolls() {
    if (!Core) return;
    var blockquotes = document.querySelectorAll(".md-typeset blockquote");
    for (var i = 0; i < blockquotes.length; i++) {
      var bq = blockquotes[i];
      var titleStrong = bq.querySelector("p strong");
      if (!titleStrong || !Core.hasStatblockDiceRoll(titleStrong.textContent)) continue;

      // Walk direct children in order; collect the first contiguous run of
      // bare (no leading <strong>), digit-led <p> tier lines.
      var run = [];
      var node = bq.firstElementChild;
      while (node) {
        if (node.tagName === "P") {
          var lead = node.querySelector("strong:first-child");
          if (!lead && Core.isTierLine(node.textContent)) {
            run.push(node);
            if (run.length === 3) break;
          } else if (run.length > 0) {
            break; // run ended (e.g. the **Effect:** paragraph)
          }
        }
        node = node.nextElementSibling;
      }
      if (run.length < 2) continue;
      if (run[0].getAttribute("data-power-roll-transformed")) continue;

      var wrapper = document.createElement("div");
      wrapper.className = "power-roll-tiers";
      wrapper.setAttribute("data-power-roll-transformed", "");

      for (var k = 0; k < run.length; k++) {
        var tier = Core.tierKeyAt(k);
        var row = document.createElement("div");
        row.className = "power-roll-row";

        var badge = document.createElement("span");
        badge.className = "ds-glyph power-roll-badge power-roll-badge--" + tier;
        badge.textContent = TIER_GLYPHS[tier];

        var effect = document.createElement("span");
        effect.className = "power-roll-effect";
        effect.innerHTML = run[k].innerHTML;

        row.appendChild(badge);
        row.appendChild(effect);
        wrapper.appendChild(row);
      }

      run[0].parentNode.insertBefore(wrapper, run[0]);
      for (var m = 0; m < run.length; m++) {
        run[m].parentNode.removeChild(run[m]);
      }
    }
  }

  /** Legacy power roll styling — colored left borders on list items */
  function colorPowerRollTiers() {
    var listItems = document.querySelectorAll(".md-typeset li");
    for (var i = 0; i < listItems.length; i++) {
      var li = listItems[i];
      var strong = li.querySelector("strong:first-child");
      if (!strong) continue;

      var strongText = strong.textContent.trim();

      if (TIER_LOW.test(strongText)) {
        li.classList.add("power-tier-low");
      } else if (TIER_MID.test(strongText)) {
        li.classList.add("power-tier-mid");
      } else if (TIER_HIGH.test(strongText)) {
        li.classList.add("power-tier-high");
      }
    }
  }

  function wrapWideTables() {
    // Split DOM writes (wrapping) from reads (checkScrollable's scrollWidth/
    // clientWidth access) into two phases. Interleaving them per-table forced
    // a synchronous layout on every iteration -- on the Classes chapter that
    // is 555 tables, i.e. 555 layout passes. Batching the reads after all the
    // writes lets the browser settle with a single layout. Behavior unchanged.
    var tables = document.querySelectorAll(".md-typeset table:not([class])");
    var wrappers = [];
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      if (table.parentElement &&
          table.parentElement.classList.contains("table-scroll-wrapper")) {
        continue;
      }

      var wrapper = document.createElement("div");
      wrapper.className = "table-scroll-wrapper";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      wrappers.push(wrapper);
    }

    for (var j = 0; j < wrappers.length; j++) {
      checkScrollable(wrappers[j]);
    }
  }

  function checkScrollable(wrapper) {
    if (wrapper.scrollWidth > wrapper.clientWidth) {
      wrapper.classList.add("is-scrollable");
      wrapper.addEventListener("scroll", function () {
        var atEnd = this.scrollLeft + this.clientWidth >= this.scrollWidth - 2;
        this.classList.toggle("scrolled-right", atEnd);
      });
    }
  }

  /* ── Initialization ── */

  function useClassicStyle() {
    return document.documentElement.getAttribute("data-card-style") !== "modern";
  }

  function init() {
    classifyAbilityCards();
    if (useClassicStyle()) {
      transformPowerRolls();
      transformStatblockPowerRolls();
    } else {
      colorPowerRollTiers();
    }
    wrapWideTables();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      init();
    });
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
