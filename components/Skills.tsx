"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS EKS", "EC2", "Lambda", "S3", "Greengrass", "MediaLive", "Load Balancer",
      "Kubernetes", "Docker", "Linux", "Terraform", "Azure",
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      "Python", "FastAPI", "Go", "REST APIs", "Microservices",
      "Async / Non-blocking I/O", "Node.js", "Flask", "Express.js",
    ],
  },
  {
    title: "Reliability & DevOps",
    skills: [
      "GitOps", "ArgoCD", "GitHub Actions", "Jenkins",
      "Grafana", "Shell Scripting", "Observability", "On-call / Incident Ops",
    ],
  },
  {
    title: "Systems Programming",
    skills: [
      "C++", "CUDA / PyCUDA", "Multi-threading", "POSIX IPC",
      "UDP / TCP", "Network Protocols", "Shared Memory", "Concurrency",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "LLMs (GPT-4, Claude)", "RAG", "LangChain", "Computer Vision",
      "PyTorch", "TensorFlow", "Scikit-learn", "OpenAI API", "Anthropic API",
    ],
  },
  {
    title: "Data & Storage",
    skills: [
      "PostgreSQL", "Redis", "ChromaDB", "MySQL", "Firebase", "MariaDB",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "Go", "TypeScript", "Java", "SQL", "Kotlin", "C"],
  },
];

// Row-stagger: cards in the same row reveal with slight offsets
const rowDelays = [0, 80, 160, 0, 80, 160, 0];

export default function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 data-reveal className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 text-accent">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              data-reveal
              style={{ transitionDelay: `${rowDelays[idx] ?? 0}ms` }}
              className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-5 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300"
            >
              <h3 className="text-accent font-mono font-semibold mb-3 text-xs tracking-widest uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] sm:text-xs text-foreground/70 border border-foreground/10 px-2 py-0.5 rounded bg-white/5 hover:border-accent/30 hover:text-foreground/90 transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
