"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  ArrowUpRight 
} from "lucide-react";

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Pipeline", href: "#pipeline" },
  { name: "Practice", href: "#practice" },
  { name: "Experience", href: "#experience" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-background/85 backdrop-blur-md border-b border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cobalt transition-transform duration-300 group-hover:scale-125" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-foreground uppercase">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase -mt-0.5">
                Full Stack &middot; Udupi / Mangaluru
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono tracking-wider text-muted-foreground uppercase hover:text-foreground hover:bg-muted/50 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="HS_Karthik_Resume_Full_Stack_Developer.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider uppercase border border-border hover:border-cobalt/50 bg-elevated text-foreground hover:text-cobalt rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt shadow-xs"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border border-border bg-elevated hover:bg-muted/70 text-foreground rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt shadow-xs"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-foreground transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden p-2 border border-border bg-elevated text-foreground rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between border-b border-border"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Navigation Index
            </span>
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-lg font-display font-medium text-foreground hover:text-cobalt border-b border-border/50 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-muted-foreground">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="HS_Karthik_Resume_Full_Stack_Developer.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-foreground text-background font-mono text-xs uppercase tracking-wider rounded font-medium"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-3">
              <span>{portfolioData.personal.location}</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-foreground"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
