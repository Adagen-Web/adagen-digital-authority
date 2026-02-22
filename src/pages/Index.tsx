import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <ProcessSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
