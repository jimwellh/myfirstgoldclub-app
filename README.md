# ⛳ My First Golf Club Selector

[![Live Demo](https://img.shields.io/badge/Demo-myfirstgoldclub.ai.studio-22c55e?style=for-the-badge&logo=google-chrome&logoColor=white)](https://myfirstgoldclub.ai.studio)

An interactive, data-driven golf club recommendation web application tailored for beginners and improving players. The platform evaluates physical biometrics, swing tempo, athleticism, and budget constraints across a deterministic fitting engine to recommend the ideal starter set configuration and brand alternatives.

---

## Features

- **7-Step Diagnostic Questionnaire:** Walks golfers through athletic background, height, swing tempo, ball flight tendencies, and practice commitment.
- **Deterministic Fitting Engine:** Translates user biometrics and biomechanics into precise club specifications:
  - Shaft flex (Senior, Regular, Stiff) and composition (Graphite vs. Steel)
  - Clubhead forgiveness profiles (Super Game Improvement / Game Improvement)
  - Recommended bag composition (10-piece beginner sets vs. full 14-club setups)
- **Interactive Budget & Habit Controls:** Dynamically re-filter club set recommendations across price tiers and usage frequency without restarting the wizard.
- **Brand Comparison:** Compares suitable options across 23+ recognized golf equipment manufacturers.
- **Zero-Latency Static Architecture:** Client-side rule evaluation with no backend latency or account creation required.

---

## Architecture & Tech Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS + Lucide React Icons
- **Fitting Logic:** Rule-based decision engine (`src/lib/fittingEngine.ts`) evaluating static golf equipment parameters

---

## Project Structure

```text
myfirstgoldclub-app/
├── src/
│   ├── components/
│   │   ├── BudgetControl.tsx       # Dynamic budget tier filter
│   │   ├── HabitsControl.tsx       # Practice cadence & commitment controls
│   │   ├── Header.tsx              # App banner and navigation
│   │   ├── QuestionWizard.tsx      # Step-by-step diagnostic questionnaire
│   │   └── ResultDashboard.tsx     # Fit results, club specs, and recommendations
│   ├── lib/
│   │   └── fittingEngine.ts        # Pure algorithmic club recommendation engine
│   ├── types/
│   │   └── golf.ts                 # TypeScript interfaces for golfer profiles and gear
│   ├── App.tsx                     # Main application layout and state management
│   ├── index.css                   # Tailwind CSS imports and root styling
│   └── main.tsx                    # Application entry point
├── public/                         # Static assets and favicons
├── index.html                      # HTML root template
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite build settings
