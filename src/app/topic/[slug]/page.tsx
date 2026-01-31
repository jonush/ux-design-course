"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { getContent } from "@/data/content";
import { getQuiz } from "@/data/quizzes";
import { useProgress } from "@/hooks/useProgress";
import MarkdownContent from "@/components/MarkdownContent";
import Quiz from "@/components/Quiz";

function findBySlug(slug: string) {
  for (const section of curriculum) {
    const topic = section.topics.find((t) => t.slug === slug);
    if (topic) return { section, topic };
  }
  return null;
}

function getAdjacentTopics(slug: string) {
  const allTopics = curriculum.flatMap((s) => s.topics);
  const idx = allTopics.findIndex((t) => t.slug === slug);
  return {
    prev: idx > 0 ? allTopics[idx - 1] : null,
    next: idx < allTopics.length - 1 ? allTopics[idx + 1] : null,
  };
}

export default function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [tab, setTab] = useState<"overview" | "deepDive">("overview");
  const { markRead, markQuizPassed, isRead, isQuizPassed } = useProgress();

  const found = findBySlug(slug);
  const content = found ? getContent(found.topic.id) : undefined;
  const questions = found ? getQuiz(found.topic.id) : undefined;
  const { prev, next } = getAdjacentTopics(slug);

  // Reset tab and scroll to top on topic change
  useEffect(() => {
    setTab("overview");
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (found) markRead(found.topic.id);
  }, [found, markRead]);

  if (!found || !content) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Topic not found</h1>
        <Link href="/" className="text-indigo-600 hover:underline">Back to course</Link>
      </div>
    );
  }

  const { section, topic } = found;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Course</Link>
        <span>/</span>
        <span>{section.title}</span>
        <span>/</span>
        <span className="text-gray-600">{topic.title}</span>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          {section.foundational && (
            <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Foundational</span>
          )}
          {isRead(topic.id) && (
            <span className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">Read</span>
          )}
          {isQuizPassed(topic.id) && (
            <span className="text-xs font-medium bg-green-50 text-green-600 px-2 py-0.5 rounded-full">Quiz Passed</span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{topic.title}</h1>
        <p className="text-sm text-gray-400 mt-1">{section.title}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setTab("overview")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === "overview" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("deepDive")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === "deepDive" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          Deep Dive
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
        <MarkdownContent content={tab === "overview" ? content.overview : content.deepDive} />
      </div>

      {/* Quiz */}
      {questions && questions.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <Quiz
            key={topic.id}
            questions={questions}
            onPass={() => markQuizPassed(topic.id)}
            alreadyPassed={isQuizPassed(topic.id)}
          />
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-100">
        {prev ? (
          <Link href={`/topic/${prev.slug}`} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            ← {prev.title}
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/topic/${next.slug}`} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            {next.title} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
