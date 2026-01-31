"use client";

function renderMarkdown(text: string): string {
  return text
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-gray-900 mt-8 mb-3">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="ml-4 pl-2 text-gray-700 leading-relaxed">$1</li>')
    // Ordered list items
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 pl-2 text-gray-700 leading-relaxed" value="$1">$2</li>')
    // Paragraphs: wrap non-tag lines
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol')) {
        // Wrap consecutive <li> in <ul>
        if (trimmed.includes('<li')) {
          return `<ul class="space-y-1 my-3 list-disc">${trimmed}</ul>`;
        }
        return trimmed;
      }
      return `<p class="text-gray-700 leading-relaxed mb-3">${trimmed.replace(/\n/g, '<br/>')}</p>`;
    })
    .join('\n');
}

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}
