"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Full-page Galaxy — fixed behind all content */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseInteraction
          mouseRepulsion
          repulsionStrength={1.5}
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.35}
          rotationSpeed={0.12}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={0.9}
          transparent={false}
        />
      </div>

      {/* All page content on top */}
      <div className="relative z-10">
        <Navbar />
        <Sidebar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
