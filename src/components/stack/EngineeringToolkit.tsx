"use client";

import { portfolioData } from "@/data/portfolio";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Terminal, 
  Cloud 
} from "lucide-react";

export function EngineeringToolkit() {
  const { toolkit } = portfolioData;

  const categories = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-4 h-4 text-cobalt" />,
      items: toolkit.languages,
    },
    {
      title: "Frontend & Mobile",
      icon: <Layers className="w-4 h-4 text-cobalt" />,
      items: toolkit.frontend,
    },
    {
      title: "Backend & Services",
      icon: <Server className="w-4 h-4 text-cobalt" />,
      items: toolkit.backend,
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-4 h-4 text-cobalt" />,
      items: toolkit.databases,
    },
    {
      title: "DevOps & Tooling",
      icon: <Terminal className="w-4 h-4 text-cobalt" />,
      items: toolkit.toolsAndDevOps,
    },
  ];

  return (
    <section id="toolkit" className="py-20 lg:py-32 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
              07 &middot; ENGINEERING TOOLKIT
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Technologies &middot; Production Applied
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Curated tools and platforms leveraged in real client applications. Categorized by operational utility without artificial proficiency ratings.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 border border-border bg-elevated/70 rounded-xl hover:border-cobalt/40 transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    {cat.icon}
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-semibold text-foreground group-hover:text-cobalt transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-sans mt-0.5 leading-normal">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-border/60 text-[10px] font-mono text-muted-foreground flex justify-between">
                <span>Production Verified</span>
                <span className="text-cobalt">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
