"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Users } from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
              06 &middot; PROFESSIONAL TIMELINE
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Hands-on Production Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Over 2 years of practical software engineering experience spanning full-time client delivery, API design, security implementations, workshops, and mentoring.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-12 lg:space-y-16 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 lg:before:left-8 before:w-px before:bg-border before:hidden sm:before:block">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative sm:pl-16 lg:pl-20 flex flex-col items-start group"
            >
              {/* Timeline Marker Dot */}
              <div className="hidden sm:flex absolute left-4 sm:left-6 lg:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background bg-cobalt items-center justify-center top-6 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="w-full p-6 sm:p-8 lg:p-10 border border-border bg-elevated/70 rounded-xl transition-all duration-300 hover:border-cobalt/40 shadow-xs">
                
                {/* Header: Role, Period, Location */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-0.5 bg-cobalt/10 text-cobalt text-xs font-mono font-semibold rounded">
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-cobalt mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/60 border border-border rounded font-mono text-xs text-foreground shrink-0 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cobalt" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-base text-foreground/90 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Contributions */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold block">
                    Key Engineering Contributions:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Technologies */}
                <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-muted/40 border border-border/80 text-foreground font-mono text-[11px] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.company.includes("DataQueue") && (
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Users className="w-4 h-4 text-cobalt" />
                      <span>Workshop Instructor &amp; Mentor</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
