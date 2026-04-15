"use client";

import { useState, useEffect } from "react";

const sections = ["experience", "skills", "projects", "contact"] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="font-mono text-lg sm:text-xl font-semibold text-accent hover:text-accent/80 transition-colors">
            SP
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`relative font-mono text-sm lg:text-base capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? "text-accent"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="md:hidden text-foreground hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-accent/20 bg-background/95 backdrop-blur-md">
            <ul className="flex flex-col space-y-1 py-4 px-4">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={closeMobileMenu}
                    className={`block font-mono text-base py-2 capitalize transition-colors ${
                      activeSection === section
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
