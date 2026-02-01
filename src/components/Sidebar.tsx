"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";

export default function Sidebar({ open, onClose, onSettingsClick }: { 
  open: boolean; 
  onClose: () => void; 
  onSettingsClick: () => void;
}) {
  const pathname = usePathname();
  const { isRead, isQuizPassed } = useProgress();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set() // All sections collapsed by default
  );

  // Auto-expand section containing current topic
  useEffect(() => {
    const currentSlug = pathname.replace('/topic/', '');
    for (const section of curriculum) {
      if (section.topics.some(topic => topic.slug === currentSlug)) {
        setExpandedSections(prev => new Set([...prev, section.id]));
        break;
      }
    }
  }, [pathname]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 flex flex-col ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-gray-100 flex-shrink-0">
          <Link href="/" className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors" onClick={onClose}>
            UX Design Course
          </Link>
        </div>
        <nav className="flex flex-col flex-1 min-h-0">
          <div className="p-4 space-y-5 flex-1 overflow-y-auto">
            {curriculum.map((section) => {
              const isExpanded = expandedSections.has(section.id);
              return (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`flex items-center gap-2 mb-2 w-full text-left group hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-colors ${isExpanded ? 'bg-gray-50' : ''}`}
                  >
                    <svg 
                      className={`w-3 h-3 transition-all duration-200 ${isExpanded ? 'rotate-90 text-gray-600' : 'text-gray-400'}`}
                      viewBox="0 0 24 24"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider transition-colors ${isExpanded ? 'text-gray-700 font-bold' : 'text-gray-400'} group-hover:text-gray-600`}>{section.title}</h3>
                    {section.foundational && (
                      <span className="text-[10px] font-medium bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Core</span>
                    )}
                  </button>
                  {isExpanded && (
                    <ul className="space-y-0.5 ml-5">
                      {section.topics.map((topic) => {
                        const href = `/topic/${topic.slug}`;
                        const active = pathname === href;
                        const read = isRead(topic.id);
                        const passed = isQuizPassed(topic.id);
                        return (
                          <li key={topic.id}>
                            <Link
                              href={href}
                              onClick={onClose}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${active ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                            >
                              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[9px] ${passed ? "bg-green-500 border-green-500 text-white" : read ? "bg-indigo-100 border-indigo-400 text-indigo-600" : "border-gray-300"}`}>
                                {passed ? "✓" : read ? "•" : ""}
                              </span>
                              <span className="truncate">{topic.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Settings Button */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <button
              onClick={() => {
                onSettingsClick();
                onClose();
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
            >
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
              Settings
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
