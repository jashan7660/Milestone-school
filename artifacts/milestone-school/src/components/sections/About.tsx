import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = SITE[lang].about;

  return (
    <section id="about" className="py-24 relative" style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #f8fffe 50%, #f0fff6 100%)" }}>
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: 60 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 Z" fill="#0f172a" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #16a34a, #1d4ed8)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <video
                  src="/about-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="w-full h-auto object-cover"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-border hidden md:flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-primary leading-none">15+</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide text-center mt-0.5"
                  >
                    {t.badge1}<br />{t.badge2}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="section-label mb-4">{t.label}</div>

                <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4 leading-tight tracking-tight">
                  {t.heading}{" "}
                  <span className="text-gradient">{t.accent}</span>
                </h2>

                <p className="text-muted-foreground text-base mb-7 leading-relaxed">
                  {t.body}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {t.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="flex items-start gap-2.5 group"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm leading-snug">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
