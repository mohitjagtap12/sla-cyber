import React, { useState } from 'react';
import { Shield, Eye, Lock, Server, Cpu, Activity, RefreshCw, Layers } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const CyberConcepts2019: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<number | null>(null);

  const concepts = [
    {
      id: 1,
      icon: '🦠',
      iconComp: <Cpu className="text-red-400" size={20} />,
      title: 'Malware',
      subtitle: 'Dtrack Reconnaissance Spyware',
      tagline: 'Sophisticated modular reconnaissance toolkit',
      description: 'Dtrack malware was deployed to gather intelligence, log keystrokes, and survey endpoints.',
      lesson: 'Demonstrates that nation-state or advanced persistent threat (APT) groups target critical infrastructure for reconnaissance before attempting sabotage.',
    },
    {
      id: 2,
      icon: '🖥️',
      iconComp: <Server className="text-cyan-400" size={20} />,
      title: 'Endpoint Security',
      subtitle: 'Host Hardening & EDR',
      tagline: 'Defending individual administrative workstations',
      description: 'The infected computer required immediate endpoint forensic investigation, process killing, and root-cause analysis.',
      lesson: 'Endpoint Detection and Response (EDR) agents must monitor process execution anomalies on all enterprise workstations.',
    },
    {
      id: 3,
      icon: '🌐',
      iconComp: <Layers className="text-blue-400" size={20} />,
      title: 'Network Security',
      subtitle: 'Zoning & Microsegmentation',
      tagline: 'Strict perimeter barriers between IT and OT',
      description: 'Segregating enterprise IT from plant operations ensured that malware remained confined and had zero route into control domains.',
      lesson: 'Critical infrastructure must enforce Purdue Model Level 3.5 DMZs and physical air-gaps between business networks and ICS.',
    },
    {
      id: 4,
      icon: '🔐',
      iconComp: <Lock className="text-amber-400" size={20} />,
      title: 'Access Control',
      subtitle: 'Principle of Least Privilege',
      tagline: 'Strict authentication & credential isolation',
      description: 'Unauthorized access to administrative shares or privileged credentials must be blocked through multi-factor authentication (MFA).',
      lesson: 'Limiting administrative user privileges prevents automated tools from dumping memory tokens or traversing between systems.',
    },
    {
      id: 5,
      icon: '☢️',
      iconComp: <Shield className="text-emerald-400" size={20} />,
      title: 'Critical Infrastructure Security',
      subtitle: 'Protection of Essential National Assets',
      tagline: 'Nuclear, power, energy and civil defense',
      description: 'Nuclear energy facilities are classified as Critical Information Infrastructure (CII) and require bespoke defense guidelines.',
      lesson: 'National cyber agencies (NCIIPC, CERT-In, DAE) mandate specialized defensive security postures for nuclear utilities.',
    },
    {
      id: 6,
      icon: '🚨',
      iconComp: <Activity className="text-rose-400" size={20} />,
      title: 'Incident Response',
      subtitle: 'Rapid Containment & Triaging',
      tagline: 'Coordinated detection, isolation, and forensic audits',
      description: 'Upon public and internal flagging, immediate containment protocols were enacted to isolate infected endpoints without operational disruption.',
      lesson: 'Speed of containment and having predetermined playbooks prevents single-node incidents from expanding into network disasters.',
    },
    {
      id: 7,
      icon: '📡',
      iconComp: <Eye className="text-teal-400" size={20} />,
      title: 'Continuous Monitoring',
      subtitle: '24/7 Security Operations Center (SOC)',
      tagline: 'Real-time telemetry, log aggregation & SIEM',
      description: 'Deep network packet inspection and endpoint telemetry allow security analysts to identify abnormal beaconing or outbound C2 communication.',
      lesson: 'Continuous threat hunting finds dormant or passive reconnaissance malware that traditional signatures might miss.',
    },
    {
      id: 8,
      icon: '🛡️',
      iconComp: <RefreshCw className="text-indigo-400" size={20} />,
      title: 'Defense in Depth',
      subtitle: 'Multi-Layered Cyber Resilience',
      tagline: 'Never rely on a single defensive control',
      description: 'Combining firewalls, air-gaps, host hardening, access management, and human audits ensures that even if one layer fails, backup barriers hold.',
      lesson: 'The Kudankulam 2019 defense held because even though an administrative endpoint was compromised, architectural barriers saved the plant.',
    },
  ];

  const handleCardClick = (id: number) => {
    soundFx.playClick();
    setSelectedConcept(selectedConcept === id ? null : id);
  };

  return (
    <div className="bg-[#0b1220] border border-cyan-900/50 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Diploma Curriculum Concepts
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            8 Key Cybersecurity Concepts Illustrated by 2019
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Click any card to expand deep curriculum analysis
        </div>
      </div>

      {/* Grid of 8 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {concepts.map((item) => {
          const isSelected = selectedConcept === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/60 ring-1 ring-cyan-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    {item.iconComp}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <div className="text-[11px] font-mono text-cyan-400 mb-2">{item.subtitle}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wide text-slate-400 block mb-0.5">
                  Core Takeaway:
                </span>
                <p className="text-[11px] text-slate-300 leading-tight">
                  {item.lesson}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* "What to Say" box */}
      <div className="mt-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
        <div className="font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
          <span>🗣️</span>
          <span>What to Say to Teacher on Cyber Concepts:</span>
        </div>
        <p className="italic text-slate-300">
          “Sir/Ma’am, this 2019 case study touches on eight foundational concepts from our Diploma syllabus—including
          malware analysis, endpoint hardening, network segmentation, and defense in depth. It proves that even when
          malware penetrates an endpoint, strong architecture prevents critical infrastructure failure.”
        </p>
      </div>
    </div>
  );
};
