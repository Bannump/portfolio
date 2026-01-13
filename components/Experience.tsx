export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer (Cloud & AI Ops)",
      date: "Aug 2022 – Nov 2023",
      company: "Amagi Media Labs",
      location: "Bengaluru, India",
      tech: "AWS EKS, FastAPI, ArgoCD, Terraform, LLMs",
      achievements: [
        {
          category: "AI & Automation",
          description:
            "Engineered ML data pipelines to ingest server logs into LLMs, automating root cause analysis and reducing manual debugging time by 60%.",
        },
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
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-mono font-bold mb-16 text-accent">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black/50 border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-mono font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/80 font-mono">
                    {exp.company}
                    {exp.location && ` | ${exp.location}`}
                  </p>
                </div>
                <span className="text-accent font-mono text-sm sm:text-base whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              {exp.tech && (
                <p className="text-foreground/70 mb-4 font-mono text-sm">
                  <span className="text-accent font-semibold">Tech:</span>{" "}
                  {exp.tech}
                </p>
              )}
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-foreground leading-relaxed flex items-start"
                  >
                    <span className="text-accent mr-2 mt-1">▹</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
