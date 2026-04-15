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
  topics: string[];
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Graduate Research Assistant",
    company: "Arizona State University",
    location: "Tempe, AZ",
    date: "Aug 2025 – Dec 2025",
    tech: null,
    summary:
      "Contributing to research in software verification, validation, and automated testing under faculty supervision at ASU.",
    highlights: [
      "Research in software verification, validation, and testing — focused on fault analysis and correctness proofs for distributed system components.",
      "Supporting manuscript preparation through technical synthesis, literature-backed analysis, and structured academic content development.",
      "Designing course materials covering formal verification techniques, automated testing frameworks, and fault analysis.",
    ],
  },
  {
    title: "Software Implementation Engineer",
    company: "Amagi Media Labs",
    location: "Bengaluru, India",
    date: "Aug 2022 – Nov 2023",
    tech: "AWS EKS, Python, FastAPI, Kubernetes, Docker, ArgoCD, Terraform, Linux",
    summary:
      "Engineered large-scale broadcast infrastructure on AWS EKS — owning reliability, streaming system behavior, and the automation layer that kept 15+ production microservices stable for major media clients.",
    highlights: [
      "Stream Reliability / Incident Response: A critical client's live stream fell back to rescue content due to audio silence. Traced the failure across EC2, Kubernetes, and microservice logs. Identified that primary and secondary input streams lacked automated failover. Implemented threshold-based failover logic that switched to the healthy stream when audio silence persisted — eliminating rescue content fallback.",
      "Streaming Platform Debugging: Investigated manifest behavior, proxy chain issues, and SCTE marker handling across production services. Debugged H.264/H.265 codec and AWS MediaLive configurations — reduced client-facing playback errors by 95%.",
      "AI-Assisted Observability / RCA: Manual root cause analysis was slow — engineers repeatedly read the same logs. Built an AI observability pipeline ingesting server logs into LLMs for automated pattern analysis. Reduced manual debugging time by 60%.",
      "Infrastructure Automation: GitOps with ArgoCD — 99.9% release stability, 30% higher deployment frequency. Automated customer onboarding with Terraform (VPCs, subnets, CDN) — cut manual setup by 90%, CDN failures by 95%.",
      "FastAPI (Python) async services for high-concurrency streaming operations. Deployed Capsequo ML captioning pipeline — reduced video stream processing latency by 36%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blueplanet Solutions Inc.",
    location: "India",
    date: "Apr 2021 – Jun 2021",
    tech: "MySQL, PHP, JavaScript, Linux",
    summary:
      "Optimized full-stack performance for a campus portal serving 1,000+ users — cutting search latency by 60% and resolving critical memory leaks through systematic log analysis.",
    highlights: [
      "Analyzed MySQL execution plans, refactored queries into stored procedures with proper indexing — reduced execution time by 50%, sub-second retrieval.",
      "Parsed server logs to trace memory leaks from unclosed DB connections in legacy PHP — improved stability by 30%.",
      "Built async AJAX search UI replacing full-page reloads — improved time-to-result by 60%.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Multithreaded UDP Packet Processing Server",
    description:
      "Producer-consumer architecture in C++ for high-throughput encrypted UDP packet processing. Thread pool with mutex-locked queues; consumers decrypt and process binary payloads in parallel. Statistics exported via POSIX shared memory IPC. Sustained high ingestion rates with ordered processing guarantees.",
    techStack: "C++, UDP, POSIX IPC, Multi-threading, Shared Memory",
    link: "https://github.com/Bannump/udp-multi-threading",
    topics: ["C++", "concurrency", "UDP", "multi-threading", "POSIX", "systems", "networking", "distributed"],
  },
  {
    title: "AWS IoT Greengrass Edge Face Recognition",
    description:
      "Real-time face recognition at the edge using MTCNN and FaceNet. Custom deployment pipeline for raw PyTorch in a pip-free AWS Lambda/Greengrass environment. Edge inference results streamed asynchronously via MQTT and SQS. Sub-second inference with full offline operation capability.",
    techStack: "AWS IoT Greengrass, Lambda, EC2, MQTT, SQS, PyTorch, FaceNet, MTCNN",
    topics: ["edge", "AWS", "Lambda", "Greengrass", "IoT", "PyTorch", "face recognition", "MQTT", "SQS", "real-time"],
  },
  {
    title: "CUDA GPU Accelerated Image Processing",
    description:
      "20x CPU speedup for 2D Gaussian filtering via parallel CUDA kernel with shared memory tiling, loop unrolling, and grid-stride loops. Validated with PSNR and SSIM metrics. Full-resolution processing in milliseconds.",
    techStack: "CUDA, PyCUDA, C++, Python",
    link: "https://github.com/Bannump/gpu-accelerated-image-processing",
    topics: ["GPU", "CUDA", "performance", "image processing", "C++", "parallel computing", "shared memory"],
  },
  {
    title: "Personal AI Agent — RAG System",
    description:
      "Multi-modal RAG application with Clean Architecture for swappable LLM providers (OpenAI, Anthropic). ChromaDB for vector retrieval. GPT-4 Vision for vehicle diagnostics from images. ATS resume optimization with vector embeddings. Composable use-case design.",
    techStack: "Python, ChromaDB, OpenAI API, Anthropic API, LangChain, GPT-4 Vision",
    link: "https://github.com/Bannump/portfolio",
    topics: ["RAG", "LLM", "vector databases", "vision", "resume", "AI", "ChromaDB", "Clean Architecture"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    skills: "AWS EKS, EC2, Lambda, S3, Greengrass, MediaLive, Load Balancer, Kubernetes, Docker, Linux, Terraform, Azure",
  },
  {
    title: "Backend Engineering",
    skills: "Python, FastAPI, Go, REST APIs, Microservices, Async/Non-blocking I/O, Node.js, Flask, Express.js",
  },
  {
    title: "Reliability & DevOps",
    skills: "GitOps, ArgoCD, GitHub Actions, Jenkins, Incident Response, Grafana, Shell Scripting, IaC",
  },
  {
    title: "Systems Programming",
    skills: "C++, CUDA/PyCUDA, Multi-threading, POSIX IPC, UDP/TCP, Network Protocols, Shared Memory, Concurrency",
  },
  {
    title: "AI & ML",
    skills: "LLMs (GPT-4, Claude), RAG, LangChain, Computer Vision, PyTorch, TensorFlow, Scikit-learn, OpenAI API, Anthropic API",
  },
  {
    title: "Data & Storage",
    skills: "PostgreSQL, Redis, ChromaDB (Vector DB), MySQL, Firebase, MariaDB",
  },
  {
    title: "Languages",
    skills: "Python, C++, Go, TypeScript, Java, SQL, Kotlin, R, C, PHP",
  },
];

/** Full plain-text knowledge for context injection. */
export function getPortfolioKnowledgeText(): string {
  const expBlocks = experiences.map(
    (e) =>
      `Role: ${e.title} at ${e.company}${e.location ? ` (${e.location})` : ""} | ${e.date}. ${e.tech ? `Stack: ${e.tech}.` : ""} ${e.summary} Highlights: ${e.highlights.join(" ")}`
  );
  const projBlocks = projects.map(
    (p) =>
      `Project: ${p.title}. ${p.description}${p.techStack ? ` Stack: ${p.techStack}.` : ""} Topics: ${p.topics.join(", ")}.`
  );
  const skillBlocks = skillCategories.map(
    (s) => `Skills - ${s.title}: ${s.skills}`
  );
  return [
    "About: Saratchandra Patnaik. Backend and Distributed Systems Engineer. MS CS @ Arizona State University (ASU '25). Ex-Software Implementation Engineer at Amagi Media Labs. Specializes in AWS, Kubernetes, Python, reliability engineering, streaming infrastructure, cloud-native microservices, and systems programming.",
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
      "experience", "job", "work",
    ];
    chunks.push({ text, keywords });
  });
  projects.forEach((p) => {
    const text = `${p.title}. ${p.description} ${p.techStack ?? ""}`;
    const keywords = [
      ...p.title.toLowerCase().split(/\s+/),
      ...p.topics,
      ...(p.techStack?.toLowerCase().split(/[\s,/]+/) ?? []),
      "project",
    ];
    chunks.push({ text, keywords });
  });
  skillCategories.forEach((s) => {
    const text = `${s.title}: ${s.skills}`;
    const keywords = [
      ...s.title.toLowerCase().split(/\s+/),
      ...s.skills.toLowerCase().split(/[\s,/(]+/),
      "skills",
    ];
    chunks.push({ text, keywords });
  });
  return chunks;
}
