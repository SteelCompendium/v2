update push="true":
    #!/usr/bin/env bash
    set -euo pipefail

    just clean_docs

    dir="$(mktemp -d)"
    echo >&2 "[INFO] Grabbing compendium markdown..."
    git clone --branch v3 git@github.com:SteelCompendium/data-md-linked.git "$dir"
    (
        v2_dir="$(pwd)"
        cd "$dir"

        # Extract data-md-linked version info and embed in mkdocs.yml copyright footer
        data_sha="$(git rev-parse --short HEAD)"
        data_date="$(git log -1 --format='%cs')"
        data_version="<a href=\"https://github.com/SteelCompendium/data-md-linked/commit/${data_sha}\">${data_sha}</a> (${data_date})"
        echo >&2 "[INFO] data-md-linked version: ${data_sha} (${data_date})"
        sed -i "s|DATA_VERSION|${data_version}|g" "${v2_dir}/mkdocs.yml"

        echo >&2 "[INFO] Copying compendium markdown (data-md)..."

        # Copy all content into a temp staging area first
        staging="$(mktemp -d)"
        cp -R * "$staging"

        # Clean out repo metadata from staging
        rm -rf "$staging/.github" "$staging/LICENSE" "$staging/README.md" || true

        # --- Restructure into tabbed layout ---

        # Browse: modular pages (everything under Rules/ except Chapters and full book files)
        echo >&2 "[INFO] Setting up Browse section..."
        mkdir -p "${v2_dir}/docs/Browse"
        if [ -d "$staging/Rules" ]; then
            # Copy all Rules subdirs except Chapters into Browse
            for subdir in "$staging/Rules"/*/; do
                dirname="$(basename "$subdir")"
                if [ "$dirname" != "Chapters" ]; then
                    cp -R "$subdir" "${v2_dir}/docs/Browse/$dirname"
                fi
            done
        fi

        # Read: chapters in book order
        echo >&2 "[INFO] Setting up Read section..."
        mkdir -p "${v2_dir}/docs/Read"
        if [ -d "$staging/Rules/Chapters" ]; then
            cp -R "$staging/Rules/Chapters"/* "${v2_dir}/docs/Read/"
        fi

        # Full Book: single-page versions
        echo >&2 "[INFO] Setting up Full Book section..."
        mkdir -p "${v2_dir}/docs/Full Book"
        for f in "$staging/Rules/Draw Steel Heroes"*.md; do
            [ -f "$f" ] && cp "$f" "${v2_dir}/docs/Full Book/"
        done

        # Bestiary
        if [ -d "$staging/Bestiary" ]; then
            cp -R "$staging/Bestiary" "${v2_dir}/docs/Bestiary"
        fi

        # Adventures (skipped -- no adventures planned for release)

        # --- Fix index links ---
        # Index files have bare sibling links like (Tactician). Append .md so MkDocs
        # resolves them source-relative (no ../ hack needed for use_directory_urls).
        echo >&2 "[INFO] Fixing index links..."
        find "${v2_dir}/docs" -type f \( -name '_Index.md' -o -name 'Index.md' \) -print0 |
        while IFS= read -r -d '' f; do
            sed -i -E 's|\]\(([^/)][^)]*)\)|](\1.md)|g' "$f"
            sed -i -E 's|File Name|File Name   |g' "$f"
            sed -i -E 's/^\| (\-+)/| \1---/g' "$f"
        done

        # replace placeholder text with actuals
        echo >&2 "[INFO] Updating markdown links for mkdocs"
        find "${v2_dir}/docs" -type f -name '*.md' -print0 |
        while IFS= read -r -d '' f; do
            file_dir="$(dirname "$f")"
            rel_path="$(python3 -c "import os.path; print(os.path.relpath('${v2_dir}/docs', '${file_dir}'))")"
            sed -i -E "s|REL_PATH_PREFIXRules/Chapters|${rel_path}/Chapters|g" "$f"
            sed -i -E "s|REL_PATH_PREFIXRules|${rel_path}/Browse|g" "$f"
            sed -i -E 's|REL_PATH_SUFFIX|.md|g' "$f"
            # Decode %20 in markdown links so MkDocs matches against source file paths
            sed -i -E 's|%20| |g' "$f"
            # Append #anchor fragments to internal .md links for instant preview support
            perl -i -pe 's{\]\(([^)#]*/)?([^/)#]+)\.md\)}{
                my $pre = $1 // "";
                my $name = $2;
                my $anchor = lc $name;
                $anchor =~ s/[^a-z0-9\\s-]//g;
                $anchor =~ s/[\\s]+/-/g;
                $anchor =~ s/-+/-/g;
                $anchor =~ s/^-|-$//g;
                "](" . $pre . $name . ".md#" . $anchor . ")"
            }ge' "$f"
        done

    #        # Replace link placeholders with relative paths (works for both mkdocs serve and build).
    #        # Links in data-md-linked resolve to paths like REL_PATH_PREFIXRules/Classes/TalentREL_PATH_SUFFIX.
    #        # The justfile restructures Rules/* -> docs/Browse/*, so strip "Rules/" and compute
    #        # a relative path from each file's directory to docs/Browse/.
    #        # Chapter links (Rules/Chapters/*) map to docs/Read/*.
    #        echo >&2 "[INFO] Updating markdown links for mkdocs"
    #        browse_dir="${v2_dir}/docs/Browse"
    #        read_dir="${v2_dir}/docs/Read"
    #        find "${v2_dir}/docs" -type f -name '*.md' -print0 |
    #        while IFS= read -r -d '' f; do
    #            file_dir="$(dirname "$f")"
    #            rel_browse="$(python3 -c "import os.path; print(os.path.relpath('${browse_dir}', '${file_dir}'))")"
    #            rel_read="$(python3 -c "import os.path; print(os.path.relpath('${read_dir}', '${file_dir}'))")"
    #            # Chapter links: Rules/Chapters/* -> Read/*
    #            sed -i -E "s|REL_PATH_PREFIXRules/Chapters/|${rel_read}/|g" "$f"
    #            # Everything else under Rules/ -> Browse/
    #            sed -i -E "s|REL_PATH_PREFIXRules/|${rel_browse}/|g" "$f"
    #            sed -i -E 's|REL_PATH_SUFFIX||g' "$f"
    #        done

        # --- Inject search exclusion front matter ---
        echo >&2 "[INFO] Injecting search exclusion for Read and Full Book..."

        for section in "Read" "Full Book"; do
            find "${v2_dir}/docs/$section" -type f -name '*.md' -print0 |
            while IFS= read -r -d '' f; do
                if head -1 "$f" | grep -q '^---$'; then
                    # File already has front matter -- inject search exclude after opening ---
                    sed -i '/^---$/a\search:\n  exclude: true' "$f"
                    # Only patch the first front matter block (sed already does first match)
                else
                    # No front matter -- prepend it
                    tmp="$(mktemp)"
                    printf '%s\n' '---' 'search:' '  exclude: true' '---' '' | cat - "$f" > "$tmp"
                    mv "$tmp" "$f"
                fi
            done
        done
        echo >&2 "[INFO] Search exclusion applied."

        # --- Add .nav.yml for tab title overrides and sorting ---
        printf '%s\n' 'nav:' '  - index.md' '  - glob: "*"' '    sort:' '      type: natural' '      by: title' > "${v2_dir}/docs/Browse/.nav.yml"
        printf '%s\n' 'title: Rulebook Chapters' 'sort:' '  type: natural' '  by: title' > "${v2_dir}/docs/Read/.nav.yml"
        printf '%s\n' 'title: Full Rulebook' > "${v2_dir}/docs/Full Book/.nav.yml"

        # --- Transform index pages into grid layouts ---
        echo >&2 "[INFO] Transforming index pages..."
        python3 "${v2_dir}/scripts/transform_indexes.py" "${v2_dir}/docs/Browse"

        # Move static content overrides over (these take precedence)
        cp -R "${v2_dir}/static_content/docs" "${v2_dir}"

        sha="$(git rev-parse --short HEAD)"
        if [ "{{push}}" == "true" ]; then
            echo >&2 "[INFO] Committing and pushing updates..."
            cd "$v2_dir"
            git add docs/*
            git commit -am "Updates from compendium ($sha)"
            git push
        fi
    )
    echo >&2 "[INFO] Done!"

clean_docs:
    #!/usr/bin/env bash
    set -euo pipefail
    # Reset data version placeholder in mkdocs.yml for idempotent re-runs
    sed -i -E 's|Data: <a[^<]*</a> \([0-9]{4}-[0-9]{2}-[0-9]{2}\)|Data: DATA_VERSION|g' mkdocs.yml
    cd docs
    find . -maxdepth 1 -mindepth 1 \
      ! -name 'javascripts' \
      ! -name 'stylesheets' \
      ! -name 'Media' \
      ! -name 'index.md' \
      ! -name 'preferences.md' \
      ! -name '.nav.yml' \
      -exec rm -rf -- {} +
