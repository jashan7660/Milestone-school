import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, BookOpen, Star, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

/* ── Site palette ────────────────────────────────────────────── */
const BLUE   = "#1a56db";   /* primary   hsl(218 90% 42%) */
const BLUE_L = "#3b82f6";   /* lighter   blue-500         */
const GREEN  = "#1c9e5e";   /* secondary hsl(152 70% 38%) */
const GREEN_L = "#4ade80";  /* lighter   green-400        */

const STAT_META = [
  {
    end: 15,   suffix: "+", icon: Star,
    accent: GREEN,   accentL: GREEN_L,
    ring: `conic-gradient(from 0deg,${GREEN_L},${GREEN},#0a3d21,${GREEN_L})`,
    label_color: GREEN_L,
  },
  {
    end: 1200, suffix: "+", icon: Users,
    accent: BLUE,    accentL: BLUE_L,
    ring: `conic-gradient(from 0deg,${BLUE_L},${BLUE},#071433,${BLUE_L})`,
    label_color: BLUE_L,
  },
  {
    end: 80,   suffix: "+", icon: BookOpen,
    accent: GREEN,   accentL: GREEN_L,
    ring: `conic-gradient(from 0deg,${GREEN_L},${GREEN},#0a3d21,${GREEN_L})`,
    label_color: GREEN_L,
  },
  {
    end: 100,  suffix: "%", icon: GraduationCap,
    accent: BLUE,    accentL: BLUE_L,
    ring: `conic-gradient(from 0deg,${BLUE_L},${BLUE},#071433,${BLUE_L})`,
    label_color: BLUE_L,
  },
];

function Counter({ end, suffix, label, icon: Icon, accent, accentL, ring, label_color }:
  typeof STAT_META[0] & { label: string }) {
  const [count, setCount]     = useState(0);
  const [hovered, setHovered] = useState(false);
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration  = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="relative"
      style={{ padding: 2, borderRadius: 20 }}
    >
      {/* Spinning ring */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 20 }}>
        <motion.div
          className="absolute"
          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%", background: ring }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
        />
      </div>

      {/* Card */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-8 overflow-hidden"
        style={{
          borderRadius: 18,
          background: "rgba(6, 12, 42, 0.92)",
          backdropFilter: "blur(20px)",
          minHeight: 210,
        }}
      >
        {/* Subtle radial glow inside card */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 100%, ${accent}28 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0.5,
          }}
        />

        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(110deg, transparent 38%, rgba(255,255,255,0.05) 50%, transparent 62%)",
            borderRadius: 18,
          }}
          animate={{ x: ["-120%", "220%"] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "linear", repeatDelay: 2 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center mb-5 flex-shrink-0"
          style={{
            width: 60, height: 60, borderRadius: 16,
            background: `${accent}18`,
            border: `1.5px solid ${accent}55`,
            boxShadow: `0 0 20px ${accent}30`,
          }}
          animate={{
            boxShadow: hovered
              ? `0 0 32px ${accent}60, 0 0 60px ${accent}25`
              : [`0 0 14px ${accent}25`, `0 0 26px ${accent}45`, `0 0 14px ${accent}25`],
          }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <Icon size={26} style={{ color: accentL }} />
        </motion.div>

        {/* Stat number */}
        <div
          className="relative z-10 font-serif font-extrabold tabular-nums leading-none"
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
            background: `linear-gradient(135deg, #ffffff 35%, ${accentL})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {count}{suffix}
        </div>

        {/* Label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 font-semibold uppercase tracking-widest mt-2"
            style={{ fontSize: 10, color: label_color, letterSpacing: "0.14em" }}
          >
            {label}
          </motion.p>
        </AnimatePresence>

        {/* Fill bar */}
        <div className="relative z-10 w-full mt-5 rounded-full overflow-hidden" style={{ height: 3, background: "rgba(255,255,255,0.10)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${accent}80, ${accentL})` }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? "100%" : 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  const t = SITE[lang].stats;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background — deep navy matching site's primary dark */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #040d2a 0%, #071540 45%, #051028 100%)" }}
      />

      {/* Decorative orbs using site blue + green */}
      <div className="absolute pointer-events-none" style={{ top: "-5%", left: "-8%", width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, ${GREEN}12 0%, transparent 70%)` }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-10%", right: "-6%", width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${BLUE}14 0%, transparent 70%)` }} />
      <div className="absolute pointer-events-none" style={{ top: "40%", right: "22%", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${GREEN}08 0%, transparent 70%)` }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating dots */}
      {[
        { x: "7%",  y: "18%", s: 7,  c: `${GREEN_L}55`, d: 5.4, dl: 0 },
        { x: "22%", y: "72%", s: 5,  c: `${BLUE_L}44`,  d: 6.9, dl: 1.2 },
        { x: "78%", y: "15%", s: 6,  c: `${GREEN_L}44`, d: 4.8, dl: 0.5 },
        { x: "88%", y: "68%", s: 5,  c: `${BLUE_L}44`,  d: 7.2, dl: 1.9 },
        { x: "52%", y: "82%", s: 4,  c: `${GREEN_L}33`, d: 5.7, dl: 2.3 },
        { x: "38%", y: "8%",  s: 4,  c: `${BLUE_L}33`,  d: 6.1, dl: 0.4 },
      ].map(({ x, y, s, c, d, dl }, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: x, top: y, width: s, height: s, background: c, filter: `blur(${s * 0.5}px)` }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: d, delay: dl, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40` }}
              >
                <motion.span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: GREEN_L }}
                  animate={{ scale: [1, 1.55, 1], opacity: [1, 0.45, 1] }}
                  transition={{ repeat: Infinity, duration: 1.7 }}
                />
                <span style={{ color: GREEN_L, fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                  {t.label}
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-serif font-extrabold leading-tight"
                style={{
                  fontSize: "clamp(1.85rem, 4vw, 2.9rem)",
                  background: `linear-gradient(135deg, #ffffff 45%, ${GREEN_L})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: `drop-shadow(0 0 28px ${GREEN}30)`,
                }}
              >
                {t.heading}
              </h2>

              {/* Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: 2, width: 72, borderRadius: 99, originX: 0.5, margin: "14px auto 0",
                  background: `linear-gradient(90deg, transparent, ${GREEN_L}, transparent)`,
                }}
              />

              {/* Sub-stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 mt-5"
                style={{ color: "rgba(255,255,255,0.40)", fontSize: 12 }}
              >
                <TrendingUp size={14} style={{ color: GREEN_L }} />
                <span style={{ color: "rgba(255,255,255,0.50)", fontWeight: 500 }}>
                  {lang === "hi" ? "लगातार बढ़ती उत्कृष्टता" : "Consistently growing excellence · CBSE Affiliated"}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STAT_META.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] }}
            >
              <Counter {...s} label={t.items[i]} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
