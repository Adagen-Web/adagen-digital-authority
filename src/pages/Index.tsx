import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloating = lazy(() => import("@/components/WhatsAppFloating"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="projetos">
          <ProjectsSection />
        </section>
        <section id="diferenciais">
          <DifferentialsSection />
        </section>
        <section id="processo">
          <ProcessSection />
        </section>
        <section id="equipe">
          <TeamSection />
        </section>
        <section id="cta">
          <CTASection />
        </section>
        <Footer />
        <WhatsAppFloating />
      </Suspense>
    </main>
  );
};

export default Index;
