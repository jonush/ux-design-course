"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { getContent } from "@/data/content";
import { getFreeResponseQuestions } from "@/data/freeResponseQuizzes";
import { useProgress } from "@/hooks/useProgress";
import MarkdownContent from "@/components/MarkdownContent";
import FreeResponseQuiz from "@/components/FreeResponseQuiz";
import DeepDiveChat from "@/components/DeepDiveChat";

interface GradeResult {
  score: number;
  feedback: string;
}

interface GradingResult {
  grades: GradeResult[];
  overallScore: number;
  maxScore: number;
  passed: boolean;
  gaps: string[];
}

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
  const [gradingResult, setGradingResult] = useState<GradingResult | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const { markRead, markQuizPassed, isRead, isQuizPassed } = useProgress();

  const found = findBySlug(slug);
  const content = found ? getContent(found.topic.id) : undefined;
  const questions = found ? getFreeResponseQuestions(found.topic.id) : undefined;
  const { prev, next } = getAdjacentTopics(slug);

  // Reset state and scroll to top on topic change
  useEffect(() => {
    setGradingResult(null);
    setShowQuiz(false);
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
  const hasQuiz = questions && questions.length > 0;

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

      {/* Overview Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
        <MarkdownContent content={content.overview} />
      </div>

      {/* Quiz Section */}
      {hasQuiz && (
        <div className="space-y-6">
          {!showQuiz && !isQuizPassed(topic.id) && !gradingResult && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Test Your Understanding</h3>
              <p className="text-indigo-700 mb-4">Ready to apply what you've learned? Take the quiz to unlock personalized deep dive content.</p>
              <button
                onClick={() => setShowQuiz(true)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Start Quiz
              </button>
            </div>
          )}

          {(showQuiz || isQuizPassed(topic.id) || gradingResult) && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Reference Content Sidebar */}
              <div className="lg:col-span-1 space-y-4">
                <div className="sticky top-8">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">📚 Reference Materials</h3>
                  
                  {/* Quick Overview */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Key Concepts</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <MarkdownContent content={content.overview} />
                    </div>
                  </div>

                  {/* Deep Dive Preview */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="text-xs font-medium text-blue-700 uppercase tracking-wider mb-2">Deep Dive Preview</h4>
                    <div className="text-sm text-blue-600">
                      <MarkdownContent content={content.deepDive.split('\n').slice(0, 10).join('\n') + "..."} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quiz Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
                  <FreeResponseQuiz
                    key={topic.id}
                    topicId={topic.id}
                    topicTitle={topic.title}
                    topicOverview={content.overview}
                    topicDeepDive={content.deepDive}
                    questions={questions}
                    onPass={() => markQuizPassed(topic.id)}
                    onGraded={(result) => setGradingResult(result)}
                    alreadyPassed={isQuizPassed(topic.id)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Deep Dive Content */}
      {(!hasQuiz || gradingResult || isQuizPassed(topic.id)) && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Deep Dive</h2>
          
          {gradingResult ? (
            <DeepDiveChat
              topicId={topic.id}
              topicTitle={topic.title}
              topicOverview={content.overview}
              topicDeepDive={content.deepDive}
              gradingResult={gradingResult}
            />
          ) : (
            <MarkdownContent content={content.deepDive} />
          )}
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
