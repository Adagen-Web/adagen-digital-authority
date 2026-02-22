import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Dashboard Analytics",
    category: "Site Institucional",
    description: "Plataforma de dados com interface moderna e performance otimizada.",
  },
  {
    image: project2,
    title: "Lux E-commerce",
    category: "E-commerce",
    description: "Loja virtual premium com catálogo dinâmico e checkout fluído.",
  },
  {
    image: project3,
    title: "SaaS Landing Page",
    category: "Landing Page",
    description: "Página de alta conversão com design estratégico e SEO técnico.",
  },
  {
    image: project4,
    title: "Portal Editorial",
    category: "Blog / Portal",
    description: "Blog otimizado para SEO com arquitetura de conteúdo escalável.",
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
