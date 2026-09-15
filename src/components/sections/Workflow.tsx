"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".workflow-item");
        
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top center",
          onEnter: () => setSystemState("PROCESS", "06", "WORKFLOW"),
          onEnterBack: () => setSystemState("PROCESS", "06", "WORKFLOW"),
        });
        
        ScrollTrigger.create({
          trigger: containerRef.current,
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
          gsap.to(item, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top top-=${i * 100}%`,
              end: `top top-=${(i + 1) * 100}%`,
              scrub: true,
              onEnter: () => gsap.to(item, { opacity: 1, scale: 1, duration: 0.3 }),
              onLeave: () => gsap.to(item, { opacity: 0.3, scale: 0.9, duration: 0.3 }),
              onEnterBack: () => gsap.to(item, { opacity: 1, scale: 1, duration: 0.3 }),
              onLeaveBack: () => gsap.to(item, { opacity: 0.3, scale: 0.9, duration: 0.3 })
            }
          });
        });
      }, containerRef);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animation
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".workflow-item");
        items.forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0, x: -20 },
            { 
              opacity: 1, x: 0, duration: 0.6,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
              }
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-0 md:h-screen bg-background border-t border-white/5 overflow-hidden flex flex-col md:justify-center">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-24 md:absolute md:top-24 md:left-0 md:w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">How I work</h2>
      </div>

      <div className="md:w-[600%] flex flex-col md:flex-row h-full md:items-center" ref={scrollContainerRef}>
        {portfolioData.workflow.map((item, index) => (
          <div 
            key={item.id} 
            className="workflow-item w-full md:w-1/6 flex-shrink-0 px-6 md:px-12 md:opacity-30 mb-12 md:mb-0 origin-left"
          >
            <div className="border-t border-white/20 pt-6">
              <div className="text-xl font-mono text-zinc-500 mb-6">{item.id}</div>
              <h3 className="text-3xl md:text-5xl font-medium mb-6 uppercase tracking-tight">{item.title}</h3>
              <p className="text-xl text-zinc-400 font-light max-w-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
