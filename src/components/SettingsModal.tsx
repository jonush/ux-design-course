"use client";
import { useState, useEffect } from "react";
import { useApiKey } from "@/contexts/ApiKeyContext";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { apiKey, setApiKey, clearApiKey, isKeySet } = useApiKey();
  const [inputKey, setInputKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInputKey(apiKey || "");
      setSaved(false);
    }
  }, [isOpen, apiKey]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (inputKey.trim()) {
      setApiKey(inputKey.trim());
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleClear = () => {
    setInputKey("");
    clearApiKey();
  };

  const maskedKey = apiKey
    ? `${apiKey.slice(0, 10)}${"•".repeat(20)}${apiKey.slice(-4)}`
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-5">
          {/* API Key Section */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Personalized Learning
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Unlock an adaptive learning experience tailored to your understanding and learning style. 
              Get personalized explanations, interactive discussions, and content that adjusts to help you master UX design concepts.
            </p>

            {isKeySet && !inputKey.startsWith(apiKey?.slice(0, 10) || "") ? (
              <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-800 font-medium">
                    ✓ API key configured
                  </span>
                  <button
                    onClick={() => setInputKey(apiKey || "")}
                    className="text-xs text-green-600 hover:text-green-800"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-xs text-green-700 mt-1 font-mono">
                  {maskedKey}
                </p>
              </div>
            ) : (
              <div className="relative">
                <input
                  type={showKey ? "text" : "password"}
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="sk-ant-api03-..."
                  className="w-full px-4 py-2.5 pr-20 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 font-mono"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
                >
                  {showKey ? "Hide" : "Show"}
                </button>
              </div>
            )}

            <div className="flex gap-2 mt-3">
              <button
                onClick={handleSave}
                disabled={!inputKey.trim() || inputKey === apiKey}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {saved ? "✓ Saved!" : "Save Key"}
              </button>
              {isKeySet && (
                <button
                  onClick={handleClear}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Help Section */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Need an Anthropic API key?{" "}
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Get one here →
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Your key enables personalized learning features and is stored securely 
              in your browser. It&apos;s only used to enhance your learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
