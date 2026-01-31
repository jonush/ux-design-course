"use client";
import { useState, useEffect, useCallback } from "react";

interface Progress {
  readTopics: string[];
  passedQuizzes: string[];
}

const STORAGE_KEY = "ux-course-progress";

function load(): Progress {
  if (typeof window === "undefined") return { readTopics: [], passedQuizzes: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { readTopics: [], passedQuizzes: [] };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({ readTopics: [], passedQuizzes: [] });

  useEffect(() => { setProgress(load()); }, []);

  const save = useCallback((p: Progress) => {
    setProgress(p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }, []);

  const markRead = useCallback((topicId: string) => {
    setProgress((prev) => {
      if (prev.readTopics.includes(topicId)) return prev;
      const next = { ...prev, readTopics: [...prev.readTopics, topicId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const markQuizPassed = useCallback((topicId: string) => {
    setProgress((prev) => {
      if (prev.passedQuizzes.includes(topicId)) return prev;
      const next = { ...prev, passedQuizzes: [...prev.passedQuizzes, topicId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isRead = useCallback((topicId: string) => progress.readTopics.includes(topicId), [progress]);
  const isQuizPassed = useCallback((topicId: string) => progress.passedQuizzes.includes(topicId), [progress]);

  const resetProgress = useCallback(() => {
    save({ readTopics: [], passedQuizzes: [] });
  }, [save]);

  return { progress, markRead, markQuizPassed, isRead, isQuizPassed, resetProgress };
}
