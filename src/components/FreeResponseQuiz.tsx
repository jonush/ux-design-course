"use client";
import { useState } from "react";

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

interface FreeResponseQuizProps {
  topicId: string;
  topicTitle: string;
  topicOverview: string;
  topicDeepDive?: string;
  questions: string[];
  onPass: () => void;
  onGraded: (result: GradingResult) => void;
  alreadyPassed: boolean;
}

export default function FreeResponseQuiz({
  topicTitle,
  topicOverview,
  topicDeepDive,
  questions,
  onPass,
  onGraded,
  alreadyPassed,
}: FreeResponseQuizProps) {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<GradingResult | null>(null);

  if (alreadyPassed && !result) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">🎉</div>
        <p className="text-green-800 font-medium">You&apos;ve already passed this quiz!</p>
        <button
          onClick={() => {
            setAnswers(new Array(questions.length).fill(""));
            setResult(null);
          }}
          className="mt-3 text-sm text-green-600 hover:text-green-800 underline"
        >
          Retake quiz
        </button>
      </div>
    );
  }

  const handleSubmit = async () => {
    setGrading(true);
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicTitle,
          topicOverview,
          topicDeepDive,
          questions,
          answers,
        }),
      });
      const data: GradingResult = await res.json();
      setResult(data);
      if (data.passed) onPass();
      onGraded(data);
    } catch (error) {
      console.error("Grading failed:", error);
    } finally {
      setGrading(false);
    }
  };

  const allAnswered = answers.every((a) => a.trim().length > 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Quiz</h3>
        <span className="text-sm text-gray-500">{questions.length} questions</span>
      </div>

      {questions.map((q, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-5">
          <p className="font-medium text-gray-900 mb-3">
            {i + 1}. {q}
          </p>
          <textarea
            value={answers[i]}
            onChange={(e) => {
              const next = [...answers];
              next[i] = e.target.value;
              setAnswers(next);
            }}
            disabled={!!result || grading}
            placeholder="Type your answer..."
            className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 disabled:opacity-60 resize-y"
          />
          {result && result.grades[i] && (
            <div
              className={`mt-3 p-3 rounded-lg text-sm ${
                result.grades[i].score === 2
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : result.grades[i].score === 1
                  ? "bg-amber-50 border border-amber-200 text-amber-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <span className="font-medium">
                {result.grades[i].score === 2 ? "✓ Correct" : result.grades[i].score === 1 ? "~ Partial" : "✗ Incorrect"}
                {" "}({result.grades[i].score}/2)
              </span>
              <span className="ml-2">{result.grades[i].feedback}</span>
            </div>
          )}
        </div>
      ))}

      {result ? (
        <div
          className={`rounded-xl p-5 text-center ${
            result.passed ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"
          }`}
        >
          <p className={`text-lg font-semibold ${result.passed ? "text-green-800" : "text-amber-800"}`}>
            {result.passed ? "🎉 Passed!" : "Keep learning!"} {result.overallScore}/{result.maxScore} points
          </p>
          <p className="text-sm mt-1 text-gray-600">
            {result.passed
              ? "Check out your personalized deep dive below."
              : "Review the feedback above, then check your personalized deep dive below."}
          </p>
          <button
            onClick={() => {
              setAnswers(new Array(questions.length).fill(""));
              setResult(null);
            }}
            className="mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Retake quiz
          </button>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || grading}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {grading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              AI is grading...
            </span>
          ) : (
            "Submit Answers"
          )}
        </button>
      )}
    </div>
  );
}
