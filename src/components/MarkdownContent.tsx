"use client";

/**
 * Simple markdown-to-HTML renderer for lesson content.
 * Handles: ### headers, **bold**, - unordered lists, 1. ordered lists, paragraphs.
 * No external dependency needed.
 */
export function MarkdownContent({ text }: { text: string }) {
  const html = renderMarkdown(text);
  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Close lists if line doesn't continue them
    if (inUl && !line.match(/^- /)) {
      out.push("</ul>");
      inUl = false;
    }
    if (inOl && !line.match(/^\d+\.\s/)) {
      out.push("</ol>");
      inOl = false;
    }

    // Headers
    if (line.startsWith("### ")) {
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }

    // Unordered list
    if (line.match(/^- /)) {
      if (!inUl) {
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^(\d+)\.\s(.+)/);
    if (olMatch) {
      if (!inOl) {
        out.push("<ol>");
        inOl = true;
      }
      out.push(`<li>${inline(olMatch[2])}</li>`);
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      continue;
    }

    // Paragraph
    out.push(`<p>${inline(line)}</p>`);
  }

  if (inUl) out.push("</ul>");
  if (inOl) out.push("</ol>");

  return out.join("\n");
}

function inline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Italic
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // Inline code
  text = text.replace(/`(.+?)`/g, "<code>$1</code>");
  // Links
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Em dash
  text = text.replace(/ — /g, " — ");
  return text;
}
