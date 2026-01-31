"use client";
import { useState } from "react";
import { QuizQuestion } from "@/data/quizzes";

interface QuizProps {
  questions: QuizQuestion[];
  onPass: () => void;
  alreadyPassed: boolean;
}

export default function Quiz({ questions, onPass, alreadyPassed }: QuizProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (alreadyPassed && !submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">🎉</div>
        <p className="text-green-800 font-medium">You&apos;ve already passed this quiz!</p>
        <button onClick={() => { setAnswers(new Array(questions.length).fill(null)); setSubmitted(false); }} className="mt-3 text-sm text-green-600 hover:text-green-800 underline">Retake quiz</button>
      </div>
    );
  }

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    const next = [...answers];
    next[qIdx] = optIdx;
    setAnswers(next);
  };

  const handleSubmit = () => {
    const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);
    setScore(correct);
    setSubmitted(true);
    if (correct >= Math.ceil(questions.length * 0.7)) {
      onPass();
    }
  };

  const passing = Math.ceil(questions.length * 0.7);
  const passed = submitted && score >= passing;
  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Quiz</h3>
        <span className="text-sm text-gray-500">Pass: {passing}/{questions.length} correct</span>
      </div>

      {questions.map((q, qIdx) => (
        <div key={qIdx} className="bg-gray-50 rounded-xl p-5">
          <p className="font-medium text-gray-900 mb-3">{qIdx + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, oIdx) => {
              const selected = answers[qIdx] === oIdx;
              const isCorrect = q.correctIndex === oIdx;
              let style = "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50";
              if (submitted) {
                if (isCorrect) style = "border-green-400 bg-green-50 text-green-900";
                else if (selected && !isCorrect) style = "border-red-400 bg-red-50 text-red-900";
                else style = "border-gray-200 opacity-60";
              } else if (selected) {
                style = "border-indigo-500 bg-indigo-50 text-indigo-900";
              }
              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelect(qIdx, oIdx)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-colors ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {submitted ? (
        <div className={`rounded-xl p-5 text-center ${passed ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className={`text-lg font-semibold ${passed ? "text-green-800" : "text-red-800"}`}>
            {passed ? "🎉 Passed!" : "Not quite..."} {score}/{questions.length} correct
          </p>
          {!passed && (
            <button onClick={() => { setAnswers(new Array(questions.length).fill(null)); setSubmitted(false); }} className="mt-3 text-sm text-red-600 hover:text-red-800 underline">Try again</button>
          )}
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit Answers
        </button>
      )}
    </div>
  );
}
