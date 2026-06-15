import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NEON  = "#00ff88";
const CYAN  = "#00d9ff";
const BLUE  = "#1145b5";
const GLASS = "rgba(8,12,28,0.92)";

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  /* Show after 1.1 s on first mount */
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
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[10000]"
            style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[10001] flex flex-col items-center"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "min(92vw, 400px)",
              background: GLASS,
              borderRadius: 28,
              border: `1px solid rgba(0,255,136,0.22)`,
              boxShadow: `0 0 0 1px rgba(0,217,255,0.08), 0 32px 80px rgba(0,0,0,0.70), 0 0 60px rgba(0,255,136,0.08)`,
              fontFamily: "'Poppins',sans-serif",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, scale: 0.82, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            {/* Animated neon top edge */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[28px]"
              style={{ background: `linear-gradient(90deg,transparent,${NEON},${CYAN},${NEON},transparent)` }}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
            />

            {/* Close × */}
            <motion.button
              onClick={dismiss}
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <X size={14} />
            </motion.button>

            {/* Robot + glow */}
            <div className="relative mt-8 mb-2">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${NEON}30 0%, transparent 70%)`, transform: "scale(1.6)" }}
              />
              <motion.img
                src="/ai-robot.png"
                alt="Millie"
                style={{ width: 88, height: 88, objectFit: "contain", position: "relative", zIndex: 1,
                  filter: `drop-shadow(0 0 14px ${NEON}70) drop-shadow(0 4px 18px rgba(0,0,0,0.55))` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              />
            </div>

            {/* Greeting text */}
            <div className="px-7 pt-1 pb-6 text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <p style={{ color: NEON, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                  {hi ? "मिली — एआई गाइड" : "Millie — AI Guide"}
                </p>
                <h2 style={{ color: "#ffffff", fontSize: 20, fontWeight: 800, lineHeight: 1.25, marginBottom: 8 }}>
                  {hi ? "नमस्ते! मैं मिली हूँ 👋" : "Hey there! I'm Millie 👋"}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.7, fontWeight: 400 }}>
                  {hi
                    ? "मैं Milestone स्कूल की AI गाइड हूँ। क्या आप स्कूल की tour लेना चाहेंगे या कुछ पूछना चाहेंगे?"
                    : "Your personal guide to The Milestone School. Want a quick tour or have any questions?"}
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "20px 0", originX: 0.5 }}
              />

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-col gap-3"
              >
                {/* Start Tour — spinning green ring */}
                <SpinButton
                  onClick={startTour}
                  ring={`conic-gradient(from 0deg,${NEON},${CYAN},#0d3d20,${NEON})`}
                  bg="linear-gradient(135deg,#0d3d20,#0a2d42)"
                  icon={<Map size={15} color={NEON} />}
                  label={hi ? "🗺️  स्कूल टूर शुरू करें" : "🗺️  Start School Tour"}
                  sub={hi ? "हर कोने की झलक देखें" : "Explore every corner"}
                />

                {/* Ask Me — spinning cyan ring */}
                <SpinButton
                  onClick={startChat}
                  ring={`conic-gradient(from 0deg,${CYAN},${BLUE},#091538,${CYAN})`}
                  bg="linear-gradient(135deg,#0d1e4a,#091538)"
                  icon={<Sparkles size={15} color={CYAN} />}
                  label={hi ? "✨  मुझसे पूछें" : "✨  Ask Me Anything"}
                  sub={hi ? "प्रवेश, फीस, सुविधाएं..." : "Admissions, fees, facilities..."}
                />

                {/* No Thanks */}
                <motion.button
                  onClick={dismiss}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 14,
                    padding: "10px 20px",
                    color: "rgba(255,255,255,0.42)",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                  }}
                >
                  {hi ? "अभी नहीं, धन्यवाद" : "No thanks, just browsing"}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Spinning-ring button (same animation as hero Admissions Open) ── */
function SpinButton({
  onClick, ring, bg, icon, label, sub,
}: {
  onClick: () => void;
  ring: string;
  bg: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
      className="relative cursor-pointer"
      style={{ borderRadius: 16, padding: "2px" }}
    >
      {/* Spinning ring */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 16 }}>
        <motion.div
          className="absolute"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%", background: ring }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center gap-3 px-4 py-3 rounded-[14px]"
        style={{ background: bg, backdropFilter: "blur(16px)" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          {icon}
        </div>
        <div className="text-left flex-1">
          <div style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>{label}</div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10.5, marginTop: 1 }}>{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
