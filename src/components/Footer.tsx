const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#cta" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="container max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="/">
            <img
              src="./logo-adagen.png"
              alt="Adagen"
              className="w-48 my-2 h-auto object-contain"
            />
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Adagen Soluções Web. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
