import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Link } from "wouter";

const CONFETTI = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899","#06B6D4"];

const CHECK_COLORS = ["#10B981","#2563EB","#F59E0B","#8B5CF6","#EF4444","#EC4899"];

export default function About() {
  const { lang } = useLanguage();
  const t = SITE[lang].about;

  return (
    <section id="about" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 45%, #0a2a1a 80%, #12103a 100%)" }}>

      {/* Animated orbs */}
      {[
        { w: 520, h: 520, x: "-8%",  y: "-25%", c: "#2563EB", dur: 11 },
        { w: 400, h: 400, x: "72%",  y: "50%",  c: "#10B981", dur: 14 },
        { w: 280, h: 280, x: "35%",  y: "65%",  c: "#8B5CF6", dur: 8  },
        { w: 200, h: 200, x: "62%",  y: "-15%", c: "#F59E0B", dur: 10 },
      ].map((o, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}20,transparent 70%)` }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
      ))}

      {/* Confetti dots */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
          style={{ left: `${(i * 43 + 7) % 93}%`, top: `${(i * 61 + 8) % 87}%`,
            backgroundColor: CONFETTI[i % CONFETTI.length], opacity: 0.35 }}
          animate={{ y: [0, -16, 0], opacity: [0.35, 0.65, 0.35], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3.5 + (i % 5) * 0.5, delay: (i * 0.18) % 3, ease: "easeInOut" }}/>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Video column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, rgba(16,185,129,0.10) 60%, transparent 100%)" }}/>

            <div className="relative w-full max-w-lg">
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-tl-2xl border-t-2 border-l-2 border-green-400/60 z-20 pointer-events-none"/>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-br-2xl border-b-2 border-r-2 border-blue-400/60 z-20 pointer-events-none"/>

              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: "1.5px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(37,99,235,0.20)" }}>
                <video src="/about-video.mp4" autoPlay loop muted playsInline disablePictureInPicture
                  className="w-full h-auto object-cover" style={{ pointerEvents: "none" }}/>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 hidden md:flex flex-col items-center px-5 py-4 rounded-2xl shadow-2xl"
                style={{ background: "linear-gradient(135deg,#2563EB,#1d4ed8)", border: "2px solid rgba(255,255,255,0.20)" }}>
                <span className="text-4xl font-serif font-bold text-white leading-none">15+</span>
                <AnimatePresence mode="wait">
                  <motion.span key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                    className="text-[11px] text-blue-200 font-bold uppercase tracking-widest text-center mt-1">
                    {t.badge1}<br />{t.badge2}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-2.5 px-5 py-3 rounded-2xl shadow-2xl"
                style={{ background: "linear-gradient(135deg,#10B981,#059669)", border: "2px solid rgba(255,255,255,0.20)" }}>
                <span className="text-2xl font-serif font-bold text-white">1200+</span>
                <span className="text-[11px] text-green-100 font-bold uppercase tracking-widest">Students</span>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={lang} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.30)" }}>
                  <Sparkles size={12}/> {t.label}
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-tight tracking-tight">
                  {t.heading}{" "}
                  <span style={{ background: "linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {t.accent}
                  </span>
                </h2>

                <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
                  {t.body}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {t.points.map((point, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 group"
                      style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${CHECK_COLORS[i % CHECK_COLORS.length]}25` }}>
                      <CheckCircle2 size={16} style={{ color: CHECK_COLORS[i % CHECK_COLORS.length], flexShrink: 0 }}/>
                      <span className="text-white/80 font-medium text-sm leading-snug">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link href="/about">
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "linear-gradient(135deg,#10B981,#059669)", color: "white", boxShadow: "0 8px 32px rgba(16,185,129,0.35)" }}>
                    {lang === "hi" ? "हमारे बारे में और जानें" : "Discover Our Story"}
                    <ArrowRight size={16}/>
                  </button>
                </Link>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
