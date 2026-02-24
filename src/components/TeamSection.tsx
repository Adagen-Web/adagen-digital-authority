import { motion } from "framer-motion";
import teamMateus from "@/assets/team-mateus-green.png";
import teamAlini from "@/assets/team-alini.jpeg";

const team = [
  {
    name: "Mateus Paulart",
    role: "Desenvolvedor",
    description:
      "Especialista em desenvolvimento web com foco em performance, arquitetura escalável e experiências modernas.",
    image: teamMateus,
  },
  {
    name: "Alini Ross",
    role: "Gestão e Organização",
    description:
      "Responsável pela gestão estratégica, organização de processos e alinhamento de projetos.",
    image: teamAlini,
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Equipe
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Quem faz acontecer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-glow-pulse" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
