import React from 'react';

interface NuclearPlantSvgProps {
  className?: string;
  status?: 'nominal' | 'alert' | 'secure';
}

export const NuclearPlantSvg: React.FC<NuclearPlantSvgProps> = ({
  className = 'w-full h-auto',
  status = 'secure',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm ${className}`}>
      <svg
        viewBox="0 0 800 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block select-none"
      >
        <defs>
          <linearGradient id="skyAcademic" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="70%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="dome1Academic" x1="240" y1="120" x2="380" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="dome2Academic" x1="420" y1="140" x2="540" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="seaAcademic" x1="0" y1="310" x2="0" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Clear Sky */}
        <rect width="800" height="440" fill="url(#skyAcademic)" />

        {/* Subtle Horizon Hills */}
        <path d="M0 290 Q 200 270 400 285 T 800 275 L 800 315 L 0 315 Z" fill="#E2E8F0" />

        {/* Clean Coastal Ocean (Gulf of Mannar, Tamil Nadu) */}
        <rect x="0" y="315" width="800" height="125" fill="url(#seaAcademic)" />
        <path d="M0 315 Q 200 318 400 315 T 800 317" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M0 335 Q 220 338 440 334 T 800 336" stroke="#BAE6FD" strokeWidth="1" fill="none" opacity="0.6" />

        {/* Turbine Island & Admin Building Complex */}
        <g id="complex" filter="url(#softShadow)">
          <rect x="100" y="220" width="130" height="95" rx="4" fill="#475569" />
          <rect x="115" y="235" width="30" height="25" fill="#F8FAFC" rx="2" />
          <rect x="155" y="235" width="30" height="25" fill="#F8FAFC" rx="2" />
          <rect x="115" y="270" width="70" height="20" fill="#334155" rx="2" />
          <text x="165" y="305" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="sans-serif">
            TURBINE COMPLEX
          </text>
        </g>

        {/* Kudankulam Reactor Unit 1 (VVER-1000) */}
        <g id="unit1" filter="url(#softShadow)">
          {/* Cylinder Body */}
          <rect x="240" y="180" width="150" height="135" rx="4" fill="url(#dome1Academic)" stroke="#64748B" strokeWidth="1.5" />
          {/* Hemispherical Dome */}
          <path d="M 240 180 A 75 75 0 0 1 390 180 Z" fill="url(#dome1Academic)" stroke="#475569" strokeWidth="2" />
          {/* Dome Ribs */}
          <path d="M 275 180 A 40 40 0 0 1 355 180" stroke="#64748B" strokeWidth="1.5" fill="none" opacity="0.7" />
          {/* Unit 1 Badge */}
          <rect x="275" y="240" width="80" height="24" rx="4" fill="#0F172A" />
          <text x="315" y="256" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            KKNPP UNIT 1
          </text>
        </g>

        {/* Kudankulam Reactor Unit 2 */}
        <g id="unit2" filter="url(#softShadow)">
          {/* Cylinder Body */}
          <rect x="410" y="195" width="140" height="120" rx="4" fill="url(#dome2Academic)" stroke="#64748B" strokeWidth="1.5" />
          {/* Dome */}
          <path d="M 410 195 A 70 70 0 0 1 550 195 Z" fill="url(#dome2Academic)" stroke="#475569" strokeWidth="2" />
          <path d="M 445 195 A 35 35 0 0 1 515 195" stroke="#64748B" strokeWidth="1.5" fill="none" opacity="0.7" />
          {/* Unit 2 Badge */}
          <rect x="440" y="250" width="80" height="24" rx="4" fill="#0F172A" />
          <text x="480" y="266" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            KKNPP UNIT 2
          </text>
        </g>

        {/* Grid Transmission Pylons */}
        <g id="transmission" stroke="#64748B" strokeWidth="1.5">
          <path d="M 640 315 L 655 200 L 670 315 M 644 250 L 666 250 M 648 220 L 662 220" />
          <path d="M 710 315 L 725 210 L 740 315 M 714 260 L 736 260 M 718 230 L 732 230" />
          <line x1="550" y1="230" x2="655" y2="210" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="655" y1="210" x2="725" y2="220" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 2" />
        </g>

        {/* Perimeter Security Barrier */}
        <line x1="60" y1="315" x2="760" y2="315" stroke="#16A34A" strokeWidth="3" />
        {[100, 220, 360, 480, 600, 720].map((x) => (
          <circle key={x} cx={x} cy="315" r="4" fill="#16A34A" />
        ))}

        {/* Subtle Cybersecurity Shield Overlay */}
        <g transform="translate(680, 60)" filter="url(#softShadow)">
          <circle cx="40" cy="40" r="36" fill="#0F172A" />
          <path
            d="M 40 18 L 62 27 C 62 45 40 60 40 60 C 40 60 18 45 18 27 Z"
            fill="#0284C7"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <path
            d="M 33 39 L 38 44 L 48 34"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Educational Informational Labels */}
        <g transform="translate(30, 30)">
          <rect width="210" height="52" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="url(#softShadow)" />
          <text x="14" y="22" fill="#0369A1" fontSize="10" fontWeight="700" letterSpacing="0.05em">FACILITY LOCATION</text>
          <text x="14" y="40" fill="#0F172A" fontSize="13" fontWeight="600">Radhapuram, Tamil Nadu</text>
        </g>
      </svg>

      {/* Clean Academic Caption */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-slate-800">Kudankulam Nuclear Power Plant (KKNPP)</span>
          <span>·</span>
          <span>Critical Infrastructure</span>
        </div>
        <div className="text-emerald-700 font-medium">
          🟢 Control Systems Standalone & Isolated
        </div>
      </div>
    </div>
  );
};
