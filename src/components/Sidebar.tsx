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
      <aside className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${open ? "translate-x-0" : "-translate-x-full"}`}>
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
                    className="flex items-center gap-2 mb-2 w-full text-left group hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-colors"
                  >
                    <svg 
                      className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-600">{section.title}</h3>
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <path d="m15.98 7.5 3.25-3.25M4.77 4.77l3.25 3.25"/>
                <path d="m15.98 16.5 3.25 3.25M4.77 19.23l3.25-3.25"/>
              </svg>
              Settings
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
