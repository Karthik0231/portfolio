"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        onEnter: () => setSystemState("PROCESS", "06", "OWN → BUILD → ITERATE"),
        onEnterBack: () => setSystemState("PROCESS", "06", "OWN → BUILD → ITERATE"),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
      
      tl.fromTo(".phil-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(".phil-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, [setSystemState]);

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-background border-t border-border relative">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
        <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">SYS.PHILOSOPHY</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="phil-header mb-32">
          <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none text-foreground uppercase">
            More than<br/>code.
          </h2>
        </div>
        
        <div className="flex flex-col gap-24 md:gap-48 ml-auto max-w-4xl">
          {portfolioData.philosophy.map((item, i) => (
            <div key={i} className="phil-item border-t border-border pt-12">
              <div className="text-sm font-mono text-muted-foreground mb-8 tracking-widest">
                0{i + 1}
              </div>
              <h3 className="text-4xl md:text-7xl font-medium tracking-tight mb-8 text-foreground uppercase">
                {item.title}
              </h3>
              <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
