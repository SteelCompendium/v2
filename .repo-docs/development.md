---
repo: v2
doc: development
updated: 2026-05-23
---

# Development

## Prerequisites

- Python 3.x with pip
- Go toolchain (via devbox -- see workspace CLAUDE.md)
- `just` command runner (via devbox)

## Setup

```bash
# From workspace root, activate devbox
devbox run --

# Install Python dependencies
pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav-plugin

# Generate content and build docs/
cd v2
just update push=false

# Preview locally
just serve
```

## Development Workflow

### Editing presentation (CSS, JS, templates)

1. Run `just serve` for live preview
2. Edit files in `docs/javascripts/`, `docs/stylesheets/`, or `overrides/`
3. MkDocs auto-reloads on save

### Overriding generated content

1. Find the generated file under `docs/` (e.g., `docs/Browse/index.md`)
2. Copy it to the same path under `static_content/docs/`
3. Edit the copy -- `steel-etl site` copies `static_content/` last, so your version wins
4. Run `just update push=false` to verify

### Modifying site structure

Site structure is controlled by `site.yaml`, not by moving files. To change which content appears in which section, edit `site.yaml` and re-run `just update push=false`.

### Modifying the content pipeline

Content generation is handled by `steel-etl`. See `steel-etl/CLAUDE.md` for that workflow.

## Build Process

`just update` runs these steps:

1. `steel-etl gen` -- full ETL pipeline (parse, classify, output)
2. Embed steel-etl version into `mkdocs.yml` copyright
3. `steel-etl site` -- map output into MkDocs structure, generate SCC stubs
4. `transform_indexes.py` -- convert Browse index pages to grid card layouts
5. (Optional) commit and push

## Testing

No automated test suite for the site itself. Verification is manual:

- `mkdocs build` should exit 0 with no warnings
- Check SCC permalink rewriting works (navigate to a page, verify URL bar shows `/scc/...`)
- Check anchor links preserve SCC URL
- Check redirect stubs work (visit `/v2/scc/{any-code}/` directly)

The steel-etl side has Go tests covering SCC stub generation (`internal/site/permalinks_test.go`).

## Troubleshooting

See [troubleshooting.md](troubleshooting.md).
