import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { BuiltForProduction } from "@/components/sections/BuiltForProduction";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { Experience } from "@/components/experience/Experience";
import { TechStack } from "@/components/stack/TechStack";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <Hero />
      <BuiltForProduction />
      <SelectedWork />
      <Experience />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
