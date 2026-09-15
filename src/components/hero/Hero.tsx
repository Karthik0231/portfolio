"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { useSystemStore } from "@/store/systemStore";
import heroImage from "@/assets/hero-image.png"
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const setSystemState = useSystemStore((state) => state.setSystemState);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
        .fromTo(
          ".hero-headline-line",
          { opacity: 0, y: 40, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.15 },
          "-=0.6"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ".hero-meta-item",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.95, filter: "blur(10px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5 },
          "-=1"
        )
        .fromTo(
          ".system-grid",
          { opacity: 0 },
          { opacity: 1, duration: 2 },
          "-=1.5"
        );

      // Scroll Transition
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onEnter: () => setSystemState("INTRO", "01", "IDEA"),
        onEnterBack: () => setSystemState("INTRO", "01", "IDEA"),
        animation: gsap
          .timeline()
          .to(headlineRef.current, { scale: 0.95, y: 50, opacity: 0.2 })
          .to(".system-grid", { y: -50, opacity: 0 }, 0),
      });
    }, containerRef);

    return () => ctx.revert();
  }, [setSystemState]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden"
      data-cursor="EXPLORE"
    >
      {/* Subtle Background System Grid */}
      <div className="system-grid absolute inset-0 pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col justify-center min-h-[60vh] md:min-h-[80vh] pointer-events-none mt-8 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center w-full">

          {/* Left Column (Text) */}
          <div className="max-w-[100vw] md:max-w-none pointer-events-auto">
            <div className="hero-eyebrow flex items-center gap-4 mb-6 md:mb-12">
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {portfolioData.personal.title} &middot; INDIA
              </span>
              <span className="w-12 h-[1px] bg-border hidden md:block"></span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest hidden md:block">SYS.IDEA_PHASE</span>
            </div>

            <h1
              ref={headlineRef}
              className="text-clamp-hero font-medium tracking-tight mb-6 md:mb-16 text-foreground"
              style={{ perspective: "1000px" }}
            >
              <div className="overflow-hidden py-1 md:py-2"><div className="hero-headline-line inline-block origin-bottom">I build products</div></div>
              <div className="overflow-hidden py-1 md:py-2"><div className="hero-headline-line inline-block origin-bottom text-muted-foreground">that move from idea</div></div>
              <div className="overflow-hidden py-1 md:py-2"><div className="hero-headline-line inline-block origin-bottom opacity-50">to production.</div></div>
            </h1>

            <div className="hero-description max-w-2xl text-muted-foreground text-clamp-body font-light leading-relaxed mb-8 md:mb-16 pr-4 md:pr-0">
              <p>
                Full-stack development across web, Android, APIs and production systems. I don&apos;t just write code. I own products from requirements through deployment.
              </p>
            </div>

            <div ref={metaRef} className="flex flex-wrap gap-4 md:gap-8 text-xs font-mono text-muted-foreground">
              <MagneticPill label="Full Stack" index="01" />
              <MagneticPill label="Mobile" index="02" />
              <MagneticPill label="Production" index="03" />
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="flex justify-center md:justify-end items-center pointer-events-none hero-image mt-8 md:mt-0">
            <div className="relative w-full max-w-[280px] md:max-w-lg aspect-square">
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-6 h-6 md:w-8 md:h-8 border-t border-l border-border/40"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 md:w-8 md:h-8 border-b border-r border-border/40"></div>

              <Image
                src={heroImage}
                alt="System Architecture"
                className="w-full h-full object-cover rounded-sm mix-blend-screen opacity-70 md:opacity-90 filter grayscale contrast-125 dark:filter-none dark:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMagneticHover } from "@/hooks/useMagneticHover";
import { motion } from "framer-motion";

function MagneticNode({ x, y, label, delay }: { x: string, y: string, label: string, delay: number }) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticHover(15);

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-auto"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-4 py-2 border border-border/50 rounded-full hover:border-foreground/30 hover:text-foreground transition-colors cursor-default backdrop-blur-sm bg-background/50"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30"></span>
        {label}
      </motion.div>
    </motion.div>
  );
}

function MagneticPill({ label, index }: { label: string, index: string }) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticHover(5);
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="hero-meta-item flex flex-col gap-2 group cursor-default"
    >
      <span className="text-muted/30 group-hover:text-foreground transition-colors">{index}</span>
      <span className="uppercase tracking-widest text-foreground">{label}</span>
    </motion.div>
  );
}
