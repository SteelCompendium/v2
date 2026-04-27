# v2 MkDocs site build using steel-etl pipeline
#
# The steel-etl tool generates all content from annotated markdown.
# The site command maps that output into the MkDocs directory structure.

etl_dir := "../steel-etl"

# Generate content and build the MkDocs docs directory.
# Set push="true" to commit and push updates (default).
update push="true":
    #!/usr/bin/env bash
    set -euo pipefail
    v2_dir="$(pwd)"

    # 1. Run steel-etl pipeline to generate all output formats
    echo >&2 "[INFO] Running steel-etl gen..."
    cd "{{etl_dir}}"
    go run ./cmd/steel-etl gen --config pipeline.yaml
    etl_sha="$(git rev-parse --short HEAD)"
    etl_date="$(date +%Y-%m-%d)"
    cd "$v2_dir"

    # 2. Embed version info in mkdocs.yml
    data_version="steel-etl <a href=\"https://github.com/SteelCompendium/steel-etl/commit/${etl_sha}\">${etl_sha}</a> (${etl_date})"
    sed -i "s|DATA_VERSION|${data_version}|g" mkdocs.yml

    # 3. Build MkDocs docs directory from steel-etl output
    echo >&2 "[INFO] Running steel-etl site..."
    cd "{{etl_dir}}"
    go run ./cmd/steel-etl site --config "$v2_dir/site.yaml"
    cd "$v2_dir"

    # 4. Transform index pages into grid layouts (presentation concern)
    if [ -d "docs/Browse" ] && [ -f "scripts/transform_indexes.py" ]; then
        echo >&2 "[INFO] Transforming index pages..."
        python3 scripts/transform_indexes.py docs/Browse
    fi

    # 5. Commit and push if requested
    if [ "{{push}}" == "true" ]; then
        echo >&2 "[INFO] Committing and pushing updates..."
        git add docs/*
        git commit -am "Updates from steel-etl ($etl_sha)" || true
        git push
    fi

    echo >&2 "[INFO] Done!"

# Clean generated content from docs/ (preserves static assets)
clean_docs:
    #!/usr/bin/env bash
    set -euo pipefail
    # Reset data version placeholder in mkdocs.yml for idempotent re-runs
    sed -i -E 's|Data: steel-etl <a[^<]*</a> \([0-9]{4}-[0-9]{2}-[0-9]{2}\)|Data: DATA_VERSION|g' mkdocs.yml
    cd docs
    find . -maxdepth 1 -mindepth 1 \
      ! -name 'javascripts' \
      ! -name 'stylesheets' \
      ! -name 'Media' \
      ! -name 'index.md' \
      ! -name 'preferences.md' \
      ! -name '.nav.yml' \
      -exec rm -rf -- {} +

# Preview the site locally
serve:
    mkdocs serve

# Build the site for deployment
build:
    mkdocs build
