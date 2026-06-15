import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NEON = "#00ff88";
const CYAN = "#00d9ff";
const BLUE = "#1a56db";

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1100);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => setVisible(false);
  const hi = lang === "hi";

  const startTour = () => {
    dismiss();
    setTimeout(() => window.dispatchEvent(new CustomEvent("millie:start-tour")), 320);
  };
  const startChat = () => {
    dismiss();
    setTimeout(() => window.dispatchEvent(new CustomEvent("millie:start-chat")), 320);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[10000] px-4"
          style={{ background: "rgba(0,0,5,0.72)", backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={dismiss}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden"
            style={{
              width: "min(92vw, 400px)",
              borderRadius: 28,
              background: "linear-gradient(160deg,#070d1f 0%,#040910 60%,#060d1a 100%)",
              border: "1px solid rgba(0,255,136,0.18)",
              boxShadow:
                "0 0 0 1px rgba(0,217,255,0.06), 0 40px 90px rgba(0,0,0,0.80), inset 0 1px 0 rgba(255,255,255,0.05)",
              fontFamily: "'Poppins',sans-serif",
            }}
            initial={{ opacity: 0, scale: 0.78, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 18 }}
            transition={{ type: "spring", stiffness: 290, damping: 24 }}
          >
            {/* ── Aurora blobs in background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: 28 }}>
              <motion.div
                className="absolute"
                style={{ width: 260, height: 260, top: -80, left: -80, borderRadius: "50%", background: `radial-gradient(circle,${NEON}18 0%,transparent 70%)`, filter: "blur(30px)" }}
                animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute"
                style={{ width: 220, height: 220, bottom: -60, right: -60, borderRadius: "50%", background: `radial-gradient(circle,${CYAN}14 0%,transparent 70%)`, filter: "blur(28px)" }}
                animate={{ scale: [1, 1.22, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }}
              />
              <motion.div
                className="absolute"
                style={{ width: 160, height: 160, top: "40%", right: "10%", borderRadius: "50%", background: `radial-gradient(circle,${BLUE}18 0%,transparent 70%)`, filter: "blur(22px)" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.6 }}
              />
            </div>

            {/* ── Animated top neon bar ── */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg,transparent 0%,${NEON} 35%,${CYAN} 65%,transparent 100%)` }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />

            {/* ── × Close ── */}
            <motion.button
              onClick={dismiss}
              whileHover={{ scale: 1.12, backgroundColor: "rgba(255,255,255,0.11)" }}
              whileTap={{ scale: 0.92 }}
              className="absolute top-4 right-4 z-20 flex items-center justify-center cursor-pointer"
              style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
            >
              <X size={13} />
            </motion.button>

            {/* ── Robot ── */}
            <div className="relative flex items-center justify-center mt-8 mb-3">
              {/* Glowing backdrop */}
              <div
                className="absolute"
                style={{ width: 90, height: 90, borderRadius: "50%", background: `radial-gradient(circle,${NEON}28 0%,${CYAN}10 55%,transparent 75%)` }}
              />
              <motion.img
                src="/ai-robot.png"
                alt="Milestone Mentor"
                style={{
                  width: 80, height: 80, objectFit: "contain", position: "relative", zIndex: 2,
                  filter: `drop-shadow(0 0 16px ${NEON}80) drop-shadow(0 6px 20px rgba(0,0,0,0.6))`,
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </div>

            {/* ── Text ── */}
            <div className="relative z-10 px-7 pb-7 text-center">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                style={{ background: `${NEON}14`, border: `1px solid ${NEON}30` }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: NEON, display: "inline-block", boxShadow: `0 0 6px ${NEON}` }} />
                <span style={{ color: NEON, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                  {"MILESTONE MENTOR"}
                </span>
              </div>

              <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 8, letterSpacing: "-0.01em" }}>
                {hi ? "नमस्ते! मैं Milestone Mentor हूँ 👋" : "Hey there! I'm Milestone Mentor! 👋"}
              </h2>

              <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 12.5, lineHeight: 1.7, fontWeight: 400, marginBottom: 20 }}>
                {hi
                  ? "Milestone School की AI गाइड हूँ। School का tour लें या कुछ भी पूछें!"
                  : "Your personal guide to The Milestone School. Take a tour or ask me anything!"}
              </p>

              {/* ── Buttons ── */}
              <div className="flex flex-col gap-3">
                <PremiumButton
                  onClick={startTour}
                  ringColor={`conic-gradient(from 0deg,${NEON},#00aa55,#031a0b,${NEON})`}
                  glowColor={NEON}
                  bg="linear-gradient(135deg,#041a0f 0%,#071e2a 100%)"
                  borderColor={`${NEON}35`}
                  icon={<Map size={18} strokeWidth={2} color={NEON} />}
                  label={hi ? "🗺️  स्कूल टूर शुरू करें" : "🗺️  Start School Tour"}
                  sub={hi ? "हर कोने की झलक देखें" : "Explore every corner of the school"}
                  accent={NEON}
                />
                <PremiumButton
                  onClick={startChat}
                  ringColor={`conic-gradient(from 0deg,${CYAN},#0050a0,#040b25,${CYAN})`}
                  glowColor={CYAN}
                  bg="linear-gradient(135deg,#040b25 0%,#060e30 100%)"
                  borderColor={`${CYAN}30`}
                  icon={<Sparkles size={18} strokeWidth={2} color={CYAN} />}
                  label={hi ? "✨  मुझसे कुछ भी पूछें" : "✨  Ask Me Anything"}
                  sub={hi ? "प्रवेश, फीस, सुविधाएं, और बहुत कुछ" : "Admissions, fees, facilities & more"}
                  accent={CYAN}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Premium animated button ── */
function PremiumButton({
  onClick, ringColor, glowColor, bg, borderColor, icon, label, sub, accent,
}: {
  onClick: () => void;
  ringColor: string;
  glowColor: string;
  bg: string;
  borderColor: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  accent: string;
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
      style={{ borderRadius: 16, padding: "2px" }}
    >
      {/* Spinning conic ring */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 16 }}>
        <motion.div
          className="absolute"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%", background: ringColor }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
        />
      </div>

      {/* Glow on hover */}
      <AnimatePresence>
        {hov && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ borderRadius: 16, boxShadow: `0 0 24px ${glowColor}50, 0 0 50px ${glowColor}20` }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Inner content */}
      <div
        className="relative z-10 flex items-center gap-3.5 px-4 py-3.5 rounded-[14px]"
        style={{ background: bg, border: `1px solid ${borderColor}` }}
      >
        {/* Icon circle */}
        <motion.div
          className="flex items-center justify-center flex-shrink-0 rounded-xl"
          style={{
            width: 42, height: 42,
            background: hov ? `${glowColor}20` : "rgba(255,255,255,0.06)",
            border: `1px solid ${hov ? glowColor + "55" : "rgba(255,255,255,0.10)"}`,
            boxShadow: hov ? `0 0 16px ${glowColor}45, inset 0 0 10px ${glowColor}15` : "none",
            transition: "all 0.28s ease",
          }}
        >
          {icon}
        </motion.div>

        {/* Text */}
        <div className="flex-1 text-left">
          <div style={{ color: "#fff", fontSize: 13.5, fontWeight: 700, lineHeight: 1.3 }}>{label}</div>
          <div style={{ color: "rgba(255,255,255,0.40)", fontSize: 11, marginTop: 2 }}>{sub}</div>
        </div>

        {/* Arrow */}
        <motion.div
          style={{ color: accent, fontSize: 18, lineHeight: 1 }}
          animate={{ x: hov ? 3 : 0, opacity: hov ? 1 : 0.45 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}
