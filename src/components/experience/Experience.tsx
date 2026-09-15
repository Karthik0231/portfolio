"use client";
import { useRef, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";
import { useScrollFocus } from "@/hooks/useScrollFocus";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);
  
  const handleActive = useCallback((index: number) => {
    setSystemState("EXPERIENCE", "04", `EXP / ${portfolioData.experience[index].company}`);
  }, [setSystemState]);

  useScrollFocus({
    triggerElement: containerRef,
    itemSelector: ".exp-node",
    onActive: handleActive,
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-48 bg-background border-t border-border relative">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
        <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.EXPERIENCE_LOG</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-24 relative h-full">
        
        {/* Sticky Left Content */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-48 z-10">
          <h2 className="text-clamp-section font-medium tracking-tight mb-8">
            Experience.
          </h2>
        </div>

        {/* Scrollable Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-32 md:gap-48 relative border-l border-border pl-12 md:pl-24">
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="exp-node flex flex-col gap-8 opacity-50 origin-left">
              <div className="flex flex-col gap-2 border-b border-border pb-6">
                <span className="text-sm font-mono text-muted-foreground tracking-widest">{exp.period}</span>
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">{exp.role}</h3>
                <span className="text-xl md:text-2xl text-muted-foreground font-light">{exp.company} &middot; {exp.location}</span>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {exp.highlights.map((highlight, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                    {highlight}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.capabilities.map((cap, idx) => (
                  <CapabilityPill 
                    key={idx} 
                    cap={cap} 
                    details={(exp as any).capabilityDetails?.[cap]} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useInteractionStore } from "@/store/interactionStore";
import { motion, AnimatePresence } from "framer-motion";

function CapabilityPill({ cap, details }: { cap: string, details?: string[] }) {
  const { setCursor } = useInteractionStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group/cap">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setCursor("INSPECT")}
        onMouseLeave={() => setCursor("DEFAULT")}
        data-cursor="INSPECT"
        className="px-4 py-2 border border-border text-xs font-mono text-foreground uppercase tracking-widest bg-muted/20 hover:bg-muted transition-colors cursor-none outline-none focus:ring-1 focus:ring-foreground"
      >
        {cap}
      </button>
      
      <AnimatePresence>
        {isOpen && details && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full mt-2 z-50 w-64 bg-background border border-border p-4 shadow-xl"
          >
            <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2 border-b border-border pb-1">
              SYS.INSPECT // {cap}
            </div>
            <ul className="flex flex-col gap-2 mt-2">
              {details.map((detail, idx) => (
                <li key={idx} className="text-sm text-foreground/80 font-light flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">&middot;</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
