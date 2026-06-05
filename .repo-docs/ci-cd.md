---
repo: v2
doc: ci-cd
updated: 2026-06-05
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

- `mkdocs build` exits 0 (it currently emits one pre-existing link warning for
  `Read/heroes/treasures.md` → `…/swashbuckler/fancy-footwork.md`; not a regression)
- SCC stubs count matches expected (~1,419)
- Spot-check a few SCC redirect URLs manually

## GitHub Actions deploy (`.github/workflows/ci.yml`)

Every push to `main` triggers the `ci` workflow, which runs `mkdocs gh-deploy --force` and
publishes to the `gh-pages` branch. Note the split of responsibilities: the `justfile`
`update` recipe generates and commits `docs/` to `main`; the **workflow only builds and
deploys** the already-committed `docs/` — it does not run `steel-etl`.

### Build performance (~14 min as of 2026-06-05)

Measured step breakdown of a typical run (`gh run view <id> --json jobs`):

- **Checkout (`fetch-depth: 0`): ~248s** — fetches the full ~800 MB git history.
- **`mkdocs gh-deploy`: ~557s** — almost entirely the `mkdocs build` (single-threaded,
  CPU-bound; ~614s locally for 3,097 pages). Push is small.

Profiling found two bottlenecks: (1) Material re-rendering the **whole 3,097-item nav tree
on every page** (~half the build; fixable with **`navigation.prune`**, tested 614s→222s),
and (2) the `roamlinks` plugin doing a full `os.walk` per bare-filename link (~15%).

**Full investigation, numbers, and recommended fixes (none applied yet):** see
[decisions/2026-06-05-ci-deploy-build-time-perf.md](decisions/2026-06-05-ci-deploy-build-time-perf.md)
and workspace `ROADMAP.md` item 6.
