# ⚡ Kabir Singh Chadha — Production Developer Portfolio

> High-density, command terminal aesthetic (`#050508` obsidian dark background with crisp accent borders and `#FF6B00` signal orange glow) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment%20Ready-black?style=flat&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-16%20Turbopack-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8?style=flat&logo=tailwindcss)
![Theme](https://img.shields.io/badge/Theme-Obsidian%20%2B%20Orange-ff6b00?style=flat)

---

## 🚀 Live Demo & Quick Start

### 1. Local Development

```bash
# Clone the repository
git clone https://github.com/KabirChadha/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### 2. Production Build Verification

```bash
npm run build
npm run start
```

---

## 🖥️ System Architecture & Aesthetic Highlights

- **Command Terminal Aesthetic**: Custom obsidian dark background (`#050508`), terminal grid overlay, CRT scanline effects, glowing signal orange borders (`#FF6B00`, `#FF7A00`), and monospace telemetry.
- **Interactive Command Terminal (`CLI_MODE`)**:
  - Full working terminal emulator with command history (Up/Down arrow keys), auto-scroll, and quick command shortcut buttons.
  - Interactive commands supported: `help`, `whoami`, `projects`, `paper`, `hackathons`, `experience`, `skills`, `stack`, `contact`, `clear`, `sudo hire`.
  - Global keyboard shortcut: Press `⌘K`, `Ctrl+K`, or `~` anywhere on the page to toggle the terminal modal.
- **Deep Architecture Modals**: Every project card includes an **"INSPECT ARCHITECTURE"** action displaying end-to-end dataflow pipelines, copyable production code snippets, and exact tech stack tags.
- **Instant Vercel Deployment**: Configured with static route generation, Turbopack optimizations, zero-hydration mismatch guarantees, metadata SEO tags, `robots.txt`, and `sitemap.xml`.

---

## 📂 Deep Repository Inspection Breakdown

### 1. Student Risk Classifier & AI Analytics Suite (`Hack-Beyond`)
* **Repository**: [https://github.com/KabirChadha/Hack-Beyond](https://github.com/KabirChadha/Hack-Beyond)
* **Exact Tech Stack**: Python 3.11, Streamlit, Scikit-Learn (Random Forest, K-Means Clustering, StandardScaler), Plotly Graph Objects, Local Ollama LLaMA 3.2, Pandas, NumPy.
* **The Challenge / Problem Statement**: Educational institutions struggle with delayed detection of academic failure and dropouts. Traditional warning systems lack early multi-factor signal detection, explainability, and counterfactual simulation.
* **Architectural Highlights**:
  - Dual-mode reasoning: Zero-cloud-leakage local inference via Ollama LLaMA 3.2 with deterministic cloud academic diagnostic fallbacks.
  - 5-Archetype unsupervised K-Means behavioral clustering to uncover latent student personas beyond raw GPA.
  - Interactive counterfactual "What-If" simulation allowing advisors to test intervention policies in real time.
* **Key Metrics**: 3-tier classification (High, Medium, Low Risk); sub-100ms local inference latency; 1-click cloud deployment.

---

### 2. CampusDrop: Real-Time Lost & Found Network (`campus-drop`)
* **Repository**: [https://github.com/KabirChadha/campus-drop](https://github.com/KabirChadha/campus-drop)
* **Exact Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, Supabase (PostgreSQL, Row Level Security, Realtime Publication, Storage), Sonner Notifications, Lucide Icons.
* **The Challenge / Problem Statement**: Campus lost & found operations are fragmented across disconnected security desks and unmoderated social channels, causing delayed recovery and identity vulnerabilities.
* **Architectural Highlights**:
  - Real-time event-driven feed powered by Supabase Realtime websocket subscriptions for zero-polling updates.
  - Strict Row Level Security (RLS) policies protecting claimant identity and sensitive communications.
  - Institutional `.edu` domain verification and session persistence.
  - Direct multipart image uploads to Supabase Storage with optimistic UI updates.
* **Key Metrics**: Sub-50ms live broadcast updates across connected campus clients; 5 item taxonomy categories; multi-factor claim verification workflow.

---

### 3. Multi-Index Stock Predictor: Zero-Leakage Pipeline (`Stock-Predictor`)
* **Repository**: [https://github.com/KabirChadha/Stock-Predictor](https://github.com/KabirChadha/Stock-Predictor)
* **Exact Tech Stack**: Python, Scikit-Learn (HistGradientBoosting, LogisticRegression, RandomForest), Pandas, NumPy, Streamlit, Plotly, SciPy.
* **The Challenge / Problem Statement**: Financial machine learning commonly suffers from subtle lookahead biases, pre-split normalization leakage, and unrealistic performance claims that fail to beat naive upward market drift hurdles.
* **Architectural Highlights**:
  - Mathematically verified zero-leakage pipeline: explicit forward target shift `(Close.diff() > 0).shift(-1)`, out-of-fold preprocessing (`StandardScaler` fitted strictly on chronological `X_train`), and strict non-shuffled 80/20 temporal splits.
  - Mathematical indicator implementations calculated natively in NumPy/Pandas without black-box packages: RSI-14 via Wilder's EMA ($\alpha=1/14$), MACD (12/26/9), Bollinger Bands %B, and 20-day Price Z-Scores.
  - Programmatic invariance verification suite testing historical cutoffs $T \in \{200, 500, 800\}$ where $\Delta = 0.00\text{e}+00$.
* **Key Metrics**: Evaluated across S&P 500 ETF (`SPY`), NIFTY 50 (`^NSEI`), and BSE SENSEX (`^BSESN`); 247-day out-of-sample forward testing against a 54.25% majority class drift hurdle; zero machine-precision leakage tolerance.

---

### 4. PharmaNet: Autonomous Supply Chain Rebalancing (`pharmanet-demo`)
* **Repository**: [https://github.com/KabirChadha/pharmanet-demo](https://github.com/KabirChadha/pharmanet-demo)
* **Exact Tech Stack**: React 19, TypeScript/JavaScript, Vite, Leaflet, React-Leaflet, Lucide Icons, Custom CSS keyframe animations.
* **The Challenge / Problem Statement**: Fragile healthcare supply chains experience catastrophic regional medicine stockouts during demand shocks because inventory records are isolated and multi-echelon emergency reallocations are manual and delayed.
* **Architectural Highlights**:
  - Multi-tier geospatial simulation representing Regional Hubs (H), Community Health Centers (CHC), and Primary Health Centers (PHC) across dynamic coordinates.
  - Cascade failure detection engine forecasting stockout trajectories and burn rates.
  - Automated transshipment routing matrix dynamically computing optimal inter-facility rebalancing transfers and rendering real-time Leaflet route polylines.
  - Disruption stress-testing engine simulating sudden supply pipeline shocks and transit cutoffs.
* **Key Metrics**: 14-day discrete crisis timeline simulation; 3-tier inventory triage (Nominal $\ge 7$d, Low $3-6$d, Critical $<3$d); real-time stock redistribution calculating inter-facility transit lines.

---

## 📚 Published Research on AI Bias & Fairness

* **Title**: *Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies*
* **Author**: Kabir Singh Chadha
* **Venue**: Shodh Sagar / International Conference on Artificial Intelligence and Information Technology (ICAIIT) / Indexed on ResearchGate.
* **Key Research Highlights**:
  - Mathematical evaluation of competing fairness criteria: Demographic Parity, Equalized Odds, Equal Opportunity, and Predictive Rate Parity.
  - 3-Stage Lifecycle Mitigation Framework:
    - **Pre-Processing**: Sample reweighing, Disparate impact remover, synthetic sampling.
    - **In-Processing**: Adversarial debiasing networks, constrained optimization with Lagrangian multipliers.
    - **Post-Processing**: Equalized odds threshold optimization, Rejection Option Classification (ROC).
  - One-click BibTeX citation export directly in the portfolio UI.

---

## 🏆 Hackathon Wins & Experience

* **Hack Beyond 2024**: Winner // 1st Place in AI & Social Impact for Student Risk Classifier & AI Analytics Suite.
* **National Campus Innovation Challenge**: Best Realtime Architecture & Community Impact for CampusDrop.
* **Crisis Logistics & Health Tech Challenge**: Best Healthcare Simulation Award for PharmaNet Autonomous Rebalancing Network.
* **Engineering Internships**: AI/ML Systems Engineering Intern & Full-Stack Software Engineering Intern.

---

## ☁️ Instant Vercel Deployment

This project is 100% prepared for instant Vercel deployment:
1. Push this directory to your GitHub account (`git push origin main`).
2. Navigate to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Next.js with zero configuration needed.
4. Click **Deploy**. Your portfolio will be live on global edge networks in under 60 seconds!
