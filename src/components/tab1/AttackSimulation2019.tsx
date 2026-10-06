import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Search,
  CheckCircle2,
} from 'lucide-react';

export const AttackSimulation2019: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      step: 1,
      label: '1 Threat',
      title: '👤 LAZARUS GROUP',
      sub: 'Researcher-attributed',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    },
    {
      step: 2,
      label: '2 Malware',
      title: '🦠 DTRACK',
      sub: 'Reconnaissance Malware',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
    },
    {
      step: 3,
      label: '3 Infection',
      title: '💻 INFECTED COMPUTER',
      sub: 'Administrative PC Compromised',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
    },
    {
      step: 4,
      label: '4 Recon',
      title: '🔍 RECON',
      sub: 'System & Data Information Gathering',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      step: 5,
      label: '5 Detection',
      title: '⚠️ DETECTION',
      sub: 'Security Alert Triggered',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      step: 6,
      label: '6 Isolation',
      title: '🔐 ISOLATION',
      sub: 'Workstation Severed from Network',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
      step: 7,
      label: '7 Protection',
      title: '☢️ CRITICAL SYSTEMS',
      sub: '🟢 PROTECTED',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
  ];

  const current = steps[currentStep - 1];

  const goToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReplay = () => {
    setCurrentStep(1);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 7) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 7;
          }
          return prev + 1;
        });
      }, 4500); // 4.5s per step = 31.5s total duration
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            2019 Dtrack Incident — Educational Simulation
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Step-by-step visual reconstruction of threat progression and network isolation
          </p>
        </div>

        <div className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 w-fit">
          Step {currentStep} of 7
        </div>
      </div>

      {/* Main Visual Stage Canvas */}
      <div className="relative w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 min-h-[380px] flex flex-col justify-between">
        
        {/* ================= STEP 1: 👤 LAZARUS GROUP ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold border border-purple-300 mb-2">
                Researcher-attributed
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                👤 LAZARUS GROUP
              </h4>
            </div>

            <div className="max-w-md mx-auto p-6 rounded-2xl bg-white border-2 border-purple-200 shadow-sm flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl">👤</span>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Threat Actor
              </div>
              <div className="text-xs text-slate-500">
                Attributed by security researchers to state-sponsored actors
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-purple-600 font-bold text-sm animate-pulse">
              <span>Initiating Payload</span>
              <span>↓</span>
            </div>
          </div>
        )}

        {/* ================= STEP 2: 🦠 DTRACK ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold border border-red-300 mb-2">
                Malware Deployment
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                🦠 DTRACK
              </h4>
            </div>

            <div className="max-w-md mx-auto p-6 rounded-2xl bg-red-50 border-2 border-red-300 shadow-sm flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl animate-bounce">🦠</span>
              <div className="text-xs font-bold uppercase tracking-wider text-red-950">
                Dtrack Reconnaissance Spyware
              </div>
              <div className="text-xs text-red-700">
                Targeting Internet-connected administrative environment
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm animate-pulse">
              <span>Infecting Administrative Endpoint</span>
              <span>↓</span>
            </div>
          </div>
        )}

        {/* ================= STEP 3: 💻 INFECTED COMPUTER ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold border border-red-300 mb-2">
                Endpoint State Transition
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                💻 INFECTED COMPUTER
              </h4>
            </div>

            {/* Visual transition from Normal to Infected */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
              {/* Normal */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 opacity-60 w-56 text-center">
                <span className="text-4xl">💻</span>
                <div className="text-xs font-bold text-slate-700 mt-2">ADMINISTRATIVE PC</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">🟢 Normal State</div>
              </div>

              <div className="text-slate-400 font-bold text-2xl">→</div>

              {/* Infected */}
              <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-400 shadow-md w-56 text-center animate-pulse">
                <span className="text-4xl">💻</span>
                <div className="text-xs font-bold text-red-950 mt-2">ADMINISTRATIVE PC</div>
                <div className="text-[11px] text-red-700 font-extrabold mt-1">🔴 INFECTED</div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: 🔍 RECON ================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300 mb-2">
                Reconnaissance Phase
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                🔍 RECON
              </h4>
            </div>

            {/* Visual Signals Moving Around */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="text-2xl mb-2 animate-bounce">💻 → 📁</div>
                <div className="text-xs font-bold text-slate-900">FILE RECON</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Directory & document listing</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="text-2xl mb-2 animate-pulse">💻 → ⚙️</div>
                <div className="text-xs font-bold text-slate-900">PROCESS RECON</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Active tasks & OS diagnostics</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="text-2xl mb-2 animate-bounce">💻 → 🌐</div>
                <div className="text-xs font-bold text-slate-900">NETWORK RECON</div>
                <div className="text-[11px] text-slate-500 mt-0.5">IP routing & adapters</div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 5: ⚠️ DETECTION ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300 mb-2">
                Security Alert
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                ⚠️ DETECTION
              </h4>
            </div>

            {/* Alert Box */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-amber-50 border-2 border-amber-400 shadow-md space-y-3">
              <span className="text-5xl block animate-bounce">🚨</span>
              <h5 className="text-base font-extrabold text-amber-950">
                SECURITY ALERT DETECTED
              </h5>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                ⚠️ Suspicious Malware Activity
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 6: 🔐 ISOLATION ================= */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-300 mb-2">
                Containment Action
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                🔐 ISOLATION
              </h4>
            </div>

            {/* Separated Network Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto py-2">
              <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-300 shadow-sm w-56 text-center">
                <span className="text-4xl">💻</span>
                <div className="text-xs font-bold text-red-950 mt-1">INFECTED PC</div>
                <div className="text-[11px] text-red-700 font-semibold">Severed from Network</div>
              </div>

              <div className="p-3 rounded-full bg-slate-200 text-slate-700 font-black text-xl">
                ❌
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-blue-300 shadow-sm w-56 text-center">
                <span className="text-4xl">🔐</span>
                <div className="text-xs font-bold text-slate-900 mt-1">AIR-GAP FIREWALL</div>
                <div className="text-[11px] text-blue-700 font-semibold">Boundary Locked</div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 7: ☢️ CRITICAL SYSTEMS (🟢 PROTECTED) ================= */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fadeIn my-auto text-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 mb-2">
                Operational Outcome
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                ☢️ CRITICAL SYSTEMS
              </h4>
            </div>

            {/* Shield Protected Card with Kudankulam Plant Thumbnail */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-emerald-50/80 border-2 border-emerald-400 shadow-md space-y-4">
              <div className="relative w-28 h-20 mx-auto rounded-xl overflow-hidden border border-emerald-300 shadow-sm">
                <img
                  src="/assets/images/kudankulam_units.jpg"
                  alt="Kudankulam Nuclear Power Plant Units 1 & 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900/20 flex items-center justify-center">
                  <ShieldCheck size={32} className="text-white drop-shadow" />
                </div>
              </div>

              <div>
                <h5 className="text-base font-bold text-emerald-950">
                  Kudankulam Reactor OT Systems
                </h5>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                  <span>🟢 PROTECTED</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Playback Controls & 7 Progress Indicators */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              isPlaying
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Pause' : 'Start Animation'}</span>
          </button>

          <button
            onClick={handleReplay}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Replay</span>
          </button>

          <div className="h-5 w-px bg-slate-300 mx-1"></div>

          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-40 text-slate-700 cursor-pointer"
            title="Previous Step"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === 7}
            className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-40 text-slate-700 cursor-pointer"
            title="Next Step"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* 7 Progress Indicator Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {steps.map((s) => {
            const isActive = currentStep === s.step;
            const isCompleted = currentStep > s.step;
            return (
              <button
                key={s.step}
                onClick={() => goToStep(s.step)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : isCompleted
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mandatory Clean Educational Disclaimer */}
      <div className="text-center text-xs text-slate-400">
        Educational reconstruction based on reported information.
      </div>
    </div>
  );
};
