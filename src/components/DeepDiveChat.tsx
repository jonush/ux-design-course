"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import MarkdownContent from "./MarkdownContent";

interface GradeResult {
  score: number;
  feedback: string;
}

interface GradingResult {
  grades: GradeResult[];
  gaps: string[];
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface DeepDiveChatProps {
  topicId: string;
  topicTitle: string;
  topicOverview: string;
  topicDeepDive: string;
  gradingResult: GradingResult;
}

const CHAT_STORAGE_PREFIX = "ux-course-chat-";

function loadChat(topicId: string): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CHAT_STORAGE_PREFIX + topicId);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

function saveChat(topicId: string, messages: ChatMessage[]) {
  localStorage.setItem(CHAT_STORAGE_PREFIX + topicId, JSON.stringify(messages));
}

export default function DeepDiveChat({
  topicId,
  topicTitle,
  topicOverview,
  topicDeepDive,
  gradingResult,
}: DeepDiveChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [generating, setGenerating] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasGenerated = useRef(false);

  // Load saved chat on mount
  useEffect(() => {
    const saved = loadChat(topicId);
    if (saved.length > 0) {
      setMessages(saved);
      hasGenerated.current = true;
    }
  }, [topicId]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  // Save chat when messages change
  useEffect(() => {
    if (messages.length > 0) {
      saveChat(topicId, messages);
    }
  }, [messages, topicId]);

  const generateDeepDive = useCallback(async () => {
    if (hasGenerated.current) return;
    hasGenerated.current = true;
    setGenerating(true);
    setStreamingText("");

    try {
      const res = await fetch("/api/deep-dive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicTitle,
          topicOverview,
          topicDeepDive,
          gaps: gradingResult.gaps,
          grades: gradingResult.grades,
        }),
      });

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              fullText += parsed.text;
              setStreamingText(fullText);
            } catch {}
          }
        }
      }

      setMessages([{ role: "assistant", content: fullText }]);
      setStreamingText("");
    } catch (error) {
      console.error("Deep dive generation failed:", error);
      setStreamingText("Failed to generate deep dive. Please try again.");
    } finally {
      setGenerating(false);
    }
  }, [topicTitle, topicOverview, topicDeepDive, gradingResult]);

  // Generate deep dive on mount if no saved chat
  useEffect(() => {
    if (messages.length === 0 && !hasGenerated.current) {
      generateDeepDive();
    }
  }, [messages.length, generateDeepDive]);

  const sendMessage = async () => {
    if (!userInput.trim() || sending) return;
    const newMessages: ChatMessage[] = [...messages, { role: "user", content: userInput.trim() }];
    setMessages(newMessages);
    setUserInput("");
    setSending(true);
    setStreamingText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicTitle,
          topicOverview,
          messages: newMessages,
        }),
      });

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              fullText += parsed.text;
              setStreamingText(fullText);
            } catch {}
          }
        }
      }

      setMessages([...newMessages, { role: "assistant", content: fullText }]);
      setStreamingText("");
    } catch (error) {
      console.error("Chat failed:", error);
    } finally {
      setSending(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    hasGenerated.current = false;
    localStorage.removeItem(CHAT_STORAGE_PREFIX + topicId);
    generateDeepDive();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">🤖 Personalized Deep Dive</h3>
        {messages.length > 0 && (
          <button onClick={clearChat} className="text-xs text-gray-400 hover:text-gray-600">
            Reset conversation
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 ${
              msg.role === "assistant"
                ? "bg-gray-50 border border-gray-100"
                : "bg-indigo-50 border border-indigo-100 ml-8"
            }`}
          >
            {msg.role === "assistant" ? (
              <MarkdownContent content={msg.content} />
            ) : (
              <p className="text-gray-900 text-sm">{msg.content}</p>
            )}
          </div>
        ))}

        {/* Streaming indicator */}
        {(generating || sending) && streamingText && (
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
            <MarkdownContent content={streamingText} />
          </div>
        )}

        {(generating || sending) && !streamingText && (
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {generating ? "Generating personalized deep dive..." : "Thinking..."}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Chat input — show after deep dive is generated */}
      {messages.length > 0 && !generating && (
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask a follow-up question..."
            disabled={sending}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 disabled:opacity-60"
          />
          <button
            onClick={sendMessage}
            disabled={!userInput.trim() || sending}
            className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
