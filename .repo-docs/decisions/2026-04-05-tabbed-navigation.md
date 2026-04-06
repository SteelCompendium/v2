---
status: accepted
date: 2026-04-05
---

# Tabbed Navigation Layout

## Context

v1 presented all content in a single navigation tree. Users had different needs: quick lookup of a specific ability vs. reading rules in chapter order vs. Ctrl+F across the entire book. A single structure couldn't optimize for all three.

## Options Considered

1. **Single navigation tree (v1 status quo)**
   - Pros: Simple, one way to navigate
   - Cons: No way to optimize for different reading styles; search returned duplicates from chapter and modular pages

2. **Tabbed layout with Browse / Read / Full Book**
   - Pros: Each tab optimized for its use case; can exclude tabs from search; clean URLs per item in Browse
   - Cons: More complex build pipeline; content duplicated across tabs

3. **Search-only with no navigation**
   - Pros: Minimal UI
   - Cons: Unusable for browsing; requires knowing exact terms

## Decision

Tabbed layout (option 2). Three tabs for rules content plus a Bestiary tab. MkDocs Material's `navigation.tabs` feature handles the UI. The `just update` pipeline restructures upstream content into the tab directories.

## Consequences

- **Positive:** Users can choose their preferred reading style. Browse pages have clean, shareable URLs.
- **Tradeoff:** Content exists in three copies on disk (Browse, Read, Full Book). The update pipeline is more complex because it must split upstream content into three directory structures.
- **Tradeoff:** Full Book tab is slow to load due to the entire rulebook on one page.
