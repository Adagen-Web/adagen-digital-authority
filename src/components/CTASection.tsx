import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Seu próximo projeto começa com uma <span className="text-primary text-glow">decisão.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Vamos criar algo que represente o verdadeiro potencial da sua marca.
          </p>
          <Button onClick={() => window.open("https://api.whatsapp.com/send/?phone=555182083939", "_blank")} variant="hero" size="lg" className="text-base px-10 py-6">
            <FaWhatsapp />
            Fale conosco
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
