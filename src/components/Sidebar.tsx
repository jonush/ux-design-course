"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nav = (
    <nav className="flex flex-col h-full">
      <Link
        href="/"
        className="block px-6 py-5 text-lg font-semibold tracking-tight border-b border-[var(--color-border)]"
        onClick={() => setOpen(false)}
      >
        UX Design Course
      </Link>

      <div className="flex-1 overflow-y-auto py-3">
        {curriculum.map((section) => (
          <div key={section.id} className="mb-1">
            <button
              onClick={() => toggle(section.id)}
              className="flex items-center justify-between w-full px-5 py-2.5 text-left text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-accent-light)] transition-colors"
            >
              <span className="flex items-center gap-2">
                {section.title}
                {section.foundational && (
                  <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold rounded bg-[var(--color-foundational-light)] text-[var(--color-foundational)]">
                    Core
                  </span>
                )}
              </span>
              <svg
                className={`w-3.5 h-3.5 text-[var(--color-text-secondary)] transition-transform ${
                  expanded[section.id] ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {expanded[section.id] && (
              <div className="ml-5 border-l border-[var(--color-border)]">
                {section.topics.map((topic) => {
                  const href = `/topic/${topic.slug}`;
                  const active = pathname === href;
                  return (
                    <Link
                      key={topic.id}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block pl-4 pr-5 py-1.5 text-sm transition-colors ${
                        active
                          ? "text-[var(--color-accent)] font-medium bg-[var(--color-accent-light)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-gray-50"
                      }`}
                    >
                      {topic.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-[var(--color-surface)] shadow-md border border-[var(--color-border)]"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-72 bg-[var(--color-surface)] border-r border-[var(--color-border)] transition-transform md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}
