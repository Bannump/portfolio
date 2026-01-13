"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-xl font-semibold text-accent">
            SP
          </div>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#experience"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
