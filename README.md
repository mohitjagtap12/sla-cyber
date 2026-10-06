# Kudankulam Nuclear Power Plant – Cybersecurity Case Study

### Polytechnic Diploma in Computer Engineering – Interactive Cyber Security SLA

A clean, modern, highly visual, and interactive SLA educational application comparing two major critical infrastructure cybersecurity incidents:

1. **Tab 1: 🦠 2019 – Dtrack Malware Incident** (Administrative endpoint reconnaissance, lateral movement blocked by air-gap, critical plant systems unaffected)
2. **Tab 2: 🔴 2026 – Reported Data Leak / Third-Party Breach** (Supply chain risk, third-party contractor environment breach, ~19,000 reported files / 14.3 GB, reactor safety intact)

---

## Key Features

- **Chrome-Style Browser Tab System**: Visual tab bar modeled after Google Chrome allowing instant switching between the two logically isolated case studies.
- **Explain → Visualize → Simulate → Learn**: 60% visual diagrams and animations, 40% crisp academic text.
- **Interactive 2019 Attack Simulation**: 6-step educational reconstruction showing malware entry, endpoint infection, reconnaissance, alert detection, and physical security boundary stopping traversal.
- **Interactive 2026 Data Leak Simulation**: 6-step supply chain reconstruction with animated exfiltration stream and counters (~19,000 files & ~14.3 GB).
- **Network Segmentation & Purdue Model**: Interactive test packet tool demonstrating why physical air-gapping and hardware data diodes protect nuclear reactors.
- **Presentation Mode (🎤)**: Dedicated slide deck with "What to Say" speaker scripts tailored for Polytechnic students presenting to college teachers, plus audio rehearsal support.
- **Offline & Localhost Ready**: 100% client-side, zero backend, zero database, synthesized Web Audio effects.
- **Academic Rigor & Bibliography**: Official citations from NPCIL, DAE, CERT-In, and Kaspersky research distinguishing official facts from media claims.

---

## How to Run

### Development Server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build:
```bash
npm run build
```
The output is generated in `dist/`. You can serve `dist/` with Python or any static web server:
```bash
cd dist
python -m http.server 5500
```
Open [http://localhost:5500](http://localhost:5500)
