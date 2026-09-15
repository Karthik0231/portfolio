"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";

// Type definition for layers
type ProjectLayers = {
  UI?: string[];
  API?: string[];
  DATA?: string[];
  AUTH?: string[];
  DEPLOY?: string[];
};

export function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".project-card");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        onEnter: () => setSystemState("WORK", "03", "CODE → API → DATA → UI"),
        onEnterBack: () => setSystemState("WORK", "03", "CODE → API → DATA → UI"),
      });

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: `+=${items.length * 100}%`,
        pin: true,
        scrub: 1,
        animation: gsap.to(scrollContainerRef.current, {
          xPercent: -100 * ((items.length - 1) / items.length),
          ease: "none"
        })
      });

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: pinRef.current,
          start: `top top-=${i * 100}%`,
          end: `top top-=${(i + 1) * 100}%`,
          onEnter: () => {
            setSystemState("WORK", "03", `SYS / ${portfolioData.projects[i].name}`);
            setActiveIndex(i);
          },
          onEnterBack: () => {
            setSystemState("WORK", "03", `SYS / ${portfolioData.projects[i].name}`);
            setActiveIndex(i);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [setSystemState]);

  return (
    <section ref={sectionRef} id="work" className="bg-background text-foreground border-t border-border cursor-default relative">
      <div ref={pinRef} className="h-screen overflow-hidden flex flex-col justify-center relative w-full">

        <div className="absolute top-12 md:top-24 left-6 md:left-12 z-10 pointer-events-none flex flex-col gap-4">
          <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.WORK_CATALOGUE</h2>
          <div className="text-sm font-mono text-foreground tracking-widest flex items-center gap-4">
            <span>0{activeIndex + 1}</span>
            <div className="w-12 h-[1px] bg-border relative">
              <div className="absolute top-0 left-0 h-full bg-foreground transition-all duration-500" style={{ width: `${((activeIndex + 1) / portfolioData.projects.length) * 100}%` }}></div>
            </div>
            <span className="text-muted-foreground">0{portfolioData.projects.length}</span>
          </div>
        </div>

        <div className="flex h-full items-center" ref={scrollContainerRef} style={{ width: `${portfolioData.projects.length * 100}%` }}>
          {portfolioData.projects.map((project, index) => {
            return (
              <div key={project.id} className="project-card w-full h-full flex flex-col justify-center p-6 md:p-24 origin-left">
                <div className="max-w-6xl mx-auto flex flex-col w-full h-full justify-center mt-12 md:mt-0">

                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-24">
                    {/* Left Column: Title + Description + Highlights */}
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          PROJECT / {project.id}
                        </div>
                        <h3 className="text-4xl md:text-6xl font-medium uppercase tracking-tight leading-none text-foreground">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-mono text-foreground tracking-widest uppercase border-b border-border pb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((techItem, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-muted/20 border border-border text-xs font-mono text-foreground uppercase tracking-widest">
                              {techItem}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Tech Stack + Link */}
                    <div className="flex flex-col gap-12 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">

                      <div className="flex flex-col gap-4 mt-4">
                        <h4 className="text-sm font-mono text-foreground tracking-widest uppercase border-b border-border pb-2">Key Highlights</h4>
                        <ul className="flex flex-col gap-3">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-muted-foreground font-light flex gap-3 text-base">
                              <span className="text-foreground">&middot;</span> {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto md:pb-12">
                        <a href="#" className="inline-flex items-center gap-4 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/80 transition-colors w-fit" data-cursor="OPEN">
                          View Live Project &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
