---
status: accepted
date: 2026-04-05
---

# No Mike Versioning

## Context

v1 used [mike](https://github.com/jimporter/mike) for multi-version documentation deployment. This added complexity and was a source of the duplicate search results problem (search indexed all versions).

## Options Considered

1. **Keep mike for multi-version support**
   - Pros: Can maintain old versions alongside new
   - Cons: Adds deployment complexity; search indexes all versions creating duplicates; the compendium tracks a single living rulebook, not versioned software

2. **Drop mike, use single-branch `mkdocs gh-deploy`**
   - Pros: Simpler deployment; no version confusion; eliminates a source of search duplicates
   - Cons: No way to view previous versions of the site (git history serves this need)

## Decision

Drop mike. Use `mkdocs gh-deploy --force` directly. The compendium tracks a single evolving rulebook, not software with breaking API changes. Previous versions can be reconstructed from git history if needed.

## Consequences

- **Positive:** Simpler CI pipeline. No version selector UI to confuse users. Cleaner search results.
- **Tradeoff:** No built-in way to view previous site versions. Acceptable because the Draw Steel rules are a single living document.
