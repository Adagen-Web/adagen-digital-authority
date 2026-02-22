import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Diagnóstico e estratégia", description: "Entendemos seu negócio, seus objetivos e o mercado para criar a base do projeto." },
  { number: "02", title: "Estrutura e UX", description: "Desenhamos a experiência do usuário com foco em navegabilidade e conversão." },
  { number: "03", title: "Desenvolvimento", description: "Codificamos com as melhores tecnologias, garantindo performance e qualidade." },
  { number: "04", title: "Otimização e entrega", description: "Refinamos cada detalhe, aplicamos SEO e entregamos um produto impecável." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Processo</p>
          <h2 className="text-3xl md:text-4xl font-bold">Como trabalhamos</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <span className="text-primary font-mono text-sm font-semibold">{step.number}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
