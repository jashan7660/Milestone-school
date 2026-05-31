import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, GraduationCap, Users, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Link } from "wouter";

export default function About() {
  const { lang } = useLanguage();
  const t = SITE[lang].about;

  const stats = [
    { value: "15+",   icon: Trophy,        color: "text-amber-500",  bg: "bg-amber-50",   label: lang === "hi" ? "वर्ष" : "Years" },
    { value: "1200+", icon: Users,         color: "text-green-600",  bg: "bg-green-50",   label: lang === "hi" ? "छात्र" : "Students" },
    { value: "80+",   icon: GraduationCap, color: "text-primary",    bg: "bg-primary/8",  label: lang === "hi" ? "शिक्षक" : "Teachers" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Video / Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Soft bg glow */}
            <div className="absolute -inset-6 rounded-3xl -z-10 opacity-40"
              style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, rgba(16,185,129,0.06) 60%, transparent 100%)" }}/>

            {/* Video wrapper */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/60"
              style={{ boxShadow: "0 20px 60px rgba(37,99,235,0.10), 0 4px 16px rgba(0,0,0,0.08)" }}>
              <video
                src="/about-video.mp4"
                autoPlay loop muted playsInline disablePictureInPicture
                className="w-full h-auto object-cover"
                style={{ pointerEvents: "none" }}
              />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-5 -right-5 hidden md:flex flex-col items-center px-5 py-4 rounded-2xl shadow-xl bg-white border border-border/60">
              <span className="text-4xl font-serif font-bold text-primary leading-none">15+</span>
              <AnimatePresence mode="wait">
                <motion.span key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                  className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide text-center mt-1">
                  {t.badge1}<br />{t.badge2}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl bg-white border border-border/60">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Trophy size={18} className="text-green-600"/>
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-foreground leading-none">100%</div>
                <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide mt-0.5">
                  {lang === "hi" ? "बोर्ड पास रेट" : "Board Pass Rate"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={lang} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>

                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-5">
                  {t.label}
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4 leading-tight tracking-tight">
                  {t.heading}{" "}
                  <span className="text-gradient">{t.accent}</span>
                </h2>

                <p className="text-muted-foreground text-base mb-7 leading-relaxed">
                  {t.body}
                </p>

                {/* Bullet points */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {t.points.map((point, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="flex items-start gap-2.5 bg-muted/40 rounded-xl px-4 py-3 border border-border/50 hover:border-secondary/40 hover:bg-secondary/5 transition-colors duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm leading-snug">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Mini stats row */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {stats.map((s, i) => (
                    <div key={i} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/50 ${s.bg}`}>
                      <s.icon size={16} className={s.color}/>
                      <span className={`text-lg font-serif font-bold ${s.color}`}>{s.value}</span>
                      <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg">
                    {lang === "hi" ? "हमारे बारे में और जानें" : "Learn More About Us"}
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
