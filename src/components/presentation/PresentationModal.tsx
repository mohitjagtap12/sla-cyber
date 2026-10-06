import React, { useState } from 'react';
import { PresentationSlide } from '../../types';
import { ChevronLeft, ChevronRight, X, Volume2, Mic, Play, Shield, AlertTriangle, Copy, Check } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const slides: PresentationSlide[] = [
    {
      id: 1,
      caseStudy: '2019-dtrack',
      title: 'Kudankulam Nuclear Power Plant Overview',
      subtitle: 'Critical Energy Infrastructure in Tamil Nadu',
      keyPoints: [
        'Kudankulam Nuclear Power Plant (KKNPP) operates 2 × 1000 MWe VVER pressurized water reactors.',
        'Nuclear facilities are classified as Critical Information Infrastructure (CII).',
        'In 2019, a malware incident was detected, investigated, and contained.',
      ],
      whatToSay: [
        '“Respected teacher, Kudankulam Nuclear Power Plant is one of India’s largest nuclear energy projects, located in Tamil Nadu.”',
        '“Because nuclear facilities supply critical power to the nation, they represent Critical Information Infrastructure requiring strict cybersecurity defenses.”',
        '“Our SLA study analyzes what happened during the 2019 Dtrack incident and how plant safety was preserved.”',
      ],
      visualFocus: 'Coastal Nuclear Plant Architecture & Air-Gapped Reactor Unit Domes',
    },
    {
      id: 2,
      caseStudy: '2019-dtrack',
      title: '2019 – What Happened?',
      subtitle: 'Malware Detected on Administrative Network',
      keyPoints: [
        'Malware was identified as Dtrack on an administrative/Internet-facing workstation.',
        'The plant operational control network was physically isolated and air-gapped.',
        'Official statements from NPCIL confirmed that critical plant systems were NOT affected.',
      ],
      whatToSay: [
        '“Ma’am, in October 2019, malware identified as Dtrack was detected on an administrative computer.”',
        '“It is critical to clarify that the nuclear reactor was never hacked. The affected PC was merely used for administrative office tasks.”',
        '“Official statements confirmed that the reactor control systems remained completely safe and operational.”',
      ],
      visualFocus: 'Administrative PC vs Critical SCADA Operational Separation',
    },
    {
      id: 3,
      caseStudy: '2019-dtrack',
      title: 'What is Dtrack Malware?',
      subtitle: 'Reconnaissance & Spyware Architecture',
      keyPoints: [
        'Dtrack is a specialized reconnaissance tool associated with threat groups targeting critical infrastructure.',
        'Capabilities include system profiling, process listing, keystroke logging, and local network enumeration.',
        'It was designed for information gathering rather than physical kinetic sabotage.',
      ],
      whatToSay: [
        '“Sir, Dtrack is reconnaissance spyware. Its main purpose was to gather information—such as system specifications, running processes, and network IP addresses.”',
        '“It did not contain code designed to manipulate industrial PLCs or reactor valves.”',
      ],
      visualFocus: 'Dtrack Central Reconnaissance Hub & Capability Modules',
    },
    {
      id: 4,
      caseStudy: '2019-dtrack',
      title: '2019 Incident Simulation: Lateral Movement Blocked',
      subtitle: 'Purdue Model Defense in Depth',
      keyPoints: [
        'Step 1 to 4: Infection of administrative endpoint and local data reconnaissance.',
        'Step 5: Malware attempted traversal toward plant network, but hit the security boundary.',
        'Step 6: Air-gaps and firewalls completely blocked the malware, keeping critical systems 100% safe.',
      ],
      whatToSay: [
        '“Ma’am, in our interactive simulation, we see how the attack unfolded. When the malware attempted to reach beyond the administrative network, it was blocked by the security boundary.”',
        '“The physical air-gap ensured that no malware packets could physically reach the reactor control room.”',
      ],
      visualFocus: 'Animated Attack Simulation Canvas: Step 1 → 6',
    },
    {
      id: 5,
      caseStudy: '2019-dtrack',
      title: 'Network Segmentation: IT vs OT',
      subtitle: 'The Purdue Model in Nuclear Facilities',
      keyPoints: [
        'Purdue Levels 4 & 5 (IT): Corporate emails, office computers, Internet access.',
        'Purdue Levels 0 to 3 (OT): Reactor instrumentation, control rods, SCADA sensors.',
        'DMZ & Air-Gap: Unidirectional hardware data diodes and complete network separation.',
      ],
      whatToSay: [
        '“Sir, network segmentation is the most important defense concept in this case study.”',
        '“By isolating administrative IT from industrial OT, a compromise in the business office has zero path into the reactor.”',
      ],
      visualFocus: 'Purdue Architecture Diagram with Lateral Threat Test',
    },
    {
      id: 6,
      caseStudy: '2019-dtrack',
      title: '2019 Myth vs Fact Analysis',
      subtitle: 'Correcting Sensationalized Media Misconceptions',
      keyPoints: [
        'Myth: Hackers controlled Kudankulam nuclear rods.',
        'Fact: Administrative endpoint infected; reactor OT never connected or accessed.',
        'Myth: Dtrack caused a power blackout or plant shutdown.',
        'Fact: Power generation and electricity supply continued 100% uninterrupted.',
      ],
      whatToSay: [
        '“Ma’am, in cybersecurity reporting, myths often arise. Many headlines claimed the nuclear reactor was hacked.”',
        '“As engineering students, we must emphasize the factual distinction: an administrative PC was compromised, but the nuclear reactor was never touched.”',
      ],
      visualFocus: 'Myth vs Fact Matrix Card',
    },
    {
      id: 7,
      caseStudy: '2026-data-leak',
      title: '2026 – Reported Third-Party Data Leak',
      subtitle: 'Supply Chain & Contractor Cybersecurity Risk',
      keyPoints: [
        'A completely separate case study involving contemporary 2026 reporting.',
        'Involved a third-party engineering contractor or vendor repository.',
        'Reported data claims: approximately 19,000 files and ~14.3 GB of technical documents.',
      ],
      whatToSay: [
        '“Respected teacher, moving to Tab 2: this is a completely separate incident from 2026.”',
        '“This case study focuses on supply chain and third-party risk. An external contractor associated with Kudankulam reportedly suffered a data leak.”',
      ],
      visualFocus: 'Third-Party Contractor IT Server & Exfiltration Pipe',
    },
    {
      id: 8,
      caseStudy: '2026-data-leak',
      title: 'Reported Scope: ~19,000 Files & ~14.3 GB',
      subtitle: 'Understanding Data Exposure vs Operational Control',
      keyPoints: [
        'The reported archive contained CAD schematics, procurement documents, and contractor letters.',
        'Possession of engineering blueprints does NOT grant control over air-gapped reactor computers.',
        'Crucial academic lesson on protecting supply chain partners.',
      ],
      whatToSay: [
        '“Ma’am, contemporary reporting cited roughly 19,000 files and 14.3 GB of data leaked from the contractor.”',
        '“Even though engineering documents were reported exposed, this did not give adversaries access to the plant’s live operational controls.”',
      ],
      visualFocus: 'Reported Metrics Counters & Staged Data Repositories',
    },
    {
      id: 9,
      caseStudy: '2026-data-leak',
      title: '2026 Data Leak Simulation',
      subtitle: 'Vendor Compromise to Public Data Exposure',
      keyPoints: [
        'Step 1 & 2: Contractor server credentials breached by unauthorized actors.',
        'Step 3 & 4: Collection and exfiltration of stored engineering files.',
        'Step 5 & 6: Regulatory investigation, vendor token revocation, and plant verification.',
      ],
      whatToSay: [
        '“Sir, our second simulation reconstructs how the contractor environment was breached.”',
        '“Files were extracted from the vendor server to public leak sites, prompting immediate supply chain audits by national authorities.”',
      ],
      visualFocus: '2026 Supply Chain Exfiltration Animation Canvas',
    },
    {
      id: 10,
      caseStudy: 'universal',
      title: '2019 vs 2026: Side-by-Side Comparison',
      subtitle: 'Internal IT Malware vs External Contractor Leak',
      keyPoints: [
        '2019: Internal administrative endpoint infected with Dtrack malware. Plant systems safe.',
        '2026: External contractor server breached with reported file exposure. Plant systems safe.',
        'Both incidents prove the resilience of air-gapping, but highlight different threat surfaces.',
      ],
      whatToSay: [
        '“Ma’am, this comparison table summarizes both incidents side-by-side.”',
        '“In 2019, the threat was internal malware on an administrative PC. In 2026, the threat was external supply chain data exposure. In both cases, the nuclear reactor remained safe.”',
      ],
      visualFocus: 'Side-by-Side Comparison Timeline and Table',
    },
    {
      id: 11,
      caseStudy: 'universal',
      title: 'Polytechnic Engineering Lessons Learned',
      subtitle: 'Holistic Critical Infrastructure Protection',
      keyPoints: [
        '1. Strong Network Segmentation (Air-Gapping).',
        '2. Endpoint Detection and Response (EDR).',
        '3. Third-Party Vendor Risk Management & Zero Trust.',
        '4. Continuous 24/7 Security Operations Monitoring.',
      ],
      whatToSay: [
        '“Sir, as Computer Engineering diploma students, our key takeaways are that critical infrastructure requires defense in depth—combining endpoint hardening, network segmentation, and third-party vendor audits.”',
      ],
      visualFocus: '6-Layer Defense Shield & Vendor Governance Card',
    },
    {
      id: 12,
      caseStudy: 'universal',
      title: 'Final Conclusion & Academic References',
      subtitle: '“Cybersecurity is about protecting critical infrastructure.”',
      keyPoints: [
        'Official statements from PIB, DAE, and CERT-In confirm critical reactor systems remained unaffected.',
        '2019 taught us internal segmentation; 2026 taught us supply chain vigilance.',
        'Thank you for your time. We now welcome questions from the evaluators.',
      ],
      whatToSay: [
        '“To conclude our presentation: cybersecurity is not just about protecting personal computers—it is about protecting national critical infrastructure.”',
        '“Both Kudankulam case studies show that multi-layered cyber defenses work. Thank you, teachers!”',
      ],
      visualFocus: 'Nuclear Shield Triad & Verified Government Sources',
    },
  ];

  if (!isOpen) return null;

  const currentSlide = slides[currentSlideIndex];

  const handleNext = () => {
    soundFx.playClick();
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    soundFx.playClick();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleSpeakNotes = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const text = currentSlide.whatToSay.join(' ');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopyNotes = () => {
    const text = currentSlide.whatToSay.join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#04070e]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-700 text-cyan-300">
            <Mic size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Presentation Mode · Slide {currentSlideIndex + 1} of {slides.length}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                currentSlide.caseStudy === '2019-dtrack'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  : currentSlide.caseStudy === '2026-data-leak'
                  ? 'bg-red-950 text-red-300 border border-red-800'
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
              }`}>
                {currentSlide.caseStudy.toUpperCase()}
              </span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-white truncate max-w-xl">
              {currentSlide.title}
            </h2>
          </div>
        </div>

        {/* Exit Presentation */}
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
        >
          <X size={16} />
          <span>Exit Presentation</span>
        </button>
      </div>

      {/* Main Slide Content Area */}
      <div className="my-6 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 7 cols: Key Points & Visual Concept */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-sm font-mono text-cyan-400 font-semibold">
            {currentSlide.subtitle}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {currentSlide.title}
          </h3>

          <div className="space-y-3 pt-2">
            {currentSlide.keyPoints.map((point, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-sm text-slate-200 leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-bold">Visual Focus for Teacher: </span>
            {currentSlide.visualFocus}
          </div>
        </div>

        {/* Right 5 cols: "WHAT TO SAY" Speaker Notes Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border-2 border-cyan-500/60 rounded-2xl p-5 shadow-2xl space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xl">🗣️</span>
              <div>
                <h4 className="text-sm font-bold text-white">Student Speaker Script</h4>
                <span className="text-[10px] font-mono text-cyan-400">What to say to your teacher</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleSpeakNotes}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                  isSpeaking
                    ? 'bg-amber-950 border-amber-600 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title="Practice text-to-speech audio pronunciation"
              >
                <Volume2 size={13} />
                <span className="text-[11px]">{isSpeaking ? 'Stop' : 'Rehearse'}</span>
              </button>

              <button
                onClick={handleCopyNotes}
                className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy script"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-cyan-100 leading-relaxed font-sans">
            {currentSlide.whatToSay.map((sentence, sIdx) => (
              <p key={sIdx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 italic text-slate-200">
                {sentence}
              </p>
            ))}
          </div>

          <div className="text-[10px] text-slate-400 font-mono pt-1 text-center">
            Tip: Speak at a calm, deliberate pace and point to the diagrams on screen.
          </div>
        </div>
      </div>

      {/* Slide Stepper Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-1 overflow-x-auto max-w-full">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                soundFx.playClick();
                setCurrentSlideIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                currentSlideIndex === idx
                  ? 'w-8 bg-cyan-400 shadow-md shadow-cyan-400/50'
                  : 'w-3 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Slide ${idx + 1}: ${s.title}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 text-xs font-semibold transition-all"
          >
            <ChevronLeft size={16} />
            <span>Previous Slide</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            {currentSlideIndex + 1} / {slides.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-30 text-xs font-semibold shadow-lg shadow-cyan-950/60 transition-all"
          >
            <span>Next Slide</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
