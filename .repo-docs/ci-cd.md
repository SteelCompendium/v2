# CI/CD

## Pipeline Overview

| Stage | Trigger | What it does | Config file |
|-------|---------|-------------|-------------|
| Deploy | Push to `main` | Build MkDocs site and deploy to GitHub Pages | `.github/workflows/ci.yml` |

Platform: GitHub Actions

## Build Process

The CI pipeline mirrors what you'd run locally:

1. Checkout code (full history with `fetch-depth: 0`)
2. Set up Python 3.x
3. Restore build cache (`.cache/` directory)
4. Install pip dependencies: `mkdocs-material`, `mkdocs-roamlinks-plugin`, `mkdocs-awesome-nav`
5. Run `mkdocs gh-deploy --force` (builds and pushes to `gh-pages` branch)

Local equivalent:
```bash
pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav
mkdocs gh-deploy --force
```

## Build Artifacts

| Artifact | Destination | Description |
|----------|-------------|-------------|
| Static HTML site | `gh-pages` branch | Complete built site deployed by `mkdocs gh-deploy` |

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production branch. Pushes trigger deployment. |
| `gh-pages` | Auto-managed by `mkdocs gh-deploy`. Contains built site. Never edit directly. |

## Merge Strategy

No formal merge strategy enforced. Commits go directly to `main` for most changes. The typical workflow is:

1. Make changes locally
2. Run `mkdocs serve` to verify
3. Commit and push to `main`
4. CI deploys automatically

## Release Process

No versioned releases or tags. Deployment is continuous -- every push to `main` triggers a deploy.

### Content updates

Content updates follow a different path than code changes:

```bash
just update   # Pulls data, commits, pushes -> triggers CI deploy
```

### Rollback

To rollback a deployment:
1. `git revert <commit>` or `git reset` to the desired state
2. Push to `main`
3. CI redeploys

Alternatively, force-push an older build to `gh-pages`.

## Environments

| Environment | URL | How to deploy |
|-------------|-----|---------------|
| Local dev | http://127.0.0.1:8000 | `mkdocs serve` |
| Production | https://steelcompendium.io/v2 | Push to `main` (automatic) |

## Secrets and Configuration

| Name | Purpose |
|------|---------|
| `GITHUB_TOKEN` | Built-in GitHub Actions token. Used by `mkdocs gh-deploy` to push to `gh-pages`. No manual configuration needed. |
| Google Analytics ID | `G-PMF9SHHXNY` hardcoded in `mkdocs.yml`. Not a secret but tracked here for reference. |
