import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "9306527660";

export default function PhoneButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="hidden sm:block fixed bottom-28 left-5 z-50 rounded-full"
      style={{ padding: "2.5px" }}
    >
      {/* Spinning ring */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div className="absolute"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%",
            background: "conic-gradient(from 0deg,#1a3a6b,#2563eb,#3b82f6,#1e40af,#2563eb,#1a3a6b)" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}/>
      </div>
      {/* Button */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full shadow-xl"
        style={{ background: "#1a3a6b" }}
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </motion.div>
  );
}
