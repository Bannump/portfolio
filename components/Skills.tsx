export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: "LLMs (GPT-4, Claude, OpenAI API), RAG (Retrieval-Augmented Generation), LangChain, Computer Vision, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib",
    },
    {
      title: "GPU & High-Performance Computing",
      skills: "CUDA Programming, PyCUDA, Shared Memory Optimization, Loop Unrolling, Tiling, Grid-Block-Thread Architecture",
    },
    {
      title: "Cloud & DevOps",
      skills: "AWS (EKS, Lambda, S3, EC2, Greengrass, Load Balancer), Kubernetes, Docker, GitOps, ArgoCD, Jenkins, GitHub Actions, Linux, Terraform, Azure (Fundamental)",
    },
    {
      title: "Languages",
      skills: "Python, C++, Java, Go, TypeScript, JavaScript, SQL, PHP, R, Kotlin, C",
    },
    {
      title: "Backend & Web Frameworks",
      skills: "FastAPI, Node.js, React.js, Express.js, Flask, REST APIs, Microservices, HTML/CSS, Bootstrap, Android Studio",
    },
    {
      title: "Databases",
      skills: "PostgreSQL, Redis, ChromaDB (Vector DB), MySQL, Google Firebase, MariaDB",
    },
    {
      title: "Developer Tools",
      skills: "Cursor (AI Editor), GitHub Copilot, Jira, Grafana, Shell Scripting",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-mono font-bold mb-8 text-accent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/50 border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-accent font-mono font-semibold mb-3 text-sm">
                {category.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
