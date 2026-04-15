export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 md:mb-16 text-accent">
          Experience
        </h2>

        <div className="space-y-4 sm:space-y-6">

          {/* ── Graduate Research Assistant ── */}
          <div className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2">
                  Graduate Research Assistant
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 font-mono">
                  Arizona State University · Tempe, AZ
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                Aug 2025 – Dec 2025
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/70 font-mono mb-4">
              Software Verification, Validation &amp; Testing
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Contributing to research in software verification, validation, and automated testing — focused on fault analysis and correctness proofs for distributed system components.",
                "Supporting manuscript preparation through technical synthesis, literature-backed analysis, and structured academic content development.",
                "Designing course materials covering formal verification techniques, automated testing frameworks, and systematic fault analysis for graduate-level students.",
              ].map((bullet, i) => (
                <li key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed flex items-start">
                  <span className="text-accent mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Amagi Media Labs ── */}
          <div className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2">
                  Software Implementation Engineer
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 font-mono">
                  Amagi Media Labs · Bengaluru, India
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                Aug 2022 – Nov 2023
              </span>
            </div>
            <p className="text-foreground/70 mb-4 font-mono text-xs sm:text-sm">
              <span className="text-accent font-semibold">Stack:</span>{" "}
              AWS EKS · Python · FastAPI · Kubernetes · Docker · ArgoCD · Terraform · Linux
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed mb-8">
              Engineered large-scale broadcast infrastructure on AWS EKS — owning reliability,
              debugging live streaming failures, and automating the operational layer that kept
              15+ production microservices stable for major media clients.
            </p>

            {/* Story 1: Reliability Incident */}
            <h4 className="text-base sm:text-lg md:text-xl font-mono font-semibold text-foreground mb-3">
              Stream Reliability &amp; Incident Response
            </h4>
            <div className="space-y-3 mb-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">The Incident:</span>{" "}
                A critical client&apos;s live stream fell back to rescue content due to an audio
                silence condition — a silent failure requiring rapid diagnosis across EC2,
                Kubernetes pods, and microservice logs.
              </p>
              <p>
                <span className="text-accent font-semibold">The Investigation:</span>{" "}
                Manually traced audio silence flags across distributed nodes and identified that
                the provider had primary and secondary input streams but no automated health
                check or recovery mechanism between them.
              </p>
              <p>
                <span className="text-accent font-semibold">The Fix:</span>{" "}
                Implemented threshold-based failover logic that monitored audio presence and
                automatically switched to the healthy secondary stream when silence persisted
                beyond a defined window — eliminating rescue content fallback and improving
                stream resilience for the client.
              </p>
            </div>

            {/* Story 2: Streaming Platform Debugging */}
            <h4 className="text-base sm:text-lg md:text-xl font-mono font-semibold text-foreground mb-3">
              Streaming Platform &amp; Protocol Debugging
            </h4>
            <div className="space-y-3 mb-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">Scope:</span>{" "}
                Investigated manifest behavior, proxy chain issues, and SCTE marker handling
                across production streaming services — working across platform, infrastructure,
                and client-facing engineering boundaries to isolate live traffic failures.
              </p>
              <p>
                <span className="text-accent font-semibold">Codec &amp; Protocol Work:</span>{" "}
                Debugged H.264/H.265 codec configurations and AWS MediaLive settings to resolve
                client-facing playback errors across WebRTC and WebRTS streaming workflows,
                reducing playback errors by 95%.
              </p>
              <p>
                <span className="text-accent font-semibold">Backend:</span>{" "}
                Built non-blocking FastAPI services for high-concurrency streaming control
                operations; integrated hardware (StreamDeck) for real-time broadcast operator
                control.
              </p>
            </div>

            {/* Story 3: AI Observability */}
            <h4 className="text-base sm:text-lg md:text-xl font-mono font-semibold text-foreground mb-3">
              AI-Assisted Observability &amp; RCA Automation
            </h4>
            <div className="space-y-3 mb-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">The Problem:</span>{" "}
                Manual root cause analysis was a bottleneck — engineers repeatedly inspected
                the same standard logs to diagnose recurring failures, slowing incident
                resolution by hours.
              </p>
              <p>
                <span className="text-accent font-semibold">The Solution:</span>{" "}
                Built an AI-assisted observability pipeline that ingested server logs into LLMs
                for automated semantic pattern analysis, surfacing likely failure causes without
                manual log inspection.
              </p>
              <p>
                <span className="text-accent font-semibold">Impact:</span>{" "}
                Reduced manual debugging time by 60%, shifting engineers from reactive
                log-reading to reviewing curated summaries. Also deployed the Capsequo ML
                captioning pipeline, reducing video stream processing latency by 36%.
              </p>
            </div>

            {/* Infrastructure */}
            <h4 className="text-base sm:text-lg md:text-xl font-mono font-semibold text-foreground mb-3">
              Infrastructure Automation &amp; GitOps
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">GitOps:</span>{" "}
                Transitioned deployments to ArgoCD for version-controlled, reproducible
                infrastructure — achieving 99.9% release stability and a 30% increase in
                deployment frequency across 15+ services.
              </p>
              <p>
                <span className="text-accent font-semibold">IaC &amp; Onboarding:</span>{" "}
                Automated customer environment provisioning with Terraform (VPCs, subnets,
                CDN) — cut manual setup time by 90% and CDN delivery failures by 95%.
              </p>
            </div>
          </div>

          {/* ── Blueplanet Solutions ── */}
          <div className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-1 sm:mb-2">
                  Software Engineer Intern
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 font-mono">
                  Blueplanet Solutions Inc. · India
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm md:text-base whitespace-nowrap sm:ml-4">
                Apr 2021 – Jun 2021
              </span>
            </div>
            <p className="text-foreground/70 mb-4 font-mono text-xs sm:text-sm">
              <span className="text-accent font-semibold">Stack:</span>{" "}
              MySQL · PHP · JavaScript · Linux
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed mb-5">
              Optimized full-stack performance for a campus portal serving 1,000+ users —
              cutting search latency by 60% and resolving critical memory leaks through
              systematic log analysis.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Database Optimization", text: "Analyzed MySQL execution plans, refactored monolithic queries into optimized stored procedures, and implemented proper indexing — reduced query execution time by 50%, enabling sub-second retrieval." },
                { label: "Root Cause Analysis", text: "Parsed web server logs to trace intermittent memory leaks caused by unclosed DB connections in legacy PHP. Patched connection handling to ensure cleanup, improving stability by 30%." },
                { label: "Frontend", text: "Built an async search UI with JavaScript (AJAX) and PHP to replace full-page reloads — improved time-to-result by 60%." },
              ].map(({ label, text }, i) => (
                <li key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed flex items-start">
                  <span className="text-accent mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>
                    <span className="text-accent font-semibold">{label}:</span>{" "}{text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
