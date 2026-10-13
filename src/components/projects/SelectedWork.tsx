"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { 
  ExternalLink, 
  ArrowUpRight, 
  FileText, 
  Layers, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Activity,
  Calendar,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const projects = portfolioData.projects;

  const filteredProjects = activeFilter === "ALL"
    ? projects
    : projects.filter((p) => {
        if (activeFilter === "WEB") return p.category.includes("Logistics") || p.category.includes("ERP") || p.category.includes("Corporate");
        if (activeFilter === "MOBILE") return p.tech.includes("React Native CLI") || p.tech.includes("React Native");
        if (activeFilter === "CLIENT") return p.ownership.includes("Client") || p.liveUrl;
        return true;
      });

  return (
    <section id="work" className="py-20 lg:py-32 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
                03 &middot; SELECTED WORK
              </span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Production Software &middot; Shipped
            </h2>
            <p className="text-base text-muted-foreground mt-2 max-w-xl">
              End-to-end applications built for real clients, internal enterprises, and mobile users. Verified architecture and production code.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {["ALL", "WEB", "MOBILE", "CLIENT"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeFilter === filter
                    ? "bg-foreground text-background font-semibold"
                    : "border border-border bg-elevated text-muted-foreground hover:text-foreground hover:border-cobalt/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Presentations List with Alternating Rich Compositions */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 lg:p-10 border border-border bg-elevated/70 rounded-xl transition-all duration-300 hover:border-cobalt/40 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text & Metadata Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      {/* Category & Project Index */}
                      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-border">
                        <span className="font-mono text-xs text-cobalt font-semibold tracking-wider uppercase">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1} / 0{filteredProjects.length}
                        </span>
                      </div>

                      {/* Project Title & Subtitle */}
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm font-medium text-cobalt mb-4">
                        {project.subtitle}
                      </p>

                      {/* Problem Statement & Implementation */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                        {project.problem}
                      </p>

                      {/* Key Highlights Bullet List */}
                      <div className="space-y-2 mb-6">
                        {project.systemHighlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-muted/60 border border-border/80 text-foreground font-mono text-[11px] rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar: Case Study Deep Dive + Live Link */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider rounded font-medium hover:bg-foreground/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                      >
                        <span>Case Study &amp; Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-border bg-elevated hover:border-cobalt/40 text-foreground font-mono text-xs uppercase tracking-wider rounded transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5 text-cobalt" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Product-Inspired Visualization Column */}
                  <div className={`lg:col-span-6 w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="border border-border bg-muted/20 rounded-lg p-4 sm:p-6 overflow-hidden">
                      {project.id === "axionvertex" && (
                        <AxionVertexVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                      {project.id === "intern-management" && (
                        <InternManagementVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                      {project.id === "medlinks" && (
                        <MedlinksVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                      {project.id === "nexa-utility" && (
                        <NexaUtilityVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                      {project.id === "codelab-systems" && (
                        <CodeLabVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                      {project.id === "femitrack" && (
                        <FemiTrackVisualization onOpenCaseStudy={() => setSelectedProject(project)} />
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Case Study Modal Drawer */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

// 1. AxionVertex Visualization (UK Logistics Platform)
function AxionVertexVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">AXIONVERTEX &middot; LOGISTICS ENGINE</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded">
          LIVE UK PLATFORM
        </span>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-2">
        <div className="text-[11px] text-muted-foreground flex justify-between">
          <span>Quote Calculator Pipeline</span>
          <span className="text-foreground font-semibold">&pound;185.00 EST</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-1.5 bg-background border border-border rounded">
            <span className="text-muted-foreground block">Route</span>
            <span className="text-foreground">London NW &rarr; Watford</span>
          </div>
          <div className="p-1.5 bg-background border border-border rounded">
            <span className="text-muted-foreground block">Vehicle</span>
            <span className="text-foreground">Luton Van + 2 Men</span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-[11px] text-muted-foreground">
        <div className="flex items-center justify-between p-2 bg-background border border-border rounded">
          <span className="text-foreground">Automated Invoice Dispatch</span>
          <span className="text-cobalt font-medium">PDF Generated</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-background border border-border rounded">
          <span className="text-foreground">Admin Job Management</span>
          <span className="text-green-500 font-medium">Status: Dispatched</span>
        </div>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Stack: MERN &middot; Vercel &middot; MongoDB</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}

// 2. Internal Management System Visualization
function InternManagementVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">ERP CONSOLE &middot; RBAC PROTECTED</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-cobalt/10 text-cobalt rounded font-semibold">
          ACTIVE SYSTEM
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
        <div className="p-1.5 bg-cobalt text-white rounded font-medium">Admin View</div>
        <div className="p-1.5 bg-muted text-muted-foreground rounded">Coordinator</div>
        <div className="p-1.5 bg-muted text-muted-foreground rounded">Accounts</div>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-2">
        <div className="text-[11px] flex justify-between text-muted-foreground">
          <span>Active Batch Table</span>
          <span className="text-foreground">Page 1 of 12 &middot; Paginated</span>
        </div>
        <div className="space-y-1 text-[10px]">
          <div className="flex justify-between p-1.5 bg-background border border-border rounded">
            <span>INT-2025-084 &middot; Full Stack</span>
            <span className="text-green-500">Receipt Paid (GST)</span>
          </div>
          <div className="flex justify-between p-1.5 bg-background border border-border rounded">
            <span>INT-2025-085 &middot; Data Sci</span>
            <span className="text-cobalt">Audited [Admin_01]</span>
          </div>
        </div>
      </div>

      <div className="p-2 bg-background border border-border rounded text-[10px] text-muted-foreground flex justify-between items-center">
        <span>Audit Trail: Mutation #984 logged</span>
        <span className="text-cobalt">Immutable</span>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Stack: React &middot; Express &middot; Node &middot; MongoDB</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}

// 3. Medlinks Visualization (Android Health App)
function MedlinksVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm max-w-sm mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">MEDLINKS &middot; ANDROID APK</span>
        </div>
        <span className="text-[10px] text-muted-foreground">React Native CLI</span>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-2">
        <div className="text-[11px] text-muted-foreground flex justify-between">
          <span>Catalog Virtualization</span>
          <span className="text-green-500 font-semibold">60 FPS Stable</span>
        </div>
        <div className="p-2 bg-background border border-border rounded space-y-1 text-[10px]">
          <div className="text-foreground font-semibold">Diagnostic Ultrasound Probe V3</div>
          <div className="text-muted-foreground">Equipment Order &middot; Service Available</div>
          <div className="text-cobalt pt-1">&rarr; Book Service Technician</div>
        </div>
      </div>

      <div className="p-2 bg-background border border-border rounded text-[10px] text-muted-foreground space-y-1">
        <div className="flex justify-between">
          <span>JWT Session Token</span>
          <span className="text-green-500">Encrypted Storage</span>
        </div>
        <div className="text-[10px] text-muted-foreground">
          Optimized for Tier-2 Android devices (2GB RAM)
        </div>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Built Solo End-to-End</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}

// 4. Nexa Utility Visualization (Building Management)
function NexaUtilityVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">NEXA &middot; UTILITY TELEMETRY</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded">
          TEAM PRODUCT
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 bg-background border border-border rounded">
          <span className="text-muted-foreground block">Meter Unit</span>
          <span className="text-foreground font-semibold">Tower B &middot; Unit 402</span>
        </div>
        <div className="p-2 bg-background border border-border rounded">
          <span className="text-muted-foreground block">Delta Reading</span>
          <span className="text-cobalt font-semibold">+142.4 kWh</span>
        </div>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-1.5 text-[10px]">
        <div className="text-muted-foreground flex justify-between">
          <span>Bounds Validation</span>
          <span className="text-green-500 font-semibold">PASSED</span>
        </div>
        <div className="text-muted-foreground">
          Automated Invoice Compilation &middot; Tenant Statement Ready
        </div>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Owned: Meter, Device &amp; Billing Modules</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}

// 5. CodeLab Systems Website Visualization
function CodeLabVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">CODELABSYSTEMS.IN &middot; NEXT.JS SSR</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded">
          LIVE CLIENT
        </span>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-2">
        <div className="text-[11px] text-muted-foreground flex justify-between">
          <span>Search Engine Optimization</span>
          <span className="text-foreground font-semibold">100 / 100 SEO</span>
        </div>
        <div className="p-2 bg-background border border-border rounded space-y-1 text-[10px]">
          <div className="text-foreground font-semibold">MERN Stack &amp; React Engineering Course</div>
          <div className="text-muted-foreground">Syllabus Pages &middot; Fast Enquiry Funnel</div>
        </div>
      </div>

      <div className="p-2 bg-background border border-border rounded text-[10px] text-muted-foreground flex justify-between">
        <span>JSON-LD Schema Indexed</span>
        <span className="text-cobalt">Vercel Edge CDN</span>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Designed &amp; Built from Scratch</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}

// 6. FemiTrack Visualization (Health Tech App)
function FemiTrackVisualization({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <div className="bg-elevated border border-border rounded-lg p-5 font-mono text-xs space-y-4 shadow-sm max-w-sm mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-cobalt" />
          <span className="font-bold text-foreground">FEMITRACK &middot; HEALTH APP</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded">
          FULL STACK
        </span>
      </div>

      <div className="p-3 bg-muted/30 border border-border rounded space-y-2 text-center">
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
          CYCLE PREDICTION ENGINE
        </div>
        <div className="text-xl font-bold font-display text-foreground">
          Day 14 &middot; Ovulation Window
        </div>
        <div className="text-[10px] text-muted-foreground">
          Rolling Moving-Average Algorithm
        </div>
      </div>

      <div className="p-2 bg-background border border-border rounded text-[10px] text-muted-foreground flex justify-between">
        <span>Privacy: Zero 3rd Party Trackers</span>
        <span className="text-green-500 font-semibold">Encrypted</span>
      </div>

      <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
        <span>React Native + Node/Express Sync</span>
        <button onClick={onOpenCaseStudy} className="text-cobalt hover:underline">
          View Architecture &rarr;
        </button>
      </div>
    </div>
  );
}
