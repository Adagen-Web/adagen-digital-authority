import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloating = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=555182083939";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-12 rounded-full shadow-2xl bg-gradient-to-br from-[#bef264] to-primary hover:to-primary/90 transition-all duration-300 group glow-primary hover:glow-primary-strong"
      aria-label="Contatar via WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-primary/40 group-hover:hidden" />
      <FaWhatsapp className="w-6 h-6 text-black transition-transform group-hover:scale-110" />
    </motion.a>
  );
};

export default WhatsAppFloating;
