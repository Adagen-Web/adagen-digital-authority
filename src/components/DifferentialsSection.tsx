import { motion } from "framer-motion";
import { Code2, Search, Palette, Target, Layers } from "lucide-react";

const differentials = [
  { icon: Code2, title: "Código limpo e performance otimizada" },
  { icon: Search, title: "SEO técnico aplicado desde a base" },
  { icon: Palette, title: "Design moderno e exclusivo" },
  { icon: Target, title: "Foco em conversão e experiência do usuário" },
  { icon: Layers, title: "Estrutura escalável" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Diferenciais</p>
          <h2 className="text-3xl md:text-4xl font-bold">Por que nos escolher</h2>
        </motion.div>

        <div className="space-y-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-5 rounded-lg border border-border bg-card/50 p-5 transition-all duration-300 hover:border-glow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
