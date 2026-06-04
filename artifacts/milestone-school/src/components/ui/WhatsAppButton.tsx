import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919306527660";
const PRE_FILLED_MESSAGE = encodeURIComponent(
  "Hello! I would like to inquire about admissions at The Milestone Sr. Sec. School. Could you please share details about fee structure, curriculum, and the admission process?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden sm:flex fixed bottom-8 left-5 z-50 items-center justify-center w-14 h-14 rounded-full shadow-xl"
      style={{ background: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M24 4C13 4 4 13 4 24c0 3.6 1 6.9 2.7 9.8L4 44l10.5-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.5-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2s-1.2 1.5-1.4 1.8c-.3.3-.5.4-1 .1s-1.9-.7-3.7-2.2c-1.4-1.2-2.3-2.7-2.6-3.1-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.7-.8-1-.8h-.9c-.3 0-.8.1-1.2.6S14 20.4 14 22.7c0 2.3 1.7 4.5 1.9 4.8.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 1.1.3 2.2.3 3 .2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z" />
      </svg>
      <span className="absolute inline-flex w-14 h-14 rounded-full opacity-40 animate-ping" style={{ background: "#25D366" }} />
    </motion.a>
  );
}
