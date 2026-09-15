"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center mt-4 md:mt-6 px-4 md:px-0 transition-transform">
        <div 
          className={`pointer-events-auto flex items-center justify-between px-5 py-3 md:px-6 md:py-3 rounded-full transition-all duration-700 w-full md:w-auto md:min-w-[700px] ${
            isScrolled
              ? "bg-background/70 backdrop-blur-2xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
              : "bg-background/30 backdrop-blur-md border border-border/20 md:border-transparent md:bg-transparent md:backdrop-blur-none"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center shrink-0 mr-8 md:mr-12 group">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground mr-2 md:mr-3 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary" />
            <a
              href="#"
              className="text-xs md:text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              {portfolioData.personal.name}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            <div className="flex items-center gap-2 text-[11px] lg:text-[13px] font-mono uppercase tracking-widest text-muted-foreground">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-3 py-1.5 transition-colors z-10"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${hoveredIndex === index ? 'text-foreground' : ''}`}>
                    {link.name}
                  </span>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-muted/30 dark:bg-muted/50 rounded-md -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-border/50">
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="text-muted-foreground hover:text-foreground transition-all duration-500 hover:rotate-90 p-1"
                  aria-label="Toggle Theme"
                  title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
              
              <a
                href="/HS_Karthik_Resume_latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[10px] font-mono uppercase tracking-widest px-5 py-2 rounded-full overflow-hidden group border border-border/50 bg-background hover:border-foreground/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-foreground translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                  Resume
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="text-muted-foreground hover:text-foreground transition-transform duration-500 active:rotate-90 p-2"
              >
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              className="text-foreground p-2 relative z-50 transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col gap-6 text-4xl font-light tracking-tight">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, ease: "easeOut" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-muted-foreground transition-colors origin-left"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/HS_Karthik_Resume_latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.1 }}
                className="text-xl text-muted-foreground hover:text-foreground mt-8 font-mono tracking-widest uppercase border border-border w-fit px-8 py-4 rounded-full"
              >
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
