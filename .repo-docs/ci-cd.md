---
repo: v2
type: tool
---

# CI/CD

## Pipeline Overview

| Platform | Config | Trigger |
|----------|--------|---------|
| GitHub Actions | `.github/workflows/ci.yml` | Push to `main` |

### Stages

| Stage | What it does | Duration |
|-------|-------------|----------|
| Checkout | Clone repo with full history (`fetch-depth: 0`) | ~10s |
| Setup Python | Install Python 3.x | ~15s |
| Cache | Cache `.cache/` for MkDocs build artifacts | ~5s |
| Install deps | `pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav` | ~30s |
| Deploy | `mkdocs gh-deploy --force` (builds + pushes to `gh-pages` branch) | ~60s |

## Build Process

Locally, the equivalent commands are:

```bash
pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav
mkdocs build        # Build only
mkdocs gh-deploy    # Build + deploy to GitHub Pages
```

## Build Artifacts

| Artifact | Location | Description |
|----------|----------|-------------|
| Static HTML site | `site/` (local) or `gh-pages` branch | Complete built website |

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production. Every push triggers deploy. |
| `gh-pages` | Auto-managed by `mkdocs gh-deploy`. Contains built HTML. Do not edit. |

No feature branches observed in the current workflow. Development happens directly on `main`.

## Release Process

There are no versioned releases or tags. Deployment is continuous: push to `main` = deploy to production.

### Rollback

Revert the commit on `main` and push. CI will redeploy the previous state.

## Environments

| Environment | URL | Deployment |
|-------------|-----|-----------|
| Production | https://steelcompendium.io/v2 | Auto on push to `main` |
| Local dev | http://127.0.0.1:8000/v2/ | `mkdocs serve` |

## Secrets and Configuration

| Name | Where | Purpose |
|------|-------|---------|
| `GITHUB_TOKEN` | GitHub Actions (automatic) | Push to `gh-pages` branch |
| Google Analytics `G-PMF9SHHXNY` | `mkdocs.yml` (public) | Site analytics tracking |

No additional secrets required.
