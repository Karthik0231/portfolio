"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Code2
} from "lucide-react";

type LayerTab = "INTERFACE" | "API" | "DATA" | "RUNTIME";

export function Hero() {
  const [activeLayer, setActiveLayer] = useState<LayerTab>("INTERFACE");

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 engineering-grid opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="cobalt-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
                {portfolioData.personal.eyebrow}
              </span>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Based in Udupi &middot; Working in Mangaluru</span>
              </div>
            </div>

            {/* Primary Headline with Expressive Editorial Hierarchy */}
            <h1 className="headline-editorial text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] text-foreground tracking-tight max-w-3xl mb-6">
              I TURN <span className="text-cobalt underline decoration-cobalt/30 decoration-4 underline-offset-8">COMPLEX IDEAS</span> INTO WORKING SOFTWARE.
            </h1>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl mb-8">
              {portfolioData.personal.statement}
            </p>

            {/* CTAs & Availability Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-foreground/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-elevated hover:border-cobalt/40 text-foreground font-mono text-xs uppercase tracking-wider font-medium rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt shadow-2xs"
              >
                <span>Let&apos;s Talk</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download="HS_Karthik_Resume_Full_Stack_Developer.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Download Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Micro Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border w-full text-xs font-mono text-muted-foreground">
              <div>
                <span className="block text-[10px] tracking-widest uppercase text-muted-foreground/80 mb-0.5">Experience</span>
                <span className="text-foreground font-semibold">2+ Years Hands-on</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-widest uppercase text-muted-foreground/80 mb-0.5">Core Practice</span>
                <span className="text-foreground font-semibold">React &middot; Node &middot; Mobile</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] tracking-widest uppercase text-muted-foreground/80 mb-0.5">Current Role</span>
                <span className="text-foreground font-semibold">DataQueue Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Architectural Product-Window Abstraction (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="border border-border bg-elevated/90 backdrop-blur-xs rounded-lg overflow-hidden shadow-md">
              
              {/* Product Window Top Bar */}
              <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="ml-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    system-topology.svg
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cobalt font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                  <span>ACTIVE ARCHITECTURE</span>
                </div>
              </div>

              {/* Interactive Layer Tabs */}
              <div className="grid grid-cols-4 border-b border-border bg-muted/20 text-center text-[10px] font-mono tracking-wider">
                {(["INTERFACE", "API", "DATA", "RUNTIME"] as LayerTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveLayer(tab)}
                    className={`py-2 px-1 transition-colors border-r last:border-r-0 border-border ${
                      activeLayer === tab
                        ? "bg-elevated font-semibold text-cobalt border-b-2 border-b-cobalt"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Layer Display Body */}
              <div className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-between">
                {activeLayer === "INTERFACE" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cobalt" />
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                          UI Component Hierarchy
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">Next.js / React 19 / RN</span>
                    </div>

                    <div className="p-3 bg-muted/30 border border-border rounded font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                        <span>Client State Tree</span>
                        <span className="text-cobalt">Normalized</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="pl-2 border-l-2 border-cobalt text-foreground font-medium">
                          &lt;BookingEngine state=&quot;validated&quot;&gt;
                        </div>
                        <div className="pl-6 border-l-2 border-border text-muted-foreground">
                          &lt;VirtualizedCatalog items=&#123;420&#125; /&gt;
                        </div>
                        <div className="pl-6 border-l-2 border-border text-muted-foreground">
                          &lt;AuditLogViewer rbac=&quot;admin&quot; /&gt;
                        </div>
                        <div className="pl-2 border-l-2 border-cobalt text-foreground font-medium">
                          &lt;/BookingEngine&gt;
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">60 FPS Native</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">FlatList Windowing</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">WCAG Accessible</span>
                    </div>
                  </div>
                )}

                {activeLayer === "API" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-cobalt" />
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                          RESTful API Gateway
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">Node / Express / Go</span>
                    </div>

                    <div className="p-3 bg-muted/30 border border-border rounded font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                        <span>Middleware Pipeline</span>
                        <span className="text-green-500 font-semibold">200 OK &middot; 42ms</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center gap-2 text-foreground">
                          <span className="px-1.5 py-0.2 bg-cobalt/10 text-cobalt text-[10px] font-bold rounded">POST</span>
                          <span>/api/v1/billing/invoice/generate</span>
                        </div>
                        <div className="text-muted-foreground pl-3 text-[10px]">
                          &rarr; VerifyBearerJWT(req) &middot; Role: &quot;FinanceAdmin&quot;
                        </div>
                        <div className="text-muted-foreground pl-3 text-[10px]">
                          &rarr; ValidatePayload(GSTSchema) &middot; Sanitized
                        </div>
                        <div className="text-muted-foreground pl-3 text-[10px]">
                          &rarr; DispatchAuditEntry(&quot;INVOICE_CREATE&quot;)
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Swagger Specs</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Bearer JWT</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Rate-Limited</span>
                    </div>
                  </div>
                )}

                {activeLayer === "DATA" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-cobalt" />
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                          Persistence & Indexing
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">PostgreSQL &middot; MongoDB</span>
                    </div>

                    <div className="p-3 bg-muted/30 border border-border rounded font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                        <span>Schema Governance</span>
                        <span className="text-cobalt">ACID Compliant</span>
                      </div>
                      <div className="space-y-1 text-[11px] text-muted-foreground">
                        <p className="text-foreground">
                          <span className="text-cobalt">INDEX:</span> idx_org_batch_status (compound)
                        </p>
                        <p>&bull; Transactions for GST receipt generation</p>
                        <p>&bull; Immutable append-only audit trail collection</p>
                        <p>&bull; Sub-10ms paginated query response time</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">MongoDB Aggregations</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Relational Integrity</span>
                    </div>
                  </div>
                )}

                {activeLayer === "RUNTIME" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cobalt" />
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
                          Production Runtime
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">Vercel &middot; Docker &middot; AWS</span>
                    </div>

                    <div className="p-3 bg-muted/30 border border-border rounded font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                        <span>Telemetry & Health</span>
                        <span className="text-green-500 font-semibold">Healthy (99.9%)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 bg-background border border-border rounded">
                          <span className="text-[10px] text-muted-foreground block">TTFB Avg</span>
                          <span className="text-foreground font-bold">148ms</span>
                        </div>
                        <div className="p-2 bg-background border border-border rounded">
                          <span className="text-[10px] text-muted-foreground block">Lighthouse</span>
                          <span className="text-foreground font-bold">98 / 100</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        Edge SSR &middot; Automated Git Deploys &middot; Error Logging
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Vercel Edge</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Docker Containers</span>
                      <span className="px-2 py-0.5 bg-muted text-[10px] font-mono text-muted-foreground rounded">Zero-Downtime</span>
                    </div>
                  </div>
                )}

                {/* Footer Note */}
                <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt" />
                    <span>Tested across real client products</span>
                  </span>
                  <span className="text-foreground font-medium">HS Karthik</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
