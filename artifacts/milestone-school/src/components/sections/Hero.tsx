import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

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

      {/* ── Muted video background ── */}
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

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4"
        style={{ zIndex: 2 }}
      >

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Admissions Open — 2026–27
        </motion.div>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-serif font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          The Milestone
          <br />
          <span style={{ color: "#4ade80" }}>Sr. Sec. School</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 font-light leading-relaxed max-w-xl mb-10"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          Shaping bright futures through knowledge, character &amp; excellence.
          <br />
          <span className="text-white/55 text-sm">CBSE Affiliated · Kaithal, Haryana</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#admissions")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #16a34a, #22c55e)",
              boxShadow: "0 4px 24px rgba(34,197,94,0.45)",
            }}
          >
            Apply Now
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => scrollTo("#about")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white text-base border border-white/35 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
          >
            Discover More
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        style={{ zIndex: 2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
