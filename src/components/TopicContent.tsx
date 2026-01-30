"use client";

import { useState } from "react";
import { MarkdownContent } from "./MarkdownContent";

interface Props {
  overview: string;
  deepDive: string;
}

export function TopicContent({ overview, deepDive }: Props) {
  const [showDeepDive, setShowDeepDive] = useState(false);

  return (
    <div>
      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-[var(--color-text)]">
          Overview
        </h2>
        <div className="p-6 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
          <MarkdownContent text={overview} />
        </div>
      </section>

      {/* Deep Dive toggle */}
      <section>
        <button
          onClick={() => setShowDeepDive(!showDeepDive)}
          className="flex items-center gap-2 text-lg font-semibold mb-4 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          Deep Dive
          <svg
            className={`w-4 h-4 transition-transform ${showDeepDive ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {showDeepDive && (
          <div className="p-6 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
            <MarkdownContent text={deepDive} />
          </div>
        )}
      </section>
    </div>
  );
}
