import { curriculum } from "@/data/curriculum";
import { getContent } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopicContent } from "@/components/TopicContent";

function findTopicBySlug(slug: string) {
  for (const section of curriculum) {
    const topic = section.topics.find((t) => t.slug === slug);
    if (topic) {
      const idx = section.topics.indexOf(topic);
      const prev = idx > 0 ? section.topics[idx - 1] : null;
      const next = idx < section.topics.length - 1 ? section.topics[idx + 1] : null;
      return { section, topic, prev, next };
    }
  }
  return null;
}

export function generateStaticParams() {
  return curriculum.flatMap((s) =>
    s.topics.map((t) => ({ slug: t.slug }))
  );
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = findTopicBySlug(slug);
  if (!result) notFound();

  const { section, topic, prev, next } = result;
  const content = getContent(topic.id);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to course
      </Link>

      <div className="mb-2 text-sm text-[var(--color-text-secondary)]">
        {section.title}
        {section.foundational && (
          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold rounded bg-[var(--color-foundational-light)] text-[var(--color-foundational)]">
            Core
          </span>
        )}
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-8">
        {topic.title}
      </h1>

      {content ? (
        <TopicContent overview={content.overview} deepDive={content.deepDive} />
      ) : (
        <div className="p-8 rounded-lg border border-dashed border-[var(--color-border)] text-center text-[var(--color-text-secondary)]">
          Content coming soon.
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-[var(--color-border)]">
        {prev ? (
          <Link
            href={`/topic/${prev.slug}`}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/topic/${next.slug}`}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
