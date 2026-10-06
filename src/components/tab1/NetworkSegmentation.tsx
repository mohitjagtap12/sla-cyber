import React, { useState } from 'react';
import { ArrowDown, Play, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const NetworkSegmentation: React.FC = () => {
  const [packetState, setPacketState] = useState<'idle' | 'in-it' | 'blocked'>('idle');

  const runTestPacket = () => {
    setPacketState('in-it');
    setTimeout(() => {
      setPacketState('blocked');
    }, 1200);
  };

  const resetTest = () => {
    setPacketState('idle');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Network Segmentation & Air-Gapping
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Architectural isolation preventing lateral movement of malware
          </p>
        </div>

        <button
          onClick={packetState === 'blocked' ? resetTest : runTestPacket}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer w-fit"
        >
          <Play size={14} />
          <span>{packetState === 'blocked' ? 'Reset Test' : 'Test Threat Packet'}</span>
        </button>
      </div>

      {/* Large Illustrated Diagram */}
      <div className="max-w-xl mx-auto flex flex-col items-center space-y-4 my-4">
        {/* Box 1: Administrative Network (Blue) */}
        <div className={`w-full p-6 rounded-2xl border-2 transition-all ${
          packetState === 'in-it'
            ? 'bg-red-50 border-red-400 shadow-md'
            : 'bg-blue-50/60 border-blue-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌐</span>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Administrative / IT Network
                </h4>
                <p className="text-xs text-slate-500">
                  Email, office workstations, reports (Internet-connected)
                </p>
              </div>
            </div>
            {packetState === 'in-it' && (
              <span className="px-2.5 py-1 rounded bg-red-100 text-red-800 text-xs font-bold animate-pulse">
                🦠 Malware Active
              </span>
            )}
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex flex-col items-center">
          <ArrowDown size={28} className="text-slate-400" />
        </div>

        {/* Box 2: 🔐 FIREWALL / AIR-GAP */}
        <div className={`w-full p-5 rounded-2xl border-2 transition-all text-center ${
          packetState === 'blocked'
            ? 'bg-amber-50 border-amber-400 shadow-md'
            : 'bg-slate-100 border-slate-300'
        }`}>
          <div className="flex items-center justify-center gap-2 text-slate-900 font-bold text-base">
            <span className="text-xl">🔐</span>
            <span>SECURITY BOUNDARY / FIREWALL</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Physical air-gap and hardware data diodes separating IT and OT
          </p>

          {packetState === 'blocked' && (
            <div className="mt-3 p-2 bg-red-100 border border-red-300 rounded-lg text-xs font-bold text-red-800 flex items-center justify-center gap-2 animate-bounce">
              <ShieldAlert size={16} />
              <span>THREAT BLOCKED: Lateral traversal prohibited!</span>
            </div>
          )}
        </div>

        {/* Down Arrow */}
        <div className="flex flex-col items-center">
          <ArrowDown size={28} className="text-slate-400" />
        </div>

        {/* Box 3: ☢️ Critical Plant Systems (Green) */}
        <div className="w-full p-6 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">☢️</span>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Critical Plant / OT Systems
                </h4>
                <p className="text-xs text-slate-600">
                  Reactor instrumentation, turbine controls, safety rods
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>Reported Safe</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Small Plant Photograph Underneath Diagram */}
      <div className="mt-6 max-w-xl mx-auto overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src="/assets/images/kudankulam_reactor.jpg"
            alt="Critical Infrastructure Protection at Kudankulam Nuclear Power Plant"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://upload.wikimedia.org/wikipedia/commons/f/f7/Kudankulam_04710079_%288386517846%29.jpg';
            }}
          />
        </div>
        <div className="p-2.5 text-center text-xs text-slate-600 bg-white border-t border-slate-100 font-medium">
          Critical Infrastructure Protection — Kudankulam Nuclear Power Plant
        </div>
      </div>

      {/* Summary Note */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <p className="text-sm font-medium text-slate-700">
          “Network segmentation helps limit movement of threats between IT and critical operational environments.”
        </p>
      </div>
    </div>
  );
};
