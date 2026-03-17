import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import wolk from "@/assets/projetos-adagen/wolk.png";
import lazu from "@/assets/projetos-adagen/lazu.png";
import fernanda from "@/assets/projetos-adagen/fernanda-dermato.png";
import quartiero from "@/assets/projetos-adagen/quartiero.png";
import infoCerto from "@/assets/projetos-adagen/info-certo.png";
import hon from "@/assets/projetos-adagen/hon.png";
import harduston from "@/assets/projetos-adagen/harduston.png";

const projects = [
  {
    image: wolk,
    title: "Wolk Incorporadora",
    category: "Site Institucional",
    description: "Site institucional da Wolk Incorporadora, com informações sobre a empresa, seus projetos, localização, contato e muito mais.",
  },
  {
    image: lazu,
    title: "Lazu Imóveis ",
    category: "Site Institucional",
    description: "Site institucional da Lazu Imóveis, com informações sobre a empresa, seus imóveis, localização, contato e muito mais.",
  },
  {
    image: fernanda,
    title: "Fernanda Dermatologia",
    category: "Landing Page",
    description: "Landing Page da Fernanda Dermatologia, com informações sobre a empresa, seus serviços, localização, contato e muito mais.",
  },
  {
    image: quartiero,
    title: "Quartiero Advogados",
    category: "Site Institucional",
    description: "Site institucional da Quartiero Advogados, com informações sobre a empresa, seus serviços, localização, contato e muito mais.",
  },
  {
    image: infoCerto,
    title: "Info Certo",
    category: "Landing Page",
    description: "Landing Page da Info Certo, com informações sobre a empresa, seus serviços, localização, contato e muito mais.",
  },
  {
    image: hon,
    title: "Hon Arquitetura",
    category: "Site Institucional",
    description: "Site institucional da Hon Arquitetura, com informações sobre a empresa, seus serviços, localização, contato e muito mais.",
  },
  {
    image: harduston,
    title: "Harduston",
    category: "Site Institucional",
    description: "Site institucional da Harduston, com informações sobre a empresa, seus serviços, localização, contato e muito mais.",
  },
];

const ProjectsSection = () => {
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Portfólio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projetos em destaque</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="pl-4 md:basis-1/2">
                  <div className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-glow hover:glow-primary">
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-secondary border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 bg-secondary border-border hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
