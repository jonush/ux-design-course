// Free response questions derived from the same topics as the multiple choice quizzes.
// We keep 2-3 questions per topic to keep quiz time reasonable for free response.

import { quizzes } from "./quizzes";

// Map of topicId -> free response questions
// We auto-generate from existing MC questions by taking the question text
// (they're already good questions, just removing the multiple choice aspect)
export function getFreeResponseQuestions(topicId: string): string[] | undefined {
  const mcQuestions = quizzes[topicId];
  if (!mcQuestions) return undefined;

  // Take up to 3 questions per topic for free response (more is tedious to type)
  // The questions from MC format already work well as free response
  return mcQuestions.slice(0, 3).map((q) => q.question);
}
