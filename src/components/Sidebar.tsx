"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { isRead, isQuizPassed } = useProgress();

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />}
      <aside className={`fixed top-0 left-0 z-40 h-full w-72 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-gray-100">
          <Link href="/" className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors" onClick={onClose}>
            UX Design Course
          </Link>
        </div>
        <nav className="p-4 space-y-5">
          {curriculum.map((section) => (
            <div key={section.id}>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">{section.title}</h3>
                {section.foundational && (
                  <span className="text-[10px] font-medium bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Core</span>
                )}
              </div>
              <ul className="space-y-0.5">
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
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
