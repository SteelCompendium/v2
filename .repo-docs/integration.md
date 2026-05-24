---
repo: v2
doc: integration
updated: 2026-05-23
---

# Integration

## Upstream Dependencies

### steel-etl

The `site` command in steel-etl generates this repo's `docs/` content. The interface is `site.yaml`:

- **Input**: `source_dir` points to ETL md-linked output
- **Output**: `docs_dir` points to this repo's `docs/` directory
- **Static overrides**: `static_content` points to `static_content/docs/`

Changes to steel-etl's site builder affect this repo's generated content. Key files:
- `steel-etl/internal/site/build.go` -- site structure generation
- `steel-etl/internal/site/permalinks.go` -- SCC redirect stub generation
- `steel-etl/internal/site/config.go` -- config types

### data-rules

Source markdown lives in `data/data-rules/en/md-linked/`. Changes to source content flow through steel-etl into this repo.

## Downstream

### GitHub Pages

The `docs/` directory (after `mkdocs build` produces `site/`) is deployed to GitHub Pages. The site is served under the `/v2/` path prefix.

### SCC API

SCC codes used in this site's permalinks are the same codes used in the data API. The registry is frozen (1,432 codes in `steel-etl/classification.json`).
