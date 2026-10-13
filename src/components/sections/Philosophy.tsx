"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowDownRight, Check, ShieldCheck, TerminalSquare, Network } from "lucide-react";

export function Philosophy() {
  const { philosophy } = portfolioData;

  return (
    <section id="philosophy" className="py-20 lg:py-32 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header with Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
                02 &middot; PHILOSOPHY
              </span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground">
              {philosophy.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-6 border-l-0 lg:border-l border-border">
            <p className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mb-6">
              {philosophy.lead}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground pt-4 border-t border-border">
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cobalt" />
                <span>Deterministic API contracts</span>
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cobalt" />
                <span>Zero blind handoffs</span>
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cobalt" />
                <span>Production audit trails</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid with Bespoke Architectural Breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {philosophy.pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 border border-border bg-elevated/70 rounded-lg flex flex-col justify-between hover:border-cobalt/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <span className="font-mono text-xs font-semibold text-cobalt tracking-widest">
                    TENET {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    PRACTICE
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-cobalt transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Technical Indicator / Blueprint Visual snippet */}
              <div className="mt-8 pt-6 border-t border-border/60">
                {idx === 0 && (
                  <div className="p-3 bg-muted/40 rounded border border-border/70 font-mono text-[11px] text-muted-foreground space-y-1">
                    <div className="flex justify-between text-foreground font-medium">
                      <span>UI &rarr; API &rarr; DB</span>
                      <span className="text-cobalt">Unified Spec</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Type-safe payloads from React form to SQL query</p>
                  </div>
                )}
                {idx === 1 && (
                  <div className="p-3 bg-muted/40 rounded border border-border/70 font-mono text-[11px] text-muted-foreground space-y-1">
                    <div className="flex justify-between text-foreground font-medium">
                      <span>Low-End Android</span>
                      <span className="text-green-500 font-medium">Optimized</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Tested for RAM constraints, GST laws, &amp; offline drops</p>
                  </div>
                )}
                {idx === 2 && (
                  <div className="p-3 bg-muted/40 rounded border border-border/70 font-mono text-[11px] text-muted-foreground space-y-1">
                    <div className="flex justify-between text-foreground font-medium">
                      <span>Production First</span>
                      <span className="text-cobalt">Audited</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Audit logs, Swagger docs, &amp; structured error handling</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
