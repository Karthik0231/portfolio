"use client";
import { useRef, useCallback } from "react";
import { useSystemStore } from "@/store/systemStore";
import { useScrollFocus } from "@/hooks/useScrollFocus";

const STAGES = [
  { id: "01", title: "DISCOVER", text: "Requirements · Stakeholders · Problem" },
  { id: "02", title: "BUILD", text: "Architecture · Implementation · Integration" },
  { id: "03", title: "DEPLOY", text: "Production · Infrastructure · Release" },
  { id: "04", title: "ITERATE", text: "Feedback · Performance · UX" },
];

export function BuiltForProduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const setSystemState = useSystemStore((state) => state.setSystemState);

  const handleActive = useCallback((index: number, element: HTMLElement) => {
    setSystemState("PRODUCTION", "02", STAGES[index].title);
  }, [setSystemState]);

  useScrollFocus({
    triggerElement: sectionRef,
    itemSelector: ".stage-item",
    onActive: handleActive,
  });

  return (
    <section ref={sectionRef} className="bg-background text-foreground flex flex-col items-center border-t border-border pt-48 pb-48 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-24 relative h-full">
        
        {/* Sticky Left Content */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-48 z-10">
          <h2 className="text-clamp-section font-medium tracking-tight mb-8">Built for production.</h2>
          <p className="text-muted-foreground text-clamp-body font-light leading-relaxed">
            I build software that represents real products, real clients, real users, and real operational requirements.
          </p>
        </div>

        {/* Scrollable Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-32 md:gap-0 relative border-l border-border pl-12 md:pl-24" data-cursor="SELECT">
          {STAGES.map((stage, i) => (
            <div 
              key={stage.id} 
              className="stage-item opacity-50 flex flex-col justify-center origin-left min-h-[50vh] md:min-h-[70vh] cursor-none"
              onClick={(e) => {
                e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              <div className="text-sm font-mono text-muted-foreground/80 mb-6 tracking-widest pointer-events-none">{stage.id} &middot; PHASE</div>
              <h3 className="text-clamp-project font-medium mb-8 uppercase tracking-tight text-foreground transition-colors duration-500 pointer-events-none">{stage.title}</h3>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-md pointer-events-none">{stage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
