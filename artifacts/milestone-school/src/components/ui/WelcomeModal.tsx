import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NEON  = "#00ff88";
const CYAN  = "#00d9ff";
const BLUE  = "#1145b5";
const GLASS = "rgba(8,12,28,0.93)";

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1100);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => setVisible(false);

  const startTour = () => {
    dismiss();
    setTimeout(() => window.dispatchEvent(new CustomEvent("millie:start-tour")), 320);
  };

  const startChat = () => {
    dismiss();
    setTimeout(() => window.dispatchEvent(new CustomEvent("millie:start-chat")), 320);
  };

  const hi = lang === "hi";

  return (
    <AnimatePresence>
      {visible && (
        /* Full-screen overlay — flex centres the card perfectly */
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[10000] px-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(7px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={dismiss}
        >
          {/* Card — stop click propagation so clicking inside doesn't close */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center overflow-hidden"
            style={{
              width: "min(92vw, 390px)",
              background: GLASS,
              borderRadius: 26,
              border: "1px solid rgba(0,255,136,0.20)",
              boxShadow: "0 0 0 1px rgba(0,217,255,0.06), 0 28px 70px rgba(0,0,0,0.75), 0 0 55px rgba(0,255,136,0.07)",
              fontFamily: "'Poppins',sans-serif",
            }}
            initial={{ opacity: 0, scale: 0.80, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 310, damping: 26 }}
          >
            {/* Animated neon top edge */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg,transparent,${NEON},${CYAN},${NEON},transparent)` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
            />

            {/* × close */}
            <motion.button
              onClick={dismiss}
              whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full flex items-center justify-center z-10 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <X size={13} />
            </motion.button>

            {/* Robot */}
            <div className="relative mt-6 mb-1">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle,${NEON}28 0%,transparent 70%)`, transform: "scale(1.8)" }}
              />
              <motion.img
                src="/ai-robot.png"
                alt="Millie"
                style={{
                  width: 78, height: 78, objectFit: "contain", position: "relative", zIndex: 1,
                  filter: `drop-shadow(0 0 12px ${NEON}66) drop-shadow(0 4px 16px rgba(0,0,0,0.6))`,
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              />
            </div>

            {/* Text */}
            <div className="px-6 pt-1 pb-5 text-center w-full">
              <p style={{ color: NEON, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 5 }}>
                {hi ? "मिली — एआई गाइड" : "Millie — AI Guide"}
              </p>
              <h2 style={{ color: "#ffffff", fontSize: 19, fontWeight: 800, lineHeight: 1.25, marginBottom: 6 }}>
                {hi ? "नमस्ते! मैं मिली हूँ 👋" : "Hey there! I'm Millie 👋"}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 12.5, lineHeight: 1.65, fontWeight: 400 }}>
                {hi
                  ? "Milestone स्कूल की AI गाइड। Tour लें या कुछ पूछें!"
                  : "Your personal guide to The Milestone School. Take a tour or ask anything!"}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "16px 0" }} />

              {/* Buttons */}
              <div className="flex flex-col gap-2.5">
                <SpinButton
                  onClick={startTour}
                  ring={`conic-gradient(from 0deg,${NEON},${CYAN},#0d3d20,${NEON})`}
                  bg="linear-gradient(135deg,#0a2a16 0%,#0a2535 100%)"
                  accentColor={NEON}
                  icon={<Map size={16} color={NEON} />}
                  label={hi ? "🗺️  स्कूल टूर शुरू करें" : "🗺️  Start School Tour"}
                  sub={hi ? "हर कोने की झलक देखें" : "Explore every corner"}
                />
                <SpinButton
                  onClick={startChat}
                  ring={`conic-gradient(from 0deg,${CYAN},${BLUE},#080f30,${CYAN})`}
                  bg="linear-gradient(135deg,#080f30 0%,#0d1240 100%)"
                  accentColor={CYAN}
                  icon={<Sparkles size={16} color={CYAN} />}
                  label={hi ? "✨  मुझसे पूछें" : "✨  Ask Me Anything"}
                  sub={hi ? "प्रवेश, फीस, सुविधाएं..." : "Admissions, fees, facilities..."}
                />

                {/* No thanks */}
                <motion.button
                  onClick={dismiss}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.07)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 13,
                    padding: "9px 20px",
                    color: "rgba(255,255,255,0.38)",
                    fontSize: 11.5,
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                  }}
                >
                  {hi ? "अभी नहीं, सिर्फ देख रहा हूँ" : "No thanks, just browsing"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Spinning-ring button ── */
function SpinButton({
  onClick, ring, bg, accentColor, icon, label, sub,
}: {
  onClick: () => void;
  ring: string;
  bg: string;
  accentColor: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.975 }}
      className="relative cursor-pointer"
      style={{ borderRadius: 15, padding: "2px" }}
    >
      {/* Spinning conic ring */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 15 }}>
        <motion.div
          className="absolute"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%", background: ring }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>

      {/* Inner card */}
      <div
        className="relative z-10 flex items-center gap-3 px-4 py-3 rounded-[13px]"
        style={{ background: bg }}
      >
        {/* Icon box */}
        <motion.div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: hov ? `${accentColor}22` : "rgba(255,255,255,0.07)",
            border: `1px solid ${hov ? accentColor + "44" : "rgba(255,255,255,0.10)"}`,
            boxShadow: hov ? `0 0 12px ${accentColor}44` : "none",
            transition: "all 0.25s ease",
          }}
        >
          {icon}
        </motion.div>

        {/* Text */}
        <div className="text-left flex-1">
          <div style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>{label}</div>
          <div style={{ color: "rgba(255,255,255,0.42)", fontSize: 10.5, marginTop: 1 }}>{sub}</div>
        </div>

        {/* Arrow */}
        <motion.div
          style={{ color: accentColor, fontSize: 16, opacity: hov ? 1 : 0.4 }}
          animate={{ x: hov ? 2 : 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}
