import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export const DataLeakSimulation2026: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [fileCount, setFileCount] = useState<number>(0);
  const totalSteps = 10;

  // Counter animation for Step 7: 0 -> 5000 -> 10000 -> 19000
  useEffect(() => {
    if (currentStep === 7) {
      let count = 0;
      const interval = setInterval(() => {
        count += 2500;
        if (count >= 19000) {
          count = 19000;
          clearInterval(interval);
        }
        setFileCount(count);
      }, 50);
      return () => clearInterval(interval);
    } else {
      setFileCount(0);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleReplay = () => {
    setCurrentStep(1);
    setFileCount(0);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Top Title */}
      <div className="text-center pb-4 border-b border-slate-100">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          2026 REPORTED DATA LEAK
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Step-by-Step Educational Simulation
        </p>
      </div>

      {/* Center Stage: EXACTLY ONE MAJOR STAGE AT A TIME */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
        
        {/* STEP 1: ☢️ KUDANKULAM PROJECT */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md w-64 aspect-video bg-white">
              <img
                src="/assets/images/kudankulam_hero.jpg"
                alt="Kudankulam Nuclear Power Plant"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
                <span>☢️</span>
                <span>KUDANKULAM PROJECT</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-500">
                Project Context
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: 🏢 RELIANCE INFRASTRUCTURE */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-blue-50 border-2 border-blue-400 flex items-center justify-center text-5xl shadow-md">
              🏢
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                RELIANCE INFRASTRUCTURE
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                Contractor / Vendor
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: ☁️ YOTTA */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-blue-50 border-2 border-blue-400 flex items-center justify-center text-5xl shadow-md">
              ☁️
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                YOTTA
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                Third-Party Data Centre
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: 🖥️ HOSTED SERVER (⚠️ Suspicious Activity) */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-amber-50 border-2 border-amber-500 flex items-center justify-center text-5xl shadow-md animate-pulse">
              🖥️
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                HOSTED SERVER
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                ⚠️ Suspicious Activity
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: 🔐 SECURITY RESPONSE */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-5xl shadow-md">
              🔐
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                SECURITY RESPONSE
              </div>
            </div>
            {/* Visual response progression */}
            <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span>🔍</span> Monitoring
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span>🔐</span> Response
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span>🔎</span> Investigation
              </span>
            </div>
          </div>
        )}

        {/* STEP 6: 👤 WORLD LEAKS */}
        {currentStep === 6 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center text-5xl shadow-md">
              👤
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                WORLD LEAKS
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                Reported Claim
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: 📁 ~19,000 REPORTED FILES */}
        {currentStep === 7 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="flex items-center gap-2 text-3xl py-1 animate-pulse">
              <span>📄</span>
              <span>📄</span>
              <span>📁</span>
              <span>📄</span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-red-600 font-mono tracking-tight">
                ~{fileCount.toLocaleString()}
              </div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                REPORTED FILES
              </div>
              <div className="mt-1 inline-block px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-[11px] font-bold">
                REPORTED
              </div>
            </div>
          </div>
        )}

        {/* STEP 8: 💾 ~14.3 GB */}
        {currentStep === 8 && (
          <div className="space-y-4 animate-fadeIn flex flex-col items-center max-w-md">
            <div className="w-24 h-24 rounded-3xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center text-5xl shadow-md">
              💾
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-amber-600 font-mono tracking-tight">
                ~14.3 GB
              </div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                REPORTED DATA
              </div>
              <div className="mt-1 inline-block px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">
                REPORTED
              </div>
            </div>
          </div>
        )}

        {/* STEP 9: 📁 WHAT WAS IN THE FILES? */}
        {currentStep === 9 && (
          <div className="space-y-5 animate-fadeIn flex flex-col items-center max-w-lg w-full">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>📁</span>
              <span>WHAT WAS IN THE FILES?</span>
            </div>

            {/* Visual Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <span className="text-2xl">📋</span>
                <span className="text-xs font-bold text-slate-800">Project Documents</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <span className="text-2xl">⚙️</span>
                <span className="text-xs font-bold text-slate-800">Technical Documents</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <span className="text-2xl">🏗️</span>
                <span className="text-xs font-bold text-slate-800">Engineering Information</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                <span className="text-2xl">📊</span>
                <span className="text-xs font-bold text-slate-800">Project / Contract Records</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 10: 🔴 REPORTED DATA EXPOSURE & 🔎 INVESTIGATION */}
        {currentStep === 10 && (
          <div className="space-y-5 animate-fadeIn flex flex-col items-center max-w-md">
            {/* Visual flow: Server -> World -> Exposure */}
            <div className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl">
              <span className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">🖥️</span>
              <span className="text-red-400 font-bold">→</span>
              <span className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">🌐</span>
              <span className="text-red-400 font-bold">→</span>
              <span className="p-3 bg-red-100 rounded-2xl border border-red-300 shadow-sm">🔴</span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-700 tracking-tight">
                REPORTED DATA EXPOSURE
              </div>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-sm">
                <span>🔎</span>
                <span>INVESTIGATION INITIATED</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Step Stepper & Playback Controls */}
      <div className="space-y-4">
        {/* Step Indicator Text */}
        <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-500">
          Step {currentStep} of {totalSteps}
        </div>

        {/* Stepper Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-40 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>

          <button
            onClick={handleReplay}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-600 text-xs font-medium transition-colors cursor-pointer"
            title="Restart from Step 1"
          >
            <RotateCcw size={14} />
            <span>Replay</span>
          </button>
        </div>

        {/* Visual Progress Bar (● ━━━ ● ━━━ ○) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-sm mx-auto py-1">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNum = idx + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            return (
              <React.Fragment key={stepNum}>
                <button
                  onClick={() => setCurrentStep(stepNum)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-red-600 scale-125 ring-2 ring-red-300'
                      : isCompleted
                      ? 'bg-emerald-500'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`Step ${stepNum}`}
                />
                {idx < totalSteps - 1 && (
                  <div
                    className={`h-0.5 w-3 sm:w-5 transition-colors ${
                      currentStep > stepNum ? 'bg-emerald-400' : 'bg-slate-200'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Mandatory Exact Disclaimers Underneath */}
      <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-100 space-y-1">
        <p>Educational reconstruction based on reported information.</p>
        <p className="text-[11px] text-slate-400">
          Reported information does not establish the exact technical attack path.
        </p>
      </div>
    </div>
  );
};
