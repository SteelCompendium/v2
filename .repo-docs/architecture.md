---
repo: v2
doc: architecture
updated: 2026-05-23
---

# Architecture

## System Overview

The v2 site is a static MkDocs Material site. Content flows through a pipeline:

```
annotated markdown (data-rules/)
  -> steel-etl gen (parse, classify, output)
  -> steel-etl site (map to MkDocs structure)
  -> transform_indexes.py (grid card layouts)
  -> mkdocs build (static HTML)
  -> GitHub Pages (steelcompendium.io/v2)
```

The site has no server-side routing. All dynamic behavior is client-side JavaScript.

## Content Pipeline

### steel-etl site

Configured by `site.yaml`. Reads ETL md-linked output and maps it into `docs/`:

- **Section mapping**: `Browse/` (modular rules by type), `Bestiary/` (modular Monsters-book pages — monster groups/statblocks/malice, terrain, retainers), `Read/` (book-order chapters, grouped per book)
- **Book-faithful pages**: each `md-linked` page is a full book-order render of its source section's subtree (own body + all nested descendants inline, headings normalized, ability statblocks un-blockquoted). Pages are direct section-mapped renders — no composite reassembly step. Produced by `RenderSubtree` in `steel-etl/internal/content/render_subtree.go`. (Exception: monster **group** pages are lore-only in `Bestiary/` — the pipeline skips `RenderSubtree` for `@type: monster` — while the everything-inline view lives on the `Read/` monster chapters.)
- **Groups**: nest kit signature abilities under `Kits/` subdirectory
- **SCC stubs**: generate `scc/{code}/index.html` redirect files (see below)
- **Static overrides**: `static_content/docs/` files are copied last, overriding generated content

### Generated vs hand-authored

Everything under `docs/Browse/`, `docs/Bestiary/`, `docs/Read/`, and `docs/scc/` is wiped and regenerated on each build. Do not edit these directly -- changes will be lost. To override a generated page, place your version at the same relative path under `static_content/docs/`.

Safe to edit: `docs/javascripts/`, `docs/stylesheets/`, `overrides/`, `scripts/`, `static_content/`, `mkdocs.yml`, `site.yaml`.

## SCC Permalink System

SCC (Steel Compendium Classification) codes are permanent identifiers for every piece of content. The permalink system gives every page a stable, shareable URL that survives Browse restructuring.

> **History:** an earlier version (ADR [2026-05-23](decisions/2026-05-23-scc-permalink-system.md)) also rewrote the **address bar** to the SCC URL on every page via `history.replaceState` + a friendly→SCC manifest. That made `location.href` disagree with the built path and broke mkdocs-material's runtime search/sitemap fetch on direct page loads. The rewrite was retired in ADR [2026-05-31](decisions/2026-05-31-retire-scc-address-bar-rewrite.md); the friendly URL now stays in the bar.

### Goals

1. Stable `/v2/scc/{scc-code}/` URLs that resolve even if the Browse hierarchy changes
2. The friendly Browse page is the real, canonical, indexable location
3. A reader can grab the stable SCC link on demand

### Architecture (3 layers)

**Layer 1: Redirect stubs** (Go, `steel-etl/internal/site/permalinks.go`)

For every page with an `scc` frontmatter field, generates `docs/scc/{scc-code}/index.html` containing:
- `<meta http-equiv="refresh" content="0; url=...">` for JS-off redirect
- `<script>location.replace(...)</script>` for JS-on redirect (preserves hash + query)
- `<meta name="robots" content="noindex">` to keep stubs out of search
- `<link rel="canonical" href="...">` pointing to the friendly page
- All redirect URLs are relative, so stubs work under any deploy prefix

**Layer 2: Self-canonical** (Jinja2, `overrides/main.html`)

Overrides mkdocs-material's `{% block site_meta %}` to emit `<link rel="canonical">` pointing to the page's own friendly URL (`page.canonical_url`). The SCC URL is *not* used as canonical — it is a `noindex` redirect stub, so pointing canonical at it would be circular. Search engines index the friendly page.

**Layer 3: Copy affordance** (JavaScript, `docs/javascripts/scc-headerlinks.js`)

- `overrides/main.html` (`{% block extrahead %}`) emits `<meta name="scc-permalink">` (page-level SCC URL, on pages that have an `scc` field) and `<meta name="scc-base">` (`{site_url}scc/`, on every page).
- The pipeline (`steel-etl` `RenderSubtree`) marks each SCC-coded subheading with a `{data-scc="<code>"}` attr_list attribute on the rendered `<hN>`.
- `scc-headerlinks.js` reuses mkdocs-material's native heading-anchor (¶ `.headerlink`) icon as the copy affordance: the H1 ¶ copies the page `scc-permalink`; a heading with `data-scc` copies the stable `${scc-base}${code}/`; any other (structural) heading copies the friendly page URL + `#anchor`. Clicking copies to the clipboard **and** keeps the native jump-to-anchor. SCC-backed anchors get `.headerlink--scc` (accent styling). Uses `document$.subscribe` so it works under instant navigation. The address bar is **not** modified. See decision `2026-06-04-scc-heading-permalinks.md`.

### URL flow

```
Initial page load:
  browser requests /v2/Browse/class/fury/
  -> server returns friendly page HTML
  -> address bar stays /v2/Browse/class/fury/ (canonical, indexable)
  -> the heading ¶ icons copy stable SCC URLs (e.g. /v2/scc/mcdm.heroes.v1/class/fury/)

SCC permalink visit (shared link):
  browser requests /v2/scc/mcdm.heroes.v1/class/fury/
  -> server returns redirect stub HTML
  -> meta-refresh + JS redirects to /v2/Browse/class/fury/
```

## MkDocs Material Customization

### Theme overrides (`overrides/`)

- `main.html`: extends `base.html` -- owns `site_meta` block (self-canonical link), `extrahead` block (`scc-permalink` + `scc-base` metas, font preference restoration)
- `partials/content.html`: content area layout
- `partials/toc.html`: table of contents layout

Synced with mkdocs-material 9.7.6. If upgrading, re-check `site_meta` block shape.

### Client-side features (`docs/javascripts/`)

| File | Purpose |
|------|---------|
| `scc-headerlinks.js` | Reuses the heading ¶ icons to copy permalinks: stable SCC URL on `data-scc` headings, friendly `#anchor` otherwise |
| `ability-cards.js` | Ability card rendering enhancements |
| `browse-enhancements.js` | Browse section UX improvements |
| `keyboard-nav.js` | Keyboard navigation support |
| `settings-core.js` | Pure, DOM-free settings helpers (storage + width/scale normalization); unit-tested by `tests/settings-core.test.js`. Loaded before `settings-panel.js` |
| `settings-panel.js` | Live settings drawer: injects the header gear button + steel drawer, applies changes instantly (see "Live settings panel" below) |
| `reading-progress.js` | Reading progress indicator |
| `tablesort.js` | Sortable tables integration |

### Styling (`docs/stylesheets/`)

| File | Purpose |
|------|---------|
| `palette.css` | Color scheme (custom primary/accent) |
| `extra.css` | General style overrides |
| `custom_font.css` | Font customization |
| `tables.css` | Table styling |
| `mobile.css` | Mobile responsive tweaks |
| `print.css` | Print stylesheet |
| `steel-settings.css` | High-fantasy settings drawer: gear button, scrim, right-drawer → mobile bottom sheet, steel sliders/toggles (uses `--fx-*` tokens, so loads after `steel-redesign.css`) |

### Live settings panel

User display settings are delivered by a gear button injected into the Material
header (`docs/javascripts/settings-panel.js`), which opens a steel-styled drawer
(`docs/stylesheets/steel-settings.css`) — a right-side panel on desktop, a bottom
sheet on mobile. All settings write to `localStorage["mkdocs:fontPrefs"]` and apply
live via `<html>` attributes / CSS custom properties (fonts, page width, compact,
site theme, card style, a **text-size** slider that drives `--sc-content-scale`
multiplied into `.md-typeset` font-size in `extra.css`/`mobile.css`/compact, and a
**card-size** slider that drives `--sc-card-scale` applied as `zoom` on top-level
`.sc-ability`/`.sc-trait` cards in `extra.css`. The generated cards size everything in
rem/px so they don't follow `--sc-content-scale`; `zoom` scales the whole card
proportionally, and nested cards are reset to `zoom:1` so they inherit rather than
compound the parent's zoom).

Pure parsing/normalization logic lives in the DOM-free `docs/javascripts/settings-core.js`
and is unit-tested (`devbox run -- node --test tests/`). The anti-FOUC early-apply
script in `overrides/main.html` reads the same storage key to apply everything
(including `--sc-content-scale`) before paint. The standalone `/preferences/` page is
retired to a redirect note (still reachable for old bookmarks) and dropped from
`docs/.nav.yml`. Card-style changes still trigger a full reload (see workspace
`FOLLOWUPS.md`).

## MkDocs Plugins

- `search`: built-in search
- `roamlinks`: Obsidian-style `[[wikilink]]` support
- `awesome-nav`: `.nav.yml` based navigation ordering

## Key Features

- `navigation.instant` + `navigation.instant.preview`: SPA-like navigation
- `navigation.tabs` + `navigation.tabs.sticky`: top-level tab navigation (Browse, Bestiary, Read)
- `toc.permalink`: heading anchor links
- `material.extensions.preview`: link preview popups for Browse and Read sections
- Google Analytics (`G-PMF9SHHXNY`)
