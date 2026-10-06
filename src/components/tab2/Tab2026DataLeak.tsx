import React from 'react';
import { ContractorBreachSvg } from '../svg/ContractorBreachSvg';
import { DataLeakSimulation2026 } from './DataLeakSimulation2026';
import { FileText, Database, Info, Building2, Lock, Shield, Eye, FileCheck, Activity } from 'lucide-react';

export const Tab2026DataLeak: React.FC = () => {
  const lessons2026 = [
    {
      icon: '🏢',
      title: 'Third-Party Security',
      desc: 'Mandate strict cybersecurity compliance and risk assessments for all external suppliers.',
    },
    {
      icon: '🔐',
      title: 'Access Control',
      desc: 'Enforce least privilege and time-limited access tokens for external contractors.',
    },
    {
      icon: '🛡️',
      title: 'Data Protection',
      desc: 'Implement encryption and data loss prevention (DLP) across sensitive project schematics.',
    },
    {
      icon: '📡',
      title: 'Vendor Monitoring',
      desc: 'Continuously monitor third-party connections and audit external data access logs.',
    },
    {
      icon: '🔍',
      title: 'Security Audits',
      desc: 'Perform periodic vulnerability assessments on contractor portals and cloud repositories.',
    },
    {
      icon: '🚨',
      title: 'Incident Response',
      desc: 'Establish joint breach notification protocols so supplier incidents are rapidly mitigated.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* 16. 2026 HEADER WITH SMALL PLANT PHOTOGRAPH NEAR INTRODUCTION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>🔴</span>
              <span>Case Study 02</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              2026 Reported Data Leak
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-red-600">
              Third-Party / Contractor Cybersecurity Case
            </h2>

            <p className="text-sm text-slate-500 font-medium">
              Supply chain risk analysis and vendor data security
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <span className="text-base">🏢</span>
                <span>Involved an external contractor or supplier environment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base">📁</span>
                <span>Reported exposure of auxiliary engineering files</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base">🛡️</span>
                <span>Illustrates supply chain risks for critical infrastructure</span>
              </div>
            </div>

            {/* Small Plant Context Card with Mandatory Caption */}
            <div className="pt-2">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 max-w-md">
                <div className="aspect-[21/9] w-full overflow-hidden">
                  <img
                    src="/assets/images/kudankulam_reactor.jpg"
                    alt="Kudankulam Nuclear Power Plant visual context"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Kudankulam_04710079_%288386517846%29.jpg';
                    }}
                  />
                </div>
                <div className="p-2.5 text-xs text-slate-600 bg-white border-t border-slate-200 leading-snug">
                  Facility shown for context; the reported data-leak scenario concerns a separate digital/third-party environment.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContractorBreachSvg />
          </div>
        </div>
      </section>

      {/* 17. 2026 NUMBERS (Two Large Visual Cards) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Reported Incident Scope
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Key metrics cited in contemporary 2026 reporting
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-red-50/60 border-2 border-red-200 text-center flex flex-col items-center justify-center">
            <span className="text-4xl mb-2">📁</span>
            <div className="text-4xl sm:text-5xl font-extrabold text-red-700 font-mono tracking-tight">
              ~19,000
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-900 mt-2">
              REPORTED FILES
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Vendor documents & contractor correspondence
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-amber-50/60 border-2 border-amber-200 text-center flex flex-col items-center justify-center">
            <span className="text-4xl mb-2">💾</span>
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-700 font-mono tracking-tight">
              ~14.3 GB
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mt-2">
              REPORTED DATA
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Total volume of reported archive files
            </p>
          </div>
        </div>
      </section>

      {/* 18. 2026 DATA LEAK DIAGRAM */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Data Leak Progression
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Conceptual supply chain breach flow
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { icon: '🏢', label: 'Third-Party', sub: 'Contractor IT' },
            { icon: '🔓', label: 'Breach', sub: 'Access Gained' },
            { icon: '🖥️', label: 'Server', sub: 'Vendor Data' },
            { icon: '📁', label: 'Files', sub: '~19,000 Files' },
            { icon: '🔴', label: 'Data Exposure', sub: 'Reported Leak' },
            { icon: '🔎', label: 'Investigation', sub: 'Review Conducted' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
              <span className="text-3xl mb-1.5">{item.icon}</span>
              <div className="text-xs font-bold text-slate-900 leading-tight">{item.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 19. 2026 DATA LEAK SIMULATION */}
      <section>
        <DataLeakSimulation2026 />
      </section>

      {/* 20. IMPORTANT DISCLAIMER */}
      <section className="p-6 rounded-2xl bg-amber-50/80 border-2 border-amber-300 flex items-start sm:items-center gap-4 shadow-sm">
        <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
          <Info size={24} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
            Important Factual Disclaimer
          </h4>
          <p className="text-sm text-amber-900 mt-0.5 leading-relaxed">
            “The reported data leak should not automatically be interpreted as a compromise of nuclear reactor control systems.”
          </p>
          <p className="text-xs text-amber-800 mt-1">
            Plant control systems run on air-gapped networks. Contractor documents do not grant control over reactor machinery.
          </p>
        </div>
      </section>

      {/* 21. 2019 VS 2026 COMPARISON (Two Large Cards) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            2019 vs 2026 Comparison
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Internal IT malware vs external third-party data leak
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Blue Card: 2019 */}
          <div className="p-6 rounded-2xl bg-blue-50/60 border-2 border-blue-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🦠</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-800">Case Study 01</div>
                  <h4 className="text-xl font-bold text-blue-950">2019 Incident</h4>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Threat:</strong> Dtrack Reconnaissance Malware</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Environment:</strong> Administrative / IT Network</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Action:</strong> Detection, Isolation & Forensic Investigation</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-xs font-bold text-emerald-900 text-center">
              🟢 Critical Systems Reported Unaffected
            </div>
          </div>

          {/* Red Card: 2026 */}
          <div className="p-6 rounded-2xl bg-red-50/60 border-2 border-red-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🔴</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-800">Case Study 02</div>
                  <h4 className="text-xl font-bold text-red-950">2026 Reported Leak</h4>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Threat:</strong> Reported Data Leak / Exposure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Environment:</strong> Third-Party / Contractor IT</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Action:</strong> Supply Chain Review & Access Revocation</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-xs font-bold text-emerald-900 text-center">
              🟢 Reactor Safety Systems Safe & Isolated
            </div>
          </div>
        </div>
      </section>

      {/* 2026 SECURITY LESSONS (6 Cards, 1 sentence each) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Third-Party Cybersecurity Lessons
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Key takeaways for managing supplier risks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons2026.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col">
              <span className="text-3xl mb-2">{item.icon}</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CONCLUSION (LARGE REAL KUDANKULAM PLANT PHOTOGRAPH WITH SHIELD OVERLAY) */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-slate-900 text-white">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full min-h-[300px]">
          <img
            src="/assets/images/kudankulam_complex.jpg"
            alt="Kudankulam Nuclear Power Plant Complex"
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://upload.wikimedia.org/wikipedia/commons/4/47/The_Kudankulam_Nuclear_Power_Plant_%28KKNPP%29.jpg';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/40 backdrop-blur-sm flex items-center justify-center mb-3">
              <Shield size={32} className="text-blue-300" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Protecting Critical Infrastructure
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium mt-3 text-slate-200">
              <span className="px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/40">
                🦠 2019 — Malware Risk
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-3 py-1 rounded-full bg-red-900/60 border border-red-500/40">
                🔴 2026 — Reported Data Exposure
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-bold">
                🛡️ Strong Cybersecurity
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3 max-w-lg">
              Kudankulam Nuclear Power Plant — visual context for critical infrastructure defense.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
