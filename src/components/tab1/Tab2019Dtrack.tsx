import React from 'react';
import { DtrackArchitectureSvg } from '../svg/DtrackArchitectureSvg';
import { AttackSimulation2019 } from './AttackSimulation2019';
import { NetworkSegmentation } from './NetworkSegmentation';
import { SecurityLayersShield, ImpactComparison2019, MythFactMatrix2019 } from './SecurityLayersShield';
import { CheckCircle2, ArrowDown, Shield } from 'lucide-react';

export const Tab2019Dtrack: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById('about-kudankulam');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-10">
      {/* 1. HERO SECTION WITH REAL KUDANKULAM PLANT PHOTOGRAPH */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              <span role="img" aria-label="nuclear">☢️</span>
              <span>Case Study 01</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Kudankulam Nuclear Power Plant
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              Cybersecurity Case Study
            </h2>

            <p className="text-sm text-slate-500 font-medium">
              2019 Dtrack Incident + 2026 Reported Data Leak
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Explore Case Study</span>
                <ArrowDown size={16} />
              </button>
            </div>
          </div>

          {/* Right: Large Real Kudankulam Nuclear Power Plant Photograph */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src="/assets/images/kudankulam_hero.jpg"
                  alt="Kudankulam Nuclear Power Plant"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to Wikipedia direct URL if needed
                    (e.target as HTMLImageElement).src =
                      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kudankulam_NPP.jpg';
                  }}
                />
              </div>
              <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Kudankulam Nuclear Power Plant</span>
                <span>Visual context • Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION: ABOUT KUDANKULAM (TWO-COLUMN WITH REAL PHOTO) */}
      <section id="about-kudankulam" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Plant Photograph */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src="/assets/images/kudankulam_units.jpg"
                  alt="Kudankulam Nuclear Power Plant Unit 1 and 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Kudankulam_Nuclear_Power_Plant_Unit_1_and_2.jpg';
                  }}
                />
              </div>
              <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                Kudankulam Units 1 & 2 reactor domes — visual context
              </div>
            </div>
          </div>

          {/* Right: Short Bullet Points */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              About Kudankulam
            </h3>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Major nuclear power facility</strong> located in Tamil Nadu, India</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Important critical infrastructure</strong> supplying national power grid</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Requires strong physical</strong> and air-gapped cybersecurity protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 2019 INCIDENT SECTION WITH FACILITY PHOTO BESIDE HEADING */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Case Study 01
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              🦠 2019 Dtrack Malware Incident
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Administrative network infection and architectural defense
            </p>
          </div>

          {/* Small Plant Context Image */}
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200 shrink-0">
            <img
              src="/assets/images/kudankulam_hero.jpg"
              alt="Kudankulam Nuclear Power Plant"
              className="w-16 h-12 rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="text-left text-xs">
              <span className="font-bold text-slate-800 block">Kudankulam Facility</span>
              <span className="text-slate-500 text-[11px]">Visual Context</span>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {[
            { icon: '🌐', label: 'Network', sub: 'Administrative IT' },
            { icon: '🦠', label: 'Malware', sub: 'Dtrack Detected' },
            { icon: '💻', label: 'Computer', sub: 'Office PC' },
            { icon: '🚨', label: 'Detection', sub: 'Alert Raised' },
            { icon: '🔐', label: 'Isolation', sub: 'Threat Contained' },
            { icon: '☢️', label: 'Critical Systems', sub: '🟢 Protected' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center flex flex-col items-center justify-center ${
                idx === 5
                  ? 'bg-emerald-50 border-emerald-300'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className="text-3xl mb-1.5">{item.icon}</span>
              <div className="text-xs font-bold text-slate-900 leading-tight">{item.label}</div>
              <div className={`text-[11px] font-medium mt-0.5 ${idx === 5 ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 10. WHAT HAPPENED? (2-COLUMN LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-slate-100">
          {/* Left: Administrative Endpoint Visual */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="relative mb-3">
              <span className="text-6xl">💻</span>
              <span className="text-3xl absolute -bottom-2 -right-2">🦠</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Administrative Endpoint Compromise
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Dtrack was detected on an administrative office PC. It was completely isolated from reactor control networks.
            </p>
          </div>

          {/* Right: What happened? + Bullets */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xl font-bold text-slate-900">
              What happened?
            </h4>

            <div className="space-y-2.5 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Dtrack malware was detected</strong> on an internal administrative computer</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>An administrative/IT computer</strong> was involved, not control systems</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>The incident was investigated</strong> by national cyber authorities (CERT-In)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Critical plant systems</strong> were officially reported as unaffected</span>
              </div>
            </div>

            {/* Green visual card */}
            <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex items-center gap-3">
              <CheckCircle2 size={24} className="text-emerald-600 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-emerald-950">
                  🟢 Critical plant systems: Reported unaffected
                </h5>
                <p className="text-xs text-emerald-700">
                  Reactor control, cooling, and electricity generation continued safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 2019 DTRACK MALWARE ARCHITECTURE */}
      <section>
        <DtrackArchitectureSvg />
      </section>

      {/* 12. 2019 ATTACK SIMULATION (WITH SMALL PLANT IMAGE BESIDE CRITICAL SYSTEMS) */}
      <section>
        <AttackSimulation2019 />
      </section>

      {/* 13. 2019 NETWORK DIAGRAM (WITH PLANT PHOTOGRAPH UNDERNEATH) */}
      <section>
        <NetworkSegmentation />
      </section>

      {/* 14. 2019 IMPACT (3 Visual Cards) */}
      <section>
        <ImpactComparison2019 />
      </section>

      {/* 15. 2019 SECURITY LESSONS */}
      <section>
        <SecurityLayersShield />
      </section>

      {/* MYTH VS FACT */}
      <section>
        <MythFactMatrix2019 />
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
            {/* Subtle transparent cybersecurity shield */}
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
