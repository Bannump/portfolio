import Image from "next/image";

const proofPoints = [
  "MS CS · Arizona State University",
  "Ex-Amagi Media Labs",
  "AWS · Kubernetes · Python · Go",
  "Backend · Reliability · Distributed Systems",
];

export default function Hero() {
  return (
    <header className="hero min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* Left: Content */}
          <div className="text-left space-y-6 lg:space-y-7 relative z-10 min-w-0 w-full">

            {/* Name + Role */}
            <div className="space-y-2">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold text-foreground leading-tight animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                <span className="text-accent">Saratchandra Patnaik</span>
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] text-foreground font-mono leading-snug animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                Backend &amp; Distributed Systems Engineer
              </p>
            </div>

            {/* Proof points */}
            <div className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "240ms" }}>
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="inline-block border border-accent/30 text-accent/80 font-mono text-xs px-3 py-1 rounded-full bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-colors duration-200"
                >
                  {point}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="border-t border-accent/20 pt-5 space-y-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed font-mono">
                I specialize in backend engineering, cloud infrastructure, and systems
                reliability — with production depth in{" "}
                <span className="text-accent font-semibold">distributed streaming systems</span>,{" "}
                <span className="text-accent font-semibold">concurrent programming in C++</span>,
                edge ML inference, and AI-driven observability tooling.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-mono">
                At{" "}
                <span className="text-accent font-semibold">Amagi Media Labs</span> I owned
                reliability for 15+ microservices serving live broadcast clients on{" "}
                <span className="text-accent font-semibold">AWS EKS</span>. I hold an MS in
                Computer Science from{" "}
                <span className="text-accent font-semibold">Arizona State University</span> and
                currently research fault analysis and software verification in distributed systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "480ms" }}>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-accent text-background font-mono font-semibold text-sm sm:text-base rounded-md hover:bg-accent-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 text-center"
              >
                View My Work
              </a>
              <a
                href="/Saratchandra_Resume.pdf"
                download
                className="px-6 sm:px-8 py-3 border border-accent text-accent font-mono font-semibold text-sm sm:text-base rounded-md hover:bg-accent/10 transition-all duration-300 hover:scale-105 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5 animate-fade-up" style={{ animationDelay: "580ms" }}>
              <a
                href="https://github.com/Bannump"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/saratchandra-patnaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end w-full animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none lg:w-full">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/20 bg-gradient-to-br from-accent/5 to-black/30 group-hover:border-accent/50 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent z-20" />
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent/50 rounded-tl z-20" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent/50 rounded-tr z-20" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent/50 rounded-bl z-20" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent/50 rounded-br z-20" />
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Saratchandra Patnaik — Backend & Distributed Systems Engineer"
                  width={600}
                  height={720}
                  className="w-full h-full object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
