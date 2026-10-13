"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  ArrowRight, 
  ArrowLeft, 
  Code, 
  Database, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  FileCode,
  ShieldCheck,
  Server
} from "lucide-react";

export function IdeaToProduction() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stages = portfolioData.signatureFlow;
  const currentStage = stages[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <section id="pipeline" className="py-20 lg:py-32 bg-background border-b border-border relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 engineering-grid opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
              04 &middot; SIGNATURE INTERACTION
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Idea &rarr; Production Engineering Pipeline
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            How a raw feature requirement evolves into robust production software: deterministic data modeling, type-safe interfaces, secure REST contracts, resilient persistence, and live observability.
          </p>
        </div>

        {/* Stepper Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isCompleted = idx < activeStageIndex;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 sm:p-4 rounded-lg border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                  isActive
                    ? "bg-elevated border-cobalt shadow-sm"
                    : "bg-elevated/40 border-border hover:border-cobalt/40 text-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? "text-cobalt" : "text-muted-foreground"}`}>
                    STAGE {stage.id}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />}
                  {isCompleted && !isActive && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                </div>
                <div className={`text-xs sm:text-sm font-display font-semibold truncate ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {stage.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workbench Container */}
        <div className="border border-border bg-elevated rounded-xl shadow-md overflow-hidden">
          
          {/* Workbench Top Bar */}
          <div className="px-6 py-4 bg-muted/30 border-b border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-cobalt/10 text-cobalt text-xs font-mono font-bold rounded">
                PHASE 0{activeStageIndex + 1}
              </span>
              <span className="font-display font-semibold text-foreground text-sm sm:text-base">
                {currentStage.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded border border-border bg-elevated hover:bg-muted text-foreground transition-colors disabled:opacity-40"
                aria-label="Previous pipeline stage"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded border border-border bg-elevated hover:bg-muted text-foreground transition-colors"
                aria-label="Next pipeline stage"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workbench Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
            
            {/* Left Column: Stage Explanation & Concrete Deliverables (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                  Operational Focus
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-3">
                  {currentStage.focus}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                {/* Concrete Stage Artifacts */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-foreground font-semibold block mb-2">
                    Verified Engineering Artifacts:
                  </span>
                  <div className="space-y-2">
                    {currentStage.artifacts.map((artifact, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0" />
                        <span>{artifact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Applied in this Stage */}
              <div className="pt-6 border-t border-border">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-2">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentStage.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-muted/60 text-foreground font-mono text-xs rounded border border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Stage Architecture Visualizer (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-muted/10 font-mono text-xs">
              
              {/* STAGE 1: IDEA & DOMAIN MODEL */}
              {activeStageIndex === 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border">
                    <span>entity_relationships.spec.yaml</span>
                    <span className="text-cobalt">Deconstructed</span>
                  </div>

                  <div className="p-4 bg-elevated border border-border rounded-lg space-y-3">
                    <div className="text-foreground font-semibold">
                      // Example: AxionVertex Quoting &amp; Invoice Domain Model
                    </div>
                    <div className="space-y-1.5 text-muted-foreground text-[11px]">
                      <div><span className="text-cobalt">Entity:</span> BookingRequest &#123;</div>
                      <div className="pl-4">id: UUID, pickup_postcode: string, drop_postcode: string,</div>
                      <div className="pl-4">inventory_items: Array&lt;ItemType&gt;, floors: number,</div>
                      <div className="pl-4">quote_estimate_gbp: Decimal, status: &quot;Pending&quot; | &quot;Confirmed&quot;</div>
                      <div>&#125;</div>
                      <div className="pt-2"><span className="text-cobalt">Entity:</span> GSTInvoice &#123;</div>
                      <div className="pl-4">invoice_number: string, tax_breakdown: Object, audit_hash: string</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/40 border border-border rounded text-[11px] text-muted-foreground">
                    &bull; Strict validation contracts established before frontend or backend scaffolding begins.
                  </div>
                </div>
              )}

              {/* STAGE 2: INTERFACE & COMPONENT TREE */}
              {activeStageIndex === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border">
                    <span>ComponentComposition.tsx</span>
                    <span className="text-green-500">60 FPS &middot; Virtualized</span>
                  </div>

                  <div className="p-4 bg-elevated border border-border rounded-lg space-y-3 text-[11px]">
                    <div className="text-foreground font-semibold">
                      // Example: Medlinks &amp; Next.js Virtualized UI Component
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="text-foreground">&lt;CatalogVirtualizer windowSize=&#123;10&#125; initialNumToRender=&#123;8&#125;&gt;</div>
                      <div className="pl-4">&lt;EquipmentCard</div>
                      <div className="pl-8">key=&#123;item.id&#125;</div>
                      <div className="pl-8">imageMemoryGuard=&#123;true&#125; // Tier-2 Android RAM protection</div>
                      <div className="pl-8">onOrder=&#123;handleOptimisticCartUpdate&#125;</div>
                      <div className="pl-4">/&gt;</div>
                      <div className="text-foreground">&lt;/CatalogVirtualizer&gt;</div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/40 border border-border rounded text-[11px] text-muted-foreground">
                    &bull; Zero UI freeze on low-memory devices, instant optimistic state, WCAG accessible colors.
                  </div>
                </div>
              )}

              {/* STAGE 3: API & MIDDLEWARE GATEWAY */}
              {activeStageIndex === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border">
                    <span>api_router.ts (Express/Go)</span>
                    <span className="text-cobalt">JWT &amp; RBAC Guard</span>
                  </div>

                  <div className="p-4 bg-elevated border border-border rounded-lg space-y-3 text-[11px]">
                    <div className="text-foreground font-semibold">
                      // Example: Internal Management System RBAC Route
                    </div>
                    <div className="space-y-1.5 text-muted-foreground">
                      <div className="text-foreground">router.post(&quot;/api/v1/interns/receipt&quot;,</div>
                      <div className="pl-4 text-cobalt">authenticateJWT,</div>
                      <div className="pl-4 text-cobalt">requireRole([&quot;ADMIN&quot;, &quot;FINANCE&quot;]),</div>
                      <div className="pl-4 text-cobalt">validateSchema(GSTReceiptPayload),</div>
                      <div className="pl-4 text-foreground">async (req, res) =&gt; &#123;</div>
                      <div className="pl-8">const receipt = await BillingService.create(req.body);</div>
                      <div className="pl-8">await AuditLogger.record(&quot;RECEIPT_GENERATED&quot;, req.user.id);</div>
                      <div className="pl-8">return res.status(201).json(&#123; success: true, receipt &#125;);</div>
                      <div className="pl-4">&#125;</div>
                      <div className="text-foreground">);</div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/40 border border-border rounded text-[11px] text-muted-foreground">
                    &bull; Every request verified, rate-limited, sanitized, and captured in structured Swagger specs.
                  </div>
                </div>
              )}

              {/* STAGE 4: DATA & PERSISTENCE */}
              {activeStageIndex === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border">
                    <span>schema_migrations.sql / mongodb.js</span>
                    <span className="text-cobalt">Compound Indexed</span>
                  </div>

                  <div className="p-4 bg-elevated border border-border rounded-lg space-y-3 text-[11px]">
                    <div className="text-foreground font-semibold">
                      // Database Indexing &amp; Transaction Safety
                    </div>
                    <div className="space-y-1.5 text-muted-foreground">
                      <div className="text-foreground">-- PostgreSQL / MongoDB Transaction</div>
                      <div>db.audit_logs.createIndex(&#123; orgId: 1, createdAt: -1 &#125;);</div>
                      <div>db.intern_records.createIndex(&#123; batchId: 1, status: 1 &#125;);</div>
                      <div className="pt-2 text-foreground">session.startTransaction();</div>
                      <div className="pl-4">await RecordsCollection.updateOne(&#123; _id: internId &#125;, updatePayload);</div>
                      <div className="pl-4">await AuditLogCollection.insertOne(auditEntry);</div>
                      <div className="text-foreground">session.commitTransaction();</div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/40 border border-border rounded text-[11px] text-muted-foreground">
                    &bull; ACID transaction consistency guarantees no orphan financial receipts or un-audited state changes.
                  </div>
                </div>
              )}

              {/* STAGE 5: PRODUCTION RUNTIME & MONITORING */}
              {activeStageIndex === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border">
                    <span>production_telemetry.log</span>
                    <span className="text-green-500 font-bold">LIVE HEALTH 99.9%</span>
                  </div>

                  <div className="p-4 bg-elevated border border-border rounded-lg space-y-3 text-[11px]">
                    <div className="text-foreground font-semibold">
                      // Production Verification &amp; Vercel/Docker Runtime
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 bg-muted/40 border border-border rounded">
                        <span className="text-muted-foreground block">Edge CDN Hit Rate</span>
                        <span className="text-foreground font-bold">96.4%</span>
                      </div>
                      <div className="p-2 bg-muted/40 border border-border rounded">
                        <span className="text-muted-foreground block">Error Rate (5xx)</span>
                        <span className="text-green-500 font-bold">0.00%</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-[10px] text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Vercel Edge Deployment:</span>
                        <span className="text-foreground">ACTIVE &middot; SHA: 4f89d3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>API Latency p95:</span>
                        <span className="text-foreground">64ms</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/40 border border-border rounded text-[11px] text-muted-foreground">
                    &bull; Monitored daily, triaged rapidly, upgraded regularly with client feedback loops.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
