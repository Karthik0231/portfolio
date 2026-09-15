"use client";
import { useRef, useCallback, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";
import { useScrollFocus } from "@/hooks/useScrollFocus";

import { useInteractionStore } from "@/store/interactionStore";

// Example static relationship map to simulate discovering a system
const RELATIONSHIPS: Record<string, string[]> = {
  "React.js": ["Next.js", "React Native", "Node.js", "TypeScript"],
  "Next.js": ["React.js", "Node.js", "Vercel", "TypeScript"],
  "Node.js": ["Express.js", "React.js", "Next.js", "PostgreSQL", "MongoDB", "AWS"],
  "PostgreSQL": ["Node.js", "Express.js", "GoLang", "AWS"],
  "React Native": ["React.js", "Node.js", "Android"],
  "TypeScript": ["React.js", "Next.js", "Node.js"],
  "Docker": ["AWS", "Node.js", "GoLang"],
  "AWS": ["Docker", "Node.js", "PostgreSQL", "MongoDB"]
};

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);
  const { activeTrace, setTrace, setCursor } = useInteractionStore();
  
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const categories = Object.entries(portfolioData.stack);

  const handleActive = useCallback((index: number) => {
    setActiveCategory(index);
    if (!activeTrace) {
      setSystemState("STACK", "05", `SYS.GRAPH / ${categories[index][0]}`);
    }
  }, [setSystemState, categories, activeTrace]);

  useScrollFocus({
    triggerElement: containerRef,
    itemSelector: ".tech-category",
    onActive: handleActive,
  });

  return (
    <section id="stack" ref={containerRef} className="py-24 md:py-48 bg-background border-t border-border relative">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
        <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.TECH_GRAPH</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="mb-24 text-center max-w-2xl">
          <h2 className="text-clamp-section font-medium tracking-tight mb-6">Engineered with.</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {activeTrace ? `Tracing relationships for ${activeTrace}...` : 'I select technologies based on product requirements, not hype. Scroll to inspect system relationships.'}
          </p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-12">
          {categories.map(([category, items], index) => {
            const isActiveCategory = activeCategory === index && !activeTrace;
            
            return (
              <div key={category} className={`tech-category flex flex-col md:flex-row md:items-start gap-6 border-t border-border pt-6 origin-left transition-opacity duration-500 ${!activeTrace && !isActiveCategory ? 'opacity-30' : 'opacity-100'}`}>
                <div className="w-48 shrink-0">
                  <span className={`text-sm font-mono uppercase tracking-widest transition-colors duration-500 ${isActiveCategory || activeTrace ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {items.map((tech) => {
                    const isTraced = activeTrace === tech;
                    const isRelated = activeTrace && RELATIONSHIPS[activeTrace]?.includes(tech);
                    const isMutedByTrace = activeTrace && !isTraced && !isRelated;
                    
                    return (
                      <span 
                        key={tech}
                        data-cursor="TRACE"
                        onMouseEnter={() => setCursor("TRACE")}
                        onMouseLeave={() => setCursor("DEFAULT")}
                        onClick={() => {
                          if (activeTrace === tech) {
                            setTrace(null);
                            setSystemState("STACK", "05", `SYS.GRAPH / ${categories[activeCategory || 0][0]}`);
                          } else {
                            setTrace(tech);
                            setSystemState("TRACE", "05", `SYS.PATH / ${tech.toUpperCase()}`);
                          }
                        }}
                        className={`
                          text-xl md:text-3xl font-medium tracking-tight transition-all duration-500 cursor-none
                          ${isTraced ? 'text-foreground scale-105' : isRelated ? 'text-foreground' : 'text-muted-foreground'}
                          ${isMutedByTrace ? 'opacity-10' : 'opacity-100'}
                          hover:text-foreground
                        `}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
