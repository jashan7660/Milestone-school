import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, BookOpen, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const STAT_META = [
  {
    end: 20,   suffix: "+", icon: Star,
    color: "#facc15", glow: "#facc1540",
    gradient: "linear-gradient(135deg,#3d2e00,#1a1200)",
    border: "#facc1555",
    ring: "conic-gradient(from 0deg,#facc15,#f59e0b,#1a1200,#facc15)",
  },
  {
    end: 2000, suffix: "+", icon: Users,
    color: "#4ade80", glow: "#4ade8040",
    gradient: "linear-gradient(135deg,#0d3d20,#071a0e)",
    border: "#4ade8055",
    ring: "conic-gradient(from 0deg,#4ade80,#22c55e,#071a0e,#4ade80)",
  },
  {
    end: 100,  suffix: "+", icon: BookOpen,
    color: "#60a5fa", glow: "#60a5fa40",
    gradient: "linear-gradient(135deg,#0d1e4a,#060e28)",
    border: "#60a5fa55",
    ring: "conic-gradient(from 0deg,#60a5fa,#3b82f6,#060e28,#60a5fa)",
  },
  {
    end: 100,  suffix: "%", icon: GraduationCap,
    color: "#f472b6", glow: "#f472b640",
    gradient: "linear-gradient(135deg,#3d0d2e,#1a0613)",
    border: "#f472b655",
    ring: "conic-gradient(from 0deg,#f472b6,#ec4899,#1a0613,#f472b6)",
  },
];

function Counter({
  end, suffix, label, icon: Icon, color, glow, gradient, border, ring,
}: typeof STAT_META[0] & { label: string }) {
  const [count, setCount]     = useState(0);
  const [hovered, setHovered] = useState(false);
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration  = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative cursor-default"
      style={{ padding: "2px", borderRadius: 24 }}
    >
      {/* Spinning ring border */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 24 }}>
        <motion.div
          className="absolute"
          style={{
            width: "200%", height: "200%", top: "-50%", left: "-50%",
            background: ring,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </div>

      {/* Card body */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-8 overflow-hidden"
        style={{
          background: gradient,
          borderRadius: 22,
          minHeight: 200,
        }}
      >
        {/* Background glow blob */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${glow} 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0.5,
          }}
        />

        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.06) 50%,transparent 60%)",
            borderRadius: 22,
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "linear", repeatDelay: 1.5 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center mb-5"
          style={{
            width: 58, height: 58, borderRadius: 18,
            background: `${color}18`,
            border: `1.5px solid ${border}`,
            boxShadow: `0 0 18px ${glow}, 0 0 36px ${glow}`,
          }}
          animate={{
            boxShadow: hovered
              ? [`0 0 24px ${glow}, 0 0 48px ${glow}`]
              : [`0 0 12px ${glow}`, `0 0 24px ${glow}`, `0 0 12px ${glow}`],
          }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <Icon size={26} style={{ color }} />
        </motion.div>

        {/* Number */}
        <div
          className="relative z-10 font-serif font-extrabold tabular-nums leading-none mb-1"
          style={{
            fontSize: "clamp(2.6rem,5vw,3.6rem)",
            background: `linear-gradient(135deg, #ffffff 30%, ${color})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: `drop-shadow(0 0 8px ${color}60)`,
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
            className="relative z-10 font-semibold uppercase tracking-widest"
            style={{ fontSize: 10.5, color: `${color}cc`, marginTop: 6, letterSpacing: "0.12em" }}
          >
            {label}
          </motion.p>
        </AnimatePresence>

        {/* Bottom accent bar */}
        <div className="relative z-10 w-full mt-5 rounded-full overflow-hidden" style={{ height: 3, background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? "100%" : 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* Floating particle */
function Particle({ x, y, size, color, duration, delay }: { x: string; y: string; size: number; color: string; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: `blur(${size * 0.6}px)` }}
      animate={{ y: [0, -28, 0], opacity: [0.18, 0.45, 0.18] }}
      transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
    />
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  const t = SITE[lang].stats;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#050f08 0%,#071a10 40%,#060c1a 100%)" }} />

      {/* Large soft orbs */}
      <div className="absolute pointer-events-none" style={{ top: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(74,222,128,0.07) 0%,transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-15%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(96,165,250,0.07) 0%,transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ top: "30%", right: "20%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(244,114,182,0.05) 0%,transparent 70%)" }} />

      {/* Floating particles */}
      <Particle x="8%"  y="15%" size={8}  color="#4ade8066" duration={5.2} delay={0}   />
      <Particle x="20%" y="70%" size={5}  color="#60a5fa55" duration={6.8} delay={1.1} />
      <Particle x="75%" y="20%" size={7}  color="#facc1555" duration={4.9} delay={0.6} />
      <Particle x="90%" y="65%" size={6}  color="#f472b655" duration={7.1} delay={1.8} />
      <Particle x="50%" y="85%" size={4}  color="#4ade8044" duration={5.5} delay={2.2} />
      <Particle x="35%" y="10%" size={5}  color="#60a5fa44" duration={6.3} delay={0.3} />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

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
            <motion.div key={lang} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.28)" }}>
                <motion.span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: "#4ade80" }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                />
                <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {t.label}
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-serif font-extrabold leading-tight"
                style={{
                  fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                  background: "linear-gradient(135deg, #ffffff 40%, #4ade80 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(74,222,128,0.25))",
                }}
              >
                {t.heading}
              </h2>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-4"
                style={{
                  height: 2, width: 80, borderRadius: 99, originX: 0.5,
                  background: "linear-gradient(90deg, transparent, #4ade80, transparent)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {STAT_META.map((s, i) => (
            <motion.div
              key={s.color}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Counter {...s} label={t.items[i]} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
