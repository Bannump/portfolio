"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/0af3cabb-91ee-4717-b74b-68f1609c805f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:9',message:'Navigation useEffect running',data:{hasWindow:typeof window!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    const handleScroll = () => {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/0af3cabb-91ee-4717-b74b-68f1609c805f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:11',message:'Scroll event fired',data:{scrollY:window.scrollY,isScrolled:window.scrollY>20},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          <div className="font-mono text-lg sm:text-xl font-semibold text-accent">
            SP
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li>
              <a
                href="#experience"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm lg:text-base"
                onClick={(e)=>{fetch('http://127.0.0.1:7243/ingest/0af3cabb-91ee-4717-b74b-68f1609c805f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:42',message:'Experience link clicked',data:{href:'#experience',hasTarget:!!document.querySelector('#experience')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});}}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm lg:text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm lg:text-base"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors font-mono text-sm lg:text-base"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-accent/20 bg-background/95 backdrop-blur-md">
            <ul className="flex flex-col space-y-4 py-4 px-4">
              <li>
                <a
                  href="#experience"
                  onClick={closeMobileMenu}
                  className="block text-foreground hover:text-accent transition-colors font-mono text-base py-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={closeMobileMenu}
                  className="block text-foreground hover:text-accent transition-colors font-mono text-base py-2"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={closeMobileMenu}
                  className="block text-foreground hover:text-accent transition-colors font-mono text-base py-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block text-foreground hover:text-accent transition-colors font-mono text-base py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
