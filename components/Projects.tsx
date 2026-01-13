export default function Projects() {
  const projects = {
    rag: {
      title: "My Personal AI Agent (RAG)",
      description:
        "A sophisticated RAG (Retrieval-Augmented Generation) application serving as a personal AI assistant. Features vehicle diagnostics from images, resume analysis & ATS optimization, and intelligent resume building. Built with Python, ChromaDB, OpenAI/Anthropic APIs, and vision AI integration.",
      link: "https://github.com/Bannump/RAG.git",
      linkText: "View on GitHub",
      icon: "🤖",
    },
    edgeAI: {
      title: "Edge AI Face Recognition",
      techStack: "AWS IoT Greengrass, Lambda, MQTT, PyTorch",
      description:
        "Built a real-time \"Smart Camera\" system deploying MTCNN and FaceNet models directly to the edge. Engineered a custom deployment pipeline to run raw PyTorch models in a pip-free AWS Lambda environment. Orchestrated asynchronous communication between Edge and Cloud using MQTT and SQS.",
      link: "https://github.com/Bannump",
      linkText: "View Architecture",
      icon: "☁️",
    },
    gpu: {
      title: "GPU Accelerated Image Processing",
      techStack: "CUDA, PyCUDA, Python, C++",
      description:
        "Achieved 20x speedup over CPU implementations by engineering a parallel 2D Gaussian Filter. Optimized kernel performance using Shared Memory Tiling, Loop Unrolling, and Grid-Stride Loops to minimize global memory latency. Validated image fidelity using PSNR and SSIM metrics.",
      link: "https://github.com/Bannump",
      linkText: "View Code",
      icon: "🚀",
    },
    udp: {
      title: "UDP Multi-Threading System",
      description:
        "High-performance telecom component simulation that receives encrypted custom packets via UDP, processes them using multi-threading (producer-consumer pattern), and reports statistics via POSIX shared memory (IPC). Demonstrates advanced C++ system programming, network protocols, and concurrent processing.",
      link: "https://github.com/Bannump/udp-multi-threading.git",
      linkText: "View on GitHub",
      icon: "⚡",
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-mono font-bold mb-16 text-accent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* RAG Project */}
          <div className="card group bg-black/50 border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="text-4xl mb-4">{projects.rag.icon}</div>
            <h3 className="text-2xl font-mono font-semibold mb-4 text-foreground">
              {projects.rag.title}
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {projects.rag.description}
            </p>
            <a
              href={projects.rag.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-mono font-semibold hover:text-accent-dark transition-colors group-hover:translate-x-1 duration-300"
            >
              {projects.rag.linkText}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Edge AI Face Recognition Project */}
          <div className="card group bg-black/50 border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="text-4xl mb-4">{projects.edgeAI.icon}</div>
            <h3 className="text-2xl font-mono font-semibold mb-4 text-foreground">
              {projects.edgeAI.title}
            </h3>
            {projects.edgeAI.techStack && (
              <p className="text-foreground/70 mb-3 font-mono text-sm">
                <span className="text-accent font-semibold">Stack:</span>{" "}
                {projects.edgeAI.techStack}
              </p>
            )}
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {projects.edgeAI.description}
            </p>
            <a
              href={projects.edgeAI.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-mono font-semibold hover:text-accent-dark transition-colors group-hover:translate-x-1 duration-300"
            >
              {projects.edgeAI.linkText}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* GPU Accelerated Image Processing Project */}
          <div className="card group bg-black/50 border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="text-4xl mb-4">{projects.gpu.icon}</div>
            <h3 className="text-2xl font-mono font-semibold mb-4 text-foreground">
              {projects.gpu.title}
            </h3>
            {projects.gpu.techStack && (
              <p className="text-foreground/70 mb-3 font-mono text-sm">
                <span className="text-accent font-semibold">Stack:</span>{" "}
                {projects.gpu.techStack}
              </p>
            )}
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {projects.gpu.description}
            </p>
            <a
              href={projects.gpu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-mono font-semibold hover:text-accent-dark transition-colors group-hover:translate-x-1 duration-300"
            >
              {projects.gpu.linkText}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* UDP Multi-Threading Project */}
          <div className="card group bg-black/50 border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="text-4xl mb-4">{projects.udp.icon}</div>
            <h3 className="text-2xl font-mono font-semibold mb-4 text-foreground">
              {projects.udp.title}
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {projects.udp.description}
            </p>
            <a
              href={projects.udp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-mono font-semibold hover:text-accent-dark transition-colors group-hover:translate-x-1 duration-300"
            >
              {projects.udp.linkText}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
