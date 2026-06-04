import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, BookOpen, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const STAT_META = [
  { end: 15,   suffix: "+", icon: Star,          color: "#facc15" },
  { end: 1200, suffix: "+", icon: Users,         color: "#4ade80" },
  { end: 80,   suffix: "+", icon: BookOpen,      color: "#60a5fa" },
  { end: 100,  suffix: "%", icon: GraduationCap, color: "#f472b6" },
];

function Counter({ end, suffix, label, icon: Icon, color }: typeof STAT_META[0] & { label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
        style={{ background: `${color}22`, border: `1.5px solid ${color}44` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      <div className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/70 font-medium text-sm uppercase tracking-widest"
        >
          {label}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  const t = SITE[lang].stats;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0f2618 0%, #1a4030 50%, #0d1f28 100%)" }} />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #4ade80 0%, transparent 50%), radial-gradient(circle at 80% 50%, #60a5fa 0%, transparent 50%)" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <AnimatePresence mode="wait">
            <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}>
                {t.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white">
                {t.heading}
              </h2>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STAT_META.map((s, i) => (
            <motion.div
              key={s.color}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}
            >
              <Counter {...s} label={t.items[i]} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
