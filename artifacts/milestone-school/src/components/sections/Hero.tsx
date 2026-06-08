import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Award, Sparkles, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { useLocation } from "wouter";

const PHOTO_DURATION = 8000;

export default function Hero() {
  const { lang } = useLanguage();
  const t = SITE[lang].hero;
  const [, setLocation] = useLocation();
  const [showVideo, setShowVideo] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const handleVideoEnded = () => {
    setShowVideo(false);
    timerRef.current = setTimeout(() => {
      setShowVideo(true);
    }, PHOTO_DURATION);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ isolation: "isolate" }}>

      <AnimatePresence mode="wait">
        {showVideo ? (
          /* ── VIDEO STATE: full-screen clean video, no text ── */
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
          >
            <video
              src="/hero-intro-video.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
              style={{ pointerEvents: "none" }}
            />
          </motion.div>
        ) : (
          /* ── PHOTO STATE: existing hero with photo + text ── */
          <motion.div
            key="photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
          >
            {/* Photo background */}
            <img
              src="/slide1.png"
              alt="The Milestone School Campus"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Gradient overlays */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, rgba(10,24,48,0.80) 0%, rgba(8,40,22,0.70) 50%, rgba(15,30,50,0.78) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(5,15,30,0.65) 0%, transparent 55%)",
              }}
            />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full h-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-0" style={{ left: "50%", transform: "translateX(-50%)" }}>

              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-7"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                  {t.badge}
                </span>
              </motion.div>

              {/* School Name */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-extrabold text-white leading-tight tracking-tight mb-3 drop-shadow-2xl"
                style={{ fontSize: "clamp(1.75rem, 6vw, 4.5rem)", textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
              >
                {t.title1}
                <br />
                <span style={{ color: "#4ade80", textShadow: "0 0 40px rgba(74,222,128,0.45)" }}>
                  {t.title2}
                </span>
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  originX: 0.5,
                  height: "2px",
                  width: "60px",
                  borderRadius: "999px",
                  marginBottom: "1rem",
                  background: "linear-gradient(90deg, transparent, #4ade80, transparent)",
                }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.72 }}
                className="font-light leading-relaxed mb-3 px-2 sm:px-0"
                style={{
                  fontSize: "clamp(0.9rem, 2.2vw, 1.35rem)",
                  color: "rgba(255,255,255,0.95)",
                  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  letterSpacing: "0.01em",
                }}
              >
                {t.tagline}
              </motion.p>

              {/* Sub-description */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.88 }}
                className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1.5 mb-6 sm:mb-10"
              >
                <span className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                  <Award size={12} style={{ color: "#4ade80" }} />
                  {t.cbse}
                </span>
                <span className="text-white/25 hidden xs:inline">|</span>
                <span className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={12} style={{ color: "#4ade80" }} />
                  {t.location}
                </span>
                <span className="text-white/25 hidden xs:inline">|</span>
                <span className="text-xs sm:text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                  {t.classes}
                </span>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              >
                {/* Apply Now — primary CTA */}
                <motion.button
                  onClick={() => { setLocation("/admissions"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full font-bold text-white text-sm sm:text-base overflow-hidden w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg, #15803d 0%, #22c55e 55%, #4ade80 100%)",
                    boxShadow: "0 8px 32px rgba(34,197,94,0.55), 0 0 0 1px rgba(74,222,128,0.3)",
                  }}
                >
                  {/* shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)" }} />
                  {/* pulsing outer glow */}
                  <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{ boxShadow: ["0 0 0 0px rgba(74,222,128,0.5)", "0 0 0 10px rgba(74,222,128,0)"] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                  />
                  <Sparkles size={15} className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">{t.apply}</span>
                  <ArrowRight size={15} className="flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                </motion.button>

                {/* Public Disclosure — secondary CTA */}
                <motion.button
                  onClick={() => { setLocation("/public-disclosure"); window.scrollTo({ top: 0 }); }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden w-full sm:w-auto"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* animated border */}
                  <span className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: "1.5px solid rgba(255,255,255,0.28)" }} />
                  <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: "1.5px solid rgba(96,165,250,0)" }}
                    animate={{ borderColor: ["rgba(96,165,250,0)", "rgba(96,165,250,0.6)", "rgba(96,165,250,0)"] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  />
                  {/* hover fill */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(255,255,255,0.10)" }} />
                  <FileText size={15} className="flex-shrink-0 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: "#93c5fd" }} />
                  <span className="relative z-10">{t.discover}</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hard bottom border — clean separation from next section ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ height: "6px", background: "linear-gradient(90deg, #16a34a, #2563eb, #8b5cf6, #16a34a)" }} />
    </section>
  );
}
