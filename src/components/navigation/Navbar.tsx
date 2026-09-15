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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-sm font-semibold tracking-widest uppercase hover:text-foreground/70 transition-colors"
            >
              {portfolioData.personal.name}
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="w-8 flex justify-center">
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                  aria-label="Toggle Theme"
                  title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-border px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-all"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <div className="w-8 flex justify-center z-50">
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                  aria-label="Toggle Theme"
                  title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
            </div>
            <button
              className="z-50 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col gap-8 text-3xl font-light">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-zinc-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.1 }}
                className="text-xl text-zinc-400 hover:text-white mt-4"
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
