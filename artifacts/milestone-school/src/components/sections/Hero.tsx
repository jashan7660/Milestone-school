import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Award } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.volume = 0;
    v.play().catch(() => {});
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

      {/* ── Video ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Strong multi-layer overlay so text never merges with video ── */}
      <div className="absolute inset-0" style={{ zIndex: 1, background: "rgba(0,0,0,0.62)" }} />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(160deg, rgba(15,30,15,0.55) 0%, rgba(0,0,0,0.30) 50%, rgba(10,20,40,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
        style={{ zIndex: 2 }}
      >

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Admissions Open — Session 2026–27
          </span>
        </motion.div>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-extrabold text-white leading-tight tracking-tight mb-3 drop-shadow-2xl"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
        >
          The Milestone
          <br />
          <span style={{ color: "#4ade80", textShadow: "0 0 40px rgba(74,222,128,0.45)" }}>
            Sr. Sec. School
          </span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0.5, height: "2px", width: "80px", borderRadius: "999px", marginBottom: "1.25rem", background: "linear-gradient(90deg, transparent, #4ade80, transparent)" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          className="font-light leading-relaxed mb-3"
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
            color: "rgba(255,255,255,0.95)",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            letterSpacing: "0.01em",
          }}
        >
          Where Every Child's Potential Becomes Their Greatest Achievement
        </motion.p>

        {/* Sub-description */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.88 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10"
        >
          <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "rgba(255,255,255,0.70)" }}>
            <Award size={13} style={{ color: "#4ade80" }} />
            CBSE Affiliated School
          </span>
          <span className="text-white/25">|</span>
          <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "rgba(255,255,255,0.70)" }}>
            <MapPin size={13} style={{ color: "#4ade80" }} />
            Kaithal, Haryana
          </span>
          <span className="text-white/25">|</span>
          <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.70)" }}>
            Nursery – Class XII
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#admissions")}
            className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
              boxShadow: "0 6px 28px rgba(34,197,94,0.50)",
            }}
          >
            Apply Now
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo("#about")}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-medium text-white text-base transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              border: "1.5px solid rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Discover More
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
        style={{ zIndex: 2, color: "rgba(255,255,255,0.45)" }}
      >
        <ChevronDown size={30} />
      </motion.button>
    </section>
  );
}
