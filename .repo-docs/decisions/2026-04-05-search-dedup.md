---
status: accepted
date: 2026-04-05
---

# Search Deduplication via Exclusion

## Context

With three tabs containing overlapping content (Browse, Read, Full Book), MkDocs search would index every page, returning 2-3 results for the same content. This was a major UX problem in v1.

## Options Considered

1. **Accept duplicates**
   - Pros: No extra work
   - Cons: Confusing search results; users don't know which result to click

2. **Exclude Read and Full Book from search index**
   - Pros: Clean results; Browse pages are the canonical reference
   - Cons: Users can't search within Read or Full Book tabs (must use browser Ctrl+F)

3. **Custom search plugin with deduplication**
   - Pros: All pages searchable, results deduplicated
   - Cons: Complex to implement; no existing MkDocs plugin for this

## Decision

Option 2. Inject `search: exclude: true` YAML front matter into all Read and Full Book pages during `just update`. Only Browse and Bestiary pages appear in search results.

## Consequences

- **Positive:** Search results are clean with no duplicates.
- **Tradeoff:** Read and Full Book pages are invisible to MkDocs search. Users wanting to search within those sections must use browser Ctrl+F.
