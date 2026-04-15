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
      "Simulate a telecom-grade component that receives encrypted binary UDP packets at high throughput and processes them without dropping or reordering.",
    approach:
      "Implemented a producer-consumer architecture with a thread pool and mutex-locked queues. Producers read raw UDP datagrams off the socket; consumer threads decrypt and process binary packet payloads in parallel. Statistics are exported via POSIX shared memory IPC for external monitoring.",
    result:
      "Sustained high packet ingestion rates with ordered processing guarantees and zero data loss under concurrent load.",
    link: "https://github.com/Bannump/udp-multi-threading/blob/udp-multi-threading-version-1/README.md",
    linkText: "View on GitHub",
  },
  {
    category: "EDGE / CLOUD",
    title: "AWS IoT Greengrass Edge Face Recognition",
    stack: ["AWS IoT Greengrass", "Lambda", "EC2", "MQTT", "SQS", "PyTorch", "FaceNet", "MTCNN"],
    problem:
      "Deploy a real-time face recognition pipeline to an edge device with no pip access — standard cloud-based inference was too slow and the Lambda environment had no package manager.",
    approach:
      "Packaged raw PyTorch MTCNN and FaceNet models into a custom deployment bundle that runs in a pip-free AWS Lambda environment on Greengrass. Edge inference results are streamed asynchronously to the cloud via MQTT and SQS, decoupling edge processing from cloud consumption.",
    result:
      "Real-time face recognition at the edge with sub-second inference, cloud-synchronized event stream, and full operation without internet dependency.",
  },
  {
    category: "PERFORMANCE / GPU",
    title: "CUDA GPU Accelerated Image Processing",
    stack: ["CUDA", "PyCUDA", "C++", "Python"],
    problem:
      "CPU-based 2D Gaussian filtering was a bottleneck for image processing workloads — single-threaded and unable to scale with image size.",
    approach:
      "Implemented a parallel CUDA kernel using shared memory tiling to avoid redundant global memory reads, loop unrolling to maximize instruction throughput, and grid-stride loops for arbitrary image sizes. Validated output quality with PSNR and SSIM metrics against the CPU reference.",
    result:
      "20x speedup over CPU implementation — from seconds to milliseconds per frame at full resolution.",
    link: "https://github.com/Bannump/gpu-accelerated-image-processing/blob/version1/Project.ipynb",
    linkText: "View on GitHub",
  },
  {
    category: "AI / ML",
    title: "Personal AI Agent — RAG System",
    stack: ["Python", "ChromaDB", "OpenAI API", "Anthropic API", "LangChain", "GPT-4 Vision"],
    problem:
      "Build a composable personal AI assistant that handles diverse tasks — vehicle diagnostics from images, resume ATS optimization, and document Q&A — without coupling the logic to a single LLM provider.",
    approach:
      "Applied Clean Architecture to decouple domain logic from LLM providers (OpenAI, Anthropic). ChromaDB handles vector retrieval for document grounding; GPT-4 Vision processes image inputs for visual diagnostics. Each capability is a discrete use case wired through a shared retrieval layer.",
    result:
      "A maintainable multi-modal RAG system with swappable model backends and consistent retrieval quality across task types.",
    link: "https://github.com/Bannump/portfolio/blob/main/README.md",
    linkText: "View on GitHub",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 md:mb-16 text-accent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col"
            >
              {/* Category badge */}
              <span className="inline-block font-mono text-[10px] tracking-widest text-accent/60 border border-accent/20 px-2 py-0.5 rounded mb-3 w-fit">
                {project.category}
              </span>

              <h3 className="text-base sm:text-lg md:text-xl font-mono font-semibold mb-4 text-foreground">
                {project.title}
              </h3>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] sm:text-xs text-foreground/60 border border-foreground/10 px-2 py-0.5 rounded bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Problem / Approach / Result */}
              <div className="space-y-3 text-sm text-foreground/80 leading-relaxed flex-1">
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
                  className="mt-5 inline-flex items-center text-accent font-mono font-semibold text-sm hover:text-accent-dark transition-colors group-hover:translate-x-1 duration-300"
                >
                  {project.linkText}
                  <ExternalLinkIcon />
                </a>
              ) : (
                <span className="mt-5 inline-flex items-center text-foreground/30 font-mono text-sm">
                  Repository private
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
