"use client";
import { useRef, useCallback, useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { useTheme } from "next-themes";
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

const ICON_MAP: Record<string, string> = {
  "TypeScript": "typescript",
  "JavaScript (ES6+)": "javascript",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "React Native": "react",
  "HTML5": "html5",
  "CSS3": "css3",
  "Astro.js": "astro",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "GoLang": "go",
  "PHP": "php",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "Supabase": "supabase",
  "SQL Server": "microsoftsqlserver",
  "OpenAI API": "openai",
  "Gemini API": "googlegemini",
  "Claude API": "anthropic",
  "Vercel": "vercel",
  "AWS": "amazonaws",
  "Git": "git",
  "Postman": "postman",
  "Swagger": "swagger",
  "Power BI": "powerbi",
  "Docker": "docker"
};

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);
  const { activeTrace, setTrace, setCursor } = useInteractionStore();
  const { resolvedTheme } = useTheme();

  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);
  const categories = Object.entries(portfolioData.stack);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleActive = useCallback((index: number) => {
    setActiveCategory(index);
    if (!activeTrace) {
      setSystemState("STACK", "05", `SYS.GRAPH / ${categories[index][0]}`);
    }
  }, [setSystemState, categories, activeTrace]);

  useScrollFocus({
    triggerElement: containerRef,
    itemSelector: ".tech-category-group",
    onActive: handleActive,
  });

  return (
    <section id="stack" ref={containerRef} className="py-24 md:py-48 bg-background border-t border-border relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none mix-blend-difference"></div>

      <div className="absolute top-8 md:top-12 left-4 md:left-12 z-10 pointer-events-none">
        <h2 className="text-[10px] md:text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.TECH_GRAPH</h2>
      </div>

      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 relative mt-12 md:mt-0">

        {/* Sticky Left Console */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-48 z-10 h-fit">
          <h2 className="text-clamp-section font-medium tracking-tight mb-8">
            Engineered with.
          </h2>
          <p className="text-base md:text-xl text-foreground/90 font-light leading-relaxed max-w-sm mb-12">
            I select technologies based on product requirements, not hype. Explore the stack to trace system relationships.
          </p>

        </div>

        {/* Scrollable Right Nodes */}
        <div className="w-full md:w-2/3 flex flex-col gap-16 md:gap-32 relative pb-24">
          {categories.map(([category, items], index) => {
            const isActiveCategory = activeCategory === index && !activeTrace;

            return (
              <div key={category} className={`tech-category-group flex flex-col gap-6 origin-left transition-all duration-700 ${!activeTrace && !isActiveCategory ? 'opacity-70 md:opacity-100' : 'opacity-100'}`}>

                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <div className="h-[1px] flex-grow bg-border/50"></div>
                </div>

                {/* Node Grid */}
                <div className="flex flex-wrap gap-4">
                  {items.map((tech) => {
                    const isTraced = activeTrace === tech;
                    const isRelated = activeTrace && RELATIONSHIPS[activeTrace]?.includes(tech);
                    const isMutedByTrace = activeTrace && !isTraced && !isRelated;
                    const iconSlug = ICON_MAP[tech];

                    return (
                      <button
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
                          px-6 py-4 md:px-8 md:py-5 border transition-all duration-500 cursor-none rounded-xl backdrop-blur-sm
                          flex items-center justify-center gap-3 md:gap-4 text-base md:text-xl font-medium
                          ${isTraced
                            ? 'border-foreground bg-foreground text-background shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105'
                            : isRelated
                              ? 'border-foreground/50 bg-foreground/5 text-foreground scale-[1.02]'
                              : 'border-border bg-background hover:bg-muted/10 text-foreground hover:border-foreground/30 shadow-sm'}
                          ${isMutedByTrace ? 'opacity-20 blur-[2px] scale-95 pointer-events-none' : 'opacity-100'}
                        `}
                      >
                        {iconSlug && mounted && (
                          <img
                            src={`https://cdn.simpleicons.org/${iconSlug}/${isTraced ? (resolvedTheme === 'dark' ? '080808' : 'f7f7f5') : (resolvedTheme === 'dark' ? 'ededed' : '111111')}`}
                            alt={tech}
                            className="w-6 h-6 md:w-8 md:h-8"
                          />
                        )}
                        {tech}
                      </button>
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
