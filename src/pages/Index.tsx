import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <section id="servicos"><ServicesSection /></section>
      <section id="diferenciais"><DifferentialsSection /></section>
      <section id="processo"><ProcessSection /></section>
      <section id="equipe"><TeamSection /></section>
      <section id="cta"><CTASection /></section>
      <Footer />
    </main>
  );
};

export default Index;
