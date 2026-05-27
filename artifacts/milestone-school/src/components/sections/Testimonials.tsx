import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const COLORS = ["#16a34a", "#2563eb", "#9333ea", "#ea580c"];

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = SITE[lang].testimonials;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    go((current + 1) % t.items.length, 1);
  }, [current, go, t.items.length]);

  const prev = useCallback(() => {
    go((current - 1 + t.items.length) % t.items.length, -1);
  }, [current, go, t.items.length]);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => { startAutoPlay(); return () => stopAutoPlay(); }, [startAutoPlay, stopAutoPlay]);

  const item = t.items[current];
  const color = COLORS[current % COLORS.length];

  return (
    <section className="py-16 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #16a34a, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-foreground">
            {t.heading}
          </h2>
        </motion.div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-3xl bg-card shadow-xl border border-border p-8 md:p-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                    >
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base">{item.author}</div>
                      <div className="text-muted-foreground text-sm">{item.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-8xl font-serif leading-none mb-2 select-none" style={{ color, opacity: 0.18, lineHeight: 1 }}>
                  "
                </div>

                <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed -mt-6">
                  {item.quote}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => { prev(); stopAutoPlay(); }}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { next(); stopAutoPlay(); }}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {t.items.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? COLORS[i % COLORS.length] : "var(--color-border)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
