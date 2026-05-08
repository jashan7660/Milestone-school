import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The transformation in my daughter since joining The Milestone is truly remarkable. Teachers build confidence alongside academics — every child feels valued here.",
    author: "Mrs. Anita Verma",
    role: "Parent · Grade 8",
    initial: "A",
    color: "#16a34a",
  },
  {
    quote: "We wanted a school with strong values and modern infrastructure. The Milestone exceeded every expectation. Smart classrooms have ignited my son's love for Science.",
    author: "Mr. Rakesh Aggarwal",
    role: "Parent · Grade 11",
    initial: "R",
    color: "#2563eb",
  },
  {
    quote: "The personalized attention my children receive gives me immense peace of mind. The environment feels safe, nurturing, and deeply disciplined — exactly what we needed.",
    author: "Priya Sharma",
    role: "Parent · Grade 5 & 9",
    initial: "P",
    color: "#9333ea",
  },
  {
    quote: "Switching to The Milestone was the best decision before my board exams. The faculty's dedication helped me score brilliantly in 12th CBSE — I'm forever grateful.",
    author: "Aarav Gupta",
    role: "Alumnus · Batch 2023",
    initial: "A",
    color: "#ea580c",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    go((current + 1) % testimonials.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, go]);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => { startAutoPlay(); return () => stopAutoPlay(); }, [startAutoPlay, stopAutoPlay]);

  const item = testimonials[current];

  return (
    <section className="py-16 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #16a34a, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-foreground">
            What Our Community Says
          </h2>
        </motion.div>

        {/* Main testimonial card */}
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
                {/* Top row: avatar + stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)` }}
                    >
                      {item.initial}
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

                {/* Big decorative quote mark */}
                <div className="text-8xl font-serif leading-none mb-2 select-none" style={{ color: item.color, opacity: 0.18, lineHeight: 1 }}>
                  "
                </div>

                {/* Quote text */}
                <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed -mt-6">
                  {item.quote}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons */}
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

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? t.color : "var(--color-border)",
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
