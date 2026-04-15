"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const amagiMetrics = [
  { value: "15+", label: "Microservices" },
  { value: "99.9%", label: "Release Stability" },
  { value: "60%", label: "Faster RCA" },
  { value: "90%", label: "Setup Reduction" },
  { value: "95%", label: "Fewer CDN Failures" },
];

export default function Experience() {
  const [amagiExpanded, setAmagiExpanded] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black border-t border-accent/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 data-reveal className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 sm:mb-12 md:mb-16 text-accent">
          Experience
        </h2>

        <div className="space-y-4 sm:space-y-6">

          {/* ── Graduate Research Assistant ── */}
          <div data-reveal className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-0.5">
                  Graduate Research Assistant
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 font-mono">
                  Arizona State University · Tempe, AZ
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">
                Jan 2026 – Present
              </span>
            </div>
            <p className="text-xs text-foreground/50 font-mono mb-4 tracking-wide uppercase">
              Software Verification, Validation &amp; Testing
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Research fault analysis and correctness properties for distributed system components, contributing to active work in software verification, validation, and automated testing.",
                "Prepare publication-ready manuscripts through technical synthesis, literature analysis, and structured academic writing in collaboration with faculty.",
                "Develop course materials on formal verification techniques and automated testing frameworks for graduate-level instruction.",
              ].map((bullet, i) => (
                <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start">
                  <span className="text-accent mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Amagi Media Labs ── */}
          <div data-reveal className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-0.5">
                  Software Implementation Engineer
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 font-mono">
                  Amagi Media Labs · Bengaluru, India
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">
                Aug 2022 – Nov 2023
              </span>
            </div>
            <p className="text-xs text-foreground/50 font-mono mb-4 tracking-wide">
              AWS EKS · Python · FastAPI · Kubernetes · Docker · ArgoCD · Terraform · Linux
            </p>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {amagiMetrics.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center border border-accent/25 rounded-md px-3 py-1.5 bg-accent/5 min-w-[68px]"
                >
                  <span className="text-accent font-mono font-bold text-sm leading-tight">{value}</span>
                  <span className="text-foreground/50 font-mono text-[9px] leading-tight text-center mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-foreground leading-relaxed mb-5">
              Owned reliability and operations for large-scale broadcast streaming infrastructure
              on AWS EKS — debugging live failures, building failover logic, and running the
              automation layer that kept 15+ production microservices stable for major media
              clients.
            </p>

            {/* Resume bullet points */}
            <ul className="space-y-2 sm:space-y-2.5 mb-7">
              {[
                "Optimized media workflow latency by 93.75%, from 8 minutes to 30 seconds, by building asynchronous Python/FastAPI frame and metadata pipelines with CV models.",
                "Reduced manual debugging time by 60% by designing an AI-powered observability pipeline that ingested server logs into LLMs to automate root cause analysis.",
                "Led the first successful deployment of Amagi-native ML speech-to-text services, Capsequo and Akashvani, and enabled org-wide adoption by training teams across the organization on deployment workflows.",
                "Improved deployment frequency by 30% for a Kubernetes platform hosting 15+ microservices by owning AWS EKS releases, implementing ArgoCD GitOps, and maintaining 99.9% rollout stability.",
              ].map((bullet, i) => (
                <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start">
                  <span className="text-accent mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Story 1 — always visible */}
            <h4 className="text-sm sm:text-base font-mono font-semibold text-foreground mb-3 uppercase tracking-wide">
              Stream Reliability &amp; Incident Response
            </h4>
            <div className="space-y-2.5 mb-6 text-sm text-foreground/80 leading-relaxed">
              <p>
                <span className="text-accent font-semibold">Incident:</span>{" "}
                A critical client&apos;s live stream fell back to rescue content due to an audio
                silence condition — a silent failure that required tracing logs across EC2
                instances, Kubernetes pods, and multiple microservices to diagnose.
              </p>
              <p>
                <span className="text-accent font-semibold">Finding:</span>{" "}
                The provider had primary and secondary input streams but no automated health
                check or switching mechanism. Audio silence propagated undetected until the
                playout system gave up and triggered rescue content.
              </p>
              <p>
                <span className="text-accent font-semibold">Fix:</span>{" "}
                Implemented threshold-based failover logic that monitors audio presence and
                switches to the healthy secondary stream when silence persists beyond a defined
                window — eliminating rescue fallback and hardening the client&apos;s stream
                against input failures.
              </p>
            </div>

            {/* Expandable stories 2–4 */}
            <div className={`expandable${amagiExpanded ? " open" : ""}`}>
              <div>
                {/* Story 2 */}
                <h4 className="text-sm sm:text-base font-mono font-semibold text-foreground mb-3 uppercase tracking-wide pt-1">
                  Streaming Platform &amp; Protocol Debugging
                </h4>
                <div className="space-y-2.5 mb-6 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    <span className="text-accent font-semibold">Scope:</span>{" "}
                    Investigated manifest behavior, proxy chain issues, and SCTE marker handling
                    across production streaming services — crossing platform, infrastructure, and
                    client-facing boundaries to isolate live traffic failures.
                  </p>
                  <p>
                    <span className="text-accent font-semibold">Codec &amp; Protocol Work:</span>{" "}
                    Debugged H.264/H.265 codec configurations and AWS MediaLive settings to resolve
                    client-facing playback errors across WebRTC and WebRTS workflows — reduced
                    playback errors by 95%.
                  </p>
                  <p>
                    <span className="text-accent font-semibold">Backend:</span>{" "}
                    Built non-blocking FastAPI services for high-concurrency streaming control;
                    integrated StreamDeck hardware for real-time broadcast operator control.
                  </p>
                </div>

                {/* Story 3 */}
                <h4 className="text-sm sm:text-base font-mono font-semibold text-foreground mb-3 uppercase tracking-wide">
                  AI-Assisted Observability &amp; RCA Automation
                </h4>
                <div className="space-y-2.5 mb-6 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    <span className="text-accent font-semibold">Problem:</span>{" "}
                    RCA was a bottleneck — engineers repeatedly inspected the same logs to diagnose
                    recurring failures, with each incident costing hours of manual investigation.
                  </p>
                  <p>
                    <span className="text-accent font-semibold">Solution:</span>{" "}
                    Built an AI-assisted observability pipeline that ingests server logs into LLMs
                    for automated semantic pattern analysis, surfacing likely failure causes without
                    manual inspection.
                  </p>
                  <p>
                    <span className="text-accent font-semibold">Impact:</span>{" "}
                    Reduced manual debugging time by 60%. Also deployed the Capsequo ML captioning
                    pipeline, cutting video stream processing latency by 36%.
                  </p>
                </div>

                {/* Story 4 */}
                <h4 className="text-sm sm:text-base font-mono font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Infrastructure Automation &amp; GitOps
                </h4>
                <div className="space-y-2.5 mb-2 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    <span className="text-accent font-semibold">GitOps:</span>{" "}
                    Moved deployments to ArgoCD for version-controlled, reproducible releases —
                    99.9% rollout stability and 30% higher deployment frequency across 15+ services.
                  </p>
                  <p>
                    <span className="text-accent font-semibold">IaC:</span>{" "}
                    Automated customer environment provisioning with Terraform (VPCs, subnets, CDN)
                    — cut manual setup by 90% and CDN delivery failures by 95%.
                  </p>
                </div>
              </div>
            </div>

            {/* Expand / Collapse toggle */}
            <button
              onClick={() => setAmagiExpanded((v) => !v)}
              className="mt-4 flex items-center gap-1.5 text-accent/70 hover:text-accent font-mono text-xs transition-colors duration-200 group"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${amagiExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {amagiExpanded ? "Show less" : "Show 3 more stories"}
            </button>
          </div>

          {/* ── Blueplanet Solutions ── */}
          <div data-reveal className="bg-black/50 border border-accent/20 rounded-lg p-4 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-foreground mb-0.5">
                  Software Engineer Intern
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 font-mono">
                  Blueplanet Solutions Inc. · India
                </p>
              </div>
              <span className="text-accent font-mono text-xs sm:text-sm whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">
                Apr 2021 – Jun 2021
              </span>
            </div>
            <p className="text-xs text-foreground/50 font-mono mb-4 tracking-wide">
              MySQL · PHP · JavaScript · Linux
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Database Optimization", text: "Analyzed MySQL execution plans, refactored queries into optimized stored procedures with proper indexing — cut query execution time by 50%, enabling sub-second retrieval for 1,000+ user profiles." },
                { label: "Root Cause Analysis", text: "Traced intermittent memory leaks to unclosed DB connections in legacy PHP by parsing web server logs. Patched connection handling — improved stability by 30% and eliminated recurring crashes." },
                { label: "Frontend", text: "Built an async search UI with JavaScript (AJAX) and PHP to replace full-page reloads — improved time-to-result by 60%." },
              ].map(({ label, text }, i) => (
                <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start">
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
