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
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6"/>
                  <path d="m15.98 7.5 3.25-3.25M4.77 4.77l3.25 3.25"/>
                  <path d="m15.98 16.5 3.25 3.25M4.77 19.23l3.25-3.25"/>
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
