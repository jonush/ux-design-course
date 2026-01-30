import Link from "next/link";
import { curriculum, getTotalTopics } from "@/data/curriculum";

export default function Home() {
  const total = getTotalTopics();
  const foundationalCount = curriculum
    .filter((s) => s.foundational)
    .reduce((acc, s) => acc + s.topics.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          UX Design Course
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          An interactive course covering UX design fundamentals — from human
          decision making to prototyping and measuring impact. Jump into any
          topic that interests you.
        </p>
        <div className="flex gap-6 mt-5 text-sm text-[var(--color-text-secondary)]">
          <span>{total} topics</span>
          <span>{curriculum.length} sections</span>
          <span className="text-[var(--color-foundational)]">
            {foundationalCount} core topics
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {curriculum.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.foundational && (
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-[var(--color-foundational-light)] text-[var(--color-foundational)]">
                  Core
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {section.topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topic/${topic.slug}`}
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-sm transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[var(--color-accent)] transition-colors flex-shrink-0" />
                  <span className="text-sm">{topic.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
