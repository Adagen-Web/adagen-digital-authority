import { motion } from "framer-motion";
import { Globe, Zap, BookOpen, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Presença digital sólida com design exclusivo e performance otimizada para sua marca.",
  },
  {
    icon: Zap,
    title: "Landing Pages de Alta Conversão",
    description: "Páginas estratégicas focadas em captar leads e gerar resultados mensuráveis.",
  },
  {
    icon: BookOpen,
    title: "Blogs Otimizados para SEO",
    description: "Conteúdo que ranqueia. Estrutura técnica que coloca sua marca no topo do Google.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces Escaláveis",
    description: "Lojas virtuais robustas, rápidas e preparadas para crescer com o seu negócio.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold">O que criamos para você</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow hover:glow-primary"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
