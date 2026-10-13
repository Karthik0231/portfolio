"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Layers, 
  Server, 
  ShieldCheck, 
  Database, 
  Smartphone, 
  Sparkles, 
  ArrowUpRight,
  GitBranch,
  Network
} from "lucide-react";

export function TechnicalPractice() {
  const [activePracticeId, setActivePracticeId] = useState<string>("frontend");
  const practices = portfolioData.technicalPractice;
  const currentPractice = practices.find((p) => p.id === activePracticeId) || practices[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Layers className="w-5 h-5 text-cobalt" />;
      case "backend":
        return <Server className="w-5 h-5 text-cobalt" />;
      case "security":
        return <ShieldCheck className="w-5 h-5 text-cobalt" />;
      case "data":
        return <Database className="w-5 h-5 text-cobalt" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-cobalt" />;
      case "ai-tooling":
        return <Sparkles className="w-5 h-5 text-cobalt" />;
      default:
        return <Network className="w-5 h-5 text-cobalt" />;
    }
  };

  return (
    <section id="practice" className="py-20 lg:py-32 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
              05 &middot; CAPABILITIES MAP
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            BUILT ACROSS THE STACK.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Not isolated tool badges, but interconnected engineering systems: how frontend state connects to API validation, secure authentication tokens, relational transactions, and cloud operations.
          </p>
        </div>

        {/* Interactive Capabilities System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Capability Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {practices.map((practice, index) => {
              const isSelected = practice.id === activePracticeId;

              return (
                <button
                  key={practice.id}
                  onClick={() => setActivePracticeId(practice.id)}
                  className={`p-4 sm:p-5 rounded-lg border text-left transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                    isSelected
                      ? "bg-elevated border-cobalt shadow-sm"
                      : "bg-elevated/40 border-border hover:border-cobalt/40 hover:bg-elevated/70"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 bg-muted/60 rounded border border-border group-hover:border-cobalt/30 transition-colors">
                      {getIcon(practice.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                        TIER 0{index + 1}
                      </span>
                      <h3 className={`font-display font-semibold text-base sm:text-lg ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                        {practice.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-xs font-mono transition-transform duration-200 ${isSelected ? "text-cobalt translate-x-1" : "text-muted-foreground opacity-40 group-hover:opacity-100"}`}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Relationship Map & Details (7 cols) */}
          <div className="lg:col-span-7 border border-border bg-elevated rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
              <div className="flex items-center gap-2.5">
                {getIcon(currentPractice.id)}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cobalt font-semibold block">
                    ACTIVE DOMAIN
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    {currentPractice.title}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-1 bg-muted font-mono text-xs text-muted-foreground rounded">
                {currentPractice.focus}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              {currentPractice.description}
            </p>

            {/* Applied Production Tools & Stack List */}
            <div className="space-y-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block">
                Production Implementations &amp; Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentPractice.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-muted/50 border border-border/80 text-foreground font-mono text-xs rounded hover:border-cobalt/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Relationship Architecture Flow Diagram */}
            <div className="p-4 bg-muted/30 border border-border rounded-lg font-mono text-xs text-muted-foreground space-y-2">
              <div className="flex items-center justify-between text-foreground font-semibold pb-2 border-b border-border text-[11px]">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-cobalt" />
                  <span>Cross-Stack Linkage</span>
                </span>
                <span className="text-cobalt">Verified in Production</span>
              </div>

              {currentPractice.id === "frontend" && (
                <p className="text-[11px]">
                  React / Next.js &rarr; Typed API Client &rarr; Node/Express Gateway &rarr; PostgreSQL Schema
                </p>
              )}
              {currentPractice.id === "backend" && (
                <p className="text-[11px]">
                  Express/Go Router &rarr; JWT Auth Guard &rarr; Request Validation &rarr; MongoDB / PostgreSQL Transaction
                </p>
              )}
              {currentPractice.id === "security" && (
                <p className="text-[11px]">
                  Bearer Token &rarr; Scoped RBAC Matrix &rarr; Mutation Controller &rarr; Immutable Audit Log Entry
                </p>
              )}
              {currentPractice.id === "data" && (
                <p className="text-[11px]">
                  Relational Constraints (Foreign Keys, ACID) &amp; Document Indexing for Sub-10ms Queries
                </p>
              )}
              {currentPractice.id === "mobile" && (
                <p className="text-[11px]">
                  React Native CLI &rarr; FlatList Windowing &rarr; Local Token Storage &rarr; Resilient Offline Sync
                </p>
              )}
              {currentPractice.id === "ai-tooling" && (
                <p className="text-[11px]">
                  Backend Service &rarr; Structured Prompt &rarr; OpenAI / Gemini / Claude API &rarr; JSON Schema Output
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
