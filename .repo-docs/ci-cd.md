---
repo: v2
doc: ci-cd
updated: 2026-05-23
---

# CI/CD

## Deployment

The site deploys to GitHub Pages at steelcompendium.io/v2.

### Manual deploy

From the workspace root:

```bash
just deploy-v2
```

Or from the v2 directory:

```bash
just update          # generate content, build docs, commit, push
```

### Build steps

1. `steel-etl gen` -- runs ETL pipeline
2. `steel-etl site` -- maps output to MkDocs structure + generates SCC stubs
3. `transform_indexes.py` -- grid card layout transform
4. `git add docs/ && git commit && git push` -- deploy

### Verification before deploy

- `mkdocs build` exits 0 with no warnings
- SCC stubs count matches expected (~1,419)
- Spot-check a few SCC redirect URLs manually
