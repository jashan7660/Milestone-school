import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "9306527660";

export default function PhoneButton() {
  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      aria-label="Call us"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden sm:flex fixed bottom-28 left-5 z-50 items-center justify-center w-14 h-14 rounded-full shadow-xl"
      style={{ background: "#1a3a6b" }}
    >
      <Phone className="w-6 h-6 text-white" />
      <span className="absolute inline-flex w-14 h-14 rounded-full opacity-40 animate-ping" style={{ background: "#1a3a6b" }} />
    </motion.a>
  );
}
