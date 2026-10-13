import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { IdeaToProduction } from "@/components/sections/IdeaToProduction";
import { TechnicalPractice } from "@/components/stack/TechnicalPractice";
import { Experience } from "@/components/experience/Experience";
import { EngineeringToolkit } from "@/components/stack/EngineeringToolkit";
import { Education } from "@/components/about/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-cobalt selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <IdeaToProduction />
      <TechnicalPractice />
      <Experience />
      <EngineeringToolkit />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
