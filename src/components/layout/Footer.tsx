"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-base text-foreground tracking-tight uppercase">
              {personal.name}
            </span>
            <span className="text-xs font-mono text-muted-foreground mt-0.5">
              Full Stack Developer &middot; Based in Udupi, Working in Mangaluru
            </span>
          </div>

          {/* Social Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={personal.resumeUrl}
              download="HS_Karthik_Resume_Full_Stack_Developer.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalt transition-colors flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5 text-cobalt" />
              <span className="text-foreground">Resume</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-muted/60"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Design Signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </span>
          <span className="text-[11px] text-muted-foreground/80">
            Design Language: <span className="text-foreground font-semibold">ENGINEERING, MADE VISIBLE</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
