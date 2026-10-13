"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolio";
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowRight 
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-elevated border border-border rounded-xl shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-elevated/95 backdrop-blur-sm border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
              CASE STUDY &middot; {project.id.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              / {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Ownership Header */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                {project.name}
              </h2>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-cobalt text-white font-mono text-xs uppercase tracking-wider rounded font-medium hover:bg-cobalt/90 transition-colors shadow-xs"
                >
                  <span>Visit Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <p className="text-base text-muted-foreground font-normal mb-4">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 bg-muted text-foreground text-xs font-mono rounded">
                Role: {project.role}
              </span>
              <span className="px-2.5 py-1 bg-cobalt/10 text-cobalt text-xs font-mono rounded font-medium">
                Ownership: {project.ownership}
              </span>
            </div>
          </div>

          {/* Context & Problem Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-muted/30 border border-border rounded-lg">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                The Problem &amp; Workflow Gap
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Operational Context
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.caseStudy.context}
              </p>
            </div>
          </div>

          {/* Technical Decisions & Architecture */}
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cobalt" />
              <span>Technical Decisions &amp; Engineering Solutions</span>
            </h3>
            <div className="space-y-2.5">
              {project.caseStudy.technicalDecisions.map((decision, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 border border-border/70 rounded">
                  <div className="w-5 h-5 rounded-full bg-cobalt/10 text-cobalt flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    0{i + 1}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture & Tech Stack */}
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cobalt" />
              <span>Architecture &amp; Applied Technologies</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.architecture}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-elevated border border-border text-foreground font-mono text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Shipped Deliverables & Verified Outcomes */}
          <div className="p-5 bg-muted/30 border border-border rounded-lg">
            <h3 className="font-display font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cobalt" />
              <span>Verified Deliverables &amp; Outcomes</span>
            </h3>
            <ul className="space-y-2 mb-4">
              {project.caseStudy.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/90">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-border text-xs font-mono text-muted-foreground">
              Outcome: <span className="text-foreground font-semibold">{project.outcome}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-muted/40 border-t border-border flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">
            Documented from verified production code
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-border bg-elevated hover:bg-muted text-foreground font-mono text-xs uppercase tracking-wider rounded transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
