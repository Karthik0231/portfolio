"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        onEnter: () => setSystemState("CONTACT", "08", "PRODUCTION"),
        onEnterBack: () => setSystemState("CONTACT", "08", "PRODUCTION"),
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
      
      tl.fromTo(".contact-title", 
        { opacity: 0, y: 100, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.5, ease: "power4.out" }
      )
      .fromTo(".contact-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=1"
      )
      .fromTo(".contact-link",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 md:py-48 bg-background border-t border-border flex flex-col items-center justify-center min-h-[80vh]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center" style={{ perspective: "1000px" }}>
        <h2 className="contact-title text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-12 origin-bottom">
          Let's build something<br/>worth shipping.
        </h2>
        
        <p className="contact-desc text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          Open to conversations about engineering opportunities, product development, and ambitious software projects.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href={`mailto:${portfolioData.personal.email}`} className="contact-link px-8 py-4 bg-foreground text-background font-medium rounded hover:bg-foreground/80 transition-colors w-full md:w-auto">
            Email Me
          </a>
          <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link px-8 py-4 bg-muted/30 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors w-full md:w-auto">
            LinkedIn
          </a>
          <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="contact-link px-8 py-4 bg-muted/30 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors w-full md:w-auto">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
