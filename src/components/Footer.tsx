const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Adagen Soluções Web. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
