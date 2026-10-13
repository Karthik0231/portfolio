"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-16 lg:py-24 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="border border-border bg-elevated/70 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
                  08 &middot; ACADEMIC FOUNDATION
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
                {education.degree}
              </h3>
              <p className="text-base text-muted-foreground font-medium mb-4">
                {education.institution}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 bg-cobalt/10 text-cobalt rounded font-bold">
                  CGPA: {education.grade}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
              </div>
            </div>

            {/* Right Coursework & Achievements Column (7 cols) */}
            <div className="lg:col-span-7 lg:pl-8 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                Core Computing Curriculum &amp; Foundations:
              </span>
              <div className="space-y-2.5">
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
