import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, BookOpen, Star } from "lucide-react";

const stats = [
  { end: 15,   suffix: "+", label: "Years of Excellence",  icon: Star,          color: "#facc15" },
  { end: 1200, suffix: "+", label: "Happy Students",       icon: Users,         color: "#4ade80" },
  { end: 80,   suffix: "+", label: "Qualified Teachers",   icon: BookOpen,      color: "#60a5fa" },
  { end: 100,  suffix: "%", label: "Pass Percentage",      icon: GraduationCap, color: "#f472b6" },
];

function Counter({ end, suffix, label, icon: Icon, color }: typeof stats[0]) {
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
      <div className="text-white/70 font-medium text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function Stats() {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}>
            Our Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white">
            Trusted by families across Kaithal
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}
            >
              <Counter {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
