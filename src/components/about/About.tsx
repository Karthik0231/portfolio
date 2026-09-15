"use client";
import { useRef, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";
import { useScrollFocus } from "@/hooks/useScrollFocus";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  const handleActive = useCallback((index: number) => {
    setSystemState("ABOUT", "07", "SYS.PROFILE");
  }, [setSystemState]);

  useScrollFocus({
    triggerElement: containerRef,
    itemSelector: ".about-node",
    onActive: handleActive,
  });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-48 bg-background border-t border-border relative">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
        <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.PROFILE</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-24 relative h-full mt-12">
        
        {/* Sticky Left Content */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-48 z-10">
          <h2 className="text-clamp-section font-medium tracking-tight leading-[1.1] mb-8">
            Developer.<br />Builder.<br />Problem Solver.
          </h2>
        </div>
        
        {/* Scrollable Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-24 relative border-l border-border pl-12 md:pl-24">
          
          <div className="about-node opacity-50 origin-left flex flex-col gap-6">
            <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Overview</h3>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {portfolioData.personal.summary}
            </p>
          </div>
          
          <div className="about-node opacity-50 origin-left flex flex-col gap-12">
            <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase border-b border-border pb-4">Education</h3>
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl text-foreground font-medium">{edu.degree}</h4>
                <div className="text-muted-foreground font-light flex flex-wrap gap-x-4">
                  <span>{edu.grade}</span>
                  <span>&middot;</span>
                  <span>{edu.location}</span>
                  <span>&middot;</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
