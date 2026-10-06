import React from 'react';
import { Shield, Lock, Eye, Activity, CheckCircle2, XCircle } from 'lucide-react';

export const ImpactComparison2019: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          2019 Incident Impact
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Factual scope of the affected environment
        </p>
      </div>

      {/* 3 Large Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200 text-center flex flex-col items-center justify-center">
          <span className="text-4xl mb-3">🦠</span>
          <h4 className="text-sm font-bold text-red-900 uppercase tracking-wide">
            MALWARE DETECTED
          </h4>
          <p className="text-xs text-red-700 mt-1">
            Dtrack reconnaissance spyware identified
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-center flex flex-col items-center justify-center">
          <span className="text-4xl mb-3">💻</span>
          <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
            ADMINISTRATIVE SYSTEM INVOLVED
          </h4>
          <p className="text-xs text-amber-700 mt-1">
            Isolated to an Internet-connected office PC
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 text-center flex flex-col items-center justify-center">
          <span className="text-4xl mb-3">🟢</span>
          <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wide">
            CRITICAL SYSTEMS REPORTED UNAFFECTED
          </h4>
          <p className="text-xs text-emerald-700 mt-1">
            Reactor operations & safety systems 100% safe
          </p>
        </div>
      </div>
    </div>
  );
};

export const SecurityLayersShield: React.FC = () => {
  const lessons = [
    {
      icon: '🌐',
      title: 'Network Segmentation',
      desc: 'Separates administrative computers from critical plant operational systems.',
    },
    {
      icon: '🔐',
      title: 'Access Control',
      desc: 'Restricts administrative privileges to prevent unauthorized lateral movement.',
    },
    {
      icon: '🦠',
      title: 'Endpoint Security',
      desc: 'Detects and quarantines suspicious processes and spyware on workstations.',
    },
    {
      icon: '📡',
      title: 'Continuous Monitoring',
      desc: 'Monitors network telemetry in real time to spot abnormal reconnaissance.',
    },
    {
      icon: '🚨',
      title: 'Incident Response',
      desc: 'Enables rapid containment and isolation of infected computers without downtime.',
    },
    {
      icon: '🛡️',
      title: 'Defense in Depth',
      desc: 'Uses multiple layered security controls so no single point of failure exists.',
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          6 Cybersecurity Lessons
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Key defensive takeaways from the 2019 incident
        </p>
      </div>

      {/* 6 Clean Icon Cards (1 sentence each) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col">
            <span className="text-3xl mb-2">{item.icon}</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <p className="text-sm font-semibold text-blue-900">
          “Critical infrastructure requires multiple layers of cybersecurity.”
        </p>
      </div>
    </div>
  );
};

export const MythFactMatrix2019: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Myth vs Fact
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Clarifying common media misconceptions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pair 1 */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="p-3 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-1.5 text-red-800 font-bold text-xs uppercase mb-1">
              <XCircle size={14} className="text-red-600" />
              <span>MYTH:</span>
            </div>
            <p className="text-xs font-medium text-red-950">
              “Kudankulam nuclear reactor was hacked.”
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase mb-1">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>FACT:</span>
            </div>
            <p className="text-xs font-medium text-emerald-950">
              Malware was detected on an administrative computer. Official statements confirmed critical plant systems were unaffected.
            </p>
          </div>
        </div>

        {/* Pair 2 */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="p-3 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-1.5 text-red-800 font-bold text-xs uppercase mb-1">
              <XCircle size={14} className="text-red-600" />
              <span>MYTH:</span>
            </div>
            <p className="text-xs font-medium text-red-950">
              “Dtrack caused a nuclear accident or power shutdown.”
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase mb-1">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>FACT:</span>
            </div>
            <p className="text-xs font-medium text-emerald-950">
              The incident did not result in a reactor accident, radiation hazard, or electricity generation impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
