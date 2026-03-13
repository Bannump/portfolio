/**
 * Centralized knowledge base for the portfolio chatbot.
 * Single source of truth for experience, projects, and skills.
 */

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string | null;
  date: string;
  tech: string | null;
  summary: string;
  highlights: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  techStack?: string;
  link?: string;
  topics: string[]; // e.g. distributed systems, RAG, GPU
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Software Engineer (Cloud & DevOps)",
    company: "Amagi Media Labs",
    location: "Bengaluru, India",
    date: "Aug 2022 – Nov 2023",
    tech: "AWS EKS, FastAPI, ArgoCD, Terraform, LLMs",
    summary:
      "Engineered high-throughput distributed systems for real-time media streaming and architected intelligent fault-tolerance workflows that eliminated 60% of operational overhead.",
    highlights: [
      "Deployed and scaled a Kubernetes-based microservices platform (15+ services), achieving 99.9% release stability and 30% higher deployment frequency.",
      "Owned lifecycle of high-availability microservices on AWS EKS.",
      "GitOps with ArgoCD for version-controlled, reproducible infra.",
      "Resolved critical streaming outage by tracing concurrent streams across distributed nodes.",
      "Real-time streaming workflows for WebRTC/WebRTS; optimized H.264/H.265 and AWS MediaLive; reduced playback errors by 95%.",
      "Asynchronous REST APIs with FastAPI (Python) for high-concurrency, reduced data-processing latency.",
      "Automated customer onboarding with Terraform and Python (VPCs, subnets); cut manual setup by 90%, CDN failures reduced by 95%.",
      "GenAI Observability Pipeline ingesting server logs into LLMs for root cause analysis; reduced manual debugging by 60%.",
      "Deployed Capsequo ML captioning pipeline; reduced video stream processing latency by 36%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blueplanet Solutions Inc.",
    location: "India",
    date: "Apr 2021 – June 2021",
    tech: "MySQL, PHP, JavaScript",
    summary:
      "Optimized full-stack performance for the Campus Club portal (1,000+ users). Reduced search latency by 60% and resolved critical memory leaks.",
    highlights: [
      "Refactored MySQL stored procedures and indexing; query execution time reduced by 50%, sub-second retrieval.",
      "Responsive asynchronous search UI with JavaScript (AJAX) and PHP; 60% better time-to-result.",
      "Diagnosed memory leaks from unclosed DB connections in PHP; improved stability by 30%.",
    ],
  },
  {
    title: "Graduate Teaching Assistant / Grader",
    company: "Arizona State University",
    location: "Tempe, AZ",
    date: "Aug 2025 – Dec 2025",
    tech: null,
    summary:
      "Evaluated graduate-level Applied Cryptography implementations; mentored students on securing distributed systems.",
    highlights: [
      "Evaluated security standards and encryption logic in student implementations.",
      "Mentored students on securing distributed systems against vulnerabilities.",
    ],
  },
  {
    title: "AI Solutions Architect (Independent)",
    company: "Passion Projects",
    location: null,
    date: "Oct 2025 – Present",
    tech: null,
    summary:
      "Personal projects in RAG, multimodal AI, and high-performance systems.",
    highlights: [
      "Architected 'My Personal Agent' RAG with ChromaDB and GPT-4, Clean Architecture for decoupled LLM providers.",
      "GPT-4 Vision for visual diagnostics; ATS Resume Optimizer with vector embeddings.",
      "Multi-threaded UDP server in C++ with thread pooling and mutex locking for real-time telematics simulation.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "My Personal AI Agent (RAG)",
    description:
      "RAG application: vehicle diagnostics from images, resume analysis & ATS optimization, intelligent resume building. Python, ChromaDB, OpenAI/Anthropic APIs, vision AI.",
    techStack: "Python, ChromaDB, OpenAI/Anthropic, vision AI",
    link: "https://github.com/Bannump/portfolio/blob/main/README.md",
    topics: ["RAG", "LLM", "vector databases", "vision", "resume", "AI"],
  },
  {
    title: "Edge AI Face Recognition",
    description:
      "Real-time Smart Camera with MTCNN and FaceNet on the edge. Custom pipeline for raw PyTorch in pip-free AWS Lambda. MQTT and SQS for edge-cloud communication.",
    techStack: "AWS IoT Greengrass, Lambda, MQTT, PyTorch",
    topics: ["edge", "AWS", "Lambda", "PyTorch", "face recognition", "IoT"],
  },
  {
    title: "GPU Accelerated Image Processing",
    description:
      "20x speedup over CPU with parallel 2D Gaussian Filter. CUDA: shared memory tiling, loop unrolling, grid-stride loops. PSNR and SSIM for validation.",
    techStack: "CUDA, PyCUDA, Python, C++",
    link: "https://github.com/Bannump/gpu-accelerated-image-processing",
    topics: ["GPU", "CUDA", "performance", "image processing", "C++"],
  },
  {
    title: "UDP Multi-Threading System",
    description:
      "Telecom-style simulation: encrypted custom UDP packets, multi-threading (producer-consumer), statistics via POSIX shared memory. C++ system programming, network protocols, concurrency.",
    techStack: "C++, UDP, POSIX, multi-threading",
    link: "https://github.com/Bannump/udp-multi-threading",
    topics: ["distributed", "UDP", "multi-threading", "C++", "IPC", "networking"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    skills:
      "LLMs (GPT-4, Claude, OpenAI API), RAG, LangChain, Computer Vision, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy.",
  },
  {
    title: "GPU & High-Performance Computing",
    skills:
      "CUDA, PyCUDA, Shared Memory Optimization, Loop Unrolling, Tiling, Grid-Block-Thread Architecture.",
  },
  {
    title: "Cloud & DevOps",
    skills:
      "AWS (EKS, Lambda, S3, EC2, Greengrass), Kubernetes, Docker, GitOps, ArgoCD, Jenkins, GitHub Actions, Terraform, Azure (Fundamental).",
  },
  {
    title: "Languages",
    skills: "Python, C++, Java, Go, TypeScript, JavaScript, SQL, PHP, R, Kotlin, C.",
  },
  {
    title: "Backend & Web",
    skills:
      "FastAPI, Node.js, React.js, Express.js, Flask, REST APIs, Microservices, HTML/CSS.",
  },
  {
    title: "Databases",
    skills: "PostgreSQL, Redis, ChromaDB (Vector DB), MySQL, Firebase, MariaDB.",
  },
];

/** Full plain-text knowledge for context injection (e.g. LLM or keyword search). */
export function getPortfolioKnowledgeText(): string {
  const expBlocks = experiences.map(
    (e) =>
      `Role: ${e.title} at ${e.company}${e.location ? ` (${e.location})` : ""} | ${e.date}. ${e.tech ? `Tech: ${e.tech}.` : ""} ${e.summary} Highlights: ${e.highlights.join(" ")}`
  );
  const projBlocks = projects.map(
    (p) =>
      `Project: ${p.title}. ${p.description}${p.techStack ? ` Stack: ${p.techStack}.` : ""} Topics: ${p.topics.join(", ")}.`
  );
  const skillBlocks = skillCategories.map(
    (s) => `Skills - ${s.title}: ${s.skills}`
  );
  return [
    "About: Saratchandra Patnaik. AI-Focused Software Engineer; Cloud Native Development and Applied Cryptography. MS CS Graduate (ASU '25). Ex-Amagi Media Labs. Specializes in RAG systems, Cloud-Native microservices, secure cryptographic protocols. AWS & Python Expert.",
    "--- Experience ---",
    ...expBlocks,
    "--- Projects ---",
    ...projBlocks,
    "--- Technical Skills ---",
    ...skillBlocks,
  ].join("\n");
}

/** Chunked knowledge for keyword/retrieval matching. */
export function getPortfolioChunks(): { text: string; keywords: string[] }[] {
  const chunks: { text: string; keywords: string[] }[] = [];
  experiences.forEach((e) => {
    const text = `${e.title} at ${e.company} (${e.date}). ${e.summary} ${e.highlights.join(" ")}`;
    const keywords = [
      ...e.title.toLowerCase().split(/\s+/),
      e.company.toLowerCase(),
      ...(e.tech?.toLowerCase().split(/[\s,]+/) ?? []),
      "experience",
      "job",
      "work",
    ];
    chunks.push({ text, keywords });
  });
  projects.forEach((p) => {
    const text = `${p.title}. ${p.description} ${p.techStack ?? ""}`;
    const keywords = [
      ...p.title.toLowerCase().split(/\s+/),
      ...p.topics,
      ...(p.techStack?.toLowerCase().split(/[\s,]+/) ?? []),
      "project",
    ];
    chunks.push({ text, keywords });
  });
  skillCategories.forEach((s) => {
    const text = `${s.title}: ${s.skills}`;
    const keywords = [
      ...s.title.toLowerCase().split(/\s+/),
      ...s.skills.toLowerCase().split(/[\s,(]+/),
      "skills",
    ];
    chunks.push({ text, keywords });
  });
  return chunks;
}
