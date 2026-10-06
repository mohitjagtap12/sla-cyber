import React, { useState } from 'react';
import { CaseStudyTab } from './types';
import { ChromeTabBar } from './components/ChromeTabBar';
import { Tab2019Dtrack } from './components/tab1/Tab2019Dtrack';
import { Tab2026DataLeak } from './components/tab2/Tab2026DataLeak';
import { PotentialImpactSection } from './components/common/PotentialImpactSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<CaseStudyTab>('2019-dtrack');

  const handleSelectTab = (tab: CaseStudyTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-900">
      {/* 2. SIMPLIFIED TOP HEADER & CHROME TABS */}
      <ChromeTabBar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Tab 1: 2019 Dtrack Malware Incident */}
        {activeTab === '2019-dtrack' && (
          <div className="transition-opacity duration-200">
            <Tab2019Dtrack />
          </div>
        )}

        {/* Tab 2: 2026 Reported Data Leak */}
        {activeTab === '2026-data-leak' && (
          <div className="transition-opacity duration-200">
            <Tab2026DataLeak />
          </div>
        )}

        {/* Potential Impact Section (Hypothetical / Educational) */}
        <div className="mt-12">
          <PotentialImpactSection initialScenario={activeTab} />
        </div>
      </main>

      {/* Clean Academic Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-medium text-slate-700">
            Kudankulam Nuclear Power Plant – Cybersecurity Case Study
          </div>
          <div>
            Polytechnic Diploma in Computer Engineering • Cyber Security SLA
          </div>
        </div>
      </footer>
    </div>
  );
}
