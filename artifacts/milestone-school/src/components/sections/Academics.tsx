import { motion, AnimatePresence, useInView } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, GraduationCap, Users, Cpu, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";

/* ── Animated counter ── */
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1600, step = end / (dur / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const CARD_DATA = [
  { icon: BookOpen,    grad: "from-blue-600 to-blue-400",    glow: "rgba(37,99,235,0.25)",  border: "rgba(59,130,246,0.4)",   bg: "rgba(37,99,235,0.07)",  num: "01" },
  { icon: MonitorPlay, grad: "from-violet-600 to-violet-400", glow: "rgba(124,58,237,0.25)", border: "rgba(139,92,246,0.4)",   bg: "rgba(124,58,237,0.07)", num: "02" },
  { icon: FlaskConical,grad: "from-emerald-600 to-emerald-400",glow: "rgba(5,150,105,0.25)",  border: "rgba(16,185,129,0.4)",   bg: "rgba(5,150,105,0.07)",  num: "03" },
  { icon: Languages,   grad: "from-amber-500 to-orange-400",  glow: "rgba(217,119,6,0.25)",  border: "rgba(245,158,11,0.4)",   bg: "rgba(217,119,6,0.07)",  num: "04" },
];

const STATS = [
  { icon: Award,          value: 100, suffix: "%", labelEn: "Board Pass Rate",    labelHi: "बोर्ड पास रेट",     grad: "from-rose-500 to-pink-500"    },
  { icon: Users,          value: 80,  suffix: "+", labelEn: "Expert Teachers",    labelHi: "विशेषज्ञ शिक्षक",   grad: "from-blue-500 to-cyan-500"    },
  { icon: Cpu,            value: 30,  suffix: "+", labelEn: "Smart Classrooms",   labelHi: "स्मार्ट क्लासरूम",  grad: "from-violet-500 to-purple-500"},
  { icon: GraduationCap,  value: 15,  suffix: "+", labelEn: "Years of CBSE",      labelHi: "CBSE के वर्ष",       grad: "from-emerald-500 to-teal-500" },
];

/* floating bg icons */
const FLOATERS = [
  { Icon: BookOpen,     x: "8%",  y: "12%", size: 28, opacity: 0.07, dur: 9  },
  { Icon: FlaskConical, x: "88%", y: "8%",  size: 22, opacity: 0.06, dur: 11 },
  { Icon: GraduationCap,x: "5%",  y: "72%", size: 32, opacity: 0.05, dur: 13 },
  { Icon: Cpu,          x: "92%", y: "65%", size: 24, opacity: 0.06, dur: 10 },
  { Icon: Award,        x: "50%", y: "88%", size: 20, opacity: 0.05, dur: 8  },
  { Icon: Languages,    x: "75%", y: "30%", size: 18, opacity: 0.06, dur: 12 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Academics() {
  const { lang } = useLanguage();
  const t = SITE[lang].academics;
  const isHindi = lang === "hi";

  return (
    <section id="academics" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0d1117 0%, #0f1d35 35%, #0e1a2e 65%, #0b1520 100%)" }}>

      {/* ── Ambient orbs ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}/>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}/>
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #059669, transparent 70%)" }}/>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }}/>

      {/* ── Floating background icons ── */}
      {FLOATERS.map((f, i) => (
        <motion.div key={i} className="absolute pointer-events-none hidden lg:block"
          style={{ left: f.x, top: f.y }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: f.dur, ease: "easeInOut", delay: i * 0.7 }}>
          <f.Icon size={f.size} color="white" style={{ opacity: f.opacity }}/>
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-14">
          <AnimatePresence mode="wait">
            <motion.div key={lang} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(37,99,235,0.35)", backdropFilter: "blur(12px)" }}>
                <BookOpen size={12}/> {t.label}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-tight">
                {t.heading}{" "}
                <span style={{ background: "linear-gradient(90deg,#60a5fa,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.accent}
                </span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">{t.body}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {STATS.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-5 text-center overflow-hidden group"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(16px)" }}>
              {/* Glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${s.grad}`} style={{ opacity: 0 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.08")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0")}/>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gradient-to-br ${s.grad}`}>
                <s.icon size={20} className="text-white"/>
              </div>
              <div className="text-3xl font-serif font-extrabold text-white mb-1 tabular-nums">
                <Counter end={s.value} suffix={s.suffix}/>
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-medium">
                {isHindi ? s.labelHi : s.labelEn}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Academic cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {t.items.map((item, i) => {
            const meta = CARD_DATA[i];
            const Icon = meta.icon;
            return (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                whileHover={{ y: -8, boxShadow: `0 32px 64px ${meta.glow}` }}
                className="group relative rounded-3xl overflow-hidden p-7 transition-all duration-400"
                style={{ background: meta.bg, border: `1.5px solid ${meta.border}`, backdropFilter: "blur(20px)",
                  boxShadow: `0 8px 32px ${meta.glow.replace("0.25","0.08")}` }}>

                {/* Gradient corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${meta.grad} opacity-[0.07] pointer-events-none`}/>

                {/* Card number */}
                <div className="absolute top-5 right-6 text-6xl font-serif font-black opacity-[0.06] text-white select-none leading-none">{meta.num}</div>

                <div className="flex items-start gap-5 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${meta.grad} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 8px 24px ${meta.glow}` }}>
                    <Icon size={28} className="text-white"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-serif text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${meta.grad} opacity-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}/>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.4)} className="text-center">
          <Link href="/academics">
            <button className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#2563EB,#7c3aed)", color: "white", boxShadow: "0 8px 32px rgba(37,99,235,0.40)", border: "1px solid rgba(255,255,255,0.15)" }}>
              {isHindi ? "पूरा शैक्षणिक विवरण देखें" : "Explore Full Academics"}
              <BookOpen size={18}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
