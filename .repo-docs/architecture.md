# Architecture

## System Overview

```
┌─────────────────────┐
│  data-md-linked      │  Upstream: structured markdown with
│  (GitHub, branch v3) │  REL_PATH_PREFIX/SUFFIX link placeholders
└─────────┬───────────┘
          │ git clone (just update)
          ▼
┌─────────────────────┐
│  justfile pipeline   │  Restructure → fix links → inject
│  (bash + python)     │  search exclusion → transform indexes
└─────────┬───────────┘
          │ writes to docs/
          ▼
┌─────────────────────┐
│  docs/               │  MkDocs source: Browse, Read,
│  + overrides/        │  Full Book, Bestiary, JS, CSS
│  + static_content/   │  Static overrides applied last
└─────────┬───────────┘
          │ mkdocs build / gh-deploy
          ▼
┌─────────────────────┐
│  GitHub Pages        │  steelcompendium.io/v2
│  (gh-pages branch)   │  Served as static HTML
└─────────────────────┘
```

## Components

| Component | Location | Responsibility | Depends on |
|-----------|----------|---------------|------------|
| Build pipeline | `justfile` | Clone data, restructure into tabs, fix links, inject search exclusion, apply static overrides | `data-md-linked` repo, `scripts/transform_indexes.py` |
| Index transformer | `scripts/transform_indexes.py` | Convert `_Index.md` tables into grid card layouts | Python 3 stdlib |
| MkDocs config | `mkdocs.yml` | Site metadata, theme, plugins, extensions, CSS/JS includes | mkdocs-material, mkdocs-roamlinks-plugin, mkdocs-awesome-nav |
| Template overrides | `overrides/` | Font preference injection (`main.html`), content/TOC layout tweaks | MkDocs Material theme |
| Custom JavaScript | `docs/javascripts/` | Ability card styling, keyboard nav, reading progress, font preferences, sortable tables, browse enhancements | Browser APIs, tablesort library |
| Custom CSS | `docs/stylesheets/` | Color palette, typography, table styles, mobile layout, print styles | MkDocs Material CSS variables |
| Static content | `static_content/docs/` | Hand-authored pages that override generated content (Browse landing, Bestiary README) | Copied after data pull |
| CI pipeline | `.github/workflows/ci.yml` | Build and deploy to GitHub Pages on push to main | GitHub Actions, Python, pip |

## Data Flow

1. `just update` clones `data-md-linked` (branch `v3`) into a temp directory
2. Extracts commit SHA and date, embeds version string into `mkdocs.yml` copyright
3. Copies content into staging, strips repo metadata (LICENSE, README, .github)
4. Restructures into tabbed layout:
   - `Rules/*` (except Chapters) -> `docs/Browse/`
   - `Rules/Chapters/*` -> `docs/Read/`
   - `Rules/Draw Steel Heroes*.md` -> `docs/Full Book/`
   - `Bestiary/` -> `docs/Bestiary/`
5. Fixes links: rewrites `REL_PATH_PREFIX`/`REL_PATH_SUFFIX` placeholders to relative paths, decodes `%20` in URLs, appends `#anchor` fragments for hover previews
6. Injects `search: exclude: true` front matter into Read and Full Book pages
7. Creates `.nav.yml` files for tab titles and sort order
8. Runs `transform_indexes.py` to convert `_Index.md` tables into card grids
9. Copies `static_content/docs/` over generated docs (overrides take precedence)
10. Optionally commits and pushes

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Search-excluded Read/Full Book | Prevents duplicate search results since Browse and Read contain the same content in different structures |
| Static content overrides | Allows hand-crafted landing pages without modifying the upstream data pipeline |
| Relative path link rewriting | Enables content to work in both the data repo structure and the restructured MkDocs layout |
| No mike versioning | Simplifies deployment; single branch (`gh-pages`) via `mkdocs gh-deploy --force` |
| Grid card index pages | Improves Browse UX over raw markdown tables; Python script transforms at build time |

## Dependencies

| Dependency | Version | Why |
|------------|---------|-----|
| mkdocs-material | latest (pip) | Feature-rich MkDocs theme with dark mode, tabs, search, instant preview |
| mkdocs-roamlinks-plugin | latest (pip) | Resolves wiki-style `[[links]]` in upstream markdown |
| mkdocs-awesome-nav | latest (pip) | Auto-generates navigation from `.nav.yml` files and directory structure |
| tablesort | 5.3.0 (CDN) | Client-side sortable tables |
| MathJax | 3.x (CDN) | Renders mathematical notation (used in some rules) |
| Mermaid | latest (CDN) | Renders diagrams in markdown |
| Python 3 | latest (devbox) | MkDocs runtime and build scripts |
| GitHub CLI | latest (devbox) | Used in workspace-level operations |

## Extension Points

| What | Where | How |
|------|-------|-----|
| New JS enhancement | `docs/javascripts/` | Create new `.js` file, add to `extra_javascript` in `mkdocs.yml` |
| New CSS customization | `docs/stylesheets/` | Create new `.css` file, add to `extra_css` in `mkdocs.yml` |
| Override a generated page | `static_content/docs/` | Place file at same relative path; it replaces the generated version after `just update` |
| New MkDocs plugin | `mkdocs.yml` | Add to `plugins` list, install via pip in `devbox.json` init hook |
| Template customization | `overrides/` | Follow MkDocs Material custom overrides convention |

## Constraints

- **No direct content editing.** The `docs/Browse/`, `docs/Read/`, `docs/Full Book/`, and `docs/Bestiary/` directories are wiped and regenerated by `just update`. Use `static_content/` for overrides.
- **Link format coupling.** The justfile's sed/perl transformations assume specific placeholder formats from `data-md-linked`. Changes upstream require corresponding justfile updates.
- **Single Python environment.** All pip dependencies share one venv managed by devbox.
