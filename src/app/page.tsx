"use client";
import Link from "next/link";
import { curriculum, getTotalTopics } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const { progress, isRead, isQuizPassed, resetProgress } = useProgress();
  const total = getTotalTopics();
  const readCount = progress.readTopics.length;
  const passedCount = progress.passedQuizzes.length;
  const pctRead = total > 0 ? Math.round((readCount / total) * 100) : 0;
  const pctPassed = total > 0 ? Math.round((passedCount / total) * 100) : 0;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">UX Design Course</h1>
        <p className="mt-2 text-gray-500 text-lg">Master behavior design, UX strategy, and product thinking.</p>
      </div>

      {/* Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Topics Read</span>
            <span className="text-sm font-semibold text-indigo-600">{readCount}/{total}</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${pctRead}%` }} />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Quizzes Passed</span>
            <span className="text-sm font-semibold text-green-600">{passedCount}/{total}</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full transition-all duration-500" style={{ width: `${pctPassed}%` }} />
          </div>
        </div>
      </div>

      {/* Getting Started */}
      {readCount === 0 && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center">
          <p className="text-indigo-900 font-medium text-lg mb-1">Welcome! 👋</p>
          <p className="text-indigo-700 text-sm">Pick any topic below to start learning. Your progress is saved automatically in your browser.</p>
        </div>
      )}

      {/* Sections */}
      {curriculum.map((section) => {
        const sectionRead = section.topics.filter((t) => isRead(t.id)).length;
        const sectionPassed = section.topics.filter((t) => isQuizPassed(t.id)).length;
        const sectionTotal = section.topics.length;

        return (
          <div key={section.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              {section.foundational && (
                <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Foundational</span>
              )}
              <span className="text-xs text-gray-400 ml-auto">{sectionRead}/{sectionTotal} read · {sectionPassed}/{sectionTotal} passed</span>
            </div>
            <div className="grid gap-2">
              {section.topics.map((topic) => {
                const read = isRead(topic.id);
                const passed = isQuizPassed(topic.id);
                return (
                  <Link
                    key={topic.id}
                    href={`/topic/${topic.slug}`}
                    className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all group"
                  >
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${passed ? "bg-green-500 border-green-500 text-white" : read ? "bg-indigo-100 border-indigo-400 text-indigo-600" : "border-gray-300"}`}>
                      {passed ? "✓" : read ? "•" : ""}
                    </span>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{topic.title}</span>
                    <svg className="w-4 h-4 text-gray-300 ml-auto group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Reset */}
      {readCount > 0 && (
        <div className="text-center pt-4 border-t border-gray-100">
          <button onClick={resetProgress} className="text-sm text-gray-400 hover:text-red-500 transition-colors">
            Reset all progress
          </button>
        </div>
      )}
    </div>
  );
}
