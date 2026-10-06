import React from 'react';

export const DtrackArchitectureSvg: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          What is Dtrack?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Modular Spyware Architecture
        </p>
      </div>

      {/* Clean Academic SVG Diagram */}
      <div className="max-w-2xl mx-auto">
        <svg
          viewBox="0 0 600 360"
          className="w-full h-auto block select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Connection Lines from Center */}
          <line x1="300" y1="180" x2="300" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="300" y1="180" x2="480" y2="180" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="300" y1="180" x2="300" y2="300" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="300" y1="180" x2="120" y2="180" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />

          {/* Node 1: Top - 💻 System Information */}
          <g transform="translate(300, 60)" filter="url(#cardShadow)">
            <rect x="-85" y="-30" width="170" height="60" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <text x="0" y="-4" textAnchor="middle" fontSize="20">💻</text>
            <text x="0" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              System Info
            </text>
          </g>

          {/* Node 2: Right - 🔍 Reconnaissance */}
          <g transform="translate(480, 180)" filter="url(#cardShadow)">
            <rect x="-85" y="-30" width="170" height="60" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <text x="0" y="-4" textAnchor="middle" fontSize="20">🔍</text>
            <text x="0" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              Reconnaissance
            </text>
          </g>

          {/* Node 3: Bottom - 📁 Files & Data */}
          <g transform="translate(300, 300)" filter="url(#cardShadow)">
            <rect x="-85" y="-30" width="170" height="60" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <text x="0" y="-4" textAnchor="middle" fontSize="20">📁</text>
            <text x="0" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              Files & Data
            </text>
          </g>

          {/* Node 4: Left - ⚙️ Running Processes */}
          <g transform="translate(120, 180)" filter="url(#cardShadow)">
            <rect x="-85" y="-30" width="170" height="60" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <text x="0" y="-4" textAnchor="middle" fontSize="20">⚙️</text>
            <text x="0" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              Processes
            </text>
          </g>

          {/* Center: 🦠 DTRACK */}
          <g transform="translate(300, 180)" filter="url(#cardShadow)">
            <circle cx="0" cy="0" r="50" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2.5" />
            <text x="0" y="-6" textAnchor="middle" fontSize="26">🦠</text>
            <text x="0" y="18" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              DTRACK
            </text>
          </g>
        </svg>
      </div>

      {/* Exactly ONE Sentence Summary */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <p className="text-sm sm:text-base font-medium text-slate-700">
          “Dtrack was malware associated with system and data reconnaissance.”
        </p>
      </div>
    </div>
  );
};
