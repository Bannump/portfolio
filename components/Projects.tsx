"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 ml-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

interface Project {
  category: string;
  title: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  link?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    category: "SYSTEMS / C++",
    title: "Multithreaded UDP Packet Processing Server",
    stack: ["C++", "UDP", "POSIX IPC", "Multi-threading", "Shared Memory"],
    problem:
      "Build a telecom-grade server that receives encrypted binary UDP packets at high throughput and processes them without dropping or reordering under concurrent load.",
    approach:
      "Producer-consumer architecture with a thread pool and mutex-locked queues. Producer threads read raw UDP datagrams off the socket; consumers decrypt and process binary payloads in parallel. Statistics are published via POSIX shared memory IPC for external monitoring.",
    result:
      "High packet ingestion at sustained throughput with ordered processing guarantees and zero data loss under concurrent load.",
    link: "https://github.com/Bannump/udp-multi-threading/blob/udp-multi-threading-version-1/README.md",
    linkText: "View on GitHub",
  },
  {
    category: "EDGE / CLOUD",
    title: "AWS IoT Greengrass Edge Face Recognition",
    stack: ["AWS IoT Greengrass", "Lambda", "EC2", "MQTT", "SQS", "PyTorch", "FaceNet", "MTCNN"],
    problem:
      "Run real-time face recognition on an edge device with no pip access — cloud-based inference introduced too much latency and the Greengrass Lambda environment had no package manager.",
    approach:
      "Packaged raw PyTorch MTCNN and FaceNet models into a custom deployment bundle that runs in a pip-free Lambda environment on Greengrass. Edge inference events stream asynchronously to the cloud via MQTT and SQS, fully decoupling edge processing from cloud consumption.",
    result:
      "Sub-second face recognition at the edge with a cloud-synchronized event stream and no internet dependency at inference time.",
  },
  {
    category: "PERFORMANCE / GPU",
    title: "CUDA GPU Accelerated Image Processing",
    stack: ["CUDA", "PyCUDA", "C++", "Python"],
    problem:
      "CPU-based 2D Gaussian filtering was the bottleneck for image processing workloads — single-threaded and unable to scale with image resolution.",
    approach:
      "Parallel CUDA kernel with shared memory tiling to eliminate redundant global memory reads, loop unrolling to maximize instruction throughput, and grid-stride loops to handle arbitrary image sizes. Validated output fidelity against CPU reference using PSNR and SSIM.",
    result:
      "20× speedup over CPU — full-resolution frames processed in milliseconds instead of seconds.",
    link: "https://github.com/Bannump/gpu-accelerated-image-processing/blob/version1/Project.ipynb",
    linkText: "View on GitHub",
  },
  {
    category: "AI / ML",
    title: "Personal AI Agent — RAG System",
    stack: ["Python", "FastAPI", "React", "ChromaDB", "OpenAI API", "Anthropic API", "GPT-4 Vision"],
    problem:
      "Build a composable AI assistant for vehicle diagnostics, ATS resume optimization, and document Q&A — without locking the system to a single LLM provider.",
    approach:
      "Clean Architecture to decouple domain logic from model providers (OpenAI, Anthropic). ChromaDB handles vector retrieval for document grounding; GPT-4 Vision processes image inputs for diagnostics. Each capability is an isolated use case wired through a shared retrieval layer. React frontend, FastAPI backend.",
    result:
      "Fully swappable model backends with consistent retrieval quality across task types and a usable dashboard for diagnostics and resume analysis.",
    link: "https://github.com/Bannump/PersonalAgent-RAG/blob/version1/README.md",
    linkText: "View on GitHub",
  },
];

// Stagger delays for cards (ms)
const delays = [0, 100, 200, 300];

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 data-reveal className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 md:mb-16 text-accent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              data-reveal
              style={{ transitionDelay: `${delays[idx] ?? 0}ms` }}
              className="group bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Category badge */}
              <span className="inline-block font-mono text-[10px] tracking-widest text-accent/60 border border-accent/20 px-2 py-0.5 rounded mb-3 w-fit">
                {project.category}
              </span>

              <h3 className="text-base sm:text-lg font-mono font-semibold mb-3 text-foreground leading-snug">
                {project.title}
              </h3>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] sm:text-xs text-foreground/55 border border-foreground/10 px-2 py-0.5 rounded bg-white/5 hover:border-accent/30 hover:text-foreground/80 transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Problem / Approach / Result */}
              <div className="space-y-2.5 text-sm text-foreground/80 leading-relaxed flex-1">
                <p>
                  <span className="text-accent font-semibold font-mono">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="text-accent font-semibold font-mono">Approach:</span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="text-accent font-semibold font-mono">Result:</span>{" "}
                  {project.result}
                </p>
              </div>

              {/* Link */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-accent font-mono font-semibold text-sm hover:text-accent/80 transition-colors group-hover:translate-x-1 duration-300"
                >
                  {project.linkText}
                  <ExternalLinkIcon />
                </a>
              ) : (
                <span className="mt-5 inline-flex items-center text-foreground/30 font-mono text-sm">
                  Private repository
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
