---
repo: v2
type: tool
---

# Decision Log

Decisions are logged to preserve context that doesn't survive in memory. When a choice is made -- even a small one -- recording it here prevents relitigating and helps new contributors understand why the codebase looks the way it does.

## What to Log

Every decision, including:
- Library or tool choices
- Format or convention changes
- Rejected approaches
- Reverted experiments
- Architectural patterns adopted

## How to Create a Record

1. Copy the template structure from an existing record
2. Name the file: `YYYY-MM-DD-short-description.md`
3. Fill in Context, Options Considered, Decision, Consequences
4. Set status: `proposed`, `accepted`, `tried`, `superseded`, `deprecated`

## Status Definitions

| Status | Meaning |
|--------|---------|
| `proposed` | Under discussion, not yet implemented |
| `accepted` | Decided and implemented |
| `tried` | Implemented but didn't work out |
| `superseded` | Replaced by a newer decision |
| `deprecated` | No longer relevant |

## Index

| Date | Decision | Status |
|------|----------|--------|
| 2026-04-05 | [Tabbed navigation layout](2026-04-05-tabbed-navigation.md) | accepted |
| 2026-04-05 | [Search deduplication via exclusion](2026-04-05-search-dedup.md) | accepted |
| 2026-04-05 | [No mike versioning](2026-04-05-no-mike-versioning.md) | accepted |
| 2026-04-05 | [Index page grid transformation](2026-04-05-index-grid-transform.md) | accepted |
| 2026-04-05 | [Link placeholder system](2026-04-05-link-placeholders.md) | accepted |
