---
status: accepted
date: 2026-04-05
---

# Link Placeholder System

## Context

Upstream markdown in `data-md-linked` uses link placeholders (`REL_PATH_PREFIXRules/Classes/TacticianREL_PATH_SUFFIX`) instead of hardcoded paths. This allows the same content to be restructured into different directory layouts by different consumers (this site, Obsidian plugins, other tools) by replacing the placeholders with the correct relative paths.

## Options Considered

1. **Hardcoded relative paths in upstream**
   - Pros: No placeholder replacement needed
   - Cons: Locks upstream to a single directory layout; every consumer would need a different upstream branch

2. **Placeholder system with consumer-side replacement**
   - Pros: Upstream stays layout-agnostic; each consumer replaces placeholders for their own structure
   - Cons: Adds complexity to the update pipeline; fragile sed/perl replacements

3. **MkDocs plugin for link rewriting**
   - Pros: Cleaner than sed; handles edge cases
   - Cons: No existing plugin does this; writing a custom one adds maintenance burden

## Decision

Option 2. The `justfile` replaces `REL_PATH_PREFIX` with computed relative paths (from each file's location to `docs/Browse/` or `docs/Read/`) and strips `REL_PATH_SUFFIX`. Additional post-processing decodes `%20` in URLs and appends `#anchor` fragments for hover preview support.

## Consequences

- **Positive:** Upstream content stays layout-agnostic. Multiple consumers can use the same data with different directory structures.
- **Tradeoff:** The replacement logic in `justfile` is a chain of sed, perl, and python commands that is hard to debug. Any upstream change to link format requires updating this chain.

## Outcome

The system works but has required multiple iterations to handle edge cases (trailing slashes, URL encoding, anchor fragments). The recent commits (`Fixing broken anchors`, `Changing urls to be correct`, `Removes trailing slash`) show ongoing refinement.
