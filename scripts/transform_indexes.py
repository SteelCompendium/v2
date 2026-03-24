#!/usr/bin/env python3
"""Transform _Index.md files from tables into grid card layouts."""

import re
import sys
from pathlib import Path
from collections import OrderedDict
from urllib.parse import unquote


def parse_table_rows(lines):
    """Parse markdown table rows into (link_text, url, category) tuples."""
    rows = []
    for line in lines:
        line = line.strip()
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.split("|")[1:-1]]
        if not cells or not cells[0]:
            continue
        if re.match(r"^[-:\s]+$", cells[0]):
            continue
        if cells[0] in ("File Name", "File Name   "):
            continue

        link_match = re.match(r"\[(.+?)\]\((.+?)\)", cells[0])
        if not link_match:
            continue

        name = link_match.group(1)
        url = link_match.group(2)
        category = cells[1].strip() if len(cells) > 1 else None

        rows.append((name, url, category))
    return rows


def infer_category_from_url(url):
    """Infer a grouping category from the URL path.

    For URLs like ../Crafting%20Perks/Area%20of%20Expertise,
    extract 'Crafting Perks' as the category.
    """
    decoded = unquote(url)
    # Strip leading ../
    cleaned = re.sub(r"^(\.\./)+", "", decoded)
    parts = cleaned.split("/")
    if len(parts) >= 2:
        return parts[0]
    return None


def render_simple_list(title, rows):
    """Render a flat list of links as a multi-column grid."""
    out = []
    out.append(f"# {title}")
    out.append("")
    out.append('<div class="browse-index" markdown>')
    out.append("")
    for name, url, _ in rows:
        out.append(f"- [{name}]({url})")
    out.append("")
    out.append("</div>")
    out.append("")
    return "\n".join(out)


ECHELON_LABELS = {
    "1st": "1st Echelon",
    "2nd": "2nd Echelon",
    "3rd": "3rd Echelon",
    "4th": "4th Echelon",
}


def expand_group_label(label):
    """Expand terse labels into readable headings."""
    return ECHELON_LABELS.get(label, label)


def render_grouped_list(title, rows, group_key="category"):
    """Render rows grouped by category with section headers."""
    groups = OrderedDict()
    for name, url, category in rows:
        if group_key == "url":
            cat = infer_category_from_url(url) or "Other"
        else:
            cat = category or "Other"
        groups.setdefault(cat, []).append((name, url))

    out = []
    out.append(f"# {title}")
    out.append("")
    for group_name, items in groups.items():
        out.append(f"## {expand_group_label(group_name)}")
        out.append("")
        out.append('<div class="browse-index" markdown>')
        out.append("")
        for name, url in items:
            out.append(f"- [{name}]({url})")
        out.append("")
        out.append("</div>")
        out.append("")
    return "\n".join(out)


def transform_index(filepath):
    """Transform a single _Index.md file."""
    path = Path(filepath)
    content = path.read_text()
    lines = content.split("\n")

    # Preserve front matter
    front_matter = []
    body_start = 0
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                front_matter = lines[: i + 1]
                body_start = i + 1
                break

    body_lines = lines[body_start:]

    # Extract title from first heading
    title = None
    for line in body_lines:
        m = re.match(r"^#\s+(.+)", line.strip())
        if m:
            title = m.group(1)
            break
    if not title:
        return  # Can't parse, skip

    rows = parse_table_rows(body_lines)
    if not rows:
        return  # No table found, skip

    # Check if any rows have explicit categories (second column)
    has_categories = any(r[2] for r in rows)

    if has_categories:
        new_body = render_grouped_list(title, rows, group_key="category")
    else:
        # Check if URLs suggest grouping (e.g., Perks has Crafting Perks/... in URLs)
        url_categories = [infer_category_from_url(r[1]) for r in rows]
        distinct_cats = set(c for c in url_categories if c)
        if len(distinct_cats) > 1:
            new_body = render_grouped_list(title, rows, group_key="url")
        else:
            new_body = render_simple_list(title, rows)

    new_content = "\n".join(front_matter) + "\n\n" + new_body if front_matter else new_body
    path.write_text(new_content)


def main():
    if len(sys.argv) < 2:
        print("Usage: transform_indexes.py <browse_dir>", file=sys.stderr)
        sys.exit(1)

    browse_dir = Path(sys.argv[1])
    for index_file in browse_dir.rglob("_Index.md"):
        transform_index(index_file)

    for index_file in browse_dir.rglob("Index.md"):
        if index_file.name == "Index.md":
            transform_index(index_file)


if __name__ == "__main__":
    main()
