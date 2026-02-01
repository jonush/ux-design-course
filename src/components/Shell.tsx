"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import SettingsModal from "./SettingsModal";
import { SettingsProvider } from "@/contexts/SettingsContext";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const openSettings = () => setSettingsOpen(true);

  return (
    <SettingsProvider onOpenSettings={openSettings}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onSettingsClick={openSettings} />
        <div className="flex-1 min-w-0 lg:ml-72">
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200 lg:hidden">
            <div className="flex items-center justify-between h-14 px-4">
              <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-gray-600 hover:text-gray-900">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
                </button>
                <span className="ml-3 font-semibold text-gray-900">UX Design Course</span>
              </div>
              <button 
                onClick={openSettings}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title="Settings"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              </button>
            </div>
          </header>
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {children}
          </main>
        </div>
        <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      </div>
    </SettingsProvider>
  );
}
