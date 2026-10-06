import React from 'react';
import { CaseStudyTab } from '../types';

interface ChromeTabBarProps {
  activeTab: CaseStudyTab;
  onSelectTab: (tab: CaseStudyTab) => void;
}

export const ChromeTabBar: React.FC<ChromeTabBarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <header className="w-full bg-[#0F172A] text-white border-b border-slate-800 shadow-sm">
      {/* Clean Academic Header */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="nuclear">☢️</span>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Kudankulam Nuclear Power Plant
            </h1>
            <span className="text-slate-400 font-normal hidden md:inline">|</span>
            <span className="text-slate-300 text-sm font-medium hidden md:inline">
              Cybersecurity Case Study
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Cyber Security SLA • Polytechnic Computer Engineering
          </p>
        </div>

        {/* Case Study Jump Indicator */}
        <div className="text-xs text-slate-400 font-medium hidden lg:block">
          Interactive Case Study: <span className="text-sky-400 font-semibold">{activeTab === '2019-dtrack' ? '2019 Incident' : '2026 Data Leak'}</span>
        </div>
      </div>

      {/* Chrome-Style Case Study Tabs */}
      <div className="max-w-6xl mx-auto px-4 flex items-end gap-2 border-t border-slate-800/80 pt-2">
        {/* TAB 1 */}
        <button
          onClick={() => onSelectTab('2019-dtrack')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === '2019-dtrack'
              ? 'bg-[#F8FAFC] text-[#0F172A] shadow-md border-t-2 border-blue-600'
              : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <span className="text-base">🦠</span>
          <span>2019 Dtrack Incident</span>
        </button>

        {/* TAB 2 */}
        <button
          onClick={() => onSelectTab('2026-data-leak')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === '2026-data-leak'
              ? 'bg-[#F8FAFC] text-[#0F172A] shadow-md border-t-2 border-red-600'
              : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <span className="text-base">🔴</span>
          <span>2026 Reported Data Leak</span>
        </button>
      </div>
    </header>
  );
};
