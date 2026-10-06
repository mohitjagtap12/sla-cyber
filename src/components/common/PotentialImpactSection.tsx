import React, { useState } from 'react';
import {
  AlertTriangle,
  Shield,
  ShieldCheck,
  Unlock,
  Lock,
  ArrowDown,
  Info,
  CheckCircle2,
  FileWarning,
  Activity,
  ZapOff,
} from 'lucide-react';
import { CaseStudyTab } from '../../types';

interface PotentialImpactSectionProps {
  initialScenario?: CaseStudyTab;
}

export const PotentialImpactSection: React.FC<PotentialImpactSectionProps> = ({
  initialScenario = '2019-dtrack',
}) => {
  const [selectedScenario, setSelectedScenario] = useState<'2019' | '2026'>(
    initialScenario === '2026-data-leak' ? '2026' : '2019'
  );
  const [whatIf2019, setWhatIf2019] = useState<boolean>(false);
  const [whatIf2026, setWhatIf2026] = useState<boolean>(false);

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="warning">⚠️</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Potential Impact
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Understanding why cybersecurity matters in critical infrastructure
          </p>
          <p className="text-xs font-medium text-amber-700 mt-1">
            “What could have happened if the security boundaries had failed?”
          </p>
        </div>

        {/* Scenario Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto">
          <button
            onClick={() => setSelectedScenario('2019')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedScenario === '2019'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            🦠 2019 Scenario
          </button>
          <button
            onClick={() => setSelectedScenario('2026')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedScenario === '2026'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            🔴 2026 Scenario
          </button>
        </div>
      </div>

      {/* Educational Banner */}
      <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
        <Info size={16} className="text-amber-700 shrink-0" />
        <span>
          <strong>Hypothetical Educational Model: </strong>
          This analysis demonstrates defense-in-depth principles. These potential impacts are theoretical risks and not actual consequences of the reported incidents.
        </span>
      </div>

      {/* ==================== 2019 POTENTIAL IMPACT ==================== */}
      {selectedScenario === '2019' && (
        <div className="space-y-6">
          {/* Flow Container */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Hypothetical Boundary Failure Analysis
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                2019 — What If the Air-Gap Failed?
              </h4>
            </div>

            {/* Visual Sequence */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                🦠 DTRACK
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                💻 ADMIN NETWORK
              </span>
              <span className="text-slate-400">→</span>
              <span
                className={`px-3 py-2 rounded-xl border transition-all ${
                  whatIf2019
                    ? 'bg-red-50 text-red-700 border-red-300 animate-pulse'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                }`}
              >
                {whatIf2019 ? '🔓 BOUNDARY FAILED' : '🔐 BOUNDARY HELD'}
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                ☢️ CRITICAL SYSTEMS
              </span>
              <span className="text-slate-400">→</span>
              <span
                className={`px-3 py-2 rounded-xl border ${
                  whatIf2019
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-slate-200 text-slate-500 border-slate-300'
                }`}
              >
                ⚠️ POTENTIAL IMPACT
              </span>
            </div>

            {/* "WHAT IF?" Interactive Trigger Button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setWhatIf2019(!whatIf2019)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm transition-all cursor-pointer inline-flex items-center gap-2 ${
                  whatIf2019
                    ? 'bg-slate-800 text-white hover:bg-slate-900'
                    : 'bg-red-600 text-white hover:bg-red-700 ring-2 ring-red-300 animate-bounce'
                }`}
              >
                <Unlock size={16} />
                <span>{whatIf2019 ? 'Reset Simulation' : 'CLICK: WHAT IF?'}</span>
              </button>
            </div>
          </div>

          {/* 4 Hypothetical Cards */}
          {whatIf2019 ? (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center">
                <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">
                  Hypothetical Scenarios (If Security Boundaries Had Failed)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="p-4 rounded-xl bg-red-50/70 border-2 border-red-200 text-center">
                  <span className="text-3xl mb-2 block">🔓</span>
                  <h5 className="text-xs font-bold uppercase text-red-950">
                    Unauthorized Access
                  </h5>
                  <p className="text-xs text-red-800 mt-1">
                    Lateral traversal from office PC into operational machinery subnet.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-xl bg-amber-50/70 border-2 border-amber-200 text-center">
                  <span className="text-3xl mb-2 block">📊</span>
                  <h5 className="text-xs font-bold uppercase text-amber-950">
                    Sensitive Information Exposure
                  </h5>
                  <p className="text-xs text-amber-800 mt-1">
                    Plant telemetry and operational settings exposed to adversaries.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-xl bg-amber-50/70 border-2 border-amber-200 text-center">
                  <span className="text-3xl mb-2 block">⚙️</span>
                  <h5 className="text-xs font-bold uppercase text-amber-950">
                    Operational Disruption
                  </h5>
                  <p className="text-xs text-amber-800 mt-1">
                    Potential interference with sensor telemetry or control automation.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 rounded-xl bg-red-50/70 border-2 border-red-200 text-center">
                  <span className="text-3xl mb-2 block">🚨</span>
                  <h5 className="text-xs font-bold uppercase text-red-950">
                    Safety & Security Risk
                  </h5>
                  <p className="text-xs text-red-800 mt-1">
                    Urgent containment and precautionary operational shutdown protocols.
                  </p>
                </div>
              </div>

              {/* Green Actual Outcome Card */}
              <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={28} className="text-emerald-600 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-950">
                      🟢 ACTUAL OUTCOME
                    </h5>
                    <p className="text-xs text-emerald-800 font-medium">
                      “Critical plant systems were reported unaffected.”
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-200/80 text-emerald-900 rounded-lg shrink-0">
                  Air-Gap Succeeded
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span className="text-3xl block">🛡️</span>
              <h5 className="text-sm font-bold text-slate-800">
                Defense-in-Depth Protected Critical Operations
              </h5>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Press the “WHAT IF?” button above to inspect theoretical consequences if network isolation had failed.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ==================== 2026 POTENTIAL IMPACT ==================== */}
      {selectedScenario === '2026' && (
        <div className="space-y-6">
          {/* Flow Container */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Supply Chain Risk Analysis
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                2026 — What If More Sensitive Systems Were Exposed?
              </h4>
            </div>

            {/* Visual Sequence */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                🏢 THIRD PARTY
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                ☁️ HOSTED ENV
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
                🖥️ SERVER
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-2 rounded-xl bg-red-100 text-red-800 border border-red-300">
                🔴 DATA EXPOSURE
              </span>
              <span className="text-slate-400">→</span>
              <span
                className={`px-3 py-2 rounded-xl border ${
                  whatIf2026
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-slate-200 text-slate-500 border-slate-300'
                }`}
              >
                ⚠️ SENSITIVE EXPOSURE
              </span>
            </div>

            {/* "WHAT IF?" Interactive Trigger Button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setWhatIf2026(!whatIf2026)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm transition-all cursor-pointer inline-flex items-center gap-2 ${
                  whatIf2026
                    ? 'bg-slate-800 text-white hover:bg-slate-900'
                    : 'bg-red-600 text-white hover:bg-red-700 ring-2 ring-red-300 animate-bounce'
                }`}
              >
                <Unlock size={16} />
                <span>{whatIf2026 ? 'Reset Simulation' : 'CLICK: WHAT IF?'}</span>
              </button>
            </div>
          </div>

          {/* 4 Hypothetical Cards */}
          {whatIf2026 ? (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-center">
                <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">
                  Hypothetical Scenarios (If Sensitive Schematics Were Compromised)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="p-4 rounded-xl bg-red-50/70 border-2 border-red-200 text-center">
                  <span className="text-3xl mb-2 block">📁</span>
                  <h5 className="text-xs font-bold uppercase text-red-950">
                    More Sensitive Data Exposure
                  </h5>
                  <p className="text-xs text-red-800 mt-1">
                    Confidential project blueprints and vendor credentials compromised.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-xl bg-amber-50/70 border-2 border-amber-200 text-center">
                  <span className="text-3xl mb-2 block">🏗️</span>
                  <h5 className="text-xs font-bold uppercase text-amber-950">
                    Infrastructure Information Risk
                  </h5>
                  <p className="text-xs text-amber-800 mt-1">
                    Facility architectural layouts and supplier schematics exposed.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-xl bg-amber-50/70 border-2 border-amber-200 text-center">
                  <span className="text-3xl mb-2 block">🎯</span>
                  <h5 className="text-xs font-bold uppercase text-amber-950">
                    Reconnaissance Advantage
                  </h5>
                  <p className="text-xs text-amber-800 mt-1">
                    Adversaries gain intelligence to plan future supply-chain intrusions.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 rounded-xl bg-red-50/70 border-2 border-red-200 text-center">
                  <span className="text-3xl mb-2 block">🛡️</span>
                  <h5 className="text-xs font-bold uppercase text-red-950">
                    Greater Third-Party Risk
                  </h5>
                  <p className="text-xs text-red-800 mt-1">
                    Weak supplier cyber hygiene puts connected contractors at risk.
                  </p>
                </div>
              </div>

              {/* Green Actual Outcome Card */}
              <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={28} className="text-emerald-600 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-950">
                      🟢 ACTUAL OUTCOME
                    </h5>
                    <p className="text-xs text-emerald-800 font-medium">
                      “NPCIL reported that core nuclear safety and security systems were not compromised.”
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-200/80 text-emerald-900 rounded-lg shrink-0">
                  Control Systems Safe
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span className="text-3xl block">🏢</span>
              <h5 className="text-sm font-bold text-slate-800">
                Third-Party Environment Remained Isolated from Reactor Machinery
              </h5>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Press the “WHAT IF?” button above to explore theoretical supply-chain escalation risks.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ==================== IMPORTANT FACT CARD ==================== */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Info size={16} className="text-blue-600 shrink-0" />
          <span>ℹ️ ACTUAL REPORTED OUTCOME</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <span className="font-bold text-blue-900 block mb-0.5">2019 Dtrack Incident:</span>
            <span className="text-slate-600">“Critical plant systems were reported unaffected.”</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <span className="font-bold text-red-900 block mb-0.5">2026 Reported Leak:</span>
            <span className="text-slate-600">“NPCIL reported that core nuclear safety and security systems were not compromised.”</span>
          </div>
        </div>
      </div>
    </section>
  );
};
