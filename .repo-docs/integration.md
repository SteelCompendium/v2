---
repo: v2
type: tool
---

# Integration

## Dependency Map

```
data-gen (ETL pipeline)
    │
    ▼
data-md-linked (v3 branch)    ──►   v2 (this repo)   ──►   GitHub Pages
    │                                                         steelcompendium.io/v2
    ▼
data-rules-md, data-rules-json,
data-rules-yaml, data-bestiary-*,
data-md, data-md-dse
(other format repos)
```

## Upstream Dependencies

| Dependency | Repo | Branch | What it provides |
|-----------|------|--------|-----------------|
| Content markdown | [SteelCompendium/data-md-linked](https://github.com/SteelCompendium/data-md-linked) | v3 | All Draw Steel rules + bestiary as interlinked markdown files |
| MkDocs Material | PyPI | latest | Theme, search, navigation, instant loading |
| mkdocs-roamlinks-plugin | PyPI | latest | Wiki-link resolution |
| mkdocs-awesome-nav | PyPI | latest | `.nav.yml` navigation ordering |
| MathJax 3 | CDN (jsdelivr) | latest | Math rendering |
| Mermaid | CDN (unpkg) | latest | Diagram rendering |
| Tablesort | CDN (unpkg) | 5.3.0 | Client-side table sorting |

## Downstream Dependents

| Consumer | How |
|----------|-----|
| [steelcompendium.io](https://steelcompendium.io) | The v2 site is served at `/v2` path |
| Draw Steel community | Links to specific rules pages in Discord, Reddit, forums |

## API Surface

This repo exposes a static website. No programmatic API.

| Surface | Format | Location |
|---------|--------|----------|
| Web pages | HTML | https://steelcompendium.io/v2/* |
| Search index | JSON (MkDocs) | Built automatically by MkDocs search plugin |

## Data Contracts

### Upstream: data-md-linked

The `just update` pipeline expects:
- `Rules/` directory with subdirectories per category (Classes, Ancestries, Kits, etc.)
- `Rules/Chapters/` for chapter-ordered content
- `Rules/Draw Steel Heroes*.md` for single-page full book
- `Bestiary/` directory
- Link placeholders: `REL_PATH_PREFIXRules/...REL_PATH_SUFFIX`
- `_Index.md` files with markdown tables (parsed by `transform_indexes.py`)
- `%20`-encoded spaces in link URLs

Breaking changes in any of these conventions will break the update pipeline.

## Cross-Repo Workflows

### Content update flow

1. Draw Steel source content is parsed by [data-gen](https://github.com/SteelCompendium/data-gen)
2. data-gen outputs to multiple format repos including data-md-linked
3. A maintainer runs `just update` in this repo to pull and restructure
4. Push to `main` triggers CI which deploys to GitHub Pages

### Data version tracking

The `just update` recipe embeds the upstream commit SHA and date in `mkdocs.yml`'s copyright footer, creating a traceable link between the live site and the exact data version it was built from.
