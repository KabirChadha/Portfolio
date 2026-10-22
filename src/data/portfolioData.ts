import {
  Project,
  ResearchPaper,
  HackathonWin,
  InternshipExperience,
  SkillGroup
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Kabir Singh Chadha",
  handle: "kabirchadha",
  title: "2nd-Year CSE (AI/ML) Undergraduate @ SRMIST Kattankulathur",
  tagline: "2nd-year Computer Science Engineering student specializing in AI/ML at SRM Institute of Science and Technology, Kattankulathur, Chennai. Focused on building real-time full-stack applications, intelligent ML systems, and fair algorithmic architectures. Published author in peer-reviewed AI research.",
  status: "ACTIVE_SYSTEM_ONLINE",
  kernelVersion: "v2.6.4-prod",
  location: "SRMIST Kattankulathur, Chennai / New Delhi, India",
  email: "chadhakabir77@gmail.com",
  github: "https://github.com/KabirChadha",
  githubDisplay: "github.com/KabirChadha",
  linkedin: "https://www.linkedin.com/in/kabir-singh-chadha-4b90a1363",
  linkedinDisplay: "linkedin.com/in/kabir-singh-chadha",
  bioTerminal: [
    "kabir@kernel:~$ whoami",
    "> Name: Kabir Singh Chadha",
    "> Role: 2nd Year B.Tech CSE (AI/ML) @ SRMIST KTR, Chennai",
    "> Focus: Intelligent Systems, Full-Stack Architecture, Ethical AI & Fairness",
    "> Published author in peer-reviewed AI research (JRPS / Shodh Sagar).",
  ],
  stats: [
    { label: "Production Systems", value: "4+", detail: "Full Stack & AI Platforms" },
    { label: "Published Papers", value: "1", detail: "AI Bias & Fairness in Shodh Sagar" },
    { label: "Competitive Hackathons", value: "3", detail: "Winner (1st) & Adobe R2" },
    { label: "Leakage Tolerance", value: "0.00e+00", detail: "Mathematical Invariance Tested" },
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "hack-beyond",
    code: "PRJ-01 // ML-ANALYTICS",
    title: "Student Risk Classifier & AI Analytics Suite",
    tagline: "Multi-dimensional academic risk prediction platform with dual-mode local/cloud AI reasoning and counterfactual simulations.",
    category: "ai-ml",
    categoryLabel: "Machine Learning & AI",
    terminalBadge: "RANDOM_FOREST + KMEANS + OLLAMA",
    status: "DEPLOYED",
    problemStatement:
      "Educational institutions struggle with lagging indicator alerts that identify student distress only after semester failures occur. Academic advisors lack early multi-factor signals, explainable root-cause attribution, and interactive counterfactual simulation tools to test targeted intervention policies.",
    architecturalHighlights: [
      "Dual-Mode AI Reasoning Engine: Implemented local zero-cloud-leakage inference via Ollama LLaMA 3.2, with automated fallback to a deterministic rule-based Academic Diagnostic Engine for cloud deployment.",
      "Unsupervised Latent Archetypes: Engineered 5-cluster K-Means segmentation on multi-dimensional behavioral, attendance, and exam telemetry to uncover latent student personas beyond raw grades.",
      "Interactive Counterfactual Simulator: Built dynamic 'What-If' sensitivity modeling allowing advisors to tune study hours, quiz consistency, and attendance to observe risk tier transitions in real-time.",
      "Production Dark Command UI: Matte obsidian and signal orange dashboard featuring Plotly polar radar intelligence, historical score trajectories, and sub-100ms inference feedback.",
    ],
    keyMetrics: [
      { label: "Inference Latency", value: "< 100ms", detail: "Local Random Forest Classifier" },
      { label: "Risk Tiers", value: "3 Tiers", detail: "High, Medium, and Low Risk Classification" },
      { label: "Latent Clusters", value: "5 Archetypes", detail: "Unsupervised Behavioral Personas" },
      { label: "Deployment", value: "1-Click Cloud", detail: "Streamlit Cloud with Auto-Failover" },
    ],
    techStack: [
      { name: "Python 3.11", category: "Backend" },
      { name: "Streamlit", category: "Frontend" },
      { name: "Scikit-Learn", category: "ML/AI" },
      { name: "Random Forest", category: "ML/AI" },
      { name: "K-Means", category: "ML/AI" },
      { name: "Ollama / LLaMA 3.2", category: "ML/AI" },
      { name: "Plotly Graph Objects", category: "Visualization" },
      { name: "Pandas & NumPy", category: "Backend" },
    ],
    githubUrl: "https://github.com/KabirChadha/Hack-Beyond",
    liveUrl: "https://share.streamlit.io/deploy?repository=KabirChadha/Hack-Beyond&branch=main&mainModule=app.py",
    architectureFlow: [
      "Raw Student Telemetry (Attendance, Quizzes, Lab Scores, Submissions)",
      "Feature Engineering & Standardized Normalization Pipeline",
      "Random Forest Ensemble Multi-Class Classifier (Risk Tier Probability)",
      "K-Means Clustering (Archetype Discovery & Peer Benchmarking)",
      "Counterfactual Simulation Engine (Interactive Dynamic What-If Testing)",
      "Local LLaMA 3.2 via Ollama / Cloud Academic Diagnostic Engine",
      "Plotly Polar Radar & Interactive Matte Orange Dashboard",
    ],
    coreCodeSnippet: {
      title: "Dual-Engine Diagnostic Orchestration",
      language: "python",
      code: `# Dual-Mode AI Reasoning: Ollama Local Inference with Cloud Fallback
def generate_student_diagnostic(student_metrics, risk_tier, archetype):
    prompt = f"Analyze risk factors for student in {risk_tier} (Archetype: {archetype}): {student_metrics}"
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "llama3.2", "prompt": prompt, "stream": False},
            timeout=2.0
        )
        if response.status_code == 200:
            return response.json().get("response")
    except Exception:
        pass # Graceful failover to high-fidelity diagnostic engine
    return run_academic_diagnostic_engine(student_metrics, risk_tier)`
    }
  },
  {
    id: "campus-drop",
    code: "PRJ-02 // REALTIME-DISTRIBUTED",
    title: "CampusDrop: Real-Time Lost & Found Network",
    tagline: "Event-driven campus recovery application with instant Supabase Realtime synchronization and strict Row Level Security.",
    category: "realtime-fullstack",
    categoryLabel: "Full-Stack & Distributed",
    terminalBadge: "REACT 19 + SUPABASE RLS + WEBSOCKETS",
    status: "PRODUCTION READY",
    problemStatement:
      "University lost-and-found operations are notoriously siloed across individual departmental desks and unmoderated social channels. Students face massive recovery delays, identity vulnerabilities, and a lack of verified claim protocols.",
    architecturalHighlights: [
      "Real-Time Event Architecture: Built bidirectional feed synchronization utilizing Supabase Realtime websocket channels, broadcasting lost/found alerts instantly to connected university clients without polling.",
      "Row Level Security (RLS) Vault: Implemented strict PostgreSQL RLS policies ensuring claimant messages, phone handles, and verification proof remain strictly accessible to verified item owners.",
      "Direct Storage Pipeline: Engineered multipart image uploads direct to Supabase Storage with signed public URIs, client-side preview rendering, and optimistic UI updates.",
      "Institutional Verification Guard: University email (.edu) validation gateway safeguarding claim filings against unauthenticated external spam and fraudulent assertions.",
    ],
    keyMetrics: [
      { label: "Broadcast Sync", value: "< 50ms", detail: "Supabase Realtime Websocket Propagation" },
      { label: "Item Categories", value: "5 Classes", detail: "Electronics, IDs, Keys, Books, Misc" },
      { label: "Security Layer", value: "100% RLS", detail: "PostgreSQL Row Level Security Guard" },
      { label: "Search Latency", value: "Instant", detail: "In-Memory Client Filter with Keybindings" },
    ],
    techStack: [
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS v4", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Supabase PostgreSQL", category: "Database" },
      { name: "Supabase Realtime", category: "Backend" },
      { name: "Supabase Storage", category: "Infrastructure" },
      { name: "Sonner & Lucide", category: "Frontend" },
    ],
    githubUrl: "https://github.com/KabirChadha/campus-drop",
    architectureFlow: [
      "Student Reports Lost/Found Item (Photo + Campus Building + Metadata)",
      "Client-side Input Sanitization & Domain Validation",
      "Multipart Image Upload -> Supabase Storage Bucket ('item-photos')",
      "PostgreSQL Insert with Row-Level Security Rules Applied",
      "Supabase Realtime Channel Broadcasts Postgres Change Event",
      "All Connected Campus Client Feeds Update Optimistically Without Reload",
      "Double-Verification Claim Flow with Encrypted Claimant Contact Transmission",
    ],
    coreCodeSnippet: {
      title: "Real-Time Postgres Change Subscription",
      language: "typescript",
      code: `// Subscribe to real-time insertions and status updates on 'items' table
useEffect(() => {
  const channel = supabase
    .channel('public:items')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'items' },
      (payload) => {
        if (payload.eventType === 'INSERT') {
          setItems((prev) => [formatDbItem(payload.new as DbItem), ...prev]);
          toast.info('New campus item reported nearby.');
        } else if (payload.eventType === 'UPDATE') {
          setItems((prev) => prev.map((item) => 
            item.id === payload.new.id ? formatDbItem(payload.new as DbItem) : item
          ));
        }
      }
    )
    .subscribe();

  return () => { supabase.removeChannel(channel); };
}, []);`
    }
  },
  {
    id: "stock-predictor",
    code: "PRJ-03 // QUANT-FINANCE-ML",
    title: "Multi-Index Stock Predictor: Zero-Leakage ML Pipeline",
    tagline: "Rigorous quantitative financial machine learning framework benchmarked against persistent upward equity drift hurdles.",
    category: "quantitative",
    categoryLabel: "Quantitative Machine Learning",
    terminalBadge: "ZERO_LEAKAGE + NUMPY + HIST_GBDT",
    status: "VERIFIED",
    problemStatement:
      "Financial ML literature is saturated with inflated predictive claims rooted in subtle lookahead bias, test-partition data leakage during scaler fitting, and failure to measure models against the baseline upward drift hurdle of equity indices.",
    architecturalHighlights: [
      "Mathematically Verified Zero-Leakage Pipeline: Enforced explicit forward target shifting (Close.diff() > 0).shift(-1) and dropped the terminal unobserved session to guarantee zero future bar bleeding.",
      "Strict Chronological Train/Test Partition: Partitioned 80/20 train/test split without random shuffling, preserving temporal causality from 2021 historical data through 2026 out-of-sample forward sessions.",
      "Out-of-Fold Scaler Fitting: Fitted StandardScalers strictly on historical X_train partitions, transforming unseen out-of-sample X_test windows without exposing test distribution statistics.",
      "Pure NumPy/Pandas Indicator Implementations: Re-implemented RSI-14 via Wilder's EMA (alpha=1/14), MACD (12/26/9), Bollinger Bands %B, and 20-day Price Z-Scores from mathematical first principles.",
      "Programmatic Invariance Verification: Created automated invariance suite proving features calculated on truncated slices data[:T] match the full-dataset features at T-1 to machine precision (Delta = 0.00e+00).",
    ],
    keyMetrics: [
      { label: "Data Leakage", value: "0.00e+00", detail: "Automated Invariance Verification Passed" },
      { label: "Benchmark Indices", value: "3 Major", detail: "S&P 500 (SPY), NIFTY 50, BSE SENSEX" },
      { label: "Out-of-Sample Test", value: "247 Days", detail: "Forward Temporal Evaluation Period" },
      { label: "Baseline Hurdle", value: "54.25%", detail: "Majority Class Upward Drift Benchmark" },
    ],
    techStack: [
      { name: "Python 3.11", category: "Backend" },
      { name: "Scikit-Learn", category: "ML/AI" },
      { name: "HistGradientBoosting", category: "ML/AI" },
      { name: "Logistic Regression", category: "ML/AI" },
      { name: "Pandas & NumPy", category: "Backend" },
      { name: "Streamlit", category: "Frontend" },
      { name: "Plotly Interactive", category: "Visualization" },
      { name: "SciPy Quantitative", category: "ML/AI" },
    ],
    githubUrl: "https://github.com/KabirChadha/Stock-Predictor",
    architectureFlow: [
      "Historical OHLCV Ingestion (SPY, ^NSEI, ^BSESN)",
      "Native Mathematical Indicator Synthesis (Wilder RSI-14, MACD, %B, Z-Score)",
      "Explicit Forward Target Shift: (Close.diff() > 0).shift(-1) & Drop Terminal NaN",
      "Programmatic Invariance Test: verify_no_lookahead_bias(T in [200, 500, 800])",
      "Strict Chronological 80/20 Train/Test Partitioning (No Shuffling)",
      "Out-of-Fold StandardScaler Fitting (Fit on Train Only, Transform Test)",
      "Multi-Model Tournament: Logistic Regression vs HistGradientBoosting vs Drift Hurdle",
      "Quantitative Evaluation: Confusion Matrix, Precision, Recall, F1, Hurdle Delta",
    ],
    coreCodeSnippet: {
      title: "Wilder's RSI-14 & Zero-Lookahead Shift",
      language: "python",
      code: `# Native Wilder's RSI calculation & verified forward shift
def compute_zero_leakage_features(df):
    delta = df['Close'].diff()
    gain = delta.clip(lower=0)
    loss = -delta.clip(upper=0)
    
    # Wilder's Smoothing: alpha = 1 / 14
    avg_gain = gain.ewm(alpha=1/14, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1/14, adjust=False).mean()
    rs = avg_gain / avg_loss.replace(0, np.nan)
    df['RSI_14'] = 100 - (100 / (1 + rs))
    
    # Target shift backward by 1 session, drop terminal row where tomorrow is unknown
    df['Target'] = (df['Close'].diff() > 0).astype(float).shift(-1)
    return df.dropna(subset=['Target'])`
    }
  },
  {
    id: "pharmanet",
    code: "PRJ-04 // GEOSPATIAL-SIMULATION",
    title: "PharmaNet: Autonomous Supply Chain Rebalancing",
    tagline: "Geospatial disaster simulation and algorithmic drug inventory rebalancing platform with real-time cascade failure detection.",
    category: "simulation",
    categoryLabel: "Simulation & Logistics",
    terminalBadge: "GEOSPATIAL + LEAFLET + GRAPH_ROUTING",
    status: "PRODUCTION READY",
    problemStatement:
      "Healthcare supply chains experience catastrophic regional medicine stockouts during crisis demand surges because facility inventory records are fragmented and transshipment reallocations are calculated manually with severe latency.",
    architecturalHighlights: [
      "Multi-Echelon Geospatial Network: Modeled hierarchical healthcare tiers spanning Central Regional Hubs (H), Community Health Centers (CHC), and Primary Health Centers (PHC) across interactive map coordinates.",
      "Cascade Risk Detection Engine: Programmed predictive depletion analysis evaluating daily consumption burn rates to forecast stockout trajectories and flag critical threshold breaches (<3 days buffer).",
      "Dynamic Transshipment Optimization: Designed automated inventory rebalancing algorithms computing optimal inter-facility relief transfers and rendering animated transit polylines in real time.",
      "Disruption Stress-Testing Engine: Implemented simulated disaster scenarios introducing transit supply bottlenecks and demand spikes to test supply chain resilience over a 14-day timeline.",
    ],
    keyMetrics: [
      { label: "Simulation Horizon", value: "14 Days", detail: "Discrete Time-Step Crisis Progression" },
      { label: "Facility Tiers", value: "3 Levels", detail: "Regional Hubs, CHCs, and PHC Clinics" },
      { label: "Triage Alert Levels", value: "3 States", detail: "Nominal (>=7d), Low (3-6d), Critical (<3d)" },
      { label: "Transit Calculation", value: "Automated", detail: "Optimal Relief Route Transshipment Matrix" },
    ],
    techStack: [
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript / JS", category: "Frontend" },
      { name: "Leaflet", category: "Visualization" },
      { name: "React-Leaflet", category: "Visualization" },
      { name: "Lucide Icons", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Simulation Engine", category: "Backend" },
    ],
    githubUrl: "https://github.com/KabirChadha/pharmanet-demo",
    architectureFlow: [
      "Facility Geospatial Coordinate & Stock Tier Ingestion (Hub, CHC, PHC)",
      "Daily Discrete Consumption & Burn Rate Calculation",
      "Cascade Failure Detector Evaluates Stock Depletion Curves",
      "Critical Facility Flagging (<3 Days Remaining Buffer)",
      "Transshipment Optimization Algorithm Computes Rebalancing Transfers",
      "Leaflet Map Renders Interactive Route Polylines & Ping Pulse Rings",
      "Disaster Stress-Testing Engine Injects Transit Cutoffs & Demand Spikes",
    ],
    coreCodeSnippet: {
      title: "Cascade Risk & Rebalancing Engine",
      language: "javascript",
      code: `// Detect cascade inventory risk across multi-tier health facilities
export function detectCascadeRisk(facilities) {
  const critical = facilities.filter(f => f.daysRemaining < 3);
  const elevated = facilities.filter(f => f.daysRemaining >= 3 && f.daysRemaining < 7);
  
  if (critical.length >= 2) {
    return {
      level: 'CRITICAL',
      alert: 'Severe regional stockout imminent. Immediate rebalancing required.',
      affectedNames: critical.map(f => f.name),
    };
  }
  return { level: elevated.length ? 'ELEVATED' : 'STABLE', affectedNames: [] };
}`
    }
  }
];

export const RESEARCH_PAPER: ResearchPaper = {
  id: "ai-bias-fairness-paper",
  title: "Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies",
  authors: ["Kabir Singh Chadha"],
  venue: "Journal of Research & Pedagogical Studies (JRPS) / Shodh Sagar",
  indexedIn: ["Journal of Research & Pedagogical Studies (JRPS)", "Shodh Sagar", "Crossref DOI"],
  abstract:
    "As artificial intelligence systems increasingly automate high-stakes decision-making across criminal justice, healthcare triage, loan underwriting, and hiring, algorithmic bias poses severe risks of perpetuating and amplifying societal inequalities. This research provides a rigorous examination of the structural genesis of prejudice in machine learning systems, examining data collection distortions, historical label contamination, and loss function misalignments. We establish a unified mathematical comparison of competing fairness definitions (Demographic Parity, Equalized Odds, Predictive Rate Parity) and present an end-to-end taxonomy of mitigation strategies spanning pre-processing data transformations, in-processing constrained optimization, and post-processing decision boundary adjustments.",
  coreContributions: [
    "Taxonomy of Algorithmic Bias: Systematic classification of prejudice origins across historical bias, sampling distortion, label contamination, and proxy variable correlation.",
    "Mathematical Fairness Formalization: Rigorous formulation and trade-off analysis between group fairness criteria (Demographic Parity vs. Equalized Odds) and individual fairness bounds.",
    "Comprehensive Lifecycle Mitigation Framework: Evaluation of intervention strategies across Pre-Processing (Reweighing, Disparate Impact minimization), In-Processing (Adversarial debiasing, Fairness regularization), and Post-Processing (Threshold calibration, Rejection Option Classification).",
    "Production ML Governance Blueprint: Actionable engineering guidelines for integrating fairness checks into continuous integration (CI) and ML monitoring pipelines.",
  ],
  fairnessCriteria: [
    {
      name: "Demographic Parity",
      math: "P(\\hat{Y}=1 | A=0) = P(\\hat{Y}=1 | A=1)",
      description: "Requires the acceptance or positive prediction rate to be independent of the sensitive protected attribute A.",
    },
    {
      name: "Equalized Odds",
      math: "P(\\hat{Y}=1 | A=0, Y=y) = P(\\hat{Y}=1 | A=1, Y=y), \\quad \\forall y \\in \\{0, 1\\}",
      description: "Demands that both true positive rates and false positive rates are equal across protected demographic groups.",
    },
    {
      name: "Equal Opportunity",
      math: "P(\\hat{Y}=1 | A=0, Y=1) = P(\\hat{Y}=1 | A=1, Y=1)",
      description: "Focuses on the positive label class, ensuring qualified individuals have an equal likelihood of receiving a positive outcome regardless of group identity.",
    },
    {
      name: "Predictive Rate Parity",
      math: "P(Y=1 | \\hat{Y}=1, A=0) = P(Y=1 | \\hat{Y}=1, A=1)",
      description: "Ensures that positive predictive value (precision) remains uniform across all sensitive demographic segments.",
    },
  ],
  mitigationFramework: [
    {
      stage: "Pre-Processing",
      techniques: [
        "Sample Reweighing & Resampling",
        "Disparate Impact Remover",
        "Optimized Data Pre-transformation",
        "Fair Synthetic Data Generation"
      ],
      goal: "Eliminate underlying historical bias and representation disparities from raw training datasets prior to model training."
    },
    {
      stage: "In-Processing",
      techniques: [
        "Adversarial Debiasing Networks",
        "Constrained Optimization & Lagrangian Multipliers",
        "Fairness Regularization Penalties",
        "Prejudice Remover Regularizer"
      ],
      goal: "Constrain model optimization objective functions to penalize discriminatory loss disparities during model parameter convergence."
    },
    {
      stage: "Post-Processing",
      techniques: [
        "Equalized Odds Post-Hoc Threshold Optimization",
        "Rejection Option Classification (ROC)",
        "Calibrated Equalized Odds Boundary Tuning"
      ],
      goal: "Adjust decision thresholds and prediction probability cutoffs for different demographic groups on a trained black-box model."
    }
  ],
  links: [
    { label: "Read Article (Journal)", url: "https://jrps.shodhsagar.com/index.php/j/article/view/1425" },
    { label: "DOI Record", url: "https://doi.org/10.36676/jrps.v15.i3.1425" },
  ],
  journalUrl: "https://jrps.shodhsagar.com/index.php/j/article/view/1425",
  doiUrl: "https://doi.org/10.36676/jrps.v15.i3.1425",
  doi: "10.36676/jrps.v15.i3.1425",
  bibtex: `@article{chadha2024bias,
  title={Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies},
  author={Chadha, Kabir Singh},
  journal={Journal of Research & Pedagogical Studies},
  volume={15},
  number={3},
  pages={1425},
  year={2024},
  publisher={Shodh Sagar},
  doi={10.36676/jrps.v15.i3.1425},
  url={https://doi.org/10.36676/jrps.v15.i3.1425},
  keywords={Algorithmic Fairness, Artificial Intelligence, Machine Learning, Demographic Parity, Equalized Odds, AI Ethics}
}`
};

export const HACKATHON_WINS: HackathonWin[] = [
  {
    id: "hack-and-beyond",
    award: "Winner (1st Place)",
    hackathon: "Hack and Beyond – Building Intelligent AI Applications",
    organizer: "Department of ECE, SRMIST in association with Ansnicore Solutions Pvt. Ltd.",
    track: "Intelligent AI Applications & Rapid Prototyping",
    projectTitle: "Student Risk Classifier & Intelligent AI System",
    description:
      "Awarded 1st place in AI innovation for developing intelligent AI applications under rapid prototyping constraints. Recognized for outstanding performance and innovative technical execution.",
    keyDeliverables: [
      "Awarded 1st Place in AI innovation by SRMIST ECE Dept & Ansnicore Solutions.",
      "Engineered full intelligent AI application prototype under high-velocity sprint constraints.",
      "Recognized for outstanding technical performance, zero-leakage architecture, and execution.",
    ],
    techStack: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn", "Ollama LLaMA"],
    date: "August 2026"
  },
  {
    id: "adobe-hackathon",
    award: "Round 2 Qualifier",
    hackathon: "Adobe Hackathon",
    organizer: "Adobe",
    track: "Competitive Engineering & Algorithmic Design",
    projectTitle: "Full-Stack System & Algorithmic Problem Solving",
    description:
      "Successfully cleared Round 1 screening and qualified for Round 2 in Adobe's competitive hackathon track.",
    keyDeliverables: [
      "Successfully cleared competitive Round 1 technical screening.",
      "Qualified for Round 2 in Adobe's national hackathon challenge track.",
      "Demonstrated robust algorithmic efficiency, clean software architecture, and problem-solving.",
    ],
    techStack: ["Algorithms", "Data Structures", "System Design", "TypeScript", "Python"],
    date: "2026"
  },
  {
    id: "hack4health-hackathon",
    award: "Participant (Awaiting Results)",
    hackathon: "Hack4Health Hackathon",
    organizer: "Health Innovations Consortium",
    track: "Healthcare Technology & Software Delivery",
    projectTitle: "Healthcare Delivery & Logistics Software Solution",
    description:
      "Developed an innovative software solution addressing healthcare delivery challenges; currently awaiting results.",
    keyDeliverables: [
      "Built and deployed full-stack software prototype addressing healthcare logistics challenges.",
      "Integrated real-time resource tracking and responsive patient-facing workflows.",
      "Submitted solution for evaluation; currently awaiting final round results.",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Healthcare Tech", "API Integration"],
    date: "2026"
  }
];

export const INTERNSHIP_EXPERIENCES: InternshipExperience[] = [
  {
    id: "ansnicore-solutions-intern",
    role: "Software Engineering / AI Intern",
    organization: "Ansnicore Solutions Pvt. Ltd.",
    period: "September 10, 2026 – Present",
    location: "Online",
    type: "Current Internship (Online)",
    summary:
      "Contributing to the development and implementation of intelligent AI solutions and software systems, collaborating with engineering teams to analyze requirements and build scalable features.",
    keyAchievements: [
      "Contributing to the development and implementation of intelligent AI solutions and software systems.",
      "Collaborating with engineering teams to analyze project requirements and build scalable technical features.",
      "Applying core computer science and AI/ML principles to solve real-world engineering problems.",
    ],
    technologies: ["AI Solutions", "Software Engineering", "System Design", "Python", "Full-Stack Development"]
  },
  {
    id: "h-nahata-power-intern",
    role: "Engineering Intern",
    organization: "H Nahata Power Private Limited",
    period: "June 11, 2024 – June 21, 2024",
    location: "New Delhi",
    type: "Offline Internship",
    summary:
      "Worked on projects related to solar power generation and energy management solutions, contributing to system optimization using control management strategies.",
    keyAchievements: [
      "Worked on projects related to solar power generation and energy management solutions.",
      "Contributed to optimizing solar energy systems using control management strategies.",
      "Assisted in developing algorithms to enhance system efficiency and proposed improvements through Big Data and AI integration.",
    ],
    technologies: ["Solar Energy Systems", "Control Strategies", "Energy Optimization", "Big Data", "AI Integration"]
  },
  {
    id: "gee-kay-industrial-intern",
    role: "Industrial Trainee / Intern",
    organization: "Gee Kay",
    period: "2024",
    location: "New Delhi (Offline)",
    type: "Industrial Training (Offline)",
    summary:
      "Gained practical exposure to real-world industrial working environments, developing professional discipline, teamwork skills, and an understanding of organizational operations.",
    keyAchievements: [
      "Gained practical exposure to real-world industrial working environments and operations.",
      "Developed professional discipline, teamwork skills, and an understanding of organizational operations.",
      "Strengthened analytical and technical fundamentals through hands-on learning.",
    ],
    technologies: ["Industrial Operations", "Professional Discipline", "Engineering Fundamentals", "Analytical Problem-Solving"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages & Core",
    terminalLabel: "LANGUAGES_AND_RUNTIME",
    description: "Core programming languages and runtimes utilized in production systems",
    skills: [
      { name: "Python", level: "Production", percentage: 95 },
      { name: "TypeScript", level: "Production", percentage: 92 },
      { name: "C / C++", level: "Advanced", percentage: 88 },
      { name: "JavaScript (ESNext)", level: "Production", percentage: 94 },
      { name: "SQL (PostgreSQL)", level: "Advanced", percentage: 88 },
      { name: "HTML5 / Semantic", level: "Advanced", percentage: 95 },
      { name: "CSS3 / Modern Layouts", level: "Advanced", percentage: 92 },
    ]
  },
  {
    category: "Machine Learning & AI",
    terminalLabel: "ML_AI_SYSTEMS",
    description: "Model architectures, mathematical rigor, and fairness frameworks",
    skills: [
      { name: "Scikit-Learn & ML Pipelines", level: "Production", percentage: 94 },
      { name: "Algorithmic Fairness & Bias Mitigation", level: "Specialized", percentage: 96 },
      { name: "Zero-Leakage Time-Series Validation", level: "Specialized", percentage: 95 },
      { name: "Random Forest & Gradient Boosting", level: "Advanced", percentage: 92 },
      { name: "Unsupervised Clustering (K-Means)", level: "Advanced", percentage: 90 },
      { name: "Local LLMs (Ollama / LLaMA)", level: "Advanced", percentage: 88 },
      { name: "Pandas & NumPy Computation", level: "Production", percentage: 94 },
    ]
  },
  {
    category: "Full-Stack & Web Architecture",
    terminalLabel: "WEB_ARCHITECTURE",
    description: "Modern frontend and backend frameworks for reactive interfaces",
    skills: [
      { name: "Next.js (App Router)", level: "Production", percentage: 92 },
      { name: "React 19 & Hooks", level: "Production", percentage: 94 },
      { name: "Tailwind CSS v4", level: "Production", percentage: 96 },
      { name: "Vite Bundler", level: "Advanced", percentage: 90 },
      { name: "Streamlit Dashboards", level: "Advanced", percentage: 92 },
      { name: "REST APIs & WebSockets", level: "Advanced", percentage: 90 },
      { name: "Leaflet & Geospatial Maps", level: "Advanced", percentage: 86 },
    ]
  },
  {
    category: "Database, Cloud & DevOps",
    terminalLabel: "CLOUD_AND_INFRASTRUCTURE",
    description: "Database security, containerization, and automated deployments",
    skills: [
      { name: "PostgreSQL & Row Level Security", level: "Production", percentage: 90 },
      { name: "Supabase (Realtime, Auth, Storage)", level: "Advanced", percentage: 92 },
      { name: "Git & Version Control", level: "Production", percentage: 95 },
      { name: "Vercel Cloud Deployment", level: "Production", percentage: 94 },
      { name: "Docker Containerization", level: "Proficient", percentage: 82 },
      { name: "Linux / Bash Terminal", level: "Advanced", percentage: 88 },
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available commands:\n  whoami      - Display engineer credentials and summary\n  projects    - List all 4 production projects with metrics\n  paper       - Display published research on AI Bias and Fairness\n  hackathons  - Show hackathon victories and award highlights\n  experience  - List engineering internships and deliverables\n  skills      - Output full engineering skill matrix\n  stack       - Print core technical stack\n  contact     - Display contact channels and email\n  clear       - Clear terminal output\n  sudo hire   - Print hiring recommendation and instant contact",
  whoami: "Name: Kabir Singh Chadha\nRole: 2nd Year B.Tech CSE (AI/ML) @ SRMIST KTR, Chennai\nFocus: Intelligent Systems, Full-Stack Architecture, Ethical AI & Fairness\nPublished: 'Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies'\nStatus: [ONLINE] Open for High-Impact Roles & Research",
  hackathons: "1. Hack and Beyond – Building Intelligent AI Applications (August 2026)\n   Award: Winner (1st Place)\n   Organizer: Dept of ECE, SRMIST in association with Ansnicore Solutions Pvt. Ltd.\n   Details: Awarded 1st place in AI innovation for developing intelligent AI applications under rapid prototyping constraints.\n\n2. Adobe Hackathon (2026)\n   Status: Round 2 Qualifier\n   Details: Successfully cleared Round 1 screening and qualified for Round 2 in Adobe's competitive hackathon track.\n\n3. Hack4Health Hackathon (2026)\n   Status: Participant (Awaiting Results)\n   Details: Developed an innovative software solution addressing healthcare delivery challenges; currently awaiting results.",
  experience: "1. Ansnicore Solutions Pvt. Ltd. (September 10, 2026 – Present, Online)\n   Role: Software Engineering / AI Intern\n   • Contributing to intelligent AI solutions & software systems\n   • Analyzing requirements and building scalable technical features\n   • Applying core computer science and AI/ML principles\n\n2. H Nahata Power Private Limited (June 11, 2024 – June 21, 2024, New Delhi)\n   Role: Engineering Intern\n   • Worked on solar power generation and energy management solutions\n   • Optimized solar energy systems using control management strategies\n   • Proposed system efficiency improvements via Big Data and AI integration\n\n3. Gee Kay (2024, New Delhi - Offline)\n   Role: Industrial Trainee / Intern\n   • Gained practical exposure to real-world industrial operations\n   • Developed professional discipline and teamwork in industrial workflows\n   • Strengthened analytical and technical fundamentals through hands-on learning",
  stack: "FRONTEND & UI:       Next.js (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons\nBACKEND & APIS:      Python, FastAPI, Supabase (PostgreSQL, Realtime, RLS), Node.js, Streamlit\nMACHINE LEARNING/AI: Scikit-Learn, PyTorch, Ollama (LLaMA 3.2), Plotly, Pandas, NumPy\nSYSTEMS & TOOLS:     Git, Docker, Linux, C/C++, Embedded Microcontrollers",
  contact: "Email:    chadhakabir77@gmail.com\nGitHub:   https://github.com/KabirChadha (github.com/KabirChadha)\nLinkedIn: https://www.linkedin.com/in/kabir-singh-chadha-4b90a1363 (linkedin.com/in/kabir-singh-chadha)\nPaper:    https://doi.org/10.36676/jrps.v15.i3.1425\nLocation: New Delhi, India / Remote Available",
  "sudo hire": ">>> ACCESS GRANTED: HIGH-PRIORITY CANDIDATE <<<\nMatches requirements for: AI/ML Engineer, Full-Stack Architect, Quantitative Systems.\nDemonstrated capability in zero-leakage math pipelines, published academic research, and production hackathon wins.\nContact immediately: chadhakabir77@gmail.com"
};
