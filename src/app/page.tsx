import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { HorizonSection } from "@/components/sections/HorizonSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PhilosophySection />
        <HorizonSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
