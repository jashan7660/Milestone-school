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
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                {/* ── Apply Now — gold/green spinning ring ── */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative rounded-full cursor-pointer w-full sm:w-auto"
                  onClick={() => { setLocation("/admissions"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  style={{ padding: "2.5px" }}
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute"
                      style={{
                        width: "200%",
                        height: "200%",
                        top: "-50%",
                        left: "-50%",
                        background: "conic-gradient(from 0deg,#16a34a,#4ade80,#f59e0b,#fbbf24,#22c55e,#16a34a)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                  </div>
                  <div
                    className="relative z-10 inline-flex items-center justify-center gap-3 px-9 py-[14px] rounded-full font-bold text-white text-base sm:text-lg w-full"
                    style={{ background: "rgba(6,10,28,0.92)", backdropFilter: "blur(16px)" }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -8, 15, 0], scale: [1, 1.18, 1, 1.18, 1] }}
                      transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                    >
                      <Sparkles size={18} style={{ color: "#4ade80" }} />
                    </motion.span>
                    <span>{t.apply}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                    >
                      <ArrowRight size={17} style={{ color: "#86efac" }} />
                    </motion.span>
                  </div>
                </motion.div>

                {/* ── Public Disclosure — blue/purple spinning ring ── */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative rounded-full cursor-pointer w-full sm:w-auto"
                  onClick={() => { setLocation("/public-disclosure"); window.scrollTo({ top: 0 }); }}
                  style={{ padding: "2.5px" }}
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute"
                      style={{
                        width: "200%",
                        height: "200%",
                        top: "-50%",
                        left: "-50%",
                        background: "conic-gradient(from 0deg,#2563eb,#8b5cf6,#ec4899,#06b6d4,#3b82f6,#2563eb)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                  </div>
                  <div
                    className="relative z-10 inline-flex items-center justify-center gap-3 px-9 py-[14px] rounded-full font-bold text-white text-base sm:text-lg w-full"
                    style={{ background: "rgba(6,10,28,0.92)", backdropFilter: "blur(16px)" }}
                  >
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <FileText size={18} style={{ color: "#7dd3fc" }} />
                    </motion.span>
                    <span>{t.discover}</span>
                  </div>
                </motion.div>
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
