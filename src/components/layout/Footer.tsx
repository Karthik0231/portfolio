import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm font-semibold tracking-widest uppercase mb-1">
            {portfolioData.personal.name}
          </span>
          <span className="text-xs text-zinc-500">
            {portfolioData.personal.title}
          </span>
        </div>

        <div className="flex gap-6 text-sm text-zinc-500">
          <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
        </div>

        <div className="text-xs text-zinc-600 text-center md:text-right flex flex-col">
          <span>&copy; {currentYear} {portfolioData.personal.name}</span>
          <span>Built with Next.js & TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
