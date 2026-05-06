import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, ChevronDown, GraduationCap, Star, Sparkles } from "lucide-react";
import heroImage from "@assets/ChatGPT_Image_May_4,_2026,_03_57_48_PM_1777890956257.png";

/* ── stagger helpers ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const fadeSlideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const titleLines = [
    ["Achieving"],
    ["milestones"],
    ["together."],
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[94vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Parallax background ── */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 scale-110">
        <img
          src={heroImage}
          alt="The Milestone Sr. Sec. School campus"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Overlay layers ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/82 via-primary/50 to-primary/8" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/18 via-transparent to-transparent" />

      {/* ── Animated shimmer orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[90px] z-[1] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/30 blur-[80px] z-[1] pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex items-center py-16">
        <div className="max-w-3xl w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary text-white text-sm font-semibold mb-8 shadow-lg shadow-secondary/30"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <Sparkles size={13} className="opacity-80" />
            Admissions Open — 2026–2027
          </motion.div>

          {/* ── Word-by-word staggered heading ── */}
          <div className="mb-6 overflow-visible">
            {titleLines.map((line, li) => (
              <motion.div
                key={li}
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap"
                style={{ transitionDelay: `${li * 0.1}s` }}
              >
                {line.map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordVariant}
                    className={`
                      mr-4 text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1.05] tracking-tight
                      ${li === 2 ? "text-gradient-hero drop-shadow-lg" : "text-white drop-shadow-md"}
                    `}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-1 w-24 rounded-full bg-gradient-to-r from-secondary to-secondary/30 mb-7"
          />

          {/* Subtext */}
          <motion.p
            {...fadeSlideUp(0.6)}
            className="text-lg md:text-xl text-white/88 mb-10 max-w-xl leading-[1.8] font-light tracking-wide"
          >
            A trusted CBSE school in Kaithal dedicated to shaping bright futures through quality education, modern infrastructure, and holistic development.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeSlideUp(0.78)} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#admissions")}
              className="
                group relative bg-secondary text-white text-base font-semibold px-9 h-14 rounded-full overflow-hidden
                shadow-[0_4px_28px_rgba(34,197,94,0.45)]
                hover:shadow-[0_8px_40px_rgba(34,197,94,0.60)]
                hover:-translate-y-1 active:translate-y-0
                transition-all duration-300
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply for Admission
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* shine sweep on hover */}
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 z-0" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#about")}
              className="
                group bg-white/12 text-white border border-white/40
                hover:bg-white/22 hover:border-white/60
                backdrop-blur-md text-base font-medium px-9 h-14 rounded-full
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-300
              "
            >
              Discover Our Campus
            </Button>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14"
          >
            {[
              { icon: BookOpen,      title: "CBSE Board",    sub: "Nursery – Class XII" },
              { icon: Users,         title: "Expert Faculty", sub: "Personalised care" },
              { icon: GraduationCap, title: "100% Result",   sub: "Class 10 · 2025-26" },
            ].map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="
                  bg-white/10 backdrop-blur-lg border border-white/22
                  px-5 py-4 rounded-2xl flex items-center gap-4 text-white
                  shadow-lg cursor-default
                "
              >
                <div className="bg-secondary p-2.5 rounded-xl text-white shrink-0 shadow-md">
                  <Icon size={19} />
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight tracking-wide">{title}</div>
                  <div className="text-white/65 text-xs mt-0.5 font-light">{sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Top-right badge */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute top-6 right-6 hidden md:flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/22 px-3.5 py-2 rounded-full text-white text-xs font-medium"
      >
        <Star size={12} className="fill-yellow-400 text-yellow-400" />
        Top CBSE School · Kaithal
      </motion.div>

      {/* Scroll chevron */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 9, 0] }}
        transition={{ delay: 1.4, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
