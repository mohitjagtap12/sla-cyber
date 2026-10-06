import React from 'react';

export const ContractorBreachSvg: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Third-Party Contractor Environment
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          External supply chain breach vector
        </p>
      </div>

      {/* Clean Academic SVG Diagram */}
      <div className="max-w-2xl mx-auto">
        <svg
          viewBox="0 0 680 320"
          className="w-full h-auto block select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="boxShadowAcademic" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Connection Line */}
          <line x1="160" y1="160" x2="340" y2="160" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="4 4" />
          <line x1="340" y1="160" x2="520" y2="160" stroke="#EF4444" strokeWidth="3" />

          {/* Box 1: 🏢 Contractor IT */}
          <g transform="translate(160, 160)" filter="url(#boxShadowAcademic)">
            <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="0" y="-14" textAnchor="middle" fontSize="32">🏢</text>
            <text x="0" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
              CONTRACTOR IT
            </text>
            <text x="0" y="32" textAnchor="middle" fill="#64748B" fontSize="10">
              External Vendor Office
            </text>
          </g>

          {/* Box 2: 🖥️ Vendor Server */}
          <g transform="translate(340, 160)" filter="url(#boxShadowAcademic)">
            <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
            <text x="0" y="-14" textAnchor="middle" fontSize="32">🖥️</text>
            <text x="0" y="16" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="700">
              VENDOR SERVER
            </text>
            <text x="0" y="32" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="600">
              📁 Staged Documents
            </text>
          </g>

          {/* Box 3: 🔴 Public Data Exposure */}
          <g transform="translate(520, 160)" filter="url(#boxShadowAcademic)">
            <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#FFF1F2" stroke="#E11D48" strokeWidth="2" />
            <text x="0" y="-14" textAnchor="middle" fontSize="32">💾</text>
            <text x="0" y="16" textAnchor="middle" fill="#9F1239" fontSize="12" fontWeight="700">
              REPORTED LEAK
            </text>
            <text x="0" y="32" textAnchor="middle" fill="#BE123C" fontSize="10">
              Public Exposure
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <p className="text-xs sm:text-sm font-medium text-slate-700">
          “Contemporary reporting in 2026 described a data breach involving a third-party contractor environment.”
        </p>
      </div>
    </div>
  );
};
