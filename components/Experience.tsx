export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer (Cloud & DevOps)",
      date: "Aug 2022 – Nov 2023",
      company: "Amagi Media Labs",
      location: "Bengaluru, India",
      tech: "AWS EKS, FastAPI, ArgoCD, Terraform, LLMs",
      achievements: [
        {
          category: "Cloud Native Systems",
          description:
            "Deployed and scaled a Kubernetes-based microservices platform (15+ services), achieving 99.9% release stability and increasing deployment frequency by 30%.",
        },
        {
          category: "Backend Engineering",
          description:
            "Designed asynchronous RESTful APIs using FastAPI and Python, significantly reducing data-processing latency for internal tools.",
        },
        {
          category: "DevOps & IaC",
          description:
            "Automated customer onboarding using Terraform and Python, cutting manual setup efforts by 90% and reducing CDN delivery failures by 95%.",
        },
        {
          category: "AI & Automation",
          description:
            "Engineered ML data pipelines to ingest server logs into LLMs, automating root cause analysis and reducing manual debugging time by 60%.",
        },
      ],
    },
    {
      title: "Software Engineer Intern",
      date: "Apr 2021 – June 2021",
      company: "Blueplanet Solutions Inc.",
      location: "India",
      tech: "MySQL, PHP, JavaScript",
      achievements: [
        {
          category: "Performance Optimization",
          description:
            "Refactored MySQL stored procedures and application interfaces, reducing search latency by 60% for over 1,000 user profiles.",
        },
        {
          category: "Stability Engineering",
          description:
            "Diagnosed server logs to resolve critical memory leaks, increasing application release stability by 30%.",
        },
      ],
    },
    {
      title: "Graduate Teaching Assistant / Grader",
      date: "Aug 2025 – Dec 2025",
      company: "Arizona State University",
      location: "Tempe, AZ",
      tech: null,
      achievements: [
        {
          category: null,
          description:
            "Evaluated graduate-level implementations of Applied Cryptography protocols, focusing on security standards and encryption logic.",
        },
        {
          category: null,
          description:
            "Mentored students on securing distributed systems against vulnerabilities.",
        },
      ],
    },
    {
      title: "AI Solutions Architect (Independent)",
      date: "Oct 2025 – Present",
      company: "Passion Projects",
      location: null,
      tech: null,
      achievements: [
        {
          category: "RAG System",
          description:
            "Architected a 'My Personal Agent' using ChromaDB and GPT-4, utilizing Clean Architecture to decouple LLM providers.",
        },
        {
          category: "Multimodal AI",
          description:
            "Integrated GPT-4 Vision for real-time visual diagnostics and built an ATS Resume Optimizer using vector embeddings.",
        },
        {
          category: "High-Performance Computing",
          description:
            "Engineered a multi-threaded UDP server in C++ with thread pooling and mutex locking to simulate real-time telematics transmission.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 md:mb-16 text-accent">
          Professional Experience
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => {
            const isAmagi = exp.company === "Amagi Media Labs";
            if (isAmagi) {
              return (
                <div
                  key={index}
                  className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2 break-words">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 font-mono break-words">
                        {exp.company}
                        {exp.location && ` | ${exp.location}`}
                      </p>
                    </div>
                    <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-3 sm:mb-4 font-mono text-xs sm:text-sm break-words">
                    <span className="text-accent font-semibold">Key Stack:</span>{" "}
                    AWS EKS, FastAPI, ArgoCD, Terraform, GenAI
                  </p>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed break-words mb-6">
                    Automated root cause analysis using LLMs (60% time
                    reduction) and managed 15+ microservices on AWS EKS.
                  </p>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    Scaling Cloud-Native Infrastructure (AWS & Kubernetes)
                  </h4>
                  <div className="space-y-3 mb-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">
                        The Infrastructure:
                      </span>{" "}
                      Owned the lifecycle of a high-availability microservices
                      platform hosting 15+ critical services on AWS EKS.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Reliability Engineering:
                      </span>{" "}
                      Transitioned deployment to GitOps using ArgoCD, ensuring
                      version-controlled and reproducible infra. Achieved 99.9%
                      release stability and increased deployment frequency by
                      30%.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Incident Response (DRI):
                      </span>{" "}
                      Resolved a critical streaming outage by tracing concurrent
                      inbound streams across distributed nodes, restoring full
                      service availability within minutes.
                    </p>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    High-Performance Backend & Media Streaming
                  </h4>
                  <div className="space-y-3 mb-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">
                        Protocol Optimization:
                      </span>{" "}
                      Engineered real-time streaming workflows for WebRTC and
                      WebRTS clients. Optimized H.264/H.265 codecs and AWS
                      MediaLive configurations to maximize device compatibility,
                      reducing playback errors by 95%.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Backend Design:
                      </span>{" "}
                      Built asynchronous, non-blocking REST APIs using FastAPI
                      (Python) to handle high-concurrency requests, reducing
                      data processing latency.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Hardware Integration:
                      </span>{" "}
                      Integrated StreamDeck client systems to let broadcast
                      operators control media dashboards in real time.
                    </p>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    DevOps Automation & Infrastructure as Code (IaC)
                  </h4>
                  <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">
                        Eliminating Toil:
                      </span>{" "}
                      Automated customer onboarding with Terraform and Python to
                      provision VPCs, subnets, and customer environments
                      instantly.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">Impact:</span>{" "}
                      Cut manual setup efforts by 90%, turning a multi-day
                      process into a one-click operation.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Quality Assurance:
                      </span>{" "}
                      Automated CDN configuration checks to proactively catch
                      delivery issues, reducing CDN failures by 95%.
                    </p>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3 mt-6">
                    Architecting AI-Driven Observability & ML Pipelines
                  </h4>
                  <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">
                        The Problem:
                      </span>{" "}
                      Root cause analysis for server failures was manual and
                      slow, often involving hours of sifting through raw logs.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        The Solution:
                      </span>{" "}
                      Engineered a custom GenAI Observability Pipeline that
                      ingested terabytes of server logs into Large Language
                      Models (LLMs). The system semantically analyzed error
                      patterns to predict failures before downtime.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">Impact:</span>{" "}
                      Automated root cause analysis reduced manual debugging
                      time by 60%, allowing the team to focus on feature
                      development.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">
                        Capsequo Project:
                      </span>{" "}
                      Led deployment of Capsequo, a Python-based ML captioning
                      pipeline. Optimized real-time API integration to reduce
                      video stream processing latency by 36%, improving live
                      broadcast viewer experience.
                    </p>
                  </div>
                </div>
              );
            }

            const isBlueplanet = exp.company === "Blueplanet Solutions Inc.";
            if (isBlueplanet) {
              return (
                <div
                  key={index}
                  className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2 break-words">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 font-mono break-words">
                        {exp.company}
                        {exp.location && ` | ${exp.location}`}
                      </p>
                    </div>
                    <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-3 sm:mb-4 font-mono text-xs sm:text-sm break-words">
                    <span className="text-accent font-semibold">Tech Stack:</span>{" "}
                    MySQL, PHP, JavaScript, Linux System Logs
                  </p>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed break-words mb-6">
                    Optimized full-stack performance for the &quot;Campus Club&quot;
                    portal, serving 1,000+ users. Reduced search latency by 60%
                    and resolved critical memory leaks.
                  </p>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    Database Performance Optimization
                  </h4>
                  <div className="space-y-3 mb-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">The Context:</span>{" "}
                      As the &quot;Campus Club&quot; portal grew to 1,000+ profiles,
                      search queries degraded to 3+ seconds, hurting UX.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">The Action:</span>{" "}
                      Analyzed MySQL execution plans, refactored monolithic
                      queries into optimized stored procedures, removed
                      redundant joins, and implemented proper indexing.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">The Result:</span>{" "}
                      Reduced server-side query execution time by 50%, enabling
                      sub-second data retrieval.
                    </p>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    Frontend Modernization & UX
                  </h4>
                  <div className="space-y-3 mb-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">The Action:</span>{" "}
                      Built a responsive, asynchronous search UI using
                      JavaScript (AJAX) and PHP, replacing full-page reloads.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">The Result:</span>{" "}
                      Improved time-to-result by 60% and reduced server
                      bandwidth usage.
                    </p>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-mono font-semibold text-foreground mb-3">
                    Stability & Root Cause Analysis
                  </h4>
                  <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <p>
                      <span className="text-accent font-semibold">The Challenge:</span>{" "}
                      Intermittent crashes and out-of-memory errors during peak
                      usage.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">The Debugging:</span>{" "}
                      Parsed web server logs to trace a memory leak caused by
                      unclosed database connections in legacy PHP.
                    </p>
                    <p>
                      <span className="text-accent font-semibold">The Result:</span>{" "}
                      Patched connection handling to ensure cleanup, improving
                      stability by 30% and eliminating recurring crashes.
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2 break-words">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/80 font-mono break-words">
                      {exp.company}
                      {exp.location && ` | ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                    {exp.date}
                  </span>
                </div>
                {exp.tech && (
                  <p className="text-foreground/70 mb-3 sm:mb-4 font-mono text-xs sm:text-sm break-words">
                    <span className="text-accent font-semibold">Tech:</span>{" "}
                    {exp.tech}
                  </p>
                )}
                <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-foreground leading-relaxed flex items-start break-words"
                    >
                      <span className="text-accent mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        {achievement.category && (
                          <span className="text-accent font-semibold">
                            {achievement.category}:
                          </span>
                        )}{" "}
                        {achievement.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
