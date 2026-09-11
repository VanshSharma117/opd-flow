# WaitWise — Smart Outpatient Queue & Patient-Flow Platform

> *"Waiting shouldn't feel uncertain. Know your wait. Move freely. Never miss your turn."*

**WaitWise** is a full-stack, competition-ready HealthTech web application built with React 19, TypeScript, Vite, Tailwind CSS, React Router, and Recharts.

---

## Key Features

- **Role-Based Portals**: Dedicated access for **Patients**, **Doctors**, and **Hospital Staff** with strict route protection.
- **Cross-Tab Real-Time Sync**: Synchronized via `localStorage` + `BroadcastChannel` so doctors advancing consultations in one tab instantly update patient queue countdowns and positions in other tabs.
- **Smart Triage Recommendation**: Rule-based symptom routing with non-diagnostic disclaimers and manual overrides.
- **"Wait Anywhere" Roaming Mobility**: Patients are free to step out to the cafeteria, pharmacy, or healing gardens; automated proximity alerts chime when 2 patients remain and when called.
- **Doctor Consultation Hub**: Active consultation timer, one-click patient calls, priority bypasses, and delay broadcasts.
- **Staff Command Center & Analytics**: Multi-department live oversight with Recharts throughput, distribution, and wait-time graphs.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Demo Accounts

- **Patient**: `patient@demo.com` / `patient123`
- **Doctor**: `doctor@demo.com` / `doctor123`
- **Staff**: `staff@demo.com` / `staff123`

1-Click instant demo buttons are also prominently available on the login page (`/login`) and via the floating bottom demo switcher.
