"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  FileDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { contact, personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-background border-b border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="max-w-4xl mx-auto border border-border bg-elevated rounded-2xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
          {/* Subtle blueprint grid in the background */}
          <div className="absolute inset-0 engineering-grid opacity-30 pointer-events-none" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
                09 &middot; INITIATE CONTACT
              </span>
            </div>

            {/* Headline */}
            <h2 className="headline-editorial text-3xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              {contact.headline}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              {contact.subheadline}
            </p>

            {/* Direct Email Action Center */}
            <div className="p-6 bg-muted/40 border border-border rounded-xl mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cobalt/10 text-cobalt rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-display font-semibold text-lg sm:text-xl text-foreground hover:text-cobalt transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-elevated border border-border hover:border-cobalt/40 text-foreground font-mono text-xs uppercase tracking-wider rounded font-medium transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contact.email}?subject=Software%20Engineering%20Opportunity%20-%20H%20S%20Karthik`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-foreground/90 transition-all shadow-xs"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Metadata & Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Location &amp; Timezone
                </span>
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <MapPin className="w-4 h-4 text-cobalt" />
                  <span>Based in Udupi &middot; Working in Mangaluru (IST)</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Phone className="w-4 h-4 text-cobalt" />
                  <a href={`tel:${contact.phone}`} className="hover:text-cobalt transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Profiles &amp; Resume
                </span>
                <div className="flex items-center gap-4 text-sm text-foreground">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-cobalt transition-colors font-mono text-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-cobalt transition-colors font-mono text-xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.resumeUrl}
                    download="HS_Karthik_Resume_Full_Stack_Developer.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cobalt hover:underline font-mono text-xs font-semibold"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
